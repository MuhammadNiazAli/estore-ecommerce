import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    description: "Create your affiliate account quickly and easily to get started.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Get Your Links",
    description: "Receive unique tracking links to share on your website or social media.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 14.828a4 4 0 01-5.656-5.656M17.657 6.343a4 4 0 010 5.657M6 18h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Promote Products",
    description: "Share your affiliate links through blogs, social media, emails, and more.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-4m0 0l8-8 4 4-8 8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Earn Commissions",
    description: "Get paid for every sale made through your affiliate links, hassle-free.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zM12 12v6" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AffiliatesHowItWorks = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-900 text-yellow-400 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="h-10 sm:h-12 mb-10 bg-yellow-700 rounded animate-pulse w-2/3 sm:w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-gray-800 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-14 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map(({ id, title, description, icon }) => (
            <motion.article
              key={id}
              tabIndex={0}
              role="group"
              aria-describedby={`step-desc-${id}`}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-lg border border-yellow-700 bg-gray-800 hover:bg-yellow-900 focus:bg-yellow-900 transition-colors duration-300 cursor-default"
              variants={stepVariants}
            >
              {/* Step number circle */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 text-gray-900 font-bold text-base sm:text-lg select-none">
                {id}
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{title}</h3>
                <p id={`step-desc-${id}`} className="text-yellow-300 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Icon (optional for larger screens) */}
              <div className="mt-2 sm:mt-0 ml-auto">{icon}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliatesHowItWorks;
