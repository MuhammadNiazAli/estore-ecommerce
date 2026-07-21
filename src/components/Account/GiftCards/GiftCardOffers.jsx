'use client';

import React, { useEffect, useState } from 'react';
import { FaTags, FaPercent, FaClock, FaHourglassHalf } from 'react-icons/fa';

// Helper to add days to current date and return ISO string
const addDaysToNow = (days) => {
  const now = new Date();
  now.setDate(now.getDate() + days);
  return now.toISOString();
};

const offersData = [
  {
    id: 1,
    title: 'Summer Bonus',
    description: 'Get extra 15% value on all gift cards purchased this summer.',
    icon: <FaPercent className="text-black text-xl" aria-hidden="true" />,
    validTill: addDaysToNow(30), // expires in 30 days
  },
  {
    id: 2,
    title: 'Limited Time Flash Sale',
    description: 'Buy a $100 gift card and get $20 extra credit.',
    icon: <FaTags className="text-black text-xl" aria-hidden="true" />,
    validTill: addDaysToNow(15), // expires in 15 days
  },
  {
    id: 3,
    title: 'Holiday Early Bird',
    description: 'Pre-order holiday gift cards and enjoy exclusive discounts.',
    icon: <FaClock className="text-black text-xl" aria-hidden="true" />,
    validTill: addDaysToNow(45), // expires in 45 days
  },
];

// Format remaining time into readable string
const formatRemainingTime = (ms) => {
  if (ms <= 0) return null;

  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  const parts = [];
  if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (seconds >= 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  return parts.join(', ');
};

const GiftCardOffers = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleActivate = (offer) => {
    alert(`Activated offer: ${offer.title}`);
  };

  return (
    <section
      aria-label="Current gift card offers and promotions"
      className="max-w-[900px] mx-auto p-6 bg-white text-black rounded-3xl shadow-2xl"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-black select-none">Special Offers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {offersData.map(({ id, title, description, icon, validTill }) => {
          const expiryTime = new Date(validTill).getTime();
          const timeLeft = expiryTime - now;
          const isExpired = timeLeft <= 0;
          const countdown = formatRemainingTime(timeLeft);

          return (
            <article
              key={id}
              tabIndex={0}
              role="region"
              aria-label={`${title} offer${isExpired ? ', expired' : ''}`}
              aria-describedby={`offer-desc-${id} offer-countdown-${id}`}
              aria-disabled={isExpired}
              className={`rounded-xl p-5 flex flex-col gap-4 shadow-md transition-colors duration-300
                ${
                  isExpired
                    ? 'bg-black text-black cursor-not-allowed opacity-60'
                    : 'bg-black hover:bg-black focus-within:bg-black focus:outline-none focus:ring-2 focus:ring-black'
                }`}
            >
              <div className="flex items-center gap-3 text-black select-none">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <p id={`offer-desc-${id}`} className="text-black text-sm flex-grow">
                {description}
              </p>

              <p
                id={`offer-countdown-${id}`}
                className={`text-xs italic flex items-center gap-1 select-none ${
                  isExpired ? 'text-black' : 'text-black'
                }`}
                aria-live="polite"
              >
                <FaHourglassHalf aria-hidden="true" />
                {isExpired ? 'Offer expired' : `Ends in: ${countdown}`}
              </p>

              <button
                type="button"
                disabled={isExpired}
                aria-label={isExpired ? `${title} offer expired` : `Activate offer: ${title}`}
                onClick={() => !isExpired && handleActivate({ id, title })}
                className={`mt-auto px-5 py-2 rounded-full font-semibold shadow-md text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                  ${
                    isExpired
                      ? 'bg-black cursor-not-allowed opacity-50 pointer-events-none'
                      : 'bg-black hover:bg-black'
                  }`}
              >
                {isExpired ? 'Expired' : 'Activate Offer'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default GiftCardOffers;
