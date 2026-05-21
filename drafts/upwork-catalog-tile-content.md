# Upwork Project Catalog — Ready-to-Paste Content for All 7 Tiles

_Goal: when you open each draft at https://www.upwork.com/nx/project-dashboard/?step=drafts and click through Steps 4 (Process) → Step 5 (Description), copy-paste from below. Edit lightly to taste._

**Important reminders before publishing any tile:**
- ✅ Step 1 (Overview) and Step 2 (Pricing) are already filled by me.
- 🟡 Step 3 (Gallery) — Playwright silently fails on image upload; you need to manually drag-drop a cover image. See "Cover image suggestions" per tile.
- 🟡 Step 4 (Process) — copy-paste from below.
- 🟡 Step 5 (Description) — copy-paste from below.
- ✅ Step 6 (Review) — eye-check + click "Submit for review". Upwork takes 24-48h to approve.

**Suggested order to publish (highest impact first):**
1. **Tile 1 — Reporting Autopilot** (best fit, broadest demand)
2. **Tile 7 — Metabase Audit** (highest probability of inbound, low competition)
3. **Tile 2 — Data Foundation Setup** (covers the warehouse-buyers)
4. **Tile 4 — PDF Result Engine** (your strongest IACE proof)
5. **Tile 5 — Real-Time Leaderboard** (niche but premium)
6. **Tile 3 — Claude AI Workflow Agent** (broadest, most competitive)
7. **Tile 6 — WhatsApp + Email Outreach** (least urgent, lower budget tier)

You don't have to publish all 7. Even 3-4 live tiles is plenty — they're inbound channels, not your main funnel.

---

## TILE 1 — Reporting Autopilot

**Pricing:** $500 / $1,500 / $2,500 (Starter / Standard / Advanced)

### Cover image suggestion
A clean Metabase dashboard screenshot from your Masai work (anonymize student names + numbers). Crop to 16:9. If unavailable, use a "before/after dashboard speed" comparison or a generic Metabase screenshot from their public docs.

### Step 4 — Process (3 milestones)

**Milestone 1 — Discovery & Source Mapping (Day 1-2)**
What you provide: read access to your data sources (database, CSVs, or APIs) + a 30-min kickoff call to align on the 3-5 most important metrics.
What I deliver: a 1-pager summarizing data sources, key metrics, and proposed dashboard layout.

**Milestone 2 — Build & Configure (Day 3-10, depending on tier)**
What I deliver: Metabase deployed, data sources connected, dashboards built, weekly briefing automation wired (Python + Claude API), Slack/email delivery configured. You get a staging link to test.

**Milestone 3 — Polish & Handoff (Last 2 days)**
What you provide: feedback on staging dashboards.
What I deliver: revisions applied, anomaly alerts tuned, runbook documenting how to add new metrics/dashboards yourself, 30-day support window starts.

### Step 5 — Description (long form)

