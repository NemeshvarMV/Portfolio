import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="Professional Experience"
          eyebrow="ENGINEERING INTERNSHIPS"
          description="Hands-on industry experience building production AI workflows, multimodal systems, and Django backend services."
        />

        <div
          ref={ref}
          className={`relative pl-6 md:pl-8 border-l border-surface-border space-y-12 max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {profileData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 p-1.5 rounded-full bg-surface-card border border-surface-border text-brand-accent group-hover:border-slate-400 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-brand-accent">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Type pill */}
                <div className="mb-4">
                  <span className="font-mono text-[10px] uppercase font-semibold text-sky-700 dark:text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {exp.type}
                  </span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-3 border-t border-surface-border/60">
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Technologies & Domains
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech} label={tech} variant="neutral" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
