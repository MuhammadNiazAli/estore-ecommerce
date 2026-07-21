import React from 'react';

const OrderingAddressInfo = ({ address }) => {
  const isAddressAvailable = Boolean(address);

  if (!isAddressAvailable) {
    return (
      <section
        aria-label="Shipping address"
        className="text-center text-sm text-gray-600 py-6"
      >
        No shipping address available.
      </section>
    );
  }

  const { name, street, city, zip, country } = address;

  return (
    <section
      aria-label="Shipping address"
      className="bg-white text-gray-700 rounded-lg p-6 max-w-md mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-amber-600 border-b border-amber-600 pb-2 mb-4">
        Shipping Address
      </h2>

      <address className="not-italic space-y-1 text-base leading-relaxed">
        {name && <p>{name}</p>}
        {street && <p>{street}</p>}
        {(city || zip) && (
          <p>
            {city}
            {city && zip ? ', ' : ''}
            {zip}
          </p>
        )}
        {country && <p>{country}</p>}
      </address>
    </section>
  );
};

export default OrderingAddressInfo;
