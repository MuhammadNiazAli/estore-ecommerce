'use client';

import React, { useState } from 'react';

import PhoneHero from '@/components/Categories/Phones/PhoneHero';
import PhoneFilters from '@/components/Categories/Phones/PhoneFilters';
import PhoneBrandHighlights from '@/components/Categories/Phones/PhoneBrandHighlights';
import PhoneList from '@/components/Categories/Phones/PhoneList';
import PhoneReviews from '@/components/Categories/Phones/PhoneReviews';
import PhoneFaq from '@/components/Categories/Phones/PhoneFaq';
import PhoneNewsletterSignup from '@/components/Categories/Phones/PhoneNewsletterSignup';

export default function PhonesPage() {
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: [0, 2000],
  });

  const [phones, setPhones] = useState([
    { id: 1, name: 'iPhone 14 Pro', price: 999, image: '/phones/iphone14pro.jpg', rating: 4.8 },
    { id: 2, name: 'Samsung Galaxy S23', price: 899, image: '/phones/galaxys23.jpg', rating: 4.5 },
  ]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <PhoneHero />
      <PhoneFilters filters={filters} onFilterChange={handleFilterChange} />
      <PhoneBrandHighlights />
      <PhoneList phones={phones} />
      <PhoneReviews />
      <PhoneFaq />
      <PhoneNewsletterSignup />
    </main>
  );
}
