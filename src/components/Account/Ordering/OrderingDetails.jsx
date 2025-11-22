import React from 'react';

const OrderingDetails = ({ order }) => {
  const hasValidItems = order?.items?.length > 0;

  if (!hasValidItems) {
    return (
      <section
        aria-label="Order details"
        className="text-center text-sm text-gray-400 py-6"
      >
        No items found for this order.
      </section>
    );
  }

  const { items } = order;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section
      aria-label="Order details"
      className="bg-gray-800 text-gray-100 rounded-lg p-6 max-w-4xl mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-6">
        Order Items
      </h2>

      <ul className="divide-y divide-gray-700">
        {items.map(({ id, name, quantity, price }) => (
          <li
            key={id}
            className="flex flex-wrap justify-between items-center py-3 text-sm sm:text-base"
          >
            <span className="font-medium">{name}</span>
            <span className="text-gray-400">Qty: {quantity}</span>
            <span className="font-semibold text-yellow-400">
              ${(price * quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-end border-t border-yellow-400 pt-4">
        <p className="text-lg font-bold text-yellow-400">
          Total: ${totalAmount.toFixed(2)}
        </p>
      </div>
    </section>
  );
};

export default OrderingDetails;
