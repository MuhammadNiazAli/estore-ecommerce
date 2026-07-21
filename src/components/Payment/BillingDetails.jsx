'use client';

import React, { useState } from 'react';

export default function BillingDetails({ formData, setFormData, onSubmit }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[e.target.name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format.';
      }
    }
    if (formData.phone) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number.';
      }
    }
    if (!formData.address || formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      return;
    }
    setErrors({});
    onSubmit?.(formData);
  };

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-white mb-20">
      <div className="max-w-[1200px] mx-auto bg-white border border-amber-700/40 rounded-3xl shadow-2xl backdrop-blur-md ring-1 ring-amber-500/40 px-4 sm:px-10 md:px-16 py-8 sm:py-14">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-amber-500 mb-8 sm:mb-10 drop-shadow tracking-wide">
          Billing Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8"
          noValidate
        >
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            desc="Your legal full name"
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            desc="Used for order confirmation"
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            required={false}
            placeholder="+1 234 567 8901"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            desc="Optional, for delivery updates"
          />

          <InputField
            label="Shipping Address"
            name="address"
            isTextarea
            required
            placeholder="123 Elm St, Apt 4B, City, State ZIP"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            desc="Full address with postal code"
            className="md:col-span-2"
          />

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="
                w-full sm:w-auto
                bg-gradient-to-r from-amber-600 to-amber-800
                hover:from-amber-700 hover:to-amber-900
                text-gray-900 font-semibold
                px-6 sm:px-8 md:px-10
                py-3 sm:py-3.5 md:py-4
                rounded-full
                shadow-md hover:shadow-lg
                focus:outline-none focus:ring-4 focus:ring-amber-500/70
                transition-all duration-200
                text-base tracking-wide
              "
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  value,
  onChange,
  error,
  desc,
  isTextarea = false,
  className = '',
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="text-amber-400 font-medium text-sm sm:text-base mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`resize-none w-full rounded-xl bg-amber-900/40 text-gray-900 placeholder-amber-400 px-4 py-3 border transition-all focus:outline-none focus:ring-4 text-sm sm:text-base ${
            error
              ? 'border-red-500 ring-red-300'
              : 'border-amber-700 focus:ring-amber-500 hover:border-amber-600'
          }`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`w-full rounded-xl bg-amber-900/40 text-gray-900 placeholder-amber-400 px-4 py-3 border transition-all focus:outline-none focus:ring-4 text-sm sm:text-base ${
            error
              ? 'border-red-500 ring-red-300'
              : 'border-amber-700 focus:ring-amber-500 hover:border-amber-600'
          }`}
        />
      )}

      {error ? (
        <span className="text-xs sm:text-sm text-red-300 mt-1" role="alert">
          {error}
        </span>
      ) : (
        <small className="text-xs sm:text-sm text-amber-400 mt-1">{desc}</small>
      )}
    </div>
  );
}
