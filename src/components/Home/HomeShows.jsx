'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


const productCategories = [
  "Phones","Laptops","Watches","Kitchen","Sports","Toys","Cameras","Fitness",
  "Books","Beauty","Phone-Accessories","Gaming","Home-Decoration","Audio","Office","Clothing","Shoes","Jewelry","Automotive","Garden","Pets","Health",
  "Baby","Software","Industrial","Art","Music","Travel","Movies","Collectibles"
];


const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const HomeShows = () => {
  const containerRef = useRef(null);
  const scrollTween = useRef(null);

  
  const [isPaused, setIsPaused] = useState(false);
  
  const [hoverX, setHoverX] = useState(null);


  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const scrollTrack = containerEl.querySelector('.scroll-track');
    if (!scrollTrack) return;

    const trackWidth = scrollTrack.getBoundingClientRect().width;

   
    if (scrollTween.current) {
      scrollTween.current.kill();
    }

    scrollTween.current = gsap.to(containerEl, {
      x: `-=${trackWidth}`,
      ease: 'none',
      duration: 50,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const currentX = parseFloat(x);
          if (currentX <= -trackWidth) {
            return '0px';
          }
          return x;
        }
      },
      paused: isPaused
    });

    
    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
    };
  }, [isPaused]);

 
  useEffect(() => {
    if (!containerRef.current) return;

    const containerEl = containerRef.current;
    const categoryItems = containerEl.querySelectorAll('.scroll-track > div');

 
    if (hoverX === null) {
      categoryItems.forEach((item) => {
        gsap.to(item, { x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
      });
      return;
    }


    categoryItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distanceFromCursor = Math.abs(hoverX - itemCenterX);
      const maxEffectDistance = 150; 

      if (distanceFromCursor < maxEffectDistance) {
        const proximity = (maxEffectDistance - distanceFromCursor) / maxEffectDistance;
        const translateX = (hoverX - itemCenterX) * 0.3 * proximity;
        const translateY = -12 * proximity;
        const scale = 1 + 0.12 * proximity;

        gsap.to(item, {
          x: translateX,
          y: translateY,
          scale: scale,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
       
        gsap.to(item, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });
  }, [hoverX]);

 
  const onMouseMove = (event) => {
    setHoverX(event.clientX);
  };

  const onTouchMove = (event) => {
    if (event.touches.length > 0) {
      setHoverX(event.touches[0].clientX);
    }
  };

  const onLeave = () => {
    setHoverX(null);
    setIsPaused(false);
  };

  return (
    <section
      aria-label="Trending categories scrolling list"
      className="bg-amber-600 text-black py-8 px-6 mb-[-70px]"
    >
      <div
        className="mx-auto overflow-hidden relative"
        style={{ width: 950, maxWidth: '90vw' }}
      >
        <div
          ref={containerRef}
          className="flex whitespace-nowrap gap-12 text-lg font-semibold cursor-default select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={onLeave}
          onMouseMove={onMouseMove}
          onTouchStart={() => setIsPaused(true)}
          onTouchMove={onTouchMove}
          onTouchEnd={onLeave}
          style={{ willChange: 'transform' }}
        >
  
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              className="scroll-track flex gap-12"
              aria-hidden={dupIndex === 1} 
            >
              {productCategories.map((category, idx) => {
                const categoryUrl = `/category/${slugify(category)}`;
                return (
                  <div
                    key={`${dupIndex}-${idx}`}
                    className="inline-block rounded-md px-2 py-1 transition-shadow duration-300 ease-in-out hover:shadow-md"
                  >
                    <a
                      href={categoryUrl}
                      className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-amber-800 rounded"
                      tabIndex={0}
                      aria-label={`Go to ${category} category`}
                      onClick={(e) => {

                      }}
                    >
                      {category}
                    </a>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeShows;
