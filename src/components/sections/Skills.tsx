import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { 
  Code, 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  Server, 
  Layout, 
  Database, 
  Wrench 
} from 'lucide-react';
import { LeetCodeIcon } from '../ui/LeetCodeIcon';
import { profileData } from '../../data/profileData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Map icons to categories
const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code className="w-4 h-4 text-emerald-400" />,
  'Problem Solving & Core CS': <LeetCodeIcon className="w-4 h-4 text-amber-500" />,
  'Generative AI & Agentic AI': <Sparkles className="w-4 h-4 text-brand-accent" />,
  'Machine Learning & Deep Learning': <BrainCircuit className="w-4 h-4 text-purple-400" />,
  'AI & Machine Learning': <BrainCircuit className="w-4 h-4 text-purple-400" />,
  'RAG & AI Engineering': <Layers className="w-4 h-4 text-sky-400" />,
  'RAG & AI Infrastructure': <Layers className="w-4 h-4 text-sky-400" />,
  'Backend Development': <Server className="w-4 h-4 text-indigo-400" />,
  'Backend & APIs': <Server className="w-4 h-4 text-indigo-400" />,
  'Libraries & Frameworks': <Layout className="w-4 h-4 text-amber-400" />,
  'Frontend Development': <Layout className="w-4 h-4 text-amber-400" />,
  'Databases': <Database className="w-4 h-4 text-cyan-400" />,
  'Developer Tools': <Wrench className="w-4 h-4 text-slate-400" />,
  'Developer Tools & Observability': <Wrench className="w-4 h-4 text-slate-400" />,
};

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="Technical Skills"
          eyebrow="CAPABILITIES & STACK"
          description="Technologies, frameworks, and AI orchestration tooling verified across my production projects and academic research."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {profileData.skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-surface-border/60">
                  <div className="flex items-center gap-2">
                    {categoryIcons[cat.category] || <Code className="w-4 h-4 text-brand-accent" />}
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded bg-surface-elevated">
                    {cat.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <Tag key={skill} label={skill} variant="neutral" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
