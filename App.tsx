import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Mail, Play, Database, ArrowRight, CheckCircle2, Loader2, Sparkles, Code2, Terminal, Server, BarChart3, ExternalLink, Zap, LineChart, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { RESUME_DATA, NAV_ITEMS, CATEGORY_ICONS, PROJECT_ICONS } from './constants';
import SkillChart from './components/SkillChart';
import AiAssistant from './components/AiAssistant';

// Custom LinkedIn Icon with latest design
const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Tech stack logos for the marquee
const TECH_LOGOS = [
  { src: 'mysql.png', alt: 'MySQL', name: 'MySQL' },
  { src: 'postgresql.png', alt: 'PostgreSQL', name: 'PostgreSQL' },
  { src: 'mongodb.png', alt: 'MongoDB', name: 'MongoDB' },
  { src: 'python.png', alt: 'Python', name: 'Python' },
  { src: 'tableau.png', alt: 'Tableau', name: 'Tableau' },
  { src: 'powerbi.png', alt: 'Power BI', name: 'Power BI' },
  { src: 'metabase.png', alt: 'Metabase', name: 'Metabase' },
  { src: 'google_sheets.png', alt: 'Google Sheets', name: 'Google Sheets' },
  { src: 'github.png', alt: 'GitHub', name: 'GitHub' },
  { src: 'chartdb.png', alt: 'ChartDB', name: 'ChartDB' },
  { src: 'claude.png', alt: 'Claude AI', name: 'Claude' },
  { src: 'excel.png', alt: 'Microsoft Excel', name: 'Excel' },
  { src: 'pandas.png', alt: 'Pandas', name: 'Pandas' },
  { src: 'redash.png', alt: 'Redash', name: 'Redash' },
];

// Helper function to calculate duration in years and months
const calculateDuration = (period: string): string => {
  const parts = period.split('–').map(p => p.trim());
  if (parts.length !== 2) return '';

  const parseDate = (dateStr: string) => {
    if (dateStr.toLowerCase() === 'present') {
      return new Date();
    }
    const [month, year] = dateStr.split(' ');
    const monthMap: { [key: string]: number } = {
      'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
      'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
    };
    return new Date(parseInt(year), monthMap[month.toLowerCase()]);
  };

  const startDate = parseDate(parts[0]);
  const endDate = parseDate(parts[1]);

  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                 (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  } else if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }
};

