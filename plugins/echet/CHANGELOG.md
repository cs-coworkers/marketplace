# chet (plugin name `echet` from 2.0.4)

## 2.0.5 (2026-11-12)
- Connect line: Cowork, not Code; Customize > Plugins > Chet > Connectors; Connect twice; set the Start tools to Always allow; or `start_diagnose` `not_connected`.
- start-setup: storage is `local` on Cowork and Code unless the member asks for Google Drive; ask once if the Drive connector is on (no longer picks Drive just because the connector is on).
- start-health: show the three fixes the rubric names (first three failed checks, in rubric order), not one fix for each of the 2 weakest areas.
- New route: "load my context", "read my docs", "bring my old folder in" → `procedures/context-load/SKILL.md` in the member's Start folder.
- `plugin_version` sent to `start_report_issue` is 2.0.5.

## 2.0.4 (2026-11-12)
- Plugin renamed `chet` → `echet` (shown to members as Chet) so it cannot collide with older plugins named `chet` on an account and shows as a new plugin. Skills, triggers ("Chet, …") and tools are unchanged. The marketplace `renames` map carries existing installs over.

## 2.0.3 (2026-11-12)
- Chet onboards agents, tests them and manages problems (PRD 5.4, 5.5): three new routes in the `chet` skill that call `start_onboard_plan`, `start_onboard_step`, `start_onboard_verify`, `start_diagnose` and `start_report_issue`. The knowledge stays on the Start connector.
- Hard limits written into the skill. Approval wording: an account that Coworkers.Global has not approved is told the email it signed in with.

## 2.0.2 (2026-11-11)
- Bundled Start connector restored (`.mcp.json` → https://start.coworkers.global/mcp), on Charlie's instruction to try another route.

## 2.0.1 (2026-11-11)
- Skills only: the bundled `.mcp.json` is removed (PRD rule 4 Q1). The Claude desktop app did not show 2.0.0 on a test machine. Add the Start connector (https://start.coworkers.global/mcp) as a custom connector.

## 2.0.0 (2026-11-11)
- New Chet for Start: skills `chet`, `start-setup`, `start-health`; content and access come from the Start connector at https://start.coworkers.global/mcp (`.mcp.json` generated from `connectors/start.json`).
- Replaces the v1.1.0 fetch_brain design. Shipped straight to the one Start server (Charlie 2026-11-11: no staging build).

## v1.1.0 — 2026-06-28 (Doctrine depth slice 1, Block 4)
Topic routing across the three new perishable brain files; `fetch_brain` reads stay exclusive
to the connector.

- **Routing table.** The loader now fetches `index.md` first (entitlement probe + source of
  truth), then routes the question to the right file: `current/model-reference.md` (lineup / IDs
  / limits / cutoffs — **narrowed**, no longer owns pricing or model choice),
  `current/model-choice.md` (which model for a job), `current/connectors.md` (connector/MCP
  catalog), `current/pricing.md` (prices + cost levers). Multi-topic questions fetch each file;
  `index.md`'s own table wins on any disagreement.
- **Degrade honesty.** The bundled dated floor only covers the model lineup/IDs, so on
  `brain_unavailable` / absent connector Chet degrades to the floor for those, but for
  pricing/connectors/model-choice it says it can't quote them live rather than guess. Still never
  a repo read; never current facts from memory.
- Connector interface widened to `path ∈ {index.md, current/model-reference.md,
  current/model-choice.md, current/connectors.md, current/pricing.md}` (chet-worker allowlist +
  z.enum, doctrine-depth slice 1 Block 3).

## v1.0.0 — 2026-06-27 (A3)
First committed source-of-record for the client-facing Chet loader. Established canonical
(the A1/A2 prototype lived only as an installed Cowork copy, never in git).

- **Exclusive-connector routing (A3 / PRD v1.6 §5.4, §8, §13.8; finding #1).** Current Claude
  model facts are read **only** via the Chet Model-A connector's `fetch_brain` tool
  (`index.md`, then `current/model-reference.md`). No GitHub/`get_file_contents` side-door.
- **Degrade contract.** On `brain_unavailable:<kind>` or an absent connector, degrade **only**
  to the bundled dated floor (`references/model-reference-floor.md`, as of 2026-06-12) and tell
  the user it may be behind. On an entitlement message (pending/renew), say access isn't active
  and don't quote current facts from memory. Never read the brain from a repo.
- **Name precedence (finding #2).** When the user addresses "Chet" by name, this skill owns the
  turn — it no longer defers to host orientation/other skills that share a word.
- **Bundled craft.** `references/` ships the durable craft brain (principles, prompting, agent
  design, context engineering, eval method, reliability, tool/connector use) — answered locally,
  not fetched (v1).

Connector interface (`cs-coworkers/chet-worker`, `fetch_brain`): `path ∈ {index.md,
current/model-reference.md}`; returns `(as of <date>)` + text on success, a plain enrollment
message when the seat isn't `active`, or `brain_unavailable:<kind>` (isError) to trigger degrade.

Open before client use: A4 tenancy on ≥2 genuinely external accounts (revoke proven on the
exclusive-connector path, no side-door); Clarice's no-memory guardrail eval.
