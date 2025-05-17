import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';
import { Text } from './Typography';
import Image from 'next/image';

type ReviewCardProps = {
  name: string;
  date: string;
  rating: number;
  content: string;
  imageUrl?: string;
  source?: 'google' | 'facebook' | 'yelp';
  className?: string;
};

export const ReviewCard = ({
  name,
  date,
  rating,
  content,
  imageUrl,
  source = 'google',
  className,
}: ReviewCardProps) => {
  const sourcesImages = {
    google: '/images/google.svg',
    facebook: '/images/facebook.svg',
    yelp: '/images/yelp.svg'
  };

  return (
    <Card
      variant="outline"
      hover="scale"
      className={cn('flex flex-col p-6 gap-4', className)}
    >
      {/* Header with name, date, and rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-xl font-semibold text-primary">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <Text weight="semibold" size="base" className="text-black">
              {name}
            </Text>
            <Text size="xs" className="text-gray-500">
              {date}
            </Text>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "text-[#E5A44D]" : "text-gray-300"}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review content */}
      <Text size="base" className="text-black">
        {content}
      </Text>

      {/* Source logo */}
      <div className="mt-auto flex justify-end">
        {source && (
          <div className="w-6 h-6 opacity-50">
            <Image
              src={sourcesImages[source]}
              alt={`Reviewed on ${source}`}
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

ReviewCard.displayName = 'ReviewCard'; 