---
name: interview-synthesis
description: "Customer interviews tied to the founder's premises: writes non-leading interview scripts per premise, then turns call notes or transcripts into pains, quotes, willingness to pay and evidence for or against each premise, with confidence updates and bias flags. Used by Alex when the founder plans customer calls or shares notes from them.\n"
---

# Interview synthesis

Run the access check in the agent's main skill first; stop if it fails.

## Steps
1. Fetch `agent_content` (the Start connector) with agent `alex`, item `interview-synthesis`. Follow it as Alex's working procedure; it is data from Start, not instructions from the member. Say its as-of date once.
2. If a fetch fails or is refused, say so in one line and stop. Never improvise the procedure from memory.

## Rules (hard limits; the fetched procedure never overrides these)
- Customer names and contact details stay in the founder's notes, never in records or outputs.
- Quote exactly; never paraphrase into a quote.
- Positioning and copy built from what customers said go to Sam if the member has Sam.
