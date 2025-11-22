'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyContact = () => {
  return (
    <section
      className="bg-gray-900 text-yellow-400 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Privacy Contact Section"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-3xl font-semibold text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Questions or Concerns?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-yellow-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          If you have any questions about our privacy practices or how your personal data is handled,
          feel free to reach out. Our team is here to help.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Email */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Mail className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Email</p>
              <a
                href="mailto:privacy@yourdomain.com"
                className="text-yellow-300 text-sm sm:text-base hover:underline break-all"
              >
                privacy@yourdomain.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Phone className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Phone</p>
              <p className="text-yellow-300 text-sm sm:text-base">+1 (800) 123-4567</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            className="flex items-start gap-3 sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <MapPin className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Headquarters</p>
              <p className="text-yellow-300 text-sm sm:text-base leading-relaxed">
                123 SaaS Blvd,<br />
                San Francisco, CA 94105
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContact;
