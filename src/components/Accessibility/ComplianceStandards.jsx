'use client';

import React from 'react';
import { CheckCircle, ShieldCheck, ClipboardCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const standards = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-amber-600" />,
    title: 'WCAG 2.1',
    description: 'Web Content Accessibility Guidelines provide a wide range of recommendations to make web content more accessible.',
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-amber-600" />,
    title: 'ADA Compliance',
    description: 'The Americans with Disabilities Act requires accessible public web content for individuals with disabilities.',
  },
  {
    icon: <ClipboardCheck className="w-7 h-7 text-amber-600" />,
    title: 'Section 508',
    description: 'A US federal standard that requires electronic and information technology to be accessible to people with disabilities.',
  },
  {
    icon: <FileText className="w-7 h-7 text-amber-600" />,
    title: 'EN 301 549',
    description: 'European standard for ICT products and services accessibility requirements.',
  },
];

const ComplianceStandards = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 mb-[-50px] my-10">
      <div className="max-w-[1000px] mx-auto space-y-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-amber-500"
        >
          Compliance Standards
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg"
        >
          We adhere to the highest standards to ensure our website is accessible and inclusive to all users.
        </motion.p>

        {/* Standards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 text-left">
          {standards.map((standard, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-shadow duration-500 hover:shadow-gray-950/80 hover:border-gray-300 cursor-default"
            >
              <div className="flex items-center space-x-3 mb-3">
                {standard.icon}
                <h3 className="text-lg font-semibold text-amber-400">{standard.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{standard.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
