# 🎯 HR Interview Prep Agent - Quick Start Guide

## What is This?

An AI-powered agent that helps you prepare for HR interviews by:
- ✅ Answering HR questions in YOUR voice (first person)
- ✅ Using YOUR actual achievements and metrics
- ✅ Providing STAR format responses for behavioral questions
- ✅ Helping with salary negotiations (current: ₹8.625 LPA → target: ₹16-21 LPA)
- ✅ Simulating different interview scenarios

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
cd hr-agent
npm install
```

This installs:
- `@anthropic-ai/sdk` - To connect to Claude AI
- `typescript` & `ts-node` - To run the TypeScript code
- `@types/node` - For Node.js types

### Step 2: Set Your API Key

Get an API key from [https://console.anthropic.com/](https://console.anthropic.com/) (free $5 credit for new users)

**On Windows (PowerShell):**
```powershell
$env:ANTHROPIC_API_KEY="your_api_key_here"
```

**On Windows (Command Prompt):**
```cmd
set ANTHROPIC_API_KEY=your_api_key_here
```

**On Mac/Linux:**
```bash
export ANTHROPIC_API_KEY="your_api_key_here"
```

### Step 3: Run the Agent

```bash
npm start
```

That's it! The agent will guide you through the rest.

## 🎬 Example Session

```
🎯 HR Interview Prep Agent - Surya Prakash Manubolu

✓ Loaded profile for Surya Prakash Manubolu
✓ Current CTC: ₹8.625 LPA
✓ Expected CTC: ₹16-21 LPA (negotiable)
✓ Location: Bangalore → Hyderabad

📋 Select interview mode:
  1. HR Screening
  2. Technical Recruiter
  3. Hiring Manager
  4. Salary Negotiation
  5. General

Enter mode (1-5) [default: 5]: 1

📝 Select response style:
  1. Concise (30-45 seconds)
  2. Detailed (2-3 minutes) [recommended]
  3. STAR format

Enter style (1-3) [default: 2]: 2

💬 Your question: Tell me about yourself

🤖 Preparing response...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 SUGGESTED ANSWER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I'm a Data Analyst with 3+ years of experience building production
data systems in fast-paced EdTech environments. I specialize in the
full data stack - from ETL pipelines to dashboards to automation.

Currently, I'm at Masai School where I manage the entire data
infrastructure supporting 25,000+ students across 50+ courses. I've
built 20 production ETL pipelines that process millions of rows daily,
created 30+ Metabase dashboards that improved load times by 80%, and
automated reporting systems that save 20 hours of manual work every week.

My work earned me an 'Exceeded Expectations' performance rating this
year. Before this, I spent 2+ years at Gamify EduTech where I built
automated systems for student engagement and managed data for 10,000+
students.

I'm now looking to relocate to Hyderabad, which is my home city, due to
health concerns with Bangalore's weather. I'm excited about opportunities
where I can continue building data products and grow into data engineering
roles. I'm particularly interested in roles that involve scaling data
infrastructure and working with cross-functional teams.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Your question: What are your salary expectations?

