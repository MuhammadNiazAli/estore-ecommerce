"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const gamingReviews = [
  {
    id: 1,
    user: "Lucas Martin",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The gaming headset is phenomenal! Crisp sound and deep bass, perfect for competitive play.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Sophia Williams",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Mechanical keyboard feels amazing! RGB lighting is a nice touch but could be brighter.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "James Parker",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Gaming mouse has insane precision. Perfect for my FPS sessions.",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Emily Johnson",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The monitor refresh rate is blazing fast! Colors are sharp but could use better HDR.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Daniel Smith",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Gaming chair is comfy but assembling took longer than expected.",
    time: "1 month ago",
  },
  {
    id: 6,
    user: "Laura Martinez",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Streaming microphone quality is superb! My viewers noticed the difference instantly.",
    time: "2 weeks ago",
  },
  {
    id: 7,
    user: "Michael Brown",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The gaming laptop is powerful, handles AAA titles easily. Gets warm under load though.",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "Olivia Taylor",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "External SSD loads games super quick! Compact and stylish design.",
    time: "6 days ago",
  },
  {
    id: 9,
    user: "Ryan Davis",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "VR headset is mind-blowing. Feels immersive, but setup could be easier.",
    time: "2 weeks ago",
  },
  {
    id: 10,
    user: "Hannah Wilson",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Gamepad is super responsive! Great build quality and battery life.",
    time: "3 days ago",
  },
  {
    id: 11,
    user: "David Miller",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Webcam delivers crisp 1080p video. Autofocus can lag sometimes though.",
    time: "1 month ago",
  },
  {
    id: 12,
    user: "Sophia Moore",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The racing wheel makes driving sims next level! Solid and realistic feedback.",
    time: "2 weeks ago",
  },
  {
    id: 13,
    user: "Ethan Clark",
    avatar:
      "https://images.unsplash.com/photo-1600488999010-7c8f5a174eb1?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "Headphone stand looks cool but feels a bit flimsy for the price.",
    time: "5 days ago",
  },
  {
    id: 14,
    user: "Grace Thompson",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Capture card works great for streaming. Just wish it had better software.",
    time: "1 week ago",
  },
  {
    id: 15,
    user: "Jack Anderson",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Gaming desk is spacious and perfect for my triple monitor setup.",
    time: "3 days ago",
  },
  {
    id: 16,
    user: "Ella Harris",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "LED light strips give my setup a pro look. Easy to install and bright colors!",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Matthew Lewis",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Game capture mic is solid for beginners. Audio is clear but lacks noise suppression.",
    time: "2 weeks ago",
  },
  {
    id: 18,
    user: "Isabella Walker",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "RGB mouse pad is huge and looks amazing. Smooth surface for fast flicks!",
    time: "6 days ago",
  },
];

const GamingReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(gamingReviews.length);
  };

  return (
    <section className="bg-white text-black py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Gamer Feedback
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamingReviews.slice(0, visibleCount).map((review, index) => (
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
                  <p className="text-gray-600 text-sm">{review.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-black" />
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
                <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < gamingReviews.length && (
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

export default GamingReviewsPreview;
