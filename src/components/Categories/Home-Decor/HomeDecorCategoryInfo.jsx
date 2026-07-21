'use client'
import React from "react";

const categories = [
  {
    id: 1,
    name: "Furniture",
    description: "Comfortable and stylish pieces for your living spaces.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 21v-7a1 1 0 011-1h14a1 1 0 011 1v7M4 10h16v4H4v-4z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Lighting",
    description: "Brighten your home with modern and elegant lighting.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Wall Decor",
    description: "Add personality with art, clocks, and wall accents.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2a4 4 0 00-4-4H5a2 2 0 00-2 2v4h6zM17 7v6h4V7h-4z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Textiles",
    description: "Soft cushions, throws, and rugs for cozy comfort.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h1l3 7h8l3-7h1"
        />
      </svg>
    ),
  },
];

const HomeDecorCategoryInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16 my-[-50px]">
      <header className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Explore Our Home Decor Categories
        </h2>
        <p className="text-gray-600 text-lg">
          Discover unique furniture, lighting, wall art, textiles, and more to
          make your space truly yours.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(({ id, name, description, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeDecorCategoryInfo;
