'use client';

import React from 'react';

const DashboardFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white flex justify-center px-4 py-6 mt-10 border-t border-gray-200 mb-[-150px]">
      <div className="w-full max-w-[1000px] text-center text-gray-600 text-sm">
        <p className="mb-1">
          &copy; {year} <span className="text-amber-600 font-semibold">Niaz Dashboard</span>. All rights reserved.
        </p>
        <p>
          Crafted with  by <a href="#" className="text-amber-600 hover:underline">Mr. Niaz Ali</a>
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
