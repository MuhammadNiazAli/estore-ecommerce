'use client';

import React, { useState } from 'react';
import { Star, BadgeCheck, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

const ReviewCard = ({
  name = 'John Doe',
  rating = 5,
  date = 'July 5, 2025',
  purchaseVerifiedDate,
  text = 'This product exceeded my expectations!',
  verified = true,
  avatar = '',
  reviewTitle,
  pros = [],
  cons = [],
  likes = 0,
  dislikes = 0,
  badges = [],
  images = [],
  response = null,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };
  const toggleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  const getInitials = (fullName) => {
    const words = fullName.trim().split(' ');
    return words.length === 1 ? words[0][0] : words[0][0] + words[words.length - 1][0];
  };

  // To ensure consistent pros and cons length (3 each) for layout uniformity
  const fixedPros = [...pros];
  while (fixedPros.length < 3) fixedPros.push('None');
  const fixedCons = [...cons];
  while (fixedCons.length < 3) fixedCons.push('None');

  // To ensure at least 2 images (using placeholder if needed)
  const fixedImages = [...images];
  const placeholderImg = 'https://via.placeholder.com/150?text=No+Image';
  while (fixedImages.length < 2) fixedImages.push(placeholderImg);

  return (
    <article
      className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 text-white h-full flex flex-col transition-transform hover:scale-[1.02]"
      aria-label={`Review by ${name}, rated ${rating} out of 5 stars`}
    >
      <header className="flex items-center gap-4 mb-3">
        {avatar ? (
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-amber-500 text-gray-900 font-bold flex items-center justify-center text-xl select-none">
            {getInitials(name)}
          </div>
        )}

        <div className="flex flex-col flex-grow min-w-0">
          <div className="flex items-center gap-2 font-semibold text-white">
            <h3 className="text-lg truncate">{name}</h3>
            {verified && (
              <span
                className="flex items-center text-amber-400 text-xs font-medium whitespace-nowrap"
                title="Verified Buyer"
              >
                <BadgeCheck className="w-4 h-4 mr-1 flex-shrink-0" />
                Verified Buyer
              </span>
            )}
          </div>
          <time
            dateTime={new Date(date).toISOString()}
            className="text-sm text-gray-400 whitespace-nowrap"
          >
            Reviewed: {new Date(date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {purchaseVerifiedDate && (
            <time
              dateTime={new Date(purchaseVerifiedDate).toISOString()}
              className="text-xs text-gray-500 mt-0.5"
              title="Purchase Verified Date"
            >
              Purchased on: {new Date(purchaseVerifiedDate).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}

          {/* Badges */}
          <div className="mt-1 flex flex-wrap gap-1 min-h-[1.25rem]">
            {/* Reserve space even if no badges for consistent height */}
            {badges.length > 0
              ? badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-block bg-amber-600 text-xs px-2 py-0.5 rounded-full font-semibold"
                  >
                    {badge}
                  </span>
                ))
              : <span className="inline-block text-transparent px-2 py-0.5">None</span>}
          </div>
        </div>
      </header>

      {/* Star Rating */}
      <div className="flex items-center gap-1 text-amber-400 mb-3" aria-label={`Rating: ${rating} out of 5`}>
        {[1, 2, 3, 4, 5].map((i) => {
          const fillPercent = i <= rating ? 100 : i - rating < 1 ? (rating % 1) * 100 : 0;
          return (
            <Star
              key={i}
              size={16}
              fill={`url(#grad-${i})`}
              stroke="currentColor"
              style={{
                fillOpacity: fillPercent / 100,
              }}
              className="stroke-amber-400"
            />
          );
        })}
      </div>

      {reviewTitle && (
        <h4 className="text-lg font-semibold text-amber-300 mb-2 truncate" title={reviewTitle}>
          {reviewTitle}
        </h4>
      )}

      {/* Review Text */}
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow mb-3">{text}</p>

      {/* Pros and Cons */}
      <div className="mb-3 flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[120px]">
          <h5 className="font-semibold text-amber-400 mb-1">Pros</h5>
          <ul className="list-disc list-inside text-green-400 text-sm space-y-0.5">
            {fixedPros.map((pro, i) => (
              <li key={i} title={pro}>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[120px]">
          <h5 className="font-semibold text-amber-400 mb-1">Cons</h5>
          <ul className="list-disc list-inside text-red-400 text-sm space-y-0.5">
            {fixedCons.map((con, i) => (
              <li key={i} title={con}>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review Images */}
      <div className="mb-3 grid grid-cols-2 gap-2 max-h-36 overflow-hidden rounded-md cursor-pointer">
        {fixedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Review image ${i + 1}`}
            loading="lazy"
            className="w-full h-16 object-cover rounded-md hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>

      {/* Response from support */}
      {response ? (
        <blockquote className="border-l-4 border-amber-600 pl-4 italic text-gray-400 text-sm mb-3 select-text">
          <p>{response.text}</p>
          <footer className="mt-1 text-xs font-semibold text-amber-400">
            — {response.responder},{' '}
            <time dateTime={new Date(response.date).toISOString()}>
              {new Date(response.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </footer>
        </blockquote>
      ) : (
        // Maintain space even if no response, for consistent height
        <div className="mb-3 h-[4.5rem]" />
      )}

      {/* Likes / Dislikes */}
      <footer className="mt-auto flex items-center gap-4 text-gray-400 text-sm select-none">
        <button
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={`Like review by ${name}`}
          className={`flex items-center gap-1 hover:text-amber-400 transition-colors ${
            liked ? 'text-amber-400' : ''
          }`}
          type="button"
        >
          <ThumbsUp className="w-5 h-5" />
          <span>{likes + (liked ? 1 : 0) - (liked && disliked ? 1 : 0)}</span>
        </button>

        <button
          onClick={toggleDislike}
          aria-pressed={disliked}
          aria-label={`Dislike review by ${name}`}
          className={`flex items-center gap-1 hover:text-red-500 transition-colors ${
            disliked ? 'text-red-500' : ''
          }`}
          type="button"
        >
          <ThumbsDown className="w-5 h-5" />
          <span>{dislikes + (disliked ? 1 : 0) - (disliked && liked ? 1 : 0)}</span>
        </button>

        <span className="flex items-center gap-1">
          <MessageSquare className="w-5 h-5" />
          {/* Optionally add comments count here */}
        </span>
      </footer>
    </article>
  );
};

const ReviewsList = ({ reviews }) => {
  return (
    <section
      aria-label="Customer Reviews"
      className="max-w-7xl mx-auto my-[-130px] mb-[-15px] px-4 sm:px-6 py-16 sm:py-20 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-10 text-center drop-shadow-md">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-400">No reviews available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      )}
    </section>
  );
};

const sampleReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    reviewTitle: 'Exceeded all expectations!',
    verified: true,
    purchaseVerifiedDate: '2025-06-20',
    date: '2025-07-01',
    text: 'Absolutely love this product! Highly recommend to everyone.',
    pros: ['Soft fabric', 'Great fit', 'Stylish design'],
    cons: ['None'],
    likes: 12,
    dislikes: 1,
    badges: ['Top Reviewer', 'Verified Buyer'],
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'Thank you, Sarah! We’re thrilled you love the Silk Hoodie. Looking forward to serving you again.',
      date: '2025-07-02',
    },
  },
  {
    id: 2,
    name: 'Michael Lee',
    rating: 4,
    reviewTitle: 'Very good, minor issues.',
    verified: true,
    purchaseVerifiedDate: '2025-06-18',
    date: '2025-07-03',
    text: 'The quality is top-notch, though the delivery was delayed by two days.',
    pros: ['Premium materials', 'Elegant design'],
    cons: ['Slow shipping'],
    likes: 8,
    dislikes: 3,
    badges: ['Verified Buyer'],
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    images: [
      'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'Apologies for the delay, Michael. We’ll work to improve logistics. Thank you for your feedback!',
      date: '2025-07-04',
    },
  },
  {
    id: 3,
    name: 'Emily Carter',
    rating: 3,
    reviewTitle: 'Average, not bad but not great',
    verified: true,
    purchaseVerifiedDate: '2025-06-10',
    date: '2025-07-05',
    text: 'The style is nice, but the sizing was off and customer service was slow to respond.',
    pros: ['Nice look', 'Color matches description'],
    cons: ['Size runs small', 'Support response was slow'],
    likes: 4,
    dislikes: 6,
    badges: ['Verified Buyer'],
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    images: [
      'https://images.unsplash.com/photo-1593032465171-d750089bc65c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603575448364-e7dc7b6de5c9?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'Thanks for the honest feedback, Emily. We’re reviewing our size charts and customer service process.',
      date: '2025-07-06',
    },
  },
  {
    id: 4,
    name: 'Daniel Thompson',
    rating: 5,
    reviewTitle: 'Perfect for daily use!',
    verified: true,
    purchaseVerifiedDate: '2025-06-15',
    date: '2025-07-06',
    text: 'It fits perfectly, looks amazing, and feels even better. Great value!',
    pros: ['True to size', 'Comfortable all-day wear'],
    cons: ['Limited color options'],
    likes: 15,
    dislikes: 0,
    badges: ['Top Reviewer'],
    avatar: 'https://randomuser.me/api/portraits/men/63.jpg',
    images: [
      'https://images.unsplash.com/photo-1618354691249-4b4e3d4fef00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614287969135-31bd063e25b1?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'We’re happy to hear this, Daniel! Thanks for choosing us again.',
      date: '2025-07-07',
    },
  },
  {
    id: 5,
    name: 'Ayesha Malik',
    rating: 4,
    reviewTitle: 'Looks expensive, feels luxurious',
    verified: true,
    purchaseVerifiedDate: '2025-06-12',
    date: '2025-07-07',
    text: 'Everyone thinks I spent a fortune on this. It’s soft, elegant, and affordable.',
    pros: ['Affordable', 'Luxury finish', 'Durable fabric'],
    cons: ['Slightly heavy'],
    likes: 11,
    dislikes: 2,
    badges: ['Verified Buyer'],
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    images: [
      'https://images.unsplash.com/photo-1600181956921-5c2a7b1b3f5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'Thanks Ayesha! You’ve got a great eye for style.',
      date: '2025-07-08',
    },
  },
  {
    id: 6,
    name: 'Carlos Rivera',
    rating: 2,
    reviewTitle: 'Didn’t meet my expectations',
    verified: true,
    purchaseVerifiedDate: '2025-06-08',
    date: '2025-07-08',
    text: 'The material feels cheap and there were loose threads. Hoping for better quality.',
    pros: ['Fast shipping'],
    cons: ['Low fabric quality', 'Unfinished stitching'],
    likes: 2,
    dislikes: 10,
    badges: ['Verified Buyer'],
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    images: [
      'https://images.unsplash.com/photo-1578675437406-1b821c32c87a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583227767325-d1a429b015a3?auto=format&fit=crop&w=800&q=80',
    ],
    response: {
      responder: 'LuxWear Support',
      text: 'We’re sorry to hear that, Carlos. We’ve passed this to our quality team for review.',
      date: '2025-07-09',
    },
  },
];

const ReviewsSection = () => {
  return <ReviewsList reviews={sampleReviews} />;
};

export default ReviewsSection;
