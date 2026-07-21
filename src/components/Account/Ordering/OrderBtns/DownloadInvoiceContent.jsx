'use client';

import React from 'react';

function DownloadInvoiceContent({ closePanel }) {
  const handleDownloadInvoice = () => {
    alert('Your invoice is now downloading. Please check your Downloads folder.');
    closePanel();
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto text-[14px] sm:text-[15px]">
      {/* Title */}
      <h2 className="text-amber-600 text-2xl sm:text-3xl font-extrabold mb-5 tracking-wide text-center sm:text-left">
        Invoice Download
      </h2>

      {/* Intro Text */}
      <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-left">
        Your invoice is available for download in PDF format. Save it for future reference, expense tracking, or warranty claims.
      </p>

      {/* Invoice Details */}
      <section
        aria-label="Invoice summary"
        className="bg-white p-5 sm:p-6 rounded-lg mb-8 shadow-lg"
      >
        <h3 className="text-amber-600 text-lg sm:text-xl font-semibold mb-4">
          Invoice Details
        </h3>
        <dl className="text-gray-700 text-sm sm:text-base space-y-2">
          <div>
            <dt className="inline font-semibold">Order Number:</dt>{' '}
            <dd className="inline font-mono">#123456789</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Order Date:</dt>{' '}
            <dd className="inline">July 5, 2025</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Total Amount:</dt>{' '}
            <dd className="inline font-semibold text-amber-600">$245.00</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Payment Method:</dt>{' '}
            <dd className="inline">Credit Card (Visa)</dd>
          </div>
        </dl>
      </section>

      {/* Support Info */}
      <section className="text-gray-600 text-xs sm:text-sm mb-6 space-y-2">
        <p>
          Want a copy in your email? Head over to your{' '}
          <a
            href="/account/invoices"
            className="text-amber-600 underline hover:text-amber-500"
          >
            Invoice History
          </a>{' '}
          page.
        </p>
        <p>
          If you have questions about billing or payments, please{' '}
          <a
            href="/contact"
            className="text-amber-600 underline hover:text-amber-500"
          >
            contact our support team
          </a>
          .
        </p>
      </section>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
        <button
          onClick={handleDownloadInvoice}
          className="bg-amber-600 text-black text-sm px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition shadow-md w-full sm:w-auto"
          type="button"
          aria-label="Download invoice PDF"
        >
          Download PDF
        </button>
        <button
          onClick={closePanel}
          className="border border-amber-600 text-amber-600 text-sm px-5 py-2 rounded-full font-semibold hover:bg-amber-600 hover:text-black transition shadow-md w-full sm:w-auto"
          type="button"
          aria-label="Close invoice panel"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DownloadInvoiceContent;
