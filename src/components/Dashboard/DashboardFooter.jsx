'use client';

import React from 'react';

const DashboardFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 flex justify-center px-4 py-6 mt-10 border-t border-gray-800 mb-[-150px]">
      <div className="w-full max-w-[1000px] text-center text-gray-400 text-sm">
        <p className="mb-1">
          &copy; {year} <span className="text-yellow-400 font-semibold">Niaz Dashboard</span>. All rights reserved.
        </p>
        <p>
          Crafted with  by <a href="#" className="text-yellow-400 hover:underline">Mr. Niaz Ali</a>
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
