"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const audioReviews = [
  {
    id: 1,
    user: "Sophia Turner",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The wireless headphones are incredible! Amazing sound quality and comfort.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "James Carter",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Bluetooth speaker is compact and loud. Perfect for outdoor trips.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Emily Davis",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Soundbar has transformed my home theater experience. Love the bass!",
    time: "3 days ago",
  },
  {
    id: 4,
    user: "Daniel Smith",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Microphone quality is crystal clear for podcasts. Great purchase.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Olivia Brown",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "These earbuds fit perfectly and the noise cancellation is top-notch.",
    time: "1 week ago",
  },
  {
    id: 6,
    user: "Liam Johnson",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The speaker sounds good but the battery life could be better.",
    time: "2 weeks ago",
  },
  {
    id: 7,
    user: "Ava Martinez",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Studio headphones deliver excellent clarity for music production.",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "Ethan Lee",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Microphone setup was easy and works perfectly for streaming.",
    time: "1 month ago",
  },
  {
    id: 9,
    user: "Isabella White",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Noise-canceling headphones block out everything! Ideal for flights.",
    time: "2 weeks ago",
  },
  {
    id: 10,
    user: "Noah Miller",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Soundbar was a great upgrade for my living room setup. Easy to connect.",
    time: "3 weeks ago",
  },
  {
    id: 11,
    user: "Mia Clark",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The Bluetooth range on these headphones is fantastic. Highly recommend.",
    time: "6 days ago",
  },
  {
    id: 12,
    user: "Lucas Hall",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Portable speaker packs a punch. Great for parties and beach trips.",
    time: "1 week ago",
  },
  {
    id: 13,
    user: "Amelia King",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Earbuds sound great but sometimes disconnect during calls.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "William Scott",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Studio mic is worth every penny. Audio quality is unmatched.",
    time: "5 days ago",
  },
  {
    id: 15,
    user: "Charlotte Rivera",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Gaming headset has clear audio and a comfortable fit. Love it!",
    time: "3 weeks ago",
  },
  {
    id: 16,
    user: "Henry Brooks",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Bass is deep and punchy on these headphones. Great for music lovers.",
    time: "1 week ago",
  },
  {
    id: 17,
    user: "Ella Harris",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Wireless mic made my podcast setup professional and simple.",
    time: "2 weeks ago",
  },
  {
    id: 18,
    user: "Logan Parker",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Earbuds are lightweight and perfect for workouts. Battery life is decent.",
    time: "4 days ago",
  },
];

const AudioReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(audioReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Audio Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < audioReviews.length && (
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

export default AudioReviewsPreview;
