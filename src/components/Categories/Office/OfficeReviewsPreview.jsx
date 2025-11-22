"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

// Sample 18 Office Reviews Data
const officeReviews = [
  {
    id: 1,
    user: "Amanda Clark",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The ergonomic chair is a game-changer for my back pain. Highly recommend!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Brian Thompson",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Standing desk converter is sturdy and perfect for my small office.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Cynthia Roberts",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "LED desk lamp has amazing brightness options and saves my eyes during late work.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Daniel Garcia",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Monitor stand improved my posture, love the cable management feature.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Emily Harris",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Memory foam cushion is comfy and portable. Great for long work hours.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Frank Lewis",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The desk organizer is neat but could use more compartments for better storage.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Morgan",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Wireless mouse is ergonomic and battery lasts forever!",
    time: "3 weeks ago",
  },
  {
    id: 8,
    user: "Henry Scott",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Noise cancelling headphones helped me focus better in noisy environments.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Isabel Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Compact printer is super fast and works flawlessly with my laptop.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jackie Roberts",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Chair is comfortable but took a bit to assemble.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Kevin Young",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Desk converter really changed how I work, love the adjustable height.",
    time: "3 weeks ago",
  },
  {
    id: 12,
    user: "Laura Adams",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment: "LED lamp is stylish and bright enough for my workspace.",
    time: "5 days ago",
  },
  {
    id: 13,
    user: "Mark Stevens",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Monitor stand is good but a bit pricier than I expected.",
    time: "2 weeks ago",
  },
  {
    id: 14,
    user: "Natalie Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Love the foam cushion, it really helped my posture.",
    time: "1 week ago",
  },
  {
    id: 15,
    user: "Oliver King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Desk organizer looks great and fits perfectly on my table.",
    time: "6 days ago",
  },
  {
    id: 16,
    user: "Paula Hernandez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Wireless mouse is responsive and easy to use.",
    time: "3 weeks ago",
  },
  {
    id: 17,
    user: "Quinn Matthews",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Noise cancelling headphones are a must-have for any office worker!",
    time: "4 days ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Compact printer is a great addition to my home office setup.",
    time: "1 month ago",
  },
];

const OfficeReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => setVisibleCount(officeReviews.length);

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Office Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-yellow-500 flex flex-col"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-yellow-400 text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-yellow-700" />
                    )}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-yellow-300 mb-4">{review.comment}</p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < officeReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfficeReviewsPreview;
