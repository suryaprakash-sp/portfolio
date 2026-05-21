# Issue 1 — I shipped a production AI pipeline for 60K+ exam candidates. Here's what actually mattered.

**Publish:** Wed 2026-04-29 (day after the Tuesday launch post — keeps momentum)
**Length target:** ~1,200 words / 6-min read
**Cover image:** Reuse OG image OR Result Engine architecture screenshot (anonymized)

---

> **TL;DR:** I built an AI-assisted result-generation pipeline at IACE — raw Excel uploads to district-segmented PDF result sheets for thousands of students per cycle. The hard part wasn't the AI. It was the ten boring problems around the AI: validation, retries, idempotency, batch failures, and the audit trail that lets a 22-year-old data analyst ship a system that the head of academics actually trusts. This is what I'd tell my past self.

---

## The problem

Every coaching institute that runs mock tests has the same Monday-morning ritual: an exam happened on Sunday. By Monday at 8 AM, every student wants their score, their rank, their district rank, and a PDF they can show their parents. Multiply that by 60,000+ candidates, 7 branches, and 25+ exam types per year, and you've got a backlog the academics team works through manually until Wednesday.

I joined IACE in February 2026 with one quiet question from my manager: *"Can we make this Monday-morning thing not exist?"*

## What I almost built

The seductive first instinct: throw Claude at it. Take the raw Excel, feed it into a prompt, get back JSON, render PDFs.

It would have shipped in a week. It would have looked impressive in a demo. And it would have cratered the first time a column had a stray apostrophe or a student's mark was logged as the string `"absent"` instead of the expected number.

Two weeks of "production" would have eroded all the trust the academics team gave me on day one. I've watched that movie before.

## What I actually built

The pipeline has four real layers, and only **one** of them is the AI:

1. **Ingestion + validation.** Pandas reads the Excel. A Pydantic schema enforces every column type, cell range, missing-value policy. If the schema fails, the upload is rejected with a row-level error report — not silently coerced.

2. **Reconciliation.** Every student has a registration ID in the CRM. The pipeline cross-checks every Excel row against the CRM and surfaces orphans (students in the Excel not in the CRM, and vice versa). Nine out of ten "weird result" complaints turn out to be reconciliation issues, not pipeline bugs.

3. **The AI layer (the boring part).** Claude takes the validated, reconciled data and produces narrative text — the per-student commentary that goes on the PDF: "*Strong in physics, regression in chemistry mock 4 vs mock 3, suggested topic list for next week.*" It's prompted with the student's last 5 attempts, the cohort percentile, and a constraint to never invent metrics. Output goes through a second Pydantic schema before it's allowed near a PDF.

4. **Rendering + delivery.** WeasyPrint turns each student's data + AI narrative into a branded PDF. A FastAPI background worker batches them by district, uploads to Supabase storage, and the CRM gets a row update with the PDF URL. WhatsApp goes out via WATI with the link.

That's it. No vector DB. No fine-tuning. No agent loops. No "AI engineer" titles required.

## The five things that actually mattered

**1. Validation is product, not plumbing.**
The Pydantic schema rejects 4% of uploads on first try — typos, format drift, copy-paste errors from the academics team. Each rejection saves a recall, a parent complaint, a trust hit. The schema *is* the product.

**2. Idempotency or it didn't happen.**
Every batch has a deterministic batch ID derived from `(exam_id, source_file_hash)`. Re-running the same input produces the same output. If a Monday batch fails halfway, you re-run it without thinking. This single property removed about 80% of my early-morning anxiety.

**3. The AI fails. Build for it.**
I budget 1.5% of Claude calls to fail, retry, or return malformed JSON. The retry policy is deterministic (3 attempts, exponential backoff, then escalate). When all retries fail, the student's row gets the AI-narrative field marked as `"_pending_analyst_review"` — the PDF still ships, just without the commentary block. Nobody waits on Claude.

**4. The audit trail is the contract.**
Every PDF the system produces has a footer line: `Generated 2026-04-29 08:43 IST · build sha:abc123 · model claude-sonnet-4-6 · batch f3d9e7`. When a parent calls and asks "is this right?", the academics team can pull up the exact batch, the exact model version, the exact source row. That's the difference between "we trust the system" and "we use the system but verify everything."

**5. Demo speed lies; production speed is what counts.**
A demo run takes 30 seconds. A real Monday-morning batch with 60K candidates takes 14 minutes — because of validation, reconciliation, batched API calls, retries, PDF rendering, and the WATI rate limit. Optimizing the AI step (which is 3 seconds per student) is pointless when the slowest step is rendering. I learned this by trying to optimize the AI step first, the way you'd assume.

## What I'd tell my past self

You don't need to be a "real ML engineer" to build production AI systems. You need to be the kind of analyst who's already seen what breaks.

The Pydantic schema, the idempotency, the audit trail, the retry policy — that's all stuff a senior data analyst already knows from years of debugging other people's reports. It just looks fancier when you put an LLM next to it.

If you're an analyst sitting on the fence about shipping AI work: the AI is the easy part. **Ship the boring layers around it.** That's where the trust lives.

---

## CTA

If you're an analyst, founder, or ops lead with a pipeline like this you'd like to ship — the [free 30-min ops audit](https://calendly.com/suryaprakash-sp987/30min?utm_source=linkedin&utm_medium=newsletter&utm_campaign=issue1) is the fastest way to figure out which "boring layers" you're missing. We'll find 3 workflows you can ship this month. No pitch.

The lead-magnet PDF (10 production case studies + the 500-line Python thesis) is at [suryaprakash-sp.github.io/portfolio/lead-magnet.pdf](https://suryaprakash-sp.github.io/portfolio/lead-magnet.pdf).

Subscribe to *Data Pragmatist* below — next issue is on the dashboard that loads 80% faster without buying anything.

— Surya
