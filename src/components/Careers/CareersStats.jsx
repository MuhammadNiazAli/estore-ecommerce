'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  GlobeAltIcon,
  TrophyIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    icon: UsersIcon,
    value: '150+',
    label: 'Team Members',
  },
  {
    icon: GlobeAltIcon,
    value: '20+',
    label: 'Countries Reached',
  },
  {
    icon: TrophyIcon,
    value: '50+',
    label: 'Projects Launched',
  },
  {
    icon: BuildingOfficeIcon,
    value: '5',
    label: 'Global Offices',
  },
];

const CareersStats = () => {
  return (
    <section className="bg-gray-900 w-full flex justify-center px-4">
      <div className="w-full max-w-[1100px] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12"
        >
          We’re Growing Fast
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <item.icon className="h-9 w-9 text-yellow-400 mb-3" aria-hidden="true" />
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">{item.value}</div>
              <div className="mt-1 text-sm sm:text-base text-yellow-100">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersStats;
