'use client'

import React from 'react';

const LaptopQuickViewModal = ({ laptop, isOpen, onClose }) => {
  if (!isOpen || !laptop) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-[1000px] w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-3xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src={laptop.image}
              alt={laptop.name}
              className="w-full h-auto rounded-md object-contain"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 text-gray-200">
            <h2 className="text-3xl font-semibold mb-4">{laptop.name}</h2>
            <p className="mb-4">{laptop.description || 'No description available.'}</p>
            <p className="text-xl font-bold text-blue-500 mb-6">${laptop.price}</p>
            {laptop.specs && (
              <div>
                <h3 className="text-2xl font-semibold mb-2">Specifications</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {Object.entries(laptop.specs).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
              onClick={() => alert('Add to cart clicked!')}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopQuickViewModal;
