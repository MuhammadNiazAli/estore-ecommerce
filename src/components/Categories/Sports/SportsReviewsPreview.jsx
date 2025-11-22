"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

// ✅ 20 Reviews Data
const reviews = [
  {
    id: 1,
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    review: "Absolutely love this baseball bat! Perfect balance and premium quality.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review: "Great basketball! The grip and bounce are amazing.",
  },
  {
    id: 3,
    name: "Mike Anderson",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    review: "Football boots are next-level. Comfortable and great traction.",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 3,
    review: "Cricket bat is solid and premium quality. Feels great in hand.",
  },
  {
    id: 5,
    name: "Daniel Wilson",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 1,
    review: "Tennis racket is well-balanced and lightweight. Love it.",
  },
  {
    id: 6,
    name: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 2,
    review: "Amazing gear! I can already feel the difference in performance.",
  },
  {
    id: 7,
    name: "James Brown",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    rating: 3,
    review: "High-quality material and fast delivery.",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    review: "The basketball is perfect for both indoor and outdoor games.",
  },
  {
    id: 9,
    name: "William Taylor",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    review: "This baseball glove feels like a pro-level product.",
  },
  {
    id: 10,
    name: "Isabella White",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    review: "The racket strings have perfect tension, feels professional.",
  },
  {
    id: 11,
    name: "Henry Adams",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 3,
    review: "Amazing boots for football. Good grip and comfort.",
  },
  {
    id: 12,
    name: "Charlotte King",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    rating: 2,
    review: "Love the cricket bat. It has superb balance and weight.",
  },
  {
    id: 13,
    name: "Liam Scott",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    review: "Basketball shoes are top-notch, great for performance.",
  },
  {
    id: 14,
    name: "Amelia Evans",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    rating: 5,
    review: "Fantastic quality gear, definitely worth the price.",
  },
  {
    id: 15,
    name: "Noah Carter",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 3,
    review: "Best sports equipment I've purchased in a long time.",
  },
  {
    id: 16,
    name: "Mia Collins",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 4,
    review: "Really good value for the price. Looks premium.",
  },
  {
    id: 17,
    name: "Lucas Rivera",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 1,
    review: "Build quality is excellent. Highly recommend.",
  },
  {
    id: 18,
    name: "Harper Brooks",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    review: "Love the design and performance of these products.",
  },
  {
    id: 19,
    name: "Ethan Gray",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    rating: 2,
    review: "Very satisfied. Will buy again.",
  },
  {
    id: 20,
    name: "Ava Walker",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 3,
    review: "Perfect for training and matches. Highly durable.",
  },
  {
    id: 21,
    name: "Zoe Mitchell",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    review: "Unbelievable quality! These products feel like professional-grade gear. Worth every penny.",
}

];

const SportsReviewsPreview = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="bg-gray-900 py-14 text-yellow-400 my-[-50px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Customer Reviews</h2>
          <p className="text-gray-300 mt-2 text-lg">
            See what athletes say about our premium gear
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center min-h-[260px]"
              >
                {/* Avatar */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-yellow-400"
                />

                {/* Name */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  {review.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={i < review.rating ? "" : "opacity-30"}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            {showAll ? "Show Less" : "View All Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsReviewsPreview;
