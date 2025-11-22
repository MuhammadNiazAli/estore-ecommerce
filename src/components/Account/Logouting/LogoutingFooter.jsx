'use client';

import React from 'react';

const LogoutingFooter = () => {
  return (
    <footer className="w-full max-w-[900px] mx-auto mt-16 py-6 text-center text-yellow-400 text-sm select-none">
      <p>
        &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </p>
      <p className="mt-1 text-yellow-300">
        Need help? Contact{' '}
        <a
          href="mailto:support@yourcompany.com"
          className="underline hover:text-yellow-200"
          aria-label="Contact support email"
        >
          support@yourcompany.com
        </a>
      </p>
    </footer>
  );
};

export default LogoutingFooter;
