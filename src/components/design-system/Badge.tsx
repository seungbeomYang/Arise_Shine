import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'outline';
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
  children,
  className,
  variant = 'default',
}, ref) => {
  const variantStyles = {
    default: 'border border-black rounded-[40px] inline-flex items-center justify-center px-4 py-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,164,77,0.6)] hover:border-primary hover:translate-y-[-2px]',
    primary: 'bg-primary border border-black rounded-[40px] inline-flex items-center justify-center px-4 py-2 transition-all duration-300',
    outline: 'border border-black/50 rounded-[40px] inline-flex items-center justify-center px-4 py-2 transition-all duration-300',
  };

  return (
    <div ref={ref} className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  );
});

Badge.displayName = 'Badge'; 