'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    date: '2025-07-15',
    displayDate: 'July 15, 2025',
    title: 'Company Announces Record Q2 Earnings',
    summary:
      'Our company reported record-breaking revenues and profits for Q2 2025, exceeding analyst expectations and paving the way for sustained growth.',
    link: '#',
  },
  {
    id: 2,
    date: '2025-06-30',
    displayDate: 'June 30, 2025',
    title: 'Launch of New Sustainable Investment Fund',
    summary:
      'We introduced a new fund focused on sustainable and socially responsible investments, aligning with our commitment to ESG principles.',
    link: '#',
  },
  {
    id: 3,
    date: '2025-05-20',
    displayDate: 'May 20, 2025',
    title: 'CEO Addresses Shareholders at Annual Meeting',
    summary:
      'Highlights from the annual shareholder meeting, including strategic initiatives and future growth plans presented by our CEO.',
    link: '#',
  },
];

const InvestorsNews = () => {
  return (
    <section
      aria-label="Latest Investor News"
      className="bg-white text-black flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-10"
        >
          Latest Investor News
        </motion.h2>

        <ul role="list" className="space-y-8">
          {newsArticles.map(({ id, date, displayDate, title, summary, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-md hover:shadow-black/40 transition-all duration-300 group"
            >
              <time
                dateTime={date}
                className="block text-black font-mono text-xs sm:text-sm mb-2 uppercase tracking-wide"
              >
                {displayDate}
              </time>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read more about ${title}`}
                className="flex items-start justify-between gap-2 sm:gap-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold group-hover:underline group-focus-visible:underline transition-colors">
                  {title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-black mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <p className="mt-3 text-black text-sm sm:text-base leading-relaxed">
                {summary}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InvestorsNews;
