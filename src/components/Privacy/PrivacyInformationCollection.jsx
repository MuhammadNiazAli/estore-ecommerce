'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MonitorSmartphone, Globe2 } from 'lucide-react';

const PrivacyInformationCollection = () => {
  return (
    <section
      className="bg-white text-amber-600 w-full flex justify-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Information Collection Section"
    >
      <div className="w-full max-w-[1000px] text-center space-y-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Information We Collect
        </motion.h2>

        <motion.p
          className="text-amber-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We collect essential data to provide, improve, and secure our services. You are always in control of your information and how it's used.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left pt-6 px-2 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Personal Info */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <User className="w-6 h-6 mt-1 flex-shrink-0 text-amber-600" />
            <div>
              <p className="font-semibold text-base md:text-lg">Personal Information</p>
              <p className="text-amber-500 text-sm md:text-base leading-relaxed">
                Name, contact info, company details — typically collected when signing up, contacting support, or customizing your profile.
              </p>
            </div>
          </motion.div>

          {/* Communication */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-amber-600" />
            <div>
              <p className="font-semibold text-base md:text-lg">Communication Data</p>
              <p className="text-amber-500 text-sm md:text-base leading-relaxed">
                Emails, support messages, and survey responses — stored to provide support and improve service quality.
              </p>
            </div>
          </motion.div>

          {/* Device Info */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <MonitorSmartphone className="w-6 h-6 mt-1 flex-shrink-0 text-amber-600" />
            <div>
              <p className="font-semibold text-base md:text-lg">Device & Usage Data</p>
              <p className="text-amber-500 text-sm md:text-base leading-relaxed">
                Browser type, OS, IP address, device identifiers, and usage patterns — collected automatically to enhance security and user experience.
              </p>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            className="flex items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <Globe2 className="w-6 h-6 mt-1 flex-shrink-0 text-amber-600" />
            <div>
              <p className="font-semibold text-base md:text-lg">Location Data</p>
              <p className="text-amber-500 text-sm md:text-base leading-relaxed">
                Approximate geolocation derived from IP address — used only for language preferences and regional compliance.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="pt-8 text-sm md:text-base text-amber-600 max-w-2xl mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We do not collect any biometric, financial, or sensitive personal data unless explicitly required and authorized by you.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyInformationCollection;
