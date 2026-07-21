import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";

const products = [
  {
    id: 1,
    title: "Elegant Red Dress",
    category: "Dresses",
    price: 120,
    img: "https://images.unsplash.com/photo-1642035812453-3d237b31b464?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwcmVkJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Classic White Shirt",
    category: "Tops",
    price: 45,
    img: "https://images.unsplash.com/photo-1753192104240-209f3fb568ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB3aGl0ZSUyMGRyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Chic Black Blazer",
    category: "Jackets",
    price: 150,
    img: "https://images.unsplash.com/photo-1611484907270-d1e8d10e0f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwYmxhY2slMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Summer Floral Skirt",
    category: "Skirts",
    price: 70,
    img: "https://images.unsplash.com/photo-1665084937620-3de82a059a38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjAlMjBGbG9yYWwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Comfy Grey Sweater",
    category: "Tops",
    price: 80,
    img: "https://images.unsplash.com/photo-1608022770532-04fb98603b96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjAlMjBHcmV5JTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Luxury Blue Dress",
    category: "Dresses",
    price: 200,
    img: "https://images.unsplash.com/photo-1622079400125-5b6679552976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWFuJTIwJTIwQmx1ZSUyMGRyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Stylish Red Skirt",
    category: "Skirts",
    price: 95,
    img: "https://plus.unsplash.com/premium_photo-1674069718653-ce98c196ff6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHdvbWFuJTIwJTIwcmVkJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Beige Trench Coat",
    category: "Jackets",
    price: 250,
    img: "https://plus.unsplash.com/premium_photo-1690034979471-e04238947aca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvbWFuJTIwJTIwVHJlbmNoJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
];

const WomanClothsGrid = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      {/* ✅ Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Women’s Fashion Collection
        </h2>
        <p className="text-gray-600 mt-2">Premium picks for your wardrobe</p>
      </div>

      {/* ✅ Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* ✅ Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* ✅ Hover Details */}
            <div className="absolute bottom-0 left-0 w-full bg-white/70 text-gray-900 px-4 py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <p className="text-sm text-gray-700">{product.category}</p>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-amber-600 text-lg font-bold">
                  ${product.price}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2 rounded-full ${
                      wishlist.includes(product.id)
                        ? "bg-red-500"
                        : "bg-white text-gray-900"
                    } hover:bg-amber-600`}
                  >
                    <FiHeart />
                  </button>
                  <button
                    className="p-2 rounded-full bg-white text-gray-900 hover:bg-amber-600"
                  >
                    <FiEye />
                  </button>
                </div>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="w-full mt-3 py-2 bg-amber-600 text-gray-900 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-amber-700 transition-all"
              >
                <FiShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomanClothsGrid;
