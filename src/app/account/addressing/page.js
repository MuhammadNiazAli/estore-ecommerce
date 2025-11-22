'use client';

import React, { useState } from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import AddressingHero from '@/components/Account/Addressing/AddressingHero';
import AddressingList from '@/components/Account/Addressing/AddressingList';
import AddressingForm from '@/components/Account/Addressing/AddressingForm';
import AddressingItem from '@/components/Account/Addressing/AddressingItem';
import AddressingModal from '@/components/Account/Addressing/AddressingModal';
import AddressingSidebar from '@/components/Account/Addressing/AddressingSidebar';

export default function AddressingPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      phone: '+1 123-456-7890',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Office',
      street: '456 Corporate Blvd',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'USA',
      phone: '+1 987-654-3210',
      isDefault: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const openAddForm = () => {
    setEditingAddress(null);
    setShowModal(true);
  };

  const openEditForm = (address) => {
    setEditingAddress(address);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const saveAddress = (address) => {
    if (address.id) {
      // Update existing
      setAddresses((prev) =>
        prev.map((a) => (a.id === address.id ? address : a))
      );
    } else {
      // Add new
      setAddresses((prev) => [
        ...prev,
        { ...address, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />

      <AddressingSidebar />

      <div className="flex-1 space-y-10">
        <AddressingHero />

        <button
          onClick={openAddForm}
          className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
        >
          Add New Address
        </button>

        <AddressingList
          addresses={addresses}
          onEdit={openEditForm}
        />

        {showModal && (
          <AddressingModal
            address={editingAddress}
            onClose={closeModal}
            onSave={saveAddress}
          />
        )}
      </div>
    </main>
  );
}
