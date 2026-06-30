# Context engineering — what you put in front of Claude

A model's context window isn't just storage — it's attention. Everything you include competes for that attention, so *what* and *where* you put things changes the answer as much as the wording does.

**Relevant beats more.** It's tempting to paste everything "just in case," but extra material dilutes the signal and can pull the model off-target. Include what the task actually needs and cut the rest. A tight, well-chosen context outperforms a giant one.

**Position matters.** Attention concentrates at the start and end of what you provide. Put the key instruction and the most important material there; don't bury something critical in the middle of a long block.

**Ground facts in what you supply.** Don't rely on the model to remember specifics — names, numbers, current details. If accuracy matters, paste the source and ask it to work from that, and let it flag when something isn't in the material.

**Label and separate your inputs.** When you give several pieces — a document, some data, an instruction — mark clearly what each is ("Here is the contract:", "Here is the question:"). Clear boundaries stop the model from confusing your instructions with the content it's supposed to act on.

**Long conversations drift.** As a thread grows, older turns linger and crowd the window, and the model can lose the thread of what matters now. When a conversation gets long or the topic shifts, summarize the state you want to keep and carry that into a fresh start, rather than dragging the whole history along.

**For big reference material, give a map, not the territory.** If you have a large body of knowledge, don't dump all of it every time. Provide an overview or index and pull in only the section a given question needs. This keeps the working context lean and the answers sharp — and it scales as the reference grows.

**Watch the budget.** Bigger contexts cost more and can respond slower. Spend the window on what earns its place; trimming is usually cheaper and better than adding.
