'use client';

import React, { useState, useEffect } from 'react';

const DealOfTheHour = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date(new Date().getTime() + 3600 * 1000) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { hours, minutes, seconds } = timeLeft;

  return (
    <section className="w-full max-w-[1000px] mx-auto bg-gray-900 text-white rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6">
    
      <div className="relative w-full sm:w-1/3 h-48 sm:h-56 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-md">
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Deal Product"
          className="w-full h-full object-cover"
        />
      </div>

  
      <div className="flex flex-col justify-center w-full sm:w-2/3 space-y-4">
        <h2 className="text-3xl font-bold">Deal of the Hour</h2>
        <p className="text-gray-300 max-w-lg">
          Get this amazing wireless speaker at a limited time discount. Hurry before it’s gone!
        </p>


        <div className="flex items-center gap-4">
          <span className="text-yellow-400 text-3xl font-extrabold">$49</span>
          <span className="line-through text-gray-500 text-lg">$79</span>
        </div>

   
        <div className="flex gap-4 text-center font-mono text-xl">
          <div className="bg-gray-800 px-4 py-2 rounded-lg w-16">
            <div>{hours.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">HRS</div>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg w-16">
            <div>{minutes.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">MIN</div>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg w-16">
            <div>{seconds.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">SEC</div>
          </div>
        </div>


        <button className="mt-4 sm:mt-6 bg-yellow-400 text-black font-semibold py-3 rounded-full max-w-xs w-full hover:bg-yellow-300 transition">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default DealOfTheHour;
