"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const petsData = [
  {
    id: 1,
    name: "Deluxe Dog Bed",
    brand: "PawComfort",
    category: "Beds",
    price: 45,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723708857381-82e3b34187b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    features: ["Soft Cushion", "Machine Washable"],
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    brand: "FelineFun",
    category: "Accessories",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1735989967755-706e5edcb44b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    features: ["Durable Sisal", "Stable Base"],
  },
  {
    id: 3,
    name: "Adjustable Dog Harness",
    brand: "PetSafe",
    category: "Collars & Harnesses",
    price: 25,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1704402838515-08944b23f433?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    features: ["Comfortable Fit", "Reflective"],
  },
  {
    id: 4,
    name: "Interactive Cat Toy",
    brand: "PlayPurr",
    category: "Toys",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1658337921007-b6a6bc822af5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    features: ["Battery Operated", "Keeps Cats Active"],
  },
  {
    id: 5,
    name: "Pet Grooming Kit",
    brand: "GroomPro",
    category: "Grooming",
    price: 35,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723723214189-5d62a1173f4d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
    features: ["Low Noise", "Multiple Attachments"],
  },
  {
    id: 6,
    name: "Portable Dog Water Bottle",
    brand: "HydroPaws",
    category: "Accessories",
    price: 20,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1665932572907-3157f036b740?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    features: ["Leak-Proof", "Easy to Carry"],
  },
  {
    id: 7,
    name: "Luxury Cat Bed",
    brand: "CozyCat",
    category: "Beds",
    price: 50,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    features: ["Soft Faux Fur", "Non-Slip Base"],
  },
  {
    id: 8,
    name: "Dog Chew Toy Pack",
    brand: "ChewyPaws",
    category: "Toys",
    price: 18,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1658337922056-9df1fd4ecd79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
    features: ["Durable Rubber", "Teeth Cleaner"],
  },
  {
    id: 9,
    name: "Pet Travel Carrier",
    brand: "PetGo",
    category: "Travel",
    price: 60,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1738091039939-81072281833d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
    features: ["Ventilated", "Foldable Design"],
  },
  {
    id: 10,
    name: "Automatic Pet Feeder",
    brand: "FeedMe",
    category: "Feeding",
    price: 70,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1735994514191-6f6bd8952b18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
    features: ["Programmable", "Battery Backup"],
  },
  {
    id: 11,
    name: "Pet Cooling Mat",
    brand: "ChillPaws",
    category: "Accessories",
    price: 28,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1629755590546-f95805384911?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
    features: ["Self-Cooling", "Portable"],
  },
  {
    id: 12,
    name: "LED Dog Collar",
    brand: "GlowPet",
    category: "Collars & Harnesses",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1736187884142-c555e718a9fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
    features: ["USB Rechargeable", "Adjustable Size"],
  },
  {
    id: 13,
    name: "Pet Hair Remover Roller",
    brand: "FurAway",
    category: "Grooming",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1701513519116-f93f89bf37a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
    features: ["Reusable", "Eco-Friendly"],
  },
  {
    id: 14,
    name: "Cat Window Hammock",
    brand: "ViewPurr",
    category: "Beds",
    price: 35,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1678673414789-143ed913bdc2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
    features: ["Strong Suction", "Comfortable"],
  },
  {
    id: 15,
    name: "Dog Training Clicker",
    brand: "TrainMate",
    category: "Training",
    price: 10,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1702555824953-2f67f6fbd1c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    features: ["Ergonomic Design", "Effective Training"],
  },
  {
    id: 16,
    name: "Pet Stroller",
    brand: "PawRide",
    category: "Travel",
    price: 95,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1702555824953-2f67f6fbd1c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    features: ["Foldable", "Lightweight"],
  },
  {
    id: 17,
    name: "Dog Winter Coat",
    brand: "WarmPaws",
    category: "Clothing",
    price: 40,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
    features: ["Waterproof", "Insulated"],
  },
  {
    id: 18,
    name: "Cat Litter Box with Lid",
    brand: "CleanPurr",
    category: "Litter",
    price: 50,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726797682236-37b846dba9f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
    features: ["Odor Control", "Easy Cleaning"],
  },
  {
    id: 19,
    name: "Pet Car Seat Cover",
    brand: "TravelPaws",
    category: "Travel",
    price: 38,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1716585365681-1e491ae533a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
    features: ["Waterproof", "Non-Slip"],
  },
  {
    id: 20,
    name: "Pet First Aid Kit",
    brand: "SafePet",
    category: "Health",
    price: 25,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1579698374511-6017bd6db7f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
    features: ["Portable", "Essential Supplies"],
  },
  {
    id: 21,
    name: "Collapsible Pet Food Bowl",
    brand: "TravelPet",
    category: "Feeding",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1626435872663-b0a64169c460?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    features: ["Portable", "Dishwasher Safe"],
  },
  {
    id: 22,
    name: "Pet Nail Grinder",
    brand: "GroomPro",
    category: "Grooming",
    price: 28,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1676389281733-aaefab0e7907?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
    features: ["Low Noise", "USB Rechargeable"],
  },
  {
    id: 23,
    name: "Dog Raincoat",
    brand: "PawWear",
    category: "Clothing",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1655780420492-ac07849095ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
    features: ["Waterproof", "Lightweight"],
  },
  {
    id: 24,
    name: "Cat Water Fountain",
    brand: "HydroCat",
    category: "Feeding",
    price: 35,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664303466454-b8ddd4943be4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
    features: ["Continuous Flow", "BPA Free"],
  },
  {
    id: 25,
    name: "Bird Cage with Stand",
    brand: "FeatherHome",
    category: "Bird Supplies",
    price: 80,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1658337922434-d93cb0757cea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
    features: ["Spacious", "Easy Cleaning Tray"],
  },
  {
    id: 26,
    name: "Aquarium Starter Kit",
    brand: "AquaWorld",
    category: "Fish Supplies",
    price: 95,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1676479610745-fd38d98abb1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
    features: ["LED Lighting", "Filtration System"],
  },
  {
    id: 27,
    name: "Hamster Exercise Wheel",
    brand: "TinyTails",
    category: "Small Pets",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664299472390-a42caab13f9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
    features: ["Silent Spin", "Safe Design"],
  },
  {
    id: 28,
    name: "Pet Odor Eliminator Spray",
    brand: "FreshPaws",
    category: "Cleaning",
    price: 18,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1721656363860-0f2858d5ca09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
    features: ["Non-Toxic", "Long Lasting"],
  },
  {
    id: 29,
    name: "Cat Grooming Brush",
    brand: "FurCare",
    category: "Grooming",
    price: 14,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1660760611688-6d7419ed0087?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
    features: ["Easy Grip", "Removes Loose Hair"],
  },
  {
    id: 30,
    name: "Pet Cooling Vest",
    brand: "ChillMate",
    category: "Accessories",
    price: 32,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1580467277788-c6e040296602?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8",
    features: ["Water Activated", "Breathable Fabric"],
  },
  {
    id: 31,
    name: "Pet Stain Remover",
    brand: "CleanPaws",
    category: "Cleaning",
    price: 17,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
    features: ["Fast Acting", "Safe for Pets"],
  },
  {
    id: 32,
    name: "Luxury Dog Sweater",
    brand: "PawWear",
    category: "Clothing",
    price: 30,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1661340583744-6d9e843aa363?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
    features: ["Soft Knit", "Stretchable"],
  },
  {
    id: 33,
    name: "Cat Tunnel",
    brand: "PlayPurr",
    category: "Toys",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723514553579-b589437b3b06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8",
    features: ["Foldable", "Interactive Fun"],
  },
  {
    id: 34,
    name: "Pet Hair Vacuum Attachment",
    brand: "VacPet",
    category: "Grooming",
    price: 25,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1665897529964-ee22424226f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
    features: ["Easy to Attach", "Powerful Suction"],
  },
  {
    id: 35,
    name: "Pet GPS Tracker",
    brand: "TrackPaws",
    category: "Tech",
    price: 60,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726783211457-3103ea829465?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
    features: ["Real-Time Location", "Lightweight"],
  },
  {
    id: 36,
    name: "Dog Life Jacket",
    brand: "SafeSwim",
    category: "Safety",
    price: 40,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1733175217888-37d5db8de69c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8",
    features: ["Adjustable Straps", "Bright Colors"],
  },
  {
    id: 37,
    name: "Bird Play Gym",
    brand: "FeatherFun",
    category: "Bird Supplies",
    price: 45,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1664658856927-34e50ec7e9d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8",
    features: ["Wooden Frame", "Colorful Toys"],
  },
  {
    id: 38,
    name: "Automatic Fish Feeder",
    brand: "AquaFeast",
    category: "Fish Supplies",
    price: 25,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHN8ZW58MHx8MHx8fDA%3D",
    features: ["Programmable", "Easy Setup"],
  },
  {
    id: 39,
    name: "Rabbit Hutch",
    brand: "BunnyHome",
    category: "Small Pets",
    price: 120,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1606736627934-7b647180530f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    features: ["Spacious", "Easy Access Doors"],
  },
  {
    id: 40,
    name: "Pet Travel Backpack",
    brand: "PawPack",
    category: "Travel",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1606425271492-57c2d77cb3fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    features: ["Ventilated", "Comfortable Straps"],
  },
  {
    id: 41,
    name: "Catnip Toy Pack",
    brand: "PlayPurr",
    category: "Toys",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1650192795431-d0dc1f6fac3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    features: ["Organic Catnip", "Fun Shapes"],
  },
  {
    id: 42,
    name: "Dog Agility Training Set",
    brand: "SportPaws",
    category: "Training",
    price: 85,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1609231617449-112c1371bc8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    features: ["Portable", "Durable Material"],
  },
  {
    id: 43,
    name: "Pet Food Storage Container",
    brand: "FreshPet",
    category: "Feeding",
    price: 35,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1707353400249-1d96e1a7e0e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    features: ["Airtight Seal", "Large Capacity"],
  },
  {
    id: 44,
    name: "Dog Tug Rope",
    brand: "ChewyPaws",
    category: "Toys",
    price: 10,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1705147293093-5b6d9265726c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    features: ["Strong Fiber", "Interactive Fun"],
  },
  {
    id: 45,
    name: "Bird Feeding Station",
    brand: "FeatherFeed",
    category: "Bird Supplies",
    price: 28,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1681396990341-ee6e4bd0a7bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    features: ["Weatherproof", "Multiple Ports"],
  },
  {
    id: 46,
    name: "Aquarium Heater",
    brand: "AquaHeat",
    category: "Fish Supplies",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677101291467-d07a86d92e12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
    features: ["Adjustable Temp", "Safe Design"],
  },
  {
    id: 47,
    name: "Pet Ramp for Cars",
    brand: "EasyStep",
    category: "Travel",
    price: 70,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1606740256513-d13624dde670?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    features: ["Non-Slip Surface", "Foldable"],
  },
  {
    id: 48,
    name: "Dog Paw Balm",
    brand: "PawCare",
    category: "Health",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1637660432773-4e20b2cc98f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
    features: ["Natural Ingredients", "Moisturizing"],
  },

];

const PetsFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(petsData.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(petsData.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Pets Featured Deals</h2>

      <div className="relative overflow-hidden">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-black text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
          }}
        >
          {slideItems.map((items, slideIndex) => (
            <div
              key={slideIndex}
              className="flex justify-center gap-6 px-2"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {item.stock ? (
                      <span className="absolute top-2 left-2 bg-black text-xs font-bold px-2 py-1 rounded-md">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-black text-xs font-bold px-2 py-1 rounded-md">
                        Out of Stock
                      </span>
                    )}
                    <span className="absolute top-2 right-2 bg-black text-black text-xs font-bold px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">Brand: {item.brand}</p>

                    <ul className="text-xs text-black mb-3 list-disc list-inside">
                      {item.features?.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < item.rating ? "text-black" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-black">${item.price}</span>
                    </div>

                    <button
                      disabled={!item.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          item.stock
                            ? "bg-black text-black hover:bg-black"
                            : "bg-white text-gray-600 cursor-not-allowed"
                        }`}
                    >
                      <FaCartPlus />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next Slide"
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-black text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PetsFeaturedDeals;
