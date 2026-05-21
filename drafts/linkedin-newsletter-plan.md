# LinkedIn Newsletter — `Data Pragmatist`

A weekly-ish newsletter where Surya documents production data + AI work in plain language. Compounds the Tuesday launch post into months of inbound by turning each project lesson into a lightweight 4–8 min read.

---

## Why this lever

- The Tuesday launch post is a one-shot. Newsletter = subscribe button → every issue lands in subscribers' inbox, on their LinkedIn feed, and is searchable on the profile.
- LinkedIn has been pushing newsletters in 2026 — they get the same algorithmic boost as long-form posts plus an email channel.
- Surya already has the source material: `drafts/freelance-knowledge.md`, `drafts/case-study-pdf-result-engine.md`, the lead-magnet PDF use cases, and the IACE/Masai/Gamify project memory in `constants.ts`.
- Cost: 5 min to enable, ~45 min per issue, posted every 2–3 weeks. Sustainable.

## Setup (user action, ~5 min)

1. Open LinkedIn → top-right "Create" → "Write article" → on the article page, top-right "Manage" → "Create a newsletter".
2. **Title:** `Data Pragmatist`
3. **Tagline (200 char limit):** `Where data analysts actually ship the AI workflows. Real production stories from EdTech, ops, and SMB land — what worked, what shipped, what cost less than 500 lines of Python.`
4. **Cadence:** Set to "Bi-weekly" (LinkedIn lets readers see expected frequency).
5. **Cover image:** Reuse `public/og-image.png` for now (1280×769, already optimized).
6. Hit Publish on the newsletter shell. The first article publishes when you write it.

## Cadence + topic plan (first 6 issues)

| # | Date | Title | Hook |
|---|---|---|---|
| 1 | 2026-04-29 (Wed after launch) | "I shipped a production AI pipeline for 60K+ exam candidates. Here's what actually mattered." | The IACE Result Engine case study — anchored to launch week. |
| 2 | 2026-05-13 | "Why your dashboard takes 30 seconds to load (and how I made one 80% faster without buying anything)" | Masai dashboard audit story. Practical, vendor-neutral. |
| 3 | 2026-05-27 | "The 500-line Python rule for ops automation" | The thesis behind the lead-magnet PDF. Use 2–3 of the 10 use cases as evidence. |
| 4 | 2026-06-10 | "What I learned trying to ship a chatbot people actually trusted" | RAG agent lessons (citations, confidence scoring, hallucination boundaries). Anchors to Gig 4. |
| 5 | 2026-06-24 | "Zoho CRM + Google Sheets + Python: the SMB ops stack nobody talks about" | The unsexy stack that runs real businesses. SEO play for SMB ops queries. |
| 6 | 2026-07-08 | "From scattered Excel to a single source of truth: the 30-day ETL playbook" | The Data Foundation Setup productized service positioned as a public methodology. |

## Issue-1 draft

See `drafts/linkedin-newsletter-issue-1.md`.

## Distribution

- Pin newsletter URL to LinkedIn profile featured section
- Footer link on portfolio (`#contact` → "Newsletter")
- Mention in Tuesday launch post first comment (alongside Calendly + portfolio + lead-magnet PDF)
- Cross-post issue summaries to Twitter/X as a 4-tweet thread

## Metrics to watch

- Subscribers (LinkedIn shows count)
- Article impressions per issue (target 500+ by issue 3, 2K+ by issue 6)
- Calendly bookings tagged `cta_location=newsletter` (already wired in `analytics.ts` if we add the param to the article CTA links)
- DMs from "I read your article…" — these are the warmest leads
