import React from "react";
import { Star } from "lucide-react";

const relatedAccessories = [
  {
    id: 1,
    name: "Elegant Pearl Necklace",
    price: 129.99,
    oldPrice: 179.99,
    discount: "28% OFF",
    img: "https://images.unsplash.com/photo-1709100647807-5fab47d89078?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviewsCount: 89,
    description:
      "A stunning pearl necklace that adds sophistication and charm to any outfit.",
    bestSeller: true,
  },
  {
    id: 2,
    name: "Vintage Gold Ring",
    price: 89.99,
    oldPrice: 129.99,
    discount: "31% OFF",
    img: "https://images.unsplash.com/photo-1721103418939-5112f0ccfac8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviewsCount: 45,
    description: "Classic vintage ring with intricate gold detailing.",
    bestSeller: false,
  },
  {
    id: 3,
    name: "Leather Strap Watch",
    price: 199.99,
    oldPrice: 249.99,
    discount: "20% OFF",
    img: "https://images.unsplash.com/photo-1705307367492-fbaf340d8b72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewsCount: 112,
    description: "Sophisticated watch with genuine leather strap and sleek design.",
    bestSeller: true,
  },
  {
    id: 4,
    name: "Crystal Drop Earrings",
    price: 69.99,
    oldPrice: 99.99,
    discount: "30% OFF",
    img: "https://images.unsplash.com/photo-1671513577548-20ec8027d6e1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviewsCount: 38,
    description: "Sparkling crystal earrings perfect for evening occasions.",
    bestSeller: false,
  },
  {
    id: 5,
    name: "Gold Hoop Earrings",
    price: 79.99,
    oldPrice: 109.99,
    discount: "27% OFF",
    img: "https://images.unsplash.com/photo-1708389828544-b394501c5700?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    reviewsCount: 52,
    description: "Bold gold hoops that make a statement with every outfit.",
    bestSeller: true,
  },
  {
    id: 6,
    name: "Silver Charm Bracelet",
    price: 59.99,
    oldPrice: 89.99,
    discount: "33% OFF",
    img: "https://images.unsplash.com/photo-1668619322826-c98b77b9c125?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3,
    reviewsCount: 28,
    description: "Delicate silver bracelet with multiple charming pendants.",
    bestSeller: false,
  },
  {
    id: 7,
    name: "Men's Aviator Sunglasses",
    price: 149.99,
    oldPrice: 199.99,
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1656035378783-d474dad077bb?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviewsCount: 97,
    description: "Classic aviator sunglasses with UV protection and metal frame.",
    bestSeller: true,
  },
  {
    id: 8,
    name: "Silk Scarf",
    price: 39.99,
    oldPrice: 59.99,
    discount: "33% OFF",
    img: "https://images.unsplash.com/photo-1517472292914-9570a594783b?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    reviewsCount: 61,
    description: "Soft silk scarf with elegant patterns for all seasons.",
    bestSeller: false,
  },
  {
    id: 9,
    name: "Leather Wallet",
    price: 89.99,
    oldPrice: 129.99,
    discount: "31% OFF",
    img: "https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviewsCount: 75,
    description: "Premium genuine leather wallet with multiple card slots.",
    bestSeller: true,
  },
  {
    id: 10,
    name: "Rose Gold Pendant",
    price: 99.99,
    oldPrice: 139.99,
    discount: "29% OFF",
    img: "https://images.unsplash.com/photo-1680144990763-a9da4a29270c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviewsCount: 54,
    description: "Elegant rose gold pendant with a sparkling gemstone centerpiece.",
    bestSeller: false,
  },
  {
    id: 11,
    name: "Diamond Stud Earrings",
    price: 299.99,
    oldPrice: 399.99,
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1713004539634-a6694a83f3d9?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewsCount: 120,
    description: "Timeless diamond stud earrings that add luxury and sparkle.",
    bestSeller: true,
  },
  {
    id: 12,
    name: " ",
    price: 79.99,
    oldPrice: 109.99,
    discount: "27% OFF",
    img: "https://images.unsplash.com/photo-1671764673184-740ebf2cd637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    reviewsCount: 40,
    description: "Durable canvas backpack ideal for everyday use and travel.",
    bestSeller: false,
  },
  {
    id: 13,
    name: "Statement Cocktail Ring",
    price: 119.99,
    oldPrice: 169.99,
    discount: "29% OFF",
    img: "https://images.unsplash.com/photo-1689280148257-b3fa5a4d626c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviewsCount: 58,
    description: "Bold cocktail ring featuring a large colorful gemstone.",
    bestSeller: true,
  },
  {
    id: 14,
    name: "Wool Fedora Hat",
    price: 49.99,
    oldPrice: 69.99,
    discount: "29% OFF",
    img: "https://images.unsplash.com/photo-1737043832522-c63d6aab767a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3,
    reviewsCount: 30,
    description: "Classic wool fedora hat for a stylish touch in cooler weather.",
    bestSeller: false,
  },
  {
    id: 15,
    name: "Charm Anklet",
    price: 39.99,
    oldPrice: 59.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/2164108223/photo/island-of-%C3%AEle-de-r%C3%A9-in-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yl2b2BTSKHIbcqnvWwsNjKvK3Ym2s-Mhx7qC5x0gZvw=",
    rating: 4.2,
    reviewsCount: 25,
    description: "Delicate charm anklet perfect for summer and casual looks.",
    bestSeller: false,
  },
  {
    id: 16,
    name: "Vintage Pocket Watch",
    price: 179.99,
    oldPrice: 239.99,
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1613579153555-a83eadd8fdde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviewsCount: 68,
    description: "Classic vintage pocket watch with intricate mechanical design.",
    bestSeller: true,
  },
];


const AccessoriesRelated = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-10">
      <h3 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center md:text-left tracking-wide">
        Related Accessories Gallery
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedAccessories.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900 cursor-pointer focus:outline-yellow-400"
            tabIndex={0}
            aria-label={`View details for ${item.name}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />

            {/* Discount / Best Seller Badge */}
            <div className="absolute top-3 left-3 space-y-1 z-20">
              {item.bestSeller && (
                <span className="bg-yellow-500 text-gray-900 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide shadow-lg select-none">
                  Best Seller
                </span>
              )}
              <span className="bg-red-600 text-white font-semibold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide shadow-lg select-none">
                {item.discount}
              </span>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-3 text-yellow-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h4
                className="text-sm font-semibold mb-0.5 truncate"
                title={item.name}
              >
                {item.name}
              </h4>

              {/* Rating + Reviews */}
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < Math.round(item.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }
                      fill={i < Math.round(item.rating) ? "#facc15" : "none"}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-xs select-none">
                  ({item.reviewsCount} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs line-clamp-3 mb-2 leading-snug select-none">
                {item.description}
              </p>

              {/* Prices */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 font-bold text-sm">
                  ${item.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-600 text-xs">
                  ${item.oldPrice.toFixed(2)}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-md px-2 py-0.5 text-xs transition select-none whitespace-nowrap"
                  aria-label={`Quick view of ${item.name}`}
                >
                  Quick View
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-2 py-0.5 text-xs transition select-none whitespace-nowrap"
                  aria-label={`Add ${item.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessoriesRelated;
