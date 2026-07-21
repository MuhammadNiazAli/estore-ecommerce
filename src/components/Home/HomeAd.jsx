'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaClock,
} from 'react-icons/fa';

const flashDeals = [
  {
    id: 1,
    name: 'Wireless ANC Headphones',
    description: 'Crystal clear sound, 30h battery, fast charge in 10 minutes.',
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.4,
    reviews: 2130,
    image:
      'https://images.unsplash.com/photo-1684703147716-014da6a31aa3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T11:30:00Z',
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker Watch',
    description: 'Heart rate, sleep analysis, step counter with 10-day battery life.',
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.3,
    reviews: 1205,
    image:
      'https://images.unsplash.com/photo-1665860455423-166cab57c383?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T13:15:00Z',
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    description: 'Rich bass, waterproof design, 12 hours of playtime per charge.',
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.2,
    reviews: 875,
    image:
      'https://plus.unsplash.com/premium_photo-1677846525920-db00035aeac9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T14:00:00Z',
  },
  {
    id: 4,
    name: 'Noise Cancelling Earbuds',
    description: 'Compact design, deep noise cancellation, 20 hours battery life.',
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.5,
    reviews: 1340,
    image:
      'https://plus.unsplash.com/premium_photo-1682096600433-4e35c2aab53d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T15:45:00Z',
  },
  {
    id: 5,
    name: '4K Ultra HD Action Camera',
    description: 'Waterproof up to 30m, image stabilization, 2-hour recording time.',
    price: 139.99,
    oldPrice: 189.99,
    rating: 4.3,
    reviews: 950,
    image:
      'https://plus.unsplash.com/premium_photo-1709371824843-2b72258fbd71?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T16:30:00Z',
  },
  {
    id: 6,
    name: 'Smart Home Voice Assistant',
    description: 'Voice control, multi-room support, smart device integration.',
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.1,
    reviews: 1420,
    image:
      'https://plus.unsplash.com/premium_photo-1702974449824-fc17f3e6ad8a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T17:20:00Z',
  },
  {
    id: 7,
    name: 'Wireless Charging Pad',
    description: 'Fast charge compatible devices, slim design, non-slip surface.',
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.0,
    reviews: 540,
    image:
      'https://images.unsplash.com/photo-1615215271533-eab8c3d9cb34?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T18:10:00Z',
  },
  {
    id: 8,
    name: 'Smart LED Light Bulb',
    description: 'Adjustable colors, app control, energy efficient, 25,000 hrs life.',
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.3,
    reviews: 1125,
    image:
      'https://plus.unsplash.com/premium_photo-1661922429968-b4794e688dc4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T19:00:00Z',
  },
  {
    id: 9,
    name: 'Ergonomic Wireless Mouse',
    description: 'Comfort grip, adjustable DPI, 2-year battery life.',
    price: 34.99,
    oldPrice: 49.99,
    rating: 4.4,
    reviews: 765,
    image:
      'https://images.unsplash.com/photo-1746276584026-5e6f61dac081?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T20:00:00Z',
  },
  {
    id: 10,
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit, tactile keys, customizable macros, durable build.',
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.6,
    reviews: 1520,
    image:
      'https://images.unsplash.com/photo-1713713717197-f0d65c4dabe6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T21:30:00Z',
  },
  {
    id: 11,
    name: 'USB-C Hub Adapter',
    description: 'Multiport, HDMI, USB 3.0, SD card reader, compact and lightweight.',
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.2,
    reviews: 830,
    image:
      'https://images.unsplash.com/photo-1542124292-60272943a355?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T22:15:00Z',
  },
  {
    id: 12,
    name: 'Fitness Yoga Mat',
    description: 'Non-slip surface, 6mm thick, lightweight and easy to clean.',
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 1095,
    image:
      'https://plus.unsplash.com/premium_photo-1666736570194-6340be71eba7?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-09T23:00:00Z',
  },
  {
    id: 13,
    name: 'Waterproof Backpack',
    description: 'Durable material, multiple compartments, comfortable straps.',
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.3,
    reviews: 950,
    image:
      'https://images.unsplash.com/photo-1615555657095-3e7af88cac4d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-10T00:30:00Z',
  },
  {
    id: 14,
    name: 'Smartphone Gimbal Stabilizer',
    description: '3-axis stabilization, app control, 12-hour battery life.',
    price: 119.99,
    oldPrice: 149.99,
    rating: 4.5,
    reviews: 1150,
    image:
      'https://images.unsplash.com/photo-1654588301119-7e23237ace60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-10T01:15:00Z',
  },
  {
    id: 15,
    name: 'Portable Solar Charger',
    description: 'Foldable panels, fast charging, weather resistant, lightweight.',
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.1,
    reviews: 670,
    image:
      'https://images.unsplash.com/photo-1739268984311-b478fccf256e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-10T02:00:00Z',
  },
  {
    id: 16,
    name: 'Digital Smart Scale',
    description: 'Body composition, Bluetooth sync, high precision sensor.',
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.4,
    reviews: 980,
    image:
      'https://images.unsplash.com/photo-1710995048959-cae99e049a14?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dealEndsAt: '2025-07-10T03:30:00Z',
  },
];


