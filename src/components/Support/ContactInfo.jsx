'use client';

import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-white text-gray-900 mb-[-180px]">
      <div className="mx-auto max-w-[1100px]">
  
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Need assistance with an order or have product-related questions? Our support team is ready to help you promptly and professionally.
          </p>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 border-b border-gray-200 pb-2">
              Contact Details
            </h3>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-3 sm:gap-4">
                <FaPhoneAlt className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-black hover:underline break-words text-xs sm:text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaWhatsapp className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline break-words text-xs sm:text-sm"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaEnvelope className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                  <a
                    href="mailto:support@ecommerce.com"
                    className="text-black hover:underline break-words text-xs sm:text-sm"
                  >
                    support@ecommerce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaClock className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Working Hours</p>
                  <p className="text-xs sm:text-sm">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 border-b border-gray-200 pb-2">
              Our Offices
            </h3>

            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div className="flex items-start gap-3 sm:gap-4">
                <FaMapMarkerAlt className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Headquarters</p>
                  <address className="not-italic leading-relaxed text-xs sm:text-sm">
                    123 Fashion Street<br />
                    Amsterdam, Netherlands
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaMapMarkerAlt className="text-black mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Branch Office</p>
                  <address className="not-italic leading-relaxed text-xs sm:text-sm">
                    456 Style Avenue<br />
                    Berlin, Germany
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-6 sm:gap-8 px-2 sm:px-0"
        >

          <div className="flex gap-6 sm:gap-8 text-xl sm:text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black hover:text-gray-900 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-gray-900 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-black hover:text-gray-900 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>

       
          <div className="w-full max-w-[700px] h-56 sm:h-72 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3626145912!2d4.728251160377451!3d52.35462762598795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c20bce6c1d%3A0xd9f5e1b5c02f2e1!2sAmsterdam!5e0!3m2!1sen!2snl!4v1620407896096!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

 
        <div className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-600 text-center px-2 sm:px-0 max-w-[700px] mx-auto">
          <p>
            For urgent issues outside business hours, please email us with subject{' '}
            <strong>“URGENT”</strong> and our team will prioritize your request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
