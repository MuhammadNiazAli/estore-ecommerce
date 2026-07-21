'use client';
import React from 'react';
import { motion } from 'framer-motion';

const financialData = [
  {
    year: '2024',
    revenue: '$1.2B',
    profit: '$320M',
    eps: '$2.45',
    growth: '15%',
  },
  {
    year: '2023',
    revenue: '$1.0B',
    profit: '$280M',
    eps: '$2.10',
    growth: '12%',
  },
  {
    year: '2022',
    revenue: '$890M',
    profit: '$250M',
    eps: '$1.90',
    growth: '10%',
  },
];

const headers = [
  { key: 'year', label: 'Year' },
  { key: 'revenue', label: 'Revenue' },
  { key: 'profit', label: 'Profit' },
  { key: 'eps', label: 'EPS' },
  { key: 'growth', label: 'YoY Growth' },
];

const InvestorsFinancials = () => {
  return (
    <section
      aria-label="Investors Financial Summary"
      className="bg-white text-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex justify-center my-[-100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1000px] w-full"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-black leading-tight">
          Financial Summary
        </h2>

        {/* Desktop/Table View */}
        <div className="hidden sm:block overflow-x-auto rounded-xl shadow-md ring-1 ring-black/40 bg-white">
          <table className="min-w-[600px] w-full border-separate border-spacing-y-2">
            <thead className="bg-white sticky top-0 z-10">
              <tr>
                {headers.map(({ label, key }) => (
                  <th
                    key={key}
                    scope="col"
                    className="text-left py-3 px-5 text-black font-semibold whitespace-nowrap text-base"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {financialData.map((item) => (
                <tr
                  key={item.year}
                  className="bg-white/30 hover:bg-black/20 transition-colors"
                >
                  {headers.map(({ key }) => (
                    <td
                      key={key}
                      className="py-4 px-5 text-black text-base whitespace-nowrap"
                    >
                      {item[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Card View */}
        <div className="sm:hidden space-y-6">
          {financialData.map((item) => (
            <div
              key={item.year}
              className="bg-white rounded-xl p-5 shadow-md ring-1 ring-black/40"
            >
              {headers.map(({ key, label }) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-black/30 last:border-none py-2"
                >
                  <span className="text-black font-semibold">{label}</span>
                  <span className="text-black font-normal">{item[key]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-black text-center mt-6 italic px-4 max-w-[600px] mx-auto">
          *Figures are in USD and rounded. Past performance does not guarantee future results.
        </p>
      </motion.div>
    </section>
  );
};

export default InvestorsFinancials;
