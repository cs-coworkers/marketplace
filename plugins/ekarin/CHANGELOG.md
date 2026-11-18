# ekarin changelog

## 0.1.2 (2026-11-18)
Testing method from a member's own routine (LTCareNav, 2026-11-16):
- **Personas:** the test plan holds made-up visitors and how they answer; a new **persona run** ("Karin, persona run") takes one persona through every tool and logs each answer. Questions the persona doesn't cover go to the member and are added to the persona.
- **Cross-tool consistency:** the plan names which tools should agree; persona runs build a tool × persona table and flag outliers.
- **Channels per journey:** screen, email, PDF, login, dashboard and lead, each with its own status; a channel that disagrees with the screen is a fail (checklist C6, C7, D6 to D9).
- **Report per test and per element:** each test gets a table of its steps and channels against the expected behavior the plan defines ahead of time.
- **Agreed test data:** the plan proposes "Test Karin <persona>", ZIP 00000 and a test inbox, and records who agreed.
- **Bring your method:** Karin can't read other chats, so she asks for the method to be pasted or saved to `coworkers/karin/input/` and builds it into the plan.

## 0.1.1 (2026-11-17)
- Connect line says **Plugins** in the left sidebar (on Windows, still Customize for now; or name > Settings > Plugins). Anthropic renamed Customize to Plugins (support article 17740565).

## 0.1.0 · 2026-11-13
- First preview. Skills: `karin` (router, access, rules), `site-test` (quick and full runs, findings file), `test-plan` (interview plus read-only site walk, writes the member's test plan).
- Same shared `start` connector entry as every agent plugin.
