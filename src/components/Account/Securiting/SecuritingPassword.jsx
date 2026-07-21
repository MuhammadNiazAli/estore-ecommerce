'use client';

import React from 'react';

const SecuritingPassword = () => {
  return (
    <section
      aria-label="Change your account password"
      className="w-full bg-white text-black p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Change Password</h2>
        <p className="text-sm text-black">
          We recommend using a strong, unique password that you don’t use anywhere else.
        </p>
      </div>

      <form className="space-y-5 max-w-md">
        {/* Current Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="current" className="text-sm font-medium text-black">
            Current Password
          </label>
          <input
            type="password"
            id="current"
            placeholder="Enter current password"
            className="bg-white text-black px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="new" className="text-sm font-medium text-black">
            New Password
          </label>
          <input
            type="password"
            id="new"
            placeholder="Enter new password"
            className="bg-white text-black px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="confirm" className="text-sm font-medium text-black">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm"
            placeholder="Confirm new password"
            className="bg-white text-black px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 bg-black hover:bg-black text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Update Password
        </button>
      </form>
    </section>
  );
};

export default SecuritingPassword;
