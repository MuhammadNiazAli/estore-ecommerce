"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

export const fitnessData = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set",
    brand: "FitPro",
    category: "Strength",
    price: 249,
    features: ["Adjustable Weight", "Compact", "Durable"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Treadmill 3000X",
    brand: "ProRun",
    category: "Cardio",
    price: 1199,
    features: ["Foldable", "Bluetooth", "Shock Absorption"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Yoga Mat Pro",
    brand: "ZenFlex",
    category: "Yoga",
    price: 59,
    features: ["Eco-Friendly", "Non-Slip", "Extra Thick"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Pull-Up Bar",
    brand: "IronCore",
    category: "Strength",
    price: 89,
    features: ["Doorway Mount", "Adjustable", "Steel Build"],
    rating: 3,
    stock: false,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Resistance Band Set",
    brand: "FlexFit",
    category: "Strength",
    price: 39,
    features: ["Portable", "Durable", "Multi-Tension"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Stationary Bike Elite",
    brand: "SpinMax",
    category: "Cardio",
    price: 899,
    features: ["Bluetooth", "LCD Display", "Silent Belt Drive"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Foam Roller XL",
    brand: "ZenFlex",
    category: "Recovery",
    price: 35,
    features: ["Extra Long", "Deep Tissue", "Lightweight"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661962342128-505f8032ea45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Kettlebell Pro 20kg",
    brand: "IronCore",
    category: "Strength",
    price: 99,
    features: ["Ergonomic Grip", "Cast Iron", "Durable Coating"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664910806127-d52cb0e0d091?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Rowing Machine Pro",
    brand: "CardioKing",
    category: "Cardio",
    price: 1299,
    features: ["Water Resistance", "Compact", "Bluetooth"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Jump Rope SpeedX",
    brand: "FitPro",
    category: "Cardio",
    price: 25,
    features: ["Adjustable Length", "High Speed", "Durable Cable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663100764663-418395b1dd86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },

  // ✅ More products continue below
  ...Array.from({ length: 40 }, (_, index) => {
    const id = index + 11;
    const sampleBrands = ["FitPro", "ProRun", "ZenFlex", "IronCore", "SpinMax"];
    const sampleCategories = ["Strength", "Cardio", "Yoga", "Recovery"];
    const sampleFeatures = [
      "Bluetooth",
      "Foldable",
      "Durable",
      "Compact",
      "Eco-Friendly",
      "Adjustable",
    ];
    const sampleImages = [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1685746383296-0c6261e7bee6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1666736569172-0c435487b6ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1675263328224-42e069928ca3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1672352100198-c4c8df97a35f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1603503363848-6952525df449?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1670505060574-b08479270d1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670505061070-2664ed450cda?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664528917209-be9e9f962ad0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1666283137510-a0afe6651dc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1742356870699-21ccb47a11b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1672129881019-b85134aba075?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1670505062610-b9041ebe603c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1723921356647-2a3c6b6016c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1666736568278-980466267acb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1672790855885-072790e69271?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663050623545-4b1fd5cb4658?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1723810059969-c70ee44677a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663133852597-71743cdc6767?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664304106292-ef7e34f74dc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1670505059783-228b77d8df17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1671028546486-8ac087885df5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664536967796-c00b4fb4fcff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664536967978-cc37f620b642?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663133993152-19c70539bc69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1723899614031-65938585c39a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1661600175890-d1c86a903c5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1666736570456-7191a39d9a0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663134321792-3800ece444c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663133996652-ccc8e43541d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1753476399620-d0672448550a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1663036286716-c29a350c8278?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1723600930259-87c96032fc58?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    ];

    return {
      id,
      name: `Fitness Gear ${id}`,
      brand: sampleBrands[id % sampleBrands.length],
      category: sampleCategories[id % sampleCategories.length],
      price: Math.floor(Math.random() * 1500) + 51,
      features: [
        sampleFeatures[id % sampleFeatures.length],
        sampleFeatures[(id + 1) % sampleFeatures.length],
        sampleFeatures[(id + 2) % sampleFeatures.length],
      ],
      rating: Math.floor(Math.random() * 3) + 3,
      stock: id % 5 !== 0,
      image: sampleImages[id % sampleImages.length],
    };
  }),
];


const FitnessFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 2000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(fitnessData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = fitnessData;

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
      maxPrice: 2000,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
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
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["FitPro", "ProRun", "ZenFlex", "IronCore"].map((brand) => (
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
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Strength", "Cardio", "Yoga"].map((cat) => (
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
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {[
              "Adjustable Weight",
              "Compact",
              "Bluetooth",
              "Non-Slip",
              "Eco-Friendly",
              "Steel Build",
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
            <h3 className="font-semibold mb-2 text-black">Price</h3>
            <input
              type="range"
              min="0"
              max="2000"
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
                <p className="text-lg font-bold text-black">
                  ${product.price}
                </p>
                <p className="text-sm">
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
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

export default FitnessFilters;
