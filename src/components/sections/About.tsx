import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Code2, Cpu, Database, ShieldCheck } from 'lucide-react';
import { LeetCodeIcon } from '../ui/LeetCodeIcon';
import { profileData } from '../../data/profileData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="About Me"
          eyebrow="BACKGROUND & PHILOSOPHY"
          description="Combining academic rigor with hands-on engineering in Agentic AI and high-performance backend development."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Bio Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am an <strong className="text-slate-900 dark:text-white font-medium">AI Full Stack Developer and Python Engineer</strong> pursuing 
              my B.Tech in Computer Science and Engineering (AIML) at <strong className="text-slate-900 dark:text-white font-medium">Kalasalingam Academy of Research and Education</strong>, 
              where I hold the <strong className="text-brand-accent font-medium">1st Rank in the CSE Department of 23S14 with a 9.04 / 10 CGPA</strong>.
            </p>

            <p>
              My engineering focus lies at the intersection of <strong className="text-slate-900 dark:text-white font-medium">Agentic AI architectures</strong> and 
              <strong className="text-slate-900 dark:text-white font-medium"> production backend systems</strong>. Rather than treating LLMs as standalone black boxes, 
              I design resilient multi-agent graphs using <strong className="text-slate-900 dark:text-white font-medium">LangGraph</strong>, incorporate deterministic vector indexing with 
              <strong className="text-slate-900 dark:text-white font-medium"> Qdrant</strong>, and enforce enterprise safety boundaries with <strong className="text-slate-900 dark:text-white font-medium">NeMo Guardrails</strong> and 
              <strong className="text-slate-900 dark:text-white font-medium"> FlashRank re-ranking</strong>.
            </p>

            <p>
              Through internships at <strong className="text-slate-900 dark:text-white font-medium">Infosys Springboard</strong> and <strong className="text-slate-900 dark:text-white font-medium">Infyni</strong>, 
              I have delivered real-world solutions ranging from multilingual agricultural diagnostic assistants to production-grade Django backend services. 
              I value clean architecture, typed data models, verifiable test coverage, and recruiter-ready documentation.
            </p>

            <p>
              Beyond systems development, I am a dedicated <strong className="text-slate-900 dark:text-white font-medium">algorithmic problem solver</strong> with a disciplined approach to Data Structures and Algorithms. 
              Practicing regularly on <strong className="text-slate-900 dark:text-white font-medium">LeetCode</strong> reinforces my ability to analyze time and space complexity trade-offs, 
              handle critical edge cases, and design efficient solutions under stringent computational constraints.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded bg-surface-card border border-surface-border text-slate-700 dark:text-slate-300 shadow-xs">
                📍 {profileData.contact.location}
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-card border border-surface-border text-slate-700 dark:text-slate-300 shadow-xs">
                🎓 B.Tech CSE (AIML) • 2023–2027
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-card border border-surface-border text-slate-700 dark:text-slate-300 shadow-xs">
                🏆 1st Rank in the CSE Department of 23S14
              </span>
              {profileData.contact.leetcode && (
                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-surface-card border border-surface-border text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode Profile ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Core Pillars / Competency Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            <div className="p-4 rounded-lg bg-surface-card border border-surface-border transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-surface-elevated text-brand-accent shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Agentic AI & Orchestration</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Multi-node workflow graphs with LangGraph, conditional routing, state machines, and autonomous tool calling.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-card border border-surface-border transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-surface-elevated text-sky-500 dark:text-sky-400 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">RAG & Vector Retrieval</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Dense vector indexing with Qdrant, hybrid keyword matching, semantic reranking via FlashRank, and sub-100ms context injection.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-card border border-surface-border transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-surface-elevated text-emerald-500 dark:text-emerald-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Robust Backend Engineering</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Microservice architectures with FastAPI, Django REST framework, SQLAlchemy ORM, Alembic migrations, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-card border border-surface-border transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-surface-elevated text-amber-500 dark:text-amber-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Enterprise Guardrails & Evaluation</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Context sanity checks, NeMo Guardrails prompt injection shields, Logfire observability, and structured output schema enforcement.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-card border border-surface-border transition-all duration-200 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-md shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-surface-elevated text-amber-500 shrink-0">
                  <LeetCodeIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Algorithmic Problem Solving</h4>
                    {profileData.contact.leetcode && (
                      <a
                        href={profileData.contact.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-brand-accent hover:underline flex items-center gap-0.5"
                      >
                        LeetCode ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Structured problem deconstruction, Data Structures & Algorithms, space-time complexity optimization, and disciplined edge-case handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
