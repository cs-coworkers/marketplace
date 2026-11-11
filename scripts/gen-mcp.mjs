// Writes the shared Start connector entry into every agent plugin (PRD 5.2, D3).
// Source of truth: connectors/start.json. `--check` exits 1 if any plugin's .mcp.json differs.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const cfg = JSON.parse(readFileSync(new URL('../connectors/start.json', import.meta.url), 'utf8'));
const check = process.argv.includes('--check');
let bad = 0;
for (const [plugin, env] of Object.entries(cfg.plugins)) {
  const url = cfg.urls[env];
  if (!url) throw new Error(`no url for env ${env}`);
  const want = JSON.stringify({ mcpServers: { [cfg.server]: { type: 'http', url } } }, null, 2) + '\n';
  const path = new URL(`../plugins/${plugin}/.mcp.json`, import.meta.url);
  const have = existsSync(path) ? readFileSync(path, 'utf8') : '';
  if (have === want) { console.log(`ok    ${plugin} → ${url}`); continue; }
  if (check) { console.log(`DIFF  ${plugin}`); bad++; continue; }
  writeFileSync(path, want); console.log(`wrote ${plugin} → ${url}`);
}
process.exit(bad ? 1 : 0);
