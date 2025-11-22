'use client';

import React from 'react';
import {
  FiMapPin,
  FiCreditCard,
  FiClipboard,
  FiPhone,
  FiMail,
  FiHome,
  FiPackage,
  FiTruck,
  FiTag,
  FiHelpCircle,
} from 'react-icons/fi';

const OrderDetails = () => {
  const details = {
    orderId: 'ORD123456',
    status: 'Processing',
    placedOn: 'July 5, 2025',
    shippingMethod: 'Express Shipping',
    trackingNumber: 'TRACK7891011',
    estimatedDelivery: 'July 10, 2025',
    discountCode: 'SUMMER21',
    discountAmount: 15.0,
    subtotal: 120.0,
    tax: 10.8,
    total: 115.8,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Amsterdam',
      state: 'North Holland',
      zip: '1012 AB',
      country: 'Netherlands',
      phone: '+31 20 123 4567',
      email: 'john.doe@example.com',
    },
    billingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Amsterdam',
      state: 'North Holland',
      zip: '1012 AB',
      country: 'Netherlands',
    },
    paymentMethod: 'Visa ending in 1234',
    paymentStatus: 'Paid',
    notes: 'Please deliver between 9am and 5pm. Leave at front door if no answer.',
    items: [
      {
        id: 1,
        name: 'Wireless Headphones',
        qty: 1,
        price: 89.99,
      },
      {
        id: 2,
        name: 'Bluetooth Speaker',
        qty: 2,
        price: 34.5,
      },
    ],
    supportContact: {
      phone: '+31 20 765 4321',
      email: 'support@example.com',
      hours: 'Mon-Fri, 9am - 6pm CET',
    },
  };

  return (
    <section
      aria-label="Order Information"
      className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10 bg-gray-900 text-white space-y-10 relative z-10 border border-gray-800 my-[-70px] mb-0"
    >
      {/* Order Header */}
      <header className="border-b border-blue-600 pb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
           Order Summary
        </h2>
        <p className="text-gray-300 mt-2 text-base">
          Order <span className="text-white font-semibold">#{details.orderId}</span> •{' '}
          <span className="text-blue-400 font-semibold">{details.status}</span>
        </p>
        <p className="text-gray-500 mt-1 text-sm">Placed on: {details.placedOn}</p>
      </header>

      {/* Ordered Items */}
      <Section title="Items Ordered" icon={<FiPackage />} border>
        <ul className="space-y-2 text-sm sm:text-base">
          {details.items.map((item) => (
            <li key={item.id} className="flex justify-between text-gray-300">
              <span>{item.qty} × {item.name}</span>
              <span className="font-medium text-white">€{(item.qty * item.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Shipping Address */}
      <Section title="Shipping Address" icon={<FiMapPin />} border>
        <AddressBlock data={details.shippingAddress} />
      </Section>

      {/* Billing Address */}
      <Section title="Billing Address" icon={<FiHome />} border>
        <AddressBlock data={details.billingAddress} />
      </Section>

      {/* Shipping Method */}
      <Section title="Shipping Method & Tracking" icon={<FiTruck />} border>
        <p className="text-gray-300">{details.shippingMethod}</p>
        <p className="text-gray-300">
          Tracking Number: <span className="text-blue-400 font-semibold">{details.trackingNumber}</span>
        </p>
        <p className="text-gray-500 text-sm">Estimated Delivery: <span className="text-white">{details.estimatedDelivery}</span></p>
      </Section>

      {/* Payment Details */}
      <Section title="Payment Information" icon={<FiCreditCard />} border>
        <p className="text-gray-300">{details.paymentMethod}</p>
        <p className={`font-semibold text-sm ${details.paymentStatus === 'Paid' ? 'text-green-400' : 'text-red-500'}`}>
          Status: {details.paymentStatus}
        </p>
      </Section>

      {/* Pricing */}
      <Section title="Pricing Summary" icon={<FiTag />} border>
        <ul className="text-gray-300 space-y-1 text-sm sm:text-base">
          <li className="flex justify-between">
            <span>Subtotal</span>
            <span>€{details.subtotal.toFixed(2)}</span>
          </li>
          {details.discountCode && (
            <li className="flex justify-between text-green-400">
              <span>Discount ({details.discountCode})</span>
              <span>-€{details.discountAmount.toFixed(2)}</span>
            </li>
          )}
          <li className="flex justify-between">
            <span>Tax</span>
            <span>€{details.tax.toFixed(2)}</span>
          </li>
          <li className="flex justify-between font-semibold text-white border-t border-gray-800 pt-2">
            <span>Total</span>
            <span>€{details.total.toFixed(2)}</span>
          </li>
        </ul>
      </Section>

      {/* Notes */}
      {details.notes && (
        <Section title="Order Notes" icon={<FiClipboard />} border>
          <p className="italic text-gray-400 text-sm sm:text-base">{details.notes}</p>
        </Section>
      )}

      {/* Support */}
      <Section title="Customer Support" icon={<FiHelpCircle />}>
        <p className="text-gray-300 text-sm sm:text-base mb-2">
          For help with your order, contact us:
        </p>
        <p>
          <FiPhone size={14} className="inline text-blue-400 mr-1" />
          <a href={`tel:${details.supportContact.phone}`} className="text-blue-400 hover:text-blue-300 underline">
            {details.supportContact.phone}
          </a>
        </p>
        <p>
          <FiMail size={14} className="inline text-blue-400 mr-1" />
          <a href={`mailto:${details.supportContact.email}`} className="text-blue-400 hover:text-blue-300 underline">
            {details.supportContact.email}
          </a>
        </p>
        <p className="italic text-gray-500 text-sm mt-1">Hours: {details.supportContact.hours}</p>
      </Section>
    </section>
  );
};

export default OrderDetails;

// 🔧 Reusable Section Block
const Section = ({ title, icon, children, border = false }) => (
  <section className={`${border ? 'border-b border-gray-800 pb-6' : ''}`}>
    <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-blue-400 mb-2">
      {icon} {title}
    </h3>
    <div className="space-y-2">{children}</div>
  </section>
);

// 📦 Reusable Address Block
const AddressBlock = ({ data }) => (
  <address className="not-italic text-gray-300 space-y-1 text-sm sm:text-base">
    <p className="font-medium text-white">{data.name}</p>
    <p>{data.street}</p>
    <p>{data.city}, {data.state} {data.zip}</p>
    <p>{data.country}</p>
    {data.phone && (
      <p>
        <FiPhone className="inline text-blue-400 mr-1" size={14} />
        <a href={`tel:${data.phone}`} className="text-blue-400 underline hover:text-blue-300">{data.phone}</a>
      </p>
    )}
    {data.email && (
      <p>
        <FiMail className="inline text-blue-400 mr-1" size={14} />
        <a href={`mailto:${data.email}`} className="text-blue-400 underline hover:text-blue-300">{data.email}</a>
      </p>
    )}
  </address>
);
