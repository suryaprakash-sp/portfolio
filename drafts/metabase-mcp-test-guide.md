# Metabase MCP — Local Test Guide

_Goal: validate the official Metabase MCP server (Metabase 60+) against your Claude Code setup before claiming "Claude × Metabase MCP" anywhere on profiles or proposals. Per the knowledge-doc rule: validate before claiming. Should take 60–90 minutes._

**Why this matters strategically:** The official MCP shipped recently. None of the Metabase freelancers we scanned on Upwork lead with it. If you confirm it works for your delivery patterns, you have a 1-2 month head-start window where you can sell "Claude reads your Metabase via the official MCP" with no real competition in your tier.

**If it works for you:** unlock the AI×Metabase positioning across Tile 1 (Reporting Autopilot pricing bump $2,500 → $3,500-4,000), Tile 7 (you can offer "Claude-narrated audit reports"), and proposals.

**If it has caveats:** still useful — flag them in proposals, but pivot to a custom Claude-hits-Metabase-API approach as plan B.

Sources: official docs at https://www.metabase.com/docs/latest/ai/mcp · release notes https://www.metabase.com/releases/metabase-60

---

## 0. Prerequisites

- Docker Desktop running (or `colima`)
- Your Claude Code working (you already have this; the freelance project's `.mcp.json` proves it)
- Anthropic API key in your `.env` (already set up for `claude-pdf-extractor`)
- ~5GB free disk space for Metabase image + sample data

---

## 1. Spin up Metabase locally

```bash
mkdir -p ~/metabase-test/metabase-data
cd ~/metabase-test
docker run -d -p 3000:3000 \
  --name metabase \
  -v $(pwd)/metabase-data:/metabase.db \
  metabase/metabase:latest
```

Wait ~60 seconds for boot, then open http://localhost:3000.

Run through the setup wizard:
- Pick **English**
- Create your admin account (any email/password — local only)
- For the "Add your data" step, pick **"I'll add my data later"** — Metabase ships with a built-in **Sample Database** that's perfect for testing
- Skip the marketing prompts

You should now see the Metabase home screen with the Sample Database queryable.

**Sanity check:** click "Browse data" → "Sample Database" → "Orders" → make sure you can see ~20K rows.

---

## 2. Confirm Metabase 60+ (MCP requires it)

In Metabase top-right, click the **gear icon → About Metabase**. Should show **v0.60.x or later**. If it's older, run:

```bash
docker stop metabase && docker rm metabase
docker pull metabase/metabase:latest
# re-run the docker run command from step 1
```

---

## 3. Enable MCP in Metabase admin

1. Go to **Admin Settings (gear icon top-right) → Settings → AI**
2. Look for **"AI integration"** or **"MCP server"** toggle
3. Enable it
4. Note the MCP endpoint URL — typically `http://localhost:3000/api/mcp` (verify in admin panel)
5. Generate an API key OR personal access token — Admin → Settings → API Keys → "Create API Key" → scope it to your admin user

---

## 4. Add the Metabase MCP to your Claude Code

Inside your `freelance` project (or a fresh sandbox dir), edit `.mcp.json` to add the Metabase server:

```json
{
  "mcpServers": {
    "metabase_test": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/inspector", "http://localhost:3000/api/mcp"],
      "env": {
        "METABASE_API_KEY": "<paste-the-key-from-step-3>"
      }
    }
  }
}
```

**Note:** Metabase's docs at https://www.metabase.com/docs/latest/ai/mcp may show a different exact spawn command — copy from there if this template doesn't match. The key things are:
- The endpoint URL points to your local Metabase
- The API key/token is in env

Restart Claude Code in that project (`exit` then re-launch with the project flag).

---

## 5. Test queries

Run these in Claude Code (inside the project where the MCP is loaded):

```
List all tables in the Metabase Sample Database.
```

```
Show me total revenue by month for the last 12 months from the Orders table. 
Build a Metabase question for it and save it to a new dashboard called "Test Dashboard".
```

```
Summarize the existing dashboards in this Metabase. For each dashboard, 
write a 2-sentence description of what it shows.
```

```
Find queries that are taking >2 seconds to run. List them with their current 
duration and suggest one optimization for each.
```

**What to verify:**
- Does Claude actually fetch data via the MCP tools, or hallucinate?
- Does it respect Sample Database row-level permissions?
- Can it CREATE a new question/dashboard, or only READ?
- Does multi-table JOIN reasoning work? (Metabot reportedly breaks here per the 2026 review I cited — the official MCP + Claude SHOULD do better)
- Latency: each tool call takes how long?

---

## 6. Document the findings

Create `~/freelance/portfolio/drafts/metabase-mcp-findings.md` with:

```
## What worked
- [ ] Read tables / schemas
- [ ] Read existing dashboards / questions  
- [ ] Run ad-hoc SQL via MCP
- [ ] Create new question
- [ ] Create new dashboard
- [ ] Multi-table JOINs in NL queries
- [ ] Performance audit-style queries

## What didn't (or had caveats)
- ...

## Fit for productized gigs
- Reporting Autopilot Tile 1: yes / no / with caveats?
- Performance Audit Tile 7: can Claude actually find slow queries via MCP?
- Custom Q&A bot for clients: viable as a productized add-on?

## Pricing implications
- Comfortable bumping Tile 1 Advanced $2,500 → $3,500? Why / why not?
- Any new tier idea?
```

---

## 7. Decide what to claim

Once findings doc is written:

- ✅ **All boxes checked**: claim "Claude + official Metabase MCP" on Upwork title, profile Overview, Tile 1 + 7 long descriptions, proposals
- ⚠️ **Mixed**: claim "Claude integrations with Metabase" generically (you've technically done it), don't claim "via official MCP" specifically
- ❌ **Doesn't work yet**: skip the MCP angle entirely, keep Metabase + Claude positioning generic, revisit in 30 days when Metabase releases more docs

---

## 8. Cleanup (after testing)

```bash
docker stop metabase && docker rm metabase
# keep ~/metabase-test/metabase-data if you want to reuse the setup
```

Remove the `metabase_test` entry from `.mcp.json` after testing — don't leave it loaded in production.

---

## Time budget

- Steps 1-4 (setup): 30-45 min
- Step 5 (testing): 20-30 min
- Step 6 (write findings): 15 min
- Step 7-8 (decide + cleanup): 10 min

**Total: 75-100 min on a quiet weekend block.**
