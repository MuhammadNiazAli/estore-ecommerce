'use client';

import React from 'react';
import { CheckCircle, Monitor, Bug, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  {
    icon: <Monitor className="w-7 h-7 text-black" />,
    name: 'axe DevTools',
    description: 'Automated accessibility testing with detailed reports for developers.',
    url: 'https://www.deque.com/axe/',
  },
  {
    icon: <Bug className="w-7 h-7 text-black" />,
    name: 'WAVE Evaluation Tool',
    description: 'Web Accessibility Evaluation Tool by WebAIM for visual feedback.',
    url: 'https://wave.webaim.org/',
  },
  {
    icon: <Laptop className="w-7 h-7 text-black" />,
    name: 'Lighthouse',
    description: 'Google’s automated tool for auditing web page accessibility and performance.',
    url: 'https://developers.google.com/web/tools/lighthouse',
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-black" />,
    name: 'NVDA',
    description: 'Free screen reader for Windows used for manual accessibility testing.',
    url: 'https://www.nvaccess.org/',
  },
];

const TestingTools = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 mb-[-50px]">
      <div className="max-w-[1000px] mx-auto space-y-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          Accessibility Testing Tools
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg"
        >
          We use a combination of automated and manual testing tools to ensure our website meets the highest accessibility standards.
        </motion.p>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 text-left">
          {tools.map((tool, idx) => (
            <motion.a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-gray-950/80 hover:border-gray-300 transition-all duration-300 flex items-start space-x-4"
            >
              <div>{tool.icon}</div>
              <div>
                <h3 className="text-black font-semibold text-lg">{tool.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingTools;
