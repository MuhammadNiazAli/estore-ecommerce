'use client';

import React, { useEffect, useRef } from 'react';

const PaymentingModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);
  const lastFocusedElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Focus modal on open
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        // Return focus to last focused element on close
        lastFocusedElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40"
        aria-hidden="true"
      />

      {/* Modal */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={modalRef}
        className="fixed inset-0 flex items-center justify-center p-4 z-50 outline-none"
      >
        <div className="bg-white text-gray-700 rounded-lg shadow-lg w-full max-w-lg mx-auto p-6 relative animate-fadeIn">
          {/* Header */}
          <header className="flex items-center justify-between mb-4">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-800">
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Modal Body */}
          <div>{children}</div>
        </div>
      </section>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default PaymentingModal;
