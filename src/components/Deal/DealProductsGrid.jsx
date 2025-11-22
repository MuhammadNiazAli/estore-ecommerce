'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FiHeart,
  FiEye,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// Import products array from your data file (path adjust karein)
import { allProducts } from './ProductData';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (half ? 1 : 0);
  return (
    <div className="flex items-center text-yellow-400 space-x-[2px]">
      {Array(fullStars).fill().map((_, i) => (
        <AiFillStar key={`full-${i}`} size={14} />
      ))}
      {half && <AiFillStar key="half" size={14} className="clip-half" />}
      {Array(emptyStars).fill().map((_, i) => (
        <AiOutlineStar key={`empty-${i}`} size={14} />
      ))}
    </div>
  );
};

const RecentlyViewedDeals = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!scrollRef.current) return;
      const width = scrollRef.current.offsetWidth;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      const gap = 24 * (visibleCards - 1);
      const cardW = (width - gap) / visibleCards;
      setCardWidth(cardW);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -(cardWidth + 24) : cardWidth + 24,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-gray-900 text-white py-12 px-4 relative">
      <div className="max-w-[1000px] mx-auto relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
          Recently Viewed Products
        </h2>

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        >
          {allProducts.map(({ id, title, price, oldPrice, image, description, rating, reviews, features }) => {
            const discount = Math.round(((oldPrice - price) / oldPrice) * 100);
            return (
              <article
                key={id}
                className="group bg-gray-800 rounded-xl shadow-md flex-shrink-0 transition"
                style={{ width: cardWidth ? `${cardWidth}px` : '260px' }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md bg-white/10">
                    <h3 className="text-white text-lg font-bold text-center px-2 animate-fade-in-up">
                      {title}
                    </h3>
                  </div>
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold z-10">
                    -{discount}%
                  </span>
                </div>

                <div className="p-4 flex flex-col justify-between h-[220px]">
                  <p className="text-gray-300 text-sm line-clamp-3 mb-1">{description}</p>

                  {/* Features with icons */}
                  <ul className="text-sm text-gray-400 space-y-1 mb-2">
                    {features?.slice(0, 3).map((f, idx) => {
                      const Icon = f.icon;
                      return (
                        <li
                          key={idx}
                          className="flex items-center gap-2"
                        >
                          <Icon />
                          <span>{f.label}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                    {renderStars(rating)}
                    <span>{reviews}+ reviews</span>
                  </div>

                  <div className="flex justify-between items-end mt-auto">
                    <div>
                      <span className="text-lg font-bold text-yellow-400">${price}</span>
                      <span className="text-sm line-through text-gray-400 ml-2">${oldPrice}</span>
                    </div>
                    <div className="flex space-x-2 text-yellow-400">
                      <Link href="/wishlist" className="hover:text-yellow-300" aria-label={`Wishlist ${title}`}>
                        <FiHeart size={18} />
                      </Link>
                      <Link href={`/product`} className="hover:text-yellow-300" aria-label={`View ${title}`}>
                        <FiEye size={18} />
                      </Link>
                      <Link href="/cart" className="hover:text-yellow-300" aria-label={`Add ${title} to cart`}>
                        <FiShoppingCart size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Left arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className={`absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-6 z-40
              ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}
              bg-gray-900/60 hover:bg-yellow-400 hover:text-black
              border border-gray-700 text-white backdrop-blur-md shadow-md
              rounded-full flex items-center justify-center transition`}
          >
            <FiChevronLeft size={isMobile ? 18 : 22} />
          </button>
        )}

        {/* Right arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className={`absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 z-40
              ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}
              bg-gray-900/60 hover:bg-yellow-400 hover:text-black
              border border-gray-700 text-white backdrop-blur-md shadow-md
              rounded-full flex items-center justify-center transition`}
          >
            <FiChevronRight size={isMobile ? 18 : 22} />
          </button>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        .clip-half {
          clip-path: inset(0 50% 0 0);
        }
      `}</style>
    </section>
  );
};

export default RecentlyViewedDeals;
