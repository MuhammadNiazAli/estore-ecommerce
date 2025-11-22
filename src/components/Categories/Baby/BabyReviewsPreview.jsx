"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const babyReviews = [
  {
    id: 1,
    user: "Sophie Turner",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "This baby stroller is so smooth and easy to push around!",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Liam Johnson",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Great baby monitor with clear sound and reliable range.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Emma Williams",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The organic baby lotion keeps my baby’s skin super soft.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Noah Brown",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The baby car seat fits perfectly and feels very secure.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "Olivia Jones",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Cute and comfy baby clothes, washes well without fading.",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Ethan Garcia",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The baby bottle nipples are good but sometimes leak slightly.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Isabella Martinez",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Love the colorful baby toys, very engaging and safe materials.",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Mason Davis",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The baby crib is sturdy and easy to assemble.",
    time: "5 days ago",
  },
  {
    id: 9,
    user: "Ava Wilson",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Soft baby blankets that keep my little one warm and cozy.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Lucas Moore",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The diaper bag has plenty of compartments and looks stylish.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Mia Taylor",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Gentle baby shampoo that doesn’t irritate sensitive skin.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "James Anderson",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The baby swing soothes my baby to sleep every time.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Ella Thomas",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The bibs are cute but some stains don’t come out easily.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "Benjamin Jackson",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Excellent pacifiers that my baby loves and uses daily.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Charlotte White",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The baby high chair is easy to clean and very comfortable.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Henry Harris",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The baby stroller rain cover is a lifesaver during rainy days.",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Amelia Martin",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Soft plush toys that are perfect for baby’s sensory play.",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Logan Thompson",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The baby crib mattress is firm and provides great support.",
    time: "2 weeks ago",
  },
];

const BabyReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(babyReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Baby Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {babyReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < babyReviews.length && (
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

export default BabyReviewsPreview;
