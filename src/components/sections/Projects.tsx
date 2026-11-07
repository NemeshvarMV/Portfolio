import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from './ProjectModal';
import { 
  projectData, 
  projectCategories, 
  Project, 
  ProjectCategory 
} from '../../data/projectData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter((p: Project) => 
        p.categories ? p.categories.includes(activeCategory) : p.category === activeCategory
      );

  return (
    <section id="projects" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="Featured Projects"
          eyebrow="PRODUCTION SYSTEMS & RESEARCH"
          description="High-impact engineering projects demonstrating Agentic AI, LangGraph orchestration, vector search, and scalable backend services."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Project Categories">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            const count = category === 'All' 
              ? projectData.length 
              : projectData.filter((p: Project) => 
                  p.categories ? p.categories.includes(category) : p.category === category
                ).length;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-surface-elevated text-slate-900 dark:text-white border border-slate-400 shadow-sm scale-105'
                    : 'bg-surface-card text-slate-600 dark:text-slate-400 border border-surface-border hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded transition-colors ${
                  isActive ? 'bg-brand-accent text-white dark:text-slate-950 font-semibold' : 'bg-surface-base text-slate-600 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p: Project) => setSelectedProject(p)}
            />
          ))}
        </div>
      </Container>

      {/* Deep Dive Specification Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
