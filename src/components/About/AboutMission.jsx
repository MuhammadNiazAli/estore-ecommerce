'use client';

import React from 'react';
import { FaRocket, FaServer, FaCube } from 'react-icons/fa';

const AboutMission = () => {
  return (
    <section
      className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8 flex justify-center my-[-80px]"
      aria-label="Our mission and future plans"
    >
      <div className="w-full max-w-5xl text-center">
        {/* Mission Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-600 mb-6 leading-tight">
          Our Mission
        </h2>

        {/* Mission Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-14 max-w-3xl mx-auto px-2">
          Our mission is to empower individuals and businesses across the globe by building
          innovative, reliable, and user-centric solutions that spark growth, efficiency,
          and meaningful impact in every interaction.
        </p>

        {/* What’s Next Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-500 text-center mb-10">
            What’s Next for Our eStore Project?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-gray-700">
            {/* Backend Integration */}
            <div className="flex items-start gap-4">
              <FaServer className="text-amber-600 text-2xl sm:text-3xl shrink-0" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-1">Backend Integration</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We plan to connect this frontend with a powerful backend system using Node.js,
                  PostgreSQL, and secure REST or GraphQL APIs to handle real orders, payments,
                  users, shipping, and inventory.
                </p>
              </div>
            </div>

            {/* Future 3D Project */}
            <div className="flex items-start gap-4">
              <FaCube className="text-amber-600 text-2xl sm:text-3xl shrink-0" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-1">Next-Gen 3D Experience</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our next goal is a highly immersive eCommerce platform using WebGL, Three.js,
                  and real-time 3D product interactions — letting users rotate, customize, and
                  explore products in a virtual environment.
                </p>
              </div>
            </div>

            {/* AI-Powered Growth */}
            <div className="flex items-start gap-4">
              <FaRocket className="text-amber-600 text-2xl sm:text-3xl shrink-0" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-1">AI-Powered Growth</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We’ll harness AI to build smart chatbots, predictive recommendations, and
                  personalized shopping assistants to boost engagement and conversion at scale.
                </p>
              </div>
            </div>

            {/* Global Expansion */}
            <div className="flex items-start gap-4">
              <FaRocket className="text-amber-600 text-2xl sm:text-3xl shrink-0" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-1">Global Expansion</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  With scalable infrastructure and internationalization support, our goal is to
                  serve users across 100+ countries, supporting 280+ languages and currencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