```
Most data teams I work with are drowning in the same problem: weekly reports that should take 10 minutes take 2 days. Dashboards that crash on load. Ops people copy-pasting numbers from 5 tools into a deck nobody reads.

I fix that with a Reporting Autopilot — a Python + Claude pipeline that turns your raw data into weekly briefings, anomaly alerts, and live dashboards your team actually uses.

WHAT YOU GET (per tier):

Starter ($500, 7 days):
• 1 dashboard built in Metabase (or your existing BI tool)
• Auto-generated weekly briefing email — Claude reads the dashboard and writes a plain-English summary every Monday
• 1 data source connected
• Handoff doc + 14-day support

Standard ($1,500, 14 days):
• 3 dashboards covering your top KPIs
• Weekly briefings with anomaly call-outs (Claude flags when a metric moves >X% week-over-week)
• Up to 3 data sources unified into one PostgreSQL warehouse
• Slack/email delivery
• Handoff doc + 30-day support

Advanced ($2,500, 21 days):
• 5 dashboards — exec, ops, marketing, sales, anomaly-monitoring
• Full weekly briefing automation + ad-hoc alerts when thresholds trigger
• Up to 5 data sources, full ETL pipeline included
• Slack + email + (optionally) PDF delivery
• 1 month of post-launch tuning included

WHY ME:
• 4+ years building production data systems for EdTech (85,000+ students, 60,000+ exam candidates)
• At Masai School I built a similar Reporting Autopilot that saved the team 20+ hours/week on manual reporting and rebuilt 30+ Metabase dashboards with 80% faster query times
• I'm Claude Code-native — I run multiple AI agents in production, not just demos
• Hyderabad, India · responsive across US/EU business hours

DATA SOURCES I COMMONLY CONNECT:
PostgreSQL, MySQL, MongoDB, Supabase, Google Sheets, Stripe, Salesforce, HubSpot, Zoho, GA4, Metabase, custom REST APIs.

NOT A FIT IF:
• You don't have a database or structured data yet (let's do a Data Foundation Setup project first)
• You need real-time streaming (this is for batch / scheduled briefings)
• Your data is locked in a tool I don't have access to (we'd need to figure that out first)

NEXT STEP:
Message me with your industry + the 3-5 numbers your team checks every week. I'll come back within 12 hours with a proposed scope and any clarifying questions.
```

### Step 5 — FAQs (3 max)

**Q: I don't have Metabase set up yet — does the price include the install?**
A: Yes. Standard and Advanced tiers include Metabase deployment on your infrastructure (or I can host on Railway/Render at cost). Starter assumes you already have a BI tool — if not, mention it in your message and we'll bundle it.

**Q: How does the AI briefing actually work? I'm worried about hallucinations.**
A: Claude reads your dashboards via API + actual query results, not free-form generation. Every number in the weekly briefing is sourced from your data, with a link back to the dashboard cell. I've shipped this pattern in production at IACE for 60K+ candidates.

**Q: Can you build this in Tableau / Power BI / Looker instead of Metabase?**
A: Yes for Power BI and the briefing layer is BI-tool-agnostic. For Tableau/Looker the dashboards take longer (different licensing model). Mention your tool in the message and I'll re-quote.

---

## TILE 2 — Data Foundation Setup

**Pricing:** $1,000 / $2,500 / $4,000

### Cover image suggestion
An ETL/architecture diagram (you can draft in ChartDB or Excalidraw). Show: scattered sources on left → Python ETL → unified PostgreSQL → Metabase on right. If no diagram, use a clean PostgreSQL ER diagram screenshot.

### Step 4 — Process

**Milestone 1 — Source audit & schema design (Day 1-3)**
What you provide: read access (or sample exports) of each data source you want unified + 30-min call.
What I deliver: source-to-target mapping doc, proposed PostgreSQL schema, ER diagram.

**Milestone 2 — Build the warehouse + Metabase (Day 4-14, depending on tier)**
What I deliver: Python ETL scripts (SQLAlchemy + Pandas), PostgreSQL/Supabase warehouse provisioned, Metabase deployed and connected, first 5-8 dashboards shipped.

**Milestone 3 — QA & runbook (Last 2-3 days)**
What you provide: review of the data quality + dashboards.
What I deliver: data quality fixes, dedup rules tightened, runbook covering how to add a new source yourself, 30-day support starts.

### Step 5 — Description

```
Your data is scattered across 5 tools. Sales is in Salesforce, support is in Zendesk, product usage is in PostHog, finance is in QuickBooks, marketing is in HubSpot. Every analyst spends 80% of their time copy-pasting and 20% actually analyzing. You can't answer simple questions like "what's our cost per acquisition by channel" without a 2-hour spreadsheet exercise.

This service fixes that with a Data Foundation — a real production-grade ETL pipeline (Python + SQLAlchemy + Pandas) that pulls from each source, cleans and dedups the data, lands it in a single PostgreSQL or Supabase warehouse, and ships you the first 5-8 Metabase dashboards built on top.

WHAT YOU GET (per tier):

Starter ($1,000, 7 days):
• 1 source → PostgreSQL warehouse via Python ETL
• Schema designed and documented
• Metabase deployed + first dashboard shipped
• Daily scheduled refresh (cron-based)
• Runbook + 14-day support

Standard ($2,500, 14 days):
• 3 sources unified into one warehouse
• Cross-source joins designed (e.g., link Salesforce contacts to product usage)
• Metabase deployed + 5 dashboards covering your top KPIs
• Daily refresh, with retry/error logging
• 30-day support

Advanced ($4,000, 21 days):
• 5+ sources unified
• Supabase + Row-Level Security if you need multi-tenant access
• Indexes + materialized summary tables for performance
• Metabase + 8 dashboards, branded
• 1 month of post-launch tuning included

WHY ME:
• At Masai School I consolidated 40 fragile ETL pipelines into 20 clean production jobs handling millions of rows/day with zero downtime
• At IACE I unified 4 scattered data sources (Zoho CRM, Google Workspace, Think Exam platform, scanned PDFs) into one warehouse for 60,000+ exam candidates
• 80% faster dashboard load times via schema redesign and query optimization

SOURCES I'VE INTEGRATED:
PostgreSQL, MySQL, MongoDB, Supabase, AWS RDS, Google Sheets, Stripe, Salesforce, HubSpot, Zoho CRM, WATI (WhatsApp), Think Exam, Gmail/Drive APIs, GA4, custom REST APIs, scanned PDFs (OCR pipeline).

NOT A FIT IF:
• You need real-time streaming (Kafka, Kinesis, etc.) — this is batch ETL
• You're at petabyte scale and need Snowflake/BigQuery (let's talk; I can do the Metabase layer but the warehouse architecture is a different conversation)
• You don't have a clear list of sources or data dictionary yet — we should scope a discovery call first

NEXT STEP:
Message me with the list of tools you want unified + a sentence on what business question you can't answer today. I'll come back within 12 hours with a proposed schema sketch and timeline.
```

### Step 5 — FAQs

**Q: Can you migrate us off MySQL/MongoDB into PostgreSQL?**
A: Yes — this is exactly the kind of consolidation I did at Masai (40 → 20 pipelines, MySQL+MongoDB → PostgreSQL). I'll model the data correctly so downstream queries are fast and joinable.

**Q: We have data in Excel/Google Sheets — can that be a source?**
A: Yes, sheets are first-class sources. I'll set up daily pulls via the Google Sheets API. For Excel files I'll either watch a Drive folder or accept email-attached uploads.

**Q: Do we need to hire a dedicated DBA after this is set up?**
A: No. The runbook I leave covers how to add new sources, debug failed jobs, and resize the database if needed. Most clients run it themselves after handoff.

---

## TILE 3 — Claude AI Workflow Agent

**Pricing:** $1,500 / $3,500 / $6,000

### Cover image suggestion
A Claude Code interface screenshot (your own, anonymized) OR an agent-pipeline diagram showing: input → Claude → tool calls → output. Could also use a "before/after time saved" infographic.

### Step 4 — Process

**Milestone 1 — Workflow scoping (Day 1-3)**
What you provide: a description of the task you want automated, sample inputs + outputs, access to the systems involved.
What I deliver: a workflow diagram, list of tool integrations needed, success criteria.

**Milestone 2 — Build & test (Day 4-15)**
What I deliver: working Claude agent (Python or TypeScript), tool integrations (MCP servers if needed), test suite covering happy path + 5+ edge cases. You get a staging link to test.

**Milestone 3 — Deploy & handoff (Last 2-3 days)**
What you provide: production credentials.
What I deliver: production deployment, monitoring + error alerts, handoff doc, 30-day support.

### Step 5 — Description

```
You have a recurring task that's eating 5-10 hours of someone's week. Maybe it's parsing emails into CRM updates. Maybe it's reviewing contracts. Maybe it's pulling data from 3 dashboards and writing a Slack summary. You've thought "AI should be able to do this" — but every "AI agent" demo you've seen falls apart in production.

I build Claude-powered agents that actually run reliably in production. Not chatbot demos. Real workflows that execute end-to-end, log every step, and gracefully handle the edge cases that break amateur builds.

WHAT YOU GET (per tier):

Starter ($1,500, 7 days):
• 1 Claude agent automating a single end-to-end workflow
• Up to 2 tool integrations (your CRM, your email, your sheet, etc.)
• Python or TypeScript codebase you own
• Test suite covering happy path + 3 edge cases
• Handoff doc + 14-day support

Standard ($3,500, 14 days):
• Multi-step Claude agent with branching logic
• 2-3 tool integrations + delivery layer (Slack/email/sheet/dashboard)
• MCP servers for any custom tools your stack needs
• Test suite covering happy path + 5+ edge cases
• Production deployment + monitoring
• 30-day support

Advanced ($6,000, 21 days):
• Multi-agent system (planner + executor + reviewer pattern, or parallel agents)
• MCP server integrations for your full toolchain
• Observability: every tool call logged, retryable, auditable
• Production deploy + alerting on failures
• 1 month of post-launch tuning + iteration included

WHY ME:
• I run multiple Claude Code agents in production today (data extraction pipeline serving 60,000+ exam candidates, custom MCP servers, automated reporting)
• 4 years of production data engineering background means I think about edge cases, retries, and data quality up front — not as bug fixes later
• Hyderabad, India · responsive across US/EU business hours

COMMON USE CASES I'VE BUILT:
• Document extraction pipelines (PDFs, scanned forms, invoices) → structured JSON
• Lead enrichment + CRM sync (read enrichment APIs, score leads, update HubSpot/Salesforce)
• Weekly narrative briefings (Claude reads dashboards, writes exec summaries)
• Customer support triage (categorize incoming tickets, draft replies, route to humans)
• Internal Q&A bots (Claude + your knowledge base via MCP)

NOT A FIT IF:
• You need a chatbot for end-customer conversations (different shape; let's discuss)
• Your "AI workflow" actually needs deterministic logic with no judgment calls — a regular script is cheaper and more reliable
• You don't have a clear before-and-after picture of what success looks like

NEXT STEP:
Message me with: the workflow you want automated (3-5 sentences), how often it runs, what tools/systems it touches, and what "success" looks like. I'll come back within 12 hours with feasibility + scope.
```

### Step 5 — FAQs

**Q: Why Claude API and not OpenAI / Gemini?**
A: I work with all three but lead with Claude because of (a) reliability on long context tasks, (b) the official MCP ecosystem, (c) production stability for agentic workflows. If you have a strong reason to use OpenAI or Gemini I'll quote that path — happy to discuss tradeoffs.

**Q: What's the ongoing API cost after build?**
A: Depends on volume. For most workflows I scope, Claude API costs run $20-200/month. I'll size it during scoping and you'll see exact numbers in the proposal.

**Q: Can you integrate with [internal tool we have]?**
A: Probably yes via REST API, MCP server, or browser automation. Mention the tool in your message and I'll confirm before we start.

---

## TILE 4 — Production PDF Result Engine

**Pricing:** $400 / $1,200 / $2,500

### Cover image suggestion
A page of a generated PDF result sheet (anonymized — replace student names with "Student A/B/C" and randomize numbers). Or an architecture diagram: Excel upload → FastAPI → WeasyPrint → PDF output.

### Step 4 — Process

**Milestone 1 — Template design (Day 1-2)**
What you provide: a sample of the input Excel data + the desired output PDF layout (rough sketch is fine).
What I deliver: a HTML/CSS template that renders to your target PDF + sample output for review.

**Milestone 2 — Build the engine (Day 3-14)**
What I deliver: FastAPI backend that accepts Excel uploads, processes the data, generates segmented PDFs (per branch, district, category), and returns download links. React UI included in Standard+.

**Milestone 3 — Test & deploy (Last 2-3 days)**
What you provide: real production data sample to test against.
What I deliver: load testing report, deployment to your infrastructure (Railway/Vercel/your AWS), runbook, 30-day support.

### Step 5 — Description

```
You upload a 10,000-row Excel of test/exam/score results. You need to email each district/branch/category their own segmented PDF with charts, rankings, and individual breakdowns. Doing this in Excel takes a junior staffer 2 days and they still mess up the merge field formatting half the time.

I built exactly this engine in production at IACE for 60,000+ exam candidates. This service productizes it.

WHAT YOU GET (per tier):

Starter ($400, 7 days):
• 1 PDF template (HTML/CSS rendered via WeasyPrint or similar)
• Python script that reads your Excel and generates 1 PDF per row (or per group)
• Output: a folder of named PDFs + a manifest CSV
• Handoff doc + 14-day support

Standard ($1,200, 14 days):
• Branch/district/category-segmented PDFs from a single Excel upload
• FastAPI backend with simple admin upload UI
• Batch generation with progress tracking
• Email delivery option (each segment owner gets their PDF auto-emailed)
• 30-day support

Advanced ($2,500, 21 days):
• Full FastAPI + React admin app
• WeasyPrint for production-grade PDFs (custom branding, charts via Matplotlib/Vega)
• Email delivery + downloadable archive
• Admin panel: upload history, regenerate, audit log
• Deployed to your infrastructure (Railway / Vercel / AWS)
• 1 month of post-launch tuning included

WHY ME:
• I built this engine for 60,000+ exam candidates per cycle at IACE — district-segmented PDFs, distributed to thousands of students per exam
• Stack: FastAPI + React + Supabase + WeasyPrint (this is my daily-job stack)
• I know the edge cases: Unicode names, RTL languages, Excel formula evaluation, broken cell references, batch retries

USE CASES:
• EdTech: exam result sheets segmented by class/branch/region
• Coaching institutes: progress reports per student
• Healthcare: lab results PDFs from CSV exports
• HR: payroll/appraisal letters in batch
• Real estate: per-property valuation reports
• Insurance: policy renewal documents

NOT A FIT IF:
• You need real-time PDF generation per user click (different architecture; let's discuss)
• Your input data is so dirty that data cleaning is the actual project (do a Data Foundation Setup first)
• You need extreme typographic control (LaTeX-level) — WeasyPrint covers 95% of cases but not 100%

NEXT STEP:
Message me with: your input data shape (1 row of sample), the desired output (a sketch or mockup), and roughly how many PDFs per run. I'll come back within 12 hours with a feasibility check.
```

### Step 5 — FAQs

**Q: Can you handle Indian languages (Telugu, Tamil, Hindi) in the PDFs?**
A: Yes. WeasyPrint supports all Unicode scripts; I just need the right font files. Done this in production for IACE.

**Q: Can the PDFs have charts/graphs?**
A: Yes — Matplotlib or Vega rendered to inline SVG/PNG inside the PDF. Add to your message what kind of charts you need.

**Q: Will this scale to 100K+ PDFs per run?**
A: Yes with the Advanced tier (batched + parallelized). For volumes above that we'd talk about a custom architecture.

---

## TILE 5 — Real-Time Leaderboard Portal

**Pricing:** $700 / $1,500 / $3,000

### Cover image suggestion
A leaderboard UI screenshot (anonymize names, fake the numbers). Or a clean React component preview. Avoid stock-photo "trophy" images — they look generic.

### Step 4 — Process

**Milestone 1 — Spec + wireframe (Day 1-2)**
What you provide: data source (DB or API), example user list with rankings, a 30-min call.
What I deliver: a wireframe of the leaderboard UI + the API contract.

**Milestone 2 — Build (Day 3-14)**
What I deliver: React + FastAPI codebase, live leaderboard pulling from your data, filters (by branch/category/time), self-service rank lookup. Staging deployment.

**Milestone 3 — Polish & deploy (Last 2-3 days)**
What you provide: production credentials + branding (logo, colors).
What I deliver: branded production deployment, runbook, 30-day support.

### Step 5 — Description

