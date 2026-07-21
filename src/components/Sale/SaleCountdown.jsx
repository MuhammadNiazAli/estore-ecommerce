import React, { useEffect, useState } from "react";

const SaleCountdown = ({ endDate = "2025-08-05T23:59:59" }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { expired: true };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex justify-center px-4 my-[-30px]">
      <div className="max-w-[1000px] w-full bg-white rounded-2xl text-center py-8 md:py-12 px-4 sm:px-6 lg:px-8 shadow-lg border border-gray-200">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-600 mb-3 md:mb-4 leading-tight">
          Hurry! Exclusive Deal Ends Soon
        </h2>

        {timeLeft.expired ? (
          <p className="text-lg md:text-xl text-gray-700 font-semibold mt-4">
            The offer has ended. Stay tuned for upcoming deals!
          </p>
        ) : (
          <>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
              Don’t miss out — this special sale ends in:
            </p>

            {/* Countdown Display */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white text-amber-600 rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 min-w-[65px] sm:min-w-[80px] md:min-w-[100px] shadow-md"
                >
                  <span className="text-xl sm:text-3xl md:text-4xl font-bold">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 mt-1 uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SaleCountdown;
