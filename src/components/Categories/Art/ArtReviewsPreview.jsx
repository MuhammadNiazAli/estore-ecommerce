"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const artReviews = [
  {
    id: 1,
    user: "Alice Monroe",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment: "The canvas texture is amazing, brings the colors to life!",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Jacob Lee",
    avatar:
      "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    comment: "Stunning sculpture, the metalwork is top-notch.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Emily Chen",
    avatar:
      "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    comment: "Print quality is crisp and colors are vibrant.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "David Kim",
    avatar:
      "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
    comment: "Loved the delivery packaging, everything arrived safe.",
    time: "4 days ago",
  },
  {
    id: 5,
    user: "Sophia Patel",
    avatar:
      "https://randomuser.me/api/portraits/women/54.jpg",
    rating: 5,
    comment: "Beautiful art print, looks perfect in my living room.",
    time: "3 weeks ago",
  },
  {
    id: 6,
    user: "Michael Brown",
    avatar:
      "https://randomuser.me/api/portraits/men/16.jpg",
    rating: 3,
    comment: "Sculpture base could be a bit sturdier, but overall nice.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Isabella Garcia",
    avatar:
      "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
    comment: "Love how the abstract painting adds character to my office.",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Ethan Wilson",
    avatar:
      "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 4,
    comment: "Excellent customer support, helped me choose the right size.",
    time: "5 days ago",
  },
  {
    id: 9,
    user: "Mia Robinson",
    avatar:
      "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    comment: "The colors in the print never fade, even after months on the wall.",
    time: "4 days ago",
  },
  {
    id: 10,
    user: "James Smith",
    avatar:
      "https://randomuser.me/api/portraits/men/26.jpg",
    rating: 4,
    comment: "The wooden frame adds a rustic charm, very pleased.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Olivia Davis",
    avatar:
      "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 5,
    comment: "Each brush stroke is visible, really authentic artwork.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Benjamin Martinez",
    avatar:
      "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 4,
    comment: "Sculpture was bigger than expected but fits perfectly now.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Charlotte Evans",
    avatar:
      "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 3,
    comment: "Colors were slightly different than on website but still beautiful.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "William Johnson",
    avatar:
      "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    comment: "Very satisfied with my purchase, quality is superb.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Amelia Moore",
    avatar:
      "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 4,
    comment: "Perfect gift for my art-loving friend, she loved it!",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Henry Taylor",
    avatar:
      "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 5,
    comment: "Packaging was excellent, no damage during shipping.",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Grace Harris",
    avatar:
      "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
    comment: "The sculpture is a true masterpiece, very happy with it.",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Logan White",
    avatar:
      "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    comment: "Print looks great, very detailed and sharp.",
    time: "2 weeks ago",
  },
];

const ArtReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(artReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Art Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < artReviews.length && (
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

export default ArtReviewsPreview;
