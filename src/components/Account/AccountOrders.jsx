'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBoxOpen, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const orders = [
  {
    id: 'ORD-1001',
    date: '2025-06-15',
    total: 145.97,
    status: 'Delivered',
  },
  {
    id: 'ORD-1002',
    date: '2025-06-20',
    total: 89.99,
    status: 'Processing',
  },
  {
    id: 'ORD-1003',
    date: '2025-07-01',
    total: 59.99,
    status: 'Cancelled',
  },
];

const statusStyles = {
  Delivered: {
    class: 'bg-green-600 text-gray-900 shadow-md',
    icon: <FaCheckCircle className="mr-1" />,
  },
  Processing: {
    class: 'bg-amber-600 text-black shadow-md',
    icon: <FaSpinner className="mr-1 animate-spin-slow" />,
  },
  Cancelled: {
    class: 'bg-red-600 text-gray-900 shadow-md',
    icon: <FaTimesCircle className="mr-1" />,
  },
  Pending: {
    class: 'bg-gray-500 text-gray-900 shadow-md',
    icon: <FaBoxOpen className="mr-1" />,
  },
};

const tapSpring = {
  scale: 0.95,
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  },
};

const AccountOrders = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-8 max-w-[1000px] mx-auto min-h-[420px] flex flex-col"
      aria-label="Order History Section"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide drop-shadow-md">
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center mt-20 text-gray-600 flex flex-col items-center gap-3">
          <FaBoxOpen className="text-4xl opacity-40" />
          <p className="text-lg">You haven’t placed any orders yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg custom-scroll">
          <table className="min-w-full table-auto border-collapse bg-white rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-200">
                {['Order ID', 'Date', 'Total', 'Status', 'Action'].map((label) => (
                  <th
                    key={label}
                    className="py-4 px-6 text-gray-700 text-sm font-semibold tracking-wide uppercase select-none"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(({ id, date, total, status }, i) => (
                <motion.tr
                  key={id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-200 hover:bg-gray-50 hover:shadow-[0_0_12px_#b45309] transition cursor-pointer"
                >
                  <td className="py-4 px-6 font-mono text-amber-600 text-sm underline hover:text-amber-500 transition">
                    {id}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {new Date(date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 text-sm">
                    ${total.toFixed(2)}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        statusStyles[status]?.class || 'bg-white text-gray-900'
                      }`}
                    >
                      {statusStyles[status]?.icon}
                      {status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <motion.button
                      type="button"
                      onClick={() => alert(`Opening order details for ${id}`)}
                      whileTap={tapSpring}
                      className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-black font-semibold text-sm px-4 py-2 rounded-md shadow-md transition"
                      aria-label={`View details for order ${id}`}
                    >
                      <FaEye />
                      View
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Scrollbar styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #ffffff;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #b45309;
          border-radius: 6px;
        }
        .animate-spin-slow {
          animation: spin 1.6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default AccountOrders;
