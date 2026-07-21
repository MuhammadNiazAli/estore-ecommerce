'use client';

import React from 'react';

const offers = [
  {
    id: 1,
    title: 'Summer Special Bundle',
    discount: '25% OFF',
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Buy 1 Get 1 Free',
    discount: 'BOGO OFFER',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Exclusive Tech Gifts',
    discount: '15% OFF',
    img: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Handmade Crafts Sale',
    discount: '30% OFF',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
  },
];

export default function GiftMobileOffers() {
  return (
    <section
      className="bg-white py-8 px-6 rounded-lg max-w-full overflow-x-hidden"
      aria-labelledby="mobile-offers-title"
    >
      <h2
        id="mobile-offers-title"
        className="text-amber-600 text-2xl font-extrabold mb-6 text-center drop-shadow-lg"
      >
        Mobile Exclusive Offers
      </h2>

      <div
        role="list"
        aria-label="Mobile gift offers carousel"
        className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-800 snap-x snap-mandatory scroll-smooth focus:outline-none"
        tabIndex={0}
      >
        {offers.map(({ id, title, discount, img }) => (
          <article
            key={id}
            role="listitem"
            tabIndex={0}
            aria-label={`${title} with ${discount}`}
            onClick={() => alert(`Clicked offer: ${title}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                alert(`Clicked offer: ${title}`);
              }
            }}
            className="relative flex-shrink-0 w-72 snap-center rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white 
                       hover:scale-105 transform transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-44 object-cover"
              loading="lazy"
              decoding="async"
              width={288}
              height={176}
            />
            <div className="p-4">
              <h3 className="text-amber-600 font-bold text-lg mb-1 truncate">{title}</h3>
              <span
                className="inline-block bg-amber-600 text-gray-900 font-extrabold px-3 py-1 rounded-full text-xs select-none"
                aria-label={`Discount: ${discount}`}
              >
                {discount}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
