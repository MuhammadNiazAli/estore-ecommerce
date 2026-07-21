'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Trees, Users } from 'lucide-react';

const initiatives = [
  {
    id: 1,
    title: 'Global Environmental Care',
    description:
      'We actively support reforestation and environmental conservation projects worldwide.',
    icon: <Trees className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />,
  },
  {
    id: 2,
    title: 'Community Health & Wellness',
    description:
      'Providing healthcare access and wellness education to underserved communities.',
    icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" />,
  },
  {
    id: 3,
    title: 'Empowering Local Leaders',
    description:
      'Training and mentoring local leaders to foster sustainable development.',
    icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
  },
  {
    id: 4,
    title: 'Global Collaboration Network',
    description:
      'Building partnerships with NGOs and organizations to maximize impact.',
    icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
  },
];

const ResponsibilityInitiatives = () => {
  return (
    <div className="w-full bg-white flex justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1000px] w-full text-center px-2 sm:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-amber-600 text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-12"
        >
          Our Key Initiatives
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-gray-700">
          {initiatives.map(({ id, title, description, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl p-5 sm:p-6 cursor-default hover:shadow-lg hover:scale-[1.04] transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-amber-600 text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityInitiatives;
