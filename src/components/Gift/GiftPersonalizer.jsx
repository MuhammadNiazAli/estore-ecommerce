'use client';

import React, { useState } from 'react';

const wrappingOptions = [
  { value: '', label: 'Select wrapping style', thumbnail: null },
  {
    value: 'classic',
    label: 'Classic Gold & Black',
    thumbnail: 'https://images.unsplash.com/photo-1606813909224-8a7b940c71a9?auto=format&fit=crop&w=80&q=80',
  },
  {
    value: 'festive',
    label: 'Festive Red & Green',
    thumbnail: 'https://images.unsplash.com/photo-1601320703976-9e3b5c5a6fbb?auto=format&fit=crop&w=80&q=80',
  },
  {
    value: 'minimal',
    label: 'Minimal Yellow & Gray',
    thumbnail: 'https://images.unsplash.com/photo-1551817958-20204f0a6e14?auto=format&fit=crop&w=80&q=80',
  },
  {
    value: 'floral',
    label: 'Floral Pattern',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80',
  },
];

export default function GiftPersonalizer() {
  const maxChars = 250;

  const [message, setMessage] = useState('');
  const [wrapping, setWrapping] = useState('');
  const [touched, setTouched] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Validation
  const isMessageValid = message.trim().length > 0 && message.length <= maxChars;

  // Error messages
  const messageError =
    touched && message.trim().length === 0
      ? 'Personal message is required.'
      : message.length > maxChars
      ? `Message cannot exceed ${maxChars} characters.`
      : null;

  const handleClear = () => {
    setMessage('');
    setWrapping('');
    setTouched(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isMessageValid) return;

    // Open confirmation modal
    setShowModal(true);
  };

  const confirmSubmission = () => {
    setShowModal(false);
    alert(`Personalization saved!\nMessage: ${message}\nWrapping: ${wrapping || 'None'}`);
    handleClear();
  };

  return (
    <>
      <section
        aria-labelledby="personalize-title"
        className="max-w-lg mx-auto bg-gray-900 rounded-lg shadow-2xl p-8 text-white"
      >
        <h2
          id="personalize-title"
          className="text-yellow-400 text-3xl font-extrabold mb-6 text-center drop-shadow-lg"
        >
          Personalize Your Gift
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <div>
            <label
              htmlFor="personal-message"
              className="block text-yellow-400 font-semibold mb-2 cursor-pointer"
            >
              Personal Message <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <textarea
              id="personal-message"
              name="personal-message"
              rows={5}
              maxLength={maxChars}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Write your heartfelt message here..."
              aria-describedby="message-help message-error"
              aria-invalid={!!messageError}
              className={`mt-1 w-full rounded-md bg-gray-800 border p-3 text-white placeholder-yellow-600 focus:outline-none focus:ring-2 transition resize-none ${
                messageError
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-yellow-400 focus:ring-yellow-400'
              }`}
              required
            />
            <div className="flex justify-between mt-1 text-sm">
              <p
                id="message-help"
                className={`${
                  message.length > maxChars * 0.9 ? 'text-yellow-300' : 'text-gray-400'
                }`}
              >
                {message.length} / {maxChars} characters
              </p>
              {messageError && (
                <p id="message-error" className="text-red-500 font-semibold">
                  {messageError}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="wrapping-select"
              className="block text-yellow-400 font-semibold mb-2 cursor-pointer"
            >
              Wrapping Style (optional)
            </label>
            <select
              id="wrapping-select"
              name="wrapping-select"
              value={wrapping}
              onChange={(e) => setWrapping(e.target.value)}
              className="mt-1 w-full rounded-md bg-gray-800 border border-yellow-400/50 p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              aria-describedby="wrapping-desc"
            >
              {wrappingOptions.map(({ value, label }) => (
                <option
                  key={value}
                  value={value}
                  disabled={value === ''}
                  aria-disabled={value === ''}
                >
                  {label}
                </option>
              ))}
            </select>
            <p
              id="wrapping-desc"
              className="mt-1 text-yellow-300 italic text-sm select-none"
              aria-live="polite"
            >
              {wrapping
                ? `Selected: ${wrappingOptions.find((w) => w.value === wrapping)?.label}`
                : 'Choose a wrapping style to preview'}
            </p>

            {/* Wrapping thumbnail preview */}
            {wrapping && wrapping !== '' && (
              <div className="mt-3 flex items-center gap-4">
                <img
                  src={wrappingOptions.find((w) => w.value === wrapping)?.thumbnail}
                  alt={`${wrappingOptions.find((w) => w.value === wrapping)?.label} wrapping style`}
                  className="w-20 h-20 rounded-md object-cover border border-yellow-400 shadow-md"
                  loading="lazy"
                />
                <p className="text-yellow-300 font-semibold">
                  {wrappingOptions.find((w) => w.value === wrapping)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Live preview box */}
          {message.trim() && (
            <div
              className="bg-yellow-900/30 border border-yellow-400 rounded-md p-4 text-yellow-300 whitespace-pre-wrap"
              aria-live="polite"
              aria-atomic="true"
            >
              <strong className="block mb-1">Your message preview:</strong>
              <p>{message}</p>
              {wrapping && wrapping !== '' && (
                <p className="mt-2 italic text-yellow-400">
                  Wrapping: {wrappingOptions.find((w) => w.value === wrapping)?.label}
                </p>
              )}
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={!isMessageValid}
              className={`px-8 py-2 rounded-full font-extrabold transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                isMessageValid
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 cursor-pointer'
                  : 'bg-yellow-400/50 text-gray-700 cursor-not-allowed'
              }`}
              aria-disabled={!isMessageValid}
            >
              Save Personalization
            </button>
          </div>
        </form>
      </section>

      {/* Confirmation modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 text-white">
            <h3 id="modal-title" className="text-yellow-400 text-xl font-extrabold mb-4">
              Confirm Your Personalization
            </h3>
            <p className="mb-4 whitespace-pre-wrap">{message}</p>
            {wrapping && wrapping !== '' && (
              <p className="italic text-yellow-300 mb-6">
                Wrapping style: {wrappingOptions.find((w) => w.value === wrapping)?.label}
              </p>
            )}

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmission}
                className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 font-extrabold hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
