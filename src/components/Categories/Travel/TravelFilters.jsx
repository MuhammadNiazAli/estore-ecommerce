"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Example travel product data (replace with your own actual data)
const travelData = [
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
];

const TravelFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 400,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(travelData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let result = travelData;

    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.features.length > 0) {
      result = result.filter((p) =>
        filters.features.every((f) => p.features.includes(f))
      );
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((p) => p.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((p) => p.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts([...result]);
    setVisibleCount(8);
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
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 400,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search travel products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Brand</h3>
            {[
              "GlobeTrotter",
              "PowerGo",
              "ComfortWay",
              "SoundEscape",
              "TrailBlazer",
              "RollMaster",
              "Wanderlust",
              "HydroFlow",
            ].map((brand) => (
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

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Category</h3>
            {["Bags", "Accessories", "Comfort", "Clothing", "Books"].map((cat) => (
              <label key={cat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {[
              "Waterproof",
              "Lightweight",
              "Multiple Compartments",
              "Fast Charging",
              "Compact",
              "Memory Foam",
              "Washable Cover",
              "Bluetooth",
              "Over Ear",
              "Insulated",
              "Durable",
              "Expandable",
              "Detailed Maps",
              "Local Tips",
              "BPA Free",
            ].map((feature) => (
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
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="400"
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
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
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

        {/* Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-amber-600">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
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

export default TravelFilters;
