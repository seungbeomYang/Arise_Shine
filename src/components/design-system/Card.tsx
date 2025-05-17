import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  hover?: 'scale' | 'scale-up' | 'glow' | 'scale-glow' | 'none';
  className?: string;
};

export const Card = ({
  children,
  variant = 'primary',
  hover = 'scale-glow',
  className,
}: CardProps) => {
  const variantStyles = {
    primary: 'bg-[#EFEADE] rounded-[22px] p-6',
    secondary: 'bg-secondary rounded-3xl p-6',
    outline: 'border border-black/50 rounded-[44px] p-8',
  };

  const hoverStyles = {
    scale: 'transition-all duration-300 transform hover:scale-105',
    'scale-up': 'transition-all duration-300 transform hover:scale-110',
    glow: 'transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,164,77,0.6)] hover:border-primary',
    'scale-glow': 'transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(229,164,77,0.6)] hover:border-primary',
    none: '',
  };

  return (
    <div
      className={cn(
        'h-full',
        variantStyles[variant],
        hoverStyles[hover],
        className
      )}
    >
      {children}
    </div>
  );
}; 