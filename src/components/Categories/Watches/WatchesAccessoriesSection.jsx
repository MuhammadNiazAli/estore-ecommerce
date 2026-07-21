"use client";
import React, { useState } from "react";
import { HeartIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/solid";

const accessoriesData = [
  {
    id: 1,
    name: "Rolex Submariner",
    price: 12500,
    image: "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    price: 9800,
    image: "https://images.unsplash.com/photo-1588524789663-e6163803c589?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    price: 799,
    image: "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fossil Premium watch",
    price: 4200,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
    price: 950,
    image: "https://images.unsplash.com/photo-1723234724660-ce1d1d1d93ae?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Breitling Watch",
    price: 350,
    image: "https://images.unsplash.com/photo-1609482806891-7b1b31891da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    price: 32000,
    image: "https://images.unsplash.com/photo-1694442139405-28866401a322?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic",
    price: 750,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    price: 499,
    image: "https://images.unsplash.com/photo-1646391684410-6bc0fefa6046?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Rolex Daytona",
    price: 14000,
    image: "https://images.unsplash.com/photo-1651321225568-212f47155dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Omega Seamaster Diver 300M",
    price: 7200,
    image: "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Tag Heuer Monaco",
    price: 6500,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Casio Edifice",
    price: 220,
    image: "https://images.unsplash.com/photo-1582994595079-d0a4d6c4772c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Seiko Presage Cocktail",
    price: 450,
    image: "https://images.unsplash.com/photo-1609684963134-b70db0a3c8fe?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Patek Philippe Calatrava",
    price: 31000,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Tissot Seastar 1000",
    price: 950,
    image: "https://images.unsplash.com/photo-1545038110-400f683aa1de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Apple Watch SE",
    price: 279,
    image: "https://images.unsplash.com/photo-1729078945948-4485f0a58494?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Rolex GMT-Master II",
    price: 14500,
    image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Omega Aqua Terra",
    price: 6000,
    image: "https://images.unsplash.com/photo-1669621952722-4eb9d749b403?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Tag Heuer Formula 1",
    price: 1200,
    image: "https://images.unsplash.com/photo-1661132186289-ecffe2259120?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    name: "Seiko Astron GPS Solar",
    price: 1700,
    image: "https://images.unsplash.com/photo-1696774690902-6e2057307e20?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Casio Pro Trek",
    price: 380,
    image: "https://images.unsplash.com/photo-1650974970408-c6d0fbee4ec6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Breitling Navitimer",
    price: 8900,
    image: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Panerai Luminor Marina",
    price: 7100,
    image: "https://images.unsplash.com/photo-1728437115386-9c140e114e77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "IWC Portugieser Chronograph",
    price: 7400,
    image: "https://images.unsplash.com/photo-1598629986113-5f8f2948faff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Hublot Big Bang",
    price: 12000,
    image: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Citizen Eco-Drive Promaster",
    price: 450,
    image: "https://images.unsplash.com/photo-1581948353407-cb34a56449c4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Longines Master Collection",
    price: 2500,
    image: "https://images.unsplash.com/photo-1630512731604-ab66f094b788?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Montblanc 1858 Geosphere",
    price: 6200,
    image: "https://images.unsplash.com/photo-1590688560938-57c514814ddb?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Audemars Piguet Royal Oak",
    price: 45000,
    image: "https://images.unsplash.com/photo-1671195828444-eb720226a961?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    name: "Richard Mille RM 11-03",
    price: 165000,
    image: "https://images.unsplash.com/photo-1671014978748-84f661cc2f93?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    name: "Bell & Ross BR 03-92",
    price: 3900,
    image: "https://images.unsplash.com/photo-1596432574903-8861467eaca5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    name: "Hamilton Khaki Field Mechanical",
    price: 575,
    image: "https://images.unsplash.com/photo-1743275005299-84405fbbb75f?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Grand Seiko Snowflake",
    price: 6200,
    image: "https://images.unsplash.com/photo-1580658001207-ccd9b884191c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Oris Aquis Date",
    price: 2000,
    image: "https://images.unsplash.com/photo-1658824026201-0e6f924d834d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Apple Watch Ultra 2",
    price: 799,
    image: "https://images.unsplash.com/photo-1561714749-a5384292f7c7?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Tag Heuer Aquaracer",
    price: 2500,
    image: "https://images.unsplash.com/photo-1662989578312-cf88341d0a88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Rolex Yacht-Master",
    price: 17500,
    image: "https://images.unsplash.com/photo-1693429442226-4c838b86ffd3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    name: "Omega Constellation",
    price: 4300,
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Fossil Hybrid HR",
    price: 199,
    image: "https://images.unsplash.com/photo-1721719698251-402fbc325d22?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Garmin Fenix 7",
    price: 699,
    image: "https://images.unsplash.com/photo-1715776384730-4c6336bb6738?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Swatch Sistem51",
    price: 150,
    image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Timex Marlin Automatic",
    price: 249,
    image: "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Cartier Santos",
    price: 7200,
    image: "https://images.unsplash.com/photo-1618960428297-d9bcb6996898?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Breitling Superocean",
    price: 4500,
    image: "https://images.unsplash.com/photo-1611163950958-a2ec5ccccd18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Casio Vintage A168",
    price: 40,
    image: "https://images.unsplash.com/photo-1655356424878-e7d25784fb65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Rado Captain Cook",
    price: 2300,
    image: "https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Bulgari Octo Finissimo",
    price: 14000,
    image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 49,
    name: "Nomos Tangente",
    price: 2200,
    image: "https://images.unsplash.com/photo-1609835563715-404c147de519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    name: "Zenith El Primero",
    price: 8700,
    image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 51,
    name: "Rolex Automic",
    price: 8700,
    image: "https://images.unsplash.com/photo-1603656179723-19bb83b68dbb?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WatchesAccessoriesSection = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addToCart = (item) => {
    if (!cart.find((i) => i.id === item.id)) {
      setLoading(true);
      setShowPopup(true);
      setPopupMessage(""); // Reset message first
      setTimeout(() => {
        setCart([...cart, item]);
        setLoading(false);
        setPopupMessage(`${item.name} has been added to your cart.`);
      }, 1000);
    }
  };

  const toggleWishlist = (item) => {
    if (wishlist.find((i) => i.id === item.id)) {
      setWishlist(wishlist.filter((i) => i.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <section className="w-full bg-white py-10 my-15">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Watch Accessories
          </h2>
          <p className="text-gray-600 mt-2">
            Complete your timepiece with premium straps, boxes & more
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {accessoriesData.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden relative group"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(item)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
              >
                <HeartIcon
                  className={`h-6 w-6 ${
                    wishlist.find((i) => i.id === item.id)
                      ? "text-red-500"
                      : "text-gray-600"
                  }`}
                />
              </button>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-1">${item.price}</p>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < accessoriesData.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow hover:shadow-lg font-semibold transition"
            >
              View More
            </button>
          </div>
        )}

        {/* Cart & Wishlist Summary */}
        <div className="mt-8 text-center text-gray-700">
          Cart: <span className="font-bold">{cart.length}</span> items | Wishlist:{" "}
          <span className="font-bold">{wishlist.length}</span>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 relative w-80 text-center">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            {loading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-gray-900 rounded-full"></div>
                <p className="mt-4 text-gray-700 font-medium">Adding to cart...</p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Success!</h3>
                <p className="text-gray-600">{popupMessage}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default WatchesAccessoriesSection;
