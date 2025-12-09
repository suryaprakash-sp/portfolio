# HR Interview Prep Agent

An intelligent AI agent to help Surya Prakash Manubolu prepare for HR interviews and job applications.

## Features

- **Multiple Interview Modes**: HR Screening, Technical Recruiter, Hiring Manager, Salary Negotiation
- **Response Styles**: Concise (30s), Detailed (2-3min), STAR format
- **First-Person Answers**: All responses in first person ("I have...", "My experience...")
- **Metric-Driven**: Uses specific numbers from your profile (25,000+ students, 80% improvement, etc.)
- **Behavioral Examples**: Pre-loaded STAR format answers for common behavioral questions
- **Salary Negotiation**: Smart guidance on compensation discussions

## Prerequisites

1. **Anthropic API Key**: Get one from [https://console.anthropic.com/](https://console.anthropic.com/)
2. **Node.js**: Version 18+ installed
3. **TypeScript**: Will be installed via npm

## Setup

### 1. Install Dependencies

```bash
cd hr-agent
npm install
```

This will install:
- `@anthropic-ai/sdk` - Claude API client
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions

### 2. Set API Key

**Option A: Environment Variable (Recommended)**
```bash
# On macOS/Linux
export ANTHROPIC_API_KEY="your_api_key_here"

# On Windows (PowerShell)
$env:ANTHROPIC_API_KEY="your_api_key_here"

# On Windows (Command Prompt)
set ANTHROPIC_API_KEY=your_api_key_here
```

**Option B: .env.local File**
Create a `.env.local` file in the project root:
```
ANTHROPIC_API_KEY=your_api_key_here
```

Then load it before running:
```bash
# Install dotenv
npm install dotenv

# Run with dotenv
node -r dotenv/config hr-agent/agent.js
```

### 3. Compile TypeScript (if needed)

```bash
npx tsc hr-agent/agent.ts --outDir dist --esModuleInterop --resolveJsonModule
```

Or add a build script to `package.json`:
```json
{
  "scripts": {
    "hr-prep": "ts-node hr-agent/agent.ts",
    "build-agent": "tsc hr-agent/*.ts --outDir dist"
  }
}
```

## Usage

### Basic Usage

```bash
# Option 1: Direct execution with ts-node (recommended)
npx ts-node hr-agent/agent.ts

# Option 2: Compile first, then run
npx tsc hr-agent/agent.ts --outDir dist --module commonjs --esModuleInterop
node dist/agent.js

# Option 3: Add to package.json scripts
npm run hr-prep
```

### Interactive Session

```
🎯 HR Interview Prep Agent - Surya Prakash Manubolu

📋 Select interview mode:
  1. HR Screening (basic background, motivation, salary)
  2. Technical Recruiter (skills validation, project details)
  3. Hiring Manager (deep technical, behavioral, culture fit)
  4. Salary Negotiation (compensation discussion)
  5. General (any HR question)

Enter mode (1-5) [default: 5]: 3

📝 Select response style:
  1. Concise (30-45 seconds)
  2. Detailed (2-3 minutes) [recommended]
  3. STAR format (Situation, Task, Action, Result)

Enter style (1-3) [default: 2]: 3

💬 Your question: Tell me about a time you faced a technical challenge
```

### Available Commands During Session

- **"examples"** - View common HR questions by category
- **"profile"** - Show your profile summary
- **"change mode"** - Switch interview mode (requires restart)
- **"change style"** - Switch response style (requires restart)
- **"exit"** - End the session

## Interview Modes Explained

### 1. HR Screening
- **Focus**: Basic background, motivation, salary, culture fit
- **Best For**: First-round calls with recruiters
- **Questions**: "Tell me about yourself", "Why are you looking?", "Salary expectations?"

### 2. Technical Recruiter
- **Focus**: Technical skills validation, tools, projects
- **Best For**: Technical screening with recruiters
- **Questions**: "What's your Python experience?", "Explain your ETL process", "What BI tools do you use?"

### 3. Hiring Manager
- **Focus**: Deep technical, system design, behavioral, impact
- **Best For**: Final rounds with engineering managers
- **Questions**: "Walk me through your biggest project", "How do you handle ambiguity?", "Tell me about a failure"

### 4. Salary Negotiation
- **Focus**: Compensation discussion, value demonstration
- **Best For**: Offer negotiation calls
- **Questions**: "What's your expected salary?", "Why do you deserve this increase?"

### 5. General
- **Focus**: Any HR question
- **Best For**: Practice sessions, mixed questions

## Response Styles Explained

### Concise (30-45 seconds)
- 2-3 sentences
- Hit key point immediately
- Use 1-2 metrics
- Perfect for screening questions

**Example**: "I'm a Data Analyst with 3+ years building production systems. At Masai School, I built 20 ETL pipelines supporting 25,000+ students and improved dashboard load times by 80%."

### Detailed (2-3 minutes) - RECOMMENDED
- Comprehensive answer
- Include context and background
- 3-4 specific examples with metrics
- Explain thought process
- End with impact/learning

### STAR Format
- **S**ituation: Set context (1-2 sentences)
- **T**ask: Your responsibility (1 sentence)
- **A**ction: What you did (3-4 sentences)
- **R**esult: Quantified impact (2-3 sentences)

Perfect for behavioral questions like "Tell me about a time..."

## Example Questions to Practice

### Introduction
- "Tell me about yourself"
- "Walk me through your resume"
- "What do you do in your current role?"

### Motivation
- "Why are you looking for a new job?"
- "Why do you want to work here?"
- "Where do you see yourself in 3-5 years?"

### Experience (Behavioral)
- "What's your biggest achievement?"
- "Tell me about a challenging project"
- "Describe a time you failed and what you learned"
- "Tell me about a conflict with a teammate"

### Technical
- "What's your experience with Python/SQL?"
- "Walk me through your ETL pipeline design"
- "How do you ensure data quality?"
- "What BI tools have you worked with?"

### Compensation
- "What are your salary expectations?"
- "What's your current CTC?"
- "What's your notice period?"
- "When can you join?"

### Closing
- "Do you have any questions for us?"
- "Why should we hire you?"
- "Is there anything else you'd like to share?"

## Customizing Your Profile

Your HR profile is stored in `hr-data/profile.json`. To update:

1. Open `hr-data/profile.json`
2. Edit any section (compensation, projects, behavioral examples, etc.)
3. Save the file
4. Restart the agent - changes will be loaded automatically

**Important**: Never commit `hr-data/profile.json` to git - it's git-ignored for security.

## Tips for Best Results

### 1. Be Specific with Questions
❌ "How should I answer questions?"
✅ "How should I answer: Tell me about your biggest achievement?"

### 2. Practice Different Styles
- Start with **Detailed** style to understand the full answer
- Then practice **Concise** style for phone screens
- Use **STAR** for behavioral questions

### 3. Follow Up
- Ask "Can you make this more concise?"
- Ask "Can you add more metrics?"
- Ask "How can I emphasize my Exceeded Expectations rating here?"

### 4. Salary Negotiation Practice
- Practice with mode **4 (Negotiation)**
- Ask: "They offered 15 LPA, how should I counter?"
- Ask: "How do I justify asking for 21 LPA?"

### 5. Record Yourself
- Read the agent's response out loud
- Record yourself answering
- Check if it sounds natural and authentic

## Troubleshooting

### "ANTHROPIC_API_KEY is not set"
**Solution**: Set the environment variable before running:
```bash
export ANTHROPIC_API_KEY="your_key_here"
```

### "Profile not found"
**Solution**: Make sure `hr-data/profile.json` exists in the project root.

### "Cannot find module '@anthropic-ai/sdk'"
**Solution**: Install dependencies:
```bash
npm install @anthropic-ai/sdk typescript @types/node
```

### TypeScript compilation errors
**Solution**: Use ts-node for direct execution:
```bash
npx ts-node hr-agent/agent.ts
```

## Security Notes

- **Never commit your API key** to git
- **Never share your profile.json** publicly - it contains sensitive salary info
- `hr-data/` folder is git-ignored by default
- Use environment variables for API keys, not hardcoded values

## Cost Estimation

- Claude Sonnet 4 pricing: ~$3 per million input tokens, ~$15 per million output tokens
- Each Q&A session: ~2,000-5,000 tokens (~$0.05-$0.10)
- 20 practice questions: ~$1-$2
- Very affordable for comprehensive interview prep!

## Future Enhancements

- [ ] Voice mode using speech-to-text
- [ ] Mock interview simulator with random questions
- [ ] Performance feedback on your answers
- [ ] Export answers to PDF/Markdown
- [ ] Company-specific preparation mode
- [ ] Integration with LinkedIn job descriptions

## Support

For issues or questions:
1. Check this README
2. Review `hr-data/profile.json` for accuracy
3. Ensure your API key is set correctly
4. Contact: suryaprakash.manubolu@gmail.com

---

**Good luck with your interviews!** 🎯
