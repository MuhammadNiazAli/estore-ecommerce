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
      "The Monstera is stunning! Its large leaves bring so much life to my living room.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Benjamin Lee",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Succulent mix pot looks great and is very low maintenance. Perfect for busy people.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Carla Jones",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Orchid in ceramic pot bloomed beautifully and brightened up my office space.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The Aloe Vera plant is healthy and easy to care for. Great addition to my windowsill.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Lavender pot smells amazing and attracts bees to my garden. Very happy with it!",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Frank Turner",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Bamboo palm looks nice but needs more light than I expected. Still a good buy.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Lee",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Snake plant is super tough and perfect for my low-light apartment.",
    time: "1 week ago",
  },
  {
    id: 8,
    user: "Henry Scott",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Herb garden kit was easy to set up and my herbs are growing nicely now.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Isabel Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "I love my Orchid! It’s elegant and adds a touch of class to my dining table.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "Jackie Roberts",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Succulents are thriving and very easy to take care of. Highly recommend for beginners.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Kevin Young",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Monstera’s leaves are so lush and big. It’s the star of my indoor jungle.",
    time: "3 weeks ago",
  },
  {
    id: 12,
    user: "Laura Adams",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Lavender has a lovely fragrance and looks beautiful on my balcony.",
    time: "5 days ago",
  },
  {
    id: 13,
    user: "Mark Stevens",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Herb garden kit was good but some seeds took longer to sprout than expected.",
    time: "2 weeks ago",
  },
  {
    id: 14,
    user: "Natalie Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Snake plant is almost indestructible, love it for my office space!",
    time: "1 week ago",
  },
  {
    id: 15,
    user: "Oliver King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Aloe Vera plant has been growing well and helps with minor skin cuts.",
    time: "6 days ago",
  },
  {
    id: 16,
    user: "Paula Hernandez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The Orchid was a great gift, everyone loves how elegant it looks.",
    time: "3 weeks ago",
  },
  {
    id: 17,
    user: "Quinn Matthews",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Succulents brightened up my desk and require minimal care. Highly recommend!",
    time: "4 days ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Bamboo palm is beautiful but needs a bit more attention than I thought.",
    time: "1 month ago",
  },
];

const BeautyReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(reviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Plants & Nature
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < reviews.length && (
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

export default BeautyReviewsPreview;
