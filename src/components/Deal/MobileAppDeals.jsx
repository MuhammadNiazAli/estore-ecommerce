'use client';

import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa';

const MobileAppDeals = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4 flex justify-center mb-[-50px]">
      <div className="max-w-[1000px] flex flex-col-reverse sm:flex-row items-center gap-10">
    
        <div className="sm:w-1/2 text-center sm:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Unlock Exclusive Deals on Our Mobile App
          </h2>
          <p className="text-gray-400 max-w-md mx-auto sm:mx-0">
            Download the app now and get special discounts, early notifications, and seamless shopping anytime, anywhere.
          </p>

          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-black bg-opacity-60 hover:bg-opacity-80 transition px-5 py-3 rounded-xl shadow-md"
              aria-label="Download on the Apple App Store"
            >
              <FaApple size={24} />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-black bg-opacity-60 hover:bg-opacity-80 transition px-5 py-3 rounded-xl shadow-md"
              aria-label="Get it on Google Play"
            >
              <FaAndroid size={24} />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>

    
        <div className="sm:w-1/2 max-w-xs mx-auto">
          <img
            src="https://images.unsplash.com/photo-1560672657-a0431178403f?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mobile App Screenshot"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppDeals;
