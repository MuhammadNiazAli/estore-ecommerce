'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUndoAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';

export default function PaymentHero() {
  return (
    <section
      className="
        relative z-10
        w-full max-w-[1200px]
        mx-auto
        bg-white
        rounded-2xl
        border border-black
        my-[-30px]
        px-4 sm:px-6 md:px-10
        py-12 sm:py-16 md:py-20
        flex flex-col items-center
        overflow-hidden
        mb-5
      "
    >
      <motion.div
        className="text-center w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-5">
          Complete Your Purchase Securely
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          You're one step closer to getting your items. Review your order and make secure payment with our trusted encrypted gateway.
        </p>
      </motion.div>

      {/* Step Progress */}
      <div className="
        relative w-full max-w-xl mx-auto mb-12 
        flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center 
        gap-y-6 px-2 sm:px-6
      ">
        <Step step={1} label="Cart" active />
        <Line className="hidden sm:block" active />
        <Step step={2} label="Details" />
        <Line className="hidden sm:block" />
        <Step step={3} label="Payment" />
        <Line className="hidden sm:block" />
        <Step step={4} label="Done" />
      </div>

      {/* Trust Features */}
      <div className="
        w-full flex flex-wrap justify-center
        gap-3 sm:gap-6
        px-1 sm:px-0
        text-gray-700
      ">
        <TrustBadge icon={<FaLock />} label="100% Secure Checkout" />
        <TrustBadge icon={<FaUndoAlt />} label="Free 30-Day Returns" />
        <TrustBadge icon={<FaTruck />} label="Fast Delivery Options" />
        <TrustBadge icon={<FaCheckCircle />} label="Verified Products" />
      </div>
    </section>
  );
}

function Step({ step, label, active }) {
  return (
    <div className="flex flex-col items-center text-center w-[25%] sm:w-auto min-w-[60px]">
      <div
        className={`
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full
          flex items-center justify-center
          font-semibold text-sm sm:text-base
          border-2 transition-all
          ${
            active
              ? 'bg-gradient-to-br from-black to-gray-900 border-black text-gray-900 shadow-lg shadow-black/30'
              : 'bg-white border-gray-300 text-gray-500'
          }
        `}
      >
        {step}
      </div>
      <span
        className={`
          mt-2 text-[10px] sm:text-sm font-medium transition-all
          ${active ? 'text-black' : 'text-gray-600'}
        `}
      >
        {label}
      </span>
    </div>
  );
}

function Line({ active, className = '' }) {
  return (
    <div
      className={`
        flex-1 h-0.5 sm:h-[6px] mx-1 sm:mx-2 rounded-full transition-all
        ${active ? 'bg-black' : 'bg-white'}
        ${className}
      `}
    />
  );
}

function TrustBadge({ icon, label }) {
  return (
    <div className="
      flex items-center gap-2
      bg-white
      border border-black/20
      rounded-full px-4 py-2
      text-sm sm:text-base font-medium
      text-black
      shadow-inner shadow-black/10
      min-w-[160px]
      justify-center
      text-center
    ">
      <span className="text-black text-base sm:text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
