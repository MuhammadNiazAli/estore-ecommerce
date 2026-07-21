'use client';

import React, { useState } from 'react';
import {
  FiCheckCircle,
  FiClock,
  FiTruck,
  FiXCircle,
  FiDownload,
  FiMapPin,
  FiUser,
  FiHelpCircle,
  FiCreditCard,
  FiShoppingBag,
  FiPackage,
  FiArrowRight,
  FiMessageCircle,
  FiPhone,
  FiChevronRight,
  FiAlertTriangle,
} from 'react-icons/fi';

const statusDetails = {
  pending: {
    title: 'Pending',
    description: 'Your order is awaiting processing.',
    icon: <FiClock />,
    actions: ['Cancel Order', 'Contact Support'],
    extended: ['Order received, pending confirmation.', 'Estimated processing within 24 hours.'],
  },
  processing: {
    title: 'Processing',
    description: 'Your order is being packed and prepared.',
    icon: <FiPackage />,
    actions: ['Track Packaging', 'Contact Support'],
    extended: ['Estimated handling time: 1–2 days.', 'Packing with care to avoid damages.'],
  },
  shipped: {
    title: 'Shipped',
    description: 'Your order is on the way.',
    icon: <FiTruck />,
    actions: ['Track Shipment', 'Contact Support'],
    extended: [
      'Carrier: FastExpress',
      'Tracking Number: 1234567890',
      'Estimated arrival: July 12, 2025',
      'You can track your package anytime via carrier website.',
    ],
  },
  delivered: {
    title: 'Delivered',
    description: 'Order delivered successfully.',
    icon: <FiCheckCircle />,
    actions: ['Leave Feedback', 'Request Return', 'Contact Support'],
    extended: ['Delivered on July 11, 2025.', 'Please check package and contents carefully.'],
  },
  cancelled: {
    title: 'Cancelled',
    description: 'Order was cancelled.',
    icon: <FiXCircle />,
    actions: ['Contact Support', 'Place New Order'],
    extended: ['Cancelled on July 6, 2025.', 'If this was a mistake, contact support immediately.'],
  },
};

const timelineSteps = [
  { key: 'pending', label: 'Pending', icon: <FiClock /> },
  { key: 'processing', label: 'Processing', icon: <FiPackage /> },
  { key: 'shipped', label: 'Shipped', icon: <FiTruck /> },
  { key: 'delivered', label: 'Delivered', icon: <FiCheckCircle /> },
  { key: 'cancelled', label: 'Cancelled', icon: <FiXCircle /> },
];

const faqData = [
  {
    question: 'How can I track my order?',
    answer:
      'You can track your order using the tracking number provided in the "Shipped" status. Click "Track Shipment" button or visit our carrier’s website.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy on most products. Items must be unused and in original packaging. Contact support for a return authorization.',
  },
  {
    question: 'Can I change my shipping address?',
    answer:
      'Shipping address changes can be requested within 2 hours of placing your order. Contact support as soon as possible.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can contact customer support via phone, email, or live chat available on our website. See the “Support” section below.',
  },
];

