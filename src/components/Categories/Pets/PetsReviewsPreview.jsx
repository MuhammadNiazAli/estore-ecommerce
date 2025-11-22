"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const petsReviews = [
  {
    id: 1,
    user: "Anna Peterson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "My dog absolutely loves the new chew toys. Durable and safe!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Brian Scott",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The cat litter is highly absorbent and controls odor very well.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Cynthia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Excellent quality pet bed, very comfy and easy to clean.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The dog leash is sturdy and the handle is comfortable for long walks.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "Elena Rivera",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Healthy pet food that my cat refuses to leave without!",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Frank Johnson",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The grooming brush is effective but could be gentler on sensitive skin.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Hall",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "My parrot loves the new cage setup — very spacious and secure.",
    time: "3 weeks ago",
  },
  {
    id: 8,
    user: "Hank Miller",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Fish tank accessories are easy to install and look great.",
    time: "1 week ago",
  },
  {
    id: 9,
    user: "Isabelle Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Pet vitamins have improved my dog’s coat and energy levels.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jack Evans",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The cat scratching post is sturdy and keeps furniture safe.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Kelly Green",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Pet travel carrier is spacious and comfortable for long trips.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Liam Cooper",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Dog food bowls are non-slip and easy to clean.",
    time: "3 days ago",
  },
  {
    id: 13,
    user: "Mia Scott",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Pet training pads work but absorbency could be better.",
    time: "4 weeks ago",
  },
  {
    id: 14,
    user: "Nathan Parker",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The automatic pet feeder is a game changer for my busy schedule.",
    time: "6 days ago",
  },
  {
    id: 15,
    user: "Olivia Bennett",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Pet collars are stylish and durable, my dog loves them.",
    time: "2 weeks ago",
  },
  {
    id: 16,
    user: "Paul Harris",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "My cat’s new litter box is easy to clean and odor-free.",
    time: "5 days ago",
  },
  {
    id: 17,
    user: "Quincy Adams",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Durable leash with comfortable grip, perfect for daily walks.",
    time: "1 week ago",
  },
  {
    id: 18,
    user: "Rebecca Stone",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The aquarium filter runs quietly and keeps water crystal clear.",
    time: "3 weeks ago",
  },
];

const PetsReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(petsReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Pets & Accessories
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {petsReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < petsReviews.length && (
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

export default PetsReviewsPreview;
