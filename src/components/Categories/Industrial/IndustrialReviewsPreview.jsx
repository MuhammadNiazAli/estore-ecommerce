"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const industrialReviews = [
  {
    id: 1,
    user: "Jack Reynolds",
    avatar:
      "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    comment: "The safety helmet is very sturdy and comfortable for long shifts.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Anna Brooks",
    avatar:
      "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    comment: "Quality welding gloves that protect well but still allow good grip.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Michael Carter",
    avatar:
      "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
    comment: "The industrial boots are durable and keep my feet dry all day.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Sophia Lewis",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Protective eyewear is lightweight and fits perfectly.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "David Foster",
    avatar:
      "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 3,
    comment: "Ear protection is good but can feel a bit tight after hours.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Emily Clark",
    avatar:
      "https://randomuser.me/api/portraits/women/66.jpg",
    rating: 5,
    comment: "The high-vis vest is very bright and breathable for outdoor work.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "James Miller",
    avatar:
      "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    comment: "Tool belt is very handy with plenty of compartments.",
    time: "3 days ago",
  },
  {
    id: 8,
    user: "Olivia Scott",
    avatar:
      "https://randomuser.me/api/portraits/women/88.jpg",
    rating: 5,
    comment: "The industrial flashlight is bright and battery lasts long.",
    time: "5 days ago",
  },
  {
    id: 9,
    user: "Ethan Parker",
    avatar:
      "https://randomuser.me/api/portraits/men/99.jpg",
    rating: 4,
    comment: "Heavy-duty work gloves provide excellent grip and protection.",
    time: "1 week ago",
  },
  {
    id: 10,
    user: "Isabella Nguyen",
    avatar:
      "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
    comment: "The respirator mask fits well and filters air effectively.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "William Hughes",
    avatar:
      "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    comment: "Welding helmet is durable and provides excellent visibility.",
    time: "4 days ago",
  },
  {
    id: 12,
    user: "Mia Robinson",
    avatar:
      "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 3,
    comment: "Safety harness is secure but a bit hard to adjust.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Alexander Lopez",
    avatar:
      "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 4,
    comment: "Work jacket is warm and breathable, great for cold weather.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "Ella Price",
    avatar:
      "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 5,
    comment: "Knee pads provide excellent cushioning and fit snugly.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Benjamin Hall",
    avatar:
      "https://randomuser.me/api/portraits/men/16.jpg",
    rating: 4,
    comment: "Work boots are comfortable and provide great ankle support.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Chloe Adams",
    avatar:
      "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    comment: "Industrial gloves resist cuts well and last long.",
    time: "3 weeks ago",
  },
  {
    id: 17,
    user: "Matthew Green",
    avatar:
      "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5,
    comment: "Safety goggles fog up less than others, very clear vision.",
    time: "5 days ago",
  },
  {
    id: 18,
    user: "Zoe Baker",
    avatar:
      "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 4,
    comment: "Work gloves fit well but take some time to break in.",
    time: "2 weeks ago",
  },
];

const IndustrialReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(industrialReviews.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Industrial Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrialReviews.slice(0, visibleCount).map((review, index) => (
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
                  <p className="text-amber-600 text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-amber-600" />
                    ) : (
                      <FaRegStar className="text-amber-900" />
                    )}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-amber-500 mb-4">{review.comment}</p>

              {/* Actions */}
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

        {/* View All Button */}
        {visibleCount < industrialReviews.length && (
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

export default IndustrialReviewsPreview;
