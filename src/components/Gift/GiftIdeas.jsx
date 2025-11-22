'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ideas = [
  {
    id: 1,
    title: 'Eco-Friendly Gifts',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Tech Gadgets',
    img: 'https://images.unsplash.com/photo-1518449079433-4b54764d0d2e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Personalized Gifts',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Handmade Crafts',
    img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Gourmet Treats',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Subscription Boxes',
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80',
  },
];

export default function GiftIdeas() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 bg-gray-900 text-white rounded-2xl shadow-lg">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-400 mb-12 drop-shadow-xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
         Gift Ideas To Inspire You
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideas.map(({ id, title, img }) => (
          <motion.div
            key={id}
            className="relative overflow-hidden rounded-xl group cursor-pointer shadow-xl border border-gray-800 transition-all duration-300"
            role="button"
            tabIndex={0}
            onClick={() => alert(`You selected: ${title}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                alert(`You selected: ${title}`);
              }
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-64 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
            <h3 className="absolute bottom-4 left-4 text-xl sm:text-2xl font-bold text-yellow-400 drop-shadow-lg">
              {title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
