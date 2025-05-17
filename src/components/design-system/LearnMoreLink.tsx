import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LearnMoreLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  arrowClassName?: string;
  textColor?: 'black' | 'white' | 'primary';
  refProp?: React.RefObject<HTMLAnchorElement | null>;
};

export const LearnMoreLink = ({
  href,
  children = 'Learn More',
  className,
  showArrow = true,
  arrowClassName,
  textColor = 'black',
  refProp,
}: LearnMoreLinkProps) => {
  const textColorStyles = {
    black: 'text-black hover:text-[#E5A44D]',
    white: 'text-white hover:text-[#E5A44D]',
    primary: 'text-primary hover:text-[#D18A30]',
  };

  return (
    <Link
      ref={refProp}
      href={href}
      className={cn(
        "flex items-center gap-2 font-raleway text-lg transition-colors duration-300 group",
        textColorStyles[textColor],
        className
      )}
    >
      <span className="relative inline-block text-black">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E5A44D] transition-all duration-300 group-hover:w-full"></span>
      </span>
      {showArrow && (
        <Image
          src={textColor === 'white' ? "/images/arrow-right-white.svg" : "/images/arrow-right.svg"}
          alt="Arrow right"
          width={24}
          height={24}
          className={cn(
            "transition-transform duration-300 group-hover:translate-x-2",
            arrowClassName
          )}
        />
      )}
    </Link>
  );
};

LearnMoreLink.displayName = 'LearnMoreLink'; 