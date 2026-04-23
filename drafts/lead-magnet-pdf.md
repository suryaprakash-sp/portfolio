# 10 Data & Ops Workflows I've Automated
## …and what each one actually saved

_A field guide for EdTech and SMB founders who are tired of their team burning hours on spreadsheets._

— Surya Prakash Manubolu · Data & AI Automation Consultant
[suryaprakash-sp.github.io/portfolio](https://suryaprakash-sp.github.io/portfolio/)

---

### Why this exists

Every team I've worked with had the same story: a skilled person spending 10–20 hours/week pulling CSVs, pasting into Sheets, reformatting, emailing out — work that nobody wanted to own but everyone relied on.

These 10 workflows are ones I've actually shipped into production. For each one I've included **what broke before**, **what it looks like now**, and **what the automation saved** (in hours, in revenue, or in "nobody crying at 9pm on a Friday").

You can use this as a checklist of what's automatable in your own stack.

---

## 1. Raw mock-test Excel → district-segmented PDF result sheets

**Where:** IACE (coaching institute, 58,000+ exam candidates)

**Before:** After every exam cycle, the ops team manually cut Excel dumps by district, formatted ranks in Word, and emailed PDFs branch-by-branch. One cycle = ~2 days of work for 2 people.

**After:** FastAPI + React + Supabase + WeasyPrint pipeline. Upload the raw Excel, click once, and the engine auto-computes district rankings, category breakdowns, and spits out thousands of branded PDF result sheets ready to distribute.

**Saved:** ~14 hours per exam cycle. And the team sleeps the night before results go out.

---

## 2. Static result emails → real-time leaderboard portal

**Where:** IACE

**Before:** Students waited for a PDF email after every exam. Parents called the office asking "what was my child's rank?" — because the email had landed in spam.

**After:** Real-time leaderboard portal (React + TypeScript + FastAPI + AWS RDS). Students enter mobile + DOB (no login required), see their rank, a 5-tier champion/expert/advanced/intermediate/beginner badge, branch-level leaderboards, and a 3D podium UI for toppers.

**Saved:** Support calls about "what's my rank" dropped to zero.

---

## 3. Scattered data sources → single PostgreSQL warehouse

**Where:** IACE

**Before:** Data lived in Zoho CRM, Google Sheets, the Think Exam platform, and scanned PDFs. Any question that touched two of them required a human spreadsheet session.

**After:** Production ETL with crash-safe pagination, retry logic, and batch writes, landing everything in a single PostgreSQL warehouse powering daily ops dashboards.

**Saved:** Questions that used to take half a day to answer now take a query. New hires can be productive on day one.

---

## 4. Manual fee reconciliation → autonomous fee validators

**Where:** IACE

**Before:** Finance team cross-referenced Razorpay statements vs CRM vs spreadsheets at every month-end, hunting down mismatches row by row.

**After:** A scheduled Python job reconciles every payment against CRM records, flags mismatches in a dashboard, and emails a Slack summary. Humans only touch the exceptions.

**Saved:** ~8 hours/week of finance-team time.

---

## 5. Manual branch performance reports → daily automated briefings

**Where:** IACE

**Before:** Branch managers got WhatsApped spreadsheets at erratic times. Consistency varied by whoever was on duty.

**After:** Daily "Real Intensive Program" performance reports auto-generated in the morning, pushing top-level branch metrics into ops dashboards and summarized in Slack.

**Saved:** Consistent 8am-sharp reports. 7 branches, zero manual touch.

---

## 6. 40 fragile ETL pipelines → 20 clean production jobs

**Where:** Masai School (25,000+ students)

**Before:** 40+ ETL jobs had accumulated over years. Half were duplicates, a third were fragile (a schema change upstream = Sunday incident). Onboarding a new analyst took weeks.

**After:** Consolidated to 20 production-grade Python ETL pipelines processing millions of rows daily from MySQL and MongoDB into PostgreSQL. Each one documented, each one idempotent, each one with retries.

**Saved:** 50% fewer pipelines. Sunday pages stopped. Analyst ramp-up dropped to days.

---

## 7. Slow Metabase dashboards → 80% faster load times

**Where:** Masai School

**Before:** Key dashboards took 10+ seconds to load. Stakeholders stopped using them because waiting killed their flow.

**After:** Schema redesign, query optimization, and materialized views cut load times by 80%. 30+ Metabase dashboards now render in under 2 seconds.

**Saved:** 40+ business stakeholders back in the data, not in their inbox asking for screenshots.

---

## 8. 20 hours/week of manual reporting → automated narrative briefs

**Where:** Masai School

**Before:** Weekly exec reports required someone to pull numbers from dashboards, paste into Google Docs, type a narrative, email it.

**After:** Google Docs and Gmail API automation that pulls the numbers, drops them into a templated narrative ("retention dropped 4% this week because…"), and emails the brief on schedule.

**Saved:** 20 hours/week of senior analyst time. That's 1,000 hours/year reclaimed.

---

## 9. Manual WhatsApp outreach → one-click WATI campaign system

**Where:** Gamify EduTech

**Before:** Admissions team sent WhatsApp messages one by one for every campaign touchpoint. High drop-off between cohorts because follow-ups slipped.

**After:** Python + Google Sheets + WATI API system. Upload a sheet, click send, and the right message lands with the right student with personalization.

**Saved:** Campaign turnaround dropped from days to minutes. Engagement rates climbed because follow-ups actually happened.

---

## 10. Broken link attribution → QR-code multi-source tracking

**Where:** Gamify EduTech

**Before:** Offline and radio campaigns used long trackable URLs that students mistyped or ignored. Attribution was guesswork.

**After:** QR-code system tied to a Python attribution backend that tracks the source without relying on the user typing a URL. Deployed across 30+ offline campaigns.

**Saved:** Clean attribution data. Marketing finally knew which campaigns actually worked.

---

## The pattern

Every one of these workflows has the same shape:

1. A team is spending hours on something repetitive.
2. The repetitive part has a clear rule set you could describe to a junior analyst.
3. A small piece of software — often **less than 500 lines of Python** — replaces the repetition without removing the judgment.

If any of this sounds familiar, the [**free 30-minute ops audit**](https://calendly.com/suryaprakash-sp987/30min) is the fastest way to find 3 workflows you can automate this month. No pitch, no hard sell.

— Surya
