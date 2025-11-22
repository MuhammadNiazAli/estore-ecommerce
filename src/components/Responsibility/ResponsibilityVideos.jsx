'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: 'Sustainability in Action',
    thumbnail:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=640&q=80',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Community Empowerment',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
    src: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Clean Energy Projects',
    thumbnail:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=640&q=80',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  },
];

const ResponsibilityVideos = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section
      aria-label="Responsibility Videos"
      className="w-full bg-gray-900 flex justify-center px-4 py-16 sm:py-24 my-[-50px]"
    >
      <div className="max-w-[1000px] w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-yellow-400 text-4xl font-bold mb-12 text-center select-none"
        >
          Responsibility in Motion
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {videos.map(({ id, title, thumbnail, src }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.2, duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-500"
              tabIndex={0}
              aria-label={`Play video titled ${title}`}
              onFocus={() => setActiveVideoId(id)}
              onBlur={() => setActiveVideoId(null)}
              onMouseEnter={() => setActiveVideoId(id)}
              onMouseLeave={() => setActiveVideoId(null)}
            >
              {/* Thumbnail */}
              <img
                src={thumbnail}
                alt={`Thumbnail for video: ${title}`}
                className={`w-full h-[180px] sm:h-48 object-cover transition-transform duration-300 ${
                  activeVideoId === id ? 'scale-105' : ''
                }`}
                loading="lazy"
                draggable={false}
              />

              {/* Play icon overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-6.518-3.76A.75.75 0 007 8.927v6.146a.75.75 0 001.234.64l6.518-3.76a.75.75 0 000-1.285z"
                  />
                </svg>
              </div>

              {/* Video element: visible only when active */}
              <video
                src={src}
                muted
                loop
                preload="metadata"
                playsInline
                className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 pointer-events-none ${
                  activeVideoId === id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <h3 className="text-yellow-400 font-semibold text-sm sm:text-base truncate">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityVideos;
