"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const gardenReviews = [
  {
    id: 1,
    user: "Alice Green",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The rose bushes bloomed beautifully and added vibrant colors to my garden.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Bob Williams",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The vegetable seeds sprouted quickly and produced a healthy yield.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Carla Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Love the ergonomic gardening tools; they made planting so much easier.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Daniel Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The compost bin is efficient and smells much better than expected.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Emma Johnson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The garden hose is durable and has great water pressure control.",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Frank Miller",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The pruning shears are sharp but a bit uncomfortable for long use.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Wilson",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Organic fertilizers really boosted my plants’ health and growth.",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Henry Thompson",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The bird feeder attracted many beautiful birds to my backyard.",
    time: "1 week ago",
  },
  {
    id: 9,
    user: "Isabel Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Perfect garden gloves – sturdy and comfortable for extended wear.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jackie Roberts",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The solar garden lights add a lovely ambiance in the evenings.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Kevin Young",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Raised garden beds made planting so much easier and more organized.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Laura Adams",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The garden sprinkler system is easy to install and waters evenly.",
    time: "3 days ago",
  },
  {
    id: 13,
    user: "Mark Stevens",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The seed starter kit was helpful but the soil pods dried out quickly.",
    time: "4 weeks ago",
  },
  {
    id: 14,
    user: "Natalie Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The garden bench is very sturdy and looks beautiful in my yard.",
    time: "6 days ago",
  },
  {
    id: 15,
    user: "Oliver King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The greenhouse kit was easy to assemble and maintains temperature well.",
    time: "2 weeks ago",
  },
  {
    id: 16,
    user: "Paula Hernandez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The watering can is light and has a perfect flow control.",
    time: "5 days ago",
  },
  {
    id: 17,
    user: "Quinn Matthews",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Mulching materials improved my soil quality significantly.",
    time: "1 week ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The garden rake is lightweight and easy to handle.",
    time: "3 weeks ago",
  },
];

const GardenReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(gardenReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Garden & Outdoor
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < gardenReviews.length && (
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

export default GardenReviewsPreview;
