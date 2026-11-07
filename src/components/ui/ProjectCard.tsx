import React from 'react';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../../data/projectData';
import { Tag } from './Tag';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-lg bg-surface-card border border-surface-border hover:border-brand-accent/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out group p-6">
      <div>
        {/* Top Header: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-[11px] font-medium text-brand-accent px-2.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-surface-elevated border border-surface-border">
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-accent dark:group-hover:text-white transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Short Problem-Oriented Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Architecture Highlight Teaser */}
        <div className="mb-5 p-2.5 rounded bg-surface-base/80 border border-surface-border/60 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="text-[10px] uppercase font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-brand-accent" />
            <span>Architecture Flow</span>
          </div>
          <p className="line-clamp-2 text-slate-700 dark:text-slate-300">
            {project.architecture}
          </p>
        </div>

        {/* Technology Pills (Top 5) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech: string) => (
            <Tag key={tech} label={tech} variant="neutral" />
          ))}
          {project.technologies.length > 5 && (
            <span className="font-mono text-[10px] text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded bg-surface-elevated self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-surface-border/70 flex items-center justify-between gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onSelect(project)}
          className="w-full justify-center group/btn"
        >
          <span>Deep Dive Spec</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
            className="p-2 rounded-md bg-surface-elevated border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-colors shrink-0 shadow-xs"
          >
            <Github className="w-4 h-4" />
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo for ${project.title}`}
            className="p-2 rounded-md bg-surface-elevated border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-colors shrink-0 shadow-xs"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
