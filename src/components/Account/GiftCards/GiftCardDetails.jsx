'use client';

import React, { useRef, useEffect } from 'react';
import { FaGift, FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa';

const GiftCardDetails = ({
  giftCard = {
    title: 'Birthday Special Gift Card',
    description:
      'Celebrate special moments with this customizable birthday gift card. Redeemable online or in-store.',
    image:
      'https://images.unsplash.com/photo-1634195130430-2be61200b66a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    value: 100,
    currency: 'USD',
    expiry: '2026-12-31',
    popular: true,
  },
  onBack = null,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const formatCurrency = (val, curr = 'USD') =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: curr }).format(val);

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label={`Detailed information about ${giftCard.title}`}
      className="max-w-[900px] mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden p-8 flex flex-col lg:flex-row gap-8
        transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(202,138,4,0.5)]"
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full lg:w-1/3 rounded-xl overflow-hidden shadow-lg ring-1 ring-yellow-700">
        <img
          src={giftCard.image}
          alt={`${giftCard.title} image`}
          className="object-cover w-full h-48 sm:h-64 lg:h-full transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3 text-yellow-300 select-text">
            <FaGift className="text-yellow-400" aria-hidden="true" />
            {giftCard.title}
            {giftCard.popular && (
              <span
                className="ml-2 inline-flex items-center gap-1 bg-yellow-400 text-black text-xs font-bold uppercase
                  rounded-full px-2 py-0.5 select-none"
                aria-label="Popular gift card badge"
              >
                <FaStar /> Popular
              </span>
            )}
          </h2>

          <p className="text-yellow-200 mb-6 leading-relaxed">{giftCard.description}</p>

          <ul className="text-yellow-300 space-y-3 text-sm sm:text-base select-text">
            <li className="flex items-center gap-3">
              <FaDollarSign className="text-yellow-400" />
              <span>
                Value:{' '}
                <strong className="text-white">
                  {formatCurrency(giftCard.value, giftCard.currency)}
                </strong>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaCalendarAlt className="text-yellow-400" />
              <span>
                Expiry Date:{' '}
                <strong className="text-white">{formatDate(giftCard.expiry)}</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="text-yellow-300 underline hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 rounded"
              aria-label="Back to gift card list"
            >
              &larr; Back to List
            </button>
          )}

          <button
            type="button"
            className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md
              hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
              active:scale-[0.97] active:bg-yellow-500 select-none"
            aria-label={`Buy ${giftCard.title} gift card`}
            onClick={() => alert(`Buying gift card: ${giftCard.title}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftCardDetails;
