# Chet loader — changelog

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
