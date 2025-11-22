import React from 'react';

const OrderingList = ({ orders, selectedOrder, onSelect }) => {
  const hasOrders = Array.isArray(orders) && orders.length > 0;

  if (!hasOrders) {
    return (
      <section
        aria-label="Order list"
        className="text-center text-sm text-gray-400 py-6"
      >
        You have no orders yet.
      </section>
    );
  }

  const handleSelect = (order) => {
    if (onSelect) {
      onSelect(order);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-400';
      case 'Shipped':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section
      aria-label="Order list"
      className="max-w-4xl mx-auto lg:mx-0 bg-gray-800 rounded-lg p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-6">
        Your Orders
      </h2>

      <ul className="divide-y divide-gray-700">
        {orders.map((order) => {
          const { id, status, date, items } = order;
          const total = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          const isSelected = selectedOrder?.id === id;

          return (
            <li
              key={id}
              role="button"
              aria-pressed={isSelected}
              tabIndex={0}
              className={`flex justify-between items-center py-4 px-3 rounded-md cursor-pointer transition-colors ${
                isSelected
                  ? 'bg-yellow-500 bg-opacity-20'
                  : 'hover:bg-yellow-400 hover:bg-opacity-10'
              }`}
              onClick={() => handleSelect(order)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(order);
                }
              }}
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-100">Order #{id}</span>
                <span className="text-sm text-gray-400">
                  {new Date(date).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`text-sm font-semibold ${getStatusColor(status)}`}
                >
                  {status}
                </span>
                <span className="font-bold text-yellow-400">
                  ${total.toFixed(2)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OrderingList;
