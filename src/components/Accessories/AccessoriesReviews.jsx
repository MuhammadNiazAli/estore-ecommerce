import React, { useState } from "react";
import { Star, ThumbsUp, MessageSquare, CheckCircle } from "lucide-react";

const initialReviewsData = [
  {
    id: 1,
    name: "Sophia Carter",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    verified: true,
    date: "July 20, 2025",
    review:
      "Absolutely love the accessories! The quality is top-notch and the packaging felt premium. Worth every penny.",
    likes: 12,
    likedByUser: false,
    replies: [
      {
        id: 101,
        name: "Store Support",
        avatar: "https://i.ibb.co/9t9P3zP/user.png",
        text: "Thank you for your feedback, Sophia! We're thrilled you're happy with your purchase.",
        date: "July 21, 2025",
      },
    ],
  },
  {
    id: 2,
    name: "James Parker",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    verified: true,
    date: "July 18, 2025",
    review:
      "Great design and quality! Slight delay in delivery but overall satisfied with the product.",
    likes: 8,
    likedByUser: false,
    replies: [],
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    verified: true,
    date: "July 15, 2025",
    review:
      "Perfect accessory to complete my look. Will definitely recommend to friends!",
    likes: 5,
    likedByUser: false,
    replies: [],
  },
];

const AccessoriesReviews = () => {
  const [filter, setFilter] = useState("Newest");
  const [reviews, setReviews] = useState(initialReviewsData);

  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);

  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");

  const handleLike = (id) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id === id) {
          const liked = review.likedByUser;
          return {
            ...review,
            likes: liked ? review.likes - 1 : review.likes + 1,
            likedByUser: !liked,
          };
        }
        return review;
      })
    );
  };

  const handleFilterChange = (option) => {
    setFilter(option);
    let sorted = [...reviews];
    if (option === "Highest Rated") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (option === "Newest") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setReviews(sorted);
  };

  const handleAddReview = () => {
    if (!newName.trim() || !newReview.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newEntry = {
      id: Date.now(),
      name: newName.trim(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        newName.trim()
      )}&background=random&size=128`,
      rating: newRating,
      verified: false,
      date: formattedDate,
      review: newReview.trim(),
      likes: 0,
      likedByUser: false,
      replies: [],
    };

    setReviews((prev) => [newEntry, ...prev]);
    setNewName("");
    setNewReview("");
    setNewRating(5);
    setFilter("Newest");
  };

  const handleReplyClick = (reviewId) => {
    if (replyingToId === reviewId) {
      setReplyingToId(null);
      setReplyText("");
      setReplyName("");
    } else {
      setReplyingToId(reviewId);
      setReplyText("");
      setReplyName("");
    }
  };

  const handleAddReply = (reviewId) => {
    if (!replyName.trim() || !replyText.trim()) {
      alert("Please enter your name and reply.");
      return;
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newReply = {
      id: Date.now(),
      name: replyName.trim(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        replyName.trim()
      )}&background=random&size=128`,
      text: replyText.trim(),
      date: formattedDate,
    };

    setReviews((prev) =>
      prev.map((review) =>
        review.id === reviewId
          ? { ...review, replies: [...review.replies, newReply] }
          : review
      )
    );

    setReplyingToId(null);
    setReplyText("");
    setReplyName("");
  };

  return (
    <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
        Customer Reviews
      </h2>

      {/* Filter + Add Review */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-lg px-3 sm:px-4 py-2 focus:outline-none w-full md:w-auto"
        >
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>

        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 text-white rounded-lg px-3 sm:px-4 py-2 w-full sm:w-40 focus:outline-none"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 sm:px-4 py-2 w-full sm:w-28 focus:outline-none"
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Review Textarea */}
      <div className="mb-6">
        <textarea
          rows={3}
          placeholder="Write your review here..."
          className="bg-gray-800 text-white rounded-2xl w-full px-4 py-3 resize-none focus:outline-none"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button
          onClick={handleAddReview}
          className="mt-3 w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg px-6 py-2 transition"
        >
          Add Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  {review.verified && (
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < review.rating ? "fill-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-400 text-sm mt-1">{review.date}</p>
                <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
                  {review.review}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <button
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-1 transition ${
                      review.likedByUser
                        ? "text-yellow-400"
                        : "text-gray-400 hover:text-yellow-400"
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" /> {review.likes}
                  </button>
                  <button
                    onClick={() => handleReplyClick(review.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-yellow-400 transition"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" /> Reply
                  </button>
                </div>

                {/* Reply Form */}
                {replyingToId === review.id && (
                  <div className="mt-4 p-3 sm:p-4 bg-gray-800 rounded-lg">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full mb-2 focus:outline-none"
                      value={replyName}
                      onChange={(e) => setReplyName(e.target.value)}
                    />
                    <textarea
                      rows={2}
                      placeholder="Write your reply..."
                      className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full resize-none mb-2 focus:outline-none"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex flex-col sm:flex-row justify-end gap-2">
                      <button
                        onClick={() => {
                          setReplyingToId(null);
                          setReplyText("");
                          setReplyName("");
                        }}
                        className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleAddReply(review.id)}
                        className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold transition"
                      >
                        Submit Reply
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {review.replies.length > 0 && (
                  <div className="mt-4 pl-3 sm:pl-6 border-l border-gray-700 space-y-4">
                    {review.replies.map((reply) => (
                      <div key={reply.id}>
                        <div className="flex items-center gap-2">
                          <img
                            src={reply.avatar}
                            alt={reply.name}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white font-semibold text-sm">
                              {reply.name}
                            </p>
                            <p className="text-gray-500 text-xs">{reply.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 mt-2 text-sm">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesReviews;
