import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  arrow?: boolean;
  icon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40',
  secondary:
    'bg-card text-text-primary hover:bg-card/80 border border-white/10 hover:border-white/20',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  outline:
    'border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      arrow = false,
      icon,
      children,
      className,
      disabled,
      as: Tag = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : icon ? (
          <span className="w-4 h-4 flex items-center">{icon}</span>
        ) : null}
        {children}
        {arrow && !loading && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </>
    );

    if (Tag === 'a' && href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={cn(baseStyles, 'group cursor-pointer')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, 'group')}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
