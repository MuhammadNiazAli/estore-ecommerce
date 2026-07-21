"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const homeDecorReviews = [
  {
    id: 1,
    user: "Anna Brooks",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The ceramic vase set adds such elegance to my living room. Truly hand painted perfection!",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Mark Benson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Wooden coffee table is sturdy and looks great with my modern setup. Assembly was easy.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Lily Chen",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Abstract wall art brings vibrant color and style to my space. Ready to hang was perfect.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Samuel Ortiz",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Throw blanket is cozy and warm but shrank a bit after washing. Still love it though!",
    time: "1 month ago",
  },
  {
    id: 5,
    user: "Nina Patel",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Modern floor lamp's adjustable brightness is perfect for my reading nook.",
    time: "4 days ago",
  },
  {
    id: 6,
    user: "Owen Harris",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Decorative cushions have great fabric quality and add a pop of color to my couch.",
    time: "1 week ago",
  },
  {
    id: 7,
    user: "Emily Reed",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The handmade rug feels plush and ties my whole room together beautifully.",
    time: "3 days ago",
  },
  {
    id: 8,
    user: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Elegant wall mirrors are a great size and add more light to my room.",
    time: "5 days ago",
  },
  {
    id: 9,
    user: "Sophia Evans",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Ceramic planter set is sturdy and stylish. Perfect for my indoor plants!",
    time: "2 weeks ago",
  },
  {
    id: 10,
    user: "David King",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Stylish side table with clean lines — really enhances my living room.",
    time: "1 week ago",
  },
  {
    id: 11,
    user: "Mia Campbell",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Wall clock looks great but the ticking sound is a little loud for my bedroom.",
    time: "2 days ago",
  },
  {
    id: 12,
    user: "Ethan Roberts",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Table lamp has a soft glow that’s perfect for relaxing evenings.",
    time: "4 days ago",
  },
  {
    id: 13,
    user: "Olivia Green",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Decorative vases look exactly like pictures and are beautifully crafted.",
    time: "1 week ago",
  },
  {
    id: 14,
    user: "Michael Scott",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Throw pillows are soft and the colors really brighten up my sofa.",
    time: "3 days ago",
  },
  {
    id: 15,
    user: "Jessica Moore",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Floor rugs have great texture and feel very durable underfoot.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Daniel Foster",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Modern art prints add a perfect finishing touch to my walls.",
    time: "2 days ago",
  },
  {
    id: 17,
    user: "Sophia Bell",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Wall shelves are practical and look great for displaying my books and decor.",
    time: "4 days ago",
  },
  {
    id: 18,
    user: "Lucas Martinez",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Accent lighting kit totally transformed my living room vibe. Highly recommend!",
    time: "1 week ago",
  },
];

const HomeDecorReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => setVisibleCount(homeDecorReviews.length);

  return (
    <section className="bg-white text-amber-600 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Home Decor Customer Reviews
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeDecorReviews.slice(0, visibleCount).map((review, index) => (
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
                  <p className="text-gray-600 text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-amber-700" />
                    ) : (
                      <FaRegStar className="text-gray-500" />
                    )}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4">{review.comment}</p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < homeDecorReviews.length && (
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

export default HomeDecorReviewsPreview;
