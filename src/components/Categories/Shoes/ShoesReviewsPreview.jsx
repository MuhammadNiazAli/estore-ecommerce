"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const shoesReviews = [
  {
    id: 1,
    user: "Liam Carter",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "These running sneakers are extremely comfortable and durable.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Mia Johnson",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Good grip and style, perfect for daily workouts.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Noah Brown",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Trail running shoes handled rough terrain like a champ.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Sophia Davis",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The leather loafers are stylish and comfortable for work.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Lightweight and breathable sneakers — love them for summer runs.",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Isabella Martinez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment: "Good shoes but felt a bit narrow for my feet.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Ethan Moore",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Great cushioning and support during long runs.",
    time: "4 weeks ago",
  },
  {
    id: 8,
    user: "Ava Thomas",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Perfect balance of style and comfort for casual wear.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "William Garcia",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Durable soles and great grip even on slippery surfaces.",
    time: "1 week ago",
  },
  {
    id: 10,
    user: "Emily Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Nice style but wish they came in more colors.",
    time: "3 days ago",
  },
  {
    id: 11,
    user: "Benjamin Lee",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The perfect fit and excellent arch support.",
    time: "2 weeks ago",
  },
  {
    id: 12,
    user: "Charlotte Walker",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Stylish boots with comfy padding, great for winter.",
    time: "5 days ago",
  },
  {
    id: 13,
    user: "Daniel Hall",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The shoes are okay but a bit heavy for running.",
    time: "3 weeks ago",
  },
  {
    id: 14,
    user: "Ella Young",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Love the casual slip-ons, so easy to wear all day long.",
    time: "1 week ago",
  },
  {
    id: 15,
    user: "Matthew King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Good quality sneakers, but a bit pricey.",
    time: "2 weeks ago",
  },
  {
    id: 16,
    user: "Sofia Wright",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Perfect hiking shoes, very supportive and sturdy.",
    time: "3 weeks ago",
  },
  {
    id: 17,
    user: "Jacob Scott",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Excellent sneakers for everyday use.",
    time: "5 days ago",
  },
  {
    id: 18,
    user: "Amelia Green",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Nice fit and breathable material, very happy with these.",
    time: "1 week ago",
  },
];

const ShoesReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(shoesReviews.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Shoes & Footwear
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoesReviews.slice(0, visibleCount).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-amber-700 flex flex-col"
            >
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

              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={starIdx}>
                    {starIdx < review.rating ? (
                      <FaStar className="text-amber-600" />
                    ) : (
                      <FaRegStar className="text-amber-900" />
                    )}
                  </span>
                ))}
              </div>

              <p className="text-amber-500 mb-4">{review.comment}</p>

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

        {visibleCount < shoesReviews.length && (
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

export default ShoesReviewsPreview;
