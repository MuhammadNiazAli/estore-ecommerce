'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const relatedPosts = [
  {
    id: 1,
    title: 'Understanding Design Systems',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Tips',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 3,
    title: 'Boosting eCommerce Sales',
    image:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 4,
    title: 'Optimizing Frontend Performance',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 5,
    title: 'Designing for Accessibility',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 6,
    title: 'Modern CSS Tricks',
    image:
      'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 7,
    title: 'React Hooks Deep Dive',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 8,
    title: 'Building Scalable APIs',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 9,
    title: 'GraphQL vs REST: What to Choose?',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 10,
    title: 'Effective Code Reviews',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 11,
    title: 'Intro to TypeScript',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 12,
    title: 'Using WebAssembly Today',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 13,
    title: 'Deploying with Docker',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b511691a0?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 14,
    title: 'Understanding Cloud Architecture',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 15,
    title: 'Debugging JavaScript Efficiently',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 16,
    title: 'Building Progressive Web Apps',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b511691a0?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 17,
    title: 'Mastering Git Workflows',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 18,
    title: 'State Management with Redux',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 19,
    title: 'UI Animation Best Practices',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
  {
    id: 20,
    title: 'Security Essentials for Web Apps',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    url: '#',
  },
];

const BlogRelatedPosts = () => {
  const scrollRef = useRef(null);

  const scrollByCard = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector('a');
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full flex justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1000px] w-full relative">
        <h3 className="text-yellow-400 font-bold text-2xl mb-6 px-2 sm:px-0">Related Posts</h3>

        {/* Left Arrow (desktop only) */}
        <button
          onClick={() => scrollByCard('left')}
          aria-label="Scroll Left"
          className="hidden md:flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-yellow-400/20 hover:bg-yellow-400/40 rounded-full shadow-md transition-colors z-10"
          style={{ marginLeft: '5px' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={() => scrollByCard('right')}
          aria-label="Scroll Right"
          className="hidden md:flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-yellow-400/20 hover:bg-yellow-400/40 rounded-full shadow-md transition-colors z-10"
          style={{ marginRight: '5px' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-2 scrollbar-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {relatedPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="snap-start flex-shrink-0 w-full sm:w-[280px] md:w-[300px] bg-gray-800 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-yellow-400"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative w-full h-40 sm:h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={post.id === 1}
                />
              </div>
              <div className="p-4">
                <h4 className="text-yellow-400 font-semibold text-lg line-clamp-2">
                  {post.title}
                </h4>
                <div className="mt-3 flex items-center gap-1 text-yellow-400 font-semibold select-none">
                  Read More
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BlogRelatedPosts;
