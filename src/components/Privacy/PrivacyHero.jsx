'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyHero = () => {
  return (
    <section
      className="bg-white text-amber-600 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 my-[-100px]"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Privacy Policy Hero Section"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-amber-600 px-2 sm:px-0"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your Privacy, Our Priority
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-amber-500 max-w-3xl mx-auto px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At <span className="font-semibold">[Your SaaS Name]</span>, we are committed to protecting your data, honoring your trust, and ensuring complete transparency about how your information is collected, used, and stored.
        </motion.p>

        {/* Feature List */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-6 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Item 1 */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">GDPR & CCPA Compliant</span>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">End-to-End Encryption</span>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <EyeOff className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">No Third-Party Tracking</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyHero;
