import React from 'react';
import { Heading, Text } from './Typography';
import { cn } from '@/lib/utils';

type Advantage = {
  number: string;
  title: string;
};

type AdvantageListProps = {
  title: string;
  label?: string;
  advantages: Advantage[];
  className?: string;
};

export const AdvantageList = ({
  title,
  label = "Why Choose Us",
  advantages,
  className
}: AdvantageListProps) => {
  return (
    <div className={cn("w-full py-24 bg-secondary", className)}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-10">
          <div className="inline-flex items-center justify-center px-4 py-2 border border-black rounded-[40px] self-start">
            <Text size="base" weight="regular" className="text-black">{label}</Text>
          </div>

          <Heading level={2} className="text-3xl md:text-4xl mb-10">{title}</Heading>

          <div className="space-y-5">
            {advantages.map((item, index) => (
              <div key={index} className="border border-black rounded-[14px] p-5 flex gap-16">
                <Text size="lg" weight="semibold" className="text-black">{item.number}</Text>
                <div>
                  <Text size="lg" weight="semibold" className="text-black">{item.title}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 