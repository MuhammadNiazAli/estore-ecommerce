'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiUserCheck,
  FiLogOut,
  FiPackage,
  FiCheckCircle,
  FiMessageCircle,
} from 'react-icons/fi';

const profileImage =
  'https://images.unsplash.com/photo-1671314986660-cb06c809c05f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const AccountHero = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <section
      aria-label="User dashboard welcome section"
      className="w-full max-w-[1200px] mx-auto px-6 py-14 lg:py-20 mb-6 bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden relative my-[-35px]"
    >
      {/* Top Icon */}
      <div className="absolute md:block hidden top-5 left-5 text-yellow-400 text-4xl opacity-10 pointer-events-none select-none">
        <FiUserCheck aria-hidden="true" />
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden flex justify-start items-start absolute top-4 left-4 text-yellow-400 opacity-20 text-3xl">
        <FiUserCheck aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10 md:mt-0">
        {/* Welcome Text Block */}
        <motion.div
          className="space-y-6 text-center md:text-left max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {greeting},{' '}
            <span className="block mt-2 text-yellow-400 underline decoration-yellow-300 decoration-4 underline-offset-4">
              NDev
            </span>
          </h1>

          <p className="inline-block bg-yellow-500/20 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full tracking-wide select-none w-max">
            Pro Developer
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            You’re all set to continue where you left off. Access your projects,
            refine your profile, and move forward as a developer with clarity and
            confidence.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8 mt-4 text-yellow-400">
            <div className="flex items-center gap-1 md:gap-2">
              <FiPackage className="text-base md:text-xl" aria-hidden="true" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">
                24 Projects
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <FiCheckCircle className="text-base md:text-xl" aria-hidden="true" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">
                12 Completed
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <FiMessageCircle className="text-base md:text-xl" aria-hidden="true" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">
                5 Messages
              </span>
            </div>
          </div>

          {/* Motivational Quote */}
          <p className="mt-5 text-yellow-300 italic text-xs sm:text-sm max-w-md mx-auto md:mx-0">
            "Code is like humor. When you have to explain it, it’s bad." — Cory House
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 pt-6">
            <Link href="/account/orders" passHref>
              <button
                aria-label="View your project history"
                className="px-6 sm:px-7 py-2.5 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              >
                Project History
              </button>
            </Link>

            <Link href="/account/profile" passHref>
              <button
                aria-label="Manage your profile"
                className="px-6 sm:px-7 py-2.5 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Manage Profile
              </button>
            </Link>

            <button
              aria-label="Logout"
              onClick={() => alert('Logging out...')}
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-700 text-yellow-400 font-semibold rounded-full shadow-md hover:bg-gray-600 hover:text-yellow-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              type="button"
            >
              <FiLogOut className="text-lg" aria-hidden="true" />
              Logout
            </button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] bg-gray-700 transition-transform duration-300 hover:scale-105"
            role="img"
            aria-label="User profile picture"
          >
            <img
              src={profileImage}
              alt="User profile"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountHero;
