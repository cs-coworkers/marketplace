# linkedin-connect — changelog

## v1.0.2 — 2026-10-09
Guide, Setup step 2: install from the `cs-coworkers/marketplace` plugin marketplace is now the main route (it gets
updates); the zip upload and the paste-into-a-Project routes stay as fallbacks. No behavior change.

## v1.0.1 — 2026-10-09
Renamed from `linkedin-connect-staging` (Charlie, 2026-10-09: "staging" read as a test build). Plugin, skill
folder, `name`, `id` and titles changed; behavior unchanged. Already installed the old name? Uninstall
`linkedin-connect-staging`, then install `linkedin-connect`.

## v1.0.0 — 2026-10-09 (as linkedin-connect-staging)
First marketplace release. `skills/linkedin-connect-staging/` is a byte copy of the skill's v1.0 source
(`SKILL.md` md5 212018722b45b86150b1a1520eb581bc, `references/guide.md` md5 2e2e62804a889d38c128535468084ce7).

- Stages one tab per approved person at the final **Send** or **Accept**; the person clicks every send.
- Skips existing 1st-degree connections; accepts a profile match only on two or more agreeing signals.
- Hard stops: 20 tabs per sitting, about 50 invitations per week, and a full stop on any LinkedIn warning or check.
