---
name: investor-update
description: "Draft the founder's monthly investor update, cash first, from Alex's records: runway, KPIs as trends, lowlights with root cause, 1–3 specific asks, and follow-through on last month's asks. Also a shorter version for prospective investors. Used by Alex when the founder asks for an investor update or when the monthly one is due.\n"
---

# Investor update

A regular update keeps investors helping and makes the next raise easier; a skipped one reads as bad
news. Format follows investor guidance (Visible, https://visible.vc/blog/investor-updates/; NFX on
updates in tough times, https://www.nfx.com/post/investor-updates-tough-times).

## Cadence
Monthly at pre-seed and seed; quarterly is fine after Series A. Monthly (or every two weeks) whenever
runway is under 6 months. Same day each month.

## Steps
1. **Read** `cash.md`, `metrics.md`, `decisions.md`, `hypotheses.md`, `investors.md` (who gets it,
   last month's asks and who answered), and last month's update in `output/` if there is one.
2. **Check freshness.** If `cash.md` is older than 35 days, run **runway** first. If `metrics.md` has
   no value for the last week, ask for it. Never send stale numbers as current.
3. **Ask the founder** only what the records can't say: the month's highlights, what went wrong, and
   what they need.
4. **Draft** (under 400 words, plain text that pastes into email):
   - **Subject:** `<Company> update, <Month YYYY>: <the one-line headline>`
   - **TL;DR:** 2–3 lines, the headline number first.
   - **Cash:** balance, net burn, runway in months; default alive yes/no. Runway with and without
     forecast revenue if they differ.
   - **Metrics:** primary metric and 2–3 others, each with last month and the 3-month trend. Same
     metrics, same definitions, every month; say so when one changes.
   - **Highlights:** up to 3, each with a number.
   - **Lowlights:** 1–3, each with the root cause and the fix. Never skip this section.
   - **Asks:** 1–3, specific and easy to act on (a named intro, a hire profile, a customer type).
   - **Last month's asks:** who helped, with thanks by name; what is still open.
5. **Prospect version** (optional): the same update minus confidential numbers, for warm prospects in
   `investors.md`. Ask which numbers to hold back.
6. **Cross-check** every number against the records. Any mismatch is fixed before the draft is shown.
7. **Save** the draft to `output/YYYY-MM-DD-investor-update.md` after a yes, and propose
   `investors.md` rows for the new asks.

## Rules
- The founder sends it. Alex never emails investors.
- Bad news early and plain; never bury it below the highlights.
- No forward-looking promises the founder hasn't made; no benchmark claims without a source.
- Sam can tune the voice if the member has Sam; the numbers stay Alex's.
