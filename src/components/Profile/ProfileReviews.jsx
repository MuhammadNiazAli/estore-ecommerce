'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  StarIcon,
  ArrowUturnLeftIcon,
  ShareIcon,
  CheckBadgeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

// Platform icons SVG inline for share popup
const platformIcons = {
  Facebook: (
    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12v-9.294H9.294V11.09H12V8.412c0-2.676 1.632-4.135 4.017-4.135 1.143 0 2.13.085 2.417.123v2.807l-1.663.001c-1.303 0-1.555.62-1.555 1.527v2.005h3.11l-.405 3.617h-2.705V24h5.3c.728 0 1.325-.597 1.325-1.333V1.333C24 .597 23.403 0 22.675 0z" />
    </svg>
  ),
  Twitter: (
    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482A13.944 13.944 0 011.671 3.15a4.918 4.918 0 001.523 6.562 4.903 4.903 0 01-2.228-.616v.06a4.916 4.916 0 003.946 4.814 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.59 3.41A9.867 9.867 0 010 21.543a13.905 13.905 0 007.548 2.209c9.057 0 14.009-7.513 14.009-14.028 0-.213-.004-.425-.015-.636A10.025 10.025 0 0024 4.557z" />
    </svg>
  ),
  WhatsApp: (
    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.172.2-.296.3-.495.1-.198.05-.372-.025-.52-.075-.148-.67-1.612-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.15.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.6 1.28 2.92 2.87 2.92h.04c1.66 0 3-1.32 3-2.92-.03-1.65-1.34-2.98-2.93-2.98zM2.4 21.5h5.16V9.5H2.4v12zM9.57 9.5v12h5.15v-6.58c0-3.5 4.6-3.79 4.6 0v6.58h5.16v-7.4c0-6.72-7.23-6.48-9.56-3.18V9.5H9.57z" />
    </svg>
  ),
};

const sharePlatforms = [
  {
    name: 'Facebook',
    getUrl: (url) => `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'Twitter',
    getUrl: (url) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },
  {
    name: 'WhatsApp',
    getUrl: (url) => `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
  },
  {
    name: 'LinkedIn',
    getUrl: (url) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
  },
];

// Simple toast component
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed bottom-6 right-6 bg-black text-black px-4 py-2 rounded shadow select-none z-50 pointer-events-none text-sm sm:text-base">
      {message}
    </div>
  );
};

