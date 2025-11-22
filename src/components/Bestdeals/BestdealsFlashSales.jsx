'use client';
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

// Example products
const flashProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 89.99,
    oldPrice: 129.99,
    discount: '30% OFF',
    image:
      'https://images.unsplash.com/photo-1531860898813-8cecde84646c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Smart Watch Series 6',
    price: 249.99,
    oldPrice: 349.99,
    discount: '28% OFF',
    image:
      'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 169.99,
    oldPrice: 219.99,
    discount: '22% OFF',
    image:
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Running Sneakers',
    price: 79.99,
    oldPrice: 120.0,
    discount: '33% OFF',
    image:
      'https://images.unsplash.com/photo-1600185365778-7875a359b924?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 59.99,
    oldPrice: 89.99,
    discount: '33% OFF',
    image:
      'https://images.unsplash.com/photo-1621266034770-74d35534f9ae?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Sunglasses Classic',
    price: 39.99,
    oldPrice: 59.99,
    discount: '33% OFF',
    image:
      'https://images.unsplash.com/photo-1656035378783-d474dad077bb?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Fitness Tracker Band',
    price: 49.99,
    oldPrice: 79.99,
    discount: '38% OFF',
    image:
      'https://media.istockphoto.com/id/2172235117/photo/two-elderly-women-doing-bicep-exercises-with-resistance-bands-during-fitness-class-in-the-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=_uF2aBawFvJs3WdMGLm0hfpPybVonWPcw5vQ6VKVEwk=',
  },
  {
    id: 8,
    name: 'Designer Handbag',
    price: 199.99,
    oldPrice: 249.99,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: '4K Ultra HD TV',
    price: 799.99,
    oldPrice: 999.99,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Wireless Mouse',
    price: 25.99,
    oldPrice: 39.99,
    discount: '35% OFF',
    image:
      'https://images.unsplash.com/photo-1624435299582-fcfcdb329325?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    name: 'Portable Power Bank',
    price: 45.99,
    oldPrice: 59.99,
    discount: '23% OFF',
    image:
      'https://images.unsplash.com/photo-1580846841980-225e3e2832ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    name: 'Leather Wallet',
    price: 34.99,
    oldPrice: 49.99,
    discount: '30% OFF',
    image:
      'https://images.unsplash.com/photo-1620109433753-a62f2c961b69?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    name: 'Noise Cancelling Earbuds',
    price: 129.99,
    oldPrice: 179.99,
    discount: '28% OFF',
    image:
      'https://images.unsplash.com/photo-1733641839407-b703ece14e5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    name: 'Modern Desk Lamp',
    price: 79.99,
    oldPrice: 99.99,
    discount: '20% OFF',
    image:
      'https://media.istockphoto.com/id/947334652/photo/desk-lamp-on-white-background-photo-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZFqy6ZMVxyFa5HSSqcq3ZBubEci4Xvk9sijncDm224k=',
  },
  {
    id: 15,
    name: 'Gaming Keyboard',
    price: 89.99,
    oldPrice: 119.99,
    discount: '25% OFF',
    image:
      'https://media.istockphoto.com/id/1396231106/photo/gaming-keyboard-with-backlight.webp?a=1&b=1&s=612x612&w=0&k=20&c=gZ7lNiJPj6kXPclzFNOKG82LmejcizOj3DC8D-jB9HQ=',
  },
  {
    id: 16,
    name: 'Stainless Steel Watch',
    price: 159.99,
    oldPrice: 199.99,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1647113415761-527b96ec77d1?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    name: 'Wireless Charger Pad',
    price: 29.99,
    oldPrice: 44.99,
    discount: '33% OFF',
    image:
      'https://images.unsplash.com/photo-1633381638729-27f730955c23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    name: 'Classic Denim Jeans',
    price: 59.99,
    oldPrice: 79.99,
    discount: '25% OFF',
    image:
      'https://images.unsplash.com/photo-1666899462970-40dfe2ef3a70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    name: 'Smart Home Speaker',
    price: 99.99,
    oldPrice: 149.99,
    discount: '33% OFF',
    image:
      'https://images.unsplash.com/photo-1548617335-c1b176388c65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    name: 'Cotton T-Shirt Pack',
    price: 24.99,
    oldPrice: 39.99,
    discount: '38% OFF',
    image:
      'https://images.unsplash.com/photo-1649390329051-dd09cd47fb1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


// Countdown Logic
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ h: '00', m: '00', s: '00' });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ h: '00', m: '00', s: '00' });
        return;
      }

      const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

      setTimeLeft({ h, m, s });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const BestdealsFlashSales = () => {
  const countdownTarget = new Date(Date.now() + 6 * 60 * 60 * 1000); // 6 hours from now
  const { h, m, s } = useCountdown(countdownTarget);

  return (
    <section className="bg-gray-900 text-white w-full py-10 px-4 sm:px-6 flex justify-center">
      <div className="max-w-[1000px] w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold select-none"> Flash Sales</h2>
          <div className="flex items-center gap-3 select-none text-gray-300 whitespace-nowrap">
            <span className="font-medium">Ends In:</span>
            <div className="flex gap-2 text-yellow-400 font-mono font-bold text-lg sm:text-xl">
              <span className="bg-gray-800 rounded px-3 py-1 shadow-inner">{h}</span>
              <span>:</span>
              <span className="bg-gray-800 rounded px-3 py-1 shadow-inner">{m}</span>
              <span>:</span>
              <span className="bg-gray-800 rounded px-3 py-1 shadow-inner">{s}</span>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-900"
          tabIndex={0} // for keyboard scrolling focus
          aria-label="Flash sale products carousel"
          role="region"
        >
          <div className="flex gap-6">
            {flashProducts.map((product) => (
              <article
                key={product.id}
                className="min-w-[220px] sm:min-w-[260px] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex-shrink-0"
                tabIndex={0}
                aria-labelledby={`product-title-${product.id}`}
                role="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 font-semibold px-2 py-1 text-xs rounded select-none">
                    {product.discount}
                  </span>
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-gray-950/80 bg-opacity-30 transition-opacity duration-300">
                    <button
                      aria-label={`Add ${product.name} to cart`}
                      className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      tabIndex={0}
                    >
                      <ShoppingCart className="w-5 h-5 text-gray-900" />
                    </button>
                    <button
                      aria-label={`View details of ${product.name}`}
                      className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      tabIndex={0}
                    >
                      <Eye className="w-5 h-5 text-gray-900" />
                    </button>
                    <button
                      aria-label={`Add ${product.name} to wishlist`}
                      className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      tabIndex={0}
                    >
                      <Heart className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>
                {/* Details */}
                <div className="p-4 text-center">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-base sm:text-lg font-semibold mb-1 truncate"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <div className="flex justify-center gap-3 text-sm sm:text-base items-center">
                    <span className="text-yellow-400 font-bold">${product.price.toFixed(2)}</span>
                    <span className="line-through text-gray-500">${product.oldPrice.toFixed(2)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        /* For WebKit browsers */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1a1a1a; /* gray-900 */
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #fbbf24; /* Tailwind yellow-400 */
          border-radius: 9999px;
        }
        /* For Firefox */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #fbbf24 #1a1a1a;
        }
      `}</style>
    </section>
  );
};

export default BestdealsFlashSales;
