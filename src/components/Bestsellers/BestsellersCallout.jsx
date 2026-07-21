import React, { useEffect, useState, useRef } from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.92-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-5 h-5 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-grad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.92-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.92-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
};

const BestsellersCallout = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const calloutRef = useRef(null);

const product = {
  title: 'Urban Explorer Denim Jacket',
  price: '$179',
  rating: 4.6,
  description:
    'A rugged yet stylish denim jacket designed for versatility. Built with heavy-duty stitching and a breathable cotton lining, perfect for year-round wear. Durable, modern, and ready for any adventure.',
  image:
    'https://images.unsplash.com/photo-1729465123658-8a180e455ce3?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  shopLink: '#shop-denim-jacket',
  learnLink: '#learn-denim-jacket',
};


  // Detect mobile on load and resize
  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update scroll for vertical parallax on background
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Mouse move for subtle parallax effect on desktop
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        if (calloutRef.current) {
          const rect = calloutRef.current.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // -15 to 15
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // -10 to 10
          setMousePos({ x, y });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // ==== MOBILE VERSION ====
  if (isMobile) {
    return (
      <section
        aria-label="Exclusive Bestseller Jacket - Mobile Callout"
        className="max-w-md mx-auto my-8 bg-black rounded-2xl shadow-lg text-gray-900 overflow-hidden select-none"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-64 object-cover"
          draggable={false}
        />
        <div className="p-5 bg-black bg-opacity-90">
          <h2
            className="text-2xl font-extrabold mb-2 text-black"
            tabIndex={0}
          >
            {product.title}
          </h2>
          <p className="text-sm text-black mb-3 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-extrabold tracking-wide text-black">
              {product.price}
            </span>
            <StarRating rating={product.rating} />
          </div>
          <div className="flex gap-3">
            <a
              href={product.shopLink}
              className="flex-1 bg-black hover:bg-black text-black font-semibold py-3 rounded-lg text-center shadow-md transition-transform transform hover:scale-105 focus:outline-black focus:ring-4 focus:ring-black"
              aria-label={`Shop ${product.title}`}
            >
              Shop Now
            </a>
            <a
              href={product.learnLink}
              className="flex-1 border-2 border-black hover:border-black text-black hover:text-black font-semibold py-3 rounded-lg text-center shadow-inner transition-transform transform hover:scale-105 focus:outline-black focus:ring-4 focus:ring-black"
              aria-label={`Learn more about ${product.title}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ==== DESKTOP VERSION ====
  return (
    <section
      ref={calloutRef}
      aria-label="Bestseller Jacket Callout"
      className="relative overflow-hidden rounded-3xl shadow-2xl max-w-7xl mx-auto my-12 md:my-24 bg-gradient-to-tr from-black via-gray-700 to-gray-900 text-gray-900 select-none"
      style={{
        perspective: 800,
      }}
    >
      {/* Background Image with vertical scroll parallax */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover filter brightness-75 saturate-125 transition-transform duration-500 will-change-transform rounded-3xl"
        style={{
          backgroundImage: `url(${product.image})`,
          transform: `translateY(${scrollY * 0.2}px)`,
          zIndex: 0,
        }}
      />

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-gary-900/60 to-transparent z-10 pointer-events-none rounded-3xl" />

      {/* Content wrapper */}
      <div
        className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Text Block */}
        <article className="max-w-xl space-y-6">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg"
            tabIndex={0}
          >
            {product.title}
          </h2>
          <p className="text-lg md:text-xl font-semibold text-black drop-shadow-md">
            {product.description}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-extrabold tracking-wide text-black drop-shadow-lg">
              {product.price}
            </span>
            <StarRating rating={product.rating} />
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <a
              href={product.shopLink}
              className="bg-black hover:bg-black text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-black focus:ring-4 focus:ring-black text-center"
              aria-label={`Shop ${product.title}`}
            >
              Shop Now
            </a>
            <a
              href={product.learnLink}
              className="border-2 border-black hover:border-black text-black hover:text-black font-semibold py-3 px-8 rounded-full shadow-inner transition-transform transform hover:scale-105 focus:outline-black focus:ring-4 focus:ring-black text-center"
              aria-label={`Learn more about ${product.title}`}
            >
              Learn More
            </a>
          </div>
        </article>

        {/* Product Image */}
        <div className="relative w-72 h-80 md:w-96 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-black ring-opacity-90 flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          {/* Subtle glowing pulse ring */}
          <div className="absolute inset-0 rounded-3xl ring-8 ring-black opacity-30 animate-pulse pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default BestsellersCallout;
