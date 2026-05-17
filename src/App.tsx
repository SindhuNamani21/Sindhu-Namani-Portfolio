/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  ClipboardList, 
  Cpu, 
  Wrench, 
  Users,
  Award,
  BookOpen,
  MapPin,
  ArrowUp,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  content: ReactNode;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let cur = 'hero';
      sections.forEach(s => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= 100) cur = s.id;
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#casestudies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#2a2a3a] z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight text-white">
          Sindhu <span className="text-[#4f8ef7]">Namani</span>
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-[#4f8ef7]' : 'text-[#8888aa] hover:text-[#4f8ef7]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-[#8888aa] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#8888aa] ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#8888aa] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f] border-b border-[#2a2a3a]"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-8 py-3 text-sm text-[#8888aa] hover:text-[#4f8ef7]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-10">
    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#4f8ef7] uppercase mb-2">
      {label}
    </p>
    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
      {title}
    </h2>
  </div>
);

const Hero = () => (
  <section id="hero" className="min-h-screen pt-14 flex items-center relative overflow-hidden">
    {/* Decorative Gradients */}
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#4f8ef722] to-transparent pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#7c5cbf18] to-transparent pointer-events-none" />
    
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-sm tracking-[0.15em] font-semibold text-[#4f8ef7] uppercase mb-4">
          👋 Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-4">
          Sindhu <span className="bg-gradient-to-br from-[#4f8ef7] to-[#7c5cbf] bg-clip-text text-transparent">Namani</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#8888aa] font-medium mb-6">
          IT Professional & Graduate Researcher
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a3a1a] border border-[#2a5a2a] text-[#6fcf7a] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6fcf7a] animate-pulse" />
            Open to new opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a2a3a] border border-[#2a4a6a] text-[#7ab8f5] text-xs font-semibold">
            <MapPin size={12} />
            Memphis, TN · Open to Relocate
          </span>
        </div>

        <p className="text-[#aaabb8] text-lg leading-relaxed mb-10 max-w-2xl">
          IT professional with an M.S. in Information Systems, experienced across data analytics, full-stack development, AI integration, and project management. I translate complex technical challenges into clear, impactful solutions across diverse industries.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projects" className="px-6 py-3 bg-[#4f8ef7] text-white rounded-lg font-semibold text-sm hover:bg-[#3a7ae8] transition-all flex items-center gap-2">
            View My Work <ChevronRight size={16} />
          </a>
          <a href="#contact" className="px-6 py-3 border border-[#2a2a3a] text-white rounded-lg font-semibold text-sm hover:border-[#4f8ef7] hover:text-[#4f8ef7] transition-all">
            Get In Touch
          </a>
          <div className="flex gap-3">
             <a href="https://www.linkedin.com/in/sindhu-namani-565083203/" target="_blank" rel="noreferrer" className="p-3 bg-[#161620] border border-[#2a2a3a] rounded-lg text-[#8888aa] hover:text-[#7c5cbf] hover:border-[#7c5cbf] transition-all">
               <Linkedin size={20} />
             </a>
             <a href="https://github.com/SindhuNamani21" target="_blank" rel="noreferrer" className="p-3 bg-[#161620] border border-[#2a2a3a] rounded-lg text-[#8888aa] hover:text-white hover:border-white transition-all">
               <Github size={20} />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#1a1a26] border border-[#2a2a3a] rounded-xl overflow-hidden shadow-2xl">
          {[
            { num: '4+', label: 'Roles & Internships' },
            { num: '6+', label: 'Projects Built' },
            { num: '8+', label: 'Research Studies' },
            { num: '5', label: 'Certifications' }
          ].map((stat, i) => (
            <div key={i} className={`p-4 text-center ${i < 3 ? 'border-r border-[#2a2a3a]' : ''}`}>
              <div className="text-2xl font-bold text-[#4f8ef7] mb-0.5">{stat.num}</div>
              <div className="text-[10px] text-[#8888aa] uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading label="Background" title="Education & Recognition" />
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-[#161620]/50 border-l-4 border-[#4f8ef7] rounded-r-xl border border-y-[#2a2a3a] border-r-[#2a2a3a]">
          <h3 className="font-bold text-lg text-white mb-1 leading-tight">M.S. Information Systems</h3>
          <p className="text-[#7c5cbf] font-medium text-sm mb-3">University of Memphis</p>
          <div className="flex items-center gap-2 text-[#8888aa] text-xs">
            <MapPin size={12} /> Memphis, TN <span className="opacity-30">|</span> Aug 2023 – May 2025
          </div>
        </div>
        <div className="p-6 bg-[#161620]/50 border-l-4 border-[#4f8ef7] rounded-r-xl border border-y-[#2a2a3a] border-r-[#2a2a3a]">
          <h3 className="font-bold text-lg text-white mb-1 leading-tight">B.Tech Electronics & Comm Engineering</h3>
          <p className="text-[#7c5cbf] font-medium text-sm mb-3">Sri Indu College of Eng & Tech</p>
          <div className="flex items-center gap-2 text-[#8888aa] text-xs">
            <MapPin size={12} /> Hyderabad, India <span className="opacity-30">|</span> Aug 2019 – Aug 2023
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Award className="text-[#f0c040]" size={24} /> Honors & Awards
      </h3>
      <div className="space-y-4">
        {[
          {
            title: "William and Lauren Pickens Graduate Fellowship",
            desc: "Fogelman College of Business & Economics, awarded for academic excellence across 2 semesters (2024–2025)"
          },
          {
            title: "Merit-Based Scholarship",
            desc: "Covered 35% of undergraduate tuition for outstanding academic performance (2019–2023)"
          }
        ].map((honor, i) => (
          <div key={i} className="flex gap-4 p-5 bg-[#161620]/30 border border-[#2a2a3a] rounded-xl hover:border-[#4f8ef750] transition-colors">
            <div className="text-[#f0c040] mt-1 shrink-0">★</div>
            <div>
              <p className="text-white font-bold text-sm mb-1">{honor.title}</p>
              <p className="text-[#aaabb8] text-xs leading-relaxed">{honor.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillGroups = [
    { icon: <Code />, title: "Programming", tags: ["Python", "SQL", "Java", "R", "JavaScript", "MATLAB", "C"] },
    { icon: <BarChart3 />, title: "Analytics & BI", tags: ["Power BI", "Tableau", "Excel", "SAS", "Google Analytics", "Matplotlib"] },
    { icon: <Globe />, title: "Development", tags: ["React.js", "Spring Boot", "Flask", "REST APIs", "HTML/CSS"] },
    { icon: <ShieldCheck />, title: "Security & Compliance", tags: ["Cybersecurity", "AI Privacy", "GDPR/CCPA", "HIPAA", "Risk Mgmt"] },
    { icon: <ClipboardList />, title: "Project Mgmt", tags: ["Agile/Scrum", "SDLC", "JIRA", "Risk Assessment", "Stakeholder Mgmt"] },
    { icon: <Cpu />, title: "AI & ML", tags: ["Gen AI", "NLP", "CNN/ANN", "Prompt Eng", "Copilot", "Gemini"] },
    { icon: <Wrench />, title: "Tools", tags: ["Git", "GitHub", "Jupyter", "PyCharm", "Maven", "Docker"] },
    { icon: <Users />, title: "Soft Skills", tags: ["Analytical Thinking", "Communication", "Problem Solving", "Collab"] },
  ];

  return (
    <section id="skills" className="py-24 bg-[#12121a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="What I know" title="Technical Expertise" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <div key={i} className="p-6 bg-[#161620]/50 border border-[#2a2a3a] rounded-xl hover:border-[#4f8ef7] hover:-translate-y-1 transition-all group">
              <div className="text-[#4f8ef7] mb-4 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#1a1a26] text-[#8888aa] text-[10px] font-medium border border-[#2a2a3a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading label="Where I've worked" title="Professional Experience" />
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-0 top-0 bottom-8 w-[1px] bg-gradient-to-b from-[#4f8ef7] via-[#7c5cbf] to-[#2a2a3a]" />
        
        {[
          {
            role: "Information Technology Internship",
            date: "Sep 2025 – May 2026",
            company: "First Horizon Bank",
            loc: "Memphis, TN",
            bullets: [
              "Engineered a full-stack internal web app using Java Spring Boot & React.js with 40+ responsive screens",
              "Automated a legacy manual process, reducing project timelines by 4 weeks via custom Java automation",
              "Architected secure RESTful APIs and managed session-based data handling for backend integrity",
              "Optimized database operations with 15+ complex SQL queries mapped to backend business logic",
              "Led CI/CD deployment using Maven, Tomcat, and Git with secure authentication protocols"
            ]
          },
          {
            role: "Data Analyst & Research Intern",
            date: "Aug 2025 – April 2026",
            company: "Ecological Servants Project",
            loc: "Memphis, TN",
            bullets: [
              "Analyzed website traffic via Google Analytics and SQL-based querying, tracking 10+ KPIs across 30+ pages",
              "Designed and implemented ETL workflows using Python (pandas) and Excel for automated data validation",
              "Built interactive Power BI dashboards with REST API data pulls, saving 3 hrs/week in manual reporting",
              "Conducted user journey analysis and cohort analysis, identifying drop-off points to improve acquisition",
              "Curated and quality-checked 50+ invasive plant profiles for on-schedule Field Guide release"
            ]
          },
          {
            role: "Artificial Intelligence Volunteer",
            date: "July 2025 – Aug 2025",
            company: "Midwest Special Services (MSS)",
            loc: "Memphis, TN",
            bullets: [
              "Led AI integration by evaluating LLMs (ChatGPT, Copilot, Gemini), recommending Copilot for security",
              "Authored MSS's first AI Privacy & Governance Policy aligned with HIPAA and NIST frameworks",
              "Built reusable prompt templates reducing manual analysis time by 60% for organizational staff",
              "Implemented AI-driven workflow automation using Power Automate saving 5-10 hrs/month per team"
            ]
          },
          {
            role: "Artificial Intelligence Internship",
            date: "March 2022 – June 2023",
            company: "Zebo.ai (in association with Verzeo)",
            loc: "Hyderabad, India",
            bullets: [
              "Developed a Convolutional Neural Network (CNN) for fashion classification with 90% accuracy",
              "Engineered an Artificial Neural Network (ANN) for diabetes prediction with 72% accuracy",
              "Optimized dataset splits and activation functions to reduce classification errors by 15%"
            ]
          }
        ].map((item, i) => (
          <div key={i} className="mb-10 relative group">
            {/* Timeline Dot */}
            <div className="absolute left-[-1.5rem] sm:left-[-2.125rem] top-1.5 w-3 h-3 rounded-full bg-[#4f8ef7] border-2 border-[#0a0a0f] z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_#4f8ef760]" />
            
            <div className="p-5 sm:p-6 bg-[#161620]/40 border border-[#2a2a3a] rounded-xl hover:border-[#4f8ef750] transition-colors shadow-sm">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-white text-base sm:text-lg leading-tight">{item.role}</h3>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#4f8ef7] bg-[#4f8ef715] px-2.5 py-1 rounded select-none whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#7c5cbf] mb-4 uppercase tracking-wide">
                  {item.company} <span className="opacity-40 ml-1 font-normal text-[#8888aa]">| {item.loc}</span>
                </p>
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="text-[#aaabb8] text-[13px] sm:text-[14px] leading-relaxed flex gap-2">
                      <span className="text-[#4f8ef7] font-bold leading-tight mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "SQL Retail Sales Data Analysis",
      date: "March 2026",
      description: "Architected and optimized a PostgreSQL relational data model, executing end-to-end ETL on 10K+ retail records. Developed 15+ complex SQL queries for business metrics and conducted EDA to identify sales patterns, improving revenue optimization by 15-20%.",
      tags: ["PostgreSQL", "SQL", "ETL", "EDA", "BI"]
    },
    {
      title: "CodeCritic AI – Instant Code Feedback",
      date: "April 2025",
      description: "Code review automation powered by Gemini Pro, delivering structured multi-dimensional feedback. Accelerated review cycles by 30% for 50+ developers with contextual guidance.",
      tags: ["Gen AI", "NLP", "Gemini Pro", "Python"]
    },
    {
      title: "Smartphone Data Analysis using R",
      date: "November 2024",
      description: "ETL and statistical modeling on 1,020 records. Applied T-test, ANOVA & multivariate regression for pricing forecasts, achieving 20% improvement in predictive accuracy.",
      tags: ["R", "Statistics", "Tableau", "Selenium"]
    },
    {
      title: "Company Ratings & Reviews Analysis",
      date: "April 2024",
      description: "ML-driven sentiment analysis using Decision Trees & Neural Networks. Achieved 85% satisfaction prediction accuracy for customer reviews across 5 major companies.",
      tags: ["ML", "Python", "Decision Trees", "Neural Networks"]
    },
    {
      title: "HMS Implementation – Lifecycle",
      date: "2024",
      description: "Managed a $500K Hospital Management System implementation as Project Sponsor. Delivered full lifecycle artifacts from Business Case to Transition Plan using Agile methodology.",
      tags: ["Project Mgmt", "Agile", "Risk Mgmt", "SDLC"]
    },
    {
      title: "Online Banking System – Design",
      date: "2024",
      description: "Designed enhanced banking systems for Bank of America using Use Case Diagrams, DFDs, and Gantt charts to map the full SDLC and architecture.",
      tags: ["SDLC", "System Design", "DFD", "Architecture"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#12121a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="What I've built" title="Key Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="flex flex-col p-6 bg-[#161620]/50 border border-[#2a2a3a] rounded-xl hover:border-[#7c5cbf] hover:-translate-y-1.5 transition-all">
              <span className="text-[10px] font-bold text-[#8888aa] uppercase tracking-widest mb-2">{proj.date}</span>
              <h3 className="text-base font-bold text-white mb-3">{proj.title}</h3>
              <p className="text-[13px] text-[#aaabb8] leading-relaxed mb-6 flex-grow">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-sm bg-[#4f8ef710] text-[#4f8ef7] text-[9px] font-bold border border-[#4f8ef720]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Modal = ({ id, isOpen, onClose }: { id: string; isOpen: boolean; onClose: () => void }) => {
  const caseStudies: Record<string, CaseStudy> = {
    ciso: {
      id: 'ciso',
      category: 'IT Leadership · Cybersecurity',
      title: 'CIO/CISO Roles in Modern Organizations',
      description: 'Researched and authored a paper on the evolving roles of CIO and CISO in modern enterprises.',
      tags: ['Leadership', 'Cybersecurity', 'Risk Mgmt'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Overview</h4>
            <p className="text-[#aaabb8] text-[13px] leading-relaxed">Comprehensive research paper analyzing the evolution and responsibilities of Chief Information Officers (CIO) and Chief Information Security Officers (CISO) in modern enterprises, with historical context from the 1990s through the 2020s.</p>
          </section>
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">CIO Responsibilities</h4>
              <ul className="list-disc pl-4 space-y-1 text-[#aaabb8] text-[13px]">
                <li>Strategic IT management & digital transformation</li>
                <li>Resource and talent management</li>
                <li>Executing IT strategies aligned with business objectives</li>
                <li>Driving innovation & organizational competitiveness</li>
              </ul>
            </section>
            <section>
              <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">CISO Responsibilities</h4>
              <ul className="list-disc pl-4 space-y-1 text-[#aaabb8] text-[13px]">
                <li>Cyber strategy, policy development & implementation</li>
                <li>Risk management & compliance (GDPR, HIPAA, SOX)</li>
                <li>Incident response & data breach mitigation</li>
                <li>Cybersecurity awareness & cross-org education</li>
              </ul>
            </section>
          </div>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Historical CISO Evolution</h4>
            <div className="grid grid-cols-2 gap-4 text-[12px]">
              <div><span className="text-white font-bold">1990s:</span> System protection & unauthorized access prevention</div>
              <div><span className="text-white font-bold">2000s:</span> Network security, HIPAA and SOX compliance</div>
              <div><span className="text-white font-bold">2010s:</span> Data privacy, IoT, cloud, and risk management</div>
              <div><span className="text-white font-bold">2020s:</span> Ransomware, malware, and advanced threat defense</div>
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Case Studies</h4>
            <ul className="space-y-3">
               <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                 <strong className="text-white">Uber (2016):</strong> CISO Joe Sullivan concealed a breach affecting 57M users; paid hackers $100K. Led to CEO change, security restructuring, and improved encryption protocols.
               </li>
               <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                 <strong className="text-white">SolarWinds (2020):</strong> CISO Timothy Brown failed to disclose known vulnerabilities; SEC charges followed. Recovery involved new CEO, enhanced monitoring, and transparency reforms.
               </li>
               <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                 <strong className="text-white">Meta:</strong> CIO Atish Banerjea manages IT infrastructure; CISO Guy Rosen leads cybersecurity and platform integrity.
               </li>
            </ul>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Emerging Tech Impact</h4>
            <p className="text-[#aaabb8] text-[13px] leading-relaxed">AI improves threat detection but introduces ethical risks. Blockchain enables secure transactions but faces scalability challenges. Quantum Computing threatens current encryption. IoT expands attack surface requiring network segmentation.</p>
          </section>
        </div>
      )
    },
    hms: {
      id: 'hms',
      category: 'Healthcare IT · Project Management',
      title: 'HMS Implementation – Full Project Lifecycle',
      description: 'Served as Project Sponsor and CIO for a $500K Hospital Management System implementation.',
      tags: ['Project Mgmt', 'Agile', 'SDLC'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Project Impact</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'Budget', val: '$500K' },
                { label: 'Wait Reduc.', val: '25%' },
                { label: 'Adoption', val: '90%' },
                { label: 'Satisfaction', val: '85%' },
                { label: 'Defect Rate', val: '<5%' },
                { label: 'Uptime', val: '99%' }
              ].map(kpi => (
                <div key={kpi.label} className="p-3 bg-[#1a1a26] rounded-lg text-center border border-[#2a2a3a]">
                  <div className="text-[#4f8ef7] font-bold text-sm">{kpi.val}</div>
                  <div className="text-[10px] text-[#8888aa] uppercase font-bold">{kpi.label}</div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Deliverables Produced</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white text-xs font-bold mb-1">Business Case & Charter</h5>
                <p className="text-[#aaabb8] text-[13px]">CBA showing $370K net first-year value. Fixed $500K budget breakdown including licensing, customization, and training.</p>
              </div>
              <div>
                <h5 className="text-white text-xs font-bold mb-1">Risk & Communication Plans</h5>
                <p className="text-[#aaabb8] text-[13px]">Probability-impact matrix for integration and resistance. Stakeholder matrix with 4 priority escalation levels.</p>
              </div>
              <div>
                <h5 className="text-white text-xs font-bold mb-1">Status & Transition</h5>
                <p className="text-[#aaabb8] text-[13px]">KPI tracking via EVM (CPI 1.10). 3-month vendor handover plan covering knowledge transfer and IP migration.</p>
              </div>
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Key Milestones</h4>
            <p className="text-[#aaabb8] text-[13px]">Kickoff → Requirements → Vendor Selection → Design → Prototype → UAT → Implementation → Training → Go-Live → Closeout</p>
          </section>
        </div>
      )
    },
    apple: {
      id: 'apple',
      category: 'Privacy & Compliance',
      title: 'Apple Privacy Policy Evolution',
      description: 'Analyzed five years of Apple\'s privacy policy changes by cross-referencing 10-K annual reports.',
      tags: ['Privacy', 'GDPR', 'Compliance'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Historical Context</h4>
            <p className="text-[#aaabb8] text-[13px] leading-relaxed">In-depth analysis of Apple\'s privacy transformations tracking regulatory compliance and user privacy innovations across SEC filings from 2019 to 2023.</p>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Key Privacy Milestones</h4>
            <ul className="space-y-3">
              <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                <strong className="text-white">Nutrition Labels (2020):</strong> App Store labels summarizing data collection practices.
              </li>
              <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                <strong className="text-white">Location Consent (iOS 13):</strong> Granular permissions replacing notification-only approach.
              </li>
              <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                <strong className="text-white">ATT (2021):</strong> Mandatory opt-in for cross-app and cross-website tracking.
              </li>
              <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                <strong className="text-white">Mail Privacy (iOS 15):</strong> Blocks tracking pixels and IP collection in email.
              </li>
              <li className="text-[#aaabb8] text-[13px] leading-relaxed">
                <strong className="text-white">iCloud Private Relay:</strong> Two-relay encrypted browsing for iCloud+ users.
              </li>
            </ul>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Regulatory Highlights</h4>
            <p className="text-[#aaabb8] text-[13px]">Adheres to GDPR and CCPA/CPRA. Child Apple ID with Verifiable Parental Consent. ESG reporting introduced in 2021.</p>
          </section>
        </div>
      )
    },
    expedia: {
      id: 'expedia',
      category: 'Cybersecurity · Risk Analysis',
      title: 'Expedia Cyber & Privacy Trends',
      description: 'Compared Expedia Group\'s 2020 vs. 2024 10-K filings to track threat evolution.',
      tags: ['Risk Analysis', 'Cybersecurity', 'AWS'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Threat Evolution (2020 vs 2024)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-[#1a1a26] rounded-lg">
                <div className="text-white font-bold text-[11px] mb-1">2020 Profile</div>
                <p className="text-[#aaabb8] text-[12px]">General threats: spyware, viruses, phishing, DoS attacks.</p>
              </div>
              <div className="p-3 bg-[#1a1a26] rounded-lg">
                <div className="text-white font-bold text-[11px] mb-1">2024 Profile</div>
                <p className="text-[#aaabb8] text-[12px]">Advanced threats: Ransomware, AI-driven attacks, AWS infrastructure risks.</p>
              </div>
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">2022 Breach & Response</h4>
            <p className="text-[#aaabb8] text-[13px] mb-2">Unauthorized access via compromised credentials leading to credit card exposure. Response involved removing threat actors, enhancing detection, and notifying customers.</p>
            <p className="text-[#aaabb8] text-[13px] font-bold text-white">Outcome:</p>
            <p className="text-[#aaabb8] text-[13px]">Implementation of Enterprise GRC platform and appointment of new CSO.</p>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Expedia\'s Privacy Pillars</h4>
            <p className="text-[#aaabb8] text-[13px]">Choice and Control · Transparency · Responsible Use · Accountability · Security Culture · Data Protection</p>
          </section>
        </div>
      )
    },
    innovation: {
      id: 'innovation',
      category: 'Innovation Strategy',
      title: 'Disruptive vs Sustaining Innovation',
      description: 'Applied Clayton Christensen\'s innovation framework to real-world industry examples.',
      tags: ['Strategy', 'Innovation', 'Management'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Theoretical Framework</h4>
            <div className="space-y-4">
              <div className="p-4 bg-[#1a1a26] rounded-xl border border-[#2a2a3a]">
                <h5 className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Disruptive Innovation</h5>
                <p className="text-[#aaabb8] text-[13px] leading-relaxed">Fundamentally transforms markets, typically starting in niche segments at lower price points. Cheaper and simpler than existing solutions early on.</p>
                <p className="text-[#4f8ef7] text-[12px] mt-2 font-bold italic">Example: Digital Photography, PCs.</p>
              </div>
              <div className="p-4 bg-[#1a1a26] rounded-xl border border-[#2a2a3a]">
                <h5 className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Sustaining Innovation</h5>
                <p className="text-[#aaabb8] text-[13px] leading-relaxed">Continuous improvements to existing products to maintain competitiveness and market share. Focused on efficiency and quality increments.</p>
                <p className="text-[#4f8ef7] text-[12px] mt-2 font-bold italic">Example: Mobile Camera Pixels, CPU speed.</p>
              </div>
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Strategic Takeaway</h4>
            <p className="text-[#aaabb8] text-[13px]">Organizations need both. Sustaining maintains current dominance, while disruptive drives future growth. Ignoring either leads to vulnerability.</p>
          </section>
        </div>
      )
    },
    netflix: {
      id: 'netflix',
      category: 'Digital Transformation',
      title: 'Netflix Platform Strategy',
      description: 'Analyzed Netflix\'s transformation from a DVD-by-mail service to a global streaming platform.',
      tags: ['AI', 'Digital Transformation', 'Data'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Transformation Timeline</h4>
            <ul className="text-[#aaabb8] text-[13px] space-y-1">
              <li><strong className="text-white">1997:</strong> Founded as DVD-by-mail service.</li>
              <li><strong className="text-white">2007:</strong> Launched streaming observing broadband growth.</li>
              <li><strong className="text-white">2016:</strong> Global expansion to 190+ countries.</li>
              <li><strong className="text-white">Current:</strong> Video game integration & custom TV remote buttons.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Core Pillars of Success</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-white text-xs font-bold mb-1">AI Recommendation</h5>
                <p className="text-[#aaabb8] text-[12px]">Algorithms trained on history, likes, and engagement improve accuracy at scale.</p>
              </div>
              <div>
                <h5 className="text-white text-xs font-bold mb-1">Product UI</h5>
                <p className="text-[#aaabb8] text-[12px]">Genre sorting, profiles, multi-device sync, and 4K quality standards.</p>
              </div>
            </div>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Content Strategy</h4>
            <p className="text-[#aaabb8] text-[13px]">Localized regional content with subtitles enables cross-cultural engagement and deepens platform loyalty.</p>
          </section>
        </div>
      )
    },
    appleethics: {
      id: 'appleethics',
      category: 'Ethics & Supply Chain',
      title: 'Apple Ethical Supply Chain',
      description: 'Evaluated Apple\'s ethical dilemma when suppliers fail to meet labor and environmental standards.',
      tags: ['Ethics', 'Supply Chain', 'ESG'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">The Dilemma</h4>
            <p className="text-[#aaabb8] text-[13px]">Choosing between immediate disengagement vs sustained reform. Disengagement risks jobs; reform leverages influence for systemic change.</p>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Strategy</h4>
            <ul className="list-disc pl-4 text-[#aaabb8] text-[13px] space-y-1">
              <li>Engage directly to reform unethical practices</li>
              <li>Maintain zero-tolerance as a hard boundary</li>
              <li>Leverage industry position to raise global standards</li>
              <li>Transparent reporting on manufacturing practices</li>
            </ul>
          </section>
        </div>
      )
    },
    costco: {
      id: 'costco',
      category: 'Leadership & Business Strategy',
      title: 'Costco Leadership & Ethics',
      description: 'Examined Costco\'s ethical leadership model, membership-based retail strategy, and workforce practices.',
      tags: ['Leadership', 'Retail', 'Ethics'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Business Model</h4>
            <p className="text-[#aaabb8] text-[13px]">Membership retail with limited SKUs (4k vs 140k). Drives extreme efficiency and bulk purchase value for consumers.</p>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Workforce Philosophy</h4>
            <ul className="list-disc pl-4 text-[#aaabb8] text-[13px] space-y-1">
              <li>Wages 40% above industry average</li>
              <li>Heavy investment in long-term skill training</li>
              <li>Resistance to layoffs during downturns</li>
              <li>High-morale workforce driving loyalty</li>
            </ul>
          </section>
        </div>
      )
    },
    sysanalysis: {
      id: 'sysanalysis',
      category: 'System Analysis & Design',
      title: 'System Analysis & Architecture',
      description: 'Comprehensive systems analysis covering acquisition strategies, architecture trade-offs, and prototyping.',
      tags: ['Architecture', 'System Design', 'DBMS'],
      content: (
        <div className="space-y-6">
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Acquisition Strategies</h4>
            <p className="text-[#aaabb8] text-[13px]">Comparison between Custom Development (max control), Package Purchase (speed), and Outsourcing (talent access).</p>
          </section>
          <section>
            <h4 className="text-[#4f8ef7] font-bold text-sm mb-2 border-b border-[#2a2a3a] pb-1">Design Principles</h4>
            <ul className="text-[#aaabb8] text-[13px] space-y-2">
              <li><strong className="text-white">Cohesion:</strong> Functional vs Logical. Modules should focus on single responsibilities.</li>
              <li><strong className="text-white">Coupling:</strong> Loose coupling preferred for system stability.</li>
              <li><strong className="text-white">DBMS:</strong> Recommended for complex structured data like legal case materials.</li>
            </ul>
          </section>
        </div>
      )
    }
  };

  const data = caseStudies[id];
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#000000cc] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-[#12121a] border border-[#2a2a3a] rounded-2xl p-8 overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#8888aa] hover:text-white transition-colors">
              <X size={20} />
            </button>
            <div className="text-[10px] text-[#7c5cbf] font-bold tracking-[0.2em] uppercase mb-1">{data.category}</div>
            <h3 className="text-xl font-bold text-white mb-6 pr-8">{data.title}</h3>
            {data.content}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const cases = [
    { 
      id: 'ciso', 
      cat: 'IT Leadership · Cybersecurity', 
      title: '1. CIO/CISO Roles in Organizations', 
      desc: 'Comprehensive research paper analyzing the evolution and responsibilities of Chief Information Officers (CIO) and Chief Information Security Officers (CISO) in modern enterprises, with historical context from the 1990s through the 2020s.',
      tags: ['Leadership', 'Cybersecurity'] 
    },
    { 
      id: 'hms', 
      cat: 'Healthcare IT · Project Management', 
      title: '2. HMS Implementation Lifecycle', 
      desc: 'Serve as Project Sponsor and CIO for a $500K Hospital Management System implementation. Led all phases from business case approval through go-live and vendor transition, targeting a 25% reduction in patient wait times.',
      tags: ['Project Mgmt', 'Agile'] 
    },
    { 
      id: 'apple', 
      cat: 'Privacy · Compliance', 
      title: '3. Apple Privacy Evolution', 
      desc: 'In-depth analysis of Apple\'s privacy transformations tracking regulatory compliance and user privacy innovations across SEC filings (10-K and DEF 14A) from 2019 to 2023.',
      tags: ['Privacy', 'GDPR'] 
    },
    { 
      id: 'expedia', 
      cat: 'Cybersecurity · Risk Analysis', 
      title: '4. Expedia Cyber & Privacy Trends', 
      desc: 'Comparative analysis of Expedia Group\'s 2020 vs. 2024 10-K filings to track the evolution of cybersecurity threats, regulatory exposure, and the strategic pivot to AI-powered fraud prevention.',
      tags: ['Expedia', 'Security'] 
    },
    { 
      id: 'innovation', 
      cat: 'Innovation Strategy', 
      title: '5. Disruptive vs Sustaining Innovation', 
      desc: 'Applied Clayton Christensen\'s innovation framework to real-world industry examples. Disruptive innovations typically start in niche markets before reshaping entire industries.',
      tags: ['Strategy', 'Tech'] 
    },
    { 
      id: 'netflix', 
      cat: 'Digital Transformation', 
      title: '6. Netflix Platform Strategy', 
      desc: 'Analyzed Netflix\'s transformation from a DVD-by-mail service founded in 1997 to a global streaming platform operating in 190+ countries using AI for extreme personalization.',
      tags: ['Transformation', 'AI'] 
    },
    { 
      id: 'appleethics', 
      cat: 'Ethics · Supply Chain', 
      title: '7. Apple Ethical Supply Chain', 
      desc: 'Evaluated Apple\'s ethical dilemma when suppliers fail to meet labor and environmental standards. Analysis advocates for sustained supplier engagement with zero-tolerance enforcement.',
      tags: ['Ethics', 'Supply Chain'] 
    },
    { 
      id: 'costco', 
      cat: 'Leadership · Strategy', 
      title: '8. Costco Leadership & Ethics', 
      desc: 'Examined Costco\'s ethical leadership model, membership-based retail strategy, and workforce practices. Costco pays 40% above industry wages and resistant to layoffs during downturns.',
      tags: ['Leadership', 'Retail'] 
    },
    { 
      id: 'sysanalysis', 
      cat: 'Systems Analysis · Design', 
      title: '9. System Analysis & Architecture', 
      desc: 'Comprehensive systems analysis covering three software acquisition strategies (custom development, package purchase, outsourcing) and client-server vs. server-based architecture trade-offs.',
      tags: ['Architecture', 'System Design'] 
    },
  ];

  return (
    <section id="casestudies" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Academic Research" title="Case Studies & Research" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((cs) => (
            <div key={cs.id} className="p-6 bg-[#161620]/40 border border-[#2a2a3a] rounded-xl hover:border-[#4f8ef7] transition-all flex flex-col group">
              <div className="text-[9px] text-[#7c5cbf] font-bold tracking-widest uppercase mb-2">{cs.cat}</div>
              <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#4f8ef7] transition-colors">{cs.title}</h3>
              <p className="text-[12px] text-[#8888aa] mb-4 flex-grow italic leading-relaxed">{cs.desc}</p>
              <div className="flex flex-wrap gap-1 mb-6">
                {cs.tags.map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 rounded bg-[#1a1a26] text-[#8888aa] text-[9px] border border-[#2a2a3a]">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setSelectedCase(cs.id)}
                className="mt-auto text-[11px] font-bold text-[#4f8ef7] hover:text-[#4f8ef7] flex items-center gap-1 transition-colors bg-[#4f8ef708] py-2 border border-[#4f8ef720] rounded-md justify-center"
              >
                + Show Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal id={selectedCase || ''} isOpen={!!selectedCase} onClose={() => setSelectedCase(null)} />
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-[#12121a]">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <SectionHeading label="Say hello" title="Get In Touch" />
      <p className="text-[#8888aa] text-base mb-10 max-w-lg mx-auto">
        Actively seeking IT roles across analytics, software development, and project management. Open to opportunities in Memphis and beyond.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { icon: <Mail size={18} />, label: "sindhunamani1912@gmail.com", href: "mailto:sindhunamani1912@gmail.com" },
          { icon: <Phone size={18} />, label: "(901) 520-4513", href: "tel:9015204513" },
          { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sindhu-namani-565083203/" },
          { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/SindhuNamani21" }
        ].map((link, i) => (
          <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className="flex items-center gap-2.5 px-5 py-3 bg-[#161620]/50 border border-[#2a2a3a] rounded-lg text-[#8888aa] hover:text-[#4f8ef7] hover:border-[#4f8ef7] transition-all text-sm font-medium">
            {link.icon} {link.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-[#2a2a3a]">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="text-[10px] text-[#8888aa] font-medium tracking-wide uppercase">
        © 2026 Sindhu Namani · Memphis, Tennessee
      </div>
      <div className="flex gap-6">
        {['Home', 'Projects', 'Research', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-[10px] text-[#8888aa] font-bold uppercase tracking-widest hover:text-[#4f8ef7] transition-colors">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-[#4f8ef7] text-white rounded-full shadow-lg z [100] hover:bg-[#3a7ae8] transition-colors"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-[#e8e8f0] font-sans selection:bg-[#4f8ef730] selection:text-[#4f8ef7]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        
        {/* Resume Section */}
        <section className="py-16 bg-[#1a1a26] border-y border-[#2a2a3a]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-xl font-bold text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                <BookOpen size={24} className="text-[#4f8ef7]" /> Download My Resume
              </h2>
              <p className="text-[#8888aa] text-sm">Full PDF resume with all experience, projects, and certifications.</p>
            </div>
            <a 
              href="https://github.com/SindhuNamani21/Sindhu-Namani-Portfolio/raw/main/public/Sindhu_Namani_Resume.pdf" 
              download="Sindhu_Namani_Resume.pdf"
              className="px-8 py-3.5 bg-[#4f8ef7] text-white rounded-lg font-bold text-sm hover:bg-[#3a7ae8] shadow-lg shadow-[#4f8ef720] transition-all flex items-center gap-2.5 whitespace-nowrap"
            >
              <Download size={18} /> Download Resume (PDF)
            </a>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

