"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Sample Camera Reviews Data
const reviewsData = [
  {
    id: 1,
    name: "John Carter",
    rating: 5,
    review:
      "The Canon EOS R5 is a beast! The 8K video and IBIS blew me away. Perfect for professional shoots.",
    avatar:
      "https://randomuser.me/api/portraits/men/45.jpg",
    camera: "Canon EOS R5",
    date: "July 20, 2025",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    rating: 4,
    review:
      "Sony A7 IV delivers incredible image quality and reliable autofocus. A perfect balance of price and performance.",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    camera: "Sony A7 IV",
    date: "July 18, 2025",
  },
  {
    id: 3,
    name: "David Kim",
    rating: 5,
    review:
      "Nikon Z6 II is an absolute workhorse! The low-light performance is stunning for my wedding shoots.",
    avatar:
      "https://randomuser.me/api/portraits/men/23.jpg",
    camera: "Nikon Z6 II",
    date: "July 15, 2025",
  },
];

const CamerasReviewsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-4 my-[-40px]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-amber-600">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-8">
          Real reviews from photographers who love our cameras.
        </p>

        {/* Review Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto relative"
        >
          <FaQuoteLeft className="text-amber-600 text-3xl absolute top-4 left-4 opacity-30" />

          <img
            src={reviewsData[currentIndex].avatar}
            alt={reviewsData[currentIndex].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-amber-600 object-cover"
          />

          <h3 className="text-xl font-bold">{reviewsData[currentIndex].name}</h3>
          <p className="text-sm text-gray-600 mb-4">{reviewsData[currentIndex].date}</p>

          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < reviewsData[currentIndex].rating
                    ? "text-amber-600"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
            "{reviewsData[currentIndex].review}"
          </p>

          <p className="text-sm text-amber-600 font-semibold">
            Reviewed for: {reviewsData[currentIndex].camera}
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevReview}
            className="bg-white px-4 py-2 rounded-full hover:bg-gray-500 transition"
          >
            ◀
          </button>
          <button
            onClick={nextReview}
            className="bg-white px-4 py-2 rounded-full hover:bg-gray-500 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default CamerasReviewsPreview;
