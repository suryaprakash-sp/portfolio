
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
      title: "Swiggy Order Analytics",
      tech: ["Python", "Selenium", "Pandas"],
      year: "2023",
      category: "Analytics",
      icon: "ShoppingBag",
      size: "large",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
      description: [
        "Deployed web scraping solution to extract 200+ personal orders from Swiggy platform.",
        "Constructed interactive dashboard visualizing key spending metrics and ordering patterns."
      ]
    },
    {
      title: "E-commerce API Data Scraping",
      tech: ["Python", "BeautifulSoup", "Requests", "MongoDB"],
      year: "2023",
      category: "Data Engineering",
      icon: "Database",
      size: "large",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
      description: [
        "Built automated scraping pipeline to extract product data from multiple e-commerce APIs.",
        "Processed and stored 50,000+ product listings with pricing and inventory data in MongoDB."
      ]
    },
    {
      title: "Real-time Stock Pipeline",
      tech: ["Kafka", "Spark", "Cassandra"],
      year: "2024",
      category: "Data Engineering",
      icon: "LineChart",
      size: "normal",
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600&auto=format&fit=crop",
      description: [
        "Architected a real-time streaming pipeline to ingest stock market data using Kafka.",
        "Implemented Cassandra sink for high-throughput write operations."
      ]
    },
    {
      title: "Sales Forecasting Dashboard",
      tech: ["Prophet", "Python", "Streamlit"],
      year: "2023",
      category: "Analytics",
      icon: "BarChart3",
      size: "normal",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: [
        "Time-series forecasting application for inventory planning.",
        "Reduced stockouts by 15% through predictive analytics."
      ]
    },
    {
      title: "Cloud ETL Infrastructure",
      tech: ["AWS Glue", "Redshift", "Airflow"],
      year: "2023",
      category: "Data Engineering",
      icon: "Cloud",
      size: "normal",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
      description: [
        "Designed serverless ETL workflows processing TBs of log data.",
        "Reduced query latency by 40% through optimized schema design."
      ]
    },
    {
      title: "Customer Segmentation Model",
      tech: ["Scikit-Learn", "Python", "SQL"],
      year: "2022",
      category: "Analytics",
      icon: "Terminal",
      size: "normal",
      image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
      description: [
        "Machine learning model for customer segmentation and targeting.",
        "Improved marketing campaign ROI by 25% through better targeting."
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
