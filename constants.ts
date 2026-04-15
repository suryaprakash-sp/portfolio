
import { ResumeData, Currency } from './types';
import {
  Database, BarChart3, Code2, Server, Globe, Terminal, LucideIcon, LineChart,
  ShoppingBag, Wallet, Cpu, Cloud, Layout, Shield, Sparkles, Rocket, Bot, Gift,
  FileText, Users, Zap
} from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Surya Prakash Manubolu",
  title: "Data & AI Automation Consultant",
  tagline: "I help EdTech and SMB teams eliminate 20+ hours/week of manual reporting and ops work — by combining 4+ years of data analytics experience with AI agents and Claude Code.",
  contact: {
    email: "suryaprakash.sp987@gmail.com",
    linkedin: "linkedin.com/in/manubolusuryaprakash",
    calendly: "https://calendly.com/suryaprakash-sp987/30min"
  },
  summary: "I'm a Data Analyst with 4+ years building production systems in EdTech — and now I freelance too. I've scaled data infrastructure for 25,000+ active users, built end-to-end PDF result engines and ETL automation handling 58,000+ exam candidates, and shipped automation that eliminated 20+ hours of weekly manual work for the teams I've worked with. What makes me different: I combine deep analyst judgment with AI-native delivery (Claude Code, Claude API, autonomous agents) — so I ship in days what used to take weeks, without the typical AI-freelancer pitfalls of hallucinated metrics or broken pipelines. I work best with EdTech companies, coaching institutes, and SMBs who have data scattered across tools and ops teams burning out on repetitive work.",
  skills: [
    {
      category: "Languages",
      skills: ["Python", "SQL", "TypeScript", "JavaScript"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "AWS RDS", "ChartDB"]
    },
    {
      category: "AI & Automation",
      skills: [
        "Claude Code", "Claude API", "OpenAI", "Gemini",
        "Prompt Engineering", "AI Agent Workflows", "Google Apps Script"
      ]
    },
    {
      category: "BI & Visualization",
      skills: ["Metabase", "Power BI", "Redash", "Google Sheets", "Excel"]
    },
    {
      category: "Data Engineering",
      skills: [
        "ETL Pipelines", "API Integration", "Data Modeling",
        "PDF/OCR Extraction", "Web Scraping", "SQLAlchemy", "Pandas",
        "Playwright", "Selenium"
      ]
    },
    {
      category: "Web & Backend",
      skills: ["FastAPI", "React", "Vite", "Tailwind CSS", "WeasyPrint", "Alembic"]
    },
    {
      category: "APIs & Tools",
      skills: ["Zoho CRM", "WATI", "Gmail/Drive/Sheets API", "Vercel", "Railway", "Git"]
    }
  ],
  experience: [
    {
      role: "Data Analyst",
      company: "Masai School",
      location: "Bangalore",
      period: "Oct 2024 – Present",
      achievements: [
        "Manage end-to-end data infrastructure supporting 25,000+ active students across 50+ courses.",
        "Engineered comprehensive student lifecycle dashboard and 30+ Metabase dashboards using Python, improving load times by 80%.",
        "Streamlined reporting using Google Docs API/Gmail API, eliminating 20 hours of manual work weekly.",
        "Redesigned analytics-ready database schema, reducing ETL pipeline count from 40+ to 20 (50% reduction).",
        "Developed 20 production ETL pipelines in Python processing millions of rows daily from MySQL/MongoDB to PostgreSQL."
      ]
    },
    {
      role: "Data Analyst",
      company: "Gamify EduTech",
      location: "Hyderabad",
      period: "Jan 2022 – Mar 2024",
      achievements: [
        "Migrated admissions tracking system to Google Sheets/Python, managing data for 10,000+ students.",
        "Created automated WhatsApp messaging system using WATI API for instant student engagement.",
        "Processed millions of rows of campaign data, implementing QR code systems for multi-source collection.",
        "Led cross-functional team of 7 to publish 300+ blogs, increasing website traffic by 30%."
      ]
    }
  ],
  projects: [
    {
      title: "Production Result-Generation Engine — IACE",
      tech: ["FastAPI", "React", "Supabase", "WeasyPrint", "Vercel", "Railway"],
      year: "2025",
      category: "AI Automation",
      icon: "FileText",
      size: "large",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Built end-to-end web app that turns raw mock-test Excel uploads into district-segmented PDF result sheets, distributed to thousands of students after every exam cycle.",
        "Auto-computes rankings, district-wise toppers, and category breakdowns. Live in production at results-generator.iace.co.in."
      ]
    },
    {
      title: "Multi-Source Data Hub & ETL Automation — IACE",
      tech: ["Python", "PostgreSQL", "Zoho CRM API", "Google Workspace", "Playwright", "OCR"],
      year: "2025",
      category: "Data Engineering",
      icon: "Database",
      size: "large",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558494949-efc02584299d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576444356170-66073046b1bc?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Unified scattered data sources (Zoho CRM, Google Sheets, Think Exam platform, scanned PDF results) into a single PostgreSQL warehouse powering daily ops.",
        "Synced and tracked 58,165 exam candidates with crash-safe pagination. Built 7 branch-level sales pipelines + autonomous fee validators + daily performance reports."
      ]
    },
    {
      title: "Real-Time Student Leaderboard Portal — IACE",
      tech: ["React", "TypeScript", "Tailwind", "FastAPI", "AWS RDS", "Alembic"],
      year: "2025",
      category: "Web App",
      icon: "Users",
      size: "normal",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e72f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Replaced static result emails with a real-time, searchable leaderboard students access via mobile + DOB (no login required).",
        "5-tier ranking system (Champion → Beginner) with 3D podium UI, branch-level filtering, and daily/overall views. Eliminated student support queries about ranks."
      ]
    },
    {
      title: "Student Lifecycle Dashboard — Masai School",
      tech: ["Python", "Metabase", "PostgreSQL"],
      year: "2024–25",
      category: "Analytics",
      icon: "BarChart3",
      size: "large",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Built 30+ Metabase dashboards covering the full student lifecycle for 25,000+ active students across 50+ courses.",
        "Improved dashboard load times by 80% through schema redesign and query optimization. Provides 100% visibility for 40+ business stakeholders."
      ]
    },
    {
      title: "Production ETL Pipeline Consolidation — Masai School",
      tech: ["Python", "MySQL", "MongoDB", "PostgreSQL", "SQLAlchemy"],
      year: "2024",
      category: "Data Engineering",
      icon: "Server",
      size: "large",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558494949-efc02584299d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576444356170-66073046b1bc?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Reduced 40+ fragile pipelines to 20 clean production jobs (50% reduction) while expanding analytical depth.",
        "Eliminated 20 hours/week of manual reporting via Google Docs/Gmail API automation. Processes millions of rows daily across MySQL/MongoDB into PostgreSQL."
      ]
    },
    {
      title: "WhatsApp & Campaign Automation — Gamify EduTech",
      tech: ["Python", "Google Sheets", "WATI API", "QR Codes"],
      year: "2022–24",
      category: "AI Automation",
      icon: "Terminal",
      size: "normal",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Built one-click WhatsApp messaging system for student engagement campaigns using WATI API, Google Sheets, and Forms.",
        "Migrated 10,000+ student admissions tracking and built QR-code attribution across 30+ traditional advertising campaigns."
      ]
    }
  ],
  services: [
    {
      id: "reporting-autopilot",
      icon: "Rocket",
      iconImage: "icon-rocket-3d.png",
      tier: "growth",
      title: "The Reporting Autopilot",
      tagline: "Replace 15+ hours/week of manual reporting with automated weekly briefings delivered to your inbox or Slack.",
      priceUSD: 2000,
      priceSuffix: "setup",
      recurringUSD: 400,
      bestFor: "EdTech ops teams and founders drowning in spreadsheets.",
      deliverables: [
        "Live dashboards connected to your real data sources",
        "Automated weekly narrative summaries (\"retention dropped 4% because…\")",
        "Anomaly alerts + monthly exec brief",
        "Ongoing maintenance & metric updates"
      ],
      featured: true,
      ctaLabel: "Book a call"
    },
    {
      id: "data-foundation",
      icon: "Database",
      iconImage: "icon-brick-3d.png",
      tier: "starter",
      title: "The Data Foundation Setup",
      tagline: "End-to-end ETL pipelines connecting your LMS, CRM, payment processor, and marketing tools into one source of truth.",
      priceUSD: 3000,
      priceSuffix: "one-time",
      bestFor: "Companies with data scattered across 3+ tools and no single source of truth.",
      deliverables: [
        "Unified PostgreSQL / Supabase data warehouse",
        "Production-grade Python ETL jobs with retry & crash-safety",
        "Schema design + documentation your team can read",
        "Battle-tested architecture powering 25K+ users and 58K+ exam candidates in production"
      ],
      ctaLabel: "Book a call"
    },
    {
      id: "ai-workflow",
      icon: "Bot",
      iconImage: "icon-robot-3d.png",
      tier: "custom",
      title: "AI Workflow Automation",
      tagline: "Autonomous agents for result generation, document parsing, support triage, lead enrichment, WhatsApp/email automation.",
      priceUSD: 1500,
      pricePrefix: "from",
      priceSuffix: "per workflow",
      bestFor: "Any repetitive workflow eating 5+ hours/week of a skilled person's time.",
      deliverables: [
        "Custom Claude-powered agent tailored to your workflow",
        "Integration with your existing tools (Sheets, CRM, WhatsApp, email)",
        "Human-in-the-loop review where it matters",
        "30-day optimization window after handover"
      ],
      ctaLabel: "Book a call"
    },
    {
      id: "free-audit",
      icon: "Gift",
      iconImage: "icon-gift-3d.png",
      tier: "free",
      title: "Free 30-min Ops Audit",
      tagline: "I'll review your current data/ops stack and identify 3 workflows you can automate this month. No pitch, no hard sell.",
      priceUSD: 0,
      bestFor: "Anyone curious whether AI automation is right for their team.",
      deliverables: [
        "30-minute video call",
        "3 concrete automation opportunities with rough effort estimates",
        "A written follow-up summary you can share with your team",
        "Zero obligation"
      ],
      ctaLabel: "Book free audit"
    }
  ],
  education: [
    {
      school: "Masai School",
      degree: "Data Analyst Bootcamp",
      year: "Apr 2024 – Sep 2024",
      location: ""
    },
    {
      school: "CVR College of Engineering",
      degree: "Bachelor of Technology – ECE",
      year: "2018 – 2022",
      location: "Hyderabad"
    }
  ]
};

