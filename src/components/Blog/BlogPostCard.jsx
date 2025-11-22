'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  if (!post) return null;

  const { image, title, excerpt, date, readTime, url, id } = post;

  return (
    <article
      className="
        w-full max-w-[480px] 
        bg-gray-800 rounded-lg shadow-md overflow-hidden 
        flex flex-col hover:shadow-yellow-400 transition-shadow duration-300 cursor-pointer
        mx-auto
        sm:max-w-sm
        md:max-w-md
      "
    >
      <div className="relative w-full h-48 sm:h-52 md:h-60">
        {image ? (
          <Image
            src={image}
            alt={title || 'Blog post image'}
            fill
            className="object-cover"
            priority={id === 1}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm sm:text-base">
            No Image
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-yellow-400 font-semibold text-lg sm:text-xl md:text-2xl mb-2 line-clamp-2">
          {title || 'Untitled'}
        </h2>
        <p className="text-gray-300 flex-grow mb-4 line-clamp-3 text-sm sm:text-base">
          {excerpt || 'No excerpt available.'}
        </p>
        <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm mb-4 select-none">
          <span>{date || 'Unknown date'}</span>
          <span>{readTime || ''}</span>
        </div>
        {url ? (
          <a
            href={url}
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors text-sm sm:text-base"
          >
            Read More <ArrowRight size={16} />
          </a>
        ) : (
          <span className="text-yellow-400 font-semibold text-sm sm:text-base">Read More</span>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
