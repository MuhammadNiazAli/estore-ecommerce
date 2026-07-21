import React from "react";

const products = [
  {
    id: 1,
    title: "Elegant Leather Jacket",
    price: 199.99,
    oldPrice: 249.99,
    img: "https://images.unsplash.com/photo-1700168077358-692db90c8b7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Classic Wrist Watch",
    price: 129.99,
    oldPrice: 179.99,
    img: "https://plus.unsplash.com/premium_photo-1728582543415-f3acc737f1fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Modern Sneakers",
    price: 89.99,
    oldPrice: 129.99,
    img: "https://images.unsplash.com/photo-1519976691384-bd9c1d4a95fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Stylish Sunglasses",
    price: 49.99,
    oldPrice: 79.99,
    img: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Elegant Handbag",
    price: 149.99,
    oldPrice: 199.99,
    img: "https://images.unsplash.com/photo-1634474588488-9107cd14e9f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Casual T-Shirt",
    price: 29.99,
    oldPrice: 39.99,
    img: "https://plus.unsplash.com/premium_photo-1691453527956-37117093b100?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SaleProducts = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 my-[-30px]">
      <h2 className="text-3xl font-semibold text-amber-600 mb-8 text-center tracking-wide">
        Hot Sale Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map(({ id, title, price, oldPrice, img }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-amber-700/50 transition-shadow duration-300"
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-amber-700 text-gray-900 text-xs font-semibold px-2 py-1 rounded">
                SALE
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between h-44">
              <h3
                title={title}
                className="text-amber-500 font-semibold text-lg leading-tight truncate"
              >
                {title}
              </h3>

              <div className="mt-3">
                <span className="text-amber-600 font-bold text-xl">
                  ${price.toFixed(2)}
                </span>
                <span className="text-gray-600 line-through ml-3 text-sm">
                  ${oldPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-5 w-full bg-amber-700 hover:bg-amber-800 text-gray-900 font-semibold rounded px-4 py-2 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaleProducts;
