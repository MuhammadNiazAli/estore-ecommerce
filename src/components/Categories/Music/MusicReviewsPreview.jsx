"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const musicReviews = [
  {
    id: 1,
    user: "Alex Turner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "The electric guitar tone is amazing, perfect for beginners!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Maya Patel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Wireless headphones have great sound quality and fit well.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "James Lee",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    comment: "Digital piano feels just like a real one, highly recommend!",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Sophia Chen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    comment: "Drum set is sturdy and perfect for practice sessions.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    comment: "Studio microphone picks up sound crisply and clearly.",
    time: "4 days ago",
  },
  {
    id: 6,
    user: "Emma Garcia",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 3,
    comment: "Guitar amplifier works well but gets a bit warm after hours.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Oliver Wilson",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    comment: "Bass guitar strings are smooth and easy to play.",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Lily Brown",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 4,
    comment: "Compact keyboard is perfect for my small studio setup.",
    time: "3 days ago",
  },
  {
    id: 9,
    user: "Ethan Davis",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    comment: "Music stand is sturdy and adjustable with ease.",
    time: "1 week ago",
  },
  {
    id: 10,
    user: "Ava Martinez",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    comment: "Headphone case is durable and keeps them protected well.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Noah Johnson",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 5,
    comment: "Mixing console has great features and intuitive controls.",
    time: "4 days ago",
  },
  {
    id: 12,
    user: "Mia Thompson",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 3,
    comment: "Wireless mic battery life could be better but works fine.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Logan White",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    comment: "Guitar tuner is accurate and easy to use.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "Ella Harris",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 5,
    comment: "Excellent piano bench, very comfortable for long sessions.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Benjamin Clark",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 4,
    comment: "Drum sticks are balanced well and very durable.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Charlotte Lewis",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    comment: "Metronome app syncs perfectly with my practice sessions.",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Henry Walker",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    comment: "Nice set of guitar picks, great grip and variety.",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Amelia King",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4,
    comment: "Soundproofing panels really improved my recording quality.",
    time: "2 weeks ago",
  },
];

const MusicReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(musicReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Music Products
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < musicReviews.length && (
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

export default MusicReviewsPreview;
