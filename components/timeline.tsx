import { cn } from '@/lib/utils';
import React from 'react';

interface TimelineItem {
  key?: React.Key;
  dateTime?: string;
  label: string;
  description?: string;
  className?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ol className="relative left-8 top-8 border-l border-stone-200 backdrop-blur-sm">
      {items.map((item, index) => {
        return <TimelineItem key={item.key ?? index} item={item} />;
      })}
    </ol>
  );
};

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => {
  const { dateTime, label, description } = item;

  return (
    <li className={cn('mb-5 ml-3', 'md:mb-10 md:ml-6')}>
      <div>
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
      </div>
      <div className="whitespace-pre-wrap">
        {dateTime && (
          <time
            className={cn(
              'mb-1 text-xs font-normal leading-none text-stone-600',
              'sm:text-sm md:text-base lg:text-lg',
            )}
          >
            {dateTime}
          </time>
        )}
        <h3
          className={cn(
            'text-sm font-semibold text-stone-900',
            'sm:text-base md:text-lg lg:text-xl',
          )}
        >
          {label}
        </h3>
        {description && (
          <p
            className={cn(
              'mb-4 text-xs font-normal text-stone-500',
              'sm:text-sm md:text-base lg:text-lg',
            )}
          >
            {description}
          </p>
        )}
      </div>
    </li>
  );
};

export default Timeline;
