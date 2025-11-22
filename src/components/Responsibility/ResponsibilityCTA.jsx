'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ResponsibilityCTA = () => {
  const handleClick = () => {
    alert('Redirecting to Responsibility Program...');
  };

  return (
    <section
      aria-label="Call to action to join the responsibility program "
      className="w-full bg-gray-900 flex justify-center px-4 py-12 sm:py-16 md:py-20 mb-0"
    >
      <div className="w-full max-w-[1000px] bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl text-center px-5 sm:px-8 py-10 sm:py-14">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 select-none px-2 sm:px-0"
        >
          Ready to Make an Impact?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed px-2 sm:px-0"
        >
          Join our mission to create a sustainable and ethical future. Whether you're a customer, partner, or innovator — your actions matter.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 sm:px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60 select-none text-sm sm:text-base md:text-lg"
          aria-label="Get involved in the responsibility program"
        >
          Get Involved
          <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default ResponsibilityCTA;
