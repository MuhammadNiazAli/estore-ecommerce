'use client';

import React from 'react';
import { LightBulbIcon, GiftIcon, ClockIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const tips = [
  {
    icon: <LightBulbIcon className="w-6 h-6 text-black" />,
    title: 'Know Their Preferences',
    description: 'Consider the recipient’s hobbies, tastes, and interests for a thoughtful gift.',
  },
  {
    icon: <GiftIcon className="w-6 h-6 text-black" />,
    title: 'Personalize Your Gift',
    description: 'Add a personal message or custom wrapping to make your gift stand out.',
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-black" />,
    title: 'Plan Ahead',
    description: 'Avoid last-minute stress by shopping early and checking delivery times.',
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 text-black" />,
    title: 'Consider Group Gifts',
    description: 'Collaborate with friends or family to give a more memorable present.',
  },
  {
    icon: <StarIcon className="w-6 h-6 text-black" />,
    title: 'Quality Over Quantity',
    description: 'Choose a meaningful gift rather than multiple less thoughtful items.',
  },
];

export default function GiftTips() {
  return (
    <section className="max-w-[1000px] mx-auto p-6 bg-white rounded-lg shadow-2xl text-gray-900">
      <h2 className="text-black text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
        Gift Giving Tips
      </h2>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5"
      >
        {tips.map(({ icon, title, description }, i) => (
          <li
            key={i}
            className="flex gap-4 p-4 bg-black/20 rounded-md border border-black/30 hover:bg-black/40 transition cursor-default"
          >
            <div>{icon}</div>
            <div>
              <h3 className="text-black font-semibold text-lg">{title}</h3>
              <p className="text-gray-700 text-sm mt-1">{description}</p>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}  