"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const babyDeals = [
  {
    id: 1,
    name: "Baby Stroller",
    brand: "TinySteps",
    category: "Strollers",
    price: 199,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2148091548/photo/beautiful-smiling-baby-girl-on-a-white-bed-in-a-pink-onesie.webp?a=1&b=1&s=612x612&w=0&k=20&c=f5u42Liks2-swY2Mg-U1LQm5OuhJYRbWzv4W70IxNgM=",
    features: ["Lightweight", "Foldable", "Comfortable"],
  },
  {
    id: 2,
    name: "Soft Baby Blanket",
    brand: "CozyNest",
    category: "Blankets",
    price: 39,
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1367706491/photo/cute-baby-girl-lying-on-her-fathers-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=Us2mPdUwlxsi0iJme34oMHsEHH6zG4yJQY7PcYrQzaI=",
    features: ["Soft", "Hypoallergenic", "Warm"],
  },
  {
    id: 3,
    name: "Baby Bottle Set",
    brand: "FeedWell",
    category: "Feeding",
    price: 29,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["BPA Free", "Easy Clean", "Leak Proof"],
  },
  {
    id: 4,
    name: "Baby Walker",
    brand: "TinySteps",
    category: "Walkers",
    price: 85,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1617331140180-e8262094733a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Height", "Safe", "Sturdy"],
  },
  {
    id: 5,
    name: "Nursery Night Light",
    brand: "CozyNest",
    category: "Accessories",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Soft Glow", "Rechargeable", "Portable"],
  },
  {
    id: 6,
    name: "Diaper Bag",
    brand: "ParentEase",
    category: "Bags",
    price: 55,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Waterproof", "Multiple Compartments"],
  },
  {
    id: 7,
    name: "Baby Monitor",
    brand: "SafeHome",
    category: "Electronics",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Video", "Two-way Audio", "Night Vision"],
  },
  {
    id: 8,
    name: "Baby Bath Tub",
    brand: "TinySteps",
    category: "Bathing",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1567822781105-a80d1b601697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Non-slip", "Portable", "Easy Drain"],
  },
  {
    id: 9,
    name: "Organic Cotton Onesie",
    brand: "PureBaby",
    category: "Clothing",
    price: 25,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1552788960-65fcafe071a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Organic", "Soft", "Breathable"],
  },
  {
    id: 10,
    name: "Baby Car Seat",
    brand: "SafeRide",
    category: "Car Seats",
    price: 180,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1677655407676-6ddb0e67f2b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Crash Tested", "Easy Installation"],
  },
  {
    id: 11,
    name: "Teething Toy Set",
    brand: "HappyTeeth",
    category: "Toys",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1477239439998-839196943351?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Safe", "Non-toxic", "Colorful"],
  },
  {
    id: 12,
    name: "Baby Swing",
    brand: "TinySteps",
    category: "Swings",
    price: 110,
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1691438973177-cc200c2f7041?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Comfortable", "Battery Powered"],
  },
  {
    id: 13,
    name: "Muslin Swaddle Wraps",
    brand: "CozyNest",
    category: "Swaddles",
    price: 35,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1543346242-2b8e41fb91ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Breathable", "Soft", "Lightweight"],
  },
  {
    id: 14,
    name: "Baby Feeding Chair",
    brand: "ParentEase",
    category: "Furniture",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Adjustable", "Easy Clean"],
  },
  {
    id: 15,
    name: "Baby Thermometer",
    brand: "SafeHome",
    category: "Health",
    price: 29,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    features: ["Digital", "Fast", "Accurate"],
  },
  {
    id: 16,
    name: "Baby Safety Gates",
    brand: "SafeHome",
    category: "Safety",
    price: 60,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1735042575665-2ec73ef2a934?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    features: ["Sturdy", "Adjustable Width"],
  },
  {
    id: 17,
    name: "Pacifier Set",
    brand: "HappyTeeth",
    category: "Feeding",
    price: 12,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1588090644556-14707d0e886a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    features: ["BPA Free", "Soft Silicone"],
  },
  {
    id: 18,
    name: "Baby Diapers Pack",
    brand: "ParentEase",
    category: "Diapers",
    price: 40,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1725075087153-610264ca9cbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    features: ["Soft", "Absorbent", "Eco-friendly"],
  },
  {
    id: 19,
    name: "Baby Sunscreen",
    brand: "SafeCare",
    category: "Health",
    price: 14,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748079651740-df4a9cf47814?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    features: ["SPF 50", "Water Resistant"],
  },
  {
    id: 20,
    name: "Crib Mobile",
    brand: "CozyNest",
    category: "Accessories",
    price: 29,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1675622988617-793a6dac8778?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    features: ["Musical", "Colorful", "Movable"],
  },
  {
    id: 21,
    name: "Baby High Chair",
    brand: "ParentEase",
    category: "Furniture",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661427291649-c2e8586d2d5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    features: ["Adjustable", "Foldable"],
  },
  {
    id: 22,
    name: "Baby Sleep Sack",
    brand: "CozyNest",
    category: "Sleepwear",
    price: 38,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1708435341096-bd28541a1e60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    features: ["Soft", "Breathable"],
  },
  {
    id: 23,
    name: "Teething Necklace",
    brand: "HappyTeeth",
    category: "Toys",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1725075087109-5ee07f242436?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    features: ["Safe", "Non-toxic", "Stylish"],
  },
  {
    id: 24,
    name: "Baby Bottle Warmer",
    brand: "FeedWell",
    category: "Feeding",
    price: 25,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1549501602-52168bb8f653?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    features: ["Fast Heating", "Portable"],
  },
  {
    id: 25,
    name: "Baby Play Mat",
    brand: "TinySteps",
    category: "Toys",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1702214406651-e3f29e039449?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    features: ["Soft", "Colorful", "Easy to Clean"],
  },
  {
    id: 26,
    name: "Baby Carrier",
    brand: "ParentEase",
    category: "Accessories",
    price: 85,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1652501595862-1d06fe543544?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    features: ["Ergonomic", "Adjustable"],
  },
  {
    id: 27,
    name: "Baby Nail Clippers",
    brand: "SafeHome",
    category: "Health",
    price: 10,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1735042282381-06821667cf5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    features: ["Safe", "Easy Grip"],
  },
  {
    id: 28,
    name: "Baby Hooded Towel",
    brand: "CozyNest",
    category: "Bathing",
    price: 28,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1577568315884-9372fbdd39f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    features: ["Soft", "Absorbent", "Cute Design"],
  },
  {
    id: 29,
    name: "Baby Food Maker",
    brand: "FeedWell",
    category: "Feeding",
    price: 65,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1592059852026-d6ed580b8c79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    features: ["Easy Clean", "Multi-function"],
  },
  {
    id: 30,
    name: "Baby Soother",
    brand: "HappyTeeth",
    category: "Toys",
    price: 14,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1621311628158-9f9d5b4c2239?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
    features: ["Calming", "Soft", "Portable"],
  },
  {
    id: 31,
    name: "Baby Diaper Rash Cream",
    brand: "SafeCare",
    category: "Health",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748399998178-b95d91df385a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
    features: ["Soothing", "Fast Relief"],
  },
  {
    id: 32,
    name: "Baby Crib Bedding Set",
    brand: "CozyNest",
    category: "Furniture",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1648311203209-da34f7d0d800?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
    features: ["Soft", "Durable", "Machine Washable"],
  },
  {
    id: 33,
    name: "Baby Bottle Brush",
    brand: "FeedWell",
    category: "Feeding",
    price: 12,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1685235226830-195c9ea49d5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
    features: ["Easy Clean", "Durable"],
  },
  {
    id: 34,
    name: "Baby Activity Gym",
    brand: "TinySteps",
    category: "Toys",
    price: 55,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1599813177796-bfcad886bd23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
    features: ["Colorful", "Interactive"],
  },
  {
    id: 35,
    name: "Baby Pacifier Clip",
    brand: "HappyTeeth",
    category: "Accessories",
    price: 9,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1703716852963-e398ea5197f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
    features: ["Safe", "Durable"],
  },
  {
    id: 36,
    name: "Baby Food Storage Containers",
    brand: "FeedWell",
    category: "Feeding",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1592059852205-daaa8e7385db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
    features: ["BPA Free", "Stackable"],
  },
{
  id: 37,
  name: "Baby Carrier Wrap",
  brand: "ParentEase",
  category: "Accessories",
  price: 70,
  rating: 5,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1701673907118-8fb7566c4595?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  features: ["Ergonomic", "Adjustable", "Breathable"],
},
{
  id: 38,
  name: "Baby Spoon Set",
  brand: "FeedWell",
  category: "Feeding",
  price: 15,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1683358828227-e030564d83c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
  features: ["Soft Tips", "BPA Free", "Easy Grip"],
},
{
  id: 39,
  name: "Portable Baby Changing Pad",
  brand: "ParentEase",
  category: "Accessories",
  price: 25,
  rating: 5,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1701187715768-9777c23b854e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
  features: ["Waterproof", "Compact", "Easy Clean"],
},
{
  id: 40,
  name: "Baby Laundry Detergent",
  brand: "PureBaby",
  category: "Care",
  price: 18,
  rating: 5,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1582212742235-a2500f31cb39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Hypoallergenic", "Gentle", "Fragrance Free"],
},
{
  id: 41,
  name: "Crib Mobile Projector",
  brand: "CozyNest",
  category: "Accessories",
  price: 40,
  rating: 4,
  stock: true,
  image:
    "https://plus.unsplash.com/premium_photo-1661315470138-6b4a3d1a38ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Light Show", "Soothing Sounds", "Timer"],
},
{
  id: 42,
  name: "Infant Car Mirror",
  brand: "SafeRide",
  category: "Car Seats",
  price: 22,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1554684765-8f7175aeaf81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Shatterproof", "Wide Angle"],
},
{
  id: 43,
  name: "Baby Food Feeder",
  brand: "HappyTeeth",
  category: "Feeding",
  price: 14,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Safe Silicone", "Easy to Clean"],
},
{
  id: 44,
  name: "Baby Sleep Trainer Clock",
  brand: "SafeHome",
  category: "Health",
  price: 30,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1571211468362-33f20cb1982f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Color Indicators", "Sleep Sounds"],
},
{
  id: 45,
  name: "Baby Safety Outlet Covers",
  brand: "SafeHome",
  category: "Safety",
  price: 10,
  rating: 5,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1656338795365-f09fed3a304e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Durable", "Easy to Install"],
},
{
  id: 46,
  name: "Baby Hooded Bathrobe",
  brand: "CozyNest",
  category: "Bathing",
  price: 35,
  rating: 4,
  stock: true,
  image:
    "https://plus.unsplash.com/premium_photo-1664791136377-de8b16d6242f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Soft", "Absorbent", "Cute Design"],
},
{
  id: 47,
  name: "Baby Bouncer Seat",
  brand: "TinySteps",
  category: "Furniture",
  price: 75,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1685458249619-b78fe5ee7abe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJhYnl8ZW58MHx8MHx8fDA%3D",
  features: ["Vibrating", "Comfortable", "Portable"],
},
{
  id: 48,
  name: "Baby Stroller Organizer",
  brand: "ParentEase",
  category: "Accessories",
  price: 20,
  rating: 4,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1636830621251-8df7f6d34a02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxiYWJ5fGVufDB8fDB8fHww",
  features: ["Multiple Pockets", "Waterproof"],
},
];

const BabyFeaturedDeals = () => {
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

  const totalSlides = Math.ceil(babyDeals.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Divide deals into slides
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(babyDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Baby Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
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

        {/* Slides Wrapper */}
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
              {items.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Stock Badge */}
                    {deal.stock ? (
                      <span className="absolute top-2 left-2 bg-black text-xs font-bold px-2 py-1 rounded-md">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-black text-xs font-bold px-2 py-1 rounded-md">
                        Out of Stock
                      </span>
                    )}
                    {/* Category Badge */}
                    <span className="absolute top-2 right-2 bg-black text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">Brand: {deal.brand}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < deal.rating ? "text-black" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-black">${deal.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
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

        {/* Right Arrow */}
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

export default BabyFeaturedDeals;
