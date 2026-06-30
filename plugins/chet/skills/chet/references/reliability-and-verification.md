# Getting reliable results from Claude

<!-- CORE (~250w): answer from this by default, then offer "more". Reveal MORE only if asked. -->

Claude writes fluently whether or not it's right — and confident, polished text is the easiest thing to mistake for correct. Reliability is mostly about not trusting the surface.

- **Fluent ≠ correct.** Read the substance, not the polish. Any fact, number, name, or claim deserves a check against a real source — confidence in the wording is not evidence.
- **Ground facts in what you supply.** If accuracy matters, give Claude the source material and let it say "I'm not sure." Asked for facts it doesn't have, it fills the gap with something plausible and wrong.
- **Don't trust memory for things that change.** Prices, versions, who-holds-what, what's live today — these go stale. Have Claude check the current source rather than answer from training, and note the as-of date.
- **"Described" isn't "done."** If Claude says it sent the email, deployed the change, or saved the file, confirm the *result* — don't assume the action happened because it was narrated.
- **Put the check in the loop.** For anything that matters or repeats, add an explicit verification step instead of eyeballing. Vibes drift; a check doesn't.

The cheapest read that settles a question is almost always worth it.

*Want more — why confident claims are the riskiest, and how to make verification stick?*

## More

**Positive claims are the dangerous ones.** "It's not connected" sounds tentative; "it's connected to account X" sounds like knowledge — and is just as likely to be a guess. Treat any confident assertion about live state (identity, connection, capability, a current value, a status) as needing a source, *especially* when it sounds certain. If it didn't come from an actual check, verify or hedge.

**Cite what you checked.** "As of {date}, per {source}" beats an unsourced claim — it tells the reader how much to trust it and when to re-check.

**For automated or repeated work, verification can't be a habit — it has to be a step.** A prompt that says "double-check" only *raises the odds* Claude checks; it doesn't guarantee it. Durable reliability comes from a check built into the workflow — a test, a confirmation read, a second pass — not from hoping the model remembers. The more important or unattended the task, the more the check has to be structural rather than instructional.
