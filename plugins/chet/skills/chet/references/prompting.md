# Prompting — how to get better output from Claude

<!-- CORE (~250w): answer from this by default, then offer "more". Reveal the MORE section only if asked. -->

Most weak output traces to one of these. Find the symptom, apply the fix.

| Symptom | Cause | Fix |
|---|---|---|
| Generic / misses the point | Goal stated as a task, not an outcome | Add the *why* and what good looks like: who it's for, the success criteria |
| Inconsistent run to run | Underspecified — the model fills gaps differently each time | Pin format, length, constraints; add an example |
| Wrong tone | No audience or role given | Assign a role ("you are a…") and name the audience |
| Right content, unusable shape | No output format | Specify structure: headings, schema, bullet count, max length |
| Ignores half the instructions | Too many asks, or buried/conflicting ones | One job per prompt; key rules at the top |
| Shallow on hard problems | No room to reason | Ask it to think step by step, or enable extended thinking |
| Makes things up | Asked for facts it lacks; no "say if unsure" | Supply the source; permit "I don't know" |
| Off-target despite detail | Told only what *not* to do | Convert negatives to positives ("do X" beats "don't do Y") |
| Format drifts in long output | No example of the target shape | Give one filled example (one-shot) |
| Too verbose or terse | Length never specified | State target length and density |

If a prompt is too thin to fix, add the highest-leverage missing piece first: **the goal/success test**, then **the audience**, then **any hidden input** (a document or format it operates on).

*Want more — turning a good prompt into a reusable template, and a pre-send checklist?*

## More

**Turn a good prompt into a reusable template.** When you run the same kind of task ≈3+ times with different inputs, and the structure is stable while the content changes, templatize it. Don't templatize a one-off. A good template has: a fixed role/framing; the task with `{{variables}}` for the changing parts (use `{{snake_case}}`, descriptive names, a one-line note on what each expects); a fixed output format (much of the reuse value); fixed constraints; and one fully filled example that doubles as documentation and a test. Keep variables to the genuinely-changing parts — over-parameterizing makes a template hard to fill. When you improve it later, bump the version and keep the old one.

**Pre-send checklist.**
- Outcome + success criteria stated (not just a task)?
- Role and audience named?
- Output format specified?
- One example if the shape matters?
- Source supplied for any facts, with permission to say "I don't know"?
- One job, key rules at the top?