// Project Card with Slideshow on Hover - Memoized for performance
const ProjectCard = React.memo(({ project, idx }: { project: any; idx: number }) => {
  const Icon = PROJECT_ICONS[project.icon] || Terminal;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Convert project title to URL-friendly slug - memoized
  const projectSlug = React.useMemo(() =>
    project.title.toLowerCase().replace(/\s+/g, '-'),
    [project.title]
  );

  // Slideshow effect - only on hover with faster transitions
  useEffect(() => {
    if (!project.images || project.images.length <= 1 || !isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 1500); // 1.5 seconds for snappier feel

    return () => clearInterval(interval);
  }, [project.images, isHovered]);

  // Reset to first image when hover ends
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

  return (
    <div
      className="group w-full bg-white border border-slate-200 rounded-2xl hover:rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 overflow-hidden transition-all duration-300 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-[280px]">
        {/* Left: Image Slideshow (40%) */}
        <div className="w-[40%] bg-slate-900 relative overflow-hidden">
          {project.images && project.images.map((img: string, imgIdx: number) => (
            <img
              key={imgIdx}
              src={img}
              alt={`${project.title} ${imgIdx + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{
                opacity: imgIdx === currentImageIndex ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* Right: Content (60%) */}
        <div className="w-[60%] p-5 flex flex-col justify-between">
          {/* Top */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-blue-50 rounded-lg border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{project.category}</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500">{project.year}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-tight group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <div className="space-y-1.5 mb-3">
              {project.description.map((desc: string, i: number) => (
                <p key={i} className="text-slate-600 text-xs leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom - Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] font-medium text-slate-700 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-700 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

// Bento Grid Project Card
const BentoProjectCard = ({ project }: { project: any }) => {
  const Icon = project.icon ? PROJECT_ICONS[project.icon] : Terminal;

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        {/* Top Icon (Optional floating) */}
        <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <Icon className="w-5 h-5 text-white" />
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">{project.category}</span>
             <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
             <span className="text-[10px] font-mono text-slate-400">{project.year}</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>
          
          <div className="space-y-1 mb-4 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300">
             {project.description.slice(0, 1).map((desc: string, i: number) => (
                <p key={i} className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                   {desc}
                </p>
             ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t: string) => (
              <span key={t} className="text-[10px] font-medium px-2 py-1 bg-white/10 text-slate-200 rounded-md backdrop-blur-sm border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Pipeline Interaction State
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);
  const [pipelineResultVisible, setPipelineResultVisible] = useState(false);

  // Skills Animation State
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  // Experience Animation State
  const [experienceVisible, setExperienceVisible] = useState(false);
  const experienceRef = useRef<HTMLElement>(null);

  // Project Filter State
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewAllProjects, setViewAllProjects] = useState(false);

  // Navbar Animation Refs
  const navRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [navIndicatorStyle, setNavIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Manual Scroll Tracker to prevent Observer interference
  const isManualScroll = useRef(false);

  // Scroll To Top State
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Update Navbar Indicator Position on activeSection change or Resize
  useEffect(() => {
    const updatePosition = () => {
      const activeTab = tabsRef.current[activeSection];
      if (activeTab) {
        setNavIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
          opacity: 1
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeSection]);

  // Scroll Listener for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    // 1. Immediately update active section so the pill animates directly to target
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    // 2. Set manual scroll flag to block intersection observer updates
    isManualScroll.current = true;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // 3. Reset flag after sufficient time for scroll to complete
      setTimeout(() => {
        isManualScroll.current = false;
      }, 1000);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection('about');
    isManualScroll.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { isManualScroll.current = false; }, 1000);
  };

  // Run Pipeline Handler
  const handleRunPipeline = () => {
    if (pipelineResultVisible) return;
    setIsPipelineRunning(true);
    setTimeout(() => {
      setIsPipelineRunning(false);
      setPipelineResultVisible(true);
    }, 1500); 
  };

  // Close Pipeline Result
  const handleClosePipeline = () => {
    setPipelineResultVisible(false);
  };

  // Intersection observer for scrolling
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update if not currently performing a manual scroll
          if (entry.isIntersecting && !isManualScroll.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      sectionObserver.observe(section);
    });

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsVisible(true);
          skillsObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    const experienceObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setExperienceVisible(true);
          experienceObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      experienceObserver.observe(experienceRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      skillsObserver.disconnect();
      experienceObserver.disconnect();
    };
  }, []);

  // Compute unique categories and filtered projects
  const uniqueCategories = ['All', ...Array.from(new Set(RESUME_DATA.projects.map(p => p.category).filter(Boolean) as string[]))];
  
  const filteredProjects = activeCategory === 'All'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category === activeCategory);

  // Logic for view more
  const visibleProjectsList = viewAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* Decorative Top-Left Circle */}
      <div className="fixed -top-20 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Navigation - Floating iOS Liquid Pill */}
      <nav className="fixed top-0 w-full z-40 pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="pointer-events-auto relative group">
            <div className="flex items-center gap-0.5 font-bold text-xl tracking-tighter font-mono px-5 py-2">
              <span className="text-blue-500 transition-transform duration-300 group-hover:-translate-x-1">{'<'}</span>
              <span className="text-slate-900">SP</span>
              <span className="text-blue-500 transition-transform duration-300 group-hover:translate-x-1">{'/>'}</span>
            </div>
          </a>
          
          {/* Desktop Nav - Centered Liquid Pill with Smooth Animation */}
          <div className="pointer-events-auto hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
            <div 
              ref={navRef}
              className="relative flex items-center gap-1 bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/20 ring-1 ring-black/5 rounded-full px-2 py-1.5 shadow-lg shadow-slate-200/20"
            >
              {/* Sliding Background Pill */}
              <div 
                className="absolute bg-slate-900 rounded-full shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                style={{
                  left: navIndicatorStyle.left,
                  width: navIndicatorStyle.width,
                  height: 'calc(100% - 12px)', // vertical padding adjustment
                  top: '6px',
                  opacity: navIndicatorStyle.opacity
                }}
              />

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  ref={(el) => { tabsRef.current[item.href.substring(1)] = el; }}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-white' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="pointer-events-auto md:hidden text-slate-600 p-2 bg-white rounded-full border border-slate-100 shadow-sm relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl animate-slide-up z-50">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-slate-600 hover:text-black hover:bg-slate-50 px-4 py-3 rounded-xl font-medium transition-colors ${
                   activeSection === item.href.substring(1) ? 'bg-slate-50 text-black' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="scroll-mt-28 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 min-h-[85vh] justify-center overflow-x-clip">
        <div className="flex-1 flex flex-col items-start z-10 w-full md:w-auto max-w-2xl">

          {/* Group 1: Identity */}
          <div className="mb-10 space-y-4">
             <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-none">
               <span className="block">Hi, I'm</span>
               <span className="block text-blue-500 mt-2">Surya.</span>
             </h1>
             <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
               I build data systems that get results.
             </h2>
             <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
               Data Analyst & Engineer with 3+ years turning complex data into actionable insights. Specialized in <span className="font-bold text-slate-900 underline decoration-blue-400 decoration-2 underline-offset-4">ETL pipelines</span>, <span className="font-bold text-slate-900 underline decoration-purple-400 decoration-2 underline-offset-4">dashboards</span>, and <span className="font-bold text-slate-900 underline decoration-emerald-400 decoration-2 underline-offset-4">automation</span>.
             </p>
          </div>

          {/* Group 3: Actions */}
          <div className="flex flex-col gap-6">
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={`mailto:${RESUME_DATA.contact.email}?subject=Let's discuss a data project`}
                  className="group w-full sm:w-auto min-w-[180px] justify-center px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  Schedule a Call
                </a>
                <a
                  href={`https://${RESUME_DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full sm:w-auto min-w-[180px] justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-blue-300 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md flex items-center gap-2"
                >
                  <LinkedInIcon size={16} className="group-hover:scale-110 transition-all duration-300" />
                  View Profile
                </a>
             </div>

             {/* Open to Opportunities Badge - More compelling */}
             <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 self-start hover:border-emerald-300 transition-all duration-300 cursor-default shadow-sm">
                <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-500">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                </span>
                <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">Open to Full-Time & Freelance</span>
             </div>
          </div>

        </div>
        
        {/* Photo Section - Data-Centric Professional Design */}
        <div className="flex-1 w-full max-w-[600px] flex justify-center items-center relative mt-32 md:mt-10">

          {/* Subtle Dot Grid Background - Data Aesthetic */}
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
          }}></div>

          {/* Main Photo Container - Group for hover effects */}
          <div className="relative z-10 flex items-center justify-center group">
            {/* Geometric Accent Shape - Rotated Square (Data Viz Element) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="hero-accent-shape absolute w-[420px] h-[420px] rounded-[3rem] rotate-45 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 blur-2xl"></div>
              <div className="absolute w-[380px] h-[380px] rounded-[2.5rem] rotate-12 border-2 border-blue-500/10"></div>
            </div>

            {/* Photo Circle with Gradient Border - Photo Extends Beyond */}
            <div className="relative">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow"></div>

              {/* Photo Frame - Photo extends beyond the frame */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-white p-2 shadow-2xl transform transition-all duration-500 group-hover:scale-105 overflow-visible">
                <div className="w-full h-full rounded-full border-4 border-slate-100 relative overflow-visible">
                  {/* Photo extends upward beyond the circular frame */}
                  <img
                    src={`${import.meta.env.BASE_URL}surya.png`}
                    alt="Surya Prakash Manubolu"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[130%] object-cover object-top transform transition-all duration-500 group-hover:scale-105 rounded-full"
                    style={{
                      clipPath: 'ellipse(50% 65% at 50% 65%)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                      e.currentTarget.onerror = null;
                    }}
                  />
                  {/* Subtle overlay gradient on hover only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Floating Stat Badges - Glassmorphic */}
            {/* Badge 1: Top Left - Years of Experience */}
            <div className="stat-badge absolute top-8 -left-12 md:-left-16 animate-float" style={{ animationDelay: '0s' }}>
              <div className="backdrop-blur-xl bg-white/80 border border-slate-200/50 rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">3+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Years</p>
                    <p className="text-sm font-bold text-slate-900">Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge 2: Top Right - Projects Delivered */}
            <div className="stat-badge absolute top-16 -right-8 md:-right-12 animate-float" style={{ animationDelay: '1s' }}>
              <div className="backdrop-blur-xl bg-white/80 border border-slate-200/50 rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">15+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Projects</p>
                    <p className="text-sm font-bold text-slate-900">Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge 3: Bottom Left - Tech Stack */}
            <div className="stat-badge absolute bottom-12 -left-8 md:-left-12 animate-float" style={{ animationDelay: '2s' }}>
              <div className="backdrop-blur-xl bg-white/80 border border-slate-200/50 rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Python</p>
                    <p className="text-sm font-bold text-slate-900">SQL Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Impact Dashboard - Key Metrics */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <Zap className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Impact Metrics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
              Results that matter
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Real outcomes from data engineering and analytics projects
            </p>
          </div>

          {/* Metrics Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Metric 1: Dashboard Performance */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-blue-600">80%</h3>
                <p className="text-slate-900 font-semibold text-lg">Faster Dashboards</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Improved Metabase dashboard load times by 80% through Python optimization at Masai School
                </p>
              </div>
            </div>

            {/* Metric 2: Data Volume */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-purple-600">50M+</h3>
                <p className="text-slate-900 font-semibold text-lg">Daily Records</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automated ETL pipelines processing millions of records daily across PostgreSQL and MongoDB databases
                </p>
              </div>
            </div>

            {/* Metric 3: Pipelines Deployed */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-emerald-600">20+</h3>
                <p className="text-slate-900 font-semibold text-lg">Production Pipelines</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Built and deployed ETL workflows across 2 companies, handling critical business data flows
                </p>
              </div>
            </div>

            {/* Metric 4: Cost Reduction */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-orange-600">30%</h3>
                <p className="text-slate-900 font-semibold text-lg">Cost Savings</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reduced cloud infrastructure costs through efficient data storage and processing strategies
                </p>
              </div>
            </div>

            {/* Metric 5: Automation Rate */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-cyan-600">95%</h3>
                <p className="text-slate-900 font-semibold text-lg">Tasks Automated</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automated 95% of manual data collection and reporting tasks using Python scripts and scheduled jobs
                </p>
              </div>
            </div>

            {/* Metric 6: Projects Delivered */}
            <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-pink-600">15+</h3>
                <p className="text-slate-900 font-semibold text-lg">Projects Delivered</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Successfully delivered analytics dashboards, ETL pipelines, and data visualization projects
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="scroll-mt-28 py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            
            {/* Skills List */}
            <div className="flex-1 w-full space-y-12">
              <div className={`transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
                  <Sparkles className="w-4 h-4 text-slate-600" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Core Competencies</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">What I bring to the table</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Proven expertise in transforming raw data into actionable insights through end-to-end data solutions.
                </p>
              </div>
              
              <div className="space-y-8">
                {RESUME_DATA.skills.map((category, idx) => (
                  <div
                    key={category.category}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                    className={`group transition-all duration-700 transform ${
                      skillsVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="mt-1 p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <div className="w-5 h-5 flex items-center justify-center">
                            {CATEGORY_ICONS[category.category] && React.createElement(CATEGORY_ICONS[category.category], { size: 20 })}
                        </div>
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-6 group-hover:border-slate-200 transition-colors">
                        <h3 className="text-base font-bold text-slate-900 mb-4">{category.category}</h3>
                        <div className="flex flex-wrap gap-2.5">
                          {category.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Radar Chart */}
            <div className={`flex-1 w-full flex justify-center items-center transition-all duration-1000 delay-300 ${
               skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
               <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl w-full max-w-[500px]">
                 <SkillChart />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Logos - Infinite Horizontal Scroll Marquee */}
      <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-slate-50 overflow-hidden" aria-label="Technology Stack">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
            <Code2 className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Tools & Technologies I Use
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Databases, BI tools, and frameworks powering data-driven solutions
          </p>
        </div>

        {/* Outer wrapper with overflow hidden */}
        <div className="relative w-full overflow-hidden">
          {/* Inner track wrapper - pauses on hover */}
          <div className="logo-marquee-track group">
            {/* First set of logos */}
            <div className="logo-marquee-content">
              {TECH_LOGOS.map((logo, idx) => (
                <div
                  key={`logo-primary-${idx}`}
                  className="logo-marquee-item"
                  role="listitem"
                >
                  <div className="logo-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}${logo.src}`}
                      alt={logo.alt}
                      title={logo.name}
                      className="logo-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless infinite loop - hidden from screen readers */}
            <div className="logo-marquee-content" aria-hidden="true">
              {TECH_LOGOS.map((logo, idx) => (
                <div
                  key={`logo-duplicate-${idx}`}
                  className="logo-marquee-item"
                >
                  <div className="logo-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}${logo.src}`}
                      alt=""
                      className="logo-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Flowing Path Design */}
      <section id="experience" ref={experienceRef} className="scroll-mt-28 py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <Server className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Professional Journey</h2>
            <p className="text-slate-500 text-lg">Following the path of data excellence</p>
          </div>

          {/* Journey Path Container - Overflow to extend beyond section */}
          <div className="relative max-w-5xl mx-auto overflow-visible">

            {/* Flowing SVG Path - Desktop - Full width with beautiful S-curve */}
            <svg className="hidden md:block absolute pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 0, top: '-20%', left: 0, width: '100%', height: '140%' }}>
              <defs>
                {/* Gradient for fading path at top and bottom - fade earlier at top to stay below subtitle */}
                <linearGradient id="pathFade" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
                  <stop offset="32%" stopColor="#93c5fd" stopOpacity="1" />
                  <stop offset="85%" stopColor="#93c5fd" stopOpacity="1" />
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Extended Blue Path with Smooth S-Curve */}
              <path
                d="M 50 0 C 50 20, 60 30, 55 50 C 50 70, 45 80, 50 100"
                stroke="url(#pathFade)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                className={`transition-all duration-1000 ${experienceVisible ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* White Dotted Line Moving Inside - Bottom to Top */}
              <path
                d="M 50 0 C 50 20, 60 30, 55 50 C 50 70, 45 80, 50 100"
                stroke="#ffffff"
                strokeWidth="0.25"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="2 4"
                className={`transition-all duration-1000 ${experienceVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animation: experienceVisible ? 'moveDotsUp 1.8s linear infinite' : 'none'
                }}
              />
            </svg>

            {/* Mobile Line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 rounded-full overflow-hidden">
              {/* Animated gradient flowing up */}
              <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-blue-500 to-transparent h-[40%] ${experienceVisible ? 'animate-beam-up' : ''}`}></div>
            </div>

            {/* Experience Items */}
            <div className="space-y-0 relative" style={{ zIndex: 1 }}>
              {RESUME_DATA.experience.map((job, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                    className={`relative pb-16 last:pb-0 transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  >
                    {/* Desktop Layout - Alternating */}
                    <div className={`hidden md:grid grid-cols-2 gap-12 items-center`}>

                      {/* Content Card */}
                      <div className={`${isEven ? 'text-left' : 'text-left col-start-2 ml-8'}`}>
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-xs font-semibold text-blue-700 tracking-wide">{job.period}</span>
                        </div>

                        {/* Card */}
                        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative">
                          {/* Connecting Line to Path */}
                          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-12 left-full' : '-left-12 right-full'} w-12 h-[2px] bg-gradient-to-r ${isEven ? 'from-slate-200 to-transparent' : 'from-transparent to-slate-200'}`}></div>

                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                              {job.role}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                              <span className="font-medium">{job.company}</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-500">{job.location}</span>
                            </div>
                            <div className="mt-1 text-xs text-slate-500">
                              {idx === 0 ? '1 year 2 months' : '2 years 3 months'}
                            </div>
                          </div>

                          <ul className="space-y-2.5">
                            {job.achievements.slice(0, 3).map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed">
                                <div className="mt-2 w-1 h-1 rounded-full bg-blue-400 shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex gap-6">
                      <div className="relative flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg flex items-center justify-center z-10">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>

                      <div className="flex-1 pb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-blue-50 border border-blue-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-xs font-semibold text-blue-700">{job.period}</span>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="mb-3">
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{job.role}</h3>
                            <div className="text-slate-600 text-sm">
                              <span className="font-medium">{job.company}</span>
                              <span className="text-slate-400 mx-1">•</span>
                              <span className="text-slate-500">{job.location}</span>
                            </div>
                          </div>

                          <ul className="space-y-2">
                            {job.achievements.slice(0, 3).map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                                <div className="mt-2 w-1 h-1 rounded-full bg-blue-400 shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Minimal Cards with Hover */}
      <section id="projects" className="scroll-mt-28 py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
                <Terminal className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Featured Projects</h2>
              <p className="text-slate-500 font-light text-lg">Data engineering & analytics work</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                Ready to turn your data into <span className="text-blue-400">growth?</span>
              </h2>
              <p className="text-slate-300 max-w-md mb-6 leading-relaxed text-lg">
                I'm currently accepting new opportunities for full-time roles and freelance projects.
              </p>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ETL pipelines & data automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Interactive dashboards & BI solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Database optimization & architecture</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              {/* Navigation and Connect Grid */}
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-bold mb-6 text-slate-200">Navigation</h4>
                  <ul className="space-y-4 text-slate-400">
                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                    <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                    <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-slate-200">Connect</h4>
                  <ul className="space-y-4 text-slate-400">
                    <li>
                      <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <LinkedInIcon size={16} />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/suryaprakash-sp" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${RESUME_DATA.contact.email}?subject=Let's discuss a data project`}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`https://${RESUME_DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <LinkedInIcon size={16} />
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              Designed and built by{' '}
              <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Google AI Studio
              </a>
              {' '}and{' '}
              <a href="https://claude.ai" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Claude Code
              </a>
            </div>

            <div className="flex gap-6">
              <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <LinkedInIcon size={20} />
              </a>
              <a href="https://github.com/suryaprakash-sp" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Utilities */}
      <AiAssistant />
      
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-7 z-40 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
};

export default App;