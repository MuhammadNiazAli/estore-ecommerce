'use client';

import React from 'react';
import { Users, Building2, Lock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyDataSharing = () => {
  return (
    <section
      className="bg-gray-900 text-yellow-400 w-full flex justify-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Data Sharing Section"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-3xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How and When We Share Your Data
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-yellow-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We never sell your personal data. We only share it when necessary to provide our services
          or comply with legal obligations, and always with full transparency.
        </motion.p>

        {/* Data Sharing Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left pt-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Service Providers */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Users className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Service Providers</p>
              <p className="text-yellow-300 text-xs sm:text-sm leading-relaxed">
                We may share data with trusted partners who help us operate the platform—such as payment
                processors, analytics tools, and customer support platforms.
              </p>
            </div>
          </motion.div>

          {/* Legal Compliance */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Lock className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Legal Compliance</p>
              <p className="text-yellow-300 text-xs sm:text-sm leading-relaxed">
                We may disclose your data when required by law or in response to valid legal processes,
                such as subpoenas or court orders.
              </p>
            </div>
          </motion.div>

          {/* Business Transfers */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Building2 className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Business Transfers</p>
              <p className="text-yellow-300 text-xs sm:text-sm leading-relaxed">
                In the event of a merger, acquisition, or asset sale, your information may be transferred
                as part of that transaction—only under strict privacy commitments.
              </p>
            </div>
          </motion.div>

          {/* With Consent */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <ExternalLink className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">With Your Consent</p>
              <p className="text-yellow-300 text-xs sm:text-sm leading-relaxed">
                We will always ask for your permission before sharing your data with third parties
                for purposes outside the scope of this privacy policy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Legal Assurance */}
        <motion.p
          className="pt-8 text-xs sm:text-sm text-yellow-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We carefully vet all partners and ensure they follow strict data protection standards aligned
          with GDPR, CCPA, and other global privacy regulations.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyDataSharing;
