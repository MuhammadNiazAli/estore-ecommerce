'use client';

import React from 'react';
import { FaGift } from 'react-icons/fa';

const GiftCardItem = ({ title, description, value, image }) => {
  return (
    <article
      role="group"
      tabIndex={0}
      aria-label={`${title} gift card valued at ${value}`}
      className="bg-white dark:bg-yellow-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer
        transform transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03] focus:outline-none"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={`Image for ${title}`}
          loading="lazy"
          decoding="async"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute top-3 right-3 bg-gradient-to-tr from-yellow-400 to-yellow-600 text-black
          font-extrabold px-3 py-1 rounded-full flex items-center gap-2 select-none shadow-md"
          aria-label={`Gift card value: ${value}`}
        >
          <FaGift className="text-lg" aria-hidden="true" />
          <span>{value}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3
          title={title}
          className="text-lg font-extrabold text-yellow-800 dark:text-yellow-300 truncate"
        >
          {title}
        </h3>

        <p
          title={description}
          className="text-yellow-700 dark:text-yellow-400 text-sm line-clamp-3"
        >
          {description}
        </p>

        <button
          type="button"
          className="mt-auto bg-yellow-400 text-black font-semibold rounded-full py-2 px-5
            shadow-md hover:bg-yellow-300 transition-colors duration-300 outline-none"
          aria-label={`Buy ${title} gift card`}
          onClick={() => alert(`Buying gift card: ${title}`)}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default GiftCardItem;