...
```

## 📚 Common Use Cases

### 1. Practice "Tell me about yourself"

```
Mode: HR Screening (1)
Style: Detailed (2)
Question: "Tell me about yourself"
```

### 2. Practice Behavioral Questions

```
Mode: Hiring Manager (3)
Style: STAR format (3)
Question: "Tell me about a time you overcame a technical challenge"
```

### 3. Salary Negotiation Practice

```
Mode: Salary Negotiation (4)
Style: Detailed (2)
Question: "They offered 15 LPA. How should I respond?"
```

### 4. Quick Phone Screen Prep

```
Mode: HR Screening (1)
Style: Concise (1)
Question: "Why are you looking for a new job?"
```

## 🎓 Interview Modes

| Mode | When to Use | Sample Questions |
|------|------------|------------------|
| **HR Screening** | First calls with recruiters | Background, motivation, salary, availability |
| **Technical Recruiter** | Technical skill validation | Python/SQL experience, tools used, project details |
| **Hiring Manager** | Deep technical + behavioral | System design, biggest challenge, leadership |
| **Salary Negotiation** | Offer discussions | Compensation expectations, countering offers |
| **General** | Any question | All of the above |

## 💡 Pro Tips

### 1. Start with Detailed, Then Practice Concise
- First run: Use **Detailed** style to get the full answer
- Then ask: "Can you make this more concise for a phone screen?"
- Practice delivering the concise version naturally

### 2. Emphasize Your Rating
- You have an **"Exceeded Expectations"** rating - this is huge!
- Ask: "How can I work my performance rating into this answer?"

### 3. Practice STAR Format
- Use **STAR style** for behavioral questions
- Structure: Situation → Task → Action → Result
- Perfect for "Tell me about a time..." questions

### 4. Negotiation Scenarios
```
"They offered 15 LPA. I want 18 LPA. How should I respond?"
"How do I justify asking for 21 LPA when my current is 8.625 LPA?"
"What if they say the budget is only 14 LPA?"
```

### 5. Company-Specific Questions
```
"I'm interviewing at [company name]. What questions should I ask them?"
"How do I tailor my answer for a startup vs. enterprise?"
```

## 🛠️ Customizing Your Profile

Your data is in `hr-data/profile.json`. To update:

1. Open `hr-data/profile.json`
2. Edit any field:
   - Add new projects
   - Update salary expectations
   - Add behavioral examples
   - Change location preferences
3. Save and restart the agent

**Security Note**: This file is git-ignored - it won't be committed to your repo.

## 🎯 Example Questions to Practice

### Opening Questions
- "Tell me about yourself"
- "Walk me through your resume"
- "What do you do in your current role?"

### Behavioral (Use STAR Format!)
- "What's your biggest achievement?"
- "Tell me about a time you failed"
- "Describe a conflict you had with a teammate"
- "Tell me about a time you had to learn something new quickly"
- "Give me an example of when you showed leadership"

### Technical
- "What's your experience with Python and SQL?"
- "How do you design an ETL pipeline?"
- "Walk me through your dashboard building process"
- "How do you ensure data quality?"

### Motivation
- "Why are you leaving your current job?"
- "Why do you want to work here?"
- "Where do you see yourself in 3 years?"
- "What are you looking for in your next role?"

### Compensation
- "What are your salary expectations?"
- "What's your current CTC?"
- "Are you open to negotiation?"
- "When can you join?"

### Closing
- "Do you have any questions for us?"
- "Why should we hire you?"
- "Is there anything else you'd like to share?"

## 🔧 Troubleshooting

### Issue: "ANTHROPIC_API_KEY is not set"
**Fix**: Set the environment variable before running
```powershell
# PowerShell
$env:ANTHROPIC_API_KEY="your_key"
npm start
```

### Issue: "Profile not found"
**Fix**: Make sure you're in the project root and `hr-data/profile.json` exists

### Issue: "Cannot find module"
**Fix**: Install dependencies
```bash
cd hr-agent
npm install
```

### Issue: TypeScript errors
**Fix**: Use ts-node (already included in package.json)
```bash
npm start
```

## 💰 Cost

- Claude API: ~$0.05-$0.10 per Q&A session
- 20 practice questions: ~$1-$2
- Very affordable for comprehensive interview prep!

## 📈 Track Your Progress

Create a checklist of questions you want to practice:

- [ ] Tell me about yourself
- [ ] Why are you looking for a new job?
- [ ] What's your biggest achievement?
- [ ] Describe a technical challenge you faced
- [ ] What are your salary expectations?
- [ ] Do you have questions for us?

Run through each one, record yourself, and refine!

## 🎤 Next Steps

1. **Run the agent now**: `npm start` in the `hr-agent/` folder
2. **Practice 5-10 common questions**: Start with the opening questions
3. **Record yourself**: Read answers out loud and record them
4. **Refine**: Ask the agent to make answers more concise/detailed
5. **Customize**: Update `hr-data/profile.json` with your personal stories

---

## Need Help?

- 📖 Full documentation: See `hr-agent/README.md`
- 📧 Questions: suryaprakash.manubolu@gmail.com
- 🐛 Issues: Check that your API key is set correctly

**Good luck with your interviews!** 🚀
