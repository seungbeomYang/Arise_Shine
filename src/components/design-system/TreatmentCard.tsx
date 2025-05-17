import React from 'react';
import { cn } from '@/lib/utils';
import { Text } from './Typography';
import { Button } from './Button';
import { Card } from './Card';

type TreatmentCardProps = {
  title: string;
  duration: string;
  description: string;
  price?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
};

export const TreatmentCard = ({
  title,
  duration,
  description,
  price,
  buttonText = 'Get started',
  buttonHref = '/book',
  className,
}: TreatmentCardProps) => {
  return (
    <Card
      variant="primary"
      hover="scale-glow"
      className={cn("flex flex-col gap-12 group min-h-[350px]", className)}
    >
      <div className="flex-1">
        <Text size="lg" weight="semibold" className="text-black transition-colors duration-300 ">{title}</Text>

        {price ? (
          <div className="flex items-end gap-3 mt-2">
            <Text size="lg" weight="semibold" className="text-black text-[42px] leading-tight transition-colors duration-300 ">{price}</Text>
            <Text size="base" className="text-textGray mb-2 transition-colors duration-300">{duration}</Text>
          </div>
        ) : (
          <Text size="lg" weight="semibold" className="text-black text-[36px] leading-tight transition-colors duration-300 ">{duration}</Text>
        )}

        <Text size="base" className="mt-4 text-black transition-all duration-300">{description}</Text>
      </div>
      <div className="transition-transform duration-300 transform group-hover:translate-y-[-5px]">
        <Button variant="primary" fullWidth href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}; 