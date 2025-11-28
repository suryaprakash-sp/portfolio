import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Play, Database, ArrowRight, CheckCircle2, Loader2, Sparkles, Code2, Terminal, Server, BarChart3, ExternalLink, Zap } from 'lucide-react';
import { RESUME_DATA, NAV_ITEMS, CATEGORY_ICONS, PROJECT_ICONS } from './constants';
import SkillChart from './components/SkillChart';
import AiAssistant from './components/AiAssistant';

// Component for Modern Project Card
const ProjectCard = ({ project }: { project: any }) => {
  const Icon = project.icon ? PROJECT_ICONS[project.icon] : Terminal;
  
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Visual Header with Gradient */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        {/* Abstract shapes for texture */}
        <div className="absolute -right-4 -bottom-8 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute -left-4 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
           <Icon className="w-6 h-6 text-slate-800" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{project.category}</span>
          <span className="text-xs font-mono text-slate-400">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-3 mb-6 flex-1">
          {project.description.map((desc: string, i: number) => (
             <p key={i} className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                {desc}
             </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
          {project.tech.slice(0, 4).map((t: string) => (
            <span key={t} className="text-[11px] font-medium px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
             <span className="text-[11px] font-medium px-2.5 py-1 bg-slate-50 text-slate-400 rounded-md border border-slate-100">
               +{project.tech.length - 4}
             </span>
          )}
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

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('about');
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
          if (entry.isIntersecting) {
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

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation - Floating iOS Liquid Pill */}
      <nav className="fixed top-0 w-full z-40 pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="pointer-events-auto relative z-50 text-xl font-bold font-mono tracking-tighter text-slate-900 flex items-center gap-1 group">
            <span className="text-slate-300 group-hover:text-slate-600 transition-colors">{'<'}</span>
            SP
            <span className="text-slate-300 group-hover:text-slate-600 transition-colors">{' />'}</span>
          </a>

          {/* Desktop Nav - Centered Liquid Pill */}
          <div className="pointer-events-auto hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/20 ring-1 ring-black/5 rounded-full px-2 py-1.5 shadow-lg shadow-slate-200/20">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="pointer-events-auto md:hidden text-slate-600 p-2 bg-white rounded-full border border-slate-100 shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl animate-slide-up">
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
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[85vh] justify-center overflow-x-hidden">
        <div className="flex-1 space-y-10 z-10">
          {/* Emerald Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Surya.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              Data Analyst & Engineer building robust <span className="font-medium text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-4">ETL pipelines</span> and interactive <span className="font-medium text-slate-900 underline decoration-purple-200 decoration-2 underline-offset-4">dashboards</span> to turn raw data into insights.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="group w-full sm:w-auto min-w-[160px] justify-center px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-xl font-medium transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Contact Me
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
        </div>
        
        {/* Photo Section - Modern Geometric Layered Frame */}
        <div className="flex-1 w-full max-w-[500px] flex justify-center items-center relative mt-16 md:mt-0">
          
          {/* Main Dark Gradient Canvas / Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] rotate-3 scale-[1.15] shadow-2xl z-0 overflow-hidden opacity-90">
             {/* Subtle Geometric Overlay Elements inside the dark card */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-2xl opacity-50"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-900/30 rounded-full blur-2xl opacity-50"></div>
             
             {/* Decorative Grid Lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Floating Decorative Elements (Foreground/Midground) */}
          <div className="absolute -top-6 -right-4 z-20 animate-float text-white/80" style={{ animationDelay: '0s' }}>
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="20" cy="20" r="15" />
             </svg>
          </div>
          <div className="absolute bottom-10 -left-6 z-20 animate-float text-blue-400/80" style={{ animationDelay: '1s' }}>
             <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="15" y1="5" x2="15" y2="25" />
                <line x1="5" y1="15" x2="25" y2="15" />
             </svg>
          </div>
          <div className="absolute top-10 -left-2 z-0 animate-float text-slate-700" style={{ animationDelay: '2s' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="4 12 8 8 12 12 16 8 20 12" />
             </svg>
          </div>

          {/* The Photo Frame Stack */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 z-10">
            
            {/* Layer 1: Back Overlapping Square (Wireframe/Translucent) */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] rotate-[12deg] scale-105"></div>
            
            {/* Layer 2: Middle Overlapping Square (Solid Accent Color) */}
            <div className="absolute inset-0 bg-blue-600/90 rounded-[2rem] rotate-[6deg] translate-x-2 translate-y-2 shadow-lg backdrop-blur-sm"></div>
            
            {/* Layer 3: Main Frame (The Photo) */}
            {/* Tilted slightly (-3deg) and contained with rounded corners */}
            <div className="absolute inset-0 bg-slate-200 rounded-[2rem] -rotate-[3deg] overflow-hidden shadow-2xl ring-4 ring-white/10">
               <img 
                 src="/surya.jpg" 
                 alt="Surya Prakash"
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                 onError={(e) => {
                   // Fallback
                   e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; 
                   e.currentTarget.onerror = null;
                 }}
               />
               
               {/* Optional: Subtle inner shadow overlay */}
               <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            
            {/* Skills List */}
            <div className="flex-1 w-full space-y-12">
              <div className={`transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Technical Arsenal</h2>
                <p className="text-slate-500 font-light text-lg">The modern stack I use to architect scalable data solutions.</p>
              </div>
              
              <div className="space-y-8">
                {RESUME_DATA.skills.map((category, idx) => {
                  const Icon = CATEGORY_ICONS[category.category] || Database;
                  
                  return (
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
                        <div className="mt-1 p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 border-b border-slate-100 pb-6 group-hover:border-slate-200 transition-colors">
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">{category.category}</h3>
                          <div className="flex flex-wrap gap-x-3 gap-y-3">
                            {category.skills.map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-slate-600 font-mono text-xs hover:border-slate-400 transition-colors">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Radar Chart - Improved Container Shape */}
            <div className={`flex-1 w-full flex justify-center items-center transition-all duration-1000 delay-300 ${
               skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
               {/* Changed from rounded-full to rounded-3xl for better shape */}
               <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl w-full max-w-[500px]">
                 <SkillChart />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-24 max-w-5xl mx-auto px-6 bg-[#fafafa]">
        <h2 className={`text-3xl font-bold text-slate-900 mb-16 text-center transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional Experience
        </h2>

        <div className={`relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent before:transition-opacity before:duration-1000 ${experienceVisible ? 'before:opacity-100' : 'before:opacity-0'}`}>
          {RESUME_DATA.experience.map((job, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active transition-all duration-700 ease-out transform ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:bg-slate-50 group-hover:scale-110 transition-all shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-slate-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-4">
                  <div className="text-slate-400 text-xs font-mono font-medium mb-1 uppercase tracking-wide">
                    {job.period}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                  <div className="text-slate-500 font-medium text-sm">{job.company} — {job.location}</div>
                </div>
                
                <ul className="space-y-2">
                  {job.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-6 font-light">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
              <p className="text-slate-500 font-light">End-to-end data solutions delivered.</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              View Github <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Footer */}
      <footer className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
          
          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              Education
            </h3>
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="group pl-4 border-l-2 border-slate-800 hover:border-slate-600 transition-colors">
                  <div className="text-white font-medium text-lg mb-1">{edu.school}</div>
                  <div className="text-slate-400 font-light">{edu.degree}</div>
                  <div className="text-slate-500 text-sm font-mono mt-2">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between">
            <div>
               <h3 className="text-lg font-bold text-white mb-6">Let's Connect</h3>
               <p className="text-slate-400 mb-8 leading-relaxed font-light max-w-sm">
                 I'm currently looking for new opportunities as a Data Engineer or Analyst. 
                 Have a question about my work or want to collaborate?
               </p>
               <a 
                 href={`mailto:${RESUME_DATA.contact.email}`}
                 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors inline-block"
               >
                 {RESUME_DATA.contact.email}
               </a>
            </div>
            
            <div className="text-slate-600 text-sm mt-16 flex justify-between items-center border-t border-slate-800 pt-8">
              <span>© {new Date().getFullYear()} Surya Prakash.</span>
              <div className="flex gap-6">
                 <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer">
                   <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                 </a>
                 <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <AiAssistant />
    </div>
  );
};

export default App;