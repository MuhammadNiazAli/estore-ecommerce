'use client';

import React, { useState } from 'react';

const statuses = ['All', 'Delivered', 'Processing', 'Cancelled'];

const PerchasigHistoryFilters = ({ onFilterChange }) => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const triggerUpdate = (newStatus, newStart, newEnd) => {
    if (typeof onFilterChange === 'function') {
      onFilterChange({
        status: newStatus,
        startDate: newStart,
        endDate: newEnd,
      });
    }
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSelectedStatus(value);
    triggerUpdate(value, startDate, endDate);
  };

  const handleStartDateChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
    triggerUpdate(selectedStatus, value, endDate);
  };

  const handleEndDateChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
    triggerUpdate(selectedStatus, startDate, value);
  };

  return (
    <section
      aria-label="Filter your purchase history"
      className="
        max-w-[900px] mx-auto
        bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700
        rounded-3xl shadow-2xl
        p-6 flex flex-col sm:flex-row sm:items-center gap-6
      "
    >
      {/* Start Date */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
        <label
          htmlFor="start-date"
          className="text-yellow-400 font-semibold whitespace-nowrap"
        >
          From:
        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          className="
            px-3 py-2 rounded-md
            bg-yellow-800 text-yellow-100
            border border-yellow-400
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
            transition
          "
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
        <label
          htmlFor="end-date"
          className="text-yellow-400 font-semibold whitespace-nowrap"
        >
          To:
        </label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          className="
            px-3 py-2 rounded-md
            bg-yellow-800 text-yellow-100
            border border-yellow-400
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
            transition
          "
        />
      </div>

      {/* Status Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <label
          htmlFor="status-filter"
          className="text-yellow-400 font-semibold whitespace-nowrap"
        >
          Status:
        </label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={handleStatusChange}
          className="
            px-3 py-2 rounded-md
            bg-yellow-800 text-yellow-100
            border border-yellow-400
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
            transition
          "
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default PerchasigHistoryFilters;
