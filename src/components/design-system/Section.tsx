import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'secondary' | 'transparent';
  width?: 'default' | 'full' | 'narrow' | 'wide';
  padding?: 'default' | 'small' | 'large' | 'none';
  id?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'outline' | 'text';
  buttonSize?: 'sm' | 'md' | 'lg';
  buttonAlign?: 'left' | 'center' | 'right';
};

export const Section = ({
  children,
  className,
  background = 'default',
  width = 'default',
  padding = 'default',
  id,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
  buttonSize = 'md',
  buttonAlign = 'center',
}: SectionProps) => {
  const backgroundStyles = {
    default: 'bg-background',
    secondary: 'bg-secondary',
    transparent: 'bg-transparent',
  };

  const widthStyles = {
    default: 'container mx-auto px-4 md:px-8',
    full: 'w-full',
    narrow: 'container mx-auto max-w-4xl px-4 md:px-8',
    wide: 'container mx-auto max-w-7xl px-4 md:px-8',
  };

  const paddingStyles = {
    default: 'py-12 md:py-16',
    small: 'py-8',
    large: 'py-16 md:py-24',
    none: '',
  };

  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <div className={cn(widthStyles[width])}>
        {children}

        {buttonText && buttonHref && (
          <div className={cn("flex mt-10", alignStyles[buttonAlign])}>
            <Button
              variant={buttonVariant}
              size={buttonSize}
              href={buttonHref}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}; 