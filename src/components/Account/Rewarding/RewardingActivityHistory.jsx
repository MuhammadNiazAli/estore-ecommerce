'use client';

import React from 'react';
import { FaStar, FaGift, FaShoppingCart } from 'react-icons/fa';

// Individual activity entry component
function ActivityItem({ icon, title, description, date, points }) {
  return (
    <div className="flex items-start gap-4 border-l-4 border-yellow-400 pl-4 relative">
      <div
        className="absolute left-[-14px] top-1 bg-gray-900 border-2 border-yellow-400 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-bold text-yellow-300">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <time className="text-xs text-gray-500 mt-1" dateTime={date}>
          {date}
        </time>
      </div>

      <div className="text-sm font-semibold text-yellow-400 whitespace-nowrap">{points}</div>
    </div>
  );
}

const activities = [
  {
    icon: <FaShoppingCart className="text-yellow-400" />,
    title: 'Points Earned',
    description: 'You earned 120 points for your order #DZR10234',
    date: '2025-07-10',
    points: '+120',
  },
  {
    icon: <FaGift className="text-yellow-400" />,
    title: 'Reward Redeemed',
    description: 'Redeemed a 10% Discount Coupon using 300 points',
    date: '2025-07-06',
    points: '-300',
  },
  {
    icon: <FaStar className="text-yellow-400" />,
    title: 'Tier Upgrade',
    description: 'Congratulations! You’ve been upgraded to Gold Tier',
    date: '2025-06-29',
    points: '+Bonus',
  },
];

export default function RewardingActivityHistory() {
  return (
    <section className="w-full bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
        Reward Activity History
      </h2>

      <div className="space-y-6" role="list" aria-label="Reward activity timeline">
        {activities.map((activity, idx) => (
          <ActivityItem
            key={idx}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            points={activity.points}
          />
        ))}
      </div>
    </section>
  );
}
