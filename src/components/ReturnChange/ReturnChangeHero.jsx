'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RefreshCcw, Truck, ShieldCheck, X } from 'lucide-react';

const ReturnChangeHero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState('return');
  const [formData, setFormData] = useState({
    orderId: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);

  const tabs = {
    return: {
      title: 'Return an Item',
      desc: 'Easily return products within 14 days if you’re not satisfied.',
    },
    exchange: {
      title: 'Exchange an Item',
      desc: 'Need a different size or color? Exchange it seamlessly.',
    },
  };

  // Close modal on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenModal(false);
      }
    };

    if (openModal) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openModal]);

  // Focus trap inside modal (basic)
  useEffect(() => {
    if (openModal) {
      const focusableElements =
        'button, [href], input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
      const modal = modalRef.current;
      const firstFocusable = modal.querySelectorAll(focusableElements)[0];
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusable = focusableContent[focusableContent.length - 1];

      const handleTab = (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);

      firstFocusable?.focus();

      return () => {
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [openModal]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    // reset form + errors on tab switch
    setFormData({ orderId: '', reason: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.orderId.trim()) errs.orderId = 'Order ID is required';
    if (!formData.reason.trim()) errs.reason = 'Reason is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstError = Object.keys(errs)[0];
      const el = document.getElementById(`input-${firstError}`);
      el?.focus();
      return;
    }
    setSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setSubmitting(false);
      setOpenModal(false);
      setFormData({ orderId: '', reason: '' });
      setErrors({});
      alert(`Your ${activeTab} request has been submitted successfully!`);
    }, 2500);
  };

  return (
    <section className="bg-gray-900 text-white flex justify-center px-4 py-10 min-h-[600px]">
      <div className="w-full max-w-[1000px] text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Return & Exchange Center
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-[600px] mx-auto">
          Manage your returns or exchanges easily. Hassle-free process designed
          for your convenience.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {Object.entries(tabs).map(([key, { title }]) => (
            <button
              key={key}
              type="button"
              className={`px-6 py-3 rounded-full font-semibold border-2 transition duration-300 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 ${
                activeTab === key
                  ? 'bg-yellow-400 text-black border-yellow-400'
                  : 'border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black'
              }`}
              onClick={() => handleTabChange(key)}
              aria-pressed={activeTab === key}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Info box + button */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-10 max-w-[600px] mx-auto text-left">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
            {tabs[activeTab].title}
          </h2>
          <p className="text-gray-300 mb-6">{tabs[activeTab].desc}</p>

          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
          >
            Start {activeTab === 'return' ? 'Return' : 'Exchange'} Request
          </button>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left text-sm text-gray-300 max-w-[900px] mx-auto">
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:bg-gray-700 transition flex flex-col items-start">
            <Truck className="text-yellow-400 mb-3 w-7 h-7" />
            <h3 className="text-yellow-300 font-medium mb-1">Fast Pickup</h3>
            <p className="text-gray-300 leading-relaxed">
              We’ll pick up the item from your doorstep within 48 hours.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:bg-gray-700 transition flex flex-col items-start">
            <RefreshCcw className="text-yellow-400 mb-3 w-7 h-7" />
            <h3 className="text-yellow-300 font-medium mb-1">Instant Refunds</h3>
            <p className="text-gray-300 leading-relaxed">
              Get your money back within 1–3 business days after pickup.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:bg-gray-700 transition flex flex-col items-start">
            <ShieldCheck className="text-yellow-400 mb-3 w-7 h-7" />
            <h3 className="text-yellow-300 font-medium mb-1">Secure Process</h3>
            <p className="text-gray-300 leading-relaxed">
              All return and exchange requests are verified for your safety.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          <div
            ref={modalRef}
            className="bg-gray-800 w-full max-w-lg rounded-xl p-6 text-left relative shadow-2xl"
          >
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 rounded"
              onClick={() => setOpenModal(false)}
            >
              <X size={24} />
            </button>

            <h3
              id="modal-title"
              className="text-2xl font-bold text-yellow-400 mb-3"
            >
              {activeTab === 'return' ? 'Return Product' : 'Exchange Product'}
            </h3>

            <p className="text-gray-300 mb-4">
              Please provide details about the item you'd like to {activeTab}.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="input-orderId"
                  className="block mb-1 font-semibold text-yellow-300"
                >
                  Order ID <span className="text-red-500">*</span>
                </label>
                <input
                  id="input-orderId"
                  name="orderId"
                  type="text"
                  value={formData.orderId}
                  onChange={handleChange}
                  placeholder="e.g., #123456789"
                  aria-invalid={errors.orderId ? 'true' : 'false'}
                  aria-describedby={errors.orderId ? 'error-orderId' : undefined}
                  className={`w-full p-3 rounded-md bg-gray-900 border ${
                    errors.orderId ? 'border-red-500' : 'border-gray-700'
                  } text-white placeholder-gray-500 focus:outline-yellow-400 focus:ring-1 focus:ring-yellow-400 transition`}
                  disabled={submitting}
                  autoComplete="off"
                />
                {errors.orderId && (
                  <p
                    id="error-orderId"
                    className="mt-1 text-red-500 text-sm"
                    role="alert"
                  >
                    {errors.orderId}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="input-reason"
                  className="block mb-1 font-semibold text-yellow-300"
                >
                  Reason for request <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="input-reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please describe your reason"
                  aria-invalid={errors.reason ? 'true' : 'false'}
                  aria-describedby={errors.reason ? 'error-reason' : undefined}
                  className={`w-full p-3 rounded-md bg-gray-900 border ${
                    errors.reason ? 'border-red-500' : 'border-gray-700'
                  } text-white placeholder-gray-500 resize-none focus:outline-yellow-400 focus:ring-1 focus:ring-yellow-400 transition`}
                  disabled={submitting}
                />
                {errors.reason && (
                  <p
                    id="error-reason"
                    className="mt-1 text-red-500 text-sm"
                    role="alert"
                  >
                    {errors.reason}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 rounded-md font-semibold transition ${
                  submitting
                    ? 'bg-yellow-300 text-black cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400'
                }`}
                aria-busy={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReturnChangeHero;
