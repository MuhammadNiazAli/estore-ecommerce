"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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

const PetsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(sampleFitnessProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleFitnessProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-60px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Plants Beauty
          </h2>
          <p className="text-gray-500 mt-2">Browse through our curated collection</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-gray-800 font-bold mt-1">${item.price}</p>
                {item.oldPrice && (
                  <p className="text-red-500 line-through text-sm">
                    ${item.oldPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-white rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium min-w-[50px] whitespace-nowrap transition ${
                  currentPage === page
                    ? "bg-white text-gray-900 border border-amber-50"
                    : "bg-white text-gray-700 hover:bg-gray-500"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetsPagination;
