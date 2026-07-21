'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';


function getTimeLeft(endTime) {
  const now = new Date().getTime();
  const end = new Date(endTime).getTime();
  const diff = end - now;
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const FlashDealTimer = ({
  endTime = '2025-07-20T23:59:59',
  onExpire = () => console.log('Flash deal expired'),
}) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endTime));
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!timeLeft) {
      setExpired(true);
      onExpire();
      return;
    }

    const interval = setInterval(() => {
      const updated = getTimeLeft(endTime);
      if (!updated) {
        setExpired(true);
        setTimeLeft(null);
        onExpire();
        clearInterval(interval);
      } else {
        setTimeLeft(updated);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, onExpire]);

  return (
    <section
      className="w-full bg-white text-gray-900 py-12 px-6 flex justify-center mb-[-30px]"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={`max-w-[960px] w-full rounded-3xl p-8 shadow-xl border
        ${
          expired
            ? 'bg-black border-black text-black animate-pulse'
            : 'bg-black border-black text-black'
        }`}
        role="region"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        
          <div className="text-center sm:text-left max-w-md space-y-3">
            <h2
              className={`font-extrabold tracking-tight text-3xl sm:text-4xl ${
                expired ? 'text-black' : 'text-black'
              }`}
            >
              {expired ? 'Deal Expired' : 'Limited Time Flash Deal!'}
            </h2>
            <p
              className={`text-base font-medium max-w-sm ${
                expired ? 'text-black' : 'text-black'
              }`}
            >
              {expired
                ? 'Sorry, this exclusive offer is no longer available.'
                : 'Act fast! Snag your favorites before the timer runs out.'}
            </p>
          </div>

         
          {!expired && timeLeft ? (
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <TimeBox
                label="Seconds"
                value={timeLeft.seconds}
                pulse={timeLeft.seconds <= 15}
              />
              <FiClock
                size={24}
                className="text-black ml-2 flex-shrink-0"
                aria-hidden="true"
              />
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-xl sm:text-2xl font-bold text-black"
            >
              Deal Ended
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};


const TimeBox = ({ label, value, pulse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`min-w-[60px] sm:min-w-[70px] rounded-xl px-4 py-2 flex flex-col items-center
        bg-black text-black font-semibold
        ${pulse ? 'border border-black animate-pulse' : ''}`}
      aria-label={`${value} ${label}`}
      role="timer"
    >
      <span className="text-2xl sm:text-3xl leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm uppercase mt-1 tracking-widest">{label}</span>
    </motion.div>
  );
};

export default FlashDealTimer;
