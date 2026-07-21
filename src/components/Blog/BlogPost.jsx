'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tag, X } from 'lucide-react';

const blogPost = {
  title: 'Mastering Frontend Architecture: A Deep Dive',
  author: {
    name: 'Niaz Ali',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  publishedDate: '2025-07-15',
  publishedDateFormatted: 'July 15, 2025',
  coverImage:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  content: [
    'Frontend architecture is essential to building scalable and maintainable web applications.',
    'Understanding component design, state management, and performance optimization can drastically improve your projects.',
    'We will also look into design systems and how they contribute to consistent UI and UX.',
  ],
  tags: ['Frontend', 'Architecture', 'Design Systems', 'Performance'],
};

const tagDetails = {
  Frontend: {
    title: 'Frontend Development',
    description: 'Frontend development involves building the client-side of web applications.',
    more: [
      'Uses languages like HTML, CSS, and JavaScript.',
      'Popular frameworks include React, Vue, and Angular.',
    ],
  },
  Architecture: {
    title: 'Frontend Architecture',
    description: 'Defines the structure to build scalable frontend apps.',
    more: ['State management', 'Component patterns', 'Code splitting'],
  },
  'Design Systems': {
    title: 'Design Systems',
    description: 'Design systems ensure consistent UI and UX across applications.',
    more: ['Typography, color, layout', 'Reusable components'],
  },
  Performance: {
    title: 'Performance Optimization',
    description: 'Improves speed and responsiveness of web apps.',
    more: ['Lazy loading', 'Code splitting', 'Image optimization'],
  },
};

export default function BlogPost() {
  const [openTag, setOpenTag] = useState(null);
  const modalRef = useRef(null);

  // ESC key listener
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') setOpenTag(null);
    }

    if (openTag) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [openTag]);

  // Optional focus trap without crashing
  useEffect(() => {
    if (!openTag || !modalRef.current) return;

    const focusable = modalRef.current.querySelector(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) focusable.focus();
  }, [openTag]);

  return (
    <div className="w-full flex justify-center bg-white px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-[900px] w-full prose prose-invert sm:prose-lg md:prose-xl lg:prose-xl xl:prose-2xl">
        {/* Title */}
        <header className="mb-6 sm:mb-8">
          <h1 className="font-extrabold text-black break-words">{blogPost.title}</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-3">
            <figure className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-black flex-shrink-0">
              <Image
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                fill
                className="object-cover"
                priority
              />
            </figure>
            <div className="text-gray-600 text-sm sm:text-base">
              <p className="text-black font-semibold">{blogPost.author.name}</p>
              <time dateTime={blogPost.publishedDate}>{blogPost.publishedDateFormatted}</time>
            </div>
          </div>
        </header>

        {/* Cover */}
        <figure className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-10 sm:mb-12">
          <Image
            src={blogPost.coverImage}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        </figure>

        {/* Content */}
        <section className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-relaxed">
          {blogPost.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>

        {/* Tags */}
        <aside className="mt-10 sm:mt-12 flex flex-wrap gap-3">
          {blogPost.tags.map((tag) => (
            <button
              key={tag}
              className="flex items-center gap-1 text-black bg-black bg-opacity-20 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              onClick={() => setOpenTag(tag)}
            >
              <Tag size={14} />
              {tag}
            </button>
          ))}
        </aside>

        {/* Tag Modal */}
        {openTag && (
          <div
            ref={modalRef}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-white w-[90%] max-w-[400px] rounded-lg shadow-lg p-6 border border-black animate-scaleUp sm:w-[400px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={() => setOpenTag(null)}
              className="absolute top-4 right-4 text-black hover:text-black focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h2
              id="modal-title"
              className="text-black text-lg sm:text-xl font-bold mb-3 break-words"
            >
              {tagDetails[openTag]?.title || openTag}
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              {tagDetails[openTag]?.description || 'No description available.'}
            </p>
            {tagDetails[openTag]?.more && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-xs sm:text-sm">
                {tagDetails[openTag].more.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
