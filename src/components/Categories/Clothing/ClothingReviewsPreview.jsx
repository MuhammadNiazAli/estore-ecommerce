"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const clothingReviews = [
  {
    id: 1,
    user: "Anna Smith",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The denim jacket fits perfectly and looks amazing with any outfit.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Brian Johnson",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Comfortable t-shirts with vibrant colors. Great quality for the price.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Cynthia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The wool scarf is so soft and warm, perfect for chilly days.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "David Park",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "These sneakers are stylish and super comfortable for daily wear.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "Emma Davis",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Love the floral dress, fits true to size and fabric feels premium.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Frank Miller",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The hoodie is okay but a bit thinner than I expected.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Grace Wilson",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Comfortable jeans with good stretch and great color retention.",
    time: "3 weeks ago",
  },
  {
    id: 8,
    user: "Harry Thompson",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The leather belt is durable and looks great with formal wear.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Isabel Martinez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Perfect winter coat. Warm and stylish without being bulky.",
    time: "5 days ago",
  },
  {
    id: 10,
    user: "Jackie Roberts",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Great quality socks, very comfortable for everyday use.",
    time: "1 month ago",
  },
  {
    id: 11,
    user: "Kevin Young",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The cotton shirt breathes well and fits perfectly on me.",
    time: "2 weeks ago",
  },
  {
    id: 12,
    user: "Laura Adams",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Nice quality blazer, looks professional and well tailored.",
    time: "6 days ago",
  },
  {
    id: 13,
    user: "Mark Stevens",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The leggings are comfy but slightly see-through in bright light.",
    time: "3 weeks ago",
  },
  {
    id: 14,
    user: "Natalie Moore",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Great quality and design on the winter gloves, very warm!",
    time: "4 days ago",
  },
  {
    id: 15,
    user: "Oliver King",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The hoodie fits well and the fabric is soft to the touch.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Paula Hernandez",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Stylish summer hat, perfect for sunny days and beach trips.",
    time: "2 weeks ago",
  },
  {
    id: 17,
    user: "Quinn Matthews",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Lightweight rain jacket kept me dry and comfortable during the storms.",
    time: "5 days ago",
  },
  {
    id: 18,
    user: "Rachel Diaz",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Nice fit on the casual shirt, great for everyday wear.",
    time: "3 weeks ago",
  },
];

const ClothingReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(clothingReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Clothing & Apparel
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clothingReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < clothingReviews.length && (
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

export default ClothingReviewsPreview;