// Supported currencies for service pricing. Rates approximate as of early 2026.
export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$',   name: 'US Dollar',       rate: 1,    locale: 'en-US' },
  { code: 'INR', symbol: '₹',   name: 'Indian Rupee',    rate: 83,   locale: 'en-IN' },
  { code: 'EUR', symbol: '€',   name: 'Euro',            rate: 0.92, locale: 'en-IE' },
  { code: 'GBP', symbol: '£',   name: 'British Pound',   rate: 0.79, locale: 'en-GB' },
  { code: 'AUD', symbol: 'A$',  name: 'Australian Dollar', rate: 1.52, locale: 'en-AU' }
];

// Skill Chart Data for Recharts
export const SKILL_CHART_DATA = [
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'SQL', A: 90, fullMark: 100 },
  { subject: 'AI Agents', A: 90, fullMark: 100 },
  { subject: 'ETL', A: 90, fullMark: 100 },
  { subject: 'Automation', A: 95, fullMark: 100 },
  { subject: 'Data Viz', A: 85, fullMark: 100 },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Languages": Code2,
  "Databases": Database,
  "AI & Automation": Sparkles,
  "BI & Visualization": BarChart3,
  "Data Engineering": Server,
  "Web & Backend": Layout,
  "APIs & Tools": Globe,
  "Libraries & Frameworks": Terminal,
};

// Map string icon names to Lucide components for Projects and Services
export const PROJECT_ICONS: Record<string, LucideIcon> = {
  "LineChart": LineChart,
  "ShoppingBag": ShoppingBag,
  "Wallet": Wallet,
  "Cloud": Cloud,
  "Cpu": Cpu,
  "BarChart3": BarChart3,
  "Shield": Shield,
  "Database": Database,
  "Globe": Globe,
  "Layout": Layout,
  "Terminal": Terminal,
  "FileText": FileText,
  "Users": Users,
  "Server": Server,
  "Sparkles": Sparkles,
  "Rocket": Rocket,
  "Bot": Bot,
  "Gift": Gift,
  "Zap": Zap,
};
