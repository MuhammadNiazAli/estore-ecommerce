'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  Star as StarIcon,
} from 'lucide-react';

// Star component with fill and stroke based on 'filled' prop
const Star = ({ filled }) => (
  <StarIcon
    size={16}
    className={filled ? 'text-black fill-black' : 'text-black'}
  />
);

const filterOptions = [
  'All Reviews',
  '5 Stars',
  '4 Stars',
  '3 Stars',
  '2 Stars',
  '1 Star',
  'Photos Only',
  'Verified Buyers',
];

// Sample review data with extra details and initial likes/dislikes
const reviewsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    reviewTitle: 'Exceeded all expectations!',
    verified: true,
    recommend: true,
    text: 'Absolutely love this product! Highly recommend to everyone.',
    pros: ['Soft fabric', 'Great fit', 'Stylish design'],
    cons: ['None so far'],
    brand: 'LuxWear',
    location: 'New York, USA',
    product: 'Silk Hoodie',
    purchaseVerifiedDate: '2025-06-20',
    date: '2025-07-01',
    likes: 12,
    dislikes: 1,
    helpfulCount: 15,
    commentsCount: 4,
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    videos: [],
    badges: ['Top Reviewer', 'Verified Buyer'],
    response: {
      responder: 'LuxWear Support',
      text: 'Thank you, Sarah! We’re thrilled you love the Silk Hoodie. Looking forward to serving you again.',
      date: '2025-07-02',
    },
  },
  {
    id: 2,
    name: 'Mark Thompson',
    rating: 4,
    reviewTitle: 'Good quality and fast delivery',
    verified: true,
    recommend: true,
    text: 'Good quality and fast delivery, will buy again.',
    pros: ['Excellent sound quality', 'Comfortable ear pads'],
    cons: ['Battery life could be better'],
    brand: 'TechPro',
    location: 'Berlin, Germany',
    product: 'Noise-Canceling Headphones',
    purchaseVerifiedDate: '2025-06-15',
    date: '2025-06-28',
    likes: 6,
    dislikes: 0,
    helpfulCount: 8,
    commentsCount: 2,
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    images: [],
    videos: [],
    badges: ['Verified Buyer'],
    response: null,
  },
  {
    id: 3,
    name: 'Jessica Lee',
    rating: 3,
    reviewTitle: 'Meets basic expectations',
    verified: false,
    recommend: false,
    text: 'It’s okay, met my expectations but nothing extraordinary.',
    pros: ['Eco-friendly material', 'Lightweight'],
    cons: ['Not very durable', 'Small size'],
    brand: 'BasicTrend',
    location: 'Tokyo, Japan',
    product: 'Eco Tote Bag',
    purchaseVerifiedDate: null,
    date: '2025-07-03',
    likes: 2,
    dislikes: 4,
    helpfulCount: 3,
    commentsCount: 1,
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    ],
    videos: ['https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'],
    badges: [],
    response: null,
  },
  {
    id: 4,
    name: 'John Smith',
    rating: 1,
    reviewTitle: 'Damaged product on arrival',
    verified: true,
    recommend: false,
    text: 'Very disappointed, product arrived damaged.',
    pros: [],
    cons: ['Damaged on delivery', 'Poor packaging'],
    brand: 'MegaStore',
    location: 'London, UK',
    product: 'Wall Clock',
    purchaseVerifiedDate: '2025-06-10',
    date: '2025-06-22',
    likes: 0,
    dislikes: 7,
    helpfulCount: 0,
    commentsCount: 3,
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    images: [],
    videos: [],
    badges: ['Verified Buyer'],
    response: {
      responder: 'MegaStore Customer Service',
      text: 'We sincerely apologize for the inconvenience, John. Please contact our support for a replacement.',
      date: '2025-06-23',
    },
  },
];


