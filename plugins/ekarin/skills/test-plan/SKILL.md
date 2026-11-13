---
name: test-plan
description: >
  Build or update the member's website test plan (coworkers/karin/test-plan.md): what Karin tests,
  in what order, with which test data, what counts as broken, and what she may submit. Used by
  Karin when there is no plan yet, when the member adds or changes tools, or on "set up testing".
---

# Test plan

The plan is the member's rules for Karin. Every run follows it; nothing outside it gets submitted.

## Steps
1. **Read what exists:** `coworkers/karin/test-plan.md` (update it, don't start over), `goals.md`,
   `now.md`, and any notes the member points to (for example an existing testing skill or checklist
   their team uses: ask "do you already test this by hand or with a Claude skill? Can I read it?").
   An existing manual routine is the best starting point: keep its order and its checks.
2. **Walk the site, read-only.** List the main pages, every tool (quizzes, calculators, finders,
   search or ask boxes), every form, and anything that creates an account or a lead. Submit nothing.
3. **Ask the member**, one at a time, short answers fine ("don't know" is fine; mark it open):
   1. If I could check only three things after every change, which three?
   2. What counts as broken for you? (a lead that doesn't reach you, a wrong result, an email that
      doesn't go out, a page broken on phones…)
   3. For each tool, can you give one or two inputs with the result you know is right?
   4. What may I submit, and with what test data? (test ZIP or email, a test account, giveaway
      entries, a test message to a chat or ask box) How should test records be marked, and who
      deletes them?
   5. Where does a lead land, and how fast? (back office, lead list, inbox) Will someone be signed
      in to it in the browser when I run?
   6. When should I run: after every round of changes, daily, both? How will I know something
      changed?
   7. Who reads the findings? (they read them in this Start folder; share the folder with them)
   8. Who visits the site? (older visitors, phone-first, a region) This sets the widths and checks.
4. **Draft the plan** in the format below. Rank journeys: Tier 1 = losing it costs leads, money or
   trust, or gives a wrong answer; Tier 2 = other tools; Tier 3 = content pages. Every Tier 1
   journey has a written expected outcome.
5. **Show the plan** in chat and say where it goes (`coworkers/karin/test-plan.md`). Write after a
   yes. Then offer a first full run: "Karin, full test".

## Plan format
```
---
id: karin-test-plan
type: test-plan
owner: <member>
updated: YYYY-MM-DD
---
# Test plan: <site>

## Site and visitors
- URL: · Who visits: · Widths to test: 360, 390, 768, 1280 (+ others)

## When to run
- quick: <after every change / daily at HH:MM / both> · full: <monthly / before launches>
- How Karin learns of a change: <the member says so / a deploy note / unknown>

## Test data and submission rules
- Test data: <e.g. name "Test Karin", ZIP 00000, email test+karin@…>
- Allowed submissions: <each exact one, or "none">
- Never submit: <…>
- Marking and clean-up: <how test records are marked; who deletes them>

## Journeys
| Tier | Journey | Steps (start → end) | Expected outcome | Known answers | Where it lands |
|---|---|---|---|---|---|

## Top three quick checks
1. … 2. … 3. …

## Who reads findings
- <names; they read coworkers/karin/output/ in the shared Start folder>

## Open questions
- <anything the member didn't know yet>
```

## Rules
- Read-only while walking: no sign-ups, entries, messages or leads.
- Never put passwords, keys or real customer details in the plan.
- Never invent an expected result; leave it open and ask.
