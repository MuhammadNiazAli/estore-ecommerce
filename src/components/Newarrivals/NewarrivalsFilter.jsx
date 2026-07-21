import React, { useState, useRef, useEffect } from 'react';

const categories = [
  'All',
  'Clothing',
  'Accessories',
  'Footwear',
  'Electronics',
  'Home',
  'Beauty',
  'Sports',
  'Sale',
];

const NewarrivalsFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef(null);
  const buttonsRef = useRef([]);
  const isProgrammaticScroll = useRef(false); // flag to disable scroll handler when scrolling programmatically

  // Scroll the container so that the button at index is centered
  const scrollToCategory = (index) => {
    const container = scrollContainerRef.current;
    const button = buttonsRef.current[index];
    if (!container || !button) return;

    const containerWidth = container.clientWidth;
    const buttonLeft = button.offsetLeft;
    const buttonWidth = button.clientWidth;

    const scrollTo = buttonLeft - containerWidth / 2 + buttonWidth / 2;

    isProgrammaticScroll.current = true; // start programmatic scroll

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });

    // After the scroll finishes (approx 300ms), re-enable scroll handler
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 350);
  };

  useEffect(() => {
    const index = categories.indexOf(activeCategory);
    if (index === -1) return;
    // Scroll after active category changes (e.g. via button click)
    scrollToCategory(index);
  }, [activeCategory]);

  // Throttle function
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  // Update active category on scroll based on closest button center to container center
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = throttle(() => {
      if (isProgrammaticScroll.current) return; // skip if programmatic scroll

      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      buttonsRef.current.forEach((btn, idx) => {
        if (!btn) return;
        const btnCenter = btn.offsetLeft + btn.clientWidth / 2;
        const distance = Math.abs(containerCenter - btnCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      if (categories[closestIndex] !== activeCategory) {
        setActiveCategory(categories[closestIndex]);
      }
    }, 100);

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [activeCategory]);

  return (
    <section
      aria-label="Filter New Arrivals by Category"
      className="w-full bg-white py-8 px-6 sm:px-12"
    >
      <div
        role="list"
        ref={scrollContainerRef}
        className="flex space-x-8 overflow-x-auto no-scrollbar px-2"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x proximity',
          scrollBehavior: 'smooth',
          scrollPaddingLeft: '50%',
          scrollPaddingRight: '50%',
        }}
      >
        {categories.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="listitem"
              onClick={() => setActiveCategory(category)}
              ref={(el) => (buttonsRef.current[index] = el)}
              className={`
                snap-center
                flex-shrink-0
                px-7
                py-3
                rounded-full
                font-semibold
                text-sm
                sm:text-base
                transition
                duration-300
                cursor-pointer
                select-none
                ${
                  isActive
                    ? 'bg-amber-600 bg-opacity-30 text-gray-900 backdrop-blur-md shadow-lg border border-amber-600/60'
                    : 'bg-white text-amber-700 hover:bg-amber-800 hover:text-amber-400'
                }
                ${
                  isActive
                    ? 'scale-100 shadow-[0_0_15px_2px_rgba(252,211,77,0.6)]'
                    : 'scale-100'
                }
                focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600 focus-visible:ring-opacity-70
              `}
              aria-pressed={isActive}
              aria-current={isActive ? 'true' : undefined}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Scroll indicator dots */}
      <div className="mt-6 flex justify-center space-x-3">
        {categories.map((category, idx) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(category);
                scrollToCategory(idx);
              }}
              aria-label={`Scroll to ${category}`}
              className={`
                w-4 h-4
                rounded-full
                transition-all duration-300
                ${
                  isActive
                    ? 'bg-amber-600 shadow-[0_0_8px_2px_rgba(252,211,77,0.7)] scale-125'
                    : 'bg-amber-900 hover:bg-amber-700 scale-100'
                }
              `}
              type="button"
            />
          );
        })}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Webkit browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for Firefox */
        .no-scrollbar {
          scrollbar-width: none;
        }
        /* Hide scrollbar for IE, Edge */
        .no-scrollbar {
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default NewarrivalsFilter;
