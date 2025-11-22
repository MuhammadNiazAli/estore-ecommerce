'use client';

import React, { useState } from 'react';

import BooksHero from '@/components/Categories/Books/BooksHero';
import BooksFilters from '@/components/Categories/Books/BooksFilters';
import BooksProductGrid from '@/components/Categories/Books/BooksProductGrid';
import BooksCategoryInfo from '@/components/Categories/Books/BooksCategoryInfo';
import BooksFeaturedDeals from '@/components/Categories/Books/BooksFeaturedDeals';
import BooksSpecsComparison from '@/components/Categories/Books/BooksSpecsComparison';
import BooksReviewsPreview from '@/components/Categories/Books/BooksReviewsPreview';
import BooksBrandsCarousel from '@/components/Categories/Books/BooksBrandsCarousel';
import BooksAccessoriesSection from '@/components/Categories/Books/BooksAccessoriesSection';
import BooksFaq from '@/components/Categories/Books/BooksFaq';
import BooksNewsletterSignup from '@/components/Categories/Books/BooksNewsletterSignup';
import BooksPagination from '@/components/Categories/Books/BooksPagination';
import BooksCompareBar from '@/components/Categories/Books/BooksCompareBar';
import BooksQuickViewModal from '@/components/Categories/Books/BooksQuickViewModal';

export default function BooksPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [5, 500],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Atomic Habits',
      price: 20,
      image: '/books/atomic-habits.jpg',
      rating: 4.9,
      specs: { author: 'James Clear', pages: '320', genre: 'Self-help' },
      category: 'Self-help',
    },
    {
      id: 2,
      name: 'The Lean Startup',
      price: 25,
      image: '/books/lean-startup.jpg',
      rating: 4.8,
      specs: { author: 'Eric Ries', pages: '336', genre: 'Business' },
      category: 'Business',
    },
    {
      id: 3,
      name: 'Harry Potter & The Sorcerer\'s Stone',
      price: 18,
      image: '/books/harry-potter.jpg',
      rating: 4.9,
      specs: { author: 'J.K. Rowling', pages: '309', genre: 'Fantasy' },
      category: 'Fiction',
    },
    {
      id: 4,
      name: 'The Psychology of Money',
      price: 22,
      image: '/books/psychology-money.jpg',
      rating: 4.7,
      specs: { author: 'Morgan Housel', pages: '256', genre: 'Finance' },
      category: 'Finance',
    },
  ]);

  // Filter Logic
  const filteredBooks = books.filter((book) => {
    const matchesCategory = filters.category === 'All' || book.category === filters.category;
    const inPriceRange = book.price >= filters.priceRange[0] && book.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <BooksHero />

      <BooksFilters filters={filters} onFilterChange={setFilters} />

      <BooksProductGrid books={sortedBooks} />

      <BooksCategoryInfo />

      <BooksFeaturedDeals />

      <BooksSpecsComparison books={sortedBooks} />

      <BooksReviewsPreview books={sortedBooks} />

      <BooksBrandsCarousel />

      <BooksAccessoriesSection />

      <BooksFaq />

      <BooksNewsletterSignup />

      <BooksPagination totalItems={sortedBooks.length} itemsPerPage={10} />

      <BooksCompareBar />

      <BooksQuickViewModal />
    </main>
  );
}
