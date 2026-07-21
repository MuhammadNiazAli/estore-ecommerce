"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaCheckCircle,
  FaThumbsUp,
  FaThumbsDown,
  FaReply,
  FaShareAlt,
} from "react-icons/fa";

const initialReviews = [
  {
    id: 1,
    user: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    verified: true,
    title: "Amazing quality!",
    text: "This cookware set is fantastic. Heats evenly and looks premium.",
    images: [
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1075&auto=format&fit=crop",
    ],
    likes: 14,
    dislikes: 2,
    userAction: null,
    replies: [],
  },
  {
    id: 2,
    user: "Michael Lee",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    verified: true,
    title: "Good but heavy",
    text: "Great build quality, but the pans are a little heavy for daily use.",
    images: [],
    likes: 8,
    dislikes: 1,
    userAction: null,
    replies: [],
  },
  {
    id: 3,
    user: "Emily Carter",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    verified: true,
    title: "Stylish & Durable",
    text: "Love the modern design! Been using for a month, no scratches so far.",
    images: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop",
    ],
    likes: 20,
    dislikes: 0,
    userAction: null,
    replies: [],
  },
  {
    id: 4,
    user: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    verified: false,
    title: "Average Performance",
    text: "Looks great, but not very non-stick. Needs extra oil while cooking.",
    images: [],
    likes: 4,
    dislikes: 3,
    userAction: null,
    replies: [],
  },
  {
    id: 5,
    user: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    verified: true,
    title: "Great but pricey",
    text: "Quality is excellent, but I feel it's a bit expensive compared to others.",
    images: [
      "https://images.unsplash.com/photo-1614362705324-8da11fd16754?q=80&w=1064&auto=format&fit=crop",
    ],
    likes: 11,
    dislikes: 2,
    userAction: null,
    replies: [],
  },
  {
    id: 6,
    user: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    verified: true,
    title: "Totally worth it!",
    text: "Highly recommend for anyone who loves cooking. Premium finish, easy to clean.",
    images: [
      "https://images.unsplash.com/photo-1664914707239-e31abf8beab5?q=80&w=1170&auto=format&fit=crop",
    ],
    likes: 25,
    dislikes: 1,
    userAction: null,
    replies: [],
  },
];

const KitchenReviewsPreview = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [activeReplyBox, setActiveReplyBox] = useState(null);

  const handleAction = (id, action) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          let updatedLikes = r.likes;
          let updatedDislikes = r.dislikes;
          let updatedAction = r.userAction;

          if (r.userAction === action) {
            if (action === "like") updatedLikes--;
            else updatedDislikes--;
            updatedAction = null;
          } else {
            if (action === "like") {
              updatedLikes++;
              if (r.userAction === "dislike") updatedDislikes--;
            } else {
              updatedDislikes++;
              if (r.userAction === "like") updatedLikes--;
            }
            updatedAction = action;
          }

          return {
            ...r,
            likes: updatedLikes,
            dislikes: updatedDislikes,
            userAction: updatedAction,
          };
        }
        return r;
      })
    );
  };

  const handleReply = (id) => {
    if (!replyText.trim()) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, replies: [...r.replies, replyText.trim()] }
          : r
      )
    );
    setReplyText("");
    setActiveReplyBox(null);
  };

  const handleShare = (id) => {
    const shareURL = `${window.location.href}#review-${id}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Check this review",
          text: "Look at this product review:",
          url: shareURL,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareURL);
      alert("Review link copied to clipboard!");
    }
  };

  return (
    <section className="bg-white text-black py-8 sm:py-12 my-6 sm:my-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Customer Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              id={`review-${review.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-4 sm:p-6 border border-black"
            >
              {/* User Info */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover cursor-pointer"
                  onClick={() => setSelectedProfile(review)}
                />
                <div>
                  <p
                    className="font-semibold text-sm sm:text-base cursor-pointer hover:text-black"
                    onClick={() => setSelectedProfile(review)}
                  >
                    {review.user}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 flex-wrap">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-black mr-1" />
                      ))}
                    {review.verified && (
                      <span className="flex items-center gap-1 ml-2">
                        <FaCheckCircle className="text-black" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-base sm:text-lg mb-2">
                {review.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">{review.text}</p>

              {/* Images */}
              {review.images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {review.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="review"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer hover:scale-105 transition"
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-gray-600">
                <button
                  onClick={() => handleAction(review.id, "like")}
                  className={`flex items-center gap-1 ${
                    review.userAction === "like" ? "text-black" : ""
                  }`}
                >
                  <FaThumbsUp /> {review.likes}
                </button>
                <button
                  onClick={() => handleAction(review.id, "dislike")}
                  className={`flex items-center gap-1 ${
                    review.userAction === "dislike" ? "text-black" : ""
                  }`}
                >
                  <FaThumbsDown /> {review.dislikes}
                </button>
                <button
                  onClick={() => setActiveReplyBox(review.id)}
                  className="flex items-center gap-1 hover:text-black"
                >
                  <FaReply /> Reply
                </button>
                <button
                  onClick={() => handleShare(review.id)}
                  className="flex items-center gap-1 hover:text-black"
                >
                  <FaShareAlt /> Share
                </button>
              </div>

              {/* Reply Box */}
              {activeReplyBox === review.id && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full bg-white text-black text-sm px-3 py-2 rounded outline-none border border-black mb-2"
                  />
                  <button
                    onClick={() => handleReply(review.id)}
                    className="px-4 py-2 bg-black text-gray-900 font-semibold rounded hover:bg-black transition"
                  >
                    Send
                  </button>
                </div>
              )}

              {/* Replies */}
              {review.replies.length > 0 && (
                <div className="mt-4 space-y-2 text-gray-700 text-sm">
                  {review.replies.map((rep, i) => (
                    <div
                      key={i}
                      className="pl-3 border-l-2 border-black break-words"
                    >
                      {rep}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg border border-black max-w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="review full"
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="text-right mt-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 bg-black text-gray-900 font-semibold rounded hover:bg-black transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg border border-black w-full max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedProfile.avatar}
                  alt={selectedProfile.user}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {selectedProfile.user}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Verified Customer:{" "}
                    {selectedProfile.verified ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Profile Analysis: Active user with{" "}
                {selectedProfile.replies.length} replies on reviews.
              </p>
              <div className="text-right">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="px-4 py-2 bg-black text-gray-900 font-semibold rounded hover:bg-black transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default KitchenReviewsPreview;
