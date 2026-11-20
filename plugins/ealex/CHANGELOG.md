# ealex changelog

## 0.2.0 (2026-11-20)
- Working content moves to the Start connector (PRD "agents stay plugins"). Each work skill (`runway`, `weekly-review`, `investor-update`, `interview-synthesis`, `pivot-review`, `plan-read`, `idea-test`, `raise-prep`) now opens with the access check line, fetches its procedure with `agent_content` (agent `alex`), says its as-of date, and stops if the fetch fails. Hard limits stay in each skill's Rules.
- The router keeps identity, access check, routing, cadence and rules; the records table and rules (item `records`) and the cf-status / cf-continue / cf-update definitions (item `founder-verbs`) are fetched too.
- `raise-prep/raise-checklist.md` is removed from the plugin; it is content item `raise-checklist`.
- The router description quotes "Alex, cf-status" so the generated roster has a Say phrase.
- Needs guild-content `agents/alex/content/*.md` (11 items) merged before this ships.

## 0.1.1 (2026-11-17)
- Connect line says **Plugins** in the left sidebar (on Windows, still Customize for now; or name > Settings > Plugins). Anthropic renamed Customize to Plugins (support article 17740565).

## 0.1.0 · 2026-11-16
- First preview. Skills: `alex` (router, access, records, cf- verbs, rules), `runway` (cash model, default-alive and raise-by dates), `weekly-review` (one metric, weekly target, kill/continue/double-down), `investor-update` (monthly, cash first), `interview-synthesis` (scripts per premise, transcripts scored against premises), `pivot-review` (persevere, iterate or pivot memo), `plan-read` (stage-aware fundability read), `idea-test` (falsifiable premises, cheapest tests), `raise-prep` (round size, target list, materials, with the raise checklist).
- Shared records in the member's Start folder under `coworkers/alex/records/`: cash, metrics, hypotheses, investors, decisions.
- Same shared `start` connector entry as every agent plugin. Needs an `alex` product on the Start connector before the access check passes.
