---
name: runway
description: "Alex's monthly cash model: balance, net burn, runway, default-alive date, raise-by date, and cut, bridge or raise scenarios, kept in coworkers/alex/records/cash.md. Used by Alex when the founder asks about runway, burn, hiring or spend, or when the monthly refresh is due.\n"
---

# Runway

The question this answers, every month: **if nothing changes, do we reach profitability before the
cash runs out, and when must the next raise start?** (Paul Graham, "Default Alive or Default Dead?",
https://paulgraham.com/aord.html). Most failed startups ran out of cash; most founders don't know
their answer.

## Steps
1. **Read** `cash.md` and `metrics.md` (last month's model and its assumptions), `goals.md`, `now.md`.
2. **Get this month's actuals.** Ask for, or read from an export the founder points to (bank,
   Mercury, QuickBooks, Stripe): cash balance today, last 3 months of revenue and total spend,
   committed hires and big one-off costs. If a finance connector is available, offer to read it.
   Never estimate a balance.
3. **Compute:**
   - Net burn = spend − revenue, as a 3-month average and last month.
   - Runway (months) = cash ÷ net burn, at both burns. Runway date.
   - Revenue growth rate: compounded monthly (CMGR) over the last 3–6 months, not an average of rates.
   - **Default alive?** Project revenue at that growth rate and spend at the plan. Alive if revenue
     crosses spend before cash hits zero. Give the crossover month, or "never at this rate".
   - **Raise-by date** = the date runway falls to the time a raise takes plus a buffer. Default: start
     raising with 9+ months of runway left (raises take 3–6 months, and seed-to-A now often takes
     2–3 years). Say the assumption.
   - Growth needed to be default alive with today's cash.
4. **Scenarios** (one line each, with runway and default-alive result): base; spend cut (name what
   gets cut to reach default alive); the planned hire(s); raise (amount, close month); bridge from
   insiders if runway < 12 months.
5. **Read it out**, plain: "Runway 14 months (to Jan 2028). Default dead: at 6% monthly growth you
   need 11%. Start raising by May 2027." Then the one decision this month's numbers ask for.
6. **Propose** the new dated rows for `cash.md` (and `metrics.md` for revenue), plus a line in
   `decisions.md` if the founder makes a call. Write after a yes.

## Triggers to raise unprompted
- Runway under 12 months: offer the bridge/cut/raise comparison.
- Runway under 6 months: say it first, every session, until it changes.
- Default-alive flips (either way): say it first.
- A spend or hiring question: run the scenario before answering.

## Rules
- Net burn and gross burn are labeled; never mix them.
- Bookings are not revenue; one-time fees are not recurring revenue (a16z, https://a16z.com/16-startup-metrics/).
- Show the formula once, then the numbers. Round to the month.
- You model; the founder's accountant handles tax and accounting treatment.
