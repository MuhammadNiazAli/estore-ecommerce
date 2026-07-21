'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiChevronRight, FiShoppingBag, FiStar, FiUser, FiTag, FiBox,
  FiTruck, FiPhone, FiMail, FiHelpCircle, FiCreditCard, FiUsers,
  FiLayers, FiBriefcase, FiActivity, FiClipboard, FiSettings
} from 'react-icons/fi';

import FooterDownload from './FooterDownload';
import FooterSocial from './FooterSocial';
import FooterPayments from './FooterPayments';
import FooterLatter from './FooterLatter';

const slugify = (text) =>
  text.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const bounceHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 20,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const shopItems = [
  { label: 'New Arrivals', icon: FiShoppingBag, pageLink: '/newarrivals' },
  { label: 'Bestsellers', icon: FiStar, pageLink: '/bestsellers' },
  { label: "Women's Clothing", icon: FiUser, pageLink: '/whomancloths' },
  { label: "Men's Clothing", icon: FiUser, pageLink: '/mancloths' },
  { label: 'Accessories', icon: FiTag, pageLink: '/accessories' },
  { label: 'Sale', icon: FiBox, pageLink: '/sale' },
  { label: 'Gift Cards', icon: FiCreditCard, pageLink: '/gifts' },
  { label: 'New Season', icon: FiLayers, pageLink: '/newseason' },
  { label: 'Best Deals', icon: FiActivity, pageLink: '/bestdeals' },
  { label: 'Clearance', icon: FiClipboard, pageLink: '/clearance' },
];

const supportItems = [
  { label: 'Help Center', icon: FiHelpCircle, pageLink: '/helpcenter' },
  { label: 'Order Status', icon: FiClipboard, pageLink: '/orders' },
  { label: 'Shipping Info', icon: FiTruck, pageLink: '/shipping' },
  { label: 'Returns & Exchanges', icon: FiBox, pageLink: '/returnchange' },
  { label: 'Size Guide', icon: FiSettings, pageLink: '/sizeguide' },
  { label: 'Contact Us', icon: FiPhone, pageLink: '/support' },
  { label: 'Payment Options', icon: FiCreditCard, pageLink: '/payments' },
  { label: 'Product Recalls', icon: FiActivity, pageLink: '/productcall' },
  { label: 'Accessibility', icon: FiUsers, pageLink: '/accessibility' },
  { label: 'FAQs', icon: FiHelpCircle, pageLink: '/faqs' },
];

const companyItems = [
  { label: 'About Us', icon: FiUsers, pageLink: '/about' },
  { label: 'Careers', icon: FiBriefcase, pageLink: '/careers' },
  { label: 'Press', icon: FiClipboard, pageLink: '/press' },
  { label: 'Affiliates', icon: FiUsers, pageLink: '/affiliates' },
  { label: 'Responsibility', icon: FiActivity, pageLink: '/responsibility' },
  { label: 'Investors', icon: FiCreditCard, pageLink: '/investors' },
  { label: 'Terms of Service', icon: FiSettings, pageLink: '/terms' },
  { label: 'Privacy Policy', icon: FiSettings, pageLink: '/privacy' },
  { label: 'Sustainability', icon: FiLayers, pageLink: '/sustainability' },
  { label: 'Blog', icon: FiTag, pageLink: '/blog' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-20 px-6 sm:px-10 select-none">
      <div className="mx-auto max-w-[1050px]">

        
        <motion.section
          variants={fadeIn}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-black">e</span>Store
            </h2>

       <p className="text-gray-600 max-w-xl mx-auto text-[15px] leading-relaxed">
      Discover the perfect blend of modern fashion and timeless style — all in one place.
     </p>

     <address className="not-italic text-gray-600 text-[14px] mt-4 space-y-1">
       <p>123 Fashion Avenue, New York, NY 10001</p>
       <p>
       Phone: <a href="tel:+15551234567" className="hover:text-gray-900">+1 (555)   123‑4567</a>
      </p>
       <p>
       Email: <a href="mailto:hello@example.com"          className="hover:text-gray-900">hello@example.com</a>
      </p>
       </address>

        </motion.section>

        <div className="hidden md:flex justify-between gap-10 mb-16">
          {[
            { title: 'Shop', items: shopItems, slugify },
            { title: 'Support', items: supportItems },
            { title: 'Company', items: companyItems },
          ].map(({ title, items, slugify }, idx) => (
            <motion.nav
              key={title}
              variants={fadeIn}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 w-1/3"
            >
              <h3 className="text-xl font-semibold ml-15 text-gray-900">{title}</h3>
              <ul className="space-y-2 text-[10px] ml-15">
                {items.map(({ label, icon: Icon, isCategory, pageLink, dropdown }, i) => {
                  const href = pageLink || (isCategory && slugify ? `/category/${slugify(label)}` : '#');
                  return (
                    <motion.li key={i} {...bounceHover}>
                      <a
                        href={href}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-gray-900 transition-all duration-300"
                      >
                        <Icon size={14} />
                        <span>{label}</span>
                        {dropdown && <FiChevronRight size={14} className="ml-auto" />}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          ))}
        </div>

     
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
          {[{
            title: 'Shop',
            items: shopItems,
            slugify
          }, {
            title: 'Support',
            items: supportItems
          }, {
            title: 'Company',
            items: companyItems
          }].map(({ title, items, slugify }, idx) => (
            <motion.nav
              key={title}
              variants={fadeIn}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <ul className="space-y-2 text-[14px]">
                {items.map(({ label, icon: Icon, isCategory, pageLink, dropdown }, i) => {
                  const href = pageLink || (isCategory && slugify ? `/category/${slugify(label)}` : '#');
                  return (
                    <motion.li key={i} {...bounceHover}>
                      <a
                        href={href}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-gray-900 transition-all duration-300"
                      >
                        <Icon size={14} />
                        <span>{label}</span>
                        {dropdown && <FiChevronRight size={14} className="ml-auto" />}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          ))}
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12 space-y-12"
        >
          <FooterDownload />
          <FooterSocial />
          <FooterPayments />
          <FooterLatter />
        </motion.div>
      </div>
    </footer>
  );
}
