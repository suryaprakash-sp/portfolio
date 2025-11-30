
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
  image?: string;         // Background image URL
  images?: string[];      // Array of images for slideshow
  size?: 'normal' | 'large' | 'tall'; // Grid span control
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
