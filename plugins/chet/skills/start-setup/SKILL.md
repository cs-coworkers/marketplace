---
name: start-setup
description: >
  Use when the member asks Chet to set up Start ("Chet, set up Start", "make my Start folder",
  "get started with Start"). Runs the setup loop against the Start connector, one step at a time,
  writing files with the member's own Drive or folder access.
---

# Set up Start

Run this loop. The connector holds the steps; you carry them out.

1. `start_whoami`. If it fails or Start is not active, follow the access rules in the **chet**
   skill and stop.
2. Work out two things, and ask the member only if you cannot tell:
   - `host`: `claude-cowork`, `claude-code` or `claude-web` (the app you are running in).
   - `storage`: `gdrive` (Google Drive, preferred when the Google Drive connector is on) or `local`.
3. `start_setup_plan` with `host` and `storage`. Show the member the steps as a short numbered
   list with one line each. If it returns a warning (nearest path), tell the member.
4. For each step id, in order: `start_setup_step` with `step_id`, `host`, `storage`.
   - Do what its instruction text says.
   - If it lists files it writes: for each path, call `start_template_file` with that path, and
     write the exact text it returns. Follow its overwrite rule: `never` means skip a file that
     already exists; `if-unchanged` means replace it only if the member did not edit it.
   - If it has a question for the member, ask it once and use the answer.
   - Before writing, say in one line what you will write and where. Wait for a yes once per step,
     not once per file.
   - Go to the step id it names as next. Stop at `done`.
5. At `health-baseline`, follow the **start-health** skill, then continue.
6. At `done`, tell the member what now exists and the one next thing to do.

## If something fails
- A step text or file is refused (for example "scope is missing"): tell the member that this part
  of Start is not ready yet, skip it, and continue. Do not write a placeholder.
- A tool error: retry once. If it fails again, stop and tell the member which step stopped.
