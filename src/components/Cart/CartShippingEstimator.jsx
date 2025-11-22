import React, { useState } from 'react';

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
];

const CartShippingEstimator = () => {
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [shippingCost, setShippingCost] = useState(null);
  const [error, setError] = useState('');

  const handleEstimate = () => {
    setError('');
    if (!country) {
      setError('Please select a country.');
      setShippingCost(null);
      return;
    }
    if (!postalCode.trim()) {
      setError('Please enter a postal code.');
      setShippingCost(null);
      return;
    }
    // Fake calculation logic (just for demo)
    const cost = (country.length + postalCode.length) * 0.5;
    setShippingCost(cost.toFixed(2));
  };

  return (
    <section className="bg-gray-900 text-gray-100 p-6 rounded-lg max-w-md mx-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Estimate Shipping</h2>

      <div className="flex flex-col space-y-4">
        {/* Country selector */}
        <label htmlFor="country" className="block text-sm font-medium mb-1">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Postal code input */}
        <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
          Zip / Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Enter postal code"
          className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Estimate button */}
        <button
          type="button"
          onClick={handleEstimate}
          className="w-full bg-yellow-600 hover:bg-yellow-700 transition-colors rounded-md py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Estimate Shipping
        </button>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm font-medium text-center">{error}</p>
        )}

        {/* Result */}
        {shippingCost && (
          <p className="text-yellow-400 text-center font-semibold">
            Estimated Shipping Cost: ${shippingCost}
          </p>
        )}
      </div>
    </section>
  );
};

export default CartShippingEstimator;
