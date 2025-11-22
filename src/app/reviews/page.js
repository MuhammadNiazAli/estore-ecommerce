'use client';

import React from 'react';
import ReviewsHero from '@/components/Reviews/ReviewsHero';
import ReviewSummary from '@/components/Reviews/ReviewSummary';
import ReviewPhotosGallery from '@/components/Reviews/ReviewPhotosGallery';
import ReviewVideoTestimonials from '@/components/Reviews/ReviewVideoTestimonials';
import ReviewFilters from '@/components/Reviews/ReviewFilters';
import ReviewsList from '@/components/Reviews/ReviewsList';
import ReviewPagination from '@/components/Reviews/ReviewPagination';
import ReviewForm from '@/components/Reviews/ReviewForm';
import ReviewFAQ from '@/components/Reviews/ReviewFAQ';
import ReviewCard from '@/components/Reviews/ReviewCard';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col items-center justify-start px-4 pt-20 max-w-[1200px] mx-auto space-y-12">
      <ReviewsHero />
      <ReviewSummary />
      <ReviewPhotosGallery />
      <ReviewVideoTestimonials />
      <ReviewFilters />
      <ReviewCard />
      <ReviewsList />
      <ReviewPagination />
      <ReviewForm />
      <ReviewFAQ />
    </main>
  );
}
