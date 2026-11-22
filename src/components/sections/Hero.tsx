import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu,
  Server,
  Cloud,
  ShieldCheck,
  Trophy, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';
import { LeetCodeIcon } from '../ui/LeetCodeIcon';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profileData';
import { useTypewriter } from '../../hooks/useTypewriter';

const typewriterWords = [
  "AI Engineer",
  "Agentic AI & LangGraph Architect",
  "AI Full Stack Developer",
  "Python Backend Engineer",
  "Algorithmic Problem Solver",
];

export const Hero: React.FC = () => {
  const { text: typewriterText, isTyping } = useTypewriter({
    words: typewriterWords,
    typingSpeed: 75,
    deletingSpeed: 35,
    pauseDuration: 2000,
  });

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle grid accent */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Hero Header with Profile Photo */}
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 md:gap-8 mb-6">
            <div className="flex-1 animate-fade-in-up">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  Open to Software Engineering & AI Developer Roles
                </span>
              </div>

              {/* Main Title & Role */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {profileData.name}
              </h1>

              <div 
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight min-h-[2.25rem] flex items-center"
                aria-label={`${profileData.title}. Specializing in ${typewriterWords.join(', ')}`}
              >
                <span className="text-brand-accent font-mono sm:font-sans">{typewriterText}</span>
                <span 
                  className={`inline-block w-0.5 h-5 sm:h-6 bg-brand-accent ml-1.5 align-middle ${isTyping ? 'opacity-100' : 'animate-pulse'}`} 
                  aria-hidden="true" 
                />
              </div>
            </div>

            {/* Circular Profile Photo */}
            <div className="relative shrink-0 self-center sm:self-auto animate-scale-in animation-delay-150">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-slate-200 dark:border-surface-border ring-4 ring-brand-accent/20 shadow-xl bg-surface-card hover:scale-105 hover:ring-brand-accent/40 transition-all duration-300">
                <img
                  src={profileData.avatar || "/profile.jpg"}
                  alt={profileData.name}
                  width="176"
                  height="176"
                  className="w-full h-full object-cover object-top select-none"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Value Proposition / Summary */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-8 animate-fade-in-up animation-delay-200">
            Designing and engineering production-grade <strong className="text-slate-900 dark:text-white font-medium">Agentic RAG workflows</strong>, 
            <strong className="text-slate-900 dark:text-white font-medium"> LangGraph pipelines</strong>, and <strong className="text-slate-900 dark:text-white font-medium">FastAPI microservices</strong>. 
            Algorithmic problem solver dedicated to clean data structures, vector indexing with Qdrant, and scalable full stack architectures.
          </p>

          {/* Resume-backed Credential Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-card border border-surface-border shadow-xs hover:-translate-y-1 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200">
              <GraduationCap className="w-5 h-5 text-brand-accent shrink-0" />
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Academic Honor</div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">1st Rank in CSE of 23S14 (9.04 CGPA)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-card border border-surface-border shadow-xs hover:-translate-y-1 hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-200">
              <Trophy className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Hackathon</div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Winner HACKARE 3.0</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-card border border-surface-border shadow-xs hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400/60 transition-all duration-200">
              <Briefcase className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0" />
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Experience</div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Infosys & Infyni Intern</div>
              </div>
            </div>

            <a
              href={profileData.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-surface-card border border-surface-border hover:border-amber-500/60 hover:-translate-y-1 transition-all duration-200 group shadow-xs"
            >
              <LeetCodeIcon className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-amber-500 transition-colors">Problem Solving</div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <span>LeetCode Profile</span>
                  <span className="text-[10px] text-amber-500">↗</span>
                </div>
              </div>
            </a>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in-up animation-delay-400">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={scrollToProjects}
              className="group shadow-sm hover:shadow-md transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-surface-card text-slate-800 dark:text-slate-100 border border-surface-border hover:bg-surface-elevated hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent shadow-xs hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>Download Resume</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-auto sm:ml-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {profileData.contact.leetcode && (
                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${profileData.contact.email}`}
                aria-label="Email Address"
                className="p-2.5 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Architecture Matrix */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 dark:bg-surface-card/60 p-5 sm:p-6 shadow-xl dark:shadow-2xl backdrop-blur-sm animate-fade-in-up animation-delay-500">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-surface-border/70">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Core Engineering Architecture & Stack Pillars
                </h2>
              </div>
              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">
                Production-Ready Systems
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Pillar 1: Agentic AI & RAG */}
              <div className="p-3.5 rounded-lg bg-surface-base/80 border border-surface-border/70 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-1.5 rounded bg-brand-accent/10 text-brand-accent">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">Agentic AI & RAG</h3>
                </div>
                <ul className="space-y-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">▸</span>
                    <span>LangGraph State Graphs</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">▸</span>
                    <span>Qdrant Vector Search</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">▸</span>
                    <span>FlashRank & NeMo Rails</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Backend & APIs */}
              <div className="p-3.5 rounded-lg bg-surface-base/80 border border-surface-border/70 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">Backend & APIs</h3>
                </div>
                <ul className="space-y-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="text-indigo-500 dark:text-indigo-400">▸</span>
                    <span>FastAPI & Pydantic v2</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-indigo-500 dark:text-indigo-400">▸</span>
                    <span>PostgreSQL & SQLAlchemy</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-indigo-500 dark:text-indigo-400">▸</span>
                    <span>Django REST Services</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: DevOps & Cloud */}
              <div className="p-3.5 rounded-lg bg-surface-base/80 border border-surface-border/70 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-1.5 rounded bg-sky-500/10 text-sky-500 dark:text-sky-400">
                    <Cloud className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">DevOps & Cloud</h3>
                </div>
                <ul className="space-y-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="text-sky-500 dark:text-sky-400">▸</span>
                    <span>AWS (EC2, ECR, VPC)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-sky-500 dark:text-sky-400">▸</span>
                    <span>Multi-Stage Docker</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-sky-500 dark:text-sky-400">▸</span>
                    <span>Jenkins CI/CD Pipelines</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4: Domain & Compliance */}
              <div className="p-3.5 rounded-lg bg-surface-base/80 border border-surface-border/70 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">Quality & Reliability</h3>
                </div>
                <ul className="space-y-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 dark:text-emerald-400">▸</span>
                    <span>FDA 21 CFR Part 11 Audit</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 dark:text-emerald-400">▸</span>
                    <span>ICH Q10 CAPA Systems</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 dark:text-emerald-400">▸</span>
                    <span>Human-in-the-Loop AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
