'use client';
import React from 'react';
import { motion } from 'framer-motion';

const boardMembers = [
  {
    name: 'Jane Doe',
    role: 'Chairperson',
    bio: 'Over 20 years of leadership experience in corporate governance and strategy.',
  },
  {
    name: 'John Smith',
    role: 'Independent Director',
    bio: 'Expert in financial oversight and risk management with a strong background in banking.',
  },
  {
    name: 'Emily Johnson',
    role: 'CEO',
    bio: 'Driving company growth and innovation with a focus on sustainability and ethics.',
  },
];

const committees = [
  {
    name: 'Audit Committee',
    description:
      'Oversees financial reporting, internal controls, and compliance with regulations.',
  },
  {
    name: 'Compensation Committee',
    description:
      'Responsible for executive compensation policies and employee incentives.',
  },
  {
    name: 'Nominating Committee',
    description:
      'Identifies and recommends candidates for the Board of Directors and leadership roles.',
  },
];

const governancePrinciples = [
  'Transparency and accountability in all business practices.',
  'Ethical conduct as the foundation of corporate culture.',
  'Commitment to shareholder rights and equitable treatment.',
  'Sustainability and social responsibility integrated into strategy.',
  'Continuous evaluation and improvement of governance frameworks.',
];

const InvestorsGovernance = () => {
  return (
    <section
      aria-label="Corporate Governance"
      className="bg-white text-black flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center"
        >
          Corporate Governance
        </motion.h2>

        {/* Board of Directors */}
        <section aria-labelledby="board-title" className="space-y-8">
          <h3
            id="board-title"
            className="text-2xl font-semibold text-black border-b border-black pb-2"
          >
            Board of Directors
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map(({ name, role, bio }, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-black/40 transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-black">{name}</h4>
                <p className="text-sm italic text-black mb-2">{role}</p>
                <p className="text-sm text-black leading-relaxed">{bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Governance Committees */}
        <section aria-labelledby="committees-title" className="space-y-8">
          <h3
            id="committees-title"
            className="text-2xl font-semibold text-black border-b border-black pb-2"
          >
            Governance Committees
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {committees.map(({ name, description }, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-black/40 transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-black">{name}</h4>
                <p className="text-sm text-black mt-1">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Governance Principles */}
        <section aria-labelledby="principles-title" className="space-y-8">
          <h3
            id="principles-title"
            className="text-2xl font-semibold text-black border-b border-black pb-2"
          >
            Governance Principles
          </h3>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="list-disc list-inside text-black space-y-3 text-sm sm:text-base leading-relaxed max-w-prose mx-auto"
          >
            {governancePrinciples.map((principle, idx) => (
              <li key={idx}>{principle}</li>
            ))}
          </motion.ul>
        </section>
      </div>
    </section>
  );
};

export default InvestorsGovernance;
