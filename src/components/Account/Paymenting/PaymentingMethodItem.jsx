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
            ? 'border-yellow-500 bg-yellow-950 shadow-lg ring-2 ring-yellow-500'
            : 'border-gray-700 bg-gray-900 hover:border-yellow-500 hover:bg-gray-800 focus:ring-2 focus:ring-yellow-500'
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
              ? 'bg-yellow-700 text-yellow-300'
              : 'bg-gray-800 text-gray-400 group-hover:text-yellow-400'
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
              selected ? 'text-yellow-400' : 'text-white'
            }`}
          >
            {name}
          </h3>

          {selected && (
            <FiCheckCircle
              className="text-yellow-400"
              size={22}
              aria-hidden="true"
              title="Selected payment method"
            />
          )}
        </div>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-4 text-gray-300 text-xs md:text-sm">
            {features.map(({ icon, text }, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-yellow-500 flex-shrink-0">{icon}</span>
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
