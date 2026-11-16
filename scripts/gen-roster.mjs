// Generates Chet's agent roster from the plugins at release time, so a new agent appears without
// Chet editing anything (Chet handoff 2026-11-16, "eAgent roster at release", item B).
//
// Source of truth: every plugin listed in connectors/start.json (the agents that use Start), its
// entry in .claude-plugin/marketplace.json, and the description of each of its skills.
//
// Writes into a guild-content checkout (default ../guild-content):
//   agents/roster.json                     data for the connector tool chet_agents
//   chet/tutorials/which-agent-can-help.md the table between <!-- roster:start --> and <!-- roster:end -->
// Everything outside the markers stays Chet's words.
//
//   node scripts/gen-roster.mjs [--out ../guild-content] [--check]
// --check writes nothing and exits 1 when either file would change.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const args = process.argv.slice(2);
const check = args.includes('--check');
const outIdx = args.indexOf('--out');
const OUT = resolve(outIdx >= 0 ? args[outIdx + 1] : join(ROOT, '..', 'guild-content'));

const START = '<!-- roster:start -->';
const END = '<!-- roster:end -->';

/** The `description:` of a SKILL.md: a quoted string, a plain line, or a folded `>` / `|` block. */
export function skillDescription(text) {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!fm) return '';
  const lines = fm[1].split(/\r?\n/);
  const i = lines.findIndex((l) => /^description:/.test(l));
  if (i < 0) return '';
  const head = lines[i].replace(/^description:\s*/, '');
  if (/^[>|][-+]?\s*$/.test(head)) {
    const body = [];
    for (const l of lines.slice(i + 1)) {
      if (l.trim() && !/^\s/.test(l)) break;
      body.push(l.trim());
    }
    return body.join(' ').replace(/\s+/g, ' ').trim();
  }
  if (head.startsWith('"')) {
    try {
      return JSON.parse(head).replace(/\s+/g, ' ').trim();
    } catch {
      return head.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
    }
  }
  return head.replace(/^'|'$/g, '').trim();
}

