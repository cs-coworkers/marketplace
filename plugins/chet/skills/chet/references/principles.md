# Principles — the durable lessons

Transferable prompting lessons in plain words. Behind almost every fix is one of these; learn the principle and you get better on your own, not just for one prompt. Pair with `prompting.md`.

**Tell it the goal, not just the task.** A prompt that says what to *do* gets a generic answer. One that says what the result is *for* and what "good" looks like gets a useful one. Add the audience and the success test.

**Show, don't just tell.** One good example of the output you want is worth a paragraph of description. If the shape matters, paste an example. Two or three and the model copies the pattern.

**Give it a role.** "You are a careful financial analyst" or "a friendly support agent" sets tone, vocabulary, and judgment in a few words — cheaper and more reliable than describing the style you want.

**Specify the shape of the answer.** Say bullets or prose, how long, what sections, JSON or plain text. Unspecified, the model guesses — and guesses differently each time. Naming the shape kills inconsistency.

**Give it room to think.** For anything with reasoning — math, logic, planning, tricky judgment — ask it to work through the steps first, or turn on extended thinking. Answers it reasons toward beat answers it blurts.

**Put the important stuff where it'll be seen.** Models pay most attention to the start and end of a prompt. Lead with the key instruction; don't bury it mid-wall.

**One prompt, one job.** A prompt that asks for five things does each one worse. Split big asks into steps — it also makes each step easier to fix.

**Say what to do, not just what to avoid.** "Write in short sentences" beats "don't be verbose." Positive instructions give a target; negatives just fence off territory.

**Name your success test.** Before sending, finish: "the output is good if ___." Put that in the prompt. If you can't finish the sentence, that's why the output keeps disappointing you.

**Let it say "I don't know."** If you want facts, supply the source material and explicitly allow "I'm not sure." Otherwise it fills the gap with something plausible and wrong.

**Prompting is editing, not divination.** You rarely nail it first try — that's normal. Draft, see where it misses, change one thing, re-run. Two or three quick passes beat agonizing over a perfect first prompt.
