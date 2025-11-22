'use client';
import React, { useEffect, useState } from 'react';

const BestdealsCountdown = () => {
  const countdownTarget = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days from now

  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = countdownTarget - now;

      if (diff <= 0) {
        clearInterval(interval);
        setExpired(true);
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownTarget]);

  const TimeBox = ({ label, value }) => (
    <div className="flex flex-col items-center bg-gray-800 rounded-xl px-4 py-4 sm:px-6 sm:py-5 shadow-lg min-w-[70px] sm:min-w-[90px]">
      <span className="text-yellow-400 text-3xl sm:text-4xl font-extrabold tabular-nums transition-all duration-300">
        {value}
      </span>
      <span className="text-gray-400 text-xs sm:text-sm uppercase mt-1 tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <section className="bg-gray-900 text-white flex justify-center py-10 px-4 sm:px-6">
      <div className="max-w-[1200px] w-full text-center">
        {expired ? (
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-bold">
            Deal Ended
          </h2>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Hurry! Limited Time Offer Ends Soon
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BestdealsCountdown;
