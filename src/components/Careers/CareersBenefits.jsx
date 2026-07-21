'use client';

import React from 'react';
import { HeartIcon, AcademicCapIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote-friendly culture help you thrive personally and professionally.',
    icon: <ClockIcon className="h-8 w-8 text-black" />,
  },
  {
    title: 'Continuous Learning',
    description: 'Access to courses, conferences, and personal development tools to grow your skills.',
    icon: <AcademicCapIcon className="h-8 w-8 text-black" />,
  },
  {
    title: 'Meaningful Impact',
    description: 'Contribute to projects that matter, with real-world impact and ownership.',
    icon: <SparklesIcon className="h-8 w-8 text-black" />,
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive benefits that support your mental and physical health.',
    icon: <HeartIcon className="h-8 w-8 text-black" />,
  },
];

const CareersBenefits = () => {
  return (
    <section className="bg-white w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Benefits That Empower You
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-black text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersBenefits;
