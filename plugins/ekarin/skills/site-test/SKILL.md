---
name: site-test
description: >
  Karin's test run on the member's website: quick mode after every change, full mode for a first
  or complete run. Works from coworkers/karin/test-plan.md, ends with a findings file in the
  Start folder. Used by Karin when the member asks to test the site, a tool, or a lead flow.
---

# Site test

Items: `checklist.md` in this folder. Findings file format: `report-template.md` in this folder.

## Modes
| Mode | When | What runs |
|---|---|---|
| **quick** | After every change or round of dev; scheduled runs; one named tool | Tier 1 journeys in the plan + checklist items marked `Q` |
| **full** | First run on a plan, before a launch, monthly, or on request | every journey in the plan + every checklist item |

## Steps
1. **Load the plan.** Read `coworkers/karin/test-plan.md`. None → say so, run **test-plan** first,
   and stop here. Note the mode, the site, and what changed (ask the member in one line if you
   don't know: "what changed since the last run?"; "don't know" is fine).
2. **Set up.** Read the clock for every time you write. Use the test data and submission rules in
   the plan, nothing else. Open a new browser tab for the run; leave the member's other tabs alone.
3. **Gate first.** Home page and the first step of the top journey load. If they don't, that is the
   finding: report it as the root cause and mark the rest "blocked".
4. **Walk the journeys** in the plan, in tier order. For each step record what you did and what
   you saw. Where the plan gives **known answers** (input → expected result), enter the input and
   compare the result word for word or number for number; a result that appears but differs is a
   **fail**. Where the plan allows a submission (for example a lead with the test ZIP), submit it,
   then check where it should land (back office, lead list, inbox) only if the member is signed in
   there; record the arrival time, or "could not check: not signed in".
5. **Work the checklist** for the mode. Status each item: `pass` + evidence, `fail` + evidence,
   `intermittent`, `could not test` + why, `stopped before submit`, or `n/a` + why.
6. **Retry every fail once** in a fresh tab before calling it broken. Failed twice → `fail`;
   failed then passed → `intermittent`.
7. **Grade.** Severity from `checklist.md` § Severity. Each fail gets steps to reproduce, expected
   vs actual, page, width and time. Findings from your own judgment of a page (not a measured rule)
   are marked **Hypothesis**.
8. **Compare with last time.** Read the newest earlier findings file. Mark each earlier finding
   `fixed`, `still open` or `not re-checked`, and each new one `new`.
9. **Write the findings file** from `report-template.md`: show the member the summary in chat and
   say the file you'll write (`coworkers/karin/output/YYYY-MM-DD-site-test-<quick|full>.md`); write
   after a yes. Scheduled runs: the member's yes when they set up the schedule covers this file.
   Lead with what costs the business (broken lead flow, wrong answers, broken on phones), then the
   developer detail, then what wasn't tested.
10. **Hand back.** One line in chat: counts (new, fixed, still open), the worst finding, and the
    file. Never send the report anywhere; the member's team reads it in the shared Start folder.

## Done when
Every journey and in-mode item has a status with evidence, every fail was retried, the findings
file is written (or the member declined), and the member has the one-line summary.

## If it fails
- **Bot check, CAPTCHA or sign-in wall** → `could not test`; never try to get around it. Ask the
  member to sign in, or to allow the test in the plan.
- **A click would create a real record** the plan doesn't allow → stop before it.
- **The browser can't do a check** (no phone-size window, no script access) → `could not test`
  with the reason.
- **Run too long for one chat** → stop at a journey boundary; the findings file is the memory;
  the next run picks up from it.
