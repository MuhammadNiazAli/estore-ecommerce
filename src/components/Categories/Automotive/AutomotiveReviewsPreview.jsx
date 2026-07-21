"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const automotiveReviews = [
  {
    id: 1,
    user: "Alex Carter",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The turbocharged engine provides an exhilarating drive with great fuel efficiency.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Bella Reed",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Smooth ride and excellent handling on both city roads and highways.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Carlos Martinez",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Luxury interior with advanced infotainment system — truly a premium feel.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Diana Nguyen",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Fuel economy is impressive for a vehicle with this power and size.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "Ethan Brooks",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Reliable brakes and great safety features, I feel confident driving every day.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Fiona Clark",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The manual transmission takes some getting used to, but it’s rewarding once mastered.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "George Wilson",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Smooth acceleration and responsive steering make it a joy on winding roads.",
    time: "3 weeks ago",
  },
  {
    id: 8,
    user: "Hannah Lee",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Spacious cabin and comfortable seats, great for long road trips.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Ian Murphy",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Excellent sound system and tech features — my passengers love it too!",
    time: "5 days ago",
  },
  {
    id: 10,
    user: "Jessica Turner",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Good value for the price, especially considering the advanced safety packages included.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Kevin Scott",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The all-wheel drive feature keeps me confident in bad weather conditions.",
    time: "2 weeks ago",
  },
  {
    id: 12,
    user: "Lena Foster",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Handling is sporty yet comfortable, perfect for city and highway driving.",
    time: "6 days ago",
  },
  {
    id: 13,
    user: "Mark Evans",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The infotainment system could be more intuitive but overall good tech features.",
    time: "3 weeks ago",
  },
  {
    id: 14,
    user: "Nina Patel",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Superb craftsmanship and attention to detail on the interior finishes.",
    time: "4 days ago",
  },
  {
    id: 15,
    user: "Oscar Hughes",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Good suspension for a smooth ride on rough roads.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Paula Johnson",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Climate control works great and keeps the cabin comfortable in all seasons.",
    time: "2 weeks ago",
  },
  {
    id: 17,
    user: "Quinn Miller",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Stylish exterior design that turns heads everywhere I go.",
    time: "5 days ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Good visibility from the driver's seat, making parking and city driving easy.",
    time: "3 weeks ago",
  },
];

const AutomotiveReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(automotiveReviews.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Automotive Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automotiveReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-amber-700 flex flex-col"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full border-2 border-amber-700 object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-amber-600 text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-amber-600" />
                    ) : (
                      <FaRegStar className="text-amber-900" />
                    )}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-amber-500 mb-4">{review.comment}</p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < automotiveReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="px-6 py-3 bg-amber-700 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition"
            >
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutomotiveReviewsPreview;
