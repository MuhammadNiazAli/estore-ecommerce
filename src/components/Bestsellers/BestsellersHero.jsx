import React, { useEffect, useState, useRef } from 'react';

// StarRating component (unchanged)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-amber-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.92-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-5 h-5 text-amber-600"
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
          className="w-5 h-5 text-amber-400"
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

const BestsellerParallaxHero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef(null);

  // product data unchanged
  const product = {
    title: 'Exclusive Bestseller Jacket',
    price: '$249',
    rating: 4.8,
    description:
      'Crafted with premium leather and tailored for a perfect fit. Limited stock available! Stay warm and stylish this season with our exclusive bestseller.',
    image:
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shopLink: '#shop-jacket',
    learnLink: '#learn-jacket',
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.top <= 0) {
        setOffsetY(Math.min(-rect.top * 0.3, 150));
      } else {
        setOffsetY(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile content to show only on mobile below md breakpoint
  const mobileContent = (
    <section
      aria-label="Mobile Bestseller highlight"
      className="w-full min-h-[320px] bg-amber-600 flex flex-col items-center justify-center p-6 text-black select-none my-[-50px] mb-0"
    >
      <h2 className="text-2xl font-bold mb-3 text-center">Mobile Special Deal</h2>
      <p className="text-base mb-5 max-w-sm text-center">
        Check out our exclusive deals optimized for mobile! Stay tuned for more.
      </p>
      <a
        href={product.shopLink}
        className="bg-white text-amber-600 font-semibold py-2 px-5 rounded-md shadow-lg hover:bg-gray-50 transition"
        aria-label="Shop mobile bestseller"
      >
        Shop Mobile Deals
      </a>
    </section>
  );

  return (
    <>
      {/* Mobile: show only below md */}
      <div className="block md:hidden">{mobileContent}</div>

      {/* Desktop & tablet md+: show original hero */}
      <section
        ref={heroRef}
        aria-label="Bestseller product highlight"
        className="relative w-full min-h-[520px] md:min-h-[720px] flex flex-col md:flex-row items-center bg-white text-amber-600 overflow-hidden select-none hidden md:flex my-[-50px] mb-0"
      >
        {/* Parallax background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform will-change-transform"
          style={{
            backgroundImage: `url(${product.image})`,
            transform: `translateY(${offsetY}px) scale(1.05)`,
            filter: 'brightness(0.6) saturate(1.2)',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* Overlay gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-10 md:gap-16">
          {/* Text info */}
          <article className="max-w-xl md:max-w-md space-y-6">
            <h1
              tabIndex={0}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg transition-opacity duration-700"
              style={{ opacity: offsetY ? 1 : 0.8 }}
            >
              {product.title}
            </h1>

            <p className="text-amber-500 text-base sm:text-lg drop-shadow-md leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-wider drop-shadow-lg">
                {product.price}
              </span>
              <StarRating rating={product.rating} />
            </div>

            <div className="flex gap-4 sm:gap-6 mt-6 flex-wrap">
              <a
                href={product.shopLink}
                className="bg-amber-700 hover:bg-amber-800 text-gray-900 font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-amber-600 focus:ring-2 focus:ring-amber-600 text-center"
                aria-label={`Shop ${product.title}`}
              >
                Shop Now
              </a>
              <a
                href={product.learnLink}
                className="border border-amber-600 hover:border-amber-500 text-amber-600 hover:text-amber-500 font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-inner transition-transform transform hover:scale-105 focus:outline-amber-600 focus:ring-2 focus:ring-amber-600 text-center"
                aria-label={`Learn more about ${product.title}`}
              >
                Learn More
              </a>
            </div>
          </article>

          {/* Large product image for md+ */}
          <div className="hidden md:block relative w-[420px] h-[480px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-amber-800 ring-opacity-80">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
              aria-hidden="true"
            />
            {/* subtle glow ring */}
            <div className="absolute inset-0 rounded-xl ring-4 ring-amber-600 opacity-20 animate-pulse pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestsellerParallaxHero;
