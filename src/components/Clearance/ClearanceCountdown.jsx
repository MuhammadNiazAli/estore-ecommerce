import React, { useEffect, useState } from "react";

const ClearanceCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set countdown target date (e.g., 7 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-900 text-yellow-400 py-10 flex justify-center">
      <div className="max-w-[1000px] w-full text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Limited Time Clearance Deal!
        </h2>
        <p className="text-gray-300 mb-8">
          Hurry up! This deal ends soon. Don’t miss your chance to save big!
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg w-24 sm:w-28 md:w-32 py-4"
            >
              <div className="text-3xl md:text-4xl font-bold">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-gray-400 text-sm mt-1 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearanceCountdown;
