import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Text } from './Typography';
import { Button } from './Button';

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: 'white' | 'black';
  height?: 'full' | 'default' | 'reduced';
  align?: 'center' | 'left' | 'right';
  titleSize?: 'default' | 'large' | 'small';
  className?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'outline' | 'text';
};

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'bg-secondary',
  textColor = 'black',
  height = 'default',
  align = 'center',
  titleSize = 'default',
  className,
  overlay = true,
  overlayOpacity = 'bg-black/20',
  children,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
}: HeroProps) => {
  const heightStyles = {
    full: 'h-[calc(100vh-160px)] min-h-[700px]',
    default: 'min-h-[500px]',
    reduced: 'min-h-[400px]',
  };

  const alignStyles = {
    center: 'items-center justify-center text-center',
    left: 'items-start justify-center text-left',
    right: 'items-end justify-center text-right',
  };

  const textStyles = {
    white: 'text-white',
    black: 'text-black',
  };

  const titleSizeStyles = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-7xl',
    small: 'text-3xl md:text-4xl',
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div
          className={cn(
            'w-full overflow-hidden relative flex flex-col rounded-[40px]',
            heightStyles[height],
            alignStyles[align],
            backgroundColor,
            className
          )}
        >
          {backgroundImage && (
            <div
              className={cn(
                "absolute inset-0 z-10 rounded-[40px]",
                overlay ? overlayOpacity : ''
              )}
              style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: overlay ? 'overlay' : 'normal'
              }}
            />
          )}

          <div className={cn("relative z-20 flex flex-col p-8 md:p-12", alignStyles[align])}>
            {children ? (
              children
            ) : (
              <>
                <Heading
                  level={1}
                  className={cn("font-medium mb-4 max-w-4xl text-center", titleSizeStyles[titleSize], textStyles[textColor])}
                >
                  {title}
                </Heading>
                {subtitle && (
                  <Text
                    size="lg"
                    weight="medium"
                    className={cn("mt-2 max-w-2xl text-center", textStyles[textColor])}
                  >
                    {subtitle}
                  </Text>
                )}
                {buttonText && buttonHref && (
                  <div className={cn("mt-8")}>
                    <Button
                      variant={buttonVariant}
                      size="lg"
                      href={buttonHref}
                    >
                      {buttonText}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 