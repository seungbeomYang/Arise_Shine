import React, { forwardRef, createElement, ElementType } from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: 'default' | 'light' | 'white';
  align?: 'left' | 'center' | 'right';
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  level,
  className,
  color = 'default',
  align = 'left',
}, ref) => {
  const colorStyles = {
    default: 'text-black',
    light: 'text-textGray',
    white: 'text-white',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizeStyles = {
    1: 'text-4xl md:text-5xl font-medium',
    2: 'text-3xl md:text-4xl font-semibold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-semibold',
    6: 'text-base md:text-lg font-semibold',
  };

  const tagName = `h${level}` as ElementType;

  return createElement(
    tagName,
    {
      ref,
      className: cn(
        'font-raleway',
        sizeStyles[level],
        colorStyles[color],
        alignStyles[align],
        className
      ),
    },
    children
  );
});

type TextProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold';
  color?: 'default' | 'light' | 'white';
  align?: 'left' | 'center' | 'right';
  className?: string;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(({
  children,
  size = 'base',
  weight = 'regular',
  color = 'default',
  align = 'left',
  className,
}, ref) => {
  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl md:text-3xl',
  };

  const weightStyles = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  };

  const colorStyles = {
    default: 'text-black',
    light: 'text-textGray',
    white: 'text-white',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <p
      ref={ref}
      className={cn(
        'font-raleway',
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        alignStyles[align],
        className
      )}
    >
      {children}
    </p>
  );
}); 