import React from 'react';
import { Heading, Text } from './Typography';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PractitionerProps = {
  name: string;
  image?: string;
  role?: string;
  degrees?: string[];
  specialties?: string[];
  bio?: string;
  reversed?: boolean;
  className?: string;
};

export const Practitioner = ({
  name,
  image,
  role = 'Acupuncturist',
  degrees = [],
  specialties = [],
  bio = '',
  reversed = false,
  className
}: PractitionerProps) => {
  return (
    <div className={cn("w-full py-24", className)}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={cn(
          "flex flex-col gap-14",
          reversed ? "md:flex-row-reverse" : "md:flex-row",
          "items-center"
        )}>
          <div className="w-full md:w-1/2 h-[550px] rounded-[59px] bg-[#EFEADE] overflow-hidden relative">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[59px]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#EFEADE] border border-black/10 rounded-[59px]">
                <div className="text-black/50 text-2xl font-medium">{name}'s Photo</div>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center justify-center px-4 py-2 border border-black rounded-[40px] self-start why-choose-badge">
              <Text size="base" weight="regular" className="text-black">{role}</Text>
            </div>
            <Heading level={2} className="text-3xl md:text-4xl">Who is {name}</Heading>

            <div className="mt-4">
              {degrees.length > 0 && (
                <>
                  <Text size="lg" weight="medium" className="mb-2 text-black">Degrees</Text>
                  <Text size="base" className="mb-6 text-black">
                    {degrees.map((degree, index) => (
                      <React.Fragment key={index}>
                        {degree}
                        {index < degrees.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </Text>
                </>
              )}

              {specialties.length > 0 && (
                <>
                  <Text size="lg" weight="medium" className="mb-2 text-black">Specialties:</Text>
                  <Text size="base" className="mb-6 text-black">
                    {specialties.map((specialty, index) => (
                      <React.Fragment key={index}>
                        {specialty}
                        {index < specialties.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </Text>
                </>
              )}

              {bio && (
                <>
                  <Text size="lg" weight="medium" className="mb-2 text-black">Bio:</Text>
                  <Text size="base" className="text-black">
                    {bio}
                  </Text>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 