import React, { useState } from 'react'

const categories = ['Jackets', 'Shoes', 'Accessories', 'Bags', 'Watches']
const prices = ['Under $50', '$50 to $100', '$100 to $200', 'Over $200']
const ratings = [4, 3, 2, 1] // stars

const BestsellersFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedRating, setSelectedRating] = useState(null)

  const toggleCategory = (cat) => {
    setSelectedCategory(selectedCategory === cat ? null : cat)
  }
  const togglePrice = (price) => {
    setSelectedPrice(selectedPrice === price ? null : price)
  }
  const toggleRating = (rate) => {
    setSelectedRating(selectedRating === rate ? null : rate)
  }

  return (
    <section className="bg-gray-900 p-6 sm:p-8 rounded-xl max-w-5xl mx-auto">
      <h3 className="text-yellow-400 text-2xl font-bold mb-6 select-none">
        Filter Bestsellers
      </h3>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        {/* Category Filter */}
        <div className="flex-1">
          <h4 className="text-yellow-300 font-semibold mb-3">Category</h4>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    selectedCategory === cat
                      ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/50'
                      : 'bg-yellow-900 bg-opacity-20 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900'
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                  `}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="flex-1">
          <h4 className="text-yellow-300 font-semibold mb-3">Price Range</h4>
          <div className="flex flex-wrap gap-3">
            {prices.map((price) => (
              <button
                key={price}
                onClick={() => togglePrice(price)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    selectedPrice === price
                      ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/50'
                      : 'bg-yellow-900 bg-opacity-20 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900'
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                  `}
                aria-pressed={selectedPrice === price}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="flex-1">
          <h4 className="text-yellow-300 font-semibold mb-3">Rating</h4>
          <div className="flex flex-wrap gap-3">
            {ratings.map((rate) => (
              <button
                key={rate}
                onClick={() => toggleRating(rate)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    selectedRating === rate
                      ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/50'
                      : 'bg-yellow-900 bg-opacity-20 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900'
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                  `}
                aria-pressed={selectedRating === rate}
                aria-label={`${rate} star${rate > 1 ? 's' : ''} & up`}
              >
                {/* Star Icons */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < rate ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1
                        1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37
                        2.448a1 1 0 00-.364 1.118l1.287
                        3.955c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1
                        0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.955a1
                        1 0 00-.364-1.118L2.03 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1
                        1 0 00.95-.69l1.286-3.955z"
                    />
                  </svg>
                ))}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestsellersFilters
