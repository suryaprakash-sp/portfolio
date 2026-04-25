# Notion Ops Audit Checklist — Publish-Ready

_This file has TWO sections: (1) **paste-ready page content** for Notion, and (2) **publish instructions** for getting it live and shareable._

---

# 📋 Section 1 · Paste-Ready Page Content

> **HOW TO USE THIS SECTION**
>
> Open Notion → New page → paste the entire block below (from `# The Free AI Ops Audit Checklist` down to the signoff). Notion converts markdown on paste — headings, checkboxes, dividers, links, and bold all carry over. After paste, you'll need to manually convert the **Scoring** legend into a Notion callout (Notion paste leaves it as paragraphs).
>
> Keep the to-do checkboxes. Each `- [ ]` line becomes a clickable checkbox in Notion, which is exactly the interactive feel we want.

---

# The Free AI Ops Audit Checklist

A self-scoring audit you can run in 30 minutes to find the workflows in your business that are ready to automate.

Built from 4+ years and 85,000+ students' worth of production data work across online + offline EdTech and SMB teams.

---

## How to use this

Go through each section. For every item, score yourself:

- 🟢 **Handled** — this is automated or documented, no one is burning hours on it.
- 🟡 **Manual but tolerable** — a person does it but it's not killing anyone yet.
- 🔴 **Bleeding time** — someone spends real hours on this every week.

At the end, count your 🔴s. **Anything with 3+ red items is a workflow ready to be automated this quarter.**

---

## 🗂 Section 1 · Data Sources

- [ ]  We know where every piece of operational data lives (CRM, LMS, spreadsheet, payment processor, marketing tool) without asking around.
- [ ]  There's one canonical source of truth for each key metric. Nobody says "well, it depends on which report you look at."
- [ ]  Data from different tools can be joined without a human exporting CSVs and VLOOKUPing.
- [ ]  New tools we adopt have a documented path for pulling their data into the warehouse.
- [ ]  Historical data is preserved — we can answer "what was this metric 6 months ago?" without spelunking through inboxes.

---

## 📊 Section 2 · Reporting

