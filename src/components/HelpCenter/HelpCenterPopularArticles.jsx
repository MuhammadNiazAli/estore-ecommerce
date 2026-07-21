'use client';

import React, { useState, useEffect, useRef } from 'react';

const articles = [
  {
    title: 'How to Track Your Order',
    description: 'Learn how to monitor your package status from shipment to delivery.',
    href: '/help-center/track-order',
    details:
      'Tracking your order is easy! Just log in to your account, navigate to your orders, and click on the tracking number to see real-time updates.',
  },
  {
    title: 'How to Return a Product',
    description: 'Step-by-step guide on initiating and completing a return.',
    href: '/help-center/return-product',
    details:
      'To return a product, go to your orders, select the item, and choose "Request Return". Follow the instructions for packaging and shipping.',
  },
  {
    title: 'Payment Methods Accepted',
    description: 'Find out which payment options you can use in our store.',
    href: '/help-center/payment-methods',
    details:
      'We accept credit cards, debit cards, PayPal, Apple Pay, and bank transfers. All payments are secured with industry-standard encryption.',
  },
  {
    title: 'Shipping Information & Costs',
    description: 'Understand our shipping policies and delivery timelines.',
    href: '/help-center/shipping-info',
    details:
      'Shipping costs vary by location and speed. Standard shipping takes 3-7 business days. Expedited options are available at checkout.',
  },
  {
    title: 'Account Security Tips',
    description: 'Keep your account safe with our security best practices.',
    href: '/help-center/account-security',
    details:
      'Use strong passwords, enable two-factor authentication, and never share your login details. We monitor suspicious activity to protect you.',
  },
  {
    title: 'Managing Your Wishlist',
    description: 'Learn how to add, remove, and organize your wishlist items.',
    href: '/help-center/wishlist-management',
    details:
      'Access your wishlist from your account dashboard. Add new items by clicking the heart icon on products. Remove or reorder items as you like.',
  },
];

const HelpCenterPopularArticles = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openFullArticle, setOpenFullArticle] = useState(false);
  const modalRef = useRef(null);
  const fullModalRef = useRef(null);
  const lastFocusedElement = useRef(null);

  // Trap focus inside first modal
  useEffect(() => {
    if (openIndex !== null && !openFullArticle) {
      lastFocusedElement.current = document.activeElement;
      modalRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
        if (e.key === 'Tab') {
          const focusableEls = modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstFocusableEl = focusableEls[0];
          const lastFocusableEl = focusableEls[focusableEls.length - 1];

          if (!e.shiftKey && document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
          } else if (e.shiftKey && document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    } else if (!openFullArticle) {
      lastFocusedElement.current?.focus();
    }
  }, [openIndex, openFullArticle]);

  // Trap focus inside full article modal
  useEffect(() => {
    if (openFullArticle) {
      lastFocusedElement.current = document.activeElement;
      fullModalRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeFullArticleModal();
        }
        if (e.key === 'Tab') {
          const focusableEls = fullModalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstFocusableEl = focusableEls[0];
          const lastFocusableEl = focusableEls[focusableEls.length - 1];

          if (!e.shiftKey && document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
          } else if (e.shiftKey && document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    } else {
      lastFocusedElement.current?.focus();
    }
  }, [openFullArticle]);

  const openModal = (index) => {
    setOpenIndex(index);
  };

  const closeModal = () => {
    setOpenIndex(null);
  };

  const openFullArticleModal = () => {
    setOpenFullArticle(true);
  };

  const closeFullArticleModal = () => {
    setOpenFullArticle(false);
  };

  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center mb-[-20px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-10">
          Popular Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="block text-left p-6 bg-white rounded-xl
                hover:bg-black hover:text-black transition duration-300
                shadow-md focus:outline-none focus:ring-4 focus:ring-black"
              aria-haspopup="dialog"
              aria-expanded={openIndex === index}
              aria-controls={`article-modal-${index}`}
              type="button"
            >
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-950 text-sm">{article.description}</p>
            </button>
          ))}
        </div>

        {/* First Modal */}
        {openIndex !== null && !openFullArticle && (
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={`article-title-${openIndex}`}
            id={`article-modal-${openIndex}`}
            tabIndex={-1}
            ref={modalRef}
            className="fixed top-1/2 left-1/2 max-w-md w-[90vw] bg-white rounded-xl p-6 text-gray-900
              -translate-x-1/2 -translate-y-1/2 z-50 shadow-lg
              focus:outline-none focus:ring-4 focus:ring-black"
          >
            <h3
              id={`article-title-${openIndex}`}
              className="text-xl font-bold mb-4 select-text"
            >
              {articles[openIndex].title}
            </h3>
            <p className="mb-6 text-gray-700 select-text">{articles[openIndex].details}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={openFullArticleModal}
                className="bg-black text-black px-4 py-2 rounded-md font-semibold hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-black"
              >
                Read Full Article
              </button>
              <button
                onClick={closeModal}
                className="bg-white px-4 py-2 rounded-md hover:bg-gray-500 transition font-semibold focus:outline-none focus:ring-2 focus:ring-black"
              >
                Close
              </button>
            </div>
          </aside>
        )}

        {/* Second Modal */}
        {openFullArticle && (
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="full-article-title"
            id="full-article-modal"
            tabIndex={-1}
            ref={fullModalRef}
            className="fixed top-1/2 left-1/2 max-w-lg w-[95vw] bg-white rounded-xl p-6 text-gray-900
              -translate-x-1/2 -translate-y-1/2 z-[60] shadow-lg
              focus:outline-none focus:ring-4 focus:ring-black"
          >
            <h3
              id="full-article-title"
              className="text-xl font-bold mb-4 select-text"
            >
              Full Article Content
            </h3>
            <p className="mb-6 text-gray-700 select-text text-center text-lg font-medium">
              Empty
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeFullArticleModal}
                className="bg-white px-4 py-2 rounded-md hover:bg-gray-500 transition font-semibold focus:outline-none focus:ring-2 focus:ring-black"
              >
                Close
              </button>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export default HelpCenterPopularArticles;
