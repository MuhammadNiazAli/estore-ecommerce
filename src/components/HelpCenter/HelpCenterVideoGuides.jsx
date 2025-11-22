'use client';

import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'How to Track Your Order',
    thumbnail: 'https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg',
    href: '/help-center/videos/track-order',
  },
  {
    title: 'How to Initiate a Return',
    thumbnail: 'https://img.youtube.com/vi/2vjPBrBU-TM/hqdefault.jpg',
    href: '/help-center/videos/initiate-return',
  },
  {
    title: 'Setting Up Your Account Security',
    thumbnail: 'https://img.youtube.com/vi/8SbUC-UaAxE/hqdefault.jpg',
    href: '/help-center/videos/account-security',
  },
];

const HelpCenterVideoGuides = () => {
  return (
    <section className="bg-gray-900 w-full px-4 py-12 flex justify-center mb-[-30px]">
      <div className="max-w-[1000px] w-full text-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-10 text-center">
          Video Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.href}
              className="relative rounded-xl overflow-hidden shadow-md
                hover:shadow-yellow-400 transition-shadow duration-300 block
                focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              tabIndex={0}
              aria-label={`Watch video guide: ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay with play icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 cursor-pointer pointer-events-none group">
                <Play className="w-12 h-12 text-yellow-400 pointer-events-auto" />
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterVideoGuides;
