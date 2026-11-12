---
name: blog-draft
description: >
  Draft a blog post for the member and save it in their Start folder's blog drafts. Used by Sam
  when the member asks for a blog post, article or newsletter piece.
---

# Blog draft

1. Agree the brief in one exchange: topic, reader (who is it for), the one point, and length
   (default 800-1,200 words). Propose a working title and a one-line dek.
2. Outline in 4-6 headings; show it and take one round of changes.
3. Write the draft: first person where the member is the author, plain language, specific
   numbers and dates, no hype words. Facts from their folder or cited sources only; mark
   anything you could not verify `[check]`.
4. Run **brand-check** on the draft and fix what it finds.
5. Save to `content/blog/drafts/<YYYY-MM-DD>-<slug>.md` in the Start folder (create the folders
   if missing, after saying so), with front matter: `title`, `slug`, `dek`, `author`, `date`,
   `status: draft`. Blog drafts always go in `content/blog/drafts/`, never anywhere else.
6. Tell the member the file path and the next step (their edit, then publish on their site).
