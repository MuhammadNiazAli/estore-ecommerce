'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Community Leader, Peru',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'This company’s commitment to sustainability has transformed our village and given hope to many families.',
  },
  {
    id: 2,
    name: 'Liam O’Connor',
    role: 'Environmental Activist, Ireland',
    photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    quote:
      'Their transparency and ethical approach set a new standard for corporate responsibility.',
  },
  {
    id: 3,
    name: 'Anjali Sharma',
    role: 'Teacher & Volunteer, India',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'I’m proud to support a company that truly invests in education and community development.',
  },
  {
    id: 4,
    name: 'Ethan Kim',
    role: 'Solar Engineer, South Korea',
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
    quote:
      'Thanks to their initiatives, our town now benefits from clean, renewable energy solutions.',
  },
];

const ResponsibilityTestimonials = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to toggle arrow visibility
  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 5);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkScrollPosition();

    container.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Scroll by ~80% of container width for smoother navigation
  const scrollBy = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8 * direction;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-amber-600 text-4xl font-bold mb-12 text-center max-w-[1000px] select-none"
      >
        What People Are Saying
      </motion.h2>

      <div className="relative w-full max-w-[1000px]">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className={`hidden sm:flex absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 z-10 transition
            bg-white/70 hover:bg-amber-700 hover:text-gray-900
            ${!canScrollLeft ? 'opacity-30 cursor-not-allowed hover:bg-gray-50 hover:text-amber-600' : ''}`}
          tabIndex={canScrollLeft ? 0 : -1}
          type="button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Testimonial Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-2 scroll-smooth"
          tabIndex={-1}
          role="list"
          aria-label="User testimonials"
        >
          {testimonials.map(({ id, name, role, photo, quote }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.15 }}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] bg-white/50 border border-gray-200 rounded-xl p-6 flex flex-col"
              aria-label={`Testimonial from ${name}, ${role}`}
              tabIndex={0}
              role="listitem"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={photo}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-600"
                  loading="lazy"
                  draggable={false}
                />
                <div>
                  <p className="text-amber-600 font-semibold">{name}</p>
                  <p className="text-gray-600 text-sm">{role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm flex-grow">{quote}</p>
            </motion.article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className={`hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 z-10 transition
            bg-white/70 hover:bg-amber-700 hover:text-gray-900
            ${!canScrollRight ? 'opacity-30 cursor-not-allowed hover:bg-gray-50 hover:text-amber-600' : ''}`}
          tabIndex={canScrollRight ? 0 : -1}
          type="button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Hide scrollbar globally inside component */}
      <style>{`
        /* Hide scrollbar for Webkit browsers */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for Firefox */
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default ResponsibilityTestimonials;
