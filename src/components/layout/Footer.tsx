import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { LeetCodeIcon } from '../ui/LeetCodeIcon';
import { Container } from '../ui/Container';
import { profileData } from '../../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface-base py-12 mt-20 text-slate-500 dark:text-slate-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-surface-border/60">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-surface-card border border-surface-border text-brand-accent">
                NMV
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-200 text-sm">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md">
              AI Full Stack Developer & Python Engineer. Specializing in LangGraph, Agentic RAG, and high-performance backend systems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {profileData.contact.leetcode && (
              <a
                href={profileData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${profileData.contact.email}`}
              aria-label="Email Nemeshvar"
              className="p-2 rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-md bg-surface-card border border-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Kalasalingam Academy (1st Rank in CSE of 23S14)</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
