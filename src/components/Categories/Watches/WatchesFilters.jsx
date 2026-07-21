"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";


export const watchesData = [
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
    features: ["Smartwatch", "GPS", "Heart Monitor"],
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
    image: "https://images.unsplash.com/photo-1583255804213-5f3b97b0e71a",
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
    features: ["Smartwatch", "GPS", "Health Tracking"],
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
    features: ["Altimeter", "Compass", "Barometer"],
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
    features: ["Smartwatch", "Action Button", "GPS"],
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
];



const WatchesFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    material: [],
    features: [],
    minPrice: 0,
    maxPrice: 15000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredWatches, setFilteredWatches] = useState(watchesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = watchesData;

    // Search
    if (filters.search) {
      result = result.filter((w) =>
        w.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Brand
    if (filters.brand.length > 0) {
      result = result.filter((w) => filters.brand.includes(w.brand));
    }

    // Material
    if (filters.material.length > 0) {
      result = result.filter((w) => filters.material.includes(w.material));
    }

    // Features
    if (filters.features.length > 0) {
      result = result.filter((w) =>
        filters.features.every((f) => w.features.includes(f))
      );
    }

    // Price
    result = result.filter(
      (w) => w.price >= filters.minPrice && w.price <= filters.maxPrice
    );

    // Rating
    if (filters.rating > 0) {
      result = result.filter((w) => w.rating >= filters.rating);
    }

    // Stock
    if (filters.stock !== null) {
      result = result.filter((w) => w.stock === filters.stock);
    }

    // Sorting
    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredWatches([...result]);
    setVisibleCount(8); // reset on filter change
  }, [filters]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newArr = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newArr };
    });
  };

  const resetFilters = () => {
    setFilters({
      brand: [],
      material: [],
      features: [],
      minPrice: 0,
      maxPrice: 15000,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8 my-[-50px]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Sticky Filter Button for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black/80 text-black px-4 py-1 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto custom-scrollbar
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-black text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-black hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search watches..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["Rolex", "Omega", "Apple", "Tag Heuer"].map((brand) => (
              <label key={brand} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleFilter("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Material */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Material</h3>
            {["Steel", "Aluminum"].map((mat) => (
              <label key={mat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.material.includes(mat)}
                  onChange={() => toggleFilter("material", mat)}
                  className="mr-2"
                />
                {mat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {["Chronograph", "Smartwatch", "Waterproof"].map((feature) => (
              <label key={feature} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => toggleFilter("features", feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Price</h3>
            <input
              type="range"
              min="0"
              max="15000"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
            />
            <p className="text-sm">Up to ${filters.maxPrice}</p>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-black text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Availability</h3>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              In Stock
            </label>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === false}
                onChange={() => setFilters({ ...filters, stock: false })}
                className="mr-2"
              />
              Out of Stock
            </label>
          </div>
        </aside>

        {/* ✅ Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredWatches.length} products found</p>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="bg-white text-gray-900 border border-gray-200 px-3 py-2 rounded"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {filteredWatches.slice(0, visibleCount).map((watch) => (
              <div
                key={watch.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{watch.name}</h3>
                <p className="text-sm text-gray-600">{watch.brand}</p>
                <p className="text-lg font-bold text-black">
                  ${watch.price}
                </p>
                <p className="text-sm">
                  {watch.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredWatches.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WatchesFilters;
