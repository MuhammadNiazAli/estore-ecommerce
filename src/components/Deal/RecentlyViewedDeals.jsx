'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiHeart,
  FiEye,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

const allProducts = [
  {
    id: 1,
    title: 'Noise-Canceling Headphones',
    price: 89,
    oldPrice: 139,
    image:
      'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop',
    quantity: 1,
    description: 'Experience immersive sound with advanced noise-canceling technology.',
    details: [
      'Up to 20 hours battery life',
      'Comfortable over-ear design',
      'Built-in microphone for calls',
      'Bluetooth 5.0 wireless connection',
    ],
  },
  {
    id: 2,
    title: 'Smart Fitness Tracker',
    price: 59,
    oldPrice: 99,
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=859&auto=format&fit=crop',
    quantity: 1,
    description: 'Track your daily activity and health metrics with ease.',
    details: [
      'Heart rate & sleep monitoring',
      'Step counter and calorie tracker',
      'Water-resistant design',
      'Compatible with iOS and Android',
    ],
  },
  {
    id: 3,
    title: 'Compact Bluetooth Speaker',
    price: 45,
    oldPrice: 79,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop',
    quantity: 1,
    description: 'Portable speaker with clear sound and deep bass.',
    details: [
      'Wireless Bluetooth connectivity',
      '8 hours playtime on full charge',
      'Compact and lightweight design',
    ],
  },
  {
    id: 4,
    title: 'Wireless Charging Pad',
    price: 29,
    oldPrice: 59,
    image:
      'https://plus.unsplash.com/premium_photo-1671017712452-92d279cb3363?q=80&w=423&auto=format&fit=crop',
    quantity: 1,
    description: 'Conveniently charge your Qi-enabled devices wirelessly.',
    details: [
      'Fast charging support',
      'Non-slip surface',
      'LED charging indicator',
      'Compact and travel-friendly',
    ],
  },
  {
    id: 5,
    title: 'Smart LED Table Lamp',
    price: 39,
    oldPrice: 69,
    image:
      'https://plus.unsplash.com/premium_photo-1672166939591-b2547bd18fca?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Adjust brightness and colors to set the perfect mood.',
    details: [
      'Touch control panel',
      'Multiple color modes',
      'Energy efficient LED bulbs',
    
    ],
  },
  {
    id: 6,
    title: 'Gaming Mouse RGB',
    price: 25,
    oldPrice: 45,
    image:
      'https://images.unsplash.com/photo-1627745212312-e399f57157ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Enhance your gameplay with customizable RGB lighting.',
    details: [
      '6 programmable buttons',
      'Adjustable DPI settings',
      'Ergonomic design for long use',
      'Smooth optical sensor',
    ],
  },
  {
    id: 7,
    title: 'Ergonomic Office Chair',
    price: 149,
    oldPrice: 199,
    image:
      'https://images.unsplash.com/photo-1750306957077-b74e45fe1819?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Comfort and support for your workday with adjustable features.',
    details: [
      'Lumbar support and adjustable height',
      'Breathable mesh backrest',
      '360-degree swivel',
  
    ],
  },
  {
    id: 8,
    title: 'Portable Tripod Stand',
    price: 19,
    oldPrice: 29,
    image:
      'https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Stable and compact tripod for cameras and smartphones.',
    details: [
      'Adjustable height up to 50 inches',
      'Lightweight and foldable',
      'Universal phone holder included',
      'Non-slip rubber feet',
    ],
  },
  {
    id: 9,
    title: 'Laptop Cooling Pad',
    price: 34,
    oldPrice: 59,
    image:
      'https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Keep your laptop cool during intense work or gaming sessions.',
    details: [
      'Dual fan design',
      'Adjustable height settings',
      'USB powered',
      'Ergonomic angle for typing',
    ],
  },
  {
    id: 10,
    title: 'Adjustable Phone Stand',
    price: 14,
    oldPrice: 24,
    image:
      'https://images.unsplash.com/photo-1669255344177-dc55f537acc9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Convenient adjustable stand for smartphones and small tablets.',
    details: [
      'Multiple viewing angles',
      'Non-slip silicone pads',
      'Foldable and portable',
      'Durable aluminum alloy',
    ],
  },
  {
    id: 11,
    title: 'Wireless Security Camera',
    price: 99,
    oldPrice: 149,
    image:
      'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Keep your home safe with real-time video surveillance.',
    details: [
      '1080p HD video quality',
      'Motion detection alerts',
      'Night vision enabled',
      'WiFi connectivity',
    ],
  },
  {
    id: 12,
    title: 'Stylish Digital Alarm Clock',
    price: 22,
    oldPrice: 39,
    image:
      'https://images.unsplash.com/photo-1595001918824-83250c5f0599?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Modern alarm clock with sleek design and multiple features.',
    details: [
      'Large LED display',
      'Snooze function',
      'Battery backup',
      'Adjustable brightness',
    ],
  },
  {
    id: 13,
    title: 'Noise Reduction Microphone',
    price: 79,
    oldPrice: 119,
    image:
      'https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Clear voice capture with advanced noise reduction technology.',
    details: [
      'Cardioid polar pattern',
      'Plug and play USB connectivity',
      'Compatible with major OS',
      'Includes tripod stand',
    ],
  },
  {
    id: 14,
    title: 'High-Speed USB Hub',
    price: 18,
    oldPrice: 29,
    image:
      'https://images.unsplash.com/photo-1632017261554-7c6712cb0a09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Expand your connectivity with multiple USB ports.',
    details: [
      '4 USB 3.0 ports',
      'Supports data transfer speeds up to 5Gbps',
      'Compact design',
  
    ],
  },
  {
    id: 15,
    title: 'Wireless Presentation Remote',
    price: 35,
    oldPrice: 59,
    image:
      'https://images.unsplash.com/photo-1595756630832-848909a39597?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Control your presentations wirelessly with ease.',
    details: [
      'Range up to 30 meters',
      'Laser pointer included',
      'Plug and play USB receiver',

    ],
  },
  {
    id: 16,
    title: 'Creative Desk Organizer',
    price: 27,
    oldPrice: 39,
    image:
      'https://images.unsplash.com/photo-1455994972514-4624f7f224a7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Keep your desk tidy with this stylish organizer.',
    details: [
      'Multiple compartments for stationery',
      'Durable wooden construction',
      'Compact footprint',
      'Modern design fits any workspace',
    ],
  },
  {
    id: 17,
    title: 'Magnetic Cable Holder',
    price: 9,
    oldPrice: 15,
    image:
      'https://images.unsplash.com/photo-1635179885954-c778885a1197?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Organize your cables neatly with magnetic holders.',
    details: [
      'Strong magnetic grip',
      'Easy to install',
      'Protects cables from damage',
      'Fits multiple cable sizes',
    ],
  },
  {
    id: 18,
    title: 'Compact Power Bank 10000mAh',
    price: 32,
    oldPrice: 49,
    image:
      'https://images.unsplash.com/photo-1554941071-34ae1db151e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFVTQiUyMEMlMjBNdWx0aXBvcnQlMjBBZGFwdGVyfGVufDB8fDB8fHww',
    quantity: 1,
    description: 'Stay powered on the go with this high-capacity power bank.',
    details: [
      '10000mAh capacity',
      'Dual USB output ports',
      'Compact and lightweight',
      'LED battery indicator',
    ],
  },
  {
    id: 19,
    title: 'Smart Thermostat Controller',
    price: 119,
    oldPrice: 179,
    image:
      'https://images.unsplash.com/photo-1685660477695-73713eaf512a?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 1,
    description: 'Control your home temperature remotely with smart features.',
    details: [
      'WiFi enabled',
      'Energy-saving schedules',
      'Easy installation',
 
    ],
  },
  {
    id: 20,
    title: 'USB-C Multiport Adapter',
    price: 44,
    oldPrice: 69,
    image:
      'https://images.unsplash.com/photo-1668435074918-3dc9e1694b84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFVTQiUyMEMlMjBNdWx0aXBvcnQlMjBBZGFwdGVyfGVufDB8fDB8fHww',
    quantity: 1,
    description: 'Expand your laptop connectivity with multiple ports.',
    details: [
      'Supports HDMI, USB 3.0, SD cards',
      'Compact design',
      'Plug and play',
      'Compatible with most USB-C devices',
    ],
  },
  {
    id: 21,
    title: 'Noise-Canceling Headphones',
    price: 70,
    oldPrice: 140,
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=580&q=80',
    quantity: 1,
    description: 'Premium headphones delivering crystal-clear sound and silence.',
    details: [
      'Advanced noise cancellation',
      'Long-lasting battery life',
      'Comfort-fit ear cushions',
      'Wireless Bluetooth technology',
    ],
  },
  {
    id: 26,
    title: 'Gaming Mouse RGB',
    price: 25,
    oldPrice: 50,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=387&q=80',
    quantity: 1,
    description: 'Precision gaming mouse with vibrant RGB lighting.',
    details: [
      'High precision sensor',
      'Multiple lighting modes',
      'Ergonomic grip',
      'Programmable buttons',
    ],
  },
  {
    id: 28,
    title: 'Portable Tripod Stand',
    price: 15,
    oldPrice: 30,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=327&q=80',
    quantity: 1,
    description: 'Lightweight tripod perfect for travel photography.',
    details: [
      'Adjustable height',
      'Compact foldable design',
      'Universal phone mount',
      'Sturdy and durable',
    ],
  },
  {
    id: 32,
    title: 'Stylish Digital Alarm Clock',
    price: 20,
    oldPrice: 40,
    image:
      'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=870&q=80',
    quantity: 1,
    description: 'Modern alarm clock with clear digital display.',
    details: [
      'Adjustable brightness',
      'Snooze function',
      'Battery backup',
      'Compact design',
    ],
  },
  {
    id: 33,
    title: 'Noise Reduction Microphone',
    price: 60,
    oldPrice: 120,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=870&q=80',
    quantity: 1,
    description: 'High-quality microphone minimizing background noise.',
    details: [
      'USB plug-and-play',
      'Includes stand and pop filter',
      'Compatible with PC and Mac',
      'Clear audio capture',
    ],
  },
  {
    id: 34,
    title: 'High-Speed USB Hub',
    price: 15,
    oldPrice: 30,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=870&q=80',
    quantity: 1,
    description: 'Expand your USB connectivity with fast data transfer.',
    details: [
      '4 USB 3.0 ports',
      'Compact and portable',
      'Plug and play',
      'Compatible with Windows and Mac',
    ],
  },
  {
    id: 35,
    title: 'Wireless Presentation Remote',
    price: 30,
    oldPrice: 60,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=870&q=80',
    quantity: 1,
    description: 'Easily control slideshows from a distance.',
    details: [
      'Laser pointer feature',
      'USB receiver included',
      'Works with most presentation software',
      'Up to 30 meters range',
    ],
  },
  {
    id: 36,
    title: 'Creative Desk Organizer',
    price: 20,
    oldPrice: 40,
    image:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=774&q=80',
    quantity: 1,
    description: 'Stylish and practical organizer for your workspace.',
    details: [
      'Multiple compartments',
      'Durable wooden material',
      'Compact size',
      'Modern design',
    ],
  },
  {
    id: 37,
    title: 'Magnetic Cable Holder',
    price: 7.5,
    oldPrice: 15,
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=464&q=80',
    quantity: 1,
    description: 'Keep your cables neat and tangle-free with magnets.',
    details: [
      'Strong magnetic hold',
      'Easy to attach anywhere',
      'Protects cable integrity',
      'Suitable for various cable sizes',
    ],
  },
  {
    id: 38,
    title: 'Compact Power Bank 10000mAh',
    price: 25,
    oldPrice: 50,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    quantity: 1,
    description: 'Reliable backup power on the go with high capacity.',
    details: [
      '10000mAh capacity',
      'Dual USB ports',
      'Portable design',
      'LED charge indicator',
    ],
  },
];

const RecentlyViewedDeals = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const updateSizes = () => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.offsetWidth;
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const visibleCards = mobile ? 1 : 3;
    const gapTotal = 24 * (visibleCards - 1);
    const width = (containerWidth - gapTotal) / visibleCards;
    setCardWidth(width);
  };

  useEffect(() => {
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    handleScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -(cardWidth + 24) : cardWidth + 24;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white text-gray-900 py-10 px-4 select-none">
      <div className="max-w-[1000px] mx-auto relative">
        <h2 className="text-2xl font-semibold mb-6">Recently Viewed Products</h2>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
          role="region"
          aria-label="Recently viewed products carousel"
        >
          {allProducts.map(({ id, title, price, oldPrice, image, description, details }) => {
            const discount =
              oldPrice && price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
            return (
              <article
                key={id}
                className="bg-white rounded-xl shadow-lg flex-shrink-0 snap-start cursor-pointer flex flex-col group transition-transform duration-300"
                style={{ width: cardWidth ? `${cardWidth}px` : '260px' }}
              >
                <div className="relative h-44 rounded-t-xl overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />
                  {discount > 0 && (
                    <span className="absolute top-3 left-[-100px] group-hover:left-3 transition-all duration-300 bg-amber-600 text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                      -{discount}%
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold line-clamp-2 mb-1">{title}</h3>
                  <p className="text-xs text-gray-700 mb-2 line-clamp-2">{description}</p>

                  <ul className="text-xs text-gray-600 mb-3 max-h-20 overflow-y-auto list-disc list-inside space-y-1">
                    {details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg font-bold text-amber-600">${price}</span>
                    {oldPrice && (
                      <span className="text-sm line-through text-gray-600">${oldPrice}</span>
                    )}
                  </div>

                  <div className="flex justify-end gap-4 mt-auto">
                    <Link
                      href={`/wishlist/`}
                      aria-label={`Add ${title} to wishlist`}
                      className="icon-wrapper"
                    >
                      <FiHeart className="icon-inner" size={20} />
                    </Link>
                    <Link
                      href={`/product/`}
                      aria-label={`View ${title}`}
                      className="icon-wrapper"
                    >
                      <FiEye className="icon-inner" size={20} />
                    </Link>
                    <Link
                      href={`/cart/add/`}
                      aria-label={`Add ${title} to cart`}
                      className="icon-wrapper"
                    >
                      <FiShoppingCart className="icon-inner" size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 z-50 ${
              isMobile ? 'w-12 h-12' : 'w-14 h-14'
            } shadow-lg`}
          >
            <FiChevronLeft size={isMobile ? 24 : 28} color="white" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 z-50 ${
              isMobile ? 'w-12 h-12' : 'w-14 h-14'
            } shadow-lg`}
          >
            <FiChevronRight size={isMobile ? 24 : 28} color="white" />
          </button>
        )}
      </div>

      {/* Extra Styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .icon-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          color: #b45309;
          background-color: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .icon-wrapper:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.15);
          backdrop-filter: blur(4px);
        }
        .icon-inner {
          transition: transform 0.3s ease;
        }
        .icon-wrapper:hover .icon-inner {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default RecentlyViewedDeals;
