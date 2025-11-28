import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';

// Initialize Gemini
// Note: We use process.env.API_KEY as per the requirements.
const apiKey = process.env.API_KEY || '';

// Create the client instance. 
// If apiKey is empty, this might be handled downstream or we just won't call generateContent.
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Surya Prakash Manubolu's professional portfolio website.
Your goal is to answer questions about Surya's experience, skills, and projects based strictly on his resume data provided below.
Be professional, concise, and enthusiastic about his data engineering and analysis capabilities.

Resume Context:
Name: ${RESUME_DATA.name}
Summary: ${RESUME_DATA.summary}
Skills: ${RESUME_DATA.skills.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
Experience: ${RESUME_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}). Achievements: ${e.achievements.join(' ')}`).join(' | ')}
Projects: ${RESUME_DATA.projects.map(p => `${p.title} (${p.year}) using ${p.tech.join(', ')}. ${p.description.join(' ')}`).join(' | ')}
Education: ${RESUME_DATA.education.map(e => `${e.degree} from ${e.school} (${e.year})`).join('; ')}

Rules:
1. Only answer questions related to Surya's professional life.
2. If asked about contact info, provide it from the context (Email: ${RESUME_DATA.contact.email}, LinkedIn: ${RESUME_DATA.contact.linkedin}).
3. Keep answers under 3 sentences unless asked for a detailed explanation.
4. Speak in the third person ("Surya has experience in...") or represent him directly if specifically asked, but default to being a helpful assistant promoting his work.
5. Highlight key metrics like "reducing pipeline overhead by 50%" or "improving dashboard load times by 80%" when relevant.
`;

export const chatWithResume = async (message: string) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};