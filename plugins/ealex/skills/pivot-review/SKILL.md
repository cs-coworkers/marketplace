---
name: pivot-review
description: "A pivot-or-persevere decision memo built from the founder's accumulated evidence: premises and confidence, the metric trend, runway, and what customers said, ending in persevere, iterate or pivot with reasons and the next test. Used by Alex quarterly, when the founder asks \"should we pivot\" or \"is this working\", or when the weekly review or interviews trigger it.\n"
---

# Pivot review

Founders pivot too late more often than too early, and when they pivot they often change the wrong
thing. This review forces the call on the evidence already in the records, at a set time, so the
decision isn't made in a bad week or avoided in a good one (Eric Ries, The Lean Startup: pivot or
persevere meetings on a regular cadence).

## When
- Quarterly, by default.
- Triggered: 3+ missed weekly targets in a row; a core premise below 30% confidence; runway under 9
  months while default dead; or the founder asks.

## Steps
1. **Read everything relevant:** `hypotheses.md` (all premises, evidence, confidence history),
   `metrics.md` (the last 12 weeks), `cash.md` (runway, default alive), `decisions.md` (past
   calls and pivots), the latest interview syntheses in `output/`, `goals.md`.
2. **State the bet as it stands** in one paragraph: who the customer is, the problem, the solution,
   how it makes money, why now.
3. **Evidence table:** each core premise, its confidence then and now, the strongest evidence for and
   against, and its trend.
4. **Traction read:** the primary metric's growth against its target; is the curve bending, flat, or
   carried by one source? Retention if there is any.
5. **Time available:** runway and raise-by date from `cash.md`. How many more test cycles fit.
6. **Options**, each with what it would take and what it keeps:
   - **Persevere:** the current plan; what has to be true by when.
   - **Iterate:** change one element (segment, channel, price, feature) and keep the rest.
   - **Pivot:** name the type (customer segment, customer need, platform, business model, channel,
     zoom-in or zoom-out) and what evidence supports that direction.
   - **Stop** when the evidence and runway both say so; say it plainly and kindly.
7. **Recommendation:** one option, with confidence, the single strongest reason, and the strongest
   argument against it.
8. **The test:** the next falsifiable premise, the cheapest test, the timebox, and the number that
   means "it worked". Route the test to **idea-test** if it needs designing.
9. **Save** the memo to `output/YYYY-MM-DD-pivot-review.md` and propose the `decisions.md` line once
   the founder decides. Write after a yes.

## Rules
- The founder decides. Alex recommends once, then supports the decision.
- A pivot keeps what was learned: carry still-true premises forward in `hypotheses.md`.
- No survivor stories as evidence ("Slack pivoted from a game"). Use this company's evidence.
