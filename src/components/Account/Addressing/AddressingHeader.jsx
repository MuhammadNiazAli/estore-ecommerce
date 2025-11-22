'use client';

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const AddressingHeader = ({ onBack }) => {
  return (
    <header className="w-full max-w-[1200px] mx-auto px-6 py-6 flex items-center gap-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 rounded-3xl shadow-md text-white">
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Go back"
          className="p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
          type="button"
        >
          <FiArrowLeft size={24} />
        </button>
      )}

      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Manage Your Addresses
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-1 max-w-md">
          Easily add, edit, or remove your delivery addresses to ensure smooth checkout.
        </p>
      </div>
    </header>
  );
};

export default AddressingHeader;
