'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AccountProfile = ({ userData, setUserData }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm({
      fullName: userData?.fullName || '',
      email: userData?.email || '',
      phone: userData?.phone || '',
    });
    setErrors({});
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email))
        newErrors.email = 'Please enter a valid email address.';
    }
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setUserData((prev) => ({
      ...prev,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    }));
    alert('Your profile has been successfully updated.');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-10 max-w-[1000px] mx-auto shadow-xl"
      aria-label="User profile form"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">
        Update Profile Details
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-8"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block mb-2 text-amber-600 font-semibold text-lg"
          >
            Full Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Jonathan Reed"
            className={`w-full px-5 py-4 rounded-lg bg-white border ${
              errors.fullName ? 'border-red-500' : 'border-gray-200'
            } text-gray-900 placeholder-amber-600 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md`}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1 text-red-400 text-sm font-medium"
              role="alert"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-amber-600 font-semibold text-lg"
          >
            Email Address <span className="text-amber-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jonathan.reed@mailprovider.com"
            className={`w-full px-5 py-4 rounded-lg bg-white border ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } text-gray-900 placeholder-amber-600 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-red-400 text-sm font-medium"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-amber-600 font-semibold text-lg"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+31 6 2589 1023"
            className="w-full px-5 py-4 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-amber-600 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md"
          />
          <p className="mt-1 text-amber-500 text-sm italic">
            Optional — Include your country and area code.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full max-w-xs mx-auto block bg-amber-600 text-black px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-500 active:scale-95 transition-transform duration-150"
          aria-label="Save profile"
        >
          Save Changes
        </button>
      </form>
    </motion.section>
  );
};

export default AccountProfile;
