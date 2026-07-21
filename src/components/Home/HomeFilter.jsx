'use client';

import React, { useState } from 'react';
import {
  FiHeart,
  FiEye,
  FiShoppingCart,
  FiStar,
  FiMessageCircle,
  FiX,
  FiSend,
} from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const FILTER_OPTIONS = ['All', 'Clothing', 'Accessories', 'Electronic'];

const animationStates = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function ShopByCategory() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [replyOpenIndex, setReplyOpenIndex] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);

  // Filtered product list based on selected category
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((item) => item.category === activeCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Handle adding a new review to the current product
  function submitReview() {
    if (!reviewText.trim() || reviewRating === 0) return;

    const newReview = {
      id: Date.now(),
      text: reviewText.trim(),
      likes: 0,
      time: 'Just now',
      replies: [],
      stars: reviewRating,
    };

    setCurrentProduct((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        comments: [newReview, ...prev.comments],
      };
    });

    setReviewText('');
    setReviewRating(0);
  }

  // Add reply to a specific comment
  function submitReply(commentId, replyText) {
    if (!replyText.trim()) return;

    setCurrentProduct((prev) => {
      if (!prev) return prev;

      const updatedComments = prev.comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                text: replyText.trim(),
                likes: 0,
                time: 'Just now',
              },
            ],
          };
        }
        return comment;
      });

      return {
        ...prev,
        comments: updatedComments,
      };
    });

    setReplyOpenIndex(null);
  }

  return (
    <section className="bg-gradient-to-b from-white mb-[-30px] text-gray-900 px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 my-[-10px] text-center text-amber-600">
  Shop by Category
</h2>


        {/* Filter buttons container */}
        <div
  className="
    grid grid-cols-2 gap-3 mb-12
    sm:flex sm:flex-nowrap sm:justify-center
  "
  aria-label="Product category filters"
  role="tablist"
>
  {FILTER_OPTIONS.map((category) => {
    const isSelected = activeCategory === category;
    return (
      <button
        key={category}
        role="tab"
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => {
          setActiveCategory(category);
          setVisibleCount(3);
        }}
        className={`
          w-full  /* each grid column fills its slot */
          sm:w-auto
          px-4 py-2
          rounded-full
          text-sm font-semibold
          border
          transition-shadow duration-300
          ${
            isSelected
              ? 'bg-amber-600 text-black border-amber-600 shadow-lg'
              : 'border-gray-200 text-gray-900 hover:bg-gray-500 hover:text-black hover:shadow-md'
          }
        `}
      >
        {category}
      </button>
    );
  })}
</div>


        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-3 gap-7"
          aria-live="polite"
        >
            {/* Scrollbar styles for dark mode */}
      <style>{`
        #review-dialog::-webkit-scrollbar {
          width: 8px;
        }
        #review-dialog::-webkit-scrollbar-track {
          background: #ffffff; /* Tailwind gray-900 */
        }
        #review-dialog::-webkit-scrollbar-thumb {
          background-color: #ffffff; /* Tailwind gray-950 */
          border-radius: 9999px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        /* Firefox scrollbar */
        #review-dialog {
          scrollbar-width: thin;
          scrollbar-color: #ffffff #ffffff;
        }
      `}</style>
          <AnimatePresence>
            {visibleProducts.map((product) => (
              <motion.article
                key={product.id}
                variants={animationStates}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ duration: 0.3 }}
                className="relative bg-white/70 border border-gray-50/10 text-gray-800 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Action buttons on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link href="/wishlist" passHref>
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-amber-600 transition cursor-pointer"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart className="text-black text-base" />
                    </button>
                  </Link>
                  <Link href={`/product`} passHref>
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-amber-600 transition cursor-pointer"
                      aria-label={`View details of ${product.title}`}
                    >
                      <FiEye className="text-black text-base" />
                    </button>
                  </Link>
                  <Link href="/cart" passHref>
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-amber-600 transition cursor-pointer"
                      aria-label="Add to cart"
                    >
                      <FiShoppingCart className="text-black text-base" />
                    </button>
                  </Link>
                </div>

                {/* Product image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>

                  <div
                    className="flex items-center gap-1 text-amber-600 text-sm"
                    aria-label={`Rating: ${product.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < product.rating
                            ? 'fill-current text-amber-600'
                            : 'opacity-30'
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 font-bold">{product.price}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiMessageCircle className="text-lg" />
                    <button
                      onClick={() => setCurrentProduct(product)}
                      className="hover:underline text-amber-800"
                      aria-haspopup="dialog"
                      aria-controls="review-dialog"
                      aria-expanded={currentProduct?.id === product.id}
                    >
                      Read / Write Review
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((count) => count + 3)}
              className="bg-amber-600 text-black font-semibold px-8 py-3 rounded shadow hover:bg-amber-700 transition"
              aria-label="Show more products"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Reviews modal */}
      <AnimatePresence>
      {currentProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/50 backdrop-blur-sm flex justify-center items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-dialog-title"
          id="review-dialog"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            // Updated styles here:
            className="
              w-full max-w-2xl
              bg-white bg-opacity-70
              backdrop-blur-md
              text-gray-900
              p-6 rounded-xl
              max-h-[85vh]
              overflow-y-auto
              relative
              scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-950
              scrollbar-thumb-rounded
              "
            style={{
              scrollbarGutter: 'stable', // avoid layout shift on scrollbar appear
            }}
          >
            <button
              onClick={() => {
                setCurrentProduct(null);
                setReplyOpenIndex(null);
                setReviewText('');
                setReviewRating(0);
              }}
              className="absolute top-3 right-3 text-gray-900 text-xl hover:text-amber-600 transition"
              aria-label="Close reviews"
            >
              <FiX />
            </button>

            <h3
              className="text-xl font-bold mb-4"
              id="review-dialog-title"
            >
              Reviews for {currentProduct.title}
            </h3>

            {/* New review input */}
            <section className="mb-6">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                className="
                  w-full
                  bg-white bg-opacity-60
                  border border-gray-200
                  p-3 rounded
                  text-sm
                  text-gray-900
                  mb-2
                  focus:outline-none focus:ring-2 focus:ring-amber-600
                  resize-none
                "
                rows={4}
                aria-label="Write your review"
              />
              <div
                className="flex items-center gap-1 mb-3"
                role="radiogroup"
                aria-label="Star rating"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    onClick={() => setReviewRating(star)}
                    className={`cursor-pointer transition-colors ${
                      star <= reviewRating
                        ? 'fill-amber-600 text-amber-600'
                        : 'text-gray-600'
                    }`}
                    role="radio"
                    aria-checked={star === reviewRating}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setReviewRating(star);
                    }}
                    aria-label={`${star} Star${star > 1 ? 's' : ''}`}
                  />
                ))}
              </div>
              <button
                onClick={submitReview}
                className="bg-amber-600 text-black px-4 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
                disabled={!reviewText.trim() || reviewRating === 0}
                aria-disabled={!reviewText.trim() || reviewRating === 0}
              >
                Submit Review
              </button>
            </section>

            {/* Existing reviews */}
            <section>
              <h4 className="text-lg font-semibold mb-3">
                What others are saying
              </h4>

              {currentProduct.comments.length === 0 && (
                <p className="text-gray-600 text-sm">No reviews yet.</p>
              )}

              {currentProduct.comments.map((comment, idx) => (
                <article
                  key={comment.id}
                  className="mb-6 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <header className="flex items-center justify-between mb-1">
                    <div
                      className="flex items-center gap-2 text-amber-600 text-sm"
                      aria-label={`Rating: ${
                        comment.stars ?? currentProduct.rating
                      } out of 5 stars`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={
                            i <
                            (comment.stars ?? currentProduct.rating)
                              ? 'fill-current'
                              : 'opacity-30'
                          }
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <time className="text-xs text-gray-500">{comment.time}</time>
                  </header>

                  <p className="text-sm mb-2">{comment.text}</p>

                  <footer className="flex gap-6 text-xs text-gray-600 items-center">
                    <button
                      type="button"
                      className="cursor-pointer flex items-center gap-1 hover:text-amber-600 transition"
                      aria-label={`${comment.likes} likes`}
                    >
                      <FiHeart />
                      <span>{comment.likes}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setReplyOpenIndex((current) => (current === idx ? null : idx))
                      }
                      className="cursor-pointer hover:underline"
                      aria-expanded={replyOpenIndex === idx}
                      aria-controls={`reply-input-${comment.id}`}
                    >
                      Reply
                    </button>
                  </footer>

                  {/* Reply input */}
                  {replyOpenIndex === idx && (
                    <ReplyInput
                      commentId={comment.id}
                      onSubmit={submitReply}
                    />
                  )}

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-3 ml-6 border-l border-gray-200 pl-4 space-y-3">
                      {comment.replies.map((reply) => (
                        <article
                          key={reply.id}
                          className="text-sm text-gray-600"
                        >
                          <p>{reply.text}</p>
                          <time className="text-xs text-gray-500">{reply.time}</time>
                        </article>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </section>
  );
}

// Reply input component
function ReplyInput({ commentId, onSubmit }) {
  const [replyText, setReplyText] = useState('');

  function handleSend() {
    if (replyText.trim()) {
      onSubmit(commentId, replyText);
      setReplyText('');
    }
  }

  return (
    <div className="mt-2 flex items-center gap-2" id={`reply-input-${commentId}`}>
      <input
        type="text"
        placeholder="Write a reply..."
        className="flex-1 border px-3 py-1 text-sm rounded"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        aria-label="Write a reply"
      />
      <button
        onClick={handleSend}
        className="text-black text-xl p-1 hover:text-amber-600 transition"
        aria-label="Send reply"
      >
        <FiSend />
      </button>
    </div>
  );
}

const products = [
  {
    id: 1,
    title: 'Modern Shirt',
    description: 'A breathable, modern slim-fit shirt made with premium cotton. Ideal for both office and casual outings.',
    category: 'Clothing',
    price: '$49.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=411&auto=format&fit=crop',
    comments: [
      { id: 1, text: 'Fabric is soft and premium. Wore it all day at work and felt great.', likes: 12, time: '2 days ago', replies: [{ id: 101, text: 'Agreed! It didn’t wrinkle much either.', likes: 2 }] },
      { id: 2, text: 'Color is exactly like shown. Fits true to size.', likes: 6, time: '12 hours ago', replies: [] }
    ]
  },
  {
    id: 2,
    title: 'Smart Jacket',
    description: 'Windproof and water-resistant smart jacket with thermal insulation. Built for unpredictable weather.',
    category: 'Clothing',
    price: '$89.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=387&auto=format&fit=crop',
    comments: [
      { id: 3, text: 'Really lightweight but super warm. Feels futuristic!', likes: 14, time: '1 day ago', replies: [] },
      { id: 4, text: 'Loved the hidden pockets. Great for travel.', likes: 8, time: '6 hours ago', replies: [{ id: 102, text: 'Oh yes! Even fits my passport.', likes: 1 }] }
    ]
  },
  {
    id: 3,
    title: 'Streetwear Hoodie',
    description: 'Trendy street-style hoodie with fleece inner lining and oversized fit.',
    category: 'Clothing',
    price: '$69.99',
    rating: 4,
    image: 'https://plus.unsplash.com/premium_photo-1675253527708-f07bf2f0d638?q=80&w=387&auto=format&fit=crop',
    comments: [
      { id: 5, text: 'Looks amazing with jeans. Soft inside and warm.', likes: 10, time: '3 days ago', replies: [] },
      { id: 6, text: 'Good hoodie. Wish it had more color options.', likes: 3, time: '8 hours ago', replies: [] }
    ]
  },
  {
    id: 4,
    title: 'Casual T-shirt',
    description: 'Comfortable round-neck t-shirt with durable stitch. Great for everyday wear.',
    category: 'Clothing',
    price: '$24.99',
    rating: 3,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=436&auto=format&fit=crop',
    comments: [
      { id: 7, text: 'Good basic t-shirt. Slightly loose but comfy.', likes: 5, time: '2 days ago', replies: [] },
      { id: 8, text: 'Material is okay. Great for casual lounging.', likes: 2, time: '4 hours ago', replies: [] }
    ]
  },
  {
    id: 5,
    title: 'Wool Sweater',
    description: 'Classic wool sweater to keep you warm in the cold. Perfect layering piece.',
    category: 'Clothing',
    price: '$59.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=772&auto=format&fit=crop',
    comments: [
      { id: 9, text: 'Cozy and stylish. Wore it on a snowy trip and it held up perfectly.', likes: 11, time: '5 days ago', replies: [{ id: 103, text: 'Did you layer it with anything?', likes: 1 }] },
      { id: 10, text: 'Color looks richer in real life. Love it!', likes: 7, time: '20 hours ago', replies: [] }
    ]
  },
  {
    id: 6,
    title: 'Minimal Shirt',
    description: 'Clean lines, lightweight fabric — this minimal shirt defines smart simplicity.',
    category: 'Clothing',
    price: '$45.00',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?q=80&w=436&auto=format&fit=crop',
    comments: [
      { id: 11, text: 'Perfect for summer meetings. Very breathable.', likes: 8, time: '1 day ago', replies: [] },
      { id: 12, text: 'Sleek and minimal. Just what I wanted.', likes: 4, time: '6 hours ago', replies: [] }
    ]
  },
  {
    id: 7,
    title: 'Elegant Watch',
    description: 'Luxury timepiece with genuine leather strap and stainless steel casing. Water-resistant.',
    category: 'Accessories',
    price: '$199.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506169894395-36397e4aaee4?q=80&w=870&auto=format&fit=crop',
    comments: [
      { id: 13, text: 'Looks like a $500+ watch. Premium finish.', likes: 10, time: '2 days ago', replies: [] },
      { id: 14, text: 'Great gift idea. Came in a classy box too.', likes: 5, time: '4 hours ago', replies: [] }
    ]
  },
  {
    id: 8,
    title: 'Bracelet Combo',
    description: 'Set of 3 bracelets — mix of leather, chain, and woven styles. Unisex and adjustable.',
    category: 'Accessories',
    price: '$29.99',
    rating: 3,
    image: 'https://images.unsplash.com/photo-1551533257-bbd74dff1f8a?q=80&w=435&auto=format&fit=crop',
    comments: [
      { id: 15, text: 'The chain one is really solid. Good variety overall.', likes: 6, time: '1 day ago', replies: [] },
      { id: 16, text: 'One bracelet broke after a week but others are nice.', likes: 2, time: '3 hours ago', replies: [] }
    ]
  },
  {
    id: 9,
    title: 'Trendy Sunglasses',
    description: 'UV-protected lens and lightweight frame. Adds instant cool to any look.',
    category: 'Accessories',
    price: '$49.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=580&auto=format&fit=crop',
    comments: [
      { id: 17, text: 'Got so many compliments wearing these.', likes: 9, time: '3 days ago', replies: [] },
      { id: 18, text: 'Feels light and blocks glare well. Great for road trips.', likes: 5, time: '6 hours ago', replies: [] }
    ]
  },
  {
    id: 10,
    title: 'Leather Bag',
    description: 'Premium leather messenger bag with laptop compartment and organizer pockets.',
    category: 'Accessories',
    price: '$129.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=859&auto=format&fit=crop',
    comments: [
      { id: 19, text: 'Looks sleek and fits my 15" laptop easily.', likes: 8, time: '1 day ago', replies: [] },
      { id: 20, text: 'Sturdy zippers and soft interior. Perfect for work.', likes: 3, time: '5 hours ago', replies: [] }
    ]
  },
  {
    id: 11,
    title: 'Luxury Belt',
    description: 'Genuine leather belt with brushed metal buckle. Great for formal wear.',
    category: 'Accessories',
    price: '$59.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=387&auto=format&fit=crop',
    comments: [
      { id: 21, text: 'Finish is smooth and elegant. Not too shiny.', likes: 6, time: '4 days ago', replies: [] },
      { id: 22, text: 'Feels sturdy and high-end. Using it daily.', likes: 3, time: '2 hours ago', replies: [] }
    ]
  },
  {
    id: 12,
    title: 'Silver Necklace',
    description: 'Sterling silver necklace with a simple, minimal pendant design.',
    category: 'Accessories',
    price: '$79.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1691480150204-66dd1eb77391?q=80&w=580&auto=format&fit=crop',
    comments: [
      { id: 23, text: 'My wife loved it. Great anniversary gift.', likes: 10, time: '3 days ago', replies: [] },
      { id: 24, text: 'Chain is delicate but strong. Very classy.', likes: 6, time: '8 hours ago', replies: [] }
    ]
  },
  {
    id: 13,
    title: 'Wireless Headphones',
    description: 'Bluetooth 5.0 noise-cancelling headphones with deep bass and long battery life.',
    category: 'Electronic',
    price: '$129.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=580&auto=format&fit=crop',
    comments: [
      { id: 25, text: 'Battery lasts long, even with noise canceling on. Great sound too.', likes: 12, time: '2 days ago', replies: [] },
      { id: 26, text: 'Cushioning is soft. Doesn’t hurt even after hours.', likes: 4, time: '3 hours ago', replies: [] }
    ]
  },
  {
    id: 14,
    title: 'Bluetooth Speaker',
    description: 'Portable speaker with clear highs and booming bass. IPX5 water-resistant.',
    category: 'Electronic',
    price: '$79.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=774&auto=format&fit=crop',
    comments: [
      { id: 27, text: 'Amazing clarity. Fills the room with sound.', likes: 7, time: '1 day ago', replies: [] },
      { id: 28, text: 'Used it during a picnic. Worked perfectly!', likes: 5, time: '4 hours ago', replies: [] }
    ]
  },
  {
    id: 15,
    title: 'Gaming Console',
    description: 'Latest-gen gaming console with ultra-fast load times and 4K graphics support.',
    category: 'Electronic',
    price: '$299.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=865&auto=format&fit=crop',
    comments: [
      { id: 29, text: 'Smooth gameplay. Graphics are out of this world!', likes: 15, time: '2 days ago', replies: [] },
      { id: 30, text: 'Controller feels solid. Best console so far.', likes: 7, time: '6 hours ago', replies: [] }
    ]
  },
  {
    id: 16,
    title: 'Smartphone',
    description: 'Flagship phone with vibrant AMOLED display, fast charging, and powerful processor.',
    category: 'Electronic',
    price: '$699.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=728&auto=format&fit=crop',
    comments: [
      { id: 31, text: 'Crisp screen and buttery smooth performance.', likes: 10, time: '1 day ago', replies: [] },
      { id: 32, text: 'Camera is incredible in low light. Best purchase this year.', likes: 8, time: '2 hours ago', replies: [] }
    ]
  },
  {
    id: 17,
    title: 'Camera Lens',
    description: 'Professional wide-angle lens perfect for landscape and architectural photography.',
    category: 'Electronic',
    price: '$449.99',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?q=80&w=870&auto=format&fit=crop',
    comments: [
      { id: 33, text: 'Super sharp and very little distortion.', likes: 6, time: '3 days ago', replies: [] },
      { id: 34, text: 'Pairs well with my Nikon. Focus ring is smooth.', likes: 5, time: '5 hours ago', replies: [] }
    ]
  },
  {
    id: 18,
    title: 'Laptop',
    description: 'Ultra-slim laptop with 16GB RAM, SSD storage, and all-day battery. Built for performance.',
    category: 'Electronic',
    price: '$999.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1579811216948-6f57c19376a5?q=80&w=396&auto=format&fit=crop',
    comments: [
      { id: 35, text: 'Super fast boot and multitasking. Great for work.', likes: 11, time: '2 days ago', replies: [] },
      { id: 36, text: 'Fan is silent. Doesn’t overheat even after hours.', likes: 7, time: '3 hours ago', replies: [] }
    ]
  },
];