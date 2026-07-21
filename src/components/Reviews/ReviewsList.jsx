'use client';

import React, { useState, useMemo } from 'react';
import {
  Star,
  BadgeCheck,
  ThumbsUp,
  Share2,
  MessageCircle,
} from 'lucide-react';

const getInitials = (name = '') =>
  name
    .trim()
    .split(' ')
    .map((n, i, arr) => (i === 0 || i === arr.length - 1 ? n[0].toUpperCase() : ''))
    .join('');

const timeAgo = (date) => {
  const diff = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2628000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diff / interval.seconds);
    if (count >= 1) return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
  }
  return 'just now';
};

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1 text-black" role="img" aria-label={`Rating: ${rating} stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} size={18} fill={i <= rating ? 'currentColor' : 'none'} stroke="currentColor" />
    ))}
  </div>
);

const Comment = ({ comment, onToggleLike }) => (
  <div className="pl-6 mt-3 border-l border-gray-200">
    <div className="flex items-center gap-2 text-gray-700 text-sm">
      <span className="font-semibold">{comment.user}</span>
      <time className="text-xs text-gray-500">{timeAgo(comment.date)}</time>
    </div>
    <p className="mt-1 text-gray-700">{comment.text}</p>
    <div className="flex items-center gap-4 mt-1 text-gray-600 text-xs">
      <button
        onClick={() => onToggleLike(comment.id)}
        className="flex items-center gap-1 hover:text-black transition"
      >
        <ThumbsUp size={14} className={comment.liked ? 'text-black scale-110' : ''} />
        <span>{comment.likes}</span>
      </button>
    </div>
  </div>
);

const Review = ({ review, onLikeReview, onAddComment, onToggleLikeComment }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [commentText, setCommentText] = useState('');

  const submitComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(review.id, commentText.trim());
    setCommentText('');
    setShowCommentForm(false);
  };

  return (
    <article className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl p-8 rounded-xl transition-transform hover:scale-[1.02] relative group">
      <header className="flex items-center gap-6 mb-6">
        {review.avatar ? (
          <img src={review.avatar} className="w-16 h-16 rounded-full object-cover" alt={review.name} />
        ) : (
          <div className="w-16 h-16 rounded-full bg-black text-gray-900 font-bold text-2xl flex items-center justify-center">
            {getInitials(review.name)}
          </div>
        )}
        <div>
          <h3 className="text-gray-900 font-semibold text-xl">{review.name}</h3>
          {review.verified && (
            <span className="text-sm text-black flex items-center mt-1">
              <BadgeCheck className="w-4 h-4 mr-1" /> Verified Buyer
            </span>
          )}
          <time className="block text-sm text-gray-600 mt-0.5">{timeAgo(review.date)}</time>
        </div>
      </header>

      <StarRating rating={review.rating} />
      <p className="mt-4 text-gray-700 text-lg leading-relaxed">{review.text}</p>

      <div className="flex items-center gap-8 mt-6 text-gray-600 text-sm">
        <button
          onClick={() => onLikeReview(review.id)}
          className="flex items-center gap-2 hover:text-black transition"
        >
          <ThumbsUp size={20} className={review.liked ? 'text-black scale-110' : ''} />
          {review.likes}
        </button>

        <button
          onClick={() => setShowCommentForm((v) => !v)}
          className="flex items-center gap-2 hover:text-black transition"
        >
          <MessageCircle size={20} />
          {review.comments.length}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowShare((v) => !v)}
            className="flex items-center gap-2 hover:text-black transition"
          >
            <Share2 size={20} />
            Share
          </button>
          {showShare && (
            <ul className="absolute top-full right-0 mt-2 w-40 bg-white rounded shadow-lg z-20 text-sm border border-gray-200">
              {['Facebook', 'Twitter', 'Copy Link'].map((platform) => (
                <li key={platform}>
                  <button
                    className="block px-4 py-2 hover:bg-gray-500 w-full text-left text-gray-900"
                    onClick={() => alert(`Shared on ${platform}`)}
                  >
                    {platform}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {showCommentForm && (
        <form onSubmit={submitComment} className="mt-6">
          <textarea
            rows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-white rounded-lg p-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-black resize-none"
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="mt-3 bg-black hover:bg-black text-gray-900 font-semibold px-6 py-2 rounded-md"
          >
            Post Comment
          </button>
        </form>
      )}

      {review.comments.length > 0 && (
        <section className="mt-6 border-t border-gray-200 pt-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-950 pr-2">
          {review.comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onToggleLike={(cid) => onToggleLikeComment(review.id, cid)}
            />
          ))}
        </section>
      )}
    </article>
  );
};

export default function ReviewsSystem() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2025-07-02',
      verified: true,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Absolutely love the quality! Delivered on time and the packaging was premium.',
      likes: 12,
      liked: false,
      comments: [
        {
          id: 101,
          user: 'Emma',
          text: 'Totally agree with you, Sarah!',
          date: '2025-07-03',
          likes: 3,
          liked: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Mark Peterson',
      rating: 4,
      date: '2025-06-28',
      verified: true,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'Great value for money. Customer service was responsive and helpful.',
      likes: 5,
      liked: false,
      comments: [],
    },
    {
      id: 3,
      name: 'John Doe',
      rating: 3,
      date: '2025-06-15',
      verified: false,
      avatar: '',
      text: 'It’s okay. Packaging was fine, product worked as expected but nothing extraordinary.',
      likes: 2,
      liked: false,
      comments: [],
    },
  ]);

  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    return filter === 'All' ? reviews : reviews.filter((r) => r.rating === parseInt(filter));
  }, [filter, reviews]);

  const toggleLikeReview = (id) =>
    setReviews((r) =>
      r.map((rev) =>
        rev.id === id ? { ...rev, liked: !rev.liked, likes: rev.liked ? rev.likes - 1 : rev.likes + 1 } : rev
      )
    );

  const addCommentToReview = (reviewId, text) => {
    const newComment = {
      id: Date.now(),
      user: 'You',
      text,
      date: new Date().toISOString(),
      likes: 0,
      liked: false,
    };
    setReviews((r) =>
      r.map((rev) =>
        rev.id === reviewId ? { ...rev, comments: [...rev.comments, newComment] } : rev
      )
    );
  };

  const toggleLikeComment = (reviewId, commentId) =>
    setReviews((r) =>
      r.map((rev) =>
        rev.id === reviewId
          ? {
              ...rev,
              comments: rev.comments.map((c) =>
                c.id === commentId ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c
              ),
            }
          : rev
      )
    );

  return (
    <section className="bg-white py-20 px-4 my-[-50px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl text-gray-900 font-bold text-center mb-12">Customer Reviews & Feedback</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', '5', '4', '3', '2', '1'].map((f) => {
            const count = f === 'All' ? reviews.length : reviews.filter((r) => r.rating === parseInt(f)).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  filter === f
                    ? 'bg-black text-gray-900 shadow'
                    : 'bg-white text-gray-600 hover:bg-gray-500 hover:text-black'
                }`}
              >
                {f === 'All' ? 'All Ratings' : `${f} Stars`} ({count})
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-600 text-center">No reviews found.</p>
        ) : (
          <div className="space-y-10">
            {filtered.map((review) => (
              <Review
                key={review.id}
                review={review}
                onLikeReview={toggleLikeReview}
                onAddComment={addCommentToReview}
                onToggleLikeComment={toggleLikeComment}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
