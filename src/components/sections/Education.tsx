import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, Trophy, Calendar, MapPin, Award } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="Education & Achievements"
          eyebrow="ACADEMIC EXCELLENCE & HONORS"
          description="Formal academic qualifications, department ranking, and hackathon awards verified from official academic records."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Education Card */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-accent" />
              <span>Degree & Institution</span>
            </h3>

            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-medium text-brand-accent mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="font-mono text-xs text-slate-600 dark:text-slate-400 flex sm:flex-col sm:items-end gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>{edu.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* Metrics Highlight Pill */}
                <div className="mt-4 pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-3">
                  <div className="px-3 py-1.5 rounded bg-surface-elevated border border-surface-border flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Cumulative GPA:</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">{edu.cgpa}</span>
                  </div>

                  {edu.honors && (
                    <div className="px-3 py-1.5 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-brand-accent" />
                      <span className="text-xs font-mono font-semibold text-brand-accent">{edu.honors}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Distinctions */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Recognitions & Awards</span>
            </h3>

            <div className="space-y-4">
              {profileData.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-500 dark:text-amber-400">★</span>
                      <span>{award.title}</span>
                    </h4>
                    {award.year && (
                      <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded bg-surface-elevated">
                        {award.year}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
