'use client';

import React, { useState } from 'react';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    fullName: 'Admin',
    email: 'example.com',
    phone: '+31 6 1234 5678',
  });

  // Update form fields on input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const onFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace alert with real API call or state update
    alert('Profile updated successfully!');
  };

  return (
    <section
      aria-label="Update profile information"
      className="w-full max-w-[900px] mx-auto bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Profile Information</h2>

      <form onSubmit={onFormSubmit} className="space-y-5" noValidate>
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={profile.fullName}
            onChange={onInputChange}
            required
            placeholder="Enter your full name"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            onChange={onInputChange}
            required
            placeholder="you@example.com"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            autoComplete="email"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={profile.phone}
            onChange={onInputChange}
            placeholder="+31 6 1234 5678"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            autoComplete="tel"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-full transition-colors duration-200"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default ProfileForm;