const ProfileReviews = () => {
  const [liked, setLiked] = useState([]);
  const [sortType, setSortType] = useState('Most Recent');
  const [replies, setReplies] = useState({}); // {reviewId: [{id, text}]}
  const [replyInputs, setReplyInputs] = useState({});
  const [replyOverlayOpen, setReplyOverlayOpen] = useState(null);
  const [shareOpen, setShareOpen] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  // Unique ID for replies
  const generateId = () => Math.random().toString(36).slice(2, 10);

  const reviewsData = [
    {
      id: 1,
      user: 'Ali Raza',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      product: 'Wireless Headphones',
      productImage: 'https://media.istockphoto.com/id/835148968/photo/red-headphones-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=li5IRDOv2G3zvCFT-8wBRFPaXbaE8vIm2pXg42jZGAk=',
      rating: 5,
      date: '2025-07-14',
      verified: true,
      comment: 'Amazing sound quality and very comfortable to wear. Highly recommend!',
    },
    {
      id: 2,
      user: 'Sara Khan',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      product: 'Smartwatch Pro',
      productImage: 'https://images.unsplash.com/photo-1655215920713-94440bf7213f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
      date: '2025-07-10',
      verified: false,
      comment: 'Great features but battery life could be better.',
    },
    {
      id: 3,
      user: 'Danish Ahmed',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      product: 'Gaming Laptop',
      productImage: 'https://images.unsplash.com/photo-1606625000171-fa7d471da28c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      date: '2025-06-30',
      verified: true,
      comment: 'Powerful performance and sleek design. Perfect for gaming and work.',
    },
    {
      id: 4,
      user: 'Hina Sheikh',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      product: '4K Ultra HD Monitor',
      productImage: 'https://media.istockphoto.com/id/614142568/photo/curved-tv-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=-HAzuHfH3xnG5ndHTnqXsuzwhmonFqT_qFIC84OHIF4=',
      rating: 5,
      date: '2025-07-12',
      verified: true,
      comment: 'Crystal clear display and vibrant colors. Great for gaming and professional work!',
    },
    {
      id: 5,
      user: 'Omar Farooq',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      product: 'Bluetooth Speaker',
      productImage: 'https://media.istockphoto.com/id/1059154330/photo/boombox.webp?a=1&b=1&s=612x612&w=0&k=20&c=hjfiUYsBprkQFp4IG6G74pHifyLalVnaNlJ5QQsUHXk=',
      rating: 4,
      date: '2025-07-08',
      verified: false,
      comment: 'Good sound quality with strong bass, but the battery drains a bit fast.',
    },
    {
      id: 6,
      user: 'Ayesha Mir',
      avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
      product: 'Fitness Tracker Band',
      productImage: 'https://images.unsplash.com/photo-1587377839295-298e38763d9d?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      date: '2025-07-05',
      verified: true,
      comment: 'Lightweight, accurate tracking and very comfortable to wear all day long.',
    },
  ];

  const sortedReviews = useMemo(() => {
    let sorted = [...reviewsData];
    if (sortType === 'Highest Rated') sorted.sort((a, b) => b.rating - a.rating);
    else if (sortType === 'Lowest Rated') sorted.sort((a, b) => a.rating - b.rating);
    else sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sorted;
  }, [sortType]);

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked((prev) => prev.filter((x) => x !== id));
      setToastMsg('Like removed');
    } else {
      setLiked((prev) => [...prev, id]);
      setToastMsg('Review liked');
    }
  };

  const toggleShare = (id) => {
    setShareOpen((prev) => (prev === id ? null : id));
  };

  // Open full screen reply overlay
  const openReplyOverlay = (id) => {
    setReplyOverlayOpen(id);
    setShareOpen(null);
  };

  // Close reply overlay
  const closeReplyOverlay = () => {
    setReplyOverlayOpen(null);
    setReplyInputs({});
  };

  const handleReplyInputChange = (reviewId, text) => {
    setReplyInputs((prev) => ({ ...prev, [reviewId]: text }));
  };

  const addReply = (reviewId) => {
    const text = replyInputs[reviewId]?.trim();
    if (!text) return setToastMsg('Reply cannot be empty');
    const newReply = { id: generateId(), text };
    setReplies((prev) => ({
      ...prev,
      [reviewId]: prev[reviewId] ? [...prev[reviewId], newReply] : [newReply],
    }));
    setReplyInputs((prev) => ({ ...prev, [reviewId]: '' }));
    setToastMsg('Reply added');
  };

  // Copy to clipboard with toast
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMsg('Copied to clipboard!');
    } catch {
      setToastMsg('Failed to copy');
    }
  };

  // Get review data by ID for overlay
  const currentReview = replyOverlayOpen
    ? reviewsData.find((r) => r.id === replyOverlayOpen)
    : null;

  return (
    <>
      <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black select-none leading-tight">
                Your Reviews
              </h2>
              <p className="text-gray-700 max-w-lg mt-1 select-none text-sm sm:text-base leading-relaxed">
                Share your thoughts, help others, and see what you’ve written.
              </p>
            </div>
          </div>

          {/* Sort */}
          <div className="flex justify-end">
            <select
              aria-label="Sort reviews"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="bg-white border border-gray-200 text-gray-900 rounded px-3 py-1 text-sm sm:text-base outline-none cursor-pointer select-none"
            >
              <option>Most Recent</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedReviews.map((review) => (
              <article
                key={review.id}
                tabIndex={0}
                aria-label={`Review by ${review.user} on ${review.product}`}
                className="bg-white p-5 rounded-xl shadow-lg cursor-default relative focus-visible:outline-black focus-visible:outline-2 focus-visible:outline-offset-2 select-none flex flex-col"
                style={{ minHeight: '280px' }} // Keep cards uniform height on smaller screens
              >
                {/* Product Image */}
                <img
                  src={review.productImage}
                  alt={review.product}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg shadow-lg pointer-events-none select-none"
                  draggable={false}
                  loading="lazy"
                />

                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt={`${review.user} avatar`}
                    className="w-10 h-10 rounded-full border-2 border-black object-cover select-none"
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <p className="text-base font-semibold flex items-center gap-1 truncate">
                      {review.user}
                      {review.verified && (
                        <CheckBadgeIcon
                          className="w-4 h-4 text-black flex-shrink-0"
                          title="Verified Buyer"
                          aria-label="Verified Buyer"
                        />
                      )}
                    </p>
                    <time
                      className="text-gray-600 text-xs"
                      dateTime={review.date}
                      title={new Date(review.date).toLocaleString()}
                    >
                      {new Date(review.date).toLocaleDateString()}
                    </time>
                  </div>
                </div>

                {/* Product & Rating */}
                <h3 className="text-lg font-bold mb-1 truncate">{review.product}</h3>
                <div
                  className="flex mb-3"
                  aria-label={`Rating: ${review.rating} out of 5 stars`}
                  role="img"
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-black' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-5 whitespace-pre-line text-sm sm:text-base flex-grow overflow-hidden">
                  {review.comment}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6 text-gray-700 select-none flex-wrap">
                  {/* Like */}
                  <button
                    aria-pressed={liked.includes(review.id)}
                    onClick={() => toggleLike(review.id)}
                    className="flex items-center gap-1 focus:outline-none cursor-pointer"
                    type="button"
                    tabIndex={-1}
                  >
                    {liked.includes(review.id) ? (
                      <HeartSolid className="w-5 h-5 text-black drop-shadow-lg" aria-hidden="true" />
                    ) : (
                      <HeartSolid className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        liked.includes(review.id)
                          ? 'text-black'
                          : 'hover:text-black transition'
                      }`}
                    >
                      {liked.includes(review.id) ? 'Liked' : 'Like'}
                    </span>
                  </button>

                  {/* Reply */}
                  <button
                    onClick={() => openReplyOverlay(review.id)}
                    className="flex items-center gap-1 focus:outline-none cursor-pointer"
                    type="button"
                    tabIndex={-1}
                    aria-label={`Reply to review by ${review.user}`}
                  >
                    <ArrowUturnLeftIcon className="w-5 h-5" aria-hidden="true" />
                    <span className="text-xs font-semibold hover:text-black transition select-none">
                      Reply
                    </span>
                  </button>

                  {/* Share */}
                  <div className="relative">
                    <button
                      onClick={() => toggleShare(review.id)}
                      aria-expanded={shareOpen === review.id}
                      aria-haspopup="true"
                      className="flex items-center gap-1 focus:outline-none cursor-pointer"
                      type="button"
                      tabIndex={-1}
                      aria-label={`Share review by ${review.user}`}
                    >
                      <ShareIcon className="w-5 h-5" aria-hidden="true" />
                      <span className="text-xs font-semibold hover:text-black transition select-none">
                        Share
                      </span>
                    </button>
                    {shareOpen === review.id && (
                      <ul
                        role="menu"
                        aria-label="Share platforms"
                        className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-20"
                      >
                        {sharePlatforms.map((platform) => (
                          <li key={platform.name}>
                            <a
                              href={platform.getUrl(window.location.href)}
                              target="_blank"
                              rel="noopener noreferrer"
                              role="menuitem"
                              className="flex items-center gap-2 px-3 py-2 hover:bg-black hover:text-black transition cursor-pointer select-none whitespace-nowrap"
                              onClick={() => setShareOpen(null)}
                            >
                              {platformIcons[platform.name]}
                              {platform.name}
                            </a>
                          </li>
                        ))}
                        <li>
                          <button
                            onClick={() => {
                              copyToClipboard(window.location.href);
                              setShareOpen(null);
                            }}
                            className="flex items-center gap-2 px-3 py-2 w-full hover:bg-black hover:text-black transition cursor-pointer select-none text-left"
                            role="menuitem"
                          >
                            📋 Copy Link
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Reply Overlay */}
      {replyOverlayOpen && currentReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reply-overlay-title"
          className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-[100] flex flex-col max-w-4xl mx-auto left-0 right-0 my-6 rounded-lg shadow-xl overflow-hidden
          sm:my-12 sm:rounded-xl"
        >
          <header className="flex justify-between items-center bg-white px-6 py-4 border-b border-black">
            <h2
              id="reply-overlay-title"
              className="text-xl font-bold text-black truncate max-w-[80vw]"
              tabIndex={0}
            >
              Reply to {currentReview.user}'s Review
            </h2>
            <button
              onClick={closeReplyOverlay}
              aria-label="Close reply overlay"
              className="text-black hover:text-black focus:outline-black"
              type="button"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </header>

          <main className="flex-grow overflow-y-auto p-6 bg-white text-gray-900 flex flex-col">
            {/* Review Details */}
            <article className="mb-6">
              <div className="flex items-center gap-4 mb-4 flex-wrap sm:flex-nowrap">
                <img
                  src={currentReview.avatar}
                  alt={`${currentReview.user} avatar`}
                  className="w-14 h-14 rounded-full border-2 border-black object-cover select-none flex-shrink-0"
                  draggable={false}
                />
                <div className="min-w-0">
                  <p className="text-lg font-semibold flex items-center gap-1 truncate">
                    {currentReview.user}
                    {currentReview.verified && (
                      <CheckBadgeIcon
                        className="w-5 h-5 text-black flex-shrink-0"
                        title="Verified Buyer"
                        aria-label="Verified Buyer"
                      />
                    )}
                  </p>
                  <time
                    className="text-gray-600 text-sm truncate block"
                    dateTime={currentReview.date}
                    title={new Date(currentReview.date).toLocaleString()}
                  >
                    {new Date(currentReview.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 truncate">{currentReview.product}</h3>
              <div
                className="flex mb-4"
                aria-label={`Rating: ${currentReview.rating} out of 5 stars`}
                role="img"
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentReview.rating ? 'text-black' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 whitespace-pre-line text-base">{currentReview.comment}</p>
            </article>

            {/* Replies List */}
            <section
              aria-label="Replies"
              className="space-y-3 max-h-[40vh] overflow-y-auto border-t border-black pt-4 mb-6"
            >
              {(replies[currentReview.id] && replies[currentReview.id].length > 0) ? (
                replies[currentReview.id].map((rep) => (
                  <div
                    key={rep.id}
                    className="bg-white rounded-md p-3 text-sm text-gray-700 select-text break-words"
                    tabIndex={-1}
                    aria-label={`Reply: ${rep.text}`}
                  >
                    {rep.text}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic">No replies yet. Be the first to reply!</p>
              )}
            </section>

            {/* Reply Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addReply(currentReview.id);
              }}
              className="flex gap-3 flex-wrap sm:flex-nowrap"
            >
              <input
                type="text"
                aria-label={`Reply input for review by ${currentReview.user}`}
                placeholder="Write your reply..."
                className="flex-grow rounded-md border border-gray-200 bg-white text-gray-900 px-3 py-2 text-sm focus:ring-black focus:border-black outline-none"
                value={replyInputs[currentReview.id] || ''}
                onChange={(e) => handleReplyInputChange(currentReview.id, e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="bg-black hover:bg-black text-black font-semibold px-5 rounded text-sm select-none transition focus:outline-none"
              >
                Send
              </button>
            </form>
          </main>
        </div>
      )}

      {/* Toast */}
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}
    </>
  );
};

export default ProfileReviews;
