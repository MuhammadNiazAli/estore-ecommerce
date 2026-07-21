import React, { useEffect, useState } from 'react';

const SaleHero = () => {
  // Real-time countdown logic (e.g., offer ends in 2 hours)
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="w-full bg-white text-gray-900 flex justify-center px-4">
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center py-16 md:py-24 px-4 my-[-50px]">
        
        {/* Gradient or Image Background Option */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white opacity-90 -z-10"></div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-600 leading-tight drop-shadow-lg">
          Mega Sale is Live!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Up to <span className="text-amber-600 font-bold">70% OFF</span> on
          top categories. Hurry! Limited-time deals just for you.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#sale-products"
            className="px-8 py-3 bg-amber-600 text-gray-900 font-semibold rounded-full shadow-md hover:scale-105 hover:bg-amber-500 transition-transform duration-300"
          >
            Shop Now
          </a>
          <a
            href="#categories"
            className="px-8 py-3 border border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-gray-900 hover:scale-105 transition-transform duration-300"
          >
            Browse Categories
          </a>
        </div>

        {/* Real Countdown */}
        <div className="mt-10 text-amber-500 text-sm md:text-lg font-semibold tracking-wide">
          Hurry! Offer ends in{" "}
          <span className="font-bold text-amber-600">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SaleHero;
