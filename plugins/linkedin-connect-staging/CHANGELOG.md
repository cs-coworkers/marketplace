# linkedin-connect-staging — changelog

## v1.0.0 — 2026-10-09
First marketplace release. `skills/linkedin-connect-staging/` is a byte copy of the skill's v1.0 source
(`SKILL.md` md5 212018722b45b86150b1a1520eb581bc, `references/guide.md` md5 2e2e62804a889d38c128535468084ce7).

- Stages one tab per approved person at the final **Send** or **Accept**; the person clicks every send.
- Skips existing 1st-degree connections; accepts a profile match only on two or more agreeing signals.
- Hard stops: 20 tabs per sitting, about 50 invitations per week, and a full stop on any LinkedIn warning or check.
