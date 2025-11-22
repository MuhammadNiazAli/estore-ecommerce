'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Leaf, Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'ISO 14001:2015',
    description: 'Environmental Management Certified',
    icon: <Leaf className="w-8 h-8 text-green-400" />,
  },
  {
    id: 2,
    title: 'Global Compact',
    description: 'UN-backed Sustainability Commitment',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 3,
    title: 'Fair Trade Verified',
    description: 'Ethical Production & Labor Standards',
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 4,
    title: 'Innovation Award 2025',
    description: 'For Responsible AI & Innovation',
    icon: <Award className="w-8 h-8 text-purple-400" />,
  },
];

const ResponsibilityCertifications = () => {
  return (
    <section className="w-full bg-gray-900 flex justify-center px-4 py-14 sm:py-20 mb-0 my[-30px]">
      <div className="w-full max-w-[1000px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-12 select-none"
        >
          Certifications & Recognitions
        </motion.h2>

        {/* Certification Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:border-yellow-500 transition-all duration-300 group cursor-default focus:outline-yellow-400 focus:outline-2 focus:outline-offset-2"
              tabIndex={0}
              aria-label={`${cert.title}: ${cert.description}`}
              role="region"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="p-3 bg-gray-900 rounded-full border border-gray-700 group-hover:border-yellow-400 transition-colors duration-300 flex items-center justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-400">{cert.title}</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{cert.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityCertifications;