function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <FaStar key={i} className="text-black" aria-hidden="true" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-black" aria-hidden="true" />
      );
    } else {
      stars.push(
        <FaRegStar key={i} className="text-black" aria-hidden="true" />
      );
    }
  }
  return (
    <div className="flex" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars}
    </div>
  );
}

function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const diff = new Date(endDate) - new Date();
      if (diff <= 0) {
        setTimeLeft('Deal ended');
        return;
      }
      const hrs = Math.floor(diff / 1000 / 60 / 60);
      const mins = Math.floor((diff / 1000 / 60) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${hrs}h ${mins}m ${secs}s`);
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [endDate]);

  return (
    <div
      className="flex items-center gap-2 text-black font-semibold mt-2"
      aria-live="polite"
      aria-atomic="true"
    >
      <FaClock aria-hidden="true" />
      <span>{timeLeft}</span>
    </div>
  );
}

export default function FlashSalesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = flashDeals.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(next, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <style>{`
  .carousel-container {
    position: relative;
    max-width: 980px;
    margin: 110px -1%;
  background: rgba(255, 255, 100, 0.08);
    color: white;
    border-radius: 16px;
    border: 0.1px solid rgba(255, 255, 100, 0.08);
    padding: 24px 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.7);
    user-select: none;
    overflow: hidden;
    margin-left:-15px;
    margin-bottom: -100px;
    /* Smooth fade on container */
    transition: box-shadow 0.3s ease;
  }
  .carousel-container:hover,
  .carousel-container:focus-within {
    box-shadow: 0 12px 36px rgba(0,0,0,0.9);
  }
  .slides-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    overflow: visible;
    position: relative;
    /* smooth horizontal transform */
    transition: transform 0.5s ease;
  }
  .slide {
    flex: 0 0 65%; /* center slide width */
    background: #374151; /* gray-700 */
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.6);
    display: flex;
    gap: 24px;
    padding: 24px;
    user-select: none;
    transition: transform 0.5s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 10;
    /* subtle hover scale */
    will-change: transform;
  }
  .slide:hover,
  .slide:focus-within {
    transform: scale(1.03);
    box-shadow: 0 10px 28px rgba(0,0,0,0.8);
    outline: none;
  }
  .slide.outside {
    flex: 0 0 35%; /* right preview width */
    background: #4b5563; /* gray-600 */
    border-radius: 16px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
    padding: 16px;
    opacity: 0.7;
    pointer-events: none;
    user-select: none;
    transition: transform 0.5s ease, opacity 0.5s ease;
    position: relative;
    z-index: 5;
  }
  .slide img {
    width: 280px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    transition: transform 0.4s ease;
    will-change: transform;
  }
  .slide img:hover,
  .slide img:focus {
    transform: scale(1.05);
    outline: none;
  }
  .slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 280px;
    color: white;
  }
  .slide-title {
    font-size: 1.3rem;  /* was 2rem */
    font-weight: 900;
    margin-bottom: 8px; /* reduced */
    line-height: 1.1;
    transition: color 0.3s ease;
  }
  .slide-title:hover,
  .slide-title:focus {
    color: #6b7280; /* red-400 */
    outline: none;
  }
  .slide-description {
    font-size: 0.85rem; /* was 1rem */
    margin-bottom: 12px; /* reduced */
    color: #111827; /* gray-300 */
    line-height: 1.4;
    transition: color 0.3s ease;
  }
  .slide-description:hover,
  .slide-description:focus {
    color: #9ca3af; /* lighter red */
    outline: none;
  }
  .rating-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px; /* reduced */
    user-select: none;
  }
  .reviews-count {
    font-size: 0.75rem; /* was 0.9rem */
    color: #9ca3af; /* gray-400 */
    transition: color 0.3s ease;
  }
  .price-row {
    display: flex;
    align-items: baseline;
    gap: 14px;
    margin-bottom: 16px; /* reduced */
    user-select: none;
  }
  .current-price {
    font-size: 1.25rem; /* was 1.75rem */
    font-weight: 700;
    color: #6b7280; /* red-400 */
    transition: color 0.3s ease;
  }
  .old-price {
    font-size: 0.85rem; /* was 1rem */
    color: #6b7280; /* gray-500 */
    text-decoration: line-through;
    transition: color 0.3s ease;
  }
  .discount-badge {
    background-color: #f3f4f6;
    color: #991b1b;
    font-size: 0.65rem; /* was 0.8rem */
    font-weight: 600;
    padding: 2px 8px; /* reduced padding */
    border-radius: 8px;
    margin-left: auto;
    user-select: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .buy-button {
    background-color: #6b7280;
    color: white;
    font-weight: 700;
    padding: 8px 20px; /* was 12px 28px */
    border-radius: 12px;
    font-size: 0.85rem; /* was 1rem */
    display: inline-flex;
    align-items: center;
    gap: 8px; /* reduced gap */
    text-decoration: none;
    user-select: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    justify-content: center;
    box-shadow: 0 6px 14px rgba(248, 113, 113, 0.5);
    border: none;
    cursor: pointer;
    width: fit-content;
    margin-top: auto;
    will-change: transform;
  }
  .buy-button:hover,
  .buy-button:focus-visible {
    background-color: #111827;
    outline: none;
    box-shadow: 0 8px 20px rgba(185, 28, 28, 0.7);
    transform: scale(1.05);
  }
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255 255 255 / 0.1);
    border: none;
    padding: 15px;
    border-radius: 50%;
    color: black;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.25s ease, transform 0.2s ease;
    user-select: none;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    will-change: transform;
  }
  .nav-button:hover,
  .nav-button:focus-visible {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(2px);
    outline: none;
    transform: translateY(-50%) scale(1.05);
    color:white;
  }
  .nav-prev {
    left: 12px;
  }
  .nav-next {
    right: 12px;
  }

  @media (max-width: 768px) {
    .carousel-container {
      max-width: 95vw;
      margin-left:0px;
      padding: 16px 12px;
    }
    .slides-wrapper {
      gap: 12px;
    }
    .slide {
      flex: 1 1 100%;
      padding: 16px;
      gap: 16px;
      flex-direction: column;
      transition: transform 0.5s ease;
    }
    .slide.outside {
      display: none; /* Hide preview slide on mobile */
    }
    .slide img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      transition: transform 0.4s ease;
    }
    .slide-content {
      min-width: auto;
    }
    .slide-title {
      font-size: 1rem; /* was 1.5rem */
    }
    .buy-button {
      width: 100%;
      padding: 12px;
      font-size: 1rem; /* was 1.125rem */
    }
  }
