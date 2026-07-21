'use client';

import React, { useState, useEffect, useRef } from 'react';

const AddressingModal = ({ address, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    isDefault: false,
  });

  const modalRef = useRef(null);

  useEffect(() => {
    if (address) setFormData(address);
    else
      setFormData({
        id: null,
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        isDefault: false,
      });
  }, [address]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Close if clicking outside modal box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.street.trim() ||
      !formData.city.trim() ||
      !formData.state.trim() ||
      !formData.zip.trim() ||
      !formData.country.trim() ||
      !formData.phone.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }

    onSave(formData);
  };

  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white text-gray-900 w-full max-w-xl rounded-xl shadow-xl p-6 font-serif"
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="address-modal-title"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 id="address-modal-title" className="text-xl font-bold">
          {address ? 'Edit Address' : 'Add New Address'}
        </h3>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 text-2xl leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Label (e.g. Home, Office)"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
            required
            autoFocus
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
            required
          />
        </div>

        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
          required
        />

        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
            required
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP / Postal Code"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
            required
          />
        </div>

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-amber-600"
          required
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="default-checkbox"
            name="isDefault"
            checked={formData.isDefault}
            onChange={handleChange}
          />
          <label htmlFor="default-checkbox" className="select-none">
            Set as default address
          </label>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-amber-700 text-gray-900 font-semibold rounded hover:bg-amber-800 transition"
          >
            {address ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressingModal;
