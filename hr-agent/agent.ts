import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { HRProfile, InterviewMode, ResponseStyle } from './types';
import { generateSystemPrompt, COMMON_HR_QUESTIONS } from './prompts';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Load HR profile from JSON
function loadProfile(): HRProfile {
  const profilePath = path.join(__dirname, '..', 'hr-data', 'profile.json');

  if (!fs.existsSync(profilePath)) {
    throw new Error(`Profile not found at ${profilePath}. Please create hr-data/profile.json first.`);
  }

  const profileData = fs.readFileSync(profilePath, 'utf-8');
  return JSON.parse(profileData) as HRProfile;
}

// Create readline interface for CLI interaction
function createReadlineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

// Ask question and get user input
function askQuestion(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Main HR prep agent
export async function runHRPrepAgent() {
  console.log('\n🎯 HR Interview Prep Agent - Surya Prakash Manubolu\n');
  console.log('This agent will help you prepare for HR interviews by:');
  console.log('  • Answering common HR questions in first person');
  console.log('  • Providing STAR format responses for behavioral questions');
  console.log('  • Helping with salary negotiations');
  console.log('  • Simulating different interview scenarios\n');

  // Load profile
  let profile: HRProfile;
  try {
    profile = loadProfile();
    console.log(`✓ Loaded profile for ${profile.personalInfo.fullName}`);
    console.log(`✓ Current CTC: ${profile.compensation.currentCTC.displayValue}`);
    console.log(`✓ Expected CTC: ${profile.compensation.expectedCTC.displayRange}`);
    console.log(`✓ Location: ${profile.locationPreferences.currentLocation} → ${profile.locationPreferences.preferredLocations.join(', ')}\n`);
  } catch (error) {
    console.error('❌ Error loading profile:', error);
    process.exit(1);
  }

  const rl = createReadlineInterface();

  // Select interview mode
  console.log('📋 Select interview mode:');
  console.log('  1. HR Screening (basic background, motivation, salary)');
  console.log('  2. Technical Recruiter (skills validation, project details)');
  console.log('  3. Hiring Manager (deep technical, behavioral, culture fit)');
  console.log('  4. Salary Negotiation (compensation discussion)');
  console.log('  5. General (any HR question)\n');

  const modeChoice = await askQuestion(rl, 'Enter mode (1-5) [default: 5]: ');
  const modeMap: Record<string, InterviewMode> = {
    '1': 'hr-screening',
    '2': 'technical-recruiter',
    '3': 'hiring-manager',
    '4': 'negotiation',
    '5': 'general',
  };
  const mode: InterviewMode = modeMap[modeChoice] || 'general';
  console.log(`\n✓ Mode: ${mode}\n`);

  // Select response style
  console.log('📝 Select response style:');
  console.log('  1. Concise (30-45 seconds)');
  console.log('  2. Detailed (2-3 minutes) [recommended]');
  console.log('  3. STAR format (Situation, Task, Action, Result)\n');

  const styleChoice = await askQuestion(rl, 'Enter style (1-3) [default: 2]: ');
  const styleMap: Record<string, ResponseStyle> = {
    '1': 'concise',
    '2': 'detailed',
    '3': 'star',
  };
  const style: ResponseStyle = styleMap[styleChoice] || 'detailed';
  console.log(`\n✓ Style: ${style}\n`);

  // Generate system prompt
  const systemPrompt = generateSystemPrompt(profile, mode, style);

  // Conversation loop
  console.log('━'.repeat(60));
  console.log('🎤 Interview Prep Session Started');
  console.log('━'.repeat(60));
  console.log('\nAsk any HR question, or type:');
  console.log('  • "examples" - see common HR questions');
  console.log('  • "change mode" - switch interview mode');
  console.log('  • "change style" - switch response style');
  console.log('  • "profile" - view your profile summary');
  console.log('  • "exit" - end session\n');

  const conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];

  while (true) {
    const userQuestion = await askQuestion(rl, '\n💬 Your question: ');

    if (!userQuestion) continue;

    // Handle special commands
    if (userQuestion.toLowerCase() === 'exit') {
      console.log('\n👋 Good luck with your interviews!\n');
      rl.close();
      break;
    }

    if (userQuestion.toLowerCase() === 'examples') {
      console.log('\n📚 Common HR Questions:\n');
      Object.entries(COMMON_HR_QUESTIONS).forEach(([category, questions]) => {
        console.log(`\n${category.toUpperCase()}:`);
        questions.forEach((q, i) => console.log(`  ${i + 1}. ${q}`));
      });
      continue;
    }

    if (userQuestion.toLowerCase() === 'profile') {
      console.log('\n👤 Profile Summary:\n');
      console.log(`Name: ${profile.personalInfo.fullName}`);
      console.log(`Role: ${profile.careerNarrative.currentRole}`);
      console.log(`Experience: 3+ years`);
      console.log(`Current CTC: ${profile.compensation.currentCTC.displayValue}`);
      console.log(`Expected CTC: ${profile.compensation.expectedCTC.displayRange}`);
      console.log(`Location: ${profile.locationPreferences.currentLocation} → ${profile.locationPreferences.preferredLocations.join(', ')}`);
      console.log(`Portfolio: ${profile.additionalNotes.portfolioWebsite}`);
      continue;
    }

    if (userQuestion.toLowerCase() === 'change mode' || userQuestion.toLowerCase() === 'change style') {
      console.log('\n⚠️  To change mode/style, please restart the agent.');
      continue;
    }

    // Add user question to history
    conversationHistory.push({ role: 'user', content: userQuestion });

    try {
      console.log('\n🤖 Preparing response...\n');

      // Call Claude API
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: systemPrompt,
        messages: conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      });

      const assistantResponse = response.content[0].type === 'text'
        ? response.content[0].text
        : 'Unable to generate response';

      // Add assistant response to history
      conversationHistory.push({ role: 'assistant', content: assistantResponse });

      // Display response
      console.log('━'.repeat(60));
      console.log('💡 SUGGESTED ANSWER:');
      console.log('━'.repeat(60));
      console.log(`\n${assistantResponse}\n`);
      console.log('━'.repeat(60));

    } catch (error: any) {
      console.error('\n❌ Error:', error.message);
      if (error.message.includes('api_key')) {
        console.error('\n⚠️  Please set your ANTHROPIC_API_KEY environment variable.');
        console.error('   You can get an API key from: https://console.anthropic.com/\n');
        rl.close();
        break;
      }
    }
  }
}

// Run if executed directly
if (require.main === module) {
  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('\n❌ Error: ANTHROPIC_API_KEY environment variable is not set.\n');
    console.error('Please set it in your terminal or .env.local file:');
    console.error('  export ANTHROPIC_API_KEY="your_api_key_here"\n');
    console.error('Get your API key from: https://console.anthropic.com/\n');
    process.exit(1);
  }

  runHRPrepAgent().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}
