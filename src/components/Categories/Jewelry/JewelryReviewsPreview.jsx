"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const jewelryReviews = [
  {
    id: 1,
    user: "Sophia Turner",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The diamond earrings sparkle beautifully and are very comfortable.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Liam Carter",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Great quality gold chain, exactly as described.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Emma Johnson",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Love my new pearl necklace, it goes well with every outfit!",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Noah Davis",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment: "The silver bracelet is elegant and very durable.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Olivia Martin",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Beautifully crafted ring with a comfortable fit.",
    time: "1 week ago",
  },
  {
    id: 6,
    user: "Ethan Wilson",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The watch looks great but the strap could be better quality.",
    time: "3 weeks ago",
  },
  {
    id: 7,
    user: "Isabella Thompson",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Lovely gold hoop earrings, perfect size and shine.",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "Mason Anderson",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Nice pendant necklace, goes well with casual and formal wear.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Mia White",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The sapphire ring is stunning and the size fits perfectly.",
    time: "6 days ago",
  },
  {
    id: 10,
    user: "James Harris",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Good quality cufflinks that add a classy touch to my shirts.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Charlotte Clark",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Lovely delicate anklet, perfect for summer wear.",
    time: "2 weeks ago",
  },
  {
    id: 12,
    user: "Benjamin Lewis",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Sturdy and elegant watch with great craftsmanship.",
    time: "6 days ago",
  },
  {
    id: 13,
    user: "Amelia Walker",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment: "The charm bracelet is nice but the clasp feels a bit weak.",
    time: "3 weeks ago",
  },
  {
    id: 14,
    user: "Elijah Hall",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The wedding band is perfect, exactly what I wanted.",
    time: "4 days ago",
  },
  {
    id: 15,
    user: "Evelyn Young",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Beautiful necklace, very good quality for the price.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Alexander King",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Elegant pearl earrings, received many compliments.",
    time: "2 weeks ago",
  },
  {
    id: 17,
    user: "Ella Scott",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The gold ring fits perfectly and looks very classy.",
    time: "5 days ago",
  },
  {
    id: 18,
    user: "Michael Green",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Great quality necklace, very durable and stylish.",
    time: "3 weeks ago",
  },
];

const JewelryReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(jewelryReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Jewelry & Accessories
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jewelryReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < jewelryReviews.length && (
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

export default JewelryReviewsPreview;
