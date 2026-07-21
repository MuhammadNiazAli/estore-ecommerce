"use client";

import React from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Dummy Review Data
const reviews = [
  {
    id: 1,
    user: "Emily Johnson",
    rating: 5,
    comment: "Absolutely love this toy! Great quality and safe for kids.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
    date: "2 days ago",
  },
  {
    id: 2,
    user: "Michael Smith",
    rating: 4,
    comment: "Good product, but could be a little cheaper. My son enjoys it!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    date: "1 week ago",
  },
  {
    id: 3,
    user: "Sophia Davis",
    rating: 5,
    comment: "Fantastic toy! Keeps my kids engaged for hours.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
    date: "3 days ago",
  },
];

const ToysReviewsPreview = () => {
  return (
    <section className="bg-white text-gray-900 py-10 px-4 mt-10 rounded-xl">
      <div className="max-w-[1200px] mx-auto">
        {/* ✅ Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-600">
            Customer Reviews
          </h2>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="bg-amber-700 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition text-sm">
              Write a Review
            </button>
            <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-500 transition text-sm">
              See All Reviews
            </button>
          </div>
        </div>

        {/* ✅ Review Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Average Rating */}
          <motion.div
            className="bg-white p-6 rounded-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-6xl font-bold text-amber-600">4.7</p>
            <div className="flex text-amber-600 mt-2 text-xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 mt-2">Based on 256 Reviews</p>
          </motion.div>

          {/* Rating Breakdown */}
          <motion.div
            className="bg-white p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <div
                key={star}
                className="flex items-center gap-3 mb-2 text-sm text-gray-700"
              >
                <span className="w-6">{star}★</span>
                <div className="flex-1 bg-white h-3 rounded">
                  <div
                    className="bg-amber-600 h-3 rounded"
                    style={{ width: `${star * 15}%` }}
                  ></div>
                </div>
                <span>{star * 10}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Latest Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-3 gap-3">
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-4xl text-gray-500" />
                )}
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-600 text-sm">{review.date}</p>
                </div>
              </div>
              <div className="flex text-amber-600 mb-2">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToysReviewsPreview;
