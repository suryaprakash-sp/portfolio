
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

// Freelance Service Offering
export interface Service {
  id: string;
  icon: string;                // lucide icon name key
  tier: 'starter' | 'growth' | 'custom' | 'free';
  title: string;
  tagline: string;
  priceUSD: number | null;     // null = custom/free
  pricePrefix?: string;        // e.g. "from"
  priceSuffix?: string;        // e.g. "one-time"
  recurringUSD?: number;       // monthly retainer in USD
  bestFor: string;
  deliverables: string[];
  featured?: boolean;
  ctaLabel: string;
}

// Multi-currency support
export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP' | 'AUD';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number;   // multiplier from USD
  locale: string; // e.g. 'en-IN' for formatting
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  contact: {
    email: string;
    linkedin: string;
    calendly: string;
  };
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  education: Education[];
}