```
You run a coaching program, a fitness app, a sales team, or a community where rankings matter. You want a leaderboard portal users can check in real-time — not a stale CSV your admin emails out once a week.

I built exactly this at IACE — a 5-tier ranking portal with branch-level filtering, self-service rank lookup, and 60,000+ exam candidates served. This service productizes that work for your use case.

WHAT YOU GET (per tier):

Starter ($700, 7 days):
• Single-page React leaderboard
• 1 ranking dimension, fixed dataset, basic styling
• Connected to your database or a flat file
• Handoff doc + 14-day support

Standard ($1,500, 14 days):
• React frontend + FastAPI backend
• Multiple filters: branch, category, time period
• Self-service rank lookup (user enters ID, sees their rank)
• Auth (basic) — login required to view
• Branded with your colors/logo
• 30-day support

Advanced ($3,000, 21 days):
• 5-tier ranking system (overall + 4 sub-categories)
• Branch/department/cohort filtering with deep links
• Public + private leaderboards (some users see only their own segment)
• Real-time updates (WebSocket or polling, depending on scale)
• Admin panel: data refresh, manual overrides, exports
• Deployed to your AWS/Railway/Vercel + 1 month post-launch tuning

WHY ME:
• I built a 5-tier real-time leaderboard portal at IACE for 60,000+ exam candidates with branch-level filtering
• Stack: React + TypeScript + FastAPI + AWS RDS + Alembic — production-tested
• Mobile-responsive by default (most leaderboard checks happen on phones)

USE CASES:
• EdTech: exam/test rankings, class leaderboards
• Coaching/fitness: workout streaks, weekly challenge rankings
• Sales teams: revenue leaderboards by region/quarter
• Community/gaming: contribution scores, achievement boards
• Marketing: referral leaderboards, ambassador programs

NOT A FIT IF:
• You need true sub-second real-time at 100K+ concurrent users (different architecture; let's talk)
• You don't have ranking data structured anywhere yet (do a Data Foundation Setup first)
• You want me to design the gamification logic itself (different gig — let's discuss)

NEXT STEP:
Message me with: the data source (DB or API), how rankings are calculated, and how often they need to refresh. I'll come back within 12 hours with a wireframe sketch and timeline.
```

### Step 5 — FAQs

**Q: How fresh is the data shown? Real-time real-time, or polling every minute?**
A: Depends on tier and your data source. Starter and Standard poll on a configurable interval (every 1-15 min). Advanced supports WebSocket-based live updates if your DB has change events (Postgres LISTEN/NOTIFY, etc.).

**Q: Can users see their own private rank without seeing everyone else's?**
A: Yes — Advanced tier supports private leaderboards. Set permissions per user/segment so each person only sees their relevant scope.

**Q: Will this work on mobile?**
A: Yes, mobile-responsive by default. Most leaderboard checks happen on phones, so I optimize for that.

---

## TILE 6 — WhatsApp + Email Outreach Automation

**Pricing:** $400 / $1,000 / $2,000

### Cover image suggestion
A WhatsApp business chat screenshot (anonymized) showing a templated message + delivery report. Or a simple infographic: "10,000+ admissions powered by automated outreach."

### Step 4 — Process

**Milestone 1 — Channel setup (Day 1-2)**
What you provide: WATI account (or signup), email sending account (Gmail/SendGrid), source list (CSV or Google Sheet).
What I deliver: connections tested, sample message sent end-to-end.

**Milestone 2 — Build the pipeline (Day 3-14)**
What I deliver: Python pipeline that reads your list, personalizes templates, queues sends, handles rate limits, logs replies, dedups across runs. Templates designed with you.

**Milestone 3 — Launch + handoff (Last 2-3 days)**
What you provide: green light to send the first real campaign.
What I deliver: first campaign sent live, dashboard for tracking opens/replies, runbook, 30-day support.

### Step 5 — Description

```
You have a list of 1,000-50,000 prospects, leads, or past customers. You need to reach them with a personalized message — name, context, CTA — across WhatsApp and email. Doing this manually is impossible. Doing it with the wrong tool gets your sender reputation killed in a week.

I built exactly this pipeline at Gamify EduTech — WhatsApp + email outreach automation that powered 10,000+ student admissions across multiple intake cycles. Python + Google Sheets + WATI API + QR codes for tracking.

WHAT YOU GET (per tier):

Starter ($400, 7 days):
• Single-channel campaign (WhatsApp OR email, not both)
• 1 message template with personalization (name, company, context)
• List read from Google Sheets, results logged back
• Daily send schedule, basic dedup
• Handoff doc + 14-day support

Standard ($1,000, 14 days):
• WhatsApp + email combined — same lead gets the right message in the right channel
• Multiple templates (intro / follow-up / final reminder)
• Scheduled sends, rate-limit safe
• Reply detection — if a lead replies, automated sends stop
• Per-lead activity log
• 30-day support

Advanced ($2,000, 21 days):
• Full outreach pipeline: WhatsApp + email + QR-code tracking + webhook capture
• Lead scoring based on opens, replies, clicks
• Sheets-based admin dashboard: see every lead's status, override, export
• Multi-campaign support (run several flows in parallel)
• 1 month of post-launch tuning included

WHY ME:
• At Gamify EduTech I built this exact pipeline that powered 10,000+ student admissions
• Stack: Python + Google Sheets + WATI API + Gmail API + QR codes — battle-tested in production
• I know the WhatsApp Business API quirks (template approval, opt-in tracking, rate limits) and how to keep your sender rating clean

USE CASES:
• EdTech admissions outreach
• Coaching/training program enrolment
• Sales follow-ups for warm leads
• Event invitations (weddings, conferences, drops)
• Re-activation campaigns to past customers
• Survey/feedback collection at scale

REQUIREMENTS YOU MUST PROVIDE:
• An approved WATI (or 360dialog/Twilio WhatsApp Business) account — I can guide setup but the account is yours
• A clean source list — names, phone numbers (with country codes), and any context fields you want to personalize on
• Email sending account if doing email channel — Gmail API, SendGrid, or similar

NOT A FIT IF:
• You don't have a WhatsApp Business API account and don't want to set one up (free WhatsApp doesn't allow automation)
• Your list is unverified / scraped / cold without opt-in (you'll get banned within hours; please don't ask me to do this)
• You need a full CRM (this is outreach automation, not a sales platform)

NEXT STEP:
Message me with: list size, current channel(s) you use, what you want to say, and whether you have a WATI/360dialog account. I'll come back within 12 hours with feasibility + timeline.
```

### Step 5 — FAQs

**Q: Will this get my WhatsApp number banned?**
A: Not if you (a) use a WhatsApp Business API account (WATI or similar), (b) only message users who've opted in, and (c) use approved templates. I follow all three rules; if your use case doesn't meet them I'll tell you up front rather than build something that breaks.

**Q: Can this integrate with my existing CRM (HubSpot, Salesforce, Zoho)?**
A: Yes — I'll add CRM sync as a Standard or Advanced tier add-on. Lead status updates flow back to your CRM in real-time.

**Q: How do I get my message templates approved by WhatsApp?**
A: I'll write them following WA's content guidelines and submit them through your WATI account. Approval typically takes 1-3 days. I'll factor that into the timeline.

---

## TILE 7 — Metabase Dashboard Audit + Performance Tune

**Pricing:** $300 / $700 / $1,200

### Cover image suggestion
A "before / after" performance comparison — your Masai work showed 80% faster query times. A simple bar chart: "Before: 12s, After: 2s" or similar. Avoid using a stock dashboard image.

### Step 4 — Process

**Milestone 1 — Audit (Day 1-2)**
What you provide: read access to your Metabase admin + sample of slow dashboards, the underlying database (read-only).
What I deliver: audit report — list of slow queries (with timing), root causes (missing indexes, full table scans, N+1 queries, etc.), prioritized fix list.

**Milestone 2 — Fix (Day 3-12)**
What I deliver: query rewrites, index recommendations, materialized summary tables where appropriate, model-layer cleanup, caching configuration tuned. Each fix shipped to your staging Metabase first.

**Milestone 3 — Verify & runbook (Last 2 days)**
What you provide: review of the changes.
What I deliver: before/after timing report, runbook documenting what was changed and why, 30-day support to handle any regressions.

### Step 5 — Description

```
Your Metabase dashboards take 30+ seconds to load. Users have stopped checking them. The whole point of "self-service analytics" is dead because nobody waits for the spinner.

This is fixable, and it's almost always the same 5-6 problems: missing indexes, queries that re-aggregate 100M rows on every load, dashboards joining the wrong way, no caching, no materialized summaries.

I rebuilt 30+ Metabase dashboards at Masai School and got load times down by ~80%. This service does the same for you.

WHAT YOU GET (per tier):

Starter ($300, 5 days):
• 1 specific dashboard audited end-to-end
• Slow queries identified, fixed, and benchmarked (before/after)
• Concise report on what was wrong + what I changed
• 14-day support

Standard ($700, 10 days):
• Up to 5 dashboards audited
• Query rewrites + index recommendations + caching configuration tuned
• Database-level fixes (indexes added, query plans verified)
• 30-day support
• Suitable for most teams hitting performance pain on their core dashboards

Advanced ($1,200, 14 days):
• Up to 15 dashboards audited
• Materialized summary tables where it makes sense (rolling aggregates, daily snapshots)
• Model-layer cleanup (Metabase Models, segments, metrics consolidated)
• Schema review and recommendations for the underlying database
• Comprehensive runbook so your team can maintain performance going forward
• 30-day post-launch tuning

WHY ME:
• At Masai School I owned 30+ Metabase dashboards in production and rebuilt them with 80% faster query times
• 4+ years of SQL/PostgreSQL/MySQL/MongoDB optimization experience
• I work with both the Metabase model layer AND the underlying database — most freelancers do only one and miss half the wins

COMMON ROOT CAUSES I FIX:
• Missing or wrong indexes
• Full table scans where partial indexes work
• Repeated calculation of the same metric across multiple cards (consolidate via Metabase Models or a metrics table)
• Unbounded date ranges (default time filter applied at the database level)
• Cross-joins that should be inner joins
• Unnecessary subqueries Metabase generates from the GUI builder
• No caching configured (default Metabase caching is OFF)

NOT A FIT IF:
• Your data volume is genuinely beyond Postgres/MySQL — at 100M+ rows you may need Snowflake/BigQuery/Clickhouse instead, and that's a different conversation
• Your dashboard is slow because of the front-end (lots of charts, lots of filters) — that's a redesign, not a perf tune
• You don't have admin access to Metabase or the underlying DB

NEXT STEP:
Message me with: the URL of the slowest dashboard (or a screen recording of the spinner), how long it takes to load today, and what database backs it. I'll come back within 12 hours with an estimate of what's likely wrong and how long it'll take to fix.
```

### Step 5 — FAQs

**Q: Will you need read/write access to our database?**
A: Read-only is enough for the audit. I'll send specific DDL changes (CREATE INDEX statements, materialized view definitions) for you to review and apply, OR you can grant temporary write access if you want me to apply them directly.

**Q: Our Metabase is on the cloud / open-source / Pro — does that matter?**
A: I work with all three. The performance fixes are mostly database-side and Model-layer side, both of which work the same across cloud + OSS + Pro.

**Q: Can you also build NEW dashboards while you're auditing?**
A: This service is performance-focused. If you want new dashboards built I'll quote separately — the Reporting Autopilot tile covers that.

---

## After publishing each tile

When a tile gets approved (24-48h after Submit) it appears at: https://www.upwork.com/freelancers/~01d8c09c741b3958b7 in the **Project Catalog** section.

Each approved tile gets a public URL like `https://www.upwork.com/services/product/...` — you can share that link directly to anyone who asks "do you do X?" without burning Connects on a proposal.

Approved catalog tiles also get surfaced in Upwork's Catalog search — that's an inbound channel that runs 24/7 for free.
