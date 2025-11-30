import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Play, Database, ArrowRight, CheckCircle2, Loader2, Sparkles, Code2, Terminal, Server, BarChart3, ExternalLink, Zap, LineChart, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { RESUME_DATA, NAV_ITEMS, CATEGORY_ICONS, PROJECT_ICONS } from './constants';
import SkillChart from './components/SkillChart';
import AiAssistant from './components/AiAssistant';

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
        <div className="flex-1 flex flex-col items-start z-10 w-full md:w-auto">
          
          {/* Group 1: Identity */}
          <div className="mb-6 space-y-2">
             <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-none">
               <span className="block">Hi, I'm</span>
               <span className="block text-blue-500 mt-2">Surya.</span>
             </h1>
             <h2 className="text-2xl md:text-3xl font-medium text-slate-500 tracking-tight">
               Data Analyst & Engineer
             </h2>
          </div>
          
          {/* Group 2: Description */}
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-light mb-10">
            Building robust <span className="font-medium text-slate-900 underline decoration-blue-200/50 decoration-2 underline-offset-4">ETL pipelines</span> and interactive <span className="font-medium text-slate-900 underline decoration-purple-200/50 decoration-2 underline-offset-4">dashboards</span> to turn raw data into insights.
          </p>
          
          {/* Group 3: Actions */}
          <div className="flex flex-col gap-6">
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="group w-full sm:w-auto min-w-[160px] justify-center px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-xl font-medium transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Get in Touch
                </a>
                <a 
                  href={`https://${RESUME_DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full sm:w-auto min-w-[160px] justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  LinkedIn
                </a>
             </div>
             
             {/* Available for Opportunities Badge - Pill Style */}
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 self-start">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">Available for opportunities</span>
             </div>
          </div>

        </div>
        
        {/* Photo Section - Modern Geometric Layered Frame */}
        <div className="flex-1 w-full max-w-[550px] md:pr-10 flex justify-center items-center relative mt-20 md:mt-0">
          
          {/* Main Dark Gradient Canvas / Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] rotate-2 w-[110%] h-[120%] -left-[5%] shadow-2xl z-0 overflow-hidden opacity-90">
             <div className="absolute top-10 right-10 w-48 h-48 bg-slate-800 rounded-full blur-3xl opacity-60"></div>
             <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-900/40 rounded-full blur-3xl opacity-60"></div>
          </div>

          {/* Tech Stack Floating Icons */}
          
          {/* Python - Top Right */}
          <div className="absolute -top-10 -right-4 z-30 animate-float drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]" style={{ animationDelay: '0s' }}>
             <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
               <path d="M15.875 2.5C10.75 2.5 9.75 4.75 9.75 4.75V7.125H19.75V8.5H9.75C7.25 8.5 2.5 10.375 2.5 15.625C2.5 20 5.625 21.625 8.125 21.625H9.375V19.375C9.375 16.5 12.375 16.125 12.375 16.125H18.625C20.625 16.125 20.875 14.375 20.875 14.375V10.25C20.875 10.25 21.25 2.5 15.875 2.5ZM14.125 5.25C14.8125 5.25 15.375 5.8125 15.375 6.5C15.375 7.1875 14.8125 7.75 14.125 7.75C13.4375 7.75 12.875 7.1875 12.875 6.5C12.875 5.8125 13.4375 5.25 14.125 5.25ZM22.25 10.375V12.625H12.25V11.25H22.25C24.75 11.25 29.5 9.375 29.5 4.125C29.5 -0.25 26.375 -1.875 23.875 -1.875H22.625V0.375C22.625 3.25 19.625 3.625 19.625 3.625H13.375C11.375 3.625 11.125 5.375 11.125 5.375V9.5C11.125 9.5 10.75 17.25 16.125 17.25C21.25 17.25 22.25 15 22.25 15V10.375ZM17.875 14.5C17.1875 14.5 16.625 13.9375 16.625 13.25C16.625 12.5625 17.1875 12 17.875 12C18.5625 12 19.125 12.5625 19.125 13.25C19.125 13.9375 18.5625 14.5 17.875 14.5Z" fill="url(#python-gradient)" transform="scale(0.8) translate(5, 5)"/>
               <defs>
                 <linearGradient id="python-gradient" x1="2.5" y1="2.5" x2="29.5" y2="21.625" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#3776AB"/>
                   <stop offset="1" stopColor="#FFD43B"/>
                 </linearGradient>
               </defs>
             </svg>
          </div>
          
          {/* Power BI - Bottom Left */}
          <div className="absolute bottom-6 -left-8 z-30 animate-float drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]" style={{ animationDelay: '1.5s' }}>
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0">
               <path d="M6 14H10V21H6V14Z" fill="#F2C811"/>
               <path d="M12 8H16V21H12V8Z" fill="#F2C811"/>
               <path d="M18 3H22V21H18V3Z" fill="#F2C811"/>
             </svg>
          </div>
          
          {/* Google Sheets - Top Left */}
          <div className="absolute top-2 -left-10 z-30 animate-float drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]" style={{ animationDelay: '2.5s' }}>
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
               <path d="M15.5 2H5.5C4.4 2 3.5 2.9 3.5 4V20C3.5 21.1 4.4 22 5.5 22H18.5C19.6 22 20.5 21.1 20.5 20V7L15.5 2Z" fill="#0F9D58"/>
               <path d="M16 2V7H21" fill="#E6F4EA"/>
               <path d="M6 12H18V14H6V12ZM6 16H14V18H6V16Z" fill="white"/>
             </svg>
          </div>

           {/* Generic Graph Icon - Bottom Right */}
           <div className="absolute bottom-20 -right-8 z-30 animate-float drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]" style={{ animationDelay: '3.5s' }}>
              <LineChart className="w-10 h-10 text-blue-500" />
          </div>


          {/* The Photo Frame Stack */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 z-10">
            <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] rotate-[12deg] scale-105"></div>
            <div className="absolute inset-0 bg-blue-600/90 rounded-[2rem] rotate-[6deg] translate-x-2 translate-y-2 shadow-lg backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-slate-200 rounded-[2rem] -rotate-[3deg] shadow-2xl ring-4 ring-white/10">
               <img
                 src="/surya_l.png"
                 alt="Surya Prakash"
                 className="absolute bottom-0 left-0 w-full h-[150%] object-cover object-center rounded-b-[2rem]"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; 
                   e.currentTarget.onerror = null;
                 }}
               />
               <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[2rem]"></div>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Technical Arsenal</h2>
                <p className="text-slate-500 font-light text-lg">The modern stack I use to architect scalable data solutions.</p>
              </div>

              <div className="space-y-5">
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
                    {/* Card with enhanced styling */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Icon with subtle gradient */}
                        <div className="mt-0.5 p-2 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 text-blue-600 group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-300">
                          <div className="w-5 h-5 flex items-center justify-center">
                            {CATEGORY_ICONS[category.category] && React.createElement(CATEGORY_ICONS[category.category], { size: 20 })}
                          </div>
                        </div>

                        <div className="flex-1">
                          {/* Category name */}
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{category.category}</h3>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3.5 py-2 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-medium rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:scale-105 transition-all duration-200 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
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

      {/* Experience Section - Flowing Path Design */}
      <section id="experience" ref={experienceRef} className="scroll-mt-28 py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      {/* Projects Section - Bento Grid */}
      <section id="projects" className="scroll-mt-28 py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Select Projects</h2>
              <p className="text-slate-500 font-light text-lg">A collection of data engineering & analytics work.</p>
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

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[350px]">
            {visibleProjectsList.map((project, idx) => (
              <div 
                key={idx}
                className={`${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} ${project.size === 'tall' ? 'md:row-span-2' : ''}`}
              >
                <BentoProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* View More / View Less */}
          {filteredProjects.length > 6 && (
             <div className="mt-12 flex justify-center">
                <button 
                  onClick={() => setViewAllProjects(!viewAllProjects)}
                  className="flex items-center gap-2 px-8 py-3 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-full font-medium transition-colors border border-slate-200"
                >
                  {viewAllProjects ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>View More Projects <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
             </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Let's build something <span className="text-blue-500">amazing.</span></h2>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Available for full-time roles and freelance projects. Let's discuss how data can transform your business.
              </p>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="inline-block px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Drop me a line
              </a>
            </div>

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
                      <Linkedin className="w-4 h-4" />
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
                <Linkedin className="w-5 h-5" />
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