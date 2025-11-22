import React from "react";

// Utility to create URL-friendly slug from title
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s&/\\#,+()$~%.'":*?<>{}!@^|]/g, "-")
    .replace(/-+/g, "-"); // remove repeated dashes

const products = [
  {
    id: 1,
    title: "Luxury Noise-Cancelling Headphones",
    description:
      "Immerse yourself in premium sound with crystal-clear noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sleek Smartwatch Pro",
    description:
      "Track your fitness and stay connected with this stylish smartwatch.",
    image:
      "https://images.unsplash.com/photo-1515415883846-e3431de1c20d?q=80&w=774&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ergonomic Wireless Keyboard",
    description:
      "Comfort and productivity combined in a wireless keyboard design.",
    image:
      "https://images.unsplash.com/photo-1639294715006-f55176f88eec?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Laptop Stand",
    description:
      "Elevate your laptop for better posture and improved cooling.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "High-Precision Wireless Mouse",
    description:
      "Enjoy smooth and accurate cursor control with this wireless mouse.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Smart Home Assistant",
    description:
      "Control your smart devices hands-free with this home assistant.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=774&auto=format&fit=crop",
  },
];

const ProductGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mb-[-30px]">
     <h2
  className="
    text-2xl sm:text-4xl
    font-extrabold
    text-gray-900 dark:text-white
    mb-12
    text-center
    tracking-tight
    whitespace-nowrap
    overflow-hidden
    truncate
  "
>
  Product Gallery
</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(({ title, image, description }) => {
          const slug = `/products/${slugify(title)}`;

          return (
            <article
              key={slug}
              tabIndex={0}
              className="relative rounded-xl shadow-lg cursor-pointer bg-white dark:bg-gray-900 overflow-hidden
                group focus:outline-none focus:ring-4 focus:ring-yellow-400
                transform transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]"
              aria-label={`View details for ${title}`}
            >
              {/* Image linked */}
              <a
                href={slug}
                className="block w-full h-64 overflow-hidden rounded-t-xl relative focus:outline-none"
                tabIndex={-1}
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out
                    group-hover:scale-110 group-focus:scale-110"
                  style={{ willChange: "transform" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-t-xl" />
              </a>

              {/* Overlay content (desktop/tablet) */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60 text-white
                  opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
                  transition-opacity duration-300 ease-in-out rounded-b-xl"
              >
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{title}</h3>
                <p className="text-sm line-clamp-2">{description}</p>
                <a
                  href={slug}
                  className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md
                    hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                >
                  View Details
                </a>
              </div>

              {/* Mobile text below image */}
              <div className="p-4 md:hidden bg-white dark:bg-gray-900 rounded-b-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  <a href={slug} className="hover:underline focus:underline">
                    {title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {description}
                </p>
                <a
                  href={slug}
                  className="mt-3 inline-block w-full text-center px-3 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md
                    hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                >
                  View Details
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGallery;