/** Phrases a member says to call the agent: the quoted examples in the router skill, minus slash commands. */
export function triggers(desc) {
  const out = [];
  for (const m of desc.matchAll(/["“]([^"”]{2,80})["”]/g)) {
    const p = m[1].trim();
    if (!p.startsWith('/') && !out.includes(p)) out.push(p);
  }
  return out;
}

/** The marketplace description, without the name lead-in, the version tag and the install boilerplate. */
export function summary(desc, name) {
  const s = desc
    .replace(new RegExp(`^${name}(,\\s+your managed [^:]+:|\\s+)\\s*`), '')
    .replace(/\s*v\d+\.\d+\.\d+\.?\s*$/, '')
    .split(/(?<=\.)\s+/)
    .filter((s) => !/^(Access|Content and access|Install Chet first|Records live|Preview\.|Needs a browser)/.test(s))
    .join(' ')
    .trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const STOP = new Set(
  'a an the and or to of in on for with how do i my is it can what when where why does this that be use used user member members asks ask by from your you their they them its as at any each every one first after before into once this, coworkers global addresses skill owns turn when addressed'.split(
    ' ',
  ),
);
export const words = (s) =>
  s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 2 && !STOP.has(w));

export function buildRoster(root) {
  const market = JSON.parse(readFileSync(join(root, '.claude-plugin', 'marketplace.json'), 'utf8'));
  const start = JSON.parse(readFileSync(join(root, 'connectors', 'start.json'), 'utf8'));
  const agents = [];
  for (const plugin of Object.keys(start.plugins)) {
    const entry = market.plugins.find((p) => p.name === plugin);
    if (!entry) throw new Error(`${plugin} is in connectors/start.json but not in marketplace.json`);
    const id = plugin.replace(/^e/, '');
    const name = entry.displayName ?? id[0].toUpperCase() + id.slice(1);
    const skillsDir = join(root, 'plugins', plugin, 'skills');
    const skills = readdirSync(skillsDir)
      .filter((d) => existsSync(join(skillsDir, d, 'SKILL.md')))
      .sort()
      .map((d) => ({ id: d, description: skillDescription(readFileSync(join(skillsDir, d, 'SKILL.md'), 'utf8')) }));
    const router = skills.find((s) => s.id === id);
    if (!router) throw new Error(`${plugin} has no router skill skills/${id}/SKILL.md`);
    const kw = new Set([...words(entry.description), ...skills.flatMap((s) => [...words(s.id.replace(/-/g, ' ')), ...words(s.description)])]);
    for (const w of words(name)) kw.delete(w);
    agents.push({
      id,
      name,
      plugin,
      version: entry.version,
      status: /\bPreview\b/.test(entry.description) ? 'preview' : 'available',
      summary: summary(entry.description, name),
      says: triggers(router.description).filter((t) => t.toLowerCase().startsWith(name.toLowerCase())).concat(
        skills.filter((s) => s.id !== id).flatMap((s) => triggers(s.description)).filter((t) => t.toLowerCase().startsWith(name.toLowerCase())),
      ).filter((t, i, a) => a.indexOf(t) === i && !/^\w+,\s*…$/.test(t)).slice(0, 4),
      browser: /Claude in Chrome/.test(entry.description),
      skills: skills.map((s) => s.id),
      keywords: [...kw].sort(),
    });
  }
  // Chet first (installed first, onboards the rest), then the order of connectors/start.json.
  agents.sort((a, b) => (a.id === 'chet' ? -1 : b.id === 'chet' ? 1 : 0));
  return { generated_by: 'cs-coworkers/marketplace scripts/gen-roster.mjs', agents };
}

const cell = (s) => s.replace(/\|/g, '/').replace(/\s+/g, ' ').trim();

export function rosterTable(roster) {
  const rows = roster.agents.map((a) => {
    const say = a.says.length ? a.says.map((t) => `"${t.replace(/…$/, '…')}"`).join(', ') : `"${a.name}, …"`;
    const needs = (a.id === 'chet' ? 'Start connector' : `Chet first, then "Chet, onboard ${a.name}"`) + (a.browser ? '; Claude in Chrome' : '');
    return `| **${a.name}** | ${cell(a.summary)} | ${cell(say)} | ${needs} | ${a.status === 'preview' ? 'Preview' : 'Available'} |`;
  });
  return [
    START,
    '<!-- Generated at release by cs-coworkers/marketplace scripts/gen-roster.mjs from each plugin\'s description and skills. Edit the plugins, not this table. -->',
    '| Agent | Ask it for | Say | Needs | Status |',
    '|---|---|---|---|---|',
    ...rows,
    END,
  ].join('\n');
}

/** Puts the table between the markers. With no markers yet, replaces the first markdown table under "## The agents". */
export function spliceTable(md, table) {
  const s = md.indexOf(START);
  const e = md.indexOf(END);
  if (s >= 0 && e > s) return md.slice(0, s) + table + md.slice(e + END.length);
  const h = md.indexOf('## The agents');
  if (h < 0) throw new Error('which-agent-can-help.md has neither roster markers nor a "## The agents" heading');
  const lines = md.slice(h).split('\n');
  const first = lines.findIndex((l) => l.startsWith('|'));
  if (first < 0) throw new Error('no table under "## The agents"');
  let last = first;
  while (last + 1 < lines.length && lines[last + 1].startsWith('|')) last++;
  lines.splice(first, last - first + 1, table);
  return md.slice(0, h) + lines.join('\n');
}

/**
 * The Say phrases already in the published table, by agent name. A plugin whose skills quote no
 * "<Name>, …" example keeps the phrases Chet wrote, so a regeneration never loses them.
 */
export function sayFromTable(md) {
  const out = {};
  for (const line of md.split('\n')) {
    const m = /^\|\s*\*\*([^*]+)\*\*\s*\|[^|]*\|([^|]*)\|/.exec(line);
    if (m) out[m[1].trim()] = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]).filter((t) => !/^\w+,\s*…$/.test(t));
  }
  return out;
}

function main() {
  const roster = buildRoster(ROOT);
  const jsonPath = join(OUT, 'agents', 'roster.json');
  const mdPath = join(OUT, 'chet', 'tutorials', 'which-agent-can-help.md');
  if (!existsSync(mdPath)) throw new Error(`not a guild-content checkout: ${OUT}`);
  const kept = sayFromTable(readFileSync(mdPath, 'utf8'));
  for (const a of roster.agents) if (!a.says.length && kept[a.name]?.length) a.says = kept[a.name];
  const json = JSON.stringify(roster, null, 2) + '\n';
  const md = spliceTable(readFileSync(mdPath, 'utf8'), rosterTable(roster));
  let bad = 0;
  for (const [path, want] of [
    [jsonPath, json],
    [mdPath, md],
  ]) {
    const have = existsSync(path) ? readFileSync(path, 'utf8') : '';
    if (have === want) {
      console.log(`ok    ${path}`);
      continue;
    }
    if (check) {
      console.log(`DIFF  ${path}`);
      bad++;
      continue;
    }
    writeFileSync(path, want);
    console.log(`wrote ${path}`);
  }
  console.log(`agents: ${roster.agents.map((a) => `${a.id} ${a.version}`).join(', ')}`);
  process.exit(bad ? 1 : 0);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
