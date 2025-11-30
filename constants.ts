
import { ResumeData } from './types';
import { Database, BarChart3, Code2, Server, Globe, Terminal, LucideIcon, LineChart, ShoppingBag, Wallet, Cpu, Cloud, Layout, Shield } from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Surya Prakash Manubolu",
  title: "Data Analyst & Engineer",
  tagline: "Transforming complex data into actionable insights. Specialized in building scalable pipelines, interactive dashboards, and automation systems that drive business decisions.",
  contact: {
    phone: "8309206731",
    email: "suryaprakash.sp987@gmail.com",
    linkedin: "linkedin.com/in/manubolusuryaprakash"
  },
  summary: "Data Analyst with 3+ years delivering high-impact data solutions in fast-paced EdTech environments. Skilled in designing end-to-end ETL pipelines, building dashboards, and automating reporting systems using Python, SQL, and modern BI tools. Successfully scaled data infrastructure for 25,000+ students while reducing pipeline overhead by 50% and dashboard query time by 80%.",
  skills: [
    {
      category: "Languages",
      skills: ["Python", "SQL"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "ChartDB"]
    },
    {
      category: "BI & Visualization",
      skills: ["Metabase", "Redash", "Google Sheets", "Excel"]
    },
    {
      category: "Libraries & Frameworks",
      skills: ["SQLAlchemy", "Pymongo", "Masonite ORM", "Pandas", "Selenium"]
    },
    {
      category: "Data Engineering",
      skills: ["ETL Pipelines", "API Integration", "Git", "Data Modeling"]
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
      title: "Student Lifecycle Dashboard",
      tech: ["Python", "Metabase", "PostgreSQL"],
      year: "2025",
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
        "Engineered comprehensive student lifecycle dashboard with 30+ Metabase dashboards using Python.",
        "Improved dashboard load times by 80% providing 100% visibility into student performance for 40+ business users."
      ]
    },
    {
      title: "Production ETL Pipeline Infrastructure",
      tech: ["Python", "MySQL", "MongoDB", "PostgreSQL"],
      year: "2024",
      category: "Data Engineering",
      icon: "Database",
      size: "large",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558494949-efc02584299d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Developed 20 production ETL pipelines processing millions of rows daily from MySQL/MongoDB to PostgreSQL.",
        "Reduced dashboard query time by 80% and pipeline count by 50% while maintaining analytical depth."
      ]
    },
    {
      title: "Personal Food Ordering Analysis",
      tech: ["Python", "Selenium", "Excel", "Google Sheets"],
      year: "2023",
      category: "Analytics",
      icon: "ShoppingBag",
      size: "normal",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Deployed web scraping solution using Selenium to extract 200+ personal orders from Swiggy platform.",
        "Constructed interactive dashboard in Excel/Google Sheets visualizing ordering patterns and spending trends."
      ]
    },
    {
      title: "Business Finance Analytics Tool",
      tech: ["Python", "Google Sheets", "API Integration"],
      year: "2025",
      category: "Automation",
      icon: "Wallet",
      size: "normal",
      image: "https://images.unsplash.com/photo-1554224155-98406858d0cb?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1554224155-98406858d0cb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554224311-beee4ece8c35?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Developed Python automation script with session-based authentication to extract data from myBillBook platform.",
        "Monitored INR 1M+ inventory across 400+ products, tracking pricing, sales trends, and profit/loss metrics."
      ]
    },
    {
      title: "WhatsApp Messaging Automation",
      tech: ["Python", "Google Sheets", "WATI API"],
      year: "2022",
      category: "Automation",
      icon: "Terminal",
      size: "normal",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Created automated WhatsApp messaging system using Google Sheets, Forms, and WATI API.",
        "Enabled instant and one-click message delivery at scale for student engagement campaigns."
      ]
    },
    {
      title: "Campaign Analytics System",
      tech: ["Python", "Google Sheets", "QR Codes"],
      year: "2022",
      category: "Analytics",
      icon: "LineChart",
      size: "normal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
      ],
      description: [
        "Processed and evaluated millions of rows of campaign data across 30+ traditional advertising campaigns.",
        "Implemented QR code system for seamless multi-source data collection without link breakage."
      ]
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

// Skill Chart Data for Recharts
export const SKILL_CHART_DATA = [
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'SQL', A: 90, fullMark: 100 },
  { subject: 'ETL Pipelines', A: 85, fullMark: 100 },
  { subject: 'Data Viz', A: 85, fullMark: 100 },
  { subject: 'Automation', A: 90, fullMark: 100 },
  { subject: 'DB Design', A: 80, fullMark: 100 },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Languages": Code2,
  "Databases": Database,
  "BI & Visualization": BarChart3,
  "Libraries & Frameworks": Terminal,
  "Data Engineering": Server,
};

// Map string icon names to Lucide components for Projects
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
  "Terminal": Terminal
};
