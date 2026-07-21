"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const movieReviews = [
  {
    id: 1,
    user: "Chris Nolan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "Absolutely loved the cinematography, stunning visuals!",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Emily Stone",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Great storyline, though a bit slow in the middle.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Daniel Craig",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    comment: "Action sequences were top-notch, highly recommend!",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    comment: "Romantic scenes were beautifully shot, amazing chemistry.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Michael Scott",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    comment: "Comedy moments had me laughing throughout the film.",
    time: "4 days ago",
  },
  {
    id: 6,
    user: "Emma Watson",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 3,
    comment: "Decent plot, but predictable towards the end.",
    time: "1 month ago",
  },
  {
    id: 7,
    user: "Brad Pitt",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    comment: "Oscar-worthy performances, must-watch!",
    time: "2 weeks ago",
  },
  {
    id: 8,
    user: "Lily Collins",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 4,
    comment: "The soundtrack was phenomenal and really set the mood.",
    time: "3 days ago",
  },
  {
    id: 9,
    user: "Ryan Gosling",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    comment: "Incredible direction and character development.",
    time: "1 week ago",
  },
  {
    id: 10,
    user: "Ava Green",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    comment: "Loved the costumes and art direction, very authentic.",
    time: "2 weeks ago",
  },
  {
    id: 11,
    user: "Noah James",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 5,
    comment: "Edge-of-the-seat thriller with unexpected twists.",
    time: "4 days ago",
  },
  {
    id: 12,
    user: "Mia Clarke",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 3,
    comment: "Sound editing was good but dialogue lacked punch.",
    time: "3 weeks ago",
  },
  {
    id: 13,
    user: "Logan West",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    comment: "Great animation and CGI effects throughout the movie.",
    time: "1 month ago",
  },
  {
    id: 14,
    user: "Ella Brown",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 5,
    comment: "A masterpiece that blends drama and suspense perfectly.",
    time: "2 days ago",
  },
  {
    id: 15,
    user: "Benjamin Ross",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 4,
    comment: "Impressive action sequences with brilliant choreography.",
    time: "1 week ago",
  },
  {
    id: 16,
    user: "Charlotte Evans",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    comment: "Emotional depth and storytelling at its finest.",
    time: "4 days ago",
  },
  {
    id: 17,
    user: "Henry Carter",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    comment: "A cinematic experience you shouldn't miss!",
    time: "3 weeks ago",
  },
  {
    id: 18,
    user: "Amelia Reed",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4,
    comment: "Brilliant direction and a truly original concept.",
    time: "2 weeks ago",
  },
];

const MoviesReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewAll = () => {
    setVisibleCount(movieReviews.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews - Movies
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movieReviews.slice(0, visibleCount).map((review, index) => (
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
        {visibleCount < movieReviews.length && (
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

export default MoviesReviewsPreview;
