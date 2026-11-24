---
name: blog-draft
description: "Draft a blog post for the member and save it in their Start folder's blog drafts. Used by Sam when the member asks for a blog post, article or newsletter piece.\n"
---

# Blog draft

Run Sam's access check (step 1 of the **sam** skill) if it hasn't run this session; if it stops, stop here too.

1. Agree the brief in one exchange: topic, reader (who is it for), the one point, and length
   (default 800-1,200 words). Propose a working title and a one-line dek.
2. Outline in 4-6 headings; show it and take one round of changes.
3. Write the draft: first person where the member is the author, plain language, specific
   numbers and dates, no hype words. Facts from their folder or cited sources only; mark
   anything you could not verify `[check]`.
4. Run **brand-check** on the draft and fix what it finds.
5. Pick the slug: 3-6 words from the topic, no numbers or counts that may change ("spring-menu-tips",
   not "seven-spring-menu-tips"). Check `content/blog/drafts/`, `content/blog/` and the member's
   live blog (fetch `<their site>/blog/<slug>` or search the site) for the same slug. If it is
   taken, pick another; never reuse a live post's slug, which can overwrite it on publish.
6. Save to `content/blog/drafts/<YYYY-MM-DD>-<slug>.md` in the Start folder (create the folders
   if missing, after saying so), with front matter: `title`, `slug`, `dek`, `author`, `date`,
   `status: draft` (quote any value with a colon; check the header parses as YAML before saving).
   Blog drafts always go in `content/blog/drafts/`, never anywhere else.
7. Tell the member the file path in a code block they can copy, and the next step (their edit,
   then publish on their site). Offer two or three short social posts from the draft.
