'use client';

import React, { useState } from 'react';

const defaultTags = [
  { name: 'New Arrivals', count: 22 },
  { name: 'Sale', count: 45 },
  { name: 'Limited Edition', count: 12 },
  { name: 'Trending', count: 30 },
  { name: 'Popular', count: 40 },
  { name: 'Electronics', count: 18 },
  { name: 'Fashion', count: 25 },
  { name: 'Accessories', count: 15 },
  { name: 'Best Sellers', count: 38 },
  { name: 'Clearance', count: 10 },
];


const getFontSizeClass = (count) => {
  if (count > 40) return 'text-xl sm:text-2xl font-bold';
  if (count > 30) return 'text-lg sm:text-xl font-semibold';
  if (count > 20) return 'text-base sm:text-lg';
  return 'text-sm';
};


const getRandomRotation = (index) => {
  const rotations = [-3, -2, -1, 0, 1, 2, 3, 4, -4, 5, -5];
  return rotations[index % rotations.length];
};

const ShopTagCloud = ({
  tags = defaultTags,
  onTagClick,
  activeTag,
  className = '',
}) => {
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section
      aria-label="Shop Tag Cloud"
      className={`w-full py-8 px-4 bg-white text-gray-700 ${className}`}
    >
      <div
        role="list"
        className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-5 sm:gap-6"
      >
        {tags.map((tag, i) => {
          const isActive = activeTag === tag.name;
          const rotation = getRandomRotation(i);

          return (
            <button
              key={tag.name}
              type="button"
              role="listitem"
              aria-pressed={isActive}
              onClick={() => onTagClick?.(tag.name)}
              onMouseEnter={() => setHoveredTag(tag.name)}
              onMouseLeave={() => setHoveredTag(null)}
              className={`
                cursor-pointer rounded px-4 py-2
                transition
                select-none
                ${getFontSizeClass(tag.count)}
                focus:outline-none focus:ring-2 focus:ring-black
                ${
                  isActive
                    ? 'bg-black text-gray-900 shadow-lg scale-110'
                    : 'bg-white hover:bg-black hover:text-gray-900'
                }
                ${
                  hoveredTag === tag.name && !isActive
                    ? 'scale-105'
                    : 'scale-100'
                }
              `}
              style={{
                transform: `rotate(${rotation}deg)`,
                willChange: 'transform',
                transition: 'transform 0.2s ease, background-color 0.3s ease',
              }}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ShopTagCloud;
