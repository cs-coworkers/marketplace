---
name: start-health
description: >
  Use when the member asks Chet for a health check of their Start folder ("Chet, check my Start",
  "grade my Start folder", "is Start healthy"), and at the health-baseline step of setup.
---

# Start health check

1. `start_whoami`. If it fails or Start is not active, follow the access rules in the **chet**
   skill and stop.
2. `start_health_rubric`. It returns the areas, their checks, weights and grade bands, and how to
   compute the grade.
3. Grade the member's Start folder yourself, here, by reading their files. Give each rubric area a
   score from 0 to 100 and compute the grade letter the way the rubric says.
4. Show the member the result: the grade, each area with its score, and for the 2 weakest areas
   one concrete fix each.
5. `start_health_report` with only: `rubric_version` (from the rubric), `scores` (area id → number)
   and `grade` (one letter). Never send file names, file text or notes. If the report call fails,
   say the grade was not saved and carry on.
