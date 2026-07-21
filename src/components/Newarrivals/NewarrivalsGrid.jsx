import React from 'react';

const sampleProducts = [
  {
    id: 1,
    title: 'Modern Leather Jacket',
    price: 129.99,
    oldPrice: 179.99,
    rating: 4.7,
    description: 'Sleek, durable leather jacket crafted with premium materials for everyday wear.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Minimalist Sneakers',
    price: 89.99,
    oldPrice: 99.99,
    rating: 4.3,
    description: 'Lightweight sneakers with clean design, perfect for casual and athletic wear.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Elegant Wrist Watch',
    price: 199.0,
    oldPrice: 249.0,
    rating: 4.9,
    description: 'Timeless wrist watch featuring a stainless steel frame and sapphire glass.',
    image:
      'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Classic Denim Jeans',
    price: 59.5,
    oldPrice: 79.99,
    rating: 4.1,
    description: 'Comfortable and durable denim jeans with a modern slim fit.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Stylish Sunglasses',
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.5,
    description: 'UV-protected sunglasses with a sleek frame design.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Comfortable Hoodie',
    price: 79.0,
    oldPrice: 89.99,
    rating: 4.6,
    description: 'Soft and warm hoodie made with breathable fabric for all-day comfort.',
    image:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
];

// Utility function to render star ratings (same as your original)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.381-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-4 h-4 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.381-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.381-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
};

const NewarrivalsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-tight">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sampleProducts.slice(0, 9).map(
          ({ id, title, price, oldPrice, rating, description, image }) => (
            <article
              key={id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Image */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-xl flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  aria-label="Add to Favorites"
                  className="bg-black text-gray-900 p-2 rounded-full shadow-md hover:bg-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button
                  aria-label="View Details"
                  className="bg-black text-gray-900 p-2 rounded-full shadow-md hover:bg-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-4.553a1.5 1.5 0 00-2.121-2.121L12 7.879 8.568 4.447a1.5 1.5 0 00-2.121 2.121L10 10m5 10l-4.553-4.553a1.5 1.5 0 00-2.121 2.121L12 16.121l3.432 3.432a1.5 1.5 0 002.121-2.121z"
                    />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl font-semibold text-black group-hover:text-black transition-colors">
                  {title}
                </h3>

                <p className="text-gray-700 text-sm line-clamp-3 flex-grow">{description}</p>

                <StarRating rating={rating} />

                <div className="flex items-center space-x-3">
                  <p className="text-black font-bold text-lg">${price.toFixed(2)}</p>
                  {oldPrice && (
                    <p className="text-gray-500 line-through text-sm">${oldPrice.toFixed(2)}</p>
                  )}
                  {oldPrice && (
                    <p className="text-black text-sm font-semibold">
                      Save {Math.round(((oldPrice - price) / oldPrice) * 100)}%
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  className="mt-3 w-full bg-black text-gray-900 font-semibold py-2 rounded-lg shadow-md hover:bg-black transition"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default NewarrivalsGrid;
