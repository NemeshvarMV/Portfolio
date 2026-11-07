import React from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  UserCheck, 
  Layers
} from 'lucide-react';
import { Project } from '../../data/projectData';
import { Modal } from '../ui/Modal';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 py-2">
        {/* Subheader Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-surface-border">
          <div className="flex flex-wrap items-center gap-2">
            {(project.categories && project.categories.length > 0
              ? project.categories
              : [project.category]
            ).map((cat) => (
              <span
                key={cat}
                className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-brand-accent/10 border border-brand-accent/20 text-brand-accent"
              >
                {cat}
              </span>
            ))}
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-elevated border border-surface-border text-slate-700 dark:text-slate-300">
              Status: {project.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-surface-elevated border border-surface-border text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                <span>View Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-brand-accent text-surface-base font-semibold hover:bg-brand-accent/90 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Overview
          </h4>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Problem vs. Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface-elevated/40 border border-surface-border">
            <div className="flex items-center gap-2 mb-2 text-rose-500 dark:text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">
                The Problem
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-surface-elevated/40 border border-surface-border">
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">
                Engineered Solution
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Spec */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-brand-accent" />
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Architecture Data Flow
            </h4>
          </div>
          <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto shadow-inner">
            <code className="text-emerald-400">{project.architecture}</code>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Key Engineering Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded bg-surface-elevated/30 border border-surface-border text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Challenges & Solutions */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Engineering Challenges & Trade-Offs
          </h4>
          <div className="space-y-2">
            {project.challenges.map((challenge: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded bg-surface-elevated/30 border border-surface-border text-xs text-slate-700 dark:text-slate-300"
              >
                <div className="font-mono text-[10px] text-amber-500 dark:text-amber-400 px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 shrink-0">
                  #{idx + 1}
                </div>
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Contributions */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-4 h-4 text-brand-accent" />
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              My Concrete Contributions
            </h4>
          </div>
          <ul className="space-y-2">
            {project.contributions.map((contribution: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded bg-surface-elevated/50 border border-surface-border text-xs text-slate-800 dark:text-slate-200"
              >
                <span className="text-brand-accent font-mono font-bold">•</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Full Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Tag key={tech} label={tech} variant="neutral" />
            ))}
          </div>
        </div>

        {/* Modal Close CTA */}
        <div className="pt-4 border-t border-surface-border flex justify-end">
          <Button variant="secondary" size="md" onClick={onClose}>
            Close Specification
          </Button>
        </div>
      </div>
    </Modal>
  );
};
