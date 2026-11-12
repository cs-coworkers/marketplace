# Coworkers.Global — managed agents

Public marketplace for **managed AI agents** from Coworkers.Global. Each agent installs into your own Claude and works in your own Start folder. Access comes from the Start connector: Coworkers.Global approves each person once, and that approval covers every agent. Your files stay in your account.

## Available now

- **chet** — sets up Start (your company's AI workspace) in a folder you own, grades its health, onboards and tests your other agents, and helps when something goes wrong. Install Chet first.
- **sam** (preview) — a marketing agent: plans a dated week of social posts, drafts blog posts into your Start folder, and checks copy against your brand. Chet onboards Sam once before first use ("Chet, onboard Sam").
- **linkedin-connect** — a skill that prepares LinkedIn connection invitations for a list of people and leaves one Chrome tab per person at the final Send. You click every Send. Needs Claude in Chrome; no connector.

## Install (Claude desktop app)

1. Open **Customize**, then **Plugins**.
2. Choose **Add marketplace** (from a repository) and enter `cs-coworkers/marketplace`. Click **Sync**, then **Close**.
3. Install **Chet**. Open its **Connectors** tab; on **start** click **Add**, then **Connect**, and sign in with the Google account that Coworkers.Global approved.
4. In a new chat, with your Start folder added, say: **Chet, set up Start**.
5. For each other agent: install it from the same marketplace, then say **Chet, onboard Sam** (or the agent's name).

Button names are as of 2026-11-12. Anthropic changes them; look for the nearest wording.

## If something goes wrong before Chet can help

Chet fixes most problems himself ("Chet, something is wrong"). These two he cannot, because he is not running yet.

**Chet (or another agent) does not show after you added the marketplace**
1. In **Customize**, **Plugins**, open the Coworkers marketplace and click **Check for updates** (or **Sync**).
2. Quit the Claude app fully and open it again. Look in Plugins again.
3. Still missing: write to cs@coworkers.global. We send the plugin as one file; you add it with **Customize**, **Plugins**, **+**, **Upload**.

**The Start connector does not connect**
1. In **Customize**, **Plugins**, **Chet**, **Connectors**: click **Add** on **start**, then **Connect**.
2. If Google says "Google hasn't verified this app": click **Advanced**, then **Go to Coworkers.Global**. This label is normal while Start is in early access.
3. If the Connectors tab has no **start** entry, or Connect fails: open **Settings**, **Connectors**, **Add custom connector**. Name `Start`, address `https://start.coworkers.global/mcp`. Click **Add**, then **Connect**.
4. If Chet says your account is not approved: he shows the email you signed in with. Write to cs@coworkers.global from that address, or connect again with the Google account we invited.

Questions: cs@coworkers.global
