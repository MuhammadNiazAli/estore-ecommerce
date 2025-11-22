'use client'
import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";

export const babyData = [
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
{
  id: 49,
  name: "Soft Baby Washcloths",
  brand: "CozyNest",
  category: "Bathing",
  price: 15,
  rating: 5,
  stock: true,
  image:
    "https://images.unsplash.com/photo-1561685931-908efcfdf939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxiYWJ5fGVufDB8fDB8fHww",
  features: ["Gentle", "Absorbent", "Durable"],
},
{
  id: 50,
  name: "Baby Feeding Bibs",
  brand: "FeedWell",
  category: "Feeding",
  price: 18,
  rating: 4,
  stock: true,
  image:
    "https://plus.unsplash.com/premium_photo-1711638374362-a26eb6bbb281?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxiYWJ5fGVufDB8fDB8fHww",
  features: ["Waterproof", "Easy Clean"],
},

];

const BabyProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(babyData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(babyData.slice(0, newCount));
  };

  const handleSort = (value) => {
    setSortOption(value);
    let sortedProducts = [...products];
    if (value === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else {
      sortedProducts = babyData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Baby Products Collection</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-yellow-400 font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700"
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-white">
                      <FaHeart className="cursor-pointer hover:text-yellow-400" />
                      <FaEye className="cursor-pointer hover:text-yellow-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-yellow-400">${item.price}</p>
                  <span className="text-sm text-gray-300">{item.rating}★</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-2">
                  {(item.features || []).slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-gray-700 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <p
                  className={`text-sm font-semibold mt-2 ${
                    item.stock ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {visibleCount < babyData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BabyProductGrid;
