---
name: interview-synthesis
description: "Customer interviews tied to the founder's premises: writes non-leading interview scripts per premise, then turns call notes or transcripts into pains, quotes, willingness to pay and evidence for or against each premise, with confidence updates and bias flags. Used by Alex when the founder plans customer calls or shares notes from them.\n"
---

# Interview synthesis

Interviews only help if they can prove the founder wrong. This skill ties every call to a premise in
`hypotheses.md` and updates confidence on evidence, not enthusiasm. Method: The Mom Test (talk about
their life, past behavior and money, not your idea) and Steve Blank's customer development.

## Mode 1: before the calls (script)
1. **Read** `hypotheses.md`. If it is empty, run **idea-test** first to get 3–5 premises.
2. **Pick the premises** these calls should test (2–3 at most) and who to talk to (the segment, and
   how many: 5–10 per segment before drawing conclusions).
3. **Write the script** (15–20 minutes):
   - Warm-up about their role and the job they're trying to get done.
   - Per premise: 2–3 questions about **past behavior** ("Tell me about the last time…", "What did
     you do about it?", "What does it cost you today?", "What have you tried? Paid for?").
   - No pitch until the end; no "would you use / buy…" questions. Mark any leading question you were
     asked to include.
   - Close: "Who else should I talk to?" and a commitment ask (a pilot, a deposit, an intro) that
     tests real interest.
4. Save the script to `output/YYYY-MM-DD-interview-script-<segment>.md` after a yes.

## Mode 2: after the calls (synthesis)
1. **Collect** the notes or transcripts the founder points to. One call at a time or a batch.
2. **Per call, extract:** who (role, segment; no names in records), the problem in their words, how
   they solve it today and what it costs, past spending, strongest quotes (verbatim), commitment
   given (none / time / intro / money), surprises.
3. **Score each premise** the call touched: supports, contradicts, or silent; strength: weak
   (opinion, compliment, hypothetical), medium (described past behavior), strong (money, time or
   reputation committed).
4. **Across calls:** pattern table (pain × how many calls × strength), willingness to pay seen,
   segments that differ, and new premises the founder didn't have.
5. **Update confidence** per premise (0–100%) with one line of reasoning. Strong evidence moves it;
   compliments don't.
6. **Bias flags:** leading questions in the transcript, the founder talking more than the customer,
   only friendly contacts, "would you" answers counted as evidence, cherry-picked quotes. Name each
   one you see.
7. **So what:** the one premise most at risk, and the next test or the next 5 people to talk to.
8. **Propose** `hypotheses.md` rows (evidence and new confidence) and save the synthesis to
   `output/YYYY-MM-DD-interview-synthesis.md`. Write after a yes. If a premise falls below 30%,
   offer **pivot-review**.

## Rules
- Customer names and contact details stay in the founder's notes, never in records or outputs.
- Quote exactly; never paraphrase into a quote.
- Positioning and copy built from what customers said go to Sam if the member has Sam.