const FilterButton = ({ filter, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
      focus:outline-none focus-visible:ring-2 focus-visible:ring-black
      ${isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
    aria-pressed={isActive}
  >
    <AnimatePresence>
      {isActive && (
        <motion.span
          layoutId="activeFilter"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-full shadow-lg z-0"
        />
      )}
    </AnimatePresence>
    <span className="relative z-10">{filter}</span>
  </button>
);

const ReviewCard = ({ review }) => {
  // Local like/dislike state for this card
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      if (disliked) {
        setDisliked(false);
        setDislikes(dislikes - 1);
      }
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      }
    } else {
      setDislikes(dislikes - 1);
    }
    setDisliked(!disliked);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-md space-y-4"
    >
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={`${review.name} profile`}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex-grow">
          <h4 className="text-gray-900 font-semibold">{review.name}</h4>
          <div className="flex gap-0.5 mt-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} filled={i <= review.rating} />
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-1">
            {review.brand} &bull; {review.product} &bull; {review.location}
          </p>
        </div>
        {review.verified && (
          <CheckCircle
            className="text-black"
            title="Verified Buyer"
            aria-label="Verified Buyer"
            size={18}
          />
        )}
      </div>

      <p className="text-gray-700 text-sm">{review.text}</p>
      <p className="text-xs text-gray-500">Reviewed on: {review.date}</p>

      {review.images.length > 0 && (
        <div
          className="flex gap-3 overflow-x-auto scrollbar-thin"
          style={{
            scrollbarColor: '#ffffff #ffffff', // thumb #ffffff (gray-900), track #ffffff (gray-950)
          }}
        >
          <style>{`
            /* For Webkit browsers */
            div::-webkit-scrollbar {
              height: 4px;
            }
            div::-webkit-scrollbar-track {
              background: #ffffff; /* gray-950 */
            }
            div::-webkit-scrollbar-thumb {
              background-color: #ffffff; /* gray-900 */
              border-radius: 9999px;
              border: 2px solid #ffffff;
            }

            /* For Firefox */
            div {
              scrollbar-width: thin;
              scrollbar-color: #ffffff #ffffff;
            }
          `}</style>
          {review.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Review image ${i + 1}`}
              className="w-28 h-20 rounded-lg object-cover flex-shrink-0 hover:scale-105 transition-transform"
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-6 pt-2 border-t border-gray-200">
        <button
          onClick={handleLike}
          className={`flex items-center text-sm gap-1 transition-colors duration-200 ${
            liked ? 'text-black' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-pressed={liked}
          aria-label="Like review"
        >
          <ThumbsUp size={16} />
          <span>{likes}</span>
        </button>

        <button
          onClick={handleDislike}
          className={`flex items-center text-sm gap-1 transition-colors duration-200 ${
            disliked ? 'text-black' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-pressed={disliked}
          aria-label="Dislike review"
        >
          <ThumbsDown size={16} />
          <span>{dislikes}</span>
        </button>
      </div>
    </motion.div>
  );
};

const ReviewFiltersWithContent = () => {
  const [activeFilter, setActiveFilter] = useState('All Reviews');

  // Filter reviews by selected filter
  const filteredReviews = reviewsData.filter((review) => {
    switch (activeFilter) {
      case 'All Reviews':
        return true;
      case 'Photos Only':
        return review.images.length > 0;
      case 'Verified Buyers':
        return review.verified;
      case '5 Stars':
        return review.rating === 5;
      case '4 Stars':
        return review.rating === 4;
      case '3 Stars':
        return review.rating === 3;
      case '2 Stars':
        return review.rating === 2;
      case '1 Star':
        return review.rating === 1;
      default:
        return true;
    }
  });

  return (
    <section className="w-full bg-white py-14 px-4 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-start gap-3 mb-12">
        {filterOptions.map((filter) => (
          <FilterButton
            key={filter}
            filter={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-600 col-span-full text-center"
            >
              No reviews match this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReviewFiltersWithContent;
