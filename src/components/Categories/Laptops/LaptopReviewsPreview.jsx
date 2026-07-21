'use client';
import React from 'react';
import { CheckBadgeIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const sampleReviews = [
  {
    id: 1,
    username: 'Sarah J.',
    rating: 5,
    comment:
      'This laptop exceeded my expectations! Fast, lightweight, and the battery lasts all day.',
    date: 'June 12, 2025',
  },
  {
    id: 2,
    username: 'Michael B.',
    rating: 4,
    comment: 'Great performance and build quality. The display is stunning.',
    date: 'July 3, 2025',
  },
  {
    id: 3,
    username: 'Emily R.',
    rating: 4.5,
    comment: 'Perfect for my design work. A bit pricey but worth it.',
    date: 'July 8, 2025',
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={`full-${i}`}
        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
      </svg>
    );
  }

  if (halfStar) {
    stars.push(
      <svg
        key="half"
        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half-grad)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z"
        />
      </svg>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg
        key={`empty-${i}`}
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
      </svg>
    );
  }

  return stars;
};

const LaptopReviewsPreview = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700 my-[-50px] mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleReviews.map(({ id, username, rating, comment, date }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            className="bg-white/70 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
                <div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base font-medium text-gray-800">
                    <span>{username}</span>
                    <CheckBadgeIcon
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                      title="Verified Buyer"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">{date}</span>
                </div>
              </div>
              <div className="flex">{renderStars(rating)}</div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LaptopReviewsPreview;
