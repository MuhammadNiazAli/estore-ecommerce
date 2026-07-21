import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCar,
  AiOutlineLock,
  AiOutlineUndo,
  AiOutlineCustomerService,
} from "react-icons/ai";

const shippingDetails = [
  {
    icon: <AiOutlineCheckCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />,
    title: "Free Shipping",
    description: "On all orders over $50, delivered within 5-7 business days.",
    linkText: "See shipping details",
    href: "/shipping",
  },
  {
    icon: <AiOutlineClockCircle className="w-8 h-8 text-amber-600 group-hover:rotate-12 transition-transform" />,
    title: "Express Delivery",
    description: "Get your order in 1-2 business days with express options.",
    linkText: "Check express delivery",
    href: "/express-delivery",
  },
  {
    icon: <AiOutlineCar className="w-8 h-8 text-blue-400 group-hover:translate-x-1 transition-transform" />,
    title: "Order Tracking",
    description: "Track your order live from dispatch to doorstep.",
    linkText: "Track your order",
    href: "/track-order",
  },
  {
    icon: <AiOutlineLock className="w-8 h-8 text-amber-700 group-hover:scale-110 transition-transform" />,
    title: "Secure Payments",
    description: "Your data is protected with end-to-end encryption.",
    linkText: "Learn about payment security",
    href: "/secure-payments",
  },
  {
    icon: <AiOutlineUndo className="w-8 h-8 text-red-500 group-hover:-rotate-12 transition-transform" />,
    title: "Hassle-Free Returns",
    description: "30-day return window, no questions asked.",
    linkText: "Return policy",
    href: "/return-policy",
  },
  {
    icon: <AiOutlineCustomerService className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />,
    title: "24/7 Support",
    description: "We’re always here to help, anytime you need us.",
    linkText: "Contact customer support",
    href: "/customer-support",
  },
];

const ProductShippingInfo = () => {
  return (
    <section className="max-w-[1100px] mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center">
        Shipping & Service Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shippingDetails.map(({ icon, title, description, linkText, href }, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>{icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            <a
              href={href}
              className="text-sm text-blue-400 font-medium mt-2 hover:underline"
            >
              {linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShippingInfo;
