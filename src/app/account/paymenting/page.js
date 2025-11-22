'use client';

import React, { useState } from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar'; // import AccountSidebar
import PaymentingSidebar from '@/components/Account/Paymenting/PaymentingSidebar';
import PaymentingHero from '@/components/Account/Paymenting/PaymentingHero';
import PaymentingMethods from '@/components/Account/Paymenting/PaymentingMethods';
import PaymentingModal from '@/components/Account/Paymenting/PaymentingModal';
import PaymentingFooter from '@/components/Account/Paymenting/PaymentingFooter';

export default function PaymentingPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Credit Card',
      cardHolder: 'Niaz Ali',
      cardNumber: '**** **** **** 1234',
      expiry: '12/26',
      isDefault: true,
    },
    {
      id: 2,
      type: 'PayPal',
      email: 'niaz@example.com',
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);

  const openAddForm = () => {
    setEditingMethod(null);
    setIsModalOpen(true);
  };

  const openEditForm = (method) => {
    setEditingMethod(method);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveMethod = (method) => {
    if (method.id) {
      setPaymentMethods((prev) =>
        prev.map((m) => (m.id === method.id ? method : m))
      );
    } else {
      setPaymentMethods((prev) => [...prev, { ...method, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  // Define your checkout steps and current step index here
  const steps = [
    'Shipping Address',
    'Billing Information',
    'Payment Method',
    'Review Order',
    'Confirmation',
  ];
  const currentStep = 3; // Example current step, you can manage this via state/props

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      {/* Account Sidebar on the left */}
      <AccountSidebar />

      {/* PaymentingSidebar with steps */}
      <PaymentingSidebar steps={steps} currentStep={currentStep} />

      {/* Main Content */}
      <div className="flex-1 space-y-12">
        <PaymentingHero />

        <button
          onClick={openAddForm}
          className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
        >
          Add New Payment Method
        </button>

        <PaymentingMethods
          methods={paymentMethods}
          onEdit={openEditForm}
          setMethods={setPaymentMethods}
        />

        <PaymentingFooter />
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <PaymentingModal
          method={editingMethod}
          onClose={closeModal}
          onSave={saveMethod}
        />
      )}
    </main>
  );
}
