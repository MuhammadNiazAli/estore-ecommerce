'use client';

import React from 'react';

const LogoutingFooter = () => {
  return (
    <footer className="w-full max-w-[900px] mx-auto mt-16 py-6 text-center text-black text-sm select-none">
      <p>
        &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </p>
      <p className="mt-1 text-black">
        Need help? Contact{' '}
        <a
          href="mailto:support@yourcompany.com"
          className="underline hover:text-black"
          aria-label="Contact support email"
        >
          support@yourcompany.com
        </a>
      </p>
    </footer>
  );
};

export default LogoutingFooter;
