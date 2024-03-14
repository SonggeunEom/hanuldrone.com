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
    <li className="mb-10 ml-6">
      <div>
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
        <div className="flex h-full w-0.5 bg-gray-200" />
      </div>
      <div>
        {dateTime && (
          <time className="mb-1 text-sm font-normal leading-none text-stone-600">
            {dateTime}
          </time>
        )}
        <h3 className="text-lg font-semibold text-stone-900">{label}</h3>
        {description && (
          <div className="mb-4 text-base font-normal text-stone-500 ">
            {description}
          </div>
        )}
      </div>
    </li>
  );
};

export default Timeline;
