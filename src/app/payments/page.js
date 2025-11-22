'use client';

import React, { useState } from 'react';
import PaymentHero from '@/components/Payment/PaymentHero';
import BillingDetails from '@/components/Payment/BillingDetails';
import ShippingDetails from '@/components/Payment/ShippingDetails';
import PaymentMethod from '@/components/Payment/PaymentMethod';
import OrderSummary from '@/components/Payment/OrderSummary';
import PromoCode from '@/components/Payment/PromoCode';
import PlaceOrderButton from '@/components/Payment/PlaceOrderButton';
import SecurityInfo from '@/components/Payment/SecurityInfo';

const dummyCart = [
  { id: 'p1', name: 'T-Shirt', price: 25.99, qty: 2 },
  { id: 'p2', name: 'Sneakers', price: 89.99, qty: 1 },
];

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    shippingAddress: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [cartItems, setCartItems] = useState(dummyCart);
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = (code) => {
    if (code.toLowerCase() === 'save10') {
      if (!promoApplied) {
        const discounted = cartItems.map(item => ({
          ...item,
          price: item.price * 0.9,
        }));
        setCartItems(discounted);
        setPromoApplied(true);
      }
      return true;
    }
    return false;
  };

  const placeOrder = () => {
    alert('Order placed! Thank you.');
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col items-center justify-start px-4 pt-20 max-w-[1200px] mx-auto space-y-12">
      <PaymentHero />
      <BillingDetails formData={formData} setFormData={setFormData} />
      <ShippingDetails formData={formData} setFormData={setFormData} />
      <PaymentMethod formData={formData} setFormData={setFormData} />
      <OrderSummary cartItems={cartItems} />
      <PromoCode applyPromo={applyPromo} />
      <PlaceOrderButton
        disabled={!formData.fullName || !formData.email || !formData.address}
        onClick={placeOrder}
      />

      <SecurityInfo />

    </main>
  );
}
