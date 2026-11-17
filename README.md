# Coworkers.Global — managed agents

Public marketplace for **managed AI agents** from Coworkers.Global. Each agent installs into your own Claude and works in your own Start folder. Access comes from the Start connector: Coworkers.Global approves each person once, and that approval covers every agent. Your files stay in your account.

## Available now

- **Chet** — sets up Start (your company's AI workspace) in a folder you own, grades its health, onboards and tests your other agents, and helps when something goes wrong. Install Chet first.
- **Sam** (preview) — a marketing agent: plans a dated week of social posts, drafts blog posts into your Start folder, and checks copy against your brand. Install Chet first; Chet onboards Sam once before first use ("Chet, onboard Sam").
- **Alex** (preview) — a startup cofounder agent: keeps your runway and default-alive date current, runs a weekly review, drafts your investor update, and reads your plan or deck the way an investor will. Records stay in your Start folder. Install Chet first; Chet onboards Alex once before first use ("Chet, onboard Alex").
- **linkedin-connect** — a skill that prepares LinkedIn connection invitations for a list of people and leaves one Chrome tab per person at the final Send. You click every Send. Needs Claude in Chrome; no connector.

## Install (Claude desktop app)

1. Be in **Cowork**. The app opens there; you're in it if the left sidebar shows **Projects**. If you see Code, click the left one of the two small tabs at the very top left.
2. Click **Plugins** in the left sidebar (older apps: **Customize**; can't find it? your name, bottom left, then **Settings**, then **Plugins**).
3. Click **Add**, then **Add marketplace**, then **Add from a repository**.
4. Type `cs-coworkers/marketplace` and press Enter. Click **Sync**, then **Close**. Chet appears.
5. If the Chet card shows a **+**, click it. A check mark means Chet is added.
6. Open the **Chet** plugin. Click **Connectors**. Click **Connect**. Click **Connect** again to authorize, and sign in with the Google account that Coworkers.Global approved.
7. Under **Tool permissions**, set the Start tools to **Always allow** (they start as **Needs approval**). Without this, Chet stops and asks before every call.
8. Make a folder named `Start`. In Cowork, open **Projects**, click **+**, name it **Chet**, create it, then on the right under **Context** click **Link a local folder** and pick `Start`. Start a new chat in that project and type: **Chet, set up Start**.
9. Other agents come after Chet. Chet tells you how to add each one, then onboards and tests it ("Chet, onboard Sam").

Checked on the Claude desktop app on 2026-11-17. If a name differs, look for the nearest wording.

## If something goes wrong before Chet can help

Chet fixes most problems himself ("Chet, something is wrong"). These two he cannot, because he is not running yet.

**Chet does not show after you added the marketplace**
1. Remove the marketplace and add it again (steps 3 and 4 above). A sync alone does not show a newly published plugin.
2. Look in **Plugins**, **Discover** for the Chet card. If it shows a **+**, click it.
3. If Chet is in **Yours** and says **Disabled**: the grey label is not a button. Open Chet and turn on the switch named **Enable plugin**.
4. Quit the Claude app fully and open it again.
5. Still missing: write to cs@coworkers.global. We send the plugin as one file; you add it with **Plugins**, **Add**, and the upload option.

**The Connect button is grey**
You are in Code, not Cowork. Switch to Cowork (top left of the window) and open Plugins again.

**The Start connector does not connect**
1. In Cowork: **Plugins** (older apps: **Customize**), **Chet**, **Connectors**, **Connect**, then **Connect** again to authorize.
2. If Google says "Google hasn't verified this app": click **Advanced**, then **Go to Coworkers.Global**. This label is normal while Start is in early access.
3. If the Connectors tab has no **start** entry: open **Plugins**, **Connectors**, **Add**, **Custom**, **Web**. Name `Start`, address `https://start.coworkers.global/mcp`. Click **Add**, then **Connect**.
4. If Chet says your account is not approved: he shows the email you signed in with. Write to cs@coworkers.global from that address, or connect again with the Google account we invited.

Questions: cs@coworkers.global
