"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const healthReviews = [
  {
    id: 1,
    user: "Amelia Carter",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The multivitamins gave me a noticeable energy boost in just a week!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Benjamin Ross",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Protein powder mixes well and tastes great with almond milk.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Chloe Adams",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The yoga mat is super comfortable and non-slip, perfect for my practice.",
    time: "3 days ago",
  },
  {
    id: 4,
    user: "Daniel Smith",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Resistance bands are durable and help with my home workouts.",
    time: "6 days ago",
  },
  {
    id: 5,
    user: "Ella Johnson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The green tea detox really helped me feel lighter and refreshed.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Frank Garcia",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment: "Omega-3 capsules are good, but the bottle cap was hard to open.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Lee",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Love the essential oils! Calming and soothing after a stressful day.",
    time: "1 week ago",
  },
  {
    id: 8,
    user: "Henry Walker",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Herbal teas taste amazing and help me relax before bedtime.",
    time: "3 weeks ago",
  },
  {
    id: 9,
    user: "Isla Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The fitness tracker is accurate and motivates me daily.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jack Thompson",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Meal replacement shakes keep me full and taste decent.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Kylie Brown",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The blender bottle is perfect for my morning protein shakes.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Liam Anderson",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Electrolyte drinks taste great and keep me hydrated during workouts.",
    time: "3 days ago",
  },
  {
    id: 13,
    user: "Mia Parker",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The foam roller is helpful but a bit too firm for me.",
    time: "4 weeks ago",
  },
  {
    id: 14,
    user: "Noah Harris",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The smartwatch helps me track steps and calories perfectly.",
    time: "6 days ago",
  },
  {
    id: 15,
    user: "Olivia White",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The vitamin C serum improved my skin glow noticeably.",
    time: "2 weeks ago",
  },
  {
    id: 16,
    user: "Patrick Young",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment: "High-quality dumbbells, perfect for strength training at home.",
    time: "5 days ago",
  },
  {
    id: 17,
    user: "Quinn Moore",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The meditation app subscription changed my stress levels dramatically.",
    time: "1 week ago",
  },
  {
    id: 18,
    user: "Rachel Green",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The air purifier makes my room feel fresh and clean.",
    time: "3 weeks ago",
  },
];

const HealthReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(healthReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Health & Wellness
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-black flex flex-col"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full border-2 border-black object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-black text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-black" />
                    ) : (
                      <FaRegStar className="text-black" />
                    )}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-black mb-4">{review.comment}</p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 text-black hover:text-black transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-black hover:text-black transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < healthReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="px-6 py-3 bg-black text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-black transition"
            >
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HealthReviewsPreview;
