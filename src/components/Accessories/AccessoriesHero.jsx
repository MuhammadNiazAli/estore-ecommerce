'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Shield, Star } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    title: 'Sleek Design',
    icon: <Sparkles size={24} />,
    description: [
      'Experience elegance like never before. Our accessories feature a sleek, minimalist design that perfectly complements any style.',
      'Crafted with precision and a keen eye for aesthetics, each piece offers both form and function.',
    ],
    image:
      'https://images.unsplash.com/photo-1677342073477-3cb56e6201af?q=80&w=1035&auto=format&fit=crop',
    details: [
      'Ultra-slim profiles for easy carry',
      'Scratch-resistant coatings for longevity',
      'Ergonomic shapes for maximum comfort',
      'Modern aesthetic appeal with premium finishes',
    ],
  },
  {
    id: 2,
    title: 'Power Features',
    icon: <Zap size={24} />,
    description: [
      'Unleash cutting-edge technology with accessories designed to enhance your daily life.',
      'Seamless integration with your devices ensures superior performance and convenience.',
    ],
    image:
      'https://images.unsplash.com/photo-1703589622306-a89607da39d4?q=80&w=1311&auto=format&fit=crop',
    details: [
      'Fast wireless charging capabilities',
      'Smart device connectivity and compatibility',
      'Energy-efficient technology for longer use',
      'Advanced controls and intuitive interfaces',
    ],
  },
  {
    id: 3,
    title: 'Durability',
    icon: <Shield size={24} />,
    description: [
      'Engineered for tough environments and active lifestyles.',
      'Built from premium materials that withstand daily wear and tear without compromise.',
    ],
    image:
      'https://images.unsplash.com/photo-1667321040204-fcff0e31196e?q=80&w=1035&auto=format&fit=crop',
    details: [
      'Water-resistant coatings for protection',
      'Impact-resistant design for shock absorption',
      'High-quality seals to prevent dust and moisture',
      'Industry-leading lifetime warranty',
    ],
  },
  {
    id: 4,
    title: 'Premium Quality',
    icon: <Star size={24} />,
    description: [
      'Our commitment to excellence is unmatched.',
      'Each accessory undergoes rigorous quality checks to ensure you receive nothing but the best.',
    ],
    image:
      'https://images.unsplash.com/photo-1640964911956-4bea9fe533c6?q=80&w=1287&auto=format&fit=crop',
    details: [
      'Hand-selected materials sourced responsibly',
      'ISO-certified manufacturing processes',
      'Flawless finishes and attention to detail',
      'Exceptional customer satisfaction and support',
    ],
  },
];

const AccessoriesHero = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]);

  return (
    <section
      aria-label="Accessories hero with dynamic features"
      className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20 my-[-50px] mb-[-30px]"
    >
      <div className="max-w-[1400px] w-full text-center flex flex-col items-center">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-black via-gray-700 to-gray-900 text-transparent bg-clip-text select-none leading-snug sm:leading-tight"
        >
          Elevate Your Accessories Game
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 sm:mt-4 max-w-[90%] sm:max-w-xl md:max-w-2xl text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed select-none"
        >
          Discover premium accessories that combine style, durability, and next-generation innovation — crafted to perfection.
        </motion.p>

        {/* Features List */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full">
          {featuresData.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className={`flex flex-col items-center rounded-lg p-2 sm:p-4 md:p-5 transition-colors duration-300 text-center text-xs sm:text-sm md:text-base font-semibold
                ${
                  activeFeature.id === feature.id
                    ? 'bg-black text-gray-900 shadow-lg shadow-black/40'
                    : 'bg-white text-black hover:bg-black hover:text-gray-900'
                }`}
              aria-pressed={activeFeature.id === feature.id}
            >
              <div className="mb-1 sm:mb-2">{feature.icon}</div>
              <span>{feature.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Dynamic Content Section */}
        <div className="mt-10 sm:mt-14 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="w-full sm:w-1/2 h-56 sm:h-72 md:h-[550px] lg:h-[600px] overflow-hidden">
                <img
                  src={activeFeature.image}
                  alt={`${activeFeature.title} illustration`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  draggable={false}
                />
              </div>
              {/* Content */}
              <div className="p-5 sm:p-8 md:p-12 lg:p-14 text-left sm:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
                  {activeFeature.title}
                </h2>
                {activeFeature.description.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm sm:text-base lg:text-lg"
                  >
                    {para}
                  </p>
                ))}

                <ul className="list-disc list-inside text-black space-y-1 sm:space-y-2 mb-4 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg">
                  {activeFeature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-black hover:bg-black text-gray-900 font-semibold rounded-full shadow-lg shadow-black/40 transition duration-300 text-xs sm:text-sm md:text-base"
                  onClick={() =>
                    alert(`Learn more about ${activeFeature.title}!`)
                  }
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesHero;
