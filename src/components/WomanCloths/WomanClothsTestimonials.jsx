import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Fashion Enthusiast",
    photo: "https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx3b21hbiUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    quote:
      "Absolutely in love with the quality and style! The fabric feels so luxurious, and the fit is perfect. Highly recommend to all fashion lovers.",
  },
  {
    id: 2,
    name: "Emma Johnson",
    role: "Blogger & Stylist",
    photo: "https://plus.unsplash.com/premium_photo-1731966052103-dbaf0590862c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    rating: 4,
    quote:
      "The designs are stunning and the customer service is top-notch. I get compliments every time I wear their dresses!",
  },
  {
    id: 3,
    name: "Isabella Martinez",
    role: "Entrepreneur",
    photo: "https://plus.unsplash.com/premium_photo-1682439580177-9e79a2429a15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    rating: 5,
    quote:
      "A perfect blend of comfort and elegance. These pieces have quickly become my wardrobe staples.",
  },
  {
    id: 4,
    name: "Olivia Brown",
    role: "Designer",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    quote: "Truly impressive designs and very comfortable to wear.",
  },
  {
    id: 5,
    name: "Mia Davis",
    role: "Fashion Blogger",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    quote: "My go-to brand for stylish yet affordable clothing.",
  },
  {
    id: 6,
    name: "Charlotte Wilson",
    role: "Stylist",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    quote: "Love how they pay attention to details. Always recommend!",
  },
  {
    id: 7,
    name: "Amelia Taylor",
    role: "Model",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 5,
    quote: "Fits like a dream and the quality is outstanding.",
  },
  {
    id: 8,
    name: "Harper Moore",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/women/77.jpg",
    rating: 4,
    quote: "Stylish and practical – exactly what I look for.",
  },
  {
    id: 9,
    name: "Evelyn Jackson",
    role: "Fashion Enthusiast",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
    quote: "Exceptional craftsmanship, and it shows in every piece.",
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 inline-block ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.965c.3.92-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.285-3.965a1 1 0 00-.363-1.118L2.044 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.951-.69l1.286-3.966z" />
      </svg>
    );
  }
  return <div className="mt-2">{stars}</div>;
};

const WomanClothsTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // Slice testimonials for current page
  const currentTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  // Handle dot click
  const goToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-900 rounded-lg my-[-30px]">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">
        What Our Customers Say
      </h2>

      {/* Carousel for desktop */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* Group testimonials in sets of 3 */}
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-3 gap-10 min-w-full"
              >
                {testimonials
                  .slice(
                    pageIndex * cardsPerPage,
                    pageIndex * cardsPerPage + cardsPerPage
                  )
                  .map(({ id, name, role, photo, rating, quote }) => (
                    <div
                      key={id}
                      className="bg-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
                    >
                      <img
                        src={photo}
                        alt={name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-600"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold text-white">
                        {name}
                      </h3>
                      <p className="text-sm text-yellow-500 italic mb-2">{role}</p>
                      <StarRating rating={rating} />
                      <p className="mt-4 text-gray-300 font-serif">
                        “{quote}”
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                currentPage === idx
                  ? "bg-yellow-500 dark:bg-yellow-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonials page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile & Tablet: show only first 3 testimonials */}
      <div className="md:hidden grid gap-10 sm:grid-cols-1">
        {testimonials.slice(0, 3).map(({ id, name, role, photo, rating, quote }) => (
          <div
            key={id}
            className="bg-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-500 dark:border-yellow-600"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-white">
              {name}
            </h3>
            <p className="text-sm text-yellow-500 italic mb-2">{role}</p>
            <StarRating rating={rating} />
            <p className="mt-4 text-gray-300 font-serif">
              “{quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomanClothsTestimonials;
