import React, { useEffect, useState } from 'react';

const NewseasonCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target date: 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 px-6 my-[-30px]">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-4">
          Limited Time New Season Offer!
        </h2>
        <p className="text-amber-400 text-lg mb-10">
          Hurry up! This exclusive deal ends soon. Don’t miss out.
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-10">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-lg border border-amber-600"
            >
              <span className="text-amber-600 text-3xl font-bold">{item.value}</span>
              <span className="text-amber-400 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <button className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default NewseasonCountdown;
