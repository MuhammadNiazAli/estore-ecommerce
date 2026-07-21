'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  FiClipboard,
  FiRepeat,
  FiDollarSign,
  FiBriefcase,
  FiTrendingUp,
  FiMessageCircle,
  FiMapPin,
  FiPackage,
  FiClock,
  FiUsers,
  FiGlobe,
  FiTruck,
  FiSettings,
  FiPieChart,
  FiShield,
  FiServer,
  FiBarChart2,
  FiTool,
  FiHeart,
  FiShoppingCart,
} from 'react-icons/fi';

const navItems = [
  { Icon: FiClipboard, label: 'Order History',  },
  { Icon: FiRepeat, label: 'Easy Returns', },
  { Icon: FiDollarSign, label: 'Subscriptions',  },
  { Icon: FiBriefcase, label: 'Business Solutions',  },
  { Icon: FiTrendingUp, label: 'Affiliate Program', },
  { Icon: FiMessageCircle, label: 'Live Chat Support',  },
  { Icon: FiMapPin, label: 'Store Locator',  },
  { Icon: FiPackage, label: 'Track Package', },
  { Icon: FiClock, label: 'Delivery Scheduling', },
  { Icon: FiUsers, label: 'Partner Portal',  },
  { Icon: FiTruck, label: 'Logistics Service',  },
  { Icon: FiGlobe, label: 'Global Marketplace',  },
  { Icon: FiPieChart, label: 'Analytics Dashboard', },
  { Icon: FiSettings, label: 'Account Settings',  },
  { Icon: FiShield, label: 'Buyer Protection',  },
  { Icon: FiServer, label: 'API & Developer Tools', },
  { Icon: FiBarChart2, label: 'Sales Reports',},
  { Icon: FiTool, label: 'Admin Console',  },
  { Icon: FiHeart, label: 'Wishlist',},
  { Icon: FiShoppingCart, label: 'Shopping Cart',},
];

function Header4thLayer() {
  const navContainerRef = useRef(null);

  useEffect(() => {
    const icons = navContainerRef.current?.querySelectorAll('.magnet-icon');
    if (!icons) return;

    // Mouse move handler to create magnetic effect on icons
    const onMouseMove = (event) => {
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconCenterX = rect.left + rect.width / 2;
        const iconCenterY = rect.top + rect.height / 2;

        const deltaX = event.clientX - iconCenterX;
        const deltaY = event.clientY - iconCenterY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const influenceRadius = 120; // radius within which magnet effect applies
        const effectStrength = Math.max(0, influenceRadius - distance) / influenceRadius;

        const movementFactor = effectStrength * 10;

        gsap.to(icon, {
          x: deltaX * 0.05 * effectStrength,
          y: deltaY * 0.05 * effectStrength,
          scale: 1 + 0.05 * effectStrength,
          ease: 'power3.out',
          duration: 0.3,
        });
      });
    };

    // Reset all icons to their original state smoothly
    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, { x: 0, y: 0, scale: 1, ease: 'power2.out', duration: 0.4 })
      );
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', resetIcons);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', resetIcons);
    };
  }, []);

  return (
    <div className="hidden md:block border-t border-gray-200 bg-white select-none">
      <div
        className="max-w-screen-xl mx-auto px-6 py-3 flex flex-wrap justify-center gap-5"
        style={{ minHeight: 64 }}
      >
        <nav
          ref={navContainerRef}
          aria-label="Advanced ecommerce options"
          className="flex flex-wrap justify-center gap-5"
        >
          {navItems.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              title={label}
              tabIndex={0}
              className="magnet-icon group relative flex flex-col items-center text-gray-700 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded cursor-pointer"
              style={{ width: 48, minWidth: 48 }}
            >
              <Icon size={20} aria-hidden="true" />
              <span
                className="
                  absolute bottom-full mb-1 left-1/2 -translate-x-1/2
                  mt-1 select-none text-center text-[13px] font-medium
                  text-transparent group-hover:text-green-400
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-200 whitespace-nowrap pointer-events-none
                  drop-shadow-md
                "
              >
                {label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header4thLayer;
