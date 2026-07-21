"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const softwareReviews = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment: "ProCode IDE boosts my productivity like never before!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Michael Smith",
    avatar:
      "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    comment: "SecureShield Antivirus is reliable and light on system resources.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Jessica Lee",
    avatar:
      "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 5,
    comment: "CloudSync Pro saved me from losing critical files multiple times.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "David Miller",
    avatar:
      "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 3,
    comment: "TaskMaster is good but needs better calendar integration.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Emma Wilson",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "PhotoFixer’s filters and retouch tools are quite impressive.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "James Brown",
    avatar:
      "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 5,
    comment: "FinanceGuru helps me keep my budget on track effortlessly.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Olivia Davis",
    avatar:
      "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 5,
    comment: "Love the intuitive UI of ProCode IDE. Highly recommended!",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "William Martinez",
    avatar:
      "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 4,
    comment: "SecureShield keeps my PC safe without slowing it down.",
    time: "1 week ago",
  },
  {
    id: 9,
    user: "Sophia Taylor",
    avatar:
      "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    comment: "CloudSync Pro’s encryption is top-notch and easy to use.",
    time: "3 days ago",
  },
  {
    id: 10,
    user: "Benjamin Harris",
    avatar:
      "https://randomuser.me/api/portraits/men/59.jpg",
    rating: 4,
    comment: "TaskMaster helps me organize my projects efficiently.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Mia Clark",
    avatar:
      "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 4,
    comment: "PhotoFixer’s layer support is a great feature for designers.",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Alexander Lewis",
    avatar:
      "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 5,
    comment: "FinanceGuru’s multi-currency support saved me during travels.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Isabella Young",
    avatar:
      "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 3,
    comment: "ProCode IDE is good, but sometimes lags with big projects.",
    time: "4 days ago",
  },
  {
    id: 14,
    user: "Daniel King",
    avatar:
      "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 5,
    comment: "SecureShield’s automatic updates keep me worry-free.",
    time: "2 weeks ago",
  },
  {
    id: 15,
    user: "Charlotte Wright",
    avatar:
      "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 4,
    comment: "CloudSync Pro’s multi-device sync works flawlessly.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Matthew Scott",
    avatar:
      "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 5,
    comment: "TaskMaster’s notifications keep me on track every day.",
    time: "5 days ago",
  },
  {
    id: 17,
    user: "Amelia Green",
    avatar:
      "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    comment: "PhotoFixer’s retouch tools are easy to use and effective.",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Ethan Hall",
    avatar:
      "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    comment: "FinanceGuru’s reports give me great insights into my spending.",
    time: "2 weeks ago",
  },
];

const SoftwareReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(softwareReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Software Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < softwareReviews.length && (
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

export default SoftwareReviewsPreview;
