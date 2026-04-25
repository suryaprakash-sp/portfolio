# Case Study — Production PDF Result-Generation Engine

_Reusable narrative for: LinkedIn Wed follow-up post · Fiverr Gig 3 visual asset · Upwork portfolio entry · Toptal screening project walkthrough._

---

## Headline (use as post hook / gig sub-title)

**A 2-day team scramble became a 1-click workflow — for 60,000+ exam candidates per cycle.**

---

## The story (404 words — drop straight into LinkedIn or a portfolio card)

Every exam cycle at the coaching institute, two ops teammates stayed late for two full days.

The work was unglamorous: take the raw Excel dump from the testing platform, slice it by district, format ranks in Word, generate PDFs branch-by-branch, and email them out. They did this after every mock exam, for **60,000+ exam candidates** at a time. By the time the last branch's results went out, no one was sleeping before 9pm.

The problem wasn't the people. It was that the work had grown 10x and the workflow hadn't. So I built a replacement.

**What I shipped:**

A single FastAPI backend with a React admin panel. Ops uploads the raw Excel, clicks once. Behind that click:

- A **Pydantic schema layer** validates every row before it touches the renderer — catches malformed data upstream instead of at distribution time.
- The engine computes district segmentation, category breakdowns, and ranking math in pandas.
- A **WeasyPrint** rendering layer produces thousands of branded, district-specific PDF result sheets in one job.
- **Supabase + PostgreSQL** holds artifacts and audit logs so any result is traceable to its input + version.
- An **idempotency guard** means re-running a job produces the same output, not a doubled-up one — important when a tired ops person clicks twice.

**What changed:**

- Two days of two-people work → one click that finishes in under ten minutes.
- ~14 hours saved per exam cycle.
- The team sleeps the night before results go out.
- The institute can now run more frequent assessments — distribution stopped being the bottleneck.

**The pattern that keeps repeating in my work:**

Most "let's build a data platform" conversations don't actually need a data platform. They need one person who looks at the workflow, finds the part that's repeating, and writes a few hundred lines of Python around it. The judgment stays with the team. The grind stops.

If you're running an EdTech, coaching institute, or any SMB where a skilled person spends 10–20 hours a week on something that has a clear rule set — there's almost always a workflow like this one hiding inside it.

**Tech stack:** Python · FastAPI · React · Pydantic · Supabase · PostgreSQL · WeasyPrint · pandas

---

## Variant A — LinkedIn Wed-after-launch follow-up post (story + CTA)

> 60,000+ exam candidates. Two ops teammates staying late for two days every cycle to manually cut Excel by district, format ranks in Word, and email PDFs branch-by-branch.
>
> Then I shipped a FastAPI + React + WeasyPrint pipeline that does the same job in a single click — with Pydantic schema validation upstream so malformed data never reaches distribution, and audit logs so every result is traceable.
>
> Two days of work for two people → ten minutes for one click. ~14 hours saved per cycle. The team sleeps the night before results go out.
>
> The pattern I keep finding: most "let's build a data platform" conversations don't actually need a data platform. They need one person who looks at a workflow, finds the part that repeats, and writes a few hundred lines of Python around it.
>
> If your team has someone burning 10–20 hours a week on something that has a clear rule set, there's almost always a workflow like this one hiding inside it.
>
> Free 30-min ops audit — I'll find 3 of them in your stack.
>
> Calendly link in the first comment 👇
>
> #DataAutomation #AIautomation #EdTech #Python #FastAPI

**First comment:**
> Free audit: https://calendly.com/suryaprakash-sp987/30min
> Portfolio: https://suryaprakash-sp.github.io/portfolio/

---

## Variant B — Short version for Fiverr Gig 3 description / portfolio card (~140 words)

> **Production PDF Result-Generation Engine — IACE coaching institute · 60,000+ exam candidates per cycle**
>
> Two ops teammates used to spend two full days after every exam manually slicing Excel by district, formatting ranks in Word, and emailing PDFs branch-by-branch.
>
> Replaced with a one-click FastAPI + React pipeline: Pydantic schema validation, district segmentation in pandas, WeasyPrint rendering, Supabase storage, full audit logging. Idempotent re-runs.
>
> **Result:** 2 days of 2-person work → 10-minute one-click job. ~14 hours saved per cycle. Team sleeps the night before results go out. Institute can run more frequent assessments because distribution stopped being the bottleneck.
>
> **Stack:** Python, FastAPI, React, Pydantic, Supabase, PostgreSQL, WeasyPrint, pandas.

---

## Posting plan

- **Day 1 (Tue 2026-04-28 09:00 IST):** LinkedIn launch post (Variant A from `linkedin-launch-post.md`).
- **Day 2 (Wed 2026-04-29 09:00 IST):** Drop **Variant A** of this case study as the follow-up. Algorithm-friendly: same audience, fresh story, end-with-CTA same as launch post.
- **Day 4 (Fri 2026-05-01):** Reuse the **Variant B** version for Fiverr Gig 3's gallery description revamp + first portfolio card on the site.

---

## Why this case study (over the others)

- **Vivid before/after.** "Two days of work → ten minutes" is concrete and quoteable.
- **Big number upfront.** 60,000+ candidates lands harder than abstract "scale" language.
- **Touches both technical & ops audiences.** Stack credibility for engineers; "team sleeps better" line lands for founders.
- **Direct setup for the CTA.** The closing pattern ("most teams need a person, not a platform") is exactly the sales angle of the free 30-min audit.

---

## Source story (raw, for any future variants)

Surya joined IACE Feb 2026 as Senior Data Analyst. Within first quarter, the post-exam result distribution workflow was the most painful weekly grind for the ops team. He scoped + built the engine in ~3 weeks. Currently in production, used every exam cycle. The schema validation layer was added after one early incident where a single malformed row broke ~200 PDFs at the rendering stage; Pydantic now catches those upfront. Audit logs added because finance team needed reconciliation hooks. Idempotency added because of the "tired ops person clicks twice" reality.
