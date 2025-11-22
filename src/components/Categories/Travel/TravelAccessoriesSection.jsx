"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Travel Backpack",
    brand: "GlobeTrotter",
    category: "Bags",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    features: ["Water Resistant", "Multiple Compartments", "Lightweight"],
  },
  {
    id: 2,
    name: "Travel Suitcase",
    brand: "PackSmart",
    category: "Luggage",
    price: 250,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
    features: ["Hard Shell", "360° Wheels", "TSA Lock"],
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones",
    brand: "TravelSound",
    category: "Accessories",
    price: 180,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fHww",
    features: ["Bluetooth 5.0", "Long Battery Life", "Comfort Fit"],
  },
  {
    id: 4,
    name: "Travel Pillow",
    brand: "ComfortEase",
    category: "Accessories",
    price: 35,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Memory Foam", "Machine Washable", "Compact Design"],
  },
  {
    id: 5,
    name: "Portable Charger",
    brand: "PowerGo",
    category: "Electronics",
    price: 60,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["10000mAh", "Fast Charging", "Compact Size"],
  },
  {
    id: 6,
    name: "Travel Camera",
    brand: "SnapShot",
    category: "Electronics",
    price: 699,
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["4K Video", "WiFi Enabled", "Compact Body"],
  },
  {
    id: 7,
    name: "Travel Adapter",
    brand: "PlugMaster",
    category: "Electronics",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Universal Fit", "USB Ports", "Compact"],
  },
  {
    id: 8,
    name: "Packing Cubes Set",
    brand: "OrganizePro",
    category: "Bags",
    price: 40,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Various Sizes", "Lightweight", "Durable"],
  },
  {
    id: 9,
    name: "Travel Water Bottle",
    brand: "HydraGo",
    category: "Accessories",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["BPA Free", "Insulated", "Leak Proof"],
  },
  {
    id: 10,
    name: "Compact Binoculars",
    brand: "ViewMax",
    category: "Accessories",
    price: 90,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["8x Magnification", "Lightweight", "Water Resistant"],
  },
  {
    id: 11,
    name: "Travel Guide Book",
    brand: "Wanderlust Press",
    category: "Books",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Up-to-date Info", "Maps Included", "Compact"],
  },
  {
    id: 12,
    name: "Travel Sunglasses",
    brand: "SunGuard",
    category: "Accessories",
    price: 55,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1679830513873-5f9163fcc04a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["UV Protection", "Polarized", "Lightweight"],
  },
  {
    id: 13,
    name: "Waterproof Phone Case",
    brand: "SafeSplash",
    category: "Accessories",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Waterproof", "Touch Compatible", "Clear View"],
  },
  {
    id: 14,
    name: "Portable Bluetooth Speaker",
    brand: "SoundBlaze",
    category: "Electronics",
    price: 85,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Waterproof", "Long Battery", "Compact"],
  },
  {
    id: 15,
    name: "Travel Toiletry Bag",
    brand: "FreshPack",
    category: "Bags",
    price: 30,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1500815845799-7748ca339f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Water Resistant", "Multiple Compartments", "Compact"],
  },
  {
    id: 16,
    name: "Portable Laptop Stand",
    brand: "ErgoFold",
    category: "Accessories",
    price: 45,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Height", "Lightweight", "Foldable"],
  },
  {
    id: 17,
    name: "Travel First Aid Kit",
    brand: "SafeTrip",
    category: "Health",
    price: 28,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Compact", "Comprehensive", "Waterproof"],
  },
  {
    id: 18,
    name: "Travel Laundry Bag",
    brand: "PackEase",
    category: "Bags",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1517999349371-c43520457b23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Lightweight", "Breathable", "Compact"],
  },
  {
    id: 19,
    name: "Travel Wallet",
    brand: "SecureHold",
    category: "Accessories",
    price: 40,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1499063078284-f78f7d89616a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["RFID Blocking", "Multiple Slots", "Compact"],
  },
  {
    id: 20,
    name: "Travel Umbrella",
    brand: "StormShield",
    category: "Accessories",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Windproof", "Compact", "Automatic Open"],
  },
  {
    id: 21,
    name: "Travel Hammock",
    brand: "EasyRest",
    category: "Outdoor",
    price: 65,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Lightweight", "Quick Dry", "Compact"],
  },
  {
    id: 22,
    name: "Travel Hiking Boots",
    brand: "TrailBlaze",
    category: "Footwear",
    price: 130,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Waterproof", "Durable", "Comfort Fit"],
  },
  {
    id: 23,
    name: "Travel Jacket",
    brand: "StormSafe",
    category: "Clothing",
    price: 150,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1719843013775-1a101dd75b37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Waterproof", "Wind Resistant", "Lightweight"],
  },
  {
    id: 24,
    name: "Travel Socks Set",
    brand: "ComfortFeet",
    category: "Clothing",
    price: 20,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1721353413070-bb55c58138fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Moisture Wicking", "Breathable", "Quick Dry"],
  },
  {
    id: 25,
    name: "Travel Guide App Subscription",
    brand: "WanderGuide",
    category: "Services",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Offline Maps", "Itinerary Planner", "Local Tips"],
  },
  {
    id: 26,
    name: "Travel Toiletries Set",
    brand: "FreshPack",
    category: "Accessories",
    price: 35,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Travel Sized", "Leak Proof", "Eco Friendly"],
  },
  {
    id: 27,
    name: "Travel Shoe Bags",
    brand: "PackSmart",
    category: "Bags",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTAxfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Water Resistant", "Compact", "Lightweight"],
  },
  {
    id: 28,
    name: "Travel Dry Bag",
    brand: "SafeSplash",
    category: "Outdoor",
    price: 45,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1668703335982-a2d335b5cf82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Waterproof", "Durable", "Compact"],
  },
  {
    id: 29,
    name: "Travel Headlamp",
    brand: "NightLite",
    category: "Outdoor",
    price: 30,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664368832363-9f9c97e40aed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Bright LED", "Adjustable Strap", "Long Battery Life"],
  },
  {
    id: 30,
    name: "Travel Map",
    brand: "OldWorld",
    category: "Books",
    price: 12,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1470074558764-4e577e98bc85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Foldable", "Detailed", "Water Resistant"],
  },
  {
    id: 31,
    name: "Travel Coffee Mug",
    brand: "SipSafe",
    category: "Accessories",
    price: 25,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1574260031597-bcd9eb192b4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Insulated", "Spill Proof", "Compact"],
  },
  {
    id: 32,
    name: "Travel Scarf",
    brand: "CozyWrap",
    category: "Clothing",
    price: 40,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1527605158555-853f200063e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Soft", "Warm", "Lightweight"],
  },
  {
    id: 33,
    name: "Travel Compression Socks",
    brand: "SupportPro",
    category: "Clothing",
    price: 30,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Compression", "Breathable", "Durable"],
  },
  {
    id: 34,
    name: "Travel Guidebook - Europe",
    brand: "Wanderlust Press",
    category: "Books",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1742893872614-4c4792f5327b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Detailed Maps", "Travel Tips", "Compact"],
  },
  {
    id: 35,
    name: "Travel Bluetooth Earbuds",
    brand: "SoundWave",
    category: "Electronics",
    price: 110,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Noise Cancelling", "Bluetooth 5.0", "Long Battery Life"],
  },
  {
    id: 36,
    name: "Travel Daypack",
    brand: "GlobeTrotter",
    category: "Bags",
    price: 80,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1568323993144-20d546ba585d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Lightweight", "Water Resistant", "Multiple Compartments"],
  },
  {
    id: 37,
    name: "Travel Wallet with RFID",
    brand: "SecureHold",
    category: "Accessories",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1511068797325-6083f0f872b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["RFID Blocking", "Multiple Slots", "Compact"],
  },
  {
    id: 38,
    name: "Travel Hand Sanitizer",
    brand: "CleanHands",
    category: "Health",
    price: 10,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1519074025331-81dcc0c0ee6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Kills 99.9% Germs", "Compact Bottle", "Quick Dry"],
  },
  {
    id: 39,
    name: "Travel Insulated Lunch Box",
    brand: "FreshPack",
    category: "Accessories",
    price: 35,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613255347963-408b0deb3633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Insulated", "Leak Proof", "Compact"],
  },
  {
    id: 40,
    name: "Travel Sleeping Bag",
    brand: "CampReady",
    category: "Outdoor",
    price: 95,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1610023926499-571d3b203226?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM5fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Lightweight", "Compact", "Warm"],
  },
  {
    id: 41,
    name: "Travel Toiletry Organizer",
    brand: "FreshPack",
    category: "Bags",
    price: 30,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1642009071428-119813340e22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzUyfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Multiple Compartments", "Water Resistant", "Compact"],
  },
  {
    id: 42,
    name: "Travel Shoe Inserts",
    brand: "ComfortFeet",
    category: "Accessories",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1485949870685-e1d7ea5a1c53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc4fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Comfort Fit", "Breathable", "Shock Absorbent"],
  },
  {
    id: 43,
    name: "Travel Raincoat",
    brand: "StormSafe",
    category: "Clothing",
    price: 75,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1677560942450-905fa5e44f63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk5fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Waterproof", "Wind Resistant", "Lightweight"],
  },
  {
    id: 44,
    name: "Travel Multi-tool",
    brand: "GearMaster",
    category: "Outdoor",
    price: 50,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1638987158215-dbaa874ed068?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDI4fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Multi-purpose", "Compact", "Durable"],
  },
  {
    id: 45,
    name: "Travel Guidebook - Asia",
    brand: "Wanderlust Press",
    category: "Books",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670985849617-ce4853d4a533?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Detailed Maps", "Travel Tips", "Compact"],
  },
  {
    id: 46,
    name: "Travel Power Bank",
    brand: "PowerGo",
    category: "Electronics",
    price: 80,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670985849617-ce4853d4a533?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["20000mAh", "Fast Charging", "Compact Size"],
  },
  {
    id: 47,
    name: "Travel Luggage Scale",
    brand: "PackSmart",
    category: "Accessories",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1648660937028-b31da1aba1af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDY1fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Digital", "Compact", "Accurate"],
  },
  {
    id: 48,
    name: "Travel Ear Plugs",
    brand: "QuietZone",
    category: "Accessories",
    price: 10,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1662218379799-47edf9e998f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcxfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Noise Reduction", "Comfort Fit", "Reusable"],
  },
  {
    id: 49,
    name: "Travel Journal",
    brand: "WriteAway",
    category: "Books",
    price: 22,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1460627390041-532a28402358?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc5fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Hardcover", "Compact", "Lined Pages"],
  },
  {
    id: 50,
    name: "Travel Sunglasses Case",
    brand: "SunGuard",
    category: "Accessories",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1639974394918-acd409d48630?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg3fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    features: ["Hard Shell", "Compact", "Lightweight"],
  },
];

const MusicAccessoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleAccessories = accessories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(accessories.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4 my-[-30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Clothing Accessories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleAccessories.map(({ id, name, price, rating, image }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg border border-yellow-500 flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_15px_3px_rgba(202,138,4,0.7)]"
              style={{ willChange: "transform, box-shadow" }}
            >
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="rounded-t-lg w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-600" />
                    )
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xl font-bold">{price}</p>

                  <button
                    aria-label={`Add ${name} to cart`}
                    className="bg-yellow-500 text-gray-900 p-2 rounded-md hover:bg-yellow-400 transition"
                  >
                    <FaCartPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < accessories.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MusicAccessoriesSection;
