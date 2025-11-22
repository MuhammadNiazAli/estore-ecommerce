'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    name: 'Amina Yusuf',
    location: 'Nairobi, Kenya',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    story:
      'Thanks to the sustainable programs, we were able to set up a local recycling hub that employs 20+ youth from our village.',
  },
  {
    id: 2,
    name: 'Carlos Mejía',
    location: 'Medellín, Colombia',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'The company’s education fund helped my daughter finish high school. Now, she’s pursuing engineering with pride.',
  },
  {
    id: 3,
    name: 'Mei Lin',
    location: 'Shanghai, China',
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80',
    story:
      'We launched a solar-powered workspace with support from the initiative — reducing emissions and creating local jobs.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const ResponsibilityImpactStories = () => {
  return (
    <section
      aria-label="Responsibility Impact Stories"
      className="w-full bg-gray-900 flex justify-center px-4 py-12 sm:py-16 md:py-24"
    >
      <div className="w-full max-w-[1000px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-12 select-none px-2 sm:px-0"
        >
          Real Impact. Real Stories.
        </motion.h2>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              tabIndex={0}
              aria-label={`Impact story by ${story.name} from ${story.location}`}
              className="bg-gray-800/70 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl focus:shadow-xl transition-shadow duration-300 outline-none focus:outline-yellow-400 focus:outline-2 focus:outline-offset-2 cursor-pointer"
              role="group"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click();
              }}
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-yellow-400 font-semibold text-base sm:text-lg mb-1">
                  {story.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 italic mb-3">{story.location}</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{story.story}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityImpactStories;
