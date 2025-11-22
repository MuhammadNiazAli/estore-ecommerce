'use client';

import React from 'react';
import { Server, Clock, Cloud, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyDataStorage = () => {
  return (
    <section
      className="bg-gray-900 text-yellow-400 w-full flex justify-center px-4"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Data Storage Section"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How We Store and Protect Your Data
        </motion.h2>

        <motion.p
          className="text-yellow-300 text-base sm:text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your data is stored securely using modern encryption technologies and cloud infrastructure designed to ensure high availability and resilience.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left pt-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Secure Cloud Servers */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Server className="w-6 h-6 text-yellow-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-base sm:text-lg">Secure Cloud Servers</p>
              <p className="text-yellow-300 text-sm leading-relaxed">
                Data is stored in ISO 27001-certified cloud environments (e.g., AWS, GCP) with physically secure and monitored data centers.
              </p>
            </div>
          </motion.div>

          {/* Retention Periods */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Clock className="w-6 h-6 text-yellow-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-base sm:text-lg">Retention Periods</p>
              <p className="text-yellow-300 text-sm leading-relaxed">
                We retain your personal data only as long as necessary for business operations, legal compliance, or customer support purposes.
              </p>
            </div>
          </motion.div>

          {/* Advanced Encryption */}
          <motion.div
            className="flex items-start gap-4 relative"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="flex items-start space-x-2">
              <Cloud className="w-6 h-6 text-yellow-400 mt-1 shrink-0" />
              <Lock className="w-6 h-6 text-yellow-400 mt-1 shrink-0" />
            </div>
            <div>
              <p className="font-semibold text-base sm:text-lg">Advanced Encryption</p>
              <p className="text-yellow-300 text-sm leading-relaxed">
                All stored data is protected by AES-256 encryption and transmitted using TLS 1.3. We routinely monitor for vulnerabilities.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="pt-8 text-sm sm:text-base text-yellow-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We also provide options for users to request data deletion or export, aligned with GDPR, CCPA, and other international data protection laws.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyDataStorage;
