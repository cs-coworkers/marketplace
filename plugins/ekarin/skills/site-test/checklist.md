# Site test checklist

`ID` `Q` (quick and full; no tag = full only) · what to check · **pass when** (the evidence).
A pass with no evidence is not a pass. A page that merely loads is not a pass. IDs never change.

## A. Pages
- **A1** `Q` · Home and every page in the plan load, show their main heading and no error · **pass when** each heading is quoted.
- **A2** `Q` · No new errors in the browser console on key pages · **pass when** the list is empty or the same as last run.
- **A3** · Links on key pages work (no "not found", no error pages); a made-up address shows a helpful not-found page · **pass when** broken links = 0.
- **A4** `Q` · No test or placeholder text visible ("lorem ipsum", "TODO", "undefined", test records) · **pass when** 0 found.
- **A5** · Images load and aren't stretched · **pass when** 0 broken.

## B. Navigation
- **B1** `Q` · Main menu items go to the right pages, on desktop and at phone width · **pass when** each landing heading matches.
- **B2** · Phone menu opens and closes and the page still scrolls · **pass when** each state is seen.
- **B3** · Phone numbers and emails are tappable; contact details match across pages · **pass when** listed.

## C. Tools, quizzes and calculators
- **C1** `Q` · Every step advances; Back keeps answers · **pass when** each step is walked.
- **C2** `Q` · Known answers: each input set in the plan gives its expected result · **pass when** results match the plan exactly.
- **C3** · Validation messages are clear, sit next to the problem, and name what's missing · **pass when** the message is quoted.
- **C4** · Results are reachable as the page promises (if a page says "free, no sign-up", no sign-up wall before results) · **pass when** the path to a result is recorded.
- **C5** · The tool works with keyboard alone · **pass when** completed without a mouse.

## D. Forms and leads
- **D1** `Q` · Each form in the plan shows labels and accepts input at phone and desktop widths · **pass when** both widths are checked.
- **D2** `Q` · Required fields and formats (email, phone, ZIP) give a clear message and keep what was typed · **pass when** one bad and one good case are recorded.
- **D3** `Q` · Submit only as the plan allows; otherwise stop before the click · **pass when** the plan rule is cited, or the stop is recorded.
- **D4** `Q` · After an allowed submit, a confirmation shows **and** the lead lands where the plan says (back office, lead list, inbox), within the plan's time · **pass when** the arrival time is recorded. A thank-you page alone is half a pass.
- **D5** · Test records are listed in the findings file so the team can delete them · **pass when** listed.

## E. Phones and browsers
- **E1** `Q` · No sideways scrolling at 360, 390 and 430 px wide · **pass when** 0 pages overflow.
- **E2** · Buttons and menu text aren't cut off at phone, tablet and desktop widths · **pass when** checked.
- **E3** · Pop-ups and cookie banners can be closed on a phone and don't cover the main button · **pass when** checked.
- **E4** · Not testable here: Safari on a real iPhone, the on-screen keyboard covering fields · **pass when** listed under Not tested.

## F. Speed as a visitor feels it
- **F1** `Q` · Home and top tool page show their main content within 2.5 s and don't jump around while loading · **pass when** times are recorded.
- **F2** · Buttons respond to a tap without a visible delay · **pass when** checked.

## G. Accessibility (WCAG 2.2 AA spot checks)
Automated checks find about half of problems. Never report a clean result as "accessible".
- **G1** `Q` · Text contrast: body text at least 4.5:1, large text and buttons at least 3:1 · **pass when** failures = 0, or listed with values.
- **G2** · Every link, button and form field can be reached and used with the keyboard, with a visible focus outline · **pass when** the order is walked.
- **G3** · Form fields and dropdowns have labels a screen reader can announce · **pass when** unlabeled = 0.
- **G4** · Tap targets at least 24×24 px (44×44 for main buttons on sites for older visitors) · **pass when** sizes are listed.
- **G5** · Images that carry meaning have descriptions · **pass when** missing = 0.
- **G6** · Text can be enlarged to 200% without losing content · **pass when** checked.
- **G7** · A "skip to content" link; one main heading per page · **pass when** checked.

## H. Trust and clarity
- **H1** · "Free" claims, prices and what happens next are stated before the visitor commits · **pass when** seen before the commit step.
- **H2** · Error messages are plain words, not codes · **pass when** quoted.
- **H3** · How to reach a person is findable within 2 clicks · **pass when** the path is recorded.

## Severity
- **Critical:** site down; a lead, sign-up or payment flow broken; leads not arriving; a tool giving wrong answers on its main path; data exposed.
- **High:** a key journey broken on phones or one browser, no workaround; a main button hard to read for everyone.
- **Medium:** a secondary feature broken, or a workaround exists.
- **Low:** cosmetic.
