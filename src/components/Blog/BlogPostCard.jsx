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
        bg-white rounded-lg shadow-md overflow-hidden 
        flex flex-col hover:shadow-black transition-shadow duration-300 cursor-pointer
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
          <div className="w-full h-full bg-white flex items-center justify-center text-gray-600 text-sm sm:text-base">
            No Image
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-black font-semibold text-lg sm:text-xl md:text-2xl mb-2 line-clamp-2">
          {title || 'Untitled'}
        </h2>
        <p className="text-gray-700 flex-grow mb-4 line-clamp-3 text-sm sm:text-base">
          {excerpt || 'No excerpt available.'}
        </p>
        <div className="flex justify-between items-center text-gray-600 text-xs sm:text-sm mb-4 select-none">
          <span>{date || 'Unknown date'}</span>
          <span>{readTime || ''}</span>
        </div>
        {url ? (
          <a
            href={url}
            className="inline-flex items-center gap-2 text-black hover:text-black font-semibold transition-colors text-sm sm:text-base"
          >
            Read More <ArrowRight size={16} />
          </a>
        ) : (
          <span className="text-black font-semibold text-sm sm:text-base">Read More</span>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
