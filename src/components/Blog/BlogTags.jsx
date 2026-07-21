'use client';

import React from 'react';

const tags = [
  'Frontend',
  'Design',
  'JavaScript',
  'eCommerce',
  'React',
  'CSS',
  'Performance',
  'UX/UI',
];

const BlogTags = ({ onTagClick }) => {
  return (
    <section className="w-full flex justify-center bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] w-full flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick && onTagClick(tag)}
            className="bg-black text-gray-900 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-black transition-colors whitespace-nowrap"
          >
            #{tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogTags;
