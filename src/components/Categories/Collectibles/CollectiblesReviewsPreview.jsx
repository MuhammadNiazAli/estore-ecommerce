"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const collectibleReviews = [
  {
    id: 1,
    user: "Max Turner",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    comment: "The vintage card came sealed and in mint condition!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Lily Morgan",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 4,
    comment: "Loved the collectible figure — very detailed and vibrant.",
    time: "4 days ago",
  },
  {
    id: 3,
    user: "Noah Carter",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    comment: "Fast delivery and secure packaging for my coin set.",
    time: "1 week ago",
  },
  {
    id: 4,
    user: "Chloe Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    comment: "The signed comic book looks authentic and was well protected.",
    time: "6 days ago",
  },
  {
    id: 5,
    user: "Owen Hill",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    comment: "Really cool collectible pins, they look even better in person.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    user: "Ella Brooks",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 3,
    comment: "Quality was decent, but the packaging could improve.",
    time: "3 weeks ago",
  },
  {
    id: 7,
    user: "Liam Scott",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    comment: "Extremely rare item, glad I grabbed it before it sold out!",
    time: "1 month ago",
  },
  {
    id: 8,
    user: "Ava Bennett",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4,
    comment: "Customer service was helpful in verifying the collectible's history.",
    time: "1 week ago",
  },
  {
    id: 9,
    user: "Lucas Adams",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
    comment: "Amazing condition for such an old item — truly impressed!",
    time: "5 days ago",
  },
  {
    id: 10,
    user: "Grace Mitchell",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    rating: 4,
    comment: "Nice packaging and display case — very collectible-worthy.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Ethan Parker",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    rating: 5,
    comment: "Such a rare vinyl, and the sleeve was perfect!",
    time: "4 days ago",
  },
  {
    id: 12,
    user: "Scarlett Rivera",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    rating: 5,
    comment: "Love how the miniatures are hand-painted, great detail.",
    time: "2 weeks ago",
  },
  {
    id: 13,
    user: "Jack Murphy",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 4,
    comment: "Super fast shipping, collectible arrived before expected.",
    time: "1 week ago",
  },
  {
    id: 14,
    user: "Zoe Hayes",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5,
    comment: "Item matched the listing exactly, very honest seller.",
    time: "3 weeks ago",
  },
  {
    id: 15,
    user: "Daniel Foster",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 3,
    comment: "Slight scuff on the side, but still very collectible.",
    time: "1 month ago",
  },
  {
    id: 16,
    user: "Luna Watson",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    comment: "Came with authenticity papers, very reassuring!",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Aiden Cooper",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    rating: 4,
    comment: "The collectible car is a masterpiece, love the finish!",
    time: "2 weeks ago",
  },
  {
    id: 18,
    user: "Harper Reed",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 5,
    comment: "Each piece feels like a treasure — highly recommend.",
    time: "5 days ago",
  },
];

const CollectiblesReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(collectibleReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Collectibles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectibleReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-black flex flex-col"
            >
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

              <p className="text-black mb-4">{review.comment}</p>

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

        {visibleCount < collectibleReviews.length && (
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

export default CollectiblesReviewsPreview;
