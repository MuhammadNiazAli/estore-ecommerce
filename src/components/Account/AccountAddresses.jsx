'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultAddresses = [
  {
    id: 'addr1',
    label: 'Shipping Address',
    recipientName: 'Niaz Ali',
    company: 'Niaz Fashion Ltd.',
    street: '123 Fashion St.',
    city: 'Amsterdam',
    state: 'North Holland',
    postalCode: '1011 AB',
    country: 'Netherlands',
    phone: '+31 20 123 4567',
    isDefault: true,
  },
];

const tapSpring = {
  scale: 0.95,
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  },
};

const AccountAddresses = ({ addresses = defaultAddresses, setUserData }) => {
  const [addressList, setAddressList] = useState(addresses);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    label: '',
    recipientName: '',
    company: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
    isDefault: false,
  });
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      const firstInput = formRef.current.querySelector('input[name="label"]');
      firstInput?.focus();
    }
  }, [showForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: null }));
  };

  const validate = () => {
    const required = ['label', 'recipientName', 'street', 'city', 'postalCode', 'country', 'phone'];
    const newErrors = {};
    for (let key of required) {
      if (!formData[key]?.trim()) newErrors[key] = 'Required';
    }
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSaving(true);
    const newEntry = { ...formData, id: formData.id || `addr-${Date.now()}` };

    const updatedList = formData.id
      ? addressList.map((a) => (a.id === formData.id ? newEntry : a))
      : [...addressList, newEntry];

    if (newEntry.isDefault) {
      updatedList.forEach((a) => {
        if (a.id !== newEntry.id) a.isDefault = false;
      });
    }

    setAddressList(updatedList);
    setUserData?.((prev) => ({ ...prev, addresses: updatedList }));
    setShowForm(false);
    setFormData({
      id: null,
      label: '',
      recipientName: '',
      company: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      phone: '',
      isDefault: false,
    });
    setErrors({});
    setIsSaving(false);
  };

  const deleteAddress = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this address?');
    if (!confirmed) return;
    const updated = addressList.filter((a) => a.id !== id);
    setAddressList(updated);
    setUserData?.((prev) => ({ ...prev, addresses: updated }));
  };

  const handleEdit = (id) => {
    const found = addressList.find((a) => a.id === id);
    if (!found) return;
    setFormData(found);
    setErrors({});
    setShowForm(true);
  };

  return (
    <>
      {/* Address List */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-white to-white rounded-xl p-8 max-w-[1000px] mx-auto min-h-[400px]"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">Saved Addresses</h2>

        {addressList.length === 0 ? (
          <p className="text-gray-600 text-center italic">You haven’t added any addresses yet.</p>
        ) : (
          <div className="space-y-8">
            {addressList.map((a) => (
              <div
                key={a.id}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="md:max-w-[70%]">
                  <h3 className="text-amber-600 font-semibold text-xl mb-1 tracking-wide flex items-center gap-2">
                    {a.label}
                    {a.isDefault && (
                      <span className="bg-amber-600 text-black px-2 py-0.5 text-xs rounded-full font-bold">
                        Default
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-900 font-semibold text-lg">{a.recipientName}</p>
                  {a.company && <p className="text-gray-700">{a.company}</p>}
                  <address className="text-gray-700 not-italic text-sm space-y-0.5 mb-1">
                    <p>{a.street}</p>
                    <p>{a.city}, {a.state}</p>
                    <p>{a.postalCode}</p>
                    <p>{a.country}</p>
                  </address>
                  <p className="text-gray-600 font-mono text-sm">Phone: {a.phone}</p>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <motion.button
                    onClick={() => handleEdit(a.id)}
                    whileTap={tapSpring}
                    className="bg-amber-600 text-black px-4 py-2 rounded-md font-semibold hover:bg-amber-500"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    onClick={() => deleteAddress(a.id)}
                    whileTap={tapSpring}
                    className="bg-red-600 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-red-700"
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowForm(true)}
            whileTap={tapSpring}
            className="bg-amber-600 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-500 transition"
          >
            + Add New Address
          </motion.button>
        </div>
      </motion.section>

      {/* Form Modal with Custom Scrollbar */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none"
          >
            <motion.div
              ref={formRef}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white pointer-events-auto rounded-xl w-full max-w-xl mx-4 sm:mx-auto p-6 sm:p-8 overflow-hidden shadow-2xl border border-amber-700"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-5 text-gray-900 text-3xl hover:text-red-400 transition"
              >
                &times;
              </button>
              <h3 className="text-amber-600 text-2xl font-bold mb-6">
                {formData.id ? 'Edit Address' : 'Add New Address'}
              </h3>
              <div className="grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto pr-1 scroll-smooth custom-scroll">
                {[
                  { name: 'label', placeholder: 'Address Label (e.g., Home)' },
                  { name: 'recipientName', placeholder: 'Full Name' },
                  { name: 'company', placeholder: 'Company (optional)' },
                  { name: 'street', placeholder: 'Street Address' },
                  { name: 'city', placeholder: 'City' },
                  { name: 'state', placeholder: 'State / Province' },
                  { name: 'postalCode', placeholder: 'Postal Code' },
                  { name: 'country', placeholder: 'Country' },
                  { name: 'phone', placeholder: 'Phone Number' },
                ].map(({ name, placeholder }) => (
                  <motion.div key={name} whileTap={tapSpring} className="flex flex-col">
                    <input
                      name={name}
                      type="text"
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`px-5 py-3 rounded-lg bg-white border ${
                        errors[name] ? 'border-red-500' : 'border-gray-200'
                      } text-gray-900 placeholder-gray-400 focus:outline-none`}
                    />
                    {errors[name] && (
                      <span className="text-red-500 text-xs mt-1">{errors[name]}</span>
                    )}
                  </motion.div>
                ))}

                <label className="inline-flex items-center gap-2 cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    checked={formData.isDefault}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, isDefault: !prev.isDefault }))
                    }
                    className="form-checkbox rounded border-gray-200 text-amber-600"
                  />
                  <span className="text-gray-700 text-sm">Set as default address</span>
                </label>

                <motion.button
                  onClick={handleSave}
                  disabled={isSaving}
                  whileTap={tapSpring}
                  className={`mt-6 w-full ${
                    isSaving ? 'bg-amber-500 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500'
                  } text-black font-semibold py-3 rounded-full shadow-md transition`}
                >
                  {isSaving ? 'Saving...' : 'Save Address'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #ffffff; /* dark track */
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #b45309; /* yellow thumb */
          border-radius: 6px;
        }
      `}</style>
    </>
  );
};

export default AccountAddresses;
