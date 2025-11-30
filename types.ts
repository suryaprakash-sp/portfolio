
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
  category?: string;
  gradient?: string;
  icon?: string;
  image?: string;         // New: Background image URL
  size?: 'normal' | 'large' | 'tall'; // New: Grid span control
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
  title: string;
  tagline: string;
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
