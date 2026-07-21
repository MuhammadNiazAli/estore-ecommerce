'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon, TrashIcon, TagIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartActionButtons = ({
  onContinueShopping = () => window.history.back(),
  onClearCart = () => alert('Cart cleared! (replace with real handler)'),
  onApplyPromoCode = (code) => alert(`Promo code applied: ${code}`),
}) => {
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoStatus, setPromoStatus] = useState(null); // 'success' | 'error' | null
  const [isApplying, setIsApplying] = useState(false);
  const inputRef = useRef(null);

  // Focus promo input when it opens
  useEffect(() => {
    if (promoOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [promoOpen]);

  const handleApplyClick = () => {
    setPromoOpen(true);
    setPromoCode('');
    setPromoStatus(null);
  };

  const handlePromoSubmit = () => {
    const trimmed = promoCode.trim().toUpperCase();
    if (!trimmed) {
      setPromoStatus('error');
      return;
    }

    setIsApplying(true);
    setPromoStatus(null);

    // Simulate async promo validation
    setTimeout(() => {
      if (['SAVE10', 'FREESHIP'].includes(trimmed)) {
        setPromoStatus('success');
        onApplyPromoCode(trimmed);
        // Close promo input after success delay
        setTimeout(() => {
          setPromoOpen(false);
          setPromoCode('');
          setPromoStatus(null);
          setIsApplying(false);
        }, 1500);
      } else {
        setPromoStatus('error');
        setIsApplying(false);
      }
    }, 1000);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      onClearCart();
    }
  };

  return (
    <section
      className="w-full bg-white text-gray-900 px-4 sm:px-6 py-5 border-t border-gray-200"
      aria-label="Cart action buttons"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-6 flex-wrap">
        {/* Left Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button
            type="button"
            aria-label="Continue Shopping"
            onClick={onContinueShopping}
            className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>

          <button
            type="button"
            aria-label="Clear Cart"
            onClick={handleClearCart}
            className="flex items-center gap-2 text-black hover:text-black text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            <TrashIcon className="w-4 h-4" />
            <span>Clear Cart</span>
          </button>
        </div>

        {/* Right Button and Promo Panel */}
        <div className="relative w-full sm:w-auto">
          {!promoOpen && (
            <button
              type="button"
              aria-label="Apply Promo Code"
              onClick={handleApplyClick}
              className="flex items-center gap-2 bg-black hover:bg-black text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-full sm:w-auto justify-center"
            >
              <TagIcon className="w-4 h-4" />
              <span>Apply Promo Code</span>
            </button>
          )}

          {promoOpen && (
            <div
              className="flex items-center gap-2 bg-white rounded-full shadow px-4 py-2 max-w-xs sm:max-w-sm w-full"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            >
              <input
                ref={inputRef}
                type="text"
                aria-label="Enter promo code"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value.toUpperCase());
                  setPromoStatus(null);
                }}
                className={`flex-grow bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none ${
                  promoStatus === 'error' ? 'border-b border-black' : 'border-b border-black'
                } transition duration-200`}
                placeholder="Enter promo code"
                maxLength={20}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (!isApplying) handlePromoSubmit();
                  }
                  if (e.key === 'Escape') {
                    setPromoOpen(false);
                    setPromoCode('');
                    setPromoStatus(null);
                    setIsApplying(false);
                  }
                }}
                disabled={isApplying}
              />
              <button
                type="button"
                onClick={handlePromoSubmit}
                disabled={isApplying}
                className="bg-black hover:bg-black text-gray-900 px-3 py-1 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isApplying ? (
                  <svg
                    className="animate-spin h-5 w-5 text-gray-900 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  'Apply'
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setPromoOpen(false);
                  setPromoCode('');
                  setPromoStatus(null);
                  setIsApplying(false);
                }}
                aria-label="Close promo code input"
                className="text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-black rounded"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Promo status messages */}
          {promoStatus === 'error' && (
            <p
              className="mt-1 text-xs text-black max-w-xs sm:max-w-sm select-none"
              role="alert"
              aria-live="assertive"
            >
              Invalid promo code.
            </p>
          )}
          {promoStatus === 'success' && (
            <p
              className="mt-1 text-xs text-black max-w-xs sm:max-w-sm select-none"
              role="alert"
              aria-live="polite"
            >
              Promo code applied!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartActionButtons;
