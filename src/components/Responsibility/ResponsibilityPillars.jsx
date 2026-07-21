'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Inline SVG icons for guaranteed compatibility
const IconBalanceScale = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="w-12 h-12 text-amber-600"
    aria-hidden="true"
  >
    <path d="M3 21h18M12 3v18M7 21V9m10 12V9M7 9l5-6 5 6" />
  </svg>
);

const IconLeaf = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-12 h-12 text-green-400"
    aria-hidden="true"
  >
    <path d="M12 2C8 6 3 12 12 22c9-10 4-16 0-20z" />
  </svg>
);

const IconUsers = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="w-12 h-12 text-blue-400"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-3-3.87M7 21v-2a4 4 0 0 1 3-3.87M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </svg>
);

const IconGlobe = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="w-12 h-12 text-amber-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);

const pillars = [
  {
    id: 1,
    title: 'Ethical Governance',
    description:
      'We uphold transparency, accountability, and fairness in every decision and operation.',
    icon: <IconBalanceScale />,
  },
  {
    id: 2,
    title: 'Environmental Stewardship',
    description:
      'Protecting our planet by adopting sustainable practices and reducing waste and emissions.',
    icon: <IconLeaf />,
  },
  {
    id: 3,
    title: 'Community Empowerment',
    description:
      'Supporting local communities through education, employment, and social programs.',
    icon: <IconUsers />,
  },
  {
    id: 4,
    title: 'Global Collaboration',
    description:
      'Partnering with organizations worldwide to amplify positive impact and share knowledge.',
    icon: <IconGlobe />,
  },
];

const ResponsibilityPillars = () => {
  return (
    <section
      className="w-full bg-white flex justify-center px-4 py-16 sm:py-20 mb-0"
      aria-labelledby="pillars-title"
      role="region"
    >
      <div className="max-w-[1000px] w-full text-center">
        <motion.h2
          id="pillars-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-amber-600 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-12 select-none max-w-full"
        >
          Our Responsibility Pillars
        </motion.h2>

        <motion.div
          className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-4 text-gray-700"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          role="list"
          aria-describedby="pillars-desc"
        >
          {pillars.map(({ id, title, description, icon }) => (
            <motion.article
              key={id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl p-5 sm:p-6 cursor-default
                hover:shadow-amber-700/40 hover:scale-[1.05] transition-transform duration-300
                focus:outline-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2"
              tabIndex={0}
              role="listitem"
              aria-labelledby={`pillar-title-${id}`}
              aria-describedby={`pillar-desc-${id}`}
            >
              <div className="mb-3 flex justify-center">{icon}</div>
              <h3
                id={`pillar-title-${id}`}
                className="text-amber-600 text-lg sm:text-xl font-semibold mb-2 select-none"
              >
                {title}
              </h3>
              <p
                id={`pillar-desc-${id}`}
                className="text-gray-700 text-sm sm:text-base leading-relaxed select-text"
              >
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibilityPillars;
