import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  className = '',
  align = 'left',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-mono font-medium tracking-wider uppercase text-brand-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
