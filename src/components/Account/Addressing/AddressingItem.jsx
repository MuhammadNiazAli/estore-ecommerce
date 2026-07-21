'use client';

import React from 'react';

const AddressingItem = ({
  id,
  name,
  street,
  city,
  state,
  zip,
  country,
  phone,
  isDefault,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex justify-between items-start flex-wrap gap-4">
      <div className="flex flex-col space-y-1 max-w-[70%]">
        <p className="text-xl font-semibold text-gray-900">{name}</p>
        <p className="text-gray-700">{street}</p>
        <p className="text-gray-700">
          {city}, {state} {zip}
        </p>
        <p className="text-gray-700">{country}</p>
        <p className="text-gray-700">{phone}</p>
        {isDefault && (
          <span className="inline-block mt-1 px-2 py-1 text-xs bg-amber-600 text-gray-900 font-bold rounded">
            Default
          </span>
        )}
      </div>

      <div className="flex space-x-2 mt-2 sm:mt-0">
        <button
          onClick={() =>
            onEdit &&
            onEdit({ id, name, street, city, state, zip, country, phone, isDefault })
          }
          className="px-4 py-2 bg-amber-800 rounded hover:bg-amber-900 transition text-gray-900 font-semibold"
          aria-label={`Edit address ${name}`}
        >
          Edit
        </button>
        <button
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete address: "${name}"?`)) {
              onDelete && onDelete(id);
            }
          }}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition text-gray-900 font-semibold"
          aria-label={`Delete address ${name}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressingItem;