const OrderSummary = () => {
  const [selectedStatus, setSelectedStatus] = useState('processing');
  const [notes, setNotes] = useState(
    'Please deliver between 9am and 5pm. Leave package at the front door if no one answers.'
  );

  const order = {
    id: 'ORD123456',
    status: 'processing',
    paymentStatus: 'Paid',
    paymentDate: 'July 5, 2025',
    transactionId: 'TXN987654321',
    placedOn: 'July 5, 2025',
    estimatedDelivery: 'July 12, 2025',
    carrier: 'FastExpress',
    trackingUrl: 'https://carrier.example.com/track/1234567890',
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+31 20 123 4567',
      memberSince: 'March 2023',
    },
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Amsterdam',
      state: 'North Holland',
      zip: '1012 AB',
      country: 'Netherlands',
      instructions: 'Leave package at the back porch if nobody answers.',
    },
    billingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Amsterdam',
      state: 'North Holland',
      zip: '1012 AB',
      country: 'Netherlands',
    },
    paymentMethod: 'Visa ending in 1234',
    items: [
      {
        id: 1,
        name: 'Wireless Headphones',
        brand: 'SoundMax',
        sku: 'WH-001',
        category: 'Electronics',
        qty: 1,
        price: 89.99,
        description: 'High quality wireless headphones with noise cancellation and 20h battery life.',
        image:
          'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop',
        variants: ['Black', 'With Mic'],
      },
      {
        id: 2,
        name: 'Smart Watch',
        brand: 'TimeTech',
        sku: 'SW-002',
        category: 'Wearables',
        qty: 1,
        price: 199.99,
        description: 'Waterproof smartwatch with heart rate monitor and GPS tracking.',
        image:
          'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop',
        variants: ['Silver', 'Leather Strap'],
      },
    ],
    subtotal: 289.98,
    shipping: 9.99,
    tax: 15.0,
    discount: 20.0,
    discountReason: 'Summer Sale 10%',
    total: 294.97,
  };

  return (
    <section className="w-full max-w-[1100px] mx-auto bg-white text-gray-900 p-6 sm:p-10 rounded-2xl mb-15">
   
      <header className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-amber-600 mb-2 select-none my-10">
          Order Summary
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Order <strong>#{order.id}</strong> • Status:{' '}
          <strong className="capitalize">{order.status}</strong> • Placed on {order.placedOn}
        </p>
      </header>

   
      <nav
        aria-label="Order progress"
        className="mb-8 flex flex-wrap justify-between gap-3 border-b border-gray-200 pb-6"
      >
        {timelineSteps.map(({ key, label, icon }) => {
          const active = key === selectedStatus;
          const done = timelineSteps.findIndex(s => s.key === key) < timelineSteps.findIndex(s => s.key === order.status);
          const isCancelled = order.status === 'cancelled';

          return (
            <button
  key={key}
  onClick={() => setSelectedStatus(key)}
  className={`flex flex-col items-center gap-1 py-2 px-3 min-w-[88px] rounded-xl font-semibold text-sm transition
    ${
      isCancelled && key !== 'cancelled'
        ? 'cursor-not-allowed text-gray-600 border border-gray-200 bg-white'
        : active
        ? 'bg-amber-700 text-gray-900 shadow-lg shadow-amber-800/50 border border-amber-600'
        : done
        ? 'text-amber-600 border border-amber-800 bg-white hover:bg-gray-500'
        : 'text-gray-500 border border-gray-200 hover:text-amber-500 hover:bg-gray-500 cursor-pointer'
    }
  `}
  disabled={isCancelled && key !== 'cancelled'}
  aria-current={active ? 'step' : undefined}
>
  <div
    className={`p-2 rounded-full mb-1 ${
      active
        ? 'bg-white text-amber-600'
        : done
        ? 'bg-amber-700 text-black'
        : 'bg-white text-gray-600'
    }`}
  >
    {icon}
  </div>
  {label}
</button>

          );
        })}
      </nav>

    
      <section className="bg-white p-6 rounded-xl mb-10">
  <h2 className="flex items-center gap-3 text-2xl font-bold text-amber-600 mb-3 select-none">
    {statusDetails[selectedStatus].icon}
    {statusDetails[selectedStatus].title}
  </h2>
  <p className="text-amber-400 text-base mb-4">{statusDetails[selectedStatus].description}</p>
  <ul className="list-disc list-inside text-amber-500 text-sm mb-6 space-y-1">
    {statusDetails[selectedStatus].extended.map((line, i) => (
      <li key={i}>{line}</li>
    ))}
  </ul>
  <div className="flex flex-wrap gap-3">
    {statusDetails[selectedStatus].actions.map((action, i) => (
      <button
        key={i}
        className="px-5 py-2 rounded-full bg-amber-700 hover:bg-amber-800 transition text-black font-semibold text-sm shadow-md flex items-center gap-2"
        onClick={() => alert(action)}
        type="button"
      >
        <FiArrowRight />
        {action}
      </button>
    ))}
  </div>
</section>


     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <InfoCard
          icon={<FiUser />}
          title="Customer"
          lines={[
            `Name: ${order.customer.name}`,
            `Email: ${order.customer.email}`,
            `Phone: ${order.customer.phone}`,
            `Member since: ${order.customer.memberSince}`,
          ]}
        />
        <InfoCard
          icon={<FiMapPin />}
          title="Shipping Address"
          lines={[
            order.shippingAddress.name,
            order.shippingAddress.street,
            `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`,
            order.shippingAddress.country,
            `Instructions: ${order.shippingAddress.instructions}`,
          ]}
        />
        <InfoCard
          icon={<FiMapPin />}
          title="Billing Address"
          lines={[
            order.billingAddress.name,
            order.billingAddress.street,
            `${order.billingAddress.city}, ${order.billingAddress.state} ${order.billingAddress.zip}`,
            order.billingAddress.country,
          ]}
        />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <InfoCard
          icon={<FiCreditCard />}
          title="Payment Details"
          lines={[
            order.paymentMethod,
            `Status: ${order.paymentStatus}`,
            `Paid on: ${order.paymentDate}`,
            `Transaction ID: ${order.transactionId}`,
          ]}
        />
        <InfoCard
          icon={<FiTruck />}
          title="Delivery Details"
          lines={[
            `Carrier: ${order.carrier}`,
            `Estimated Delivery: ${order.estimatedDelivery}`,
            <>
              Tracking Number:{' '}
              <a
                href={order.trackingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 underline hover:text-amber-500"
              >
                1234567890 <FiChevronRight className="inline" />
              </a>
            </>,
          ]}
        />
      </div>

     
      <section className="mb-10">
  <h3 className="flex items-center gap-3 text-2xl font-bold text-amber-600 mb-6 select-none">
    <FiShoppingBag />
    Items in Your Order
  </h3>
  <ul className="divide-y divide-gray-200">
    {order.items.map((item) => (
      <li key={item.id} className="flex flex-col sm:flex-row gap-6 py-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 rounded-lg border border-gray-200 object-cover flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div className="flex-grow space-y-2 text-amber-400 text-sm sm:text-base">
          <h4 className="text-lg font-semibold text-amber-300">{item.name}</h4>
          <p className="italic text-amber-600">{item.brand}</p>
          <p>{item.description}</p>
          <p className="text-xs sm:text-sm text-amber-500">
            <span className="font-semibold text-amber-300">SKU:</span> {item.sku} &nbsp;|&nbsp;{' '}
            <span className="font-semibold text-amber-300">Category:</span> {item.category} &nbsp;|&nbsp;{' '}
            <span className="font-semibold text-amber-300">Variants:</span> {item.variants.join(', ')}
          </p>
          <p>
            Quantity: <strong className="text-amber-300">{item.qty}</strong>
          </p>
          <p>
            Price each: <strong className="text-amber-300">${item.price.toFixed(2)}</strong>
          </p>
          <p className="text-lg font-bold text-amber-400">
            Total: ${(item.price * item.qty).toFixed(2)}
          </p>
        </div>
      </li>
    ))}
  </ul>
</section>


   
      <section className="max-w-md mx-auto border-t border-gray-200 pt-6 text-gray-700 space-y-3 mb-10 text-sm sm:text-base">
        <SummaryLine label="Subtotal" value={order.subtotal} />
        <SummaryLine label="Shipping" value={order.shipping} />
        <SummaryLine label="Tax" value={order.tax} />
        {order.discount > 0 && (
          <SummaryLine label={`Discount (${order.discountReason})`} value={-order.discount} highlight />
        )}
        <div className="flex justify-between text-xl font-extrabold text-gray-900 border-t border-gray-200 pt-4">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </section>

   
      <section className="bg-white border border-amber-900 rounded-lg p-6 text-amber-500 mb-10 max-w-xl mx-auto ">
        <h4 className="font-semibold text-lg mb-3 select-none flex items-center gap-2">
          <FiMessageCircle /> Order Notes
        </h4>
        <textarea
          className="w-full bg-white border border-amber-900 rounded-md p-3 text-amber-400 resize-y focus:outline-none focus:ring-2 focus:ring-amber-700 transition"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          aria-label="Edit order notes"
        />
        <p className="mt-2 text-amber-600 text-xs italic select-none">
          You can add special instructions or update notes for your order.
        </p>
      </section>

     
      <section className="max-w-xl mx-auto mb-10">
  <h3 className="text-2xl font-bold text-amber-600 mb-6 select-none">
    Customer Support & FAQ
  </h3>
  <ul className="space-y-6 text-amber-400 text-sm sm:text-base">
    {faqData.map(({ question, answer }, i) => (
      <li key={i}>
        <details className="group bg-white rounded-lg p-4 cursor-pointer shadow-md hover:bg-gray-500 transition">
          <summary className="flex items-center justify-between font-semibold text-amber-300">
            {question}
            <FiChevronRight className="transition-transform group-open:rotate-90 text-amber-600" />
          </summary>
          <p className="mt-3 text-amber-500">{answer}</p>
        </details>
      </li>
    ))}
  </ul>
</section>


 
      <section className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-10">
        <ActionButton icon={<FiMapPin />} label="Track Order" primary onClick={() => window.open(order.trackingUrl, '_blank')} />
        <ActionButton icon={<FiDownload />} label="Download Invoice" onClick={() => alert('Downloading Invoice...')} />
        <ActionButton icon={<FiHelpCircle />} label="Contact Support" danger onClick={() => alert('Contacting Support...')} />
      </section>
    </section>
  );
};


const InfoCard = ({ icon, title, lines }) => (
  <div className="bg-white rounded-xl p-6 text-sm sm:text-base space-y-2 shadow-md">
    <h4 className="flex items-center gap-3 font-semibold text-amber-600 text-lg mb-2 select-none">
      {icon} {title}
    </h4>
    {lines.map((line, i) =>
      typeof line === 'string' ? (
        <p key={i} className="text-gray-700">
          {line}
        </p>
      ) : (
        <div key={i}>{line}</div>
      )
    )}
  </div>
);

const SummaryLine = ({ label, value, highlight }) => (
  <div
    className={`flex justify-between ${
      highlight ? 'text-green-400 font-semibold' : ''
    }`}
  >
    <span>{label}</span>
    <span>{value < 0 ? `- $${Math.abs(value).toFixed(2)}` : `$${value.toFixed(2)}`}</span>
  </div>
);

const ActionButton = ({ icon, label, primary, danger, onClick }) => (
 <button
  className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition
    ${
      primary
        ? 'bg-amber-700 text-gray-900 hover:bg-amber-800 shadow-lg shadow-amber-600/40'
        : danger
        ? 'border border-red-600 text-red-500 hover:bg-red-900 shadow-inner'
        : 'border border-gray-200 text-gray-700 hover:bg-gray-500'
    }
    w-full sm:w-auto whitespace-nowrap
  `}
  onClick={onClick}
  type="button"
>
  {icon} {label}
</button>

);

export default OrderSummary;
