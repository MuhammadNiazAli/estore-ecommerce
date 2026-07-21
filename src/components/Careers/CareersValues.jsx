'use client';

import React, { useRef } from 'react';
import { LightBulbIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';

const values = [
  {
    icon: <LightBulbIcon className="h-8 w-8 text-black" />,
    title: 'Innovation',
    description:
      'We constantly push boundaries and encourage creative thinking to solve challenges and drive growth.',
  },
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-black" />,
    title: 'Diversity & Inclusion',
    description:
      'Our strength lies in embracing different perspectives, backgrounds, and experiences to build a stronger team.',
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-black" />,
    title: 'Integrity',
    description:
      'We act with honesty, transparency, and respect, fostering trust among teammates and clients alike.',
  },
];

const CareersValues = () => {
  // Array of refs, one for each card
  const cardsRef = useRef([]);

  // Clear refs on re-render
  cardsRef.current = [];

  // Function to add refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Hover handlers
  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.5)',
    });
  };

  return (
    <section className="bg-white w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="bg-white rounded-xl p-6 shadow-md cursor-pointer"
              style={{ boxShadow: '0px 4px 10px rgba(0,0,0,0.5)', transformOrigin: 'center' }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
              <p className="text-black text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersValues;
