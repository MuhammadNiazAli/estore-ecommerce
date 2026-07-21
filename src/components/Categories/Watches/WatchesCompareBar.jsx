"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WatchesCompareBar = () => {
  const [compareItems, setCompareItems] = useState([
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 12500,
    material: "Steel",
    features: ["Waterproof", "Sapphire Glass"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    brand: "Omega",
    price: 9800,
    material: "Steel",
    features: ["Chronograph", "Tachymeter"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1588524789663-e6163803c589?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    brand: "Apple",
    price: 799,
    material: "Aluminum",
    features: ["Smartwatch", "GPS",],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fossil Premium watch",
    brand: "Tag Heuer",
    price: 4200,
    material: "Steel",
    features: ["Chronograph", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
    brand: "Seiko",
    price: 950,
    material: "Steel",
    features: ["Waterproof", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1723234724660-ce1d1d1d93ae?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Breitling Watch",
    brand: "Casio",
    price: 350,
    material: "Resin",
    features: ["Shock Resistant", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1609482806891-7b1b31891da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: 32000,
    material: "Steel",
    features: ["Luxury", "Automatic"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1708247804800-bf34a8a24b38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic",
    brand: "Tissot",
    price: 750,
    material: "Steel",
    features: ["Automatic", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 499,
    material: "Aluminum",
    features: ["Smartwatch", "GPS",],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1646391684410-6bc0fefa6046?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Rolex Daytona",
    brand: "Rolex",
    price: 14000,
    material: "Gold",
    features: ["Chronograph", "Luxury"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1651321225568-212f47155dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // ✅ Add more (11-50)
  {
    id: 11,
    name: "Omega Seamaster Diver 300M",
    brand: "Omega",
    price: 7200,
    material: "Steel",
    features: ["Waterproof", "Helium Escape Valve"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Tag Heuer Monaco",
    brand: "Tag Heuer",
    price: 6500,
    material: "Steel",
    features: ["Square Dial", "Chronograph"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Casio Edifice",
    brand: "Casio",
    price: 220,
    material: "Steel",
    features: ["Chronograph", "Bluetooth"],
    rating: 3,
    stock: true,
    image: "https://images.unsplash.com/photo-1582994595079-d0a4d6c4772c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Seiko Presage Cocktail",
    brand: "Seiko",
    price: 450,
    material: "Steel",
    features: ["Automatic", "Dress Watch"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1609684963134-b70db0a3c8fe?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Patek Philippe Calatrava",
    brand: "Patek Philippe",
    price: 31000,
    material: "Gold",
    features: ["Luxury", "Manual Wind"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Tissot Seastar 1000",
    brand: "Tissot",
    price: 950,
    material: "Steel",
    features: ["Diver", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1545038110-400f683aa1de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Apple Watch SE",
    brand: "Apple",
    price: 279,
    material: "Aluminum",
    features: ["Smartwatch", "GPS"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1729078945948-4485f0a58494?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Rolex GMT-Master II",
    brand: "Rolex",
    price: 14500,
    material: "Steel",
    features: ["Dual Time Zone", "Luxury"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Omega Aqua Terra",
    brand: "Omega",
    price: 6000,
    material: "Steel",
    features: ["Anti-Magnetic", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1669621952722-4eb9d749b403?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Tag Heuer Formula 1",
    brand: "Tag Heuer",
    price: 1200,
    material: "Steel",
    features: ["Sport", "Chronograph"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1661132186289-ecffe2259120?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    name: "Seiko Astron GPS Solar",
    brand: "Seiko",
    price: 1700,
    material: "Titanium",
    features: ["GPS", "Solar Powered"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1696774690902-6e2057307e20?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Casio Pro Trek",
    brand: "Casio",
    price: 380,
    material: "Resin",
    features: ["Altimeter", "Compass",],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1650974970408-c6d0fbee4ec6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Breitling Navitimer",
    brand: "Breitling",
    price: 8900,
    material: "Steel",
    features: ["Chronograph", "Slide Rule"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Panerai Luminor Marina",
    brand: "Panerai",
    price: 7100,
    material: "Steel",
    features: ["Automatic", "Water Resistant"],
    rating: 4,
    stock: false,
    image: "https://images.unsplash.com/photo-1728437115386-9c140e114e77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "IWC Portugieser Chronograph",
    brand: "IWC",
    price: 7400,
    material: "Steel",
    features: ["Chronograph", "Automatic"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1598629986113-5f8f2948faff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Hublot Big Bang",
    brand: "Hublot",
    price: 12000,
    material: "Ceramic",
    features: ["Chronograph", "Luxury"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Citizen Eco-Drive Promaster",
    brand: "Citizen",
    price: 450,
    material: "Titanium",
    features: ["Solar Powered", "Diver"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1581948353407-cb34a56449c4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Longines Master Collection",
    brand: "Longines",
    price: 2500,
    material: "Steel",
    features: ["Automatic", "Moonphase"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1630512731604-ab66f094b788?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Montblanc 1858 Geosphere",
    brand: "Montblanc",
    price: 6200,
    material: "Bronze",
    features: ["World Time", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1590688560938-57c514814ddb?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    price: 45000,
    material: "Steel",
    features: ["Luxury", "Automatic"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1671195828444-eb720226a961?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    name: "Richard Mille RM 11-03",
    brand: "Richard Mille",
    price: 165000,
    material: "Carbon",
    features: ["Chronograph", "Luxury"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1671014978748-84f661cc2f93?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    name: "Bell & Ross BR 03-92",
    brand: "Bell & Ross",
    price: 3900,
    material: "Ceramic",
    features: ["Square Dial", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1596432574903-8861467eaca5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    name: "Hamilton Khaki Field Mechanical",
    brand: "Hamilton",
    price: 575,
    material: "Steel",
    features: ["Hand-Wound", "Military Style"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1743275005299-84405fbbb75f?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Grand Seiko Snowflake",
    brand: "Grand Seiko",
    price: 6200,
    material: "Titanium",
    features: ["Spring Drive", "Luxury"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1580658001207-ccd9b884191c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Oris Aquis Date",
    brand: "Oris",
    price: 2000,
    material: "Steel",
    features: ["Diver", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1658824026201-0e6f924d834d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 799,
    material: "Titanium",
    features: ["Smartwatch", "Action Button",],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1561714749-a5384292f7c7?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Tag Heuer Aquaracer",
    brand: "Tag Heuer",
    price: 2500,
    material: "Steel",
    features: ["Waterproof", "Diver"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1662989578312-cf88341d0a88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Rolex Yacht-Master",
    brand: "Rolex",
    price: 17500,
    material: "Platinum",
    features: ["Luxury", "Sailing"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1693429442226-4c838b86ffd3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    name: "Omega Constellation",
    brand: "Omega",
    price: 4300,
    material: "Steel",
    features: ["Automatic", "Luxury"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Fossil Hybrid HR",
    brand: "Fossil",
    price: 199,
    material: "Steel",
    features: ["Smartwatch", "Long Battery"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1721719698251-402fbc325d22?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Garmin Fenix 7",
    brand: "Garmin",
    price: 699,
    material: "Steel",
    features: ["GPS", "Fitness Tracking"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1715776384730-4c6336bb6738?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Swatch Sistem51",
    brand: "Swatch",
    price: 150,
    material: "Plastic",
    features: ["Automatic", "Affordable"],
    rating: 3,
    stock: true,
    image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Timex Marlin Automatic",
    brand: "Timex",
    price: 249,
    material: "Steel",
    features: ["Automatic", "Classic Design"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Cartier Santos",
    brand: "Cartier",
    price: 7200,
    material: "Steel",
    features: ["Luxury", "Square Dial"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1618960428297-d9bcb6996898?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Breitling Superocean",
    brand: "Breitling",
    price: 4500,
    material: "Steel",
    features: ["Diver", "Chronometer"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1611163950958-a2ec5ccccd18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Casio Vintage A168",
    brand: "Casio",
    price: 40,
    material: "Steel",
    features: ["Digital", "Retro"],
    rating: 3,
    stock: true,
    image: "https://images.unsplash.com/photo-1655356424878-e7d25784fb65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Rado Captain Cook",
    brand: "Rado",
    price: 2300,
    material: "Ceramic",
    features: ["Diver", "Luxury"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Bulgari Octo Finissimo",
    brand: "Bulgari",
    price: 14000,
    material: "Titanium",
    features: ["Ultra Thin", "Luxury"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 49,
    name: "Nomos Tangente",
    brand: "Nomos",
    price: 2200,
    material: "Steel",
    features: ["Manual Wind", "Minimalist"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1609835563715-404c147de519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    name: "Zenith El Primero",
    brand: "Zenith",
    price: 8700,
    material: "Steel",
    features: ["Chronograph", "High Beat"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 51,
    name: "Rolex Automic",
    brand: "Zenith",
    price: 8700,
    material: "Steel",
    features: ["Chronograph", "High Beat"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1603656179723-19bb83b68dbb?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  ]);

  const removeItem = (id) => {
    setCompareItems(compareItems.filter((item) => item.id !== id));
  };

  return (
    <section className="w-full bg-white shadow-md rounded-lg mt-6 my-5">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            Compare Watches
            <span className="text-sm text-gray-500">
              ({compareItems.length} Selected)
            </span>
          </h2>
        </div>

        {compareItems.length > 0 ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {compareItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gray-50 border rounded-lg p-4 flex flex-col items-center text-center relative hover:shadow-lg transition">
                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 bg-white text-gray-900 rounded-full p-1 hover:bg-red-500 transition"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded mb-3"
                  />
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                  <p className="text-gray-900 font-bold mb-3">${item.price}</p>

                  {/* Features */}
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    {item.features.map((f, index) => (
                      <li key={index}>• {f}</li>
                    ))}
                  </ul>

                  <button className="w-full bg-white text-gray-900 py-2 rounded hover:bg-gray-50 text-xs">
                    View Details
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 py-6 text-sm">
            No watches added for comparison yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default WatchesCompareBar;
