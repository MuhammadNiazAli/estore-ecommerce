"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaThumbsUp, FaComment } from "react-icons/fa";

const bookReviews = [
  {
    id: 1,
    user: "Emma Johnson",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "An incredible book for programmers! The concepts are explained beautifully and in detail.",
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Liam Smith",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Loved reading this! Great examples and clear explanations, but a bit dense in some sections.",
    time: "1 week ago",
  },
  {
    id: 3,
    user: "Sophia Brown",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Clean Code is a must-read for any developer. It completely changed the way I write software!",
    time: "3 weeks ago",
  },
  {
    id: 4,
    user: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Deep Learning Illustrated was fantastic! Easy to understand and visually appealing.",
    time: "5 days ago",
  },
  {
    id: 5,
    user: "Olivia Taylor",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Introduction to Algorithms is very detailed and comprehensive. A must for CS students!",
    time: "1 month ago",
  },
  {
    id: 6,
    user: "Ethan Davis",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "JavaScript: The Good Parts is short and powerful. Great for experienced developers.",
    time: "2 weeks ago",
  },
  {
    id: 7,
    user: "Grace Miller",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Refactoring by Martin Fowler is a game changer for writing cleaner, more maintainable code.",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "Daniel Roberts",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "I enjoyed 'Python Crash Course'! It's a perfect start for beginners learning Python.",
    time: "2 weeks ago",
  },
  {
    id: 9,
    user: "Isabella Moore",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "'Design Patterns' is a classic! A bit tough to follow at times, but worth every minute.",
    time: "6 days ago",
  },
  {
    id: 10,
    user: "Lucas Thompson",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "'Head First Java' is fun and interactive, but could be more detailed for advanced learners.",
    time: "3 weeks ago",
  },
  {
    id: 11,
    user: "Amelia White",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "'You Don't Know JS' is fantastic for deepening JavaScript knowledge. Highly recommend it!",
    time: "1 week ago",
  },
  {
    id: 12,
    user: "Henry Evans",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Loved the practical examples in 'Effective Java'. Great book for serious Java developers.",
    time: "1 month ago",
  },
  {
    id: 13,
    user: "Chloe Adams",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "'Algorithms Unlocked' explains complex topics in a way that's easy to digest. Brilliant!",
    time: "5 days ago",
  },
  {
    id: 14,
    user: "Jack Turner",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "The Pragmatic Programmer is an essential read for anyone serious about coding.",
    time: "2 weeks ago",
  },
  {
    id: 15,
    user: "Ella Scott",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "'Cracking the Coding Interview' is a lifesaver for tech interviews. Tons of good tips!",
    time: "1 day ago",
  },
  {
    id: 16,
    user: "Nathan Hall",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fef81?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "'Programming Pearls' offers clever solutions and insights into problem-solving techniques.",
    time: "3 days ago",
  },
  {
    id: 17,
    user: "Mia Lewis",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "Loved 'Data Structures and Algorithms in JavaScript'. Clear and practical approach.",
    time: "1 week ago",
  },
  {
    id: 18,
    user: "Oliver Green",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "'Machine Learning Yearning' is insightful and a must-read for anyone diving into AI.",
    time: "2 weeks ago",
  },
];


const BooksReviewsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewAll = () => {
    setVisibleCount(bookReviews.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Book Reviews</h2>

        {/* ✅ Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-yellow-500 flex flex-col"
            >
              {/* ✅ User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-400 text-sm">{review.time}</p>
                </div>
              </div>

              {/* ✅ Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-500" />
                    )}
                  </span>
                ))}
              </div>

              {/* ✅ Comment */}
              <p className="text-gray-300 mb-4">{review.comment}</p>

              {/* ✅ Actions */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition">
                  <FaComment /> Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ View All Button */}
        {visibleCount < bookReviews.length && (
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

export default BooksReviewsPreview;
