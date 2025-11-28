export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  tech: string[];
  year: string;
  description: string[];
  category?: string;     // New: To categorize (e.g., Data Eng vs Analytics)
  gradient?: string;     // New: For the visual placeholder background
  icon?: string;         // New: To map to a Lucide icon name
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  location: string;
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}