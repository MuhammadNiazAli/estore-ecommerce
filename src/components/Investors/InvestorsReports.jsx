'use client';
import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const reports = [
  {
    id: 1,
    title: 'Annual Report 2024',
    date: 'March 15, 2025',
    fileUrl: '#',
  },
  {
    id: 2,
    title: 'Q4 Financial Results 2024',
    date: 'January 30, 2025',
    fileUrl: '#',
  },
  {
    id: 3,
    title: 'Sustainability Report 2024',
    date: 'February 20, 2025',
    fileUrl: '#',
  },
];

const InvestorsReports = () => {
  return (
    <section
      aria-label="Investor Reports and Downloads"
      className="bg-white text-amber-600 flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-amber-600"
        >
          Investor Reports
        </motion.h2>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse rounded-md overflow-hidden bg-white shadow-md">
            <thead>
              <tr className="border-b border-amber-800">
                <th className="py-3 px-6 text-amber-500 font-semibold">Report</th>
                <th className="py-3 px-6 text-amber-500 font-semibold">Date</th>
                <th className="py-3 px-6 text-amber-500 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(({ id, title, date, fileUrl }) => (
                <tr
                  key={id}
                  className="border-b border-amber-900 last:border-none hover:bg-amber-950/10 transition-colors"
                >
                  <td className="py-4 px-6">{title}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{date}</td>
                  <td className="py-4 px-6">
                    <a
                      href={fileUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-700 text-gray-900 font-medium shadow hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
                      aria-label={`Download ${title}`}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {reports.map(({ id, title, date, fileUrl }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-5 border border-amber-900"
            >
              <h3 className="text-lg font-semibold mb-2 text-amber-500">{title}</h3>
              <p className="text-sm mb-4 text-amber-400">Published: {date}</p>
              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-700 text-gray-900 font-semibold shadow hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                aria-label={`Download ${title}`}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-amber-500 text-center text-sm mt-10 px-5 italic">
          *All reports are available in PDF format and are updated regularly.
        </p>
      </div>
    </section>
  );
};

export default InvestorsReports;
