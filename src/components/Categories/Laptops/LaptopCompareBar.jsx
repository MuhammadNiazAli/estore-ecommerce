'use client'

import React from 'react';

const LaptopCompareBar = ({ selectedLaptops = [], onRemove, onCompare }) => {
  if (selectedLaptops.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 max-w-[1000px] mx-auto px-4 bg-white bg-opacity-90 rounded-md shadow-lg flex items-center space-x-4 py-3 z-50 ">
      <div className="flex space-x-4 overflow-x-auto max-w-[80%] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {selectedLaptops.map(({ id, name, image }) => (
          <div key={id} className="flex items-center bg-white rounded-md p-2 min-w-[150px]">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 object-contain rounded"
              loading="lazy"
            />
            <span className="ml-3 text-gray-800 truncate">{name}</span>
            <button
              onClick={() => onRemove(id)}
              aria-label={`Remove ${name} from comparison`}
              className="ml-3 text-red-500 hover:text-red-600 focus:outline-none"
            >
              &#10005;
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onCompare}
        className="ml-auto bg-amber-800 hover:bg-amber-900 text-gray-900 font-semibold px-6 py-2 rounded-md transition"
      >
        Compare ({selectedLaptops.length})
      </button>
    </div>
  );
};

export default LaptopCompareBar;
