'use client';

import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    date: "Aug 10, 2025",
    title: "Annual Investor Summit 2025",
    location: "New York City, NY",
    link: "#",
  },
  {
    id: 2,
    date: "Sep 15, 2025",
    title: "Q3 Earnings Call & Discussion",
    location: "Virtual Event",
    link: "#",
  },
  {
    id: 3,
    date: "Nov 05, 2025",
    title: "Sustainability & Growth Forum",
    location: "San Francisco, CA",
    link: "#",
  },
];

const InvestorsEvents = () => {
  return (
    <section
      aria-label="Upcoming Investor Events"
      className="bg-gray-900 text-yellow-400 flex justify-center px-4 sm:px-6 md:px-8 py-16"
    >
      <div className="w-full max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>

        <ul
          role="list"
          className="space-y-6 sm:space-y-8"
        >
          {events.map(({ id, date, title, location, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-yellow-400/40 transition-all duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <time
                  dateTime={date}
                  className="text-yellow-300 font-mono text-sm sm:text-base mb-2 sm:mb-0"
                >
                  {date}
                </time>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-yellow-300">{location}</p>
                </div>
              </div>

              <div className="text-right sm:text-left">
                <a
                  href={link}
                  className="inline-block px-5 py-2.5 rounded-md bg-yellow-500 text-gray-900 font-semibold shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60 transition duration-200"
                  aria-label={`Register for ${title}`}
                >
                  Register
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InvestorsEvents;