- [ ]  Weekly and monthly reports generate on a schedule — no one has to remember to build them.
- [ ]  The CEO/head of ops/investor update doesn't require 3 hours of copy-pasting on a Sunday night.
- [ ]  Report recipients actually open and use the reports (if they don't, why are you making them?).
- [ ]  Narrative summaries ("retention dropped 4% because…") are written once, templated, and auto-filled.
- [ ]  When a key metric moves, someone gets notified. Anomalies don't sit undiscovered for a week.

---

## ⚙️ Section 3 · Ops Workflows

- [ ]  No single person is the "only one who can generate X report."
- [ ]  Payments, subscriptions, and invoices reconcile automatically — no month-end spreadsheet wrestling.
- [ ]  Student/customer onboarding triggers the right messages, docs, and calendar invites without a human forwarding.
- [ ]  Refunds, escalations, and edge cases have a runbook — the first response isn't "let me ask someone."
- [ ]  When someone asks "how many X did we do last month?", the answer takes under 60 seconds to find.

---

## 🤖 Section 4 · AI & Automation Opportunities

- [ ]  You've identified at least one workflow where a skilled person spends 5+ hours/week on a task with a clear rule set.
- [ ]  You've run a small experiment with an LLM on that workflow (not just ChatGPT — actually scripted).
- [ ]  You know the difference between tasks AI should own end-to-end vs. where humans still verify.
- [ ]  Document parsing (PDFs, scanned forms, emails, CSVs of uneven quality) is not eating an analyst's week.
- [ ]  You've asked at least once: "What would we build if hiring an intern weren't an option?"

---

## 💚 Section 5 · Team Wellness Signals

- [ ]  Nobody on the team is quietly burning out on "the spreadsheet work."
- [ ]  Vacations don't grind a critical workflow to a halt.
- [ ]  Analysts are doing analysis. Ops people are doing ops. Not both doing data plumbing.
- [ ]  You haven't had a "it broke at 11pm on a Friday" incident in the last 30 days.
- [ ]  When a new senior person joins, their first week isn't spent learning bespoke spreadsheet conventions.

---

## 📈 Scoring

> 💡 **After the checklist, count the 🔴 (Bleeding time) items.**
>
> - **0–3 🔴s** — You're in good shape. Lean into the boring parts and keep shipping.
> - **4–8 🔴s** — There's clear time being burned. One or two automations could reclaim 10+ hours/week.
> - **9+ 🔴s** — Your team is running on goodwill and caffeine. Start with the single most painful workflow.

_(Convert this scoring block into a Notion callout block after paste — `/callout` then paste the bullets.)_

---

## What to do with this

If this audit surfaced a few 🔴s and you'd like a second set of eyes on the specific workflows, the **[free 30-minute audit](https://calendly.com/suryaprakash-sp987/30min)** is a no-pitch conversation where we go through your stack and identify 3 concrete automation opportunities with rough effort estimates.

Written up, no slides, zero obligation.

---

**Surya Prakash Manubolu**
Data & AI Automation Consultant
[Portfolio](https://suryaprakash-sp.github.io/portfolio/) · [LinkedIn](https://www.linkedin.com/in/manubolusuryaprakash) · [Calendly](https://calendly.com/suryaprakash-sp987/30min)

---
---

# 🛠 Section 2 · Publish Instructions

## Step 1 — Create the page

1. Open Notion → New page (anywhere in your workspace; private workspace is fine — we'll publish-to-web in step 3).
2. Set the page title: **`Free AI Ops Audit Checklist`** (becomes the URL slug).
3. Click `Add icon` → pick the 📋 clipboard emoji (matches the file).
4. Click `Add cover` → use one of:
    - **Quickest:** Notion's preset "Patrick Tomasso · Notebook" (free, on-brand)
    - **Branded:** generate a 1500×600 cover with title text in Figma/Canva that mirrors your portfolio's blue-on-white scheme. Save as PNG, upload via the cover image picker.
5. Paste the **Section 1 content above** into the page body. Notion converts markdown on paste — checkboxes, dividers, bold, links all transfer.
6. After paste, a few cleanup passes:
    - Convert the "Scoring" block (lines starting with `> 💡`) into a Notion callout: highlight, then `/callout` and pick the green icon
    - Confirm checkboxes (`- [ ]`) became clickable to-do items (they should). If any line stayed as text, retype the `[ ]` part — Notion converts on the next space
    - Check the Calendly + Portfolio + LinkedIn links are clickable

---

## Step 2 — Page settings

In the top-right `•••` menu:

- **Customize page** → toggle ON "Backlinks", OFF "Top-level page" if it's nested
- **Page settings** → "Small text": OFF (default body text is more readable for a public guide)
- **Connections**: skip
- **Lock page** (after final review): ON — prevents accidental edits once it's public

---

## Step 3 — Publish to web

In the top-right share menu:

1. Click **`Share`** → **`Publish`** tab.
2. Toggle **`Publish to web`** → ON.
3. Settings to enable:
    - ✅ **Allow search engines to index** (we WANT Google to find this — long-tail SEO play for "ops audit checklist edtech")
    - ✅ **Allow editing**: OFF
    - ✅ **Allow comments**: OFF (avoids spam)
    - ✅ **Allow duplicate as template**: ON (a kind way for prospects to keep their own copy after taking it)
    - ✅ **Show "Created with Notion" footer**: leave as default (free tier)
4. Copy the public URL — looks like `https://[your-handle].notion.site/Free-AI-Ops-Audit-Checklist-abc123…`.

---

## Step 4 — Custom URL slug (optional, recommended)

Notion lets you customize the slug:

1. In the same Publish panel → **`Customize URL`**
2. Set to: `ops-audit-checklist` (or `free-ops-audit`)
3. Final URL: `https://[your-handle].notion.site/ops-audit-checklist`

This becomes the link you put on:

- LinkedIn launch post first comment (alongside Calendly + portfolio)
- Fiverr gig descriptions ("read my free audit checklist")
- Email signature
- Portfolio site footer

---

## Step 5 — Open Graph preview

Notion handles OG tags automatically using the page title + cover image. Test it:

- Use [opengraph.xyz](https://www.opengraph.xyz/) — paste the published URL — confirm the preview shows: cover image + title + the description text from the first paragraph.
- If it looks weak, swap the cover image for something more visual.

---

## Step 6 — Tracking (optional but smart)

Notion's free tier doesn't expose page-view analytics. Workarounds:

- **Wrap the link in a tracking redirect** — instead of sharing the raw Notion URL, share `https://suryaprakash-sp.github.io/portfolio/audit` which 301-redirects to the Notion page. Then GA4 (already wired in your portfolio at `G-2475SDXL3T`) captures the click.
- Alternative: use a free service like [Plausible Tracker for Notion](https://plausible.io/notion) or `dub.co` short links.
- **Skip for launch week.** Tracking is nice-to-have, not blocker.

---

## Step 7 — Cross-link

Once the URL is live, drop it in:

- ✅ Portfolio site footer (single line: "Free AI Ops Audit Checklist →")
- ✅ LinkedIn About section ("Recent: published a self-scoring AI ops audit · [link]")
- ✅ Tuesday LinkedIn launch post first comment
- ✅ All 3 Fiverr gig descriptions (subtle: "If you want to self-audit first, free checklist here")
- ✅ Email signature

---

## Estimated effort

- Page creation + paste + cleanup: **~10 min**
- Page settings + publish-to-web: **~5 min**
- Custom slug + OG preview check: **~5 min**
- Cross-linking to portfolio + LinkedIn + Fiverr: **~10 min**

**Total:** ~30 min, end-to-end.

---

## Why this checklist works as a lead magnet

1. **Self-qualifies.** People who score 4+ 🔴s are the exact audience for the free 30-min audit. The checklist filters in serious leads.
2. **No email gate.** Free public Notion page = zero friction = much higher consumption + sharing rate. Email gates kill virality on this kind of content; the goal here is shares + screenshots, not list-building.
3. **Sharable.** The 🔴/🟡/🟢 framework is self-contained and tweet-worthy — people screenshot their scores and post them.
4. **SEO long-tail.** "AI ops audit checklist" / "data automation audit edtech" / "SMB workflow automation checklist" are all low-competition terms where this could rank.
5. **Pairs with the lead-magnet PDF.** The PDF is "look at all the workflows I've automated — what could yours be?" The checklist is "here's how to find them in your own business." Two-step funnel: PDF → Checklist → 30-min Calendly audit.
