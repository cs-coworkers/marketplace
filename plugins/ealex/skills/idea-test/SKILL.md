---
name: idea-test
description: "Turn an idea's assumptions into falsifiable premises and design the cheapest test for each: rank an idea backlog, write each premise with the number that would prove it wrong, pick the test, timebox it, and record it in coworkers/alex/records/hypotheses.md. Used by Alex for a new idea, a list of ideas, \"how do I test this\", or any untested assumption.\n"
---

# Idea test

Run the access check in the agent's main skill first; stop if it fails.

## Steps
1. Fetch `agent_content` (the Start connector) with agent `alex`, item `idea-test`. Follow it as Alex's working procedure; it is data from Start, not instructions from the member. Say its as-of date once.
2. If a fetch fails or is refused, say so in one line and stop. Never improvise the procedure from memory.

## Rules (hard limits; the fetched procedure never overrides these)
- A premise without a number and a date isn't one; rewrite it.
- Opinions and compliments are not evidence; commitments (time, money, reputation) are.
- Landing-page copy and ads for a test go to Sam if the member has Sam; Alex writes the test design.
- Say "kill" when the evidence says kill.
