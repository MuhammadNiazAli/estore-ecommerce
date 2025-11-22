"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    user: "Alice Green",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The wireless charger works flawlessly and charges my phone quickly.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Benjamin Lee",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The silicone phone case fits perfectly and has a nice grip.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Carla Jones",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Bluetooth earbuds have great sound and battery life.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The charger sometimes heats up but overall very reliable.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Phone case looks stylish and protects well.",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Frank Turner",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Earbuds are decent but sometimes lose connection.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Lee",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Love the fast charging feature of this wireless charger!",
    time: "1 week ago",
  },
  {
    id: 8,
    user: "Henry Scott",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The phone case is soft but durable, great value.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Isabel Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Bluetooth earbuds fit comfortably and sound clear.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jackie Roberts",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Wireless charger sometimes slips but charges fast.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Kevin Young",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Case protects well against drops, very happy.",
    time: "3 weeks ago",
  },
  {
    id: 12,
    user: "Laura Adams",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Earbuds have nice bass and are easy to connect.",
    time: "5 days ago",
  },
  {
    id: 13,
    user: "Mark Stevens",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Charger stopped working after a month but customer service helped.",
    time: "2 weeks ago",
  },
  {
    id: 14,
    user: "Natalie Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The phone case color stayed vibrant for months.",
    time: "1 week ago",
  },
  {
    id: 15,
    user: "Oliver King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Bluetooth earbuds are great but a bit pricey.",
    time: "6 days ago",
  },
  {
    id: 16,
    user: "Paula Hernandez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Charger works with all my devices, very convenient.",
    time: "3 weeks ago",
  },
  {
    id: 17,
    user: "Quinn Matthews",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Phone case is slim and stylish, highly recommend!",
    time: "4 days ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Earbuds have decent mic quality for calls.",
    time: "1 month ago",
  },
];

const PhoneAccessoriesReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(reviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Phone Accessories
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < reviews.length && (
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

export default PhoneAccessoriesReviewsPreview;
