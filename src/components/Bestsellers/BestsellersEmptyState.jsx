import React, { useEffect, useRef } from 'react';

const BestsellersEmptyState = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;

      // Parallax layers movement (simple)
      const layers = containerRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth'));
        const movement = -(scrollY * depth);
        layer.style.transform = `translateY(${movement}px) translateZ(0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden h-[45vh] flex flex-col items-center justify-center bg-white text-amber-600 select-none my-16 mb-0 px-4 sm:px-6 lg:px-8"
    >
      {/* Background geometric shapes */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] pointer-events-none"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Simple circles with no glow */}
        <circle
          className="parallax-layer"
          data-depth="0.03"
          cx="400"
          cy="400"
          r="350"
          stroke="#A3A3A3"
          strokeWidth="1.5"
          opacity="0.15"
        />
        <circle
          className="parallax-layer"
          data-depth="0.07"
          cx="400"
          cy="400"
          r="280"
          stroke="#737373"
          strokeWidth="1.5"
          opacity="0.12"
        />
        {/* Subtle diagonal lines */}
        <g className="parallax-layer" data-depth="0.1" stroke="#525252" strokeWidth="1" opacity="0.1">
          <line x1="0" y1="0" x2="800" y2="800" />
          <line x1="50" y1="0" x2="850" y2="800" />
          <line x1="0" y1="50" x2="800" y2="850" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          No Bestsellers Yet
        </h2>
        <p className="text-lg sm:text-xl text-amber-500 mb-8 drop-shadow-md">
          We're crafting the perfect collection for you. Check back soon to find exclusive deals and top-rated items!
        </p>
        <button
          type="button"
          className="inline-block rounded-full bg-amber-700 px-8 py-3 font-semibold text-black hover:bg-amber-600 transition-shadow shadow-lg hover:shadow-amber-500/20"
        >
          Explore Collections
        </button>
      </div>
    </section>
  );
};

export default BestsellersEmptyState;
