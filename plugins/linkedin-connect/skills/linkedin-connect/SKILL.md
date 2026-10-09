---
name: linkedin-connect
description: "Stages LinkedIn connection invitations for a list of people: finds each person's profile, skips anyone already connected, drafts a short personal note, and opens one browser tab per person stopped at the final Send (or Accept) click. The human clicks every Send. Use when someone says 'connect with these people on LinkedIn', 'send LinkedIn invites to this list', 'stage my LinkedIn connections', or hands over names, emails or profile links to connect with."
metadata:
  id: "linkedin-connect"
  type: "procedure"
  owner: "clarice"
  status: "active"
  updated: "2026-10-09"
  scope: "universal"
  version: "1.0.1"
  layer: "org"
  executor: "hybrid"
  surface: "claude-account-skill"
  entry: ""
  on: "phrase: connect with these people on LinkedIn"
  requires: "browser, email.read (optional)"
  secrets: ""
  gates: "send (the human clicks Send in LinkedIn)"
  effects: "external"
  live: "no"
  output-check: "one staged tab per approved person + the tracker rows for this sitting"
---

# LinkedIn connect: invitations ready to send, one click each

You prepare. The person clicks. LinkedIn's User Agreement bans software that adds contacts automatically, so you
never click **Send**, **Send without a note**, **Accept**, **Withdraw** or **Ignore**. Every invitation goes out by
the person's own hand. Background, limits and setup are in `references/guide.md`.

## Read first
- `references/guide.md`: why the human clicks, LinkedIn's limits, note templates, and setup. Read it once per session.

## Hard stops (check before every step)
- Never click a button that sends, accepts, withdraws or ignores anything.
- At most 20 tabs per sitting, and about 50 invitations per week per account, unless the person sets a lower number.
- Stop everything and tell the person if LinkedIn shows a warning, a CAPTCHA, an identity check, an "email required"
  prompt, or any notice about restricted activity. Do not try to get around it.
- Skip anyone who asked not to be contacted, and anyone the person tells you to skip.

## Steps
1. **Get the list.** Accept names, email addresses, profile links, or a source to build from (an email label, a search
   term, a spreadsheet). For each person record: full name, email, employer or email domain, location if known, and how
   the person knows them (one line). Check: every row has a full name plus at least one other signal.
2. **Clean it.** Remove duplicates, people who said "stop" or unsubscribed, and the person's own accounts.
   Check: say how many rows went in and how many came out, and why each was dropped.
3. **Check the account.** Open LinkedIn in the person's Chrome. Note whether the account is Premium: the invitation
   dialog says "You have unlimited notes with Premium". Free accounts get only a few notes a month, so save notes for
   the warmest people. Open the received-invitations page (My Network → Invitations) and note anyone on the list who has
   already invited the person. Those get **Accept**, not Connect.
4. **Skip existing connections.** For each name, search People with the 1st-degree filter
   (`linkedin.com/search/results/people/?keywords=<First%20Last>&network=%5B%22F%22%5D`).
   A matching 1st-degree result → mark "already connected" and skip. Check: each row is marked connected or not.
5. **Find the right profile.** Search People by name plus employer (or email domain, or city). Accept a match only when
   at least two signals agree: name plus employer, location, school, email domain, or mutual connections. Common
   names usually need three. Ambiguous → mark "needs the person" and do not stage it. Never guess.
6. **Draft the notes.** One note per person, at most 300 characters (the dialog shows a counter), first name first,
   one honest line on how you know each other, one line on why you want to connect, signed with the person's name.
   Use the templates in `references/guide.md`. No links, no pitch, no flattery.
7. **Get approval.** Show a table: name, matched profile (headline + location), how they know each other, the note,
   and the click (Connect or Accept). Wait for the person's OK, with any edits, before opening any tabs.
8. **Stage one tab per person.** Open a new tab, run the People search from step 5, and on the matched result:
   - **Connect** shown on the result → click it.
   - **Follow** or **Message** shown instead → open the profile and use **More → Connect**.
   - They already invited the person → open the profile and leave it showing **Accept**. Stop there.
   - **Pending** shown → an invitation is already out. Skip and note it.
   In the dialog, click **Add a note**, click inside the text box, type the approved note, and stop.
   Check: zoom on the dialog and confirm the counter is above 0 and the text matches word for word. If the box is
   empty, click inside it and type again. Then go to the next person.
9. **Hand over.** List the tabs in order: name → the button to click (Send or Accept). Ask the person to read each
   note before clicking, and to close any tab they don't want to send.
10. **Record.** Add one row per person to the tracker (format in `references/guide.md`): date staged, profile link,
    note, status (staged / sent / accepted / skipped and why). Update it when the person reports what they sent.

## Done when
Every approved person has a tab open at the final click (or is listed as skipped, with the reason), and the tracker has
a row for each one.

## Follow-up (on request, or at the next sitting)
- **Accepted:** draft a short thank-you message for the person to send. One line, no pitch.
- **Pending over 3 weeks:** suggest the person withdraw it (they click). LinkedIn blocks a new invitation to the same
  person for about 3 weeks after a withdrawal.
- **Many pending invitations:** keep the total under about 500. Clear old ones before staging more.

## If it fails
- Text box still empty after typing → click inside the box, type again, zoom to confirm.
- No Connect on the result or the profile → try **More → Connect**. If it still isn't there, the person limits who can
  invite them: mark "can't connect" and offer a message or a follow instead.
- The dialog closes when switching tabs → stage that tab again (step 8).
- The browser isn't reachable → ask the person to open Chrome with the Claude extension signed in, then retry once.
- Any LinkedIn warning, limit notice, CAPTCHA or check → stop all staging and report it word for word.
- Several people with the same name and no second signal → leave them for the person (step 5).
