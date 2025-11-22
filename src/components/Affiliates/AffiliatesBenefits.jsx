"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialBenefits = [
  {
    id: 1,
    title: "Generous Commissions",
    description: "Earn competitive commissions on every sale generated through your unique affiliate links.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0v6m0 4h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    description: "Monitor your clicks, conversions, and earnings through our easy-to-use dashboard.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l3 6 4-8 3 6h3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Flexible Payouts",
    description: "Choose your preferred payout method and schedule, with no minimum thresholds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Marketing Resources",
    description: "Access exclusive banners, creatives, and tips to boost your promotional efforts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.01M9 12h.01M12 12h.01M9 16h6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Dedicated Support",
    description: "Get assistance from our affiliate team whenever you need help or guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14v6" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Performance Bonuses",
    description: "Hit monthly goals and unlock extra earnings and exclusive rewards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Priority Access to New Products",
    description: "Be the first to promote our latest offerings and exclusive launches.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Affiliate Training Center",
    description: "Access in-depth tutorials, marketing courses, and platform guides.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0121 19.5H3a12 12 0 012.84-8.922L12 14z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Global Reach & Local Campaigns",
    description: "Promote in your region or go international with tailored campaigns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2v20" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Referral Tiers",
    description: "Climb up affiliate levels and unlock better rates as you grow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18M6 10h12M9 3h6" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "Cookie Lifetime Benefits",
    description: "Our 60-day cookie policy helps you get credit even for late conversions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M16 12h.01M12 16h.01M8 12h.01" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Automated Payouts",
    description: "No need to request payments. Our system sends earnings automatically.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582a10.02 10.02 0 0014.836 5.56M20 20v-5h-.582a10.02 10.02 0 00-14.836-5.56" />
      </svg>
    ),
  },
  {
    id: 13,
    title: "Multi-Device Attribution",
    description: "Get commission credit across mobile, desktop, or tablet — no loss.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h10" />
      </svg>
    ),
  },
  {
    id: 14,
    title: "Fraud Protection",
    description: "Advanced AI ensures your earnings stay protected from suspicious activity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5.5-3.8 10-8 10s-8-4.5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    id: 15,
    title: "Live Chat Affiliate Help",
    description: "Talk directly with an affiliate manager via chat 24/7.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-4l-4 4v-4H7a2 2 0 01-2-2v-6a2 2 0 012-2h2" />
      </svg>
    ),
  },
  {
    id: 16,
    title: "Mobile-Optimized Assets",
    description: "Promote using creative optimized for phones and tablets.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 17,
    title: "Custom Campaign Links",
    description: "Generate personalized tracking links with custom parameters.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 11l2-2m0 0l3 3-3 3m-2-6l-4 4-3-3 3-3z" />
      </svg>
    ),
  },
  {
    id: 18,
    title: "No Hidden Fees",
    description: "You keep what you earn. We never deduct hidden platform charges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2" />
      </svg>
    ),
  },
  {
    id: 19,
    title: "Partner Leaderboard",
    description: "Compete with other affiliates and get ranked globally on our leaderboard.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h12M4 14h8M4 18h4" />
      </svg>
    ),
  },
  {
    id: 20,
    title: "Monthly Affiliate Newsletter",
    description: "Stay updated with latest trends, campaigns, and top-converting tips.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v4H4zm0 6h16v10H4z" />
      </svg>
    ),
  },
];


const AffiliatesBenefits = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(initialBenefits.length);
      setLoading(false);
    }, 700); // simulate loading
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Join Our Affiliate Program?
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8" role="list">
          <AnimatePresence>
            {initialBenefits.slice(0, visibleCount).map(({ id, title, description, icon }) => (
              <motion.li
                key={id}
                className="flex items-start gap-4 p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus-within:ring-2 ring-yellow-400"
                tabIndex={0}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: id * 0.05 }}
                aria-label={`${title}: ${description}`}
              >
                <div>{icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  <p className="text-yellow-300 text-sm">{description}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {visibleCount < initialBenefits.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  Show All Benefits
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AffiliatesBenefits;
