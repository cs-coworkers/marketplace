# Giving Claude tools and connectors

<!-- CORE (~250w): answer from this by default, then offer "more". Reveal MORE only if asked. -->

Claude does far more when it can reach the outside world — read live data, act on real systems — through tools and connectors. The craft is knowing when to add one, and not trusting it blindly once you have.

- **When to add one.** If a task needs *current* data, or needs to *act* on a real system (your files, calendar, a database, an API), connect a tool. If everything Claude needs is already in front of it, keep it inline — don't add machinery you don't need.
- **Describe tools like prompts.** A tool's description is how Claude decides whether to use it — state clearly what it does and when to use it, the same discipline as a good prompt.
- **Least privilege, read-only where you can.** Give a tool the narrowest access that does the job. If Claude only needs to read, don't grant write — a capable agent will *offer* to do more than you intended.
- **Probe before you rely.** Authorization is not access: a connector can be "connected" yet unable to reach the specific thing you need. Test that it can actually do the job before building on it.
- **Degrade honestly.** When a tool is unavailable, Claude should say so — not pretend it acted.

*Want more — the "connected but can't see it" traps and the scheduled-run gotcha?*

## More

**Authorization ≠ installation ≠ scope.** "Signed in" doesn't mean the integration is installed, and "installed" doesn't mean it can see the specific repo, folder, or account you care about. When something that *should* work returns "not found," suspect scope before assuming the resource is missing — the access often just hasn't been granted to that item.

**Identity isn't binding.** Who you appear to be signed in as is not proof of which account or workspace a connector actually points at. Probe the connector itself — read something back — before stating where it's pointed.

**Unattended auth fails.** Interactive sign-in (OAuth) can't complete inside a scheduled or background run. Pre-authorize in a normal session first, or the automated run quietly fails or falls back.

**Read vs write is a safety line, not a detail.** For anything shared or canonical, grant read-only and keep the write path separate — and enforce it at the permission layer, because instructions alone won't stop a capable agent from trying to write.

**Verify the result, not the attempt** (see `reliability-and-verification.md`) — a tool call described as done still needs its outcome confirmed.
