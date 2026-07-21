'use client';

import React from 'react';
import {
  FaShippingFast,
  FaBirthdayCake,
  FaCrown,
  FaTags,
  FaClock,
  FaStar,
} from 'react-icons/fa';

// Data array listing all the member benefits with icon, title and description
const memberBenefits = [
  {
    icon: <FaShippingFast className="text-black text-2xl" />,
    title: 'Free Express Shipping',
    description: 'Enjoy free express delivery on all orders above a certain tier.',
  },
  {
    icon: <FaCrown className="text-black text-2xl" />,
    title: 'VIP Early Access',
    description: 'Get early access to new product drops and exclusive events.',
  },
  {
    icon: <FaBirthdayCake className="text-black text-2xl" />,
    title: 'Birthday Surprises',
    description: 'Receive special gifts and bonus points on your birthday.',
  },
  {
    icon: <FaTags className="text-black text-2xl" />,
    title: 'Exclusive Discounts',
    description: 'Unlock member-only deals and limited-time promotions.',
  },
  {
    icon: <FaStar className="text-black text-2xl" />,
    title: 'Loyalty Multipliers',
    description: 'Earn up to 2x points depending on your membership tier.',
  },
  {
    icon: <FaClock className="text-black text-2xl" />,
    title: 'Priority Support',
    description: 'Enjoy faster customer service and dedicated chat agents.',
  },
];

// Single benefit card component for reusability and clarity
function BenefitCard({ icon, title, description }) {
  return (
    <article
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg transition-all duration-300 hover:border-black"
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <div className="mb-4 flex justify-center items-center">{icon}</div>
      <h3 className="text-center text-black text-lg font-semibold mb-1">{title}</h3>
      <p className="text-center text-gray-600 text-sm">{description}</p>
    </article>
  );
}

export default function RewardingBenefitsGrid() {
  return (
    <section className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
        Member Benefits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberBenefits.map(({ icon, title, description }, idx) => (
          <BenefitCard
            key={idx}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
