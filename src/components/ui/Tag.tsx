import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  label?: string;
  variant?: 'neutral' | 'accent' | 'emerald';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  label, 
  variant = 'neutral',
  className = '' 
}) => {
  const content = label || children;

  const variantStyles = {
    neutral: 'bg-surface-elevated/70 text-slate-700 dark:text-slate-300 border-surface-border hover:border-slate-400 dark:hover:border-slate-600',
    accent: 'bg-brand-accent/10 text-brand-accent border-brand-accent/20 hover:border-brand-accent/40',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40',
  };

  return (
    <span
      className={`inline-block text-xs font-mono px-2.5 py-1 rounded border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {content}
    </span>
  );
};
