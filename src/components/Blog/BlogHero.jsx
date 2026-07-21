'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="bg-white w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 my-[-50px]">
      <div className="max-w-[1000px] w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-black text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3">
            Welcome to Our Blog
          </h2>
          <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Discover Insights, Tips & Stories
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Explore high-quality articles on design, development, tech trends, and eCommerce strategies written by professionals.
          </p>
          <motion.a
            href="#latest-blogs"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-black text-gray-900 px-5 py-3 font-semibold rounded-lg hover:bg-black transition-colors mx-auto md:mx-0"
          >
            Read Latest Blogs <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Right Blog Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center md:justify-end w-full max-w-[480px]"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog illustration"
            width={480}
            height={360}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
