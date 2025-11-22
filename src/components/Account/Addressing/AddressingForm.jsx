'use client';

import React, { useState } from 'react';

const AddressingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-8 rounded-3xl shadow-lg text-white"
      aria-label="Address form"
      noValidate
    >
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
        Add / Edit Address
      </h2>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="streetAddress" className="block mb-1 font-medium">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="123 Main St"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block mb-1 font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label htmlFor="state" className="block mb-1 font-medium">
              State / Province
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block mb-1 font-medium">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="ZIP / Postal"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block mb-1 font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            <option value="" disabled>
              Select Country
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>France</option>
            <option>India</option>
            <option>Other</option>
          </select>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 555-5555"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
        >
          Save Address
        </button>
      </div>
    </form>
  );
};

export default AddressingForm;
