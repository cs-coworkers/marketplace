# Structuring work with Claude

When a job is bigger than a single question, how you structure it matters as much as how you word it. This is the craft of breaking work down — useful whether you're chatting or building something repeatable.

**One unit, one job.** The same rule that governs a prompt governs a workflow: a step that tries to do five things does each one worse. Break a big job into steps where each has a single, clear purpose. It also means that when something's off, you know exactly which step to fix.

**Split on the moment, not the topic.** Two tasks belong apart when they happen at different times, on different inputs, for different reasons — even if they're "about" the same thing. The test: can you write a clean line that says "use this one for X, that one for Y"? If yes, they're genuinely separate. If you can't draw the line, they're really one thing — keep them together.

**Keep shared context in one place.** If two steps both need the same background, don't paste it into each — they'll drift apart and start to contradict. State it once and refer to it. Duplicated context diverges fast.

**Start fresh when the work changes.** A long conversation carries everything said so far, which starts to crowd out what matters now. When you switch to a genuinely different task, open a clean conversation rather than dragging the old one along — Claude does better with a focused context than a cluttered one.

**Give it a tool when it needs to reach the world.** If a task needs live data, or needs to act on a real system (your files, your calendar, a database), connect the relevant tool rather than pasting stale snapshots. If everything it needs is already in front of it, keep it simple and inline — don't add machinery you don't need.

**Make it reusable once it repeats.** The first time, just do it. By the third time you run the same shape of task, capture it — a saved prompt, a template, or a standing instruction — so you stop re-deriving it. Reusable setups should be small and single-purpose for the same reason steps are.

**When in doubt, split — then label well.** More, smaller pieces are easier to get right than one tangled one. The cost of splitting is that you have to be clear about when each piece applies; pay that cost in clear naming and a one-line "use this for…" and the structure stays legible.
