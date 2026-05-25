import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-xl border border-white/8 transition-all duration-300',
        hover && 'hover:border-white/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30',
        glow && 'hover:shadow-primary/10',
        className
      )}
    >
      {children}
    </div>
  );
}
