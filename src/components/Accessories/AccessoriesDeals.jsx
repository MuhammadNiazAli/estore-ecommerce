import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const accessories = [
  {
    id: 1,
    name: "Luxury Gold Chain",
    price: 149.99,
    oldPrice: 199.99,
    discount: "25% OFF",
    img: "https://media.istockphoto.com/id/516134632/photo/golden-chain-with-diamond-dollar-symbol.webp?a=1&b=1&s=612x612&w=0&k=20&c=9udxbL2HsP8ZBKFlofRDvQfYtBTlSV9E_KDC_VI3PZs=",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: 299.99,
    oldPrice: 399.99,
    discount: "30% OFF",
    img: "https://media.istockphoto.com/id/178111311/photo/earrings-stud-with-diamonds-in-a-gold-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=cIjiTBDixeUU9sLc_eRYRbS7rX9TTJ0xiYHgpn4IagM=",
    rating: 5,
  },
  {
    id: 3,
    name: "Leather Bracelet",
    price: 49.99,
    oldPrice: 79.99,
    discount: "40% OFF",
    img: "https://media.istockphoto.com/id/614860630/photo/product-shot-of-a-colorful-men-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uqvem3f4_CdFy3UnCz-AflG5clsBHOltTsQWwX9iDkY=",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Gold-Plated Watch",
    price: 199.99,
    oldPrice: 279.99,
    discount: "28% OFF",
    img: "https://media.istockphoto.com/id/157618978/photo/golden-pocket-watch-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=lQc2cgw068j_d6EHgPgEiP0kVZKm2bnTSaqgRN0ctVI=",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Luxury Sunglasses",
    price: 129.99,
    oldPrice: 189.99,
    discount: "32% OFF",
    img: "https://media.istockphoto.com/id/1389652549/photo/fashionable-sunglasses-isolated-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=zgyU2-OvJyVHt7NCtdFqB6W1p_biDqij4Uw0kza0uz8=",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Gold Ring",
    price: 99.99,
    oldPrice: 149.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/175218669/photo/wedding-ring.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vd29ta5ZO7ZqpM3swEKvRdSzU8hKUz5UjJ5ZAwupRx8=",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Chain Bracelet",
    price: 59.99,
    oldPrice: 89.99,
    discount: "35% OFF",
    img: "https://media.istockphoto.com/id/1282534652/photo/womens-wrist-bracelet-of-golden-chain-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=bLgNZDFNiguCnLK80ymS6nuoyc59gOoDjROdIfRDS7M=",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Gold Anklet",
    price: 69.99,
    oldPrice: 109.99,
    discount: "36% OFF",
    img: "https://media.istockphoto.com/id/147702781/photo/my-heart.webp?a=1&b=1&s=612x612&w=0&k=20&c=b2WazljnzE96zbND5Gv4f48IPly3soTEzqY9Prrlwgg=",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Premium Brooch",
    price: 79.99,
    oldPrice: 129.99,
    discount: "38% OFF",
    img: "https://media.istockphoto.com/id/807301784/photo/blank-white-round-gold-lapel-badge-mock-up-front-back.webp?a=1&b=1&s=612x612&w=0&k=20&c=dIuuXxE_C_euUwqWD2HquBmI7DTDbtbbuitXKYNjyUs=",
    rating: 4.2,
  },
  {
    id: 10,
    name: "Luxury Cufflinks",
    price: 89.99,
    oldPrice: 139.99,
    discount: "36% OFF",
    img: "https://media.istockphoto.com/id/471073203/photo/diamond-cufflinks.webp?a=1&b=1&s=612x612&w=0&k=20&c=JXASOIeoBNmNJQlr_G1z7yra5plH9B0aSvxZ9DiaLbQ=",
    rating: 4.8,
  },
  {
    id: 11,
    name: "Pearl Drop Earrings",
    price: 129.99,
    oldPrice: 199.99,
    discount: "35% OFF",
    img: "https://media.istockphoto.com/id/2219324185/photo/elegant-silver-and-pearl-drop-earrings-on-pink-ceramic-plate-with-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=57hossvZpFsdJGSEhS07kUg9jHWA8kqq4BtaDihevKM=",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Minimalist Silver Necklace",
    price: 59.99,
    oldPrice: 89.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq2ITRsgp_7pTDuxeqDKHdSKov6KC-1nWF8vVr0lQKU=",
    rating: 4.4,
  },
  {
    id: 13,
    name: "Crystal Pendant",
    price: 79.99,
    oldPrice: 119.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq2ITRsgp_7pTDuxeqDKHdSKov6KC-1nWF8vVr0lQKU=",
    rating: 4.6,
  },
  {
    id: 14,
    name: "Luxury Tie Clip",
    price: 39.99,
    oldPrice: 69.99,
    discount: "42% OFF",
    img: "https://media.istockphoto.com/id/2194936779/photo/mens-accessories-wallet-belt-cufflinks-watch-tie-clip-handkerchief-on-a-white-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=eRT7CvaNhZhA-X81T8_pxVKOgxBM5m7mn8hC0PybLrw=",
    rating: 4.3,
  },
  {
    id: 15,
    name: "Gold Hoop Earrings",
    price: 99.99,
    oldPrice: 149.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/1248568033/photo/hoop-earrings-is-all-a-girl-needs.webp?a=1&b=1&s=612x612&w=0&k=20&c=S0RAyJVSYneYPE0bNeY3HZkcahVFbrO1OD2G9WfvPdM=",
    rating: 4.7,
  },
  {
    id: 16,
    name: "Beaded Bracelet",
    price: 29.99,
    oldPrice: 49.99,
    discount: "40% OFF",
    img: "https://media.istockphoto.com/id/175476041/photo/beaded-colorful-gem-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=j64d1t1pKGgUmNXfzEyjCJvo_YZA4y84TDxaSPmB03U=",
    rating: 4.1,
  },
  {
    id: 17,
    name: "Choker Necklace",
    price: 69.99,
    oldPrice: 99.99,
    discount: "30% OFF",
    img: "https://images.unsplash.com/photo-1714734071000-5546c90735cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hva2VyJTIwTmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Gemstone Ring",
    price: 149.99,
    oldPrice: 219.99,
    discount: "32% OFF",
    img: "https://media.istockphoto.com/id/2161354881/photo/beautiful-yellow-gold-ring-with-diamonds-and-emerald-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HMuVgcGVx9m5x1oOFPrcdLrLy1ygzGYF-F-eiRDnIYM=",
    rating: 4.8,
  },
  {
    id: 19,
    name: "Silver Charm Bracelet",
    price: 79.99,
    oldPrice: 119.99,
    discount: "33% OFF",
    img: "https://media.istockphoto.com/id/157774774/photo/sterling-silver-charm-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dj5LWkQ9w0uLX6xUHvGXwmRs-nTXQzdyQSKRS-bD0ok=",
    rating: 4.4,
  },
  {
    id: 20,
    name: "Luxury Hair Clip",
    price: 19.99,
    oldPrice: 39.99,
    discount: "50% OFF",
    img: "https://media.istockphoto.com/id/2206944039/photo/wellness-and-self-care-products-arranged-on-a-marble-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=86wUKpIeeyvhTT8VLahr-SZFkkQmQhl42tiu0XCRdYA=",
    rating: 4.2,
  },
];


const AccessoriesDeals = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 24 * 60 * 60); // 15 days in seconds
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="bg-white text-amber-600 max-w-[1000px] mx-auto rounded-xl p-4 sm:p-6 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-3 sm:mb-4 text-center sm:text-left">
        Exclusive Accessories Deals
      </h2>
      <p className="text-gray-700 mb-5 text-center sm:text-left text-sm sm:text-base leading-relaxed">
        Upgrade your style with our premium collection. Limited time offers!
      </p>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
        <span className="font-semibold text-center sm:text-left text-sm sm:text-base">
          Deal ends in:
        </span>
        <span
          className="text-red-400 font-bold text-lg sm:text-xl text-center sm:text-right tabular-nums"
          aria-live="polite"
          aria-atomic="true"
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {accessories.slice(0, visibleCount).map((item) => (
          <article
            key={item.id}
            className="bg-white p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
            aria-label={`${item.name}, price $${item.price}, rating ${item.rating} stars`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 object-cover rounded-md mb-2"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <h3 className="font-semibold text-amber-500 text-xs sm:text-sm md:text-base truncate">
              {item.name}
            </h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm mt-1">
              <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
              <span className="line-through text-gray-500">${item.oldPrice.toFixed(2)}</span>
            </div>
            <span className="text-green-400 text-xs sm:text-sm">{item.discount}</span>
            <div className="flex items-center mt-1" aria-label={`Rating: ${item.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.round(item.rating)
                      ? "text-amber-600"
                      : "text-gray-600"
                  }
                  fill={i < Math.round(item.rating) ? "#b45309" : "none"}
                  aria-hidden="true"
                />
              ))}
            </div>
            <button
              className="w-full mt-auto mt-3 bg-amber-600 text-gray-900 py-2 rounded hover:bg-amber-500 font-semibold text-xs sm:text-sm transition"
              aria-label={`Add ${item.name} to cart`}
              type="button"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < accessories.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-amber-600 text-gray-900 px-6 sm:px-8 py-3 rounded font-semibold hover:bg-amber-500 transition text-sm sm:text-base"
            type="button"
            aria-label="Load more accessories deals"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessoriesDeals;
