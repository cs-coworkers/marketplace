---
id: linkedin-connect-guide
type: doc
owner: clarice
status: active
updated: 2026-10-09
scope: universal
---

# LinkedIn connect: the guide

For the person using it and for Claude. Read once before the first sitting.

## What it does
You give Claude a list of people. Claude finds each person on LinkedIn, skips anyone you're already connected to, writes
a short personal note, and gets back your OK. Then it opens one Chrome tab per person, each stopped one click from done.
You go through the tabs and click **Send** (or **Accept** when they already invited you).
Ten people take about two minutes of your time.

## Why you click Send, not Claude
- LinkedIn's User Agreement (section 8.2) prohibits bots or other automated methods to "add or download contacts".
  LinkedIn's help page on prohibited software says tools that automate activity can get an account restricted or shut down.
- LinkedIn offers no official API for sending invitations.
- An invitation is a message in your name, so it's yours to send. Claude does the research and the drafting.
  You make the decision and the click.
- Claude still clicks inside LinkedIn to set up each tab. Keeping the volume low and human-paced (see the limits below)
  keeps this sensible. Account risk is yours, so stop if LinkedIn warns you.

## Setup (once)
1. **Claude** with skills turned on.
   - Free, Pro or Max: Settings → Capabilities → turn on "Code execution and file creation".
   - Team or Enterprise: your organization's owner turns on skills under Organization settings → Plugins & skills.
2. **Install the skill.** Zip the `linkedin-connect` folder. In Claude go to **Customize → Skills**
   (https://claude.ai/customize/skills), click **+**, then **+ Create skill → Upload a skill**, and choose the zip.
   - No skills? Paste `SKILL.md` and this guide into a Project's instructions instead. It works the same way.
3. **Claude in Chrome.** Install the extension (https://claude.ai/chrome) in the Chrome where you're signed in to
   LinkedIn, and sign in to the same Claude account. Allow it on linkedin.com.
4. **Optional:** connect your email (Gmail or Outlook) if you want Claude to build lists from your mail.

## A sitting, start to finish
1. Say: "Connect me on LinkedIn with these people" and paste the list, or point to the source ("everyone who replied
   to my newsletter in September").
2. Claude checks who you're already connected to and finds each profile.
3. You review a table: who it found, how you know them, the note. Edit anything, then say go.
4. Claude opens the tabs. You read each note and click **Send**. Close any tab you don't want to send.
5. Tell Claude what you sent ("sent all but Pat"). It updates the tracker.

## LinkedIn's limits
LinkedIn doesn't publish these. The figures are what third parties observed in mid-2026, so treat them as guides.

| Item | What to plan for |
|---|---|
| Invitations per week | About 100 on an established account; 50–80 on accounts under 3 months old. This skill defaults to about 50. |
| Notes on a free account | About 5–10 notes a month. Premium: unlimited (the dialog says so). |
| Note length | Up to 300 characters (the dialog shows a counter). |
| Pending invitations | Keep the total under about 500. Withdraw old ones. |
| After a withdrawal | You can't invite that person again for about 3 weeks. |
| "I don't know this person" | When people click this on your invitations, LinkedIn can lower your limits. Invite people who will recognize you. |

## Note templates
Fill in the brackets; keep it under 300 characters; first name first; sign with your name.
- **Warm, recent contact:** "[Name], good to [meet / talk] about [topic] [when]. Let's stay connected here. [Your name]"
- **Shared history:** "[Name], we crossed paths through [company / program / event]. I'm now [one line on what you do]
  and would like to stay connected. [Your name]"
- **Met at an event:** "[Name], enjoyed meeting you at [event]. Your point on [specific thing] stuck with me. [Your name]"
- **Referred:** "[Name], [mutual contact] suggested we connect, since we both work on [topic]. [Your name]"
- **They invited you:** no note. Accept, then send a one-line thank-you message.

Avoid: links, a sales pitch, "I'd love to add you to my network", and flattery you can't back up.

## Tracker
One row per person in a sheet the person keeps:
`date staged | name | profile link | how we know them | note | status (staged / sent / accepted / skipped) | reason if skipped | date accepted`

## Good practice
- Start with the warmest people. Acceptance rates protect your limits.
- Ten to twenty a sitting, a few sittings a week. Don't send a burst of a hundred.
- After someone accepts, a short thank-you message usually does more than the invitation did.
- Every few weeks, ask Claude to list invitations pending over 3 weeks, and withdraw them yourself.

## FAQ
- **Can Claude just send them?** No. See "Why you click Send, not Claude" above.
- **Can I upload a list of emails to LinkedIn?** The upload-a-file option may not be on your account. Syncing Google or
  Outlook imports your whole address book and keeps syncing, so this skill doesn't use it.
- **A tab lost its note.** Ask Claude to set up that person again.
- **Wrong person?** Close the tab without sending and tell Claude. It will mark that person as needing you to find them.

## Sources
- LinkedIn Help, Prohibited software and extensions: https://www.linkedin.com/help/linkedin/answer/a1341387
- LinkedIn Help, Personalize invitations to connect: https://www.linkedin.com/help/linkedin/answer/46662
- ContentIn, "LinkedIn Automation vs MCP: What LinkedIn's Terms Actually Allow" (July 2026): https://contentin.io/blog/linkedin-mcp-terms-of-service/
- Cleverly, invitation limits (May 2026): https://www.cleverly.co/blog/bypass-linkedin-weekly-invitation-limit
- Dripify, note limits on free accounts (July 2026): https://help.dripify.com/en/articles/8490987-limited-personalized-connection-request-notes-for-free-linkedin-accounts
- Claude Help, Use skills in Claude: https://support.claude.com/en/articles/12512180-use-skills-in-claude

Prepared by Coworkers.Global.
