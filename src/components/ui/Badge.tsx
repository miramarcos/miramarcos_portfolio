import React from 'react';
import { cn } from '@/utils/cn';

type BadgeVariant = 'default' | 'accent' | 'subtle';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/5 text-text-secondary border border-white/10',
  accent: 'bg-primary/15 text-primary-light border border-primary/25',
  subtle: 'bg-surface text-text-secondary border border-white/8',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
