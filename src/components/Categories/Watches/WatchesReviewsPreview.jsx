"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

const sampleReviews = [
  {
    id: 1,
    username: "John D.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    comment:
      "The Rolex Submariner is absolutely stunning. Build quality is unmatched and the feel on the wrist is luxurious!",
    images: [
      "https://images.unsplash.com/photo-1677086522121-f6702cdbf07b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 32,
    liked: false,
    replies: [],
    date: "2 days ago",
  },
  {
    id: 2,
    username: "Sophia M.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    comment:
      "Omega Speedmaster is a classic! Love the chronograph function. Strap is super comfortable.",
    images: [],
    likes: 18,
    liked: false,
    replies: [],
    date: "5 days ago",
  },
  {
    id: 3,
    username: "Michael B.",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: 5,
    comment:
      "Tag Heuer Carrera is a masterpiece. The sapphire crystal is flawless and the dial is mesmerizing.",
    images: [
      "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 40,
    liked: false,
    replies: [],
    date: "1 week ago",
  },
  {
    id: 4,
    username: "Emily R.",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    rating: 4,
    comment:
      "Apple Watch Ultra is amazing for fitness tracking and the display is bright even in sunlight.",
    images: [],
    likes: 25,
    liked: false,
    replies: [],
    date: "3 days ago",
  },
  {
    id: 5,
    username: "Daniel K.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 3,
    comment:
      "I like the Omega Seamaster design but the strap could be more durable. Otherwise, solid performance.",
    images: [],
    likes: 12,
    liked: false,
    replies: [],
    date: "1 month ago",
  },
  {
    id: 6,
    username: "Isabella C.",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 5,
    comment:
      "Rolex GMT-Master II is perfection! The two-tone bezel is iconic and feels like a true luxury piece.",
    images: [
      "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 54,
    liked: false,
    replies: [],
    date: "2 weeks ago",
  },
  {
    id: 7,
    username: "David L.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 4,
    comment:
      "Tag Heuer Monaco has such a unique square case! Love the retro racing vibe.",
    images: [],
    likes: 19,
    liked: false,
    replies: [],
    date: "4 days ago",
  },
  {
    id: 8,
    username: "Amelia W.",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 5,
    comment:
      "Apple Watch Series 9 is sleek and packed with features. Health tracking is top-notch!",
    images: [],
    likes: 27,
    liked: false,
    replies: [],
    date: "6 days ago",
  },
  {
    id: 9,
    username: "James H.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
    comment:
      "Omega Speedmaster still feels legendary! The chronograph works flawlessly.",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 35,
    liked: false,
    replies: [],
    date: "1 week ago",
  },
  {
    id: 10,
    username: "Olivia P.",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 3,
    comment:
      "Tag Heuer Aquaracer is decent for diving, but the clasp feels a bit loose.",
    images: [],
    likes: 14,
    liked: false,
    replies: [],
    date: "3 weeks ago",
  },
  {
    id: 11,
    username: "Lucas G.",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    rating: 5,
    comment:
      "Rolex Daytona is pure racing history! Every detail screams precision engineering.",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 58,
    liked: false,
    replies: [],
    date: "5 days ago",
  },
  {
    id: 12,
    username: "Sophia L.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    comment:
      "Apple Watch SE is affordable and reliable. Perfect entry-level smartwatch.",
    images: [],
    likes: 20,
    liked: false,
    replies: [],
    date: "2 weeks ago",
  },
  {
    id: 13,
    username: "Henry T.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    comment:
      "Omega Aqua Terra is versatile and elegant. Love wearing it both casually and formally.",
    images: [],
    likes: 33,
    liked: false,
    replies: [],
    date: "4 weeks ago",
  },
  {
    id: 14,
    username: "Ella B.",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 4,
    comment:
      "Rolex Datejust is timeless. The jubilee bracelet feels amazing on the wrist!",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 45,
    liked: false,
    replies: [],
    date: "1 week ago",
  },
  {
    id: 15,
    username: "Noah W.",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    rating: 5,
    comment:
      "Tag Heuer Formula 1 looks sporty and feels lightweight. Great value for money!",
    images: [],
    likes: 21,
    liked: false,
    replies: [],
    date: "3 days ago",
  },
  {
    id: 16,
    username: "Grace F.",
    avatar: "https://randomuser.me/api/portraits/women/80.jpg",
    rating: 3,
    comment:
      "Apple Watch battery could last longer, but overall a great fitness companion.",
    images: [],
    likes: 10,
    liked: false,
    replies: [],
    date: "2 days ago",
  },
  {
    id: 17,
    username: "Ethan S.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    comment:
      "Omega Constellation is a real head-turner. Amazing design and precision.",
    images: [],
    likes: 28,
    liked: false,
    replies: [],
    date: "6 days ago",
  },
  {
    id: 18,
    username: "Aria M.",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    rating: 5,
    comment:
      "Rolex Yacht-Master is luxury at its finest. Every detail is perfect.",
    images: [
      "https://images.unsplash.com/photo-1606387318469-bada9b642157?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likes: 50,
    liked: false,
    replies: [],
    date: "4 weeks ago",
  },
  {
    id: 19,
    username: "Liam K.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
    comment:
      "Tag Heuer Link bracelet feels amazing. Stylish and comfortable for daily wear.",
    images: [],
    likes: 17,
    liked: false,
    replies: [],
    date: "3 weeks ago",
  },
  {
    id: 20,
    username: "Mia R.",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
    comment:
      "Apple Watch Ultra durability is top-notch! Perfect for adventure lovers.",
    images: [],
    likes: 31,
    liked: false,
    replies: [],
    date: "1 day ago",
  },
];


const WatchesReviewsPreview = () => {
  const [reviews, setReviews] = useState(sampleReviews);
  const [showCount, setShowCount] = useState(2);
  const [replyText, setReplyText] = useState({});
  const [replyVisible, setReplyVisible] = useState({});

  // ✅ Like/Unlike Toggle
  const toggleLike = (id) => {
    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id
          ? {
              ...rev,
              liked: !rev.liked,
              likes: rev.liked ? rev.likes - 1 : rev.likes + 1,
            }
          : rev
      )
    );
  };

  // ✅ Show/Hide Reply Box
  const toggleReplyBox = (id) => {
    setReplyVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ Add Reply
  const handleAddReply = (id) => {
    if (!replyText[id] || replyText[id].trim() === "") return;
    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id
          ? {
              ...rev,
              replies: [
                ...rev.replies,
                {
                  id: Date.now(),
                  text: replyText[id],
                  user: "You",
                  date: "Just now",
                },
              ],
            }
          : rev
      )
    );
    setReplyText({ ...replyText, [id]: "" });
    setReplyVisible({ ...replyVisible, [id]: false });
  };

  const loadMore = () => setShowCount((prev) => prev + 2);

  return (
    <section className="bg-gray-900 text-white py-10 px-4 md:px-8 my-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h2>

        <div className="space-y-6">
          {reviews.slice(0, showCount).map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-5 shadow-lg flex flex-col gap-4"
            >
              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.username}
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <p className="font-semibold">{review.username}</p>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300">{review.comment}</p>

              {/* Images */}
              {review.images.length > 0 && (
                <div className="flex gap-3 mt-2">
                  {review.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Review"
                      className="w-20 h-20 object-cover rounded-lg border border-gray-700 hover:scale-105 transition"
                    />
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-6 mt-2">
                <button
                  onClick={() => toggleLike(review.id)}
                  className={`flex items-center gap-2 transition ${
                    review.liked ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <HandThumbUpIcon className="w-5 h-5" />
                  {review.likes}
                </button>
                <button
                  onClick={() => toggleReplyBox(review.id)}
                  className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition"
                >
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  Reply
                </button>
              </div>

              {/* Reply Box */}
              {replyVisible[review.id] && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Write a reply..."
                    value={replyText[review.id] || ""}
                    onChange={(e) =>
                      setReplyText({ ...replyText, [review.id]: e.target.value })
                    }
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white outline-none"
                  />
                  <button
                    onClick={() => handleAddReply(review.id)}
                    className="mt-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
                  >
                    Post Reply
                  </button>
                </div>
              )}

              {/* Replies */}
              {review.replies.length > 0 && (
                <div className="mt-4 space-y-2">
                  {review.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="bg-gray-700 p-3 rounded-lg text-sm"
                    >
                      <p className="font-semibold">{reply.user}</p>
                      <p>{reply.text}</p>
                      <p className="text-gray-400 text-xs mt-1">
                        {reply.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {showCount < reviews.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WatchesReviewsPreview;
