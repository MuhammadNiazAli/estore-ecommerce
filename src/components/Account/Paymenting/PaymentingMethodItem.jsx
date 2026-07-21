'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const PaymentingMethodItem = ({
  id,
  name,
  description,
  icon,
  features = [],
  selected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={`
        w-full flex items-start gap-5 p-5 rounded-xl border
        transition-shadow duration-300 ease-in-out
        ${
          selected
            ? 'border-black bg-black shadow-lg ring-2 ring-black'
            : 'border-gray-200 bg-white hover:border-black hover:bg-gray-500 focus:ring-2 focus:ring-black'
        }
        focus:outline-none
        active:scale-[0.98] active:shadow-inner
      `}
    >
      <div
        className={`
          flex-shrink-0 flex items-center justify-center rounded-lg
          ${
            selected
              ? 'bg-black text-black'
              : 'bg-white text-gray-600 group-hover:text-black'
          }
          w-14 h-14
          transition-colors duration-300
        `}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="flex-grow text-left">
        <div className="flex items-center justify-between mb-1">
          <h3
            className={`text-lg md:text-xl font-semibold ${
              selected ? 'text-black' : 'text-gray-900'
            }`}
          >
            {name}
          </h3>

          {selected && (
            <FiCheckCircle
              className="text-black"
              size={22}
              aria-hidden="true"
              title="Selected payment method"
            />
          )}
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-4 text-gray-700 text-xs md:text-sm">
            {features.map(({ icon, text }, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-black flex-shrink-0">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </button>
  );
};

export default PaymentingMethodItem;
