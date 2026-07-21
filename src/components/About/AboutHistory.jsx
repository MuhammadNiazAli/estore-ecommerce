'use client';

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { age: '20', event: 'Started my development journey with HTML & CSS, building basic static websites.' },
  { age: '21', event: 'Mastered JavaScript fundamentals, focusing on clean logic and modern ES6+ practices.' },
  { age: '22', event: 'Completed full React.js development, built dynamic SPAs with reusable components and state management.' },
  { age: '24', event: 'Expanded into backend development — Node.js, Express, MongoDB, and full RESTful APIs.' },
  { age: '25', event: 'Became a Full Stack Developer capable of building complete projects like this eCommerce platform with advanced UI, animations, and scalable backend systems.' },
  { age: 'Now', event: 'Focused on building premium 3D, premium platforms with cutting-edge UX, performance, and international reach.' },
];

const AboutHistory = () => {
  return (
    <section
      className="bg-white text-gray-800 py-20 px-6 flex justify-center my-[-80px]"
      aria-label="My development journey"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-12">
          My Journey
        </h2>

        <div className="relative border-l-4 border-black pl-6 sm:pl-10">
          {milestones.map(({ age, event }, index) => (
            <motion.div
              key={age}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="mb-12 relative"
            >
              {/* Age Badge */}
              <div className="absolute -left-[2.4rem] sm:-left-[2.8rem] top-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center text-gray-900 font-bold text-sm sm:text-base shadow-md ring-2 ring-gray-200 hover:scale-105 transition transform duration-300">
                  {age}
                </div>
              </div>

              {/* Event Description */}
              <div className="pl-2 sm:pl-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                {event}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
