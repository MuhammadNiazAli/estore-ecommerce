'use client';

import React, { useState, useEffect, useRef } from 'react';
import { RefreshCcw, Repeat, X } from 'lucide-react';

const ReturnChangeCTA = () => {
  const [openType, setOpenType] = useState(null); // 'return' or 'exchange'
  const [orderId, setOrderId] = useState('');
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Disable background scroll when modal open
  useEffect(() => {
    if (openType) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setOrderId('');
    }
  }, [openType]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openType) {
        setOpenType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openType]);

  // Focus trap in modal (basic)
  useEffect(() => {
    if (!openType) return;
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleTrap = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift+Tab
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    modalRef.current.addEventListener('keydown', handleTrap);
    return () => modalRef.current?.removeEventListener('keydown', handleTrap);
  }, [openType]);

  const closeModal = () => setOpenType(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    alert(`${openType === 'return' ? 'Return' : 'Exchange'} request started for Order ID: ${orderId.trim()}`);
    closeModal();
  };

  return (
    <section className="w-full bg-white py-16 px-4 flex justify-center mb-[-100px]">
      <div className="w-full max-w-[1000px] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Still Need to Start a Request?</h2>
        <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">
          Choose an option below to begin your return or exchange process now.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => setOpenType('return')}
            className="flex items-center gap-2 bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
            aria-haspopup="dialog"
            aria-expanded={openType === 'return'}
            aria-controls="return-exchange-modal"
          >
            <RefreshCcw size={18} />
            Start a Return
          </button>
          <button
            onClick={() => setOpenType('exchange')}
            className="flex items-center gap-2 border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-black transition focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
            aria-haspopup="dialog"
            aria-expanded={openType === 'exchange'}
            aria-controls="return-exchange-modal"
          >
            <Repeat size={18} />
            Start an Exchange
          </button>
        </div>
      </div>

      {/* Modal */}
      {openType && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          id="return-exchange-modal"
          className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // Close modal if clicking outside modal content
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md rounded-xl p-6 text-left relative shadow-xl animate-fadeIn"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black rounded"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h3 id="modal-title" className="text-2xl font-bold text-black mb-3">
              {openType === 'return' ? 'Start a Return' : 'Start an Exchange'}
            </h3>
            <p className="text-gray-700 mb-5">Please enter your Order ID to begin.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full p-3 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
                aria-required="true"
              />
              <button
                type="submit"
                disabled={!orderId.trim()}
                className={`w-full py-3 rounded-md font-semibold transition
                  ${
                    orderId.trim()
                      ? 'bg-black text-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-black'
                      : 'bg-black/50 text-black/70 cursor-not-allowed'
                  }`}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ReturnChangeCTA;
