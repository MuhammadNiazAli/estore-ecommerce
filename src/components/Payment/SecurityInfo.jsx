import React from "react";
import { FiLock, FiCreditCard } from "react-icons/fi";
import { MdOutlineMoneyOff } from "react-icons/md";

export default function SecurityInfo() {
  const features = [
    {
      icon: <FiLock aria-hidden="true" />,
      label: "Secure SSL Encryption",
    },
    {
      icon: <FiCreditCard aria-hidden="true" />,
      label: "Trusted Payment Gateways",
    },
    {
      icon: <MdOutlineMoneyOff aria-hidden="true" />,
      label: "30-day Money-back Guarantee",
    },
  ];

  return (
    <section
      aria-labelledby="security-info-title"
      className="bg-gray-900 px-4 sm:px-6 py-16 sm:py-24 flex justify-center my-15 lg:my-0 mb-[-20px]"
    >
      <div
        className="
          w-full max-w-5xl
          bg-gray-900
          rounded-3xl
          border border-yellow-600
          shadow-lg shadow-yellow-900/30
          backdrop-blur-md
          p-8 sm:p-14
          text-white
          select-none
          transition-all
          -mt-24 sm:-mt-20 mb-[-60px]
          focus-within:shadow-yellow-600/60
        "
      >
        <h2
          id="security-info-title"
          className="text-2xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight drop-shadow-md"
        >
          Your Security & Guarantee
        </h2>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20"
        >
          {features.map(({ icon, label }, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className="
                  flex items-center justify-center
                  w-14 h-14
                  bg-yellow-600/20
                  rounded-full
                  text-yellow-400 text-3xl
                  drop-shadow-lg
                  group transition-transform
                  hover:scale-110 focus-within:scale-110
                  cursor-default
                "
                tabIndex={-1}
              >
                {icon}
              </div>
              <p className="text-base sm:text-lg font-semibold tracking-wide leading-snug">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
