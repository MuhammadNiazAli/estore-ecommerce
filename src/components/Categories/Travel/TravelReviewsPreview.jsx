"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const travelReviews = [
  {
    id: 1,
    user: "Emma Watson",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
    comment: "This travel backpack is super comfortable and has tons of compartments.",
    time: "3 days ago",
  },
  {
    id: 2,
    user: "Liam Smith",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 4,
    comment: "The suitcase wheels glide smoothly on all surfaces.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Olivia Johnson",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    comment: "Lightweight yet durable, perfect for long trips.",
    time: "2 weeks ago",
  },
  {
    id: 4,
    user: "Noah Brown",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 4,
    comment: "Good value for the price, but wish it had more pockets.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    rating: 5,
    comment: "Excellent water resistance. Kept my stuff dry in the rain!",
    time: "4 days ago",
  },
  {
    id: 6,
    user: "Mason Davis",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 3,
    comment: "Suitcase handle could be sturdier but overall solid build.",
    time: "3 weeks ago",
  },
  {
    id: 7,
    user: "Isabella Garcia",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 5,
    comment: "Fits everything I need and is easy to carry around airports.",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Ethan Wilson",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4,
    comment: "Durable fabric and stylish design, highly recommend.",
    time: "3 days ago",
  },
  {
    id: 9,
    user: "Ava Anderson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "The expandable section gives extra space when needed.",
    time: "1 week ago",
  },
  {
    id: 10,
    user: "Lucas Thomas",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 4,
    comment: "A bit heavy but very sturdy for rough travel.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Mia Taylor",
    avatar: "https://randomuser.me/api/portraits/women/38.jpg",
    rating: 5,
    comment: "Love the multiple compartments and hidden pockets.",
    time: "4 days ago",
  },
  {
    id: 12,
    user: "Benjamin Moore",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 3,
    comment: "The suitcase is good but the zipper got stuck once.",
    time: "1 month ago",
  },
  {
    id: 13,
    user: "Charlotte Jackson",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 4,
    comment: "Comfortable straps and breathable back panel.",
    time: "1 week ago",
  },
  {
    id: 14,
    user: "James White",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
    comment: "Perfect size for carry-on, fits under the seat nicely.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Amelia Harris",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4,
    comment: "Good quality and elegant look.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "William Martin",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    comment: "The TSA lock gives me peace of mind when traveling.",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Emily Thompson",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 5,
    comment: "Very practical and easy to organize my travel essentials.",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Alexander Scott",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    rating: 4,
    comment: "Would love more color options, otherwise great product.",
    time: "2 weeks ago",
  },
];

const TravelReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(travelReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Travel Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < travelReviews.length && (
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

export default TravelReviewsPreview;