`}</style>


      <section
        className="carousel-container"
        aria-label="Flash sales deals carousel"
        role="region"
      >
        <div className="slides-wrapper" aria-live="polite">
          <article
            key={flashDeals[currentIndex].id}
            className="slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${flashDeals[currentIndex].name} flash deal`}
            aria-hidden="false"
            tabIndex={0}
          >
            <img
              src={flashDeals[currentIndex].image}
              alt={flashDeals[currentIndex].name}
              loading="lazy"
              width={280}
              height={180}
              decoding="async"
              role="img"
              tabIndex={-1}
            />

            <div className="slide-content">
              <div>
                <h2 className="slide-title">{flashDeals[currentIndex].name}</h2>
                <p className="slide-description">
                  {flashDeals[currentIndex].description}
                </p>

                <div className="rating-row">
                  <StarRating rating={flashDeals[currentIndex].rating} />
                  <span className="reviews-count">
                    ({flashDeals[currentIndex].reviews} reviews)
                  </span>
                </div>

                <div className="price-row">
                  <span className="current-price">
                    ${flashDeals[currentIndex].price.toFixed(2)}
                  </span>
                  <span className="old-price">
                    ${flashDeals[currentIndex].oldPrice.toFixed(2)}
                  </span>
                  <span
                    className="discount-badge"
                    aria-label={`Discount ${Math.round(
                      ((flashDeals[currentIndex].oldPrice -
                        flashDeals[currentIndex].price) /
                        flashDeals[currentIndex].oldPrice) *
                        100,
                    )}% off`}
                  >
                    {Math.round(
                      ((flashDeals[currentIndex].oldPrice -
                        flashDeals[currentIndex].price) /
                        flashDeals[currentIndex].oldPrice) *
                        100,
                    )}
                    % OFF
                  </span>
                </div>

                <CountdownTimer endDate={flashDeals[currentIndex].dealEndsAt} />
              </div>

              <Link
                href="/cart"
                className="buy-button"
                aria-label={`Add ${flashDeals[currentIndex].name} to cart`}
              >
                <FaShoppingCart aria-hidden="true" />
                Buy Now
              </Link>
            </div>
          </article>

          {flashDeals[(currentIndex + 1) % total] && (
            <article
              key={flashDeals[(currentIndex + 1) % total].id}
              className="slide outside"
              aria-hidden="true"
              tabIndex={-1}
              aria-label="Next deal preview"
            >
              <img
                src={flashDeals[(currentIndex + 1) % total].image}
                alt={flashDeals[(currentIndex + 1) % total].name}
                loading="lazy"
                width={180}
                height={115}
                decoding="async"
                role="img"
                tabIndex={-1}
              />

              <div className="slide-content">
                <h3
                  style={{
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    marginBottom: '8px',
                    color: 'white',
                  }}
                >
                  {flashDeals[(currentIndex + 1) % total].name}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#111827',
                    marginBottom: '6px',
                  }}
                >
                  {flashDeals[(currentIndex + 1) % total].description}
                </p>

                <div className="rating-row" style={{ gap: '6px', marginBottom: 8 }}>
                  <StarRating rating={flashDeals[(currentIndex + 1) % total].rating} />
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: '#9ca3af',
                    }}
                  >
                    ({flashDeals[(currentIndex + 1) % total].reviews})
                  </span>
                </div>

                <div className="price-row" style={{ gap: '8px', marginBottom: 10 }}>
                  <span
                    style={{
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      color: '#6b7280',
                    }}
                  >
                    ${flashDeals[(currentIndex + 1) % total].price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      textDecoration: 'line-through',
                    }}
                  >
                    ${flashDeals[(currentIndex + 1) % total].oldPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </article>
          )}
        </div>

        <button
          onClick={prev}
          className="nav-button nav-prev"
          aria-label="Previous deal"
          type="button"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="nav-button nav-next"
          aria-label="Next deal"
          type="button"
        >
          &#8594;
        </button>
      </section>
    </>
  );
}
