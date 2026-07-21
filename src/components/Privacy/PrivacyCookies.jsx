'use client';

import React from 'react';
import { Cookie, Info, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyCookies = () => {
  return (
    <section
      className="bg-white text-black w-full flex justify-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Cookies Usage Section"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-3xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How We Use Cookies
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-black max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We use cookies to improve your experience, personalize content, and analyze site performance.
          You can control your cookie preferences at any time.
        </motion.p>

        {/* Cookie Types */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Essential Cookies */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Cookie className="w-6 h-6 mt-1 text-black shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Essential Cookies</p>
              <p className="text-black text-xs sm:text-sm leading-relaxed">
                Required for basic website functionality, such as secure login, account settings,
                and form submissions.
              </p>
            </div>
          </motion.div>

          {/* Performance Cookies */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Timer className="w-6 h-6 mt-1 text-black shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Performance Cookies</p>
              <p className="text-black text-xs sm:text-sm leading-relaxed">
                Help us understand how users interact with the site so we can improve usability
                and performance.
              </p>
            </div>
          </motion.div>

          {/* Preference Cookies */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Info className="w-6 h-6 mt-1 text-black shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Preference Cookies</p>
              <p className="text-black text-xs sm:text-sm leading-relaxed">
                Enable the website to remember your settings and preferences for a more personalized experience.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Consent Notice */}
        <motion.p
          className="pt-8 text-xs sm:text-sm text-black max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          By continuing to use our website, you agree to the placement of cookies on your device
          unless you disable them via your browser settings. You may also review or change your cookie
          preferences through our Cookie Settings panel.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyCookies;
