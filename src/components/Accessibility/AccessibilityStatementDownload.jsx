'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FileDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityStatementDownload = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const confirmationRef = useRef(null);

  useEffect(() => {
    if (downloaded && confirmationRef.current) {
      confirmationRef.current.focus();
      confirmationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [downloaded]);

  const handleDownload = () => {
    if (isDownloading) return; // Prevent multiple clicks

    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      setDownloaded(true);
      setIsDownloading(false);

      // Hide confirmation after 5s
      setTimeout(() => setDownloaded(false), 5000);
    }, 1500);

    // Real download logic
    const link = document.createElement('a');
    link.href = '/accessibility-statement.pdf'; // Replace with your actual file path
    link.download = 'Accessibility_Statement.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="w-full bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8  mb-[-30px]"
      aria-labelledby="accessibility-download-heading"
    >
      <div className="max-w-[900px] mx-auto text-center space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FileText
            className="w-12 h-12 text-amber-600 mx-auto mb-4"
            aria-hidden="true"
          />
          <h2
            id="accessibility-download-heading"
            className="text-3xl sm:text-4xl font-bold text-amber-500"
          >
            Download Our Accessibility Statement
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We’re committed to full transparency. Download our detailed accessibility statement to learn about our standards, audits, and ongoing improvements.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            aria-disabled={isDownloading}
            className={`inline-flex items-center gap-2 bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700 focus:ring-opacity-50
              ${
                isDownloading
                  ? 'cursor-not-allowed opacity-60 hover:bg-amber-600'
                  : 'hover:brightness-110'
              }
            `}
          >
            <FileDown className="w-5 h-5" />
            {isDownloading ? 'Downloading...' : 'Download PDF'}
          </button>
        </motion.div>

        {/* Confirmation */}
        <AnimatePresence>
          {downloaded && (
            <motion.p
              key="confirmation"
              ref={confirmationRef}
              tabIndex={-1}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="text-green-400 text-sm font-semibold pt-2"
              role="alert"
              aria-live="polite"
            >
              Accessibility Statement has been downloaded successfully.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AccessibilityStatementDownload;
