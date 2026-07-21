'use client';

import React from 'react';

const LogoutingConfirmation = () => {
  return (
    <section
      aria-label="Logout confirmation message"
      className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg text-amber-600 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">
        Are you sure you want to log out?
      </h2>
      <p className="text-amber-500 mb-6">
        Logging out will end your current session. You can log back in anytime.
      </p>
    </section>
  );
};

export default LogoutingConfirmation;
