'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// partners array remains unchanged
const partners = [
  { id: 1, name: 'Green Earth Org', logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=256&q=80', href: 'https://www.greenpeace.org/' },
  { id: 2, name: 'Fair Trade Certified', logo: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=256&q=80', href: 'https://www.fairtradecertified.org/' },
  { id: 3, name: 'UN Global Compact', logo: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=256&q=80', href: 'https://www.unglobalcompact.org/' },
  { id: 4, name: 'Climate Neutral', logo: 'https://images.unsplash.com/photo-1501877008226-4ca528c07dbb?auto=format&fit=crop&w=256&q=80', href: 'https://climateneutral.org/' },
  { id: 5, name: 'Ethical Trading Initiative', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=256&q=80', href: 'https://ethicaltrade.org/' },
  { id: 6, name: 'Eco Warriors', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 7, name: 'Sustainability Now', logo: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 8, name: 'Clean Earth Initiative', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 9, name: 'Green Solutions', logo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 10, name: 'Planet Protectors', logo: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 11, name: 'Nature Keepers', logo: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 12, name: 'Ocean Guardians', logo: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 13, name: 'EcoFuture', logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 14, name: 'Sustainable Roots', logo: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 15, name: 'Clean Water Trust', logo: 'https://images.unsplash.com/photo-1501877008226-4ca528c07dbb?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 16, name: 'Renewables Alliance', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 17, name: 'Green Planet', logo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 18, name: 'Earth First', logo: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 19, name: 'Global Green', logo: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=256&q=80', href: '#' },
  { id: 20, name: 'Eco Leaders', logo: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=256&q=80', href: '#' },
];


const ResponsibilityPartners = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scrollBy = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8 * direction;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateScrollButtons();

    container.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  return (
    <section
      aria-label="Our Trusted Partners"
      className="w-full bg-white py-12 sm:py-14 px-4 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 select-none text-center max-w-[1000px] w-full"
      >
        Our Trusted Partners
      </motion.h2>

      <div className="relative w-full max-w-[1000px]">
        {/* Left Arrow - hidden on xs */}
        <button
          type="button"
          aria-label="Scroll partners left"
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className={`hidden sm:flex absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-black hover:text-gray-900 rounded-full p-2 z-20 transition
            focus:outline-black focus-visible:outline-2 focus-visible:outline-offset-2
            ${!canScrollLeft ? 'opacity-40 cursor-not-allowed hover:bg-gray-500 hover:text-gray-600' : ''}`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scroll container */}
        <div
          ref={containerRef}
          role="list"
          aria-label="Partner organizations"
          tabIndex={0}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth px-2 sm:px-0"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          onScroll={updateScrollButtons}
        >
          {partners.map(({ id, name, logo, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              tabIndex={0}
              title={name}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-16 sm:h-20 bg-white rounded-lg border border-gray-200 hover:border-black focus:border-black focus:outline-none transition flex items-center justify-center p-2 cursor-pointer"
            >
              <img
                src={logo}
                alt={name}
                loading="lazy"
                draggable={false}
                className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-110 transition"
              />
            </a>
          ))}
        </div>

        {/* Right Arrow - hidden on xs */}
        <button
          type="button"
          aria-label="Scroll partners right"
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className={`hidden sm:flex absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-black hover:text-gray-900 rounded-full p-2 z-20 transition
            focus:outline-black focus-visible:outline-2 focus-visible:outline-offset-2
            ${!canScrollRight ? 'opacity-40 cursor-not-allowed hover:bg-gray-500 hover:text-gray-600' : ''}`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <style>{`
        /* Hide scrollbar */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ResponsibilityPartners;
