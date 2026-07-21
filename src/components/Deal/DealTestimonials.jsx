'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    review:
      'Amazing deals and fast delivery! I saved so much on my last purchase. Highly recommend!',
  },
  {
    id: 2,
    name: 'Mark D.',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 4,
    review:
      'Great customer support and quality products. The bundle offers are a great value.',
  },
  {
    id: 3,
    name: 'Emily R.',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    review:
      'I love the flash deals. Always something exciting and affordable. Will shop here again!',
  },
];

const Star = ({ filled }) => (
  <svg
    aria-hidden="true"
    className={`w-5 h-5 ${filled ? 'text-black' : 'text-gray-600'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.285 3.956c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.196-1.54-1.118l1.285-3.956a1 1 0 00-.364-1.118L2.034 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
  </svg>
);

const DealTestimonials = () => {
  return (
    <section className="w-full px-4 py-16 bg-white my-[-44px] mb-[-10px] text-gray-900 flex justify-center">
      <div className="max-w-[900px] w-full space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">  
          {testimonials.map(({ id, name, photo, rating, review }) => (
            <motion.div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: id * 0.2 }}
            >
          
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={photo}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-black"
                />
                <div>
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} filled={star <= rating} />
                    ))}
                  </div>
                </div>
              </div>

           
              <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealTestimonials;
