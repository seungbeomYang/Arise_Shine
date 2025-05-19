import React from 'react';
import { cn } from '@/lib/utils';
import { Text } from './Typography';
import Image from 'next/image';
import { Card } from './Card';

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: string;
  icon1?: string;
  icon2?: string;
  altText?: string;
  altText1?: string;
  altText2?: string;
  variant?: 'centered' | 'bottom-right';
  cardVariant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

export const ServiceCard = ({
  title,
  description,
  icon,
  icon1,
  icon2,
  altText,
  altText1,
  altText2,
  variant = 'centered',
  cardVariant = 'outline',
  className,
}: ServiceCardProps) => {
  // Use single icon if provided, otherwise use icon1 (and optionally icon2)
  const iconSrc = icon || icon1 || '';
  const iconAlt = altText || altText1 || title;

  return (
    <Card
      variant={cardVariant}
      hover="scale-glow"
      className={cn(
        "flex flex-col group",
        variant === 'centered' ? "items-center gap-10" : "gap-8 md:gap-12",
        className
      )}
    >
      {variant === 'centered' ? (
        // Centered layout (design system version)
        <>
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {iconSrc && (
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={32}
                height={32}
                quality={90}
                loading="eager"
                className="transition-transform duration-300 group-hover:rotate-3"
              />
            )}
          </div>
          <div className="text-center">
            <Text size="lg" weight="semibold" className="mb-4 text-black">{title}</Text>
            <Text size="base" className="text-black">{description}</Text>
          </div>
        </>
      ) : (
        // Bottom right icon layout (original version)
        <>
          <Text size="lg" weight="semibold" className="text-black">
            {title}
          </Text>

          <Text size="base" className="text-black">
            {description}
          </Text>

          <div className="flex justify-end items-center mt-auto">
            <div className="bg-primary p-4 rounded-2xl h-20 w-20 md:h-24 md:w-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="relative w-full h-full">
                {iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={40}
                    height={40}
                    quality={90}
                    loading="eager"
                    className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
                {icon2 && altText2 && (
                  <Image
                    src={icon2}
                    alt={altText2}
                    width={40}
                    height={40}
                    quality={90}
                    loading="eager"
                    className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

ServiceCard.displayName = 'ServiceCard'; 