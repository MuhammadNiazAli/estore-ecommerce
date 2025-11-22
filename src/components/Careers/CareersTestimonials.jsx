'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Olivia Martinez',
    role: 'Frontend Developer',
    photo: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    text: 'Joining this company was the best decision I made. The culture is supportive, and the work is meaningful.',
  },
  {
    id: 2,
    name: 'Liam Johnson',
    role: 'Product Manager',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    text: 'The hiring process was smooth and respectful. I felt valued from day one and continue to grow here.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'UX Designer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    text: 'I love the collaboration and creativity. Every day is a new challenge and opportunity to learn.',
  },
];

const CareersTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="bg-gray-900 w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          What Our Team Says
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[current].photo}
                  alt={testimonials[current].name}
                  className="h-20 w-20 rounded-full mb-4 object-cover border-4 border-yellow-400"
                  loading="lazy"
                />
                <p className="text-yellow-200 italic mb-4 max-w-lg">
                  &quot;{testimonials[current].text}&quot;
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-yellow-400 font-semibold text-lg">
                  {testimonials[current].name}
                </h3>
                <p className="text-yellow-200 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Animated Dots Only */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  width: i === current ? 20 : 10,
                  height: 10,
                  borderRadius: 999,
                  backgroundColor: i === current ? '#facc15' : '#facc15',
                  opacity: i === current ? 1 : 0.3,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTestimonials;
