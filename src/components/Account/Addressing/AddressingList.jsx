'use client';

import React, { useState } from 'react';
import AddressingItem from './AddressingItem';
import AddressingModal from './AddressingModal';
import AddressingFooter from './AddressingFooter';

const AddressList = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      street: '123 Main St',
      city: 'Amsterdam',
      state: 'NH',
      zip: '1000',
      country: 'Netherlands',
      phone: '+31 123 456 789',
      isDefault: true,
    },
    // You can add more initial addresses here if needed
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleEdit = (id) => {
    const addr = addresses.find((a) => a.id === id);
    setEditingAddress(addr);
    setModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingAddress(null);
    setModalOpen(true);
  };

  const handleSave = (addressData) => {
    setAddresses((prev) => {
      if (addressData.id) {
        // Editing existing
        return prev.map((addr) =>
          addr.id === addressData.id ? { ...addressData } : addr
        );
      } else {
        // Adding new
        const newId = prev.length ? Math.max(...prev.map((a) => a.id)) + 1 : 1;
        return [...prev, { ...addressData, id: newId }];
      }
    });
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <div className="max-w-3xl mx-auto w-full p-4 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Addresses</h1>

        <div className="space-y-4">
          {addresses.length === 0 && (
            <p className="text-gray-600 text-center">No addresses added yet.</p>
          )}

          {addresses.map((address) => (
            <AddressingItem
              key={address.id}
              {...address}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {modalOpen && (
          <AddressingModal
            address={editingAddress}
            onClose={() => setModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>

      {/* Footer always at bottom */}
      <AddressingFooter onAddNewClick={handleAddNew} />
    </div>
  );
};

export default AddressList;
