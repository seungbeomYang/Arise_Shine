import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
  onClick?: () => void;
  isExternal?: boolean;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconAlt = '',
  className,
  onClick,
  isExternal = false,
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-raleway font-semibold transition-all duration-300';

  const variantStyles = {
    primary: 'bg-primary border border-black text-black rounded-full hover:bg-[#E5A44D] hover:shadow-md hover:translate-y-[-2px] active:translate-y-[0px] hover:shadow-[0_0_15px_rgba(229,164,77,0.6)]',
    outline: 'border border-white rounded-full bg-transparent hover:bg-black/5 hover:shadow-sm active:translate-y-[1px] hover:bg-[#E5A44D] hover:text-black',
    text: 'bg-transparent text-black hover:text-primary hover:underline',
  };

  const sizeStyles = {
    sm: 'text-base py-1.5 px-4',
    md: 'text-lg py-2 px-6',
    lg: 'text-xl py-3 px-8',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyle,
    className
  );

  const content = (
    <>
      {children}
      {icon && <Image src={icon} alt={iconAlt} width={24} height={24} quality={90} loading="eager" className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={cn(buttonStyles, "group")}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(buttonStyles, "group")}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonStyles, "group")}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
};