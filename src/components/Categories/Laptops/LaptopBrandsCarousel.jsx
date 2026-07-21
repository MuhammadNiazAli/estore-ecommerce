'use client';
import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

 const brands = [
  { id: 1, name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { id: 2, name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
  { id: 3, name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/HP_logo_2008.svg' },
  { id: 4, name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lenovo_logo_%28English%29.svg/2560px-Lenovo_logo_%28English%29.svg.png' },
  { id: 5, name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png' },
  { id: 6, name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg' },
  { id: 7, name: 'MSI', logo: 'https://1000logos.net/wp-content/uploads/2018/10/MSI-Logo.png' },
  { id: 8, name: 'Razer', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png' },
  { id: 9, name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { id: 10, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { id: 11, name: 'Alienware', logo: 'https://www.pngarts.com/files/12/Alienware-Logo-PNG-High-Quality-Image.png' },
  { id: 12, name: 'Vaio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Vaio.svg/1280px-Vaio.svg.png' },
  { id: 13, name: 'Toshiba', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/1024px-Toshiba_logo.svg.png' },
  { id: 14, name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg' },
  { id: 15, name: 'Fujitsu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/1200px-Fujitsu-Logo.svg.png' },
  { id: 16, name: 'Huawei', logo: 'https://1000logos.net/wp-content/uploads/2018/08/Huawei-Logo.png' },
  { id: 17, name: 'Honor', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/LOGO_Honor.svg' },
  { id: 18, name: 'LG', logo: 'https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png' },
  { id: 19, name: 'Sony', logo: 'https://wallpapers.com/images/featured/sony-logo-png-z15acmyawti9lbs9.jpg' },
  { id: 20, name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Panasonic_logo.svg/1200px-Panasonic_logo.svg.png' },
  { id: 21, name: 'Dynabook', logo: 'https://vectorseek.com/wp-content/uploads/2023/08/DynaBook-Old-Logo-Vector.svg-.png' },
  { id: 22, name: 'Chuwi', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Chuwi_logo_2019.png' },
  { id: 23, name: 'Gigabyte', logo: 'https://images.seeklogo.com/logo-png/26/2/gigabyte-logo-png_seeklogo-264946.png' },
  { id: 24, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 25, name: 'Framework', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Framework_Computer_logo.svg/1280px-Framework_Computer_logo.svg.png' },
  { id: 26, name: 'Purism', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Purism_logo.svg/1280px-Purism_logo.svg.png' },
  { id: 27, name: 'System76', logo: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/250x100/system76-logo-open-source-tagliner4_1730474034__00841.original.png' },
  { id: 28, name: 'Clevo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Clevo_logo.svg/2560px-Clevo_logo.svg.png' },
  { id: 29, name: 'Eurocom', logo: 'https://www.eurocompn.com/wp-content/uploads/2022/05/Logo-800x450-Eurocom_trasparente.png' },
  { id: 30, name: 'Origin PC', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Origin.svg' },
  { id: 31, name: 'CyberPowerPC', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/CyberPowerPC.png' },
];

const LaptopBrandsCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative max-w-[1000px] mx-auto px-4 py-10 my-[-80px] mb-1">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Top Laptop Brands</h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-gray-50 text-gray-900 p-2 rounded-full shadow-md transition my-8"
        aria-label="Scroll Left"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-gray-50 text-gray-900 p-2 rounded-full shadow-md transition my-8"
        aria-label="Scroll Right"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Logos Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto hide-scrollbar scroll-smooth px-8"
      >
        {brands.map(({ id, name, logo }) => (
          <div
            key={id}
            className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white/70 hover:bg-amber-700/80 backdrop-blur-md transition rounded-xl cursor-pointer shadow-md"
            title={name}
          >
            <img
              src={logo}
              alt={name}
              className="max-h-16 max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Hide Scrollbar Utility */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LaptopBrandsCarousel;
