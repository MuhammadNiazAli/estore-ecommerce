import React from 'react';

const products = [
  {
    id: 1,
    name: 'Elegant Leather Jacket',
    price: '$249',
    description: 'Crafted from premium leather with a timeless design.',
    image: 'https://images.unsplash.com/photo-1602700205182-923ff4b8e643?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Classic White Sneakers',
    price: '$129',
    description: 'Comfort meets style with these iconic sneakers.',
    image: 'https://images.unsplash.com/photo-1608380272894-b3617f04b463?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Modern Wool Scarf',
    price: '$59',
    description: 'Stay warm and stylish with soft wool fabric.',
    image: 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Vintage Denim Jeans',
    price: '$179',
    description: 'Classic fit denim for everyday sophistication.',
    image: 'https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Luxury Watch',
    price: '$399',
    description: 'A statement piece with precision craftsmanship.',
    image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Silk Evening Dress',
    price: '$349',
    description: 'Elegant silk dress for your special occasions.',
    image: 'https://images.unsplash.com/photo-1652212029659-771ff516b0b9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const NewseasonCollection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
          Explore Our New Season Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map(({ id, name, price, image, description }) => (
            <div
              key={id}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Mobile Always Visible Details */}
              <div className="block md:hidden bg-white px-4 py-4 text-center">
                <h3 className="text-amber-500 text-lg font-semibold mb-1">{name}</h3>
                <p className="text-amber-400 text-sm mb-2">{description}</p>
                <p className="text-amber-600 font-bold text-lg mb-4">{price}</p>
                <button
                  type="button"
                  className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Shop Now
                </button>
              </div>

              {/* Desktop Hover Overlay */}
              <div className="hidden md:flex absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-center items-center px-4 text-center">
                <h3 className="text-amber-500 text-xl font-semibold mb-2">{name}</h3>
                <p className="text-amber-400 text-sm mb-4">{description}</p>
                <p className="text-amber-600 font-bold text-lg mb-6">{price}</p>
                <button
                  type="button"
                  className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewseasonCollection;
