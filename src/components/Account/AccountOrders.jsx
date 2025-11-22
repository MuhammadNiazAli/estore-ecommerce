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
    class: 'bg-green-600 text-white shadow-md',
    icon: <FaCheckCircle className="mr-1" />,
  },
  Processing: {
    class: 'bg-yellow-400 text-black shadow-md',
    icon: <FaSpinner className="mr-1 animate-spin-slow" />,
  },
  Cancelled: {
    class: 'bg-red-600 text-white shadow-md',
    icon: <FaTimesCircle className="mr-1" />,
  },
  Pending: {
    class: 'bg-gray-500 text-white shadow-md',
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
      className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 max-w-[1000px] mx-auto min-h-[420px] flex flex-col"
      aria-label="Order History Section"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-white tracking-wide drop-shadow-md">
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center mt-20 text-gray-400 flex flex-col items-center gap-3">
          <FaBoxOpen className="text-4xl opacity-40" />
          <p className="text-lg">You haven’t placed any orders yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg custom-scroll">
          <table className="min-w-full table-auto border-collapse bg-gray-900 rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-700">
                {['Order ID', 'Date', 'Total', 'Status', 'Action'].map((label) => (
                  <th
                    key={label}
                    className="py-4 px-6 text-gray-300 text-sm font-semibold tracking-wide uppercase select-none"
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
                  className="border-b border-gray-700 hover:bg-gray-800 hover:shadow-[0_0_12px_#facc15] transition cursor-pointer"
                >
                  <td className="py-4 px-6 font-mono text-yellow-400 text-sm underline hover:text-yellow-300 transition">
                    {id}
                  </td>
                  <td className="py-4 px-6 text-gray-300 text-sm">
                    {new Date(date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="py-4 px-6 font-semibold text-white text-sm">
                    ${total.toFixed(2)}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        statusStyles[status]?.class || 'bg-gray-600 text-white'
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
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-sm px-4 py-2 rounded-md shadow-md transition"
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
          background: #1f2937;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #facc15;
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
