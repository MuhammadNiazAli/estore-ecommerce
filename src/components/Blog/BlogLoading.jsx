'use client';

import React from 'react';

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-700 rounded ${className}`}
    aria-hidden="true"
  />
);

const BlogLoading = () => {
  return (
    <section className="w-full flex justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8 mb-[-130px]">
      <div className="max-w-[1000px] w-full space-y-12">
        {/* Hero Skeleton */}
        <div className="flex flex-col md:flex-row gap-6">
          <Skeleton className="h-40 sm:h-48 w-full md:w-1/2 rounded-xl" />
          <Skeleton className="h-40 sm:h-48 w-full md:w-1/2 rounded-xl" />
        </div>

        {/* Filters Skeleton */}
        <div className="flex flex-wrap justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-20 sm:w-24 h-8 rounded-full" />
          ))}
        </div>

        {/* Blog Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden flex flex-col shadow-sm"
            >
              <Skeleton className="h-36 sm:h-40 w-full rounded-md" />
              <div className="p-5 flex flex-col gap-3">
                <Skeleton className="h-5 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-1/2 rounded-md" />
                <Skeleton className="h-8 w-24 mt-2 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogLoading;
