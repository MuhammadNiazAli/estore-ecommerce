import React from 'react'

const BestsellersLoadingSkeleton = () => {
  // We'll create an array of 8 placeholders for demo
  const placeholders = Array(4).fill(0)

  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-10 bg-white rounded-xl my-10 mb-[-20px]">
      <h3 className="text-black text-3xl font-extrabold mb-8 select-none">
        Loading Bestsellers...
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {placeholders.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-4 animate-pulse"
            aria-busy="true"
            aria-label="Loading product"
          >
            {/* Image skeleton */}
            <div className="bg-black bg-opacity-30 rounded-lg aspect-[4/5] w-full"></div>

            {/* Title skeleton */}
            <div className="h-5 bg-black bg-opacity-30 rounded w-3/4"></div>

            {/* Price skeleton */}
            <div className="h-4 bg-black bg-opacity-30 rounded w-1/2"></div>

            {/* Rating skeleton */}
            <div className="flex space-x-1">
              {[...Array(5)].map((__, i) => (
                <div
                  key={i}
                  className="h-4 w-4 bg-black bg-opacity-30 rounded"
                ></div>
              ))}
            </div>

            {/* Button skeleton */}
            <div className="h-9 bg-black bg-opacity-20 rounded w-full"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestsellersLoadingSkeleton
