"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Ceramic Flower Pot",
    brand: "GreenLeaf",
    category: "Pots",
    price: 25,
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/2169690914/photo/nature-themed-background-image-with-copy-space-for-presentation-and-text-depicting-norway.webp?a=1&b=1&s=612x612&w=0&k=20&c=mXRz2cmVGYOaXJVy4J66z1mFnxjJ6NpT5D8M0jxHD9I=",
    features: ["Durable", "Elegant", "Indoor/Outdoor"],
  },
  {
    id: 2,
    name: "Watering Can",
    brand: "GardenPro",
    category: "Tools",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2169690914/photo/nature-themed-background-image-with-copy-space-for-presentation-and-text-depicting-norway.webp?a=1&b=1&s=612x612&w=0&k=20&c=mXRz2cmVGYOaXJVy4J66z1mFnxjJ6NpT5D8M0jxHD9I=",
    features: ["Ergonomic", "Lightweight"],
  },
  {
    id: 3,
    name: "Indoor Plant Stand",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 40,
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/1322729818/photo/top-down-aerial-view-of-deciduous-trees-in-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=kIU8yrPWg7Jrx6vvIkFstWJYzQQbAObSuSIF9pWiqyA=",
    features: ["Wooden", "Modern Design"],
  },
  {
    id: 4,
    name: "Gardening Gloves",
    brand: "NatureCare",
    category: "Accessories",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Breathable", "Comfortable Grip"],
  },
  {
    id: 5,
    name: "Succulent Plant Pack",
    brand: "GreenLeaf",
    category: "Plants",
    price: 35,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Low Maintenance", "Decorative"],
  },
  {
    id: 6,
    name: "Hanging Flower Basket",
    brand: "BloomNest",
    category: "Pots",
    price: 28,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Rust-Resistant", "Perfect for Balconies"],
  },
  {
    id: 7,
    name: "Metal Water Sprayer",
    brand: "GardenPro",
    category: "Tools",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Adjustable Nozzle", "Durable Steel"],
  },
  {
    id: 8,
    name: "Garden Kneeling Pad",
    brand: "NatureCare",
    category: "Accessories",
    price: 18,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Comfort Foam", "Waterproof"],
  },
  {
    id: 9,
    name: "Terracotta Clay Pots (Set of 3)",
    brand: "GreenLeaf",
    category: "Pots",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Breathable Clay", "Natural Finish"],
  },
  {
    id: 10,
    name: "Mini Indoor Herb Garden Kit",
    brand: "UrbanGarden",
    category: "Plants",
    price: 45,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Grow Basil & Mint", "Eco-Friendly"],
  },
  {
    id: 11,
    name: "Outdoor Rattan Plant Stand",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 60,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Weather Resistant", "Stylish"],
  },
  {
    id: 12,
    name: "Stainless Steel Pruning Shears",
    brand: "GardenPro",
    category: "Tools",
    price: 20,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Sharp Blades", "Rust Resistant"],
  },
  {
    id: 13,
    name: "Organic Potting Soil (10L)",
    brand: "GreenLeaf",
    category: "Soil",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0fGVufDB8fDB8fHww",
    features: ["Rich in Nutrients", "Eco-Friendly"],
  },
  {
    id: 14,
    name: "Plastic Self-Watering Pot",
    brand: "BloomNest",
    category: "Pots",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Self-Watering System", "Lightweight"],
  },
  {
    id: 15,
    name: "Hose Reel with 50ft Hose",
    brand: "GardenPro",
    category: "Tools",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1667121496100-ca96e50fbb29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Easy Winding", "Leak Proof"],
  },
  {
    id: 16,
    name: "Bamboo Plant Trellis",
    brand: "EcoGrow",
    category: "Accessories",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Eco-friendly Bamboo", "Easy to Assemble"],
  },
  {
    id: 17,
    name: "Adjustable Garden Sprinkler",
    brand: "GardenPro",
    category: "Tools",
    price: 30,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["360 Degree Coverage", "Durable Plastic"],
  },
  {
    id: 18,
    name: "Ceramic Herb Planters Set",
    brand: "GreenLeaf",
    category: "Pots",
    price: 38,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hand-Painted", "Compact Size"],
  },
  {
    id: 19,
    name: "Wooden Garden Bench",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 120,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1673736135967-1c9aaa4aa7f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Weather Resistant", "Classic Design"],
  },
  {
    id: 20,
    name: "Heavy Duty Garden Rake",
    brand: "NatureCare",
    category: "Tools",
    price: 28,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1668110864450-48a6591c3a22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Stainless Steel Tines", "Comfort Grip Handle"],
  },
  {
    id: 21,
    name: "Outdoor Plant Grow Light",
    brand: "BloomNest",
    category: "Accessories",
    price: 45,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1719934921343-b89f54604cab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Full Spectrum LEDs", "Energy Efficient"],
  },
  {
    id: 22,
    name: "Hanging Macrame Plant Holder",
    brand: "EcoGrow",
    category: "Accessories",
    price: 27,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1446553009413-64b9505cacb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handmade Cotton", "Boho Style"],
  },
  {
    id: 23,
    name: "Compost Bin",
    brand: "GreenLeaf",
    category: "Accessories",
    price: 50,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669741908175-eb029fbc350f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Odor Controlled", "Durable Plastic"],
  },
  {
    id: 24,
    name: "Plastic Garden Hose (75ft)",
    brand: "GardenPro",
    category: "Tools",
    price: 40,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1599220144359-d4b723bd476d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Flexible", "UV Resistant"],
  },
  {
    id: 25,
    name: "Garden Tool Organizer Bag",
    brand: "NatureCare",
    category: "Accessories",
    price: 35,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1514735555661-d3278da9d5ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Multiple Pockets", "Waterproof Material"],
  },
  {
    id: 26,
    name: "Outdoor Solar Garden Lights (Set of 6)",
    brand: "BloomNest",
    category: "Accessories",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663946899728-39b7b401535e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Solar Powered", "Weatherproof"],
  },
  {
    id: 27,
    name: "Decorative Garden Statues",
    brand: "UrbanGarden",
    category: "Accessories",
    price: 65,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1567699631772-21be4f5ef2ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Weather Resistant", "Hand Painted"],
  },
  {
    id: 28,
    name: "Plastic Seedling Trays (Set of 10)",
    brand: "GreenLeaf",
    category: "Tools",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Reusable", "Lightweight"],
  },
  {
    id: 29,
    name: "Adjustable Garden Shears",
    brand: "GardenPro",
    category: "Tools",
    price: 25,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1579507982705-28a15a017d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Ergonomic", "Sharp Stainless Steel"],
  },
  {
    id: 30,
    name: "Large Outdoor Planter Box",
    brand: "UrbanGarden",
    category: "Pots",
    price: 85,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Weatherproof Wood", "Spacious"],
  },
  {
    id: 31,
    name: "Gardening Apron with Pockets",
    brand: "NatureCare",
    category: "Accessories",
    price: 20,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663953003855-8dc706b24154?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    features: ["Water Resistant", "Adjustable Strap"],
  },
  {
    id: 32,
    name: "Succulent Terrarium Kit",
    brand: "GreenLeaf",
    category: "Plants",
    price: 50,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1612112364204-9b77878bc827?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    features: ["Glass Container", "Low Maintenance Plants"],
  },
  {
    id: 33,
    name: "Automatic Drip Irrigation Kit",
    brand: "GardenPro",
    category: "Tools",
    price: 65,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    features: ["Water Efficient", "Easy Installation"],
  },
  {
    id: 34,
    name: "Decorative Plant Markers",
    brand: "BloomNest",
    category: "Accessories",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww",
    features: ["Reusable", "Stylish Design"],
  },
  {
    id: 35,
    name: "Large Garden Storage Shed",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 300,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
    features: ["Weatherproof", "Spacious"],
  },
  {
    id: 36,
    name: "Ceramic Hanging Planters (Set of 2)",
    brand: "GreenLeaf",
    category: "Pots",
    price: 42,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
    features: ["Durable", "Hand Painted"],
  },
  {
    id: 37,
    name: "Heavy Duty Garden Trowel",
    brand: "GardenPro",
    category: "Tools",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Ergonomic Handle", "Rust Resistant"],
  },
  {
    id: 38,
    name: "Natural Fertilizer (5kg)",
    brand: "NatureCare",
    category: "Soil",
    price: 28,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Organic", "Long Lasting"],
  },
  {
    id: 39,
    name: "Plastic Garden Cart",
    brand: "BloomNest",
    category: "Tools",
    price: 60,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Large Capacity", "Durable Wheels"],
  },
  {
    id: 40,
    name: "Indoor Bonsai Tree",
    brand: "GreenLeaf",
    category: "Plants",
    price: 70,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Low Maintenance", "Decorative"],
  },
  {
    id: 41,
    name: "Wooden Raised Garden Bed",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 150,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Durable Pine Wood", "Easy Assembly"],
  },
  {
    id: 42,
    name: "Gardening Tool Set (7 Pieces)",
    brand: "GardenPro",
    category: "Tools",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Ergonomic", "Rust Resistant"],
  },
  {
    id: 43,
    name: "Decorative Pebbles for Garden",
    brand: "BloomNest",
    category: "Accessories",
    price: 20,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Natural Look", "Weatherproof"],
  },
  {
    id: 44,
    name: "Garden Sprayer Backpack",
    brand: "NatureCare",
    category: "Tools",
    price: 75,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Straps", "High Capacity"],
  },
  {
    id: 45,
    name: "Outdoor Plant Protective Netting",
    brand: "EcoGrow",
    category: "Accessories",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1719943510871-7831aeef9ab6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["UV Resistant", "Easy to Install"],
  },
  {
    id: 46,
    name: "Herb Garden Seed Collection",
    brand: "GreenLeaf",
    category: "Plants",
    price: 20,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1528994618239-4d83bbdb7a0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Non-GMO", "Easy to Grow"],
  },
  {
    id: 47,
    name: "Outdoor Garden Umbrella",
    brand: "UrbanGarden",
    category: "Furniture",
    price: 85,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["UV Protection", "Sturdy Frame"],
  },
  {
    id: 48,
    name: "Plant Propagation Station",
    brand: "BloomNest",
    category: "Accessories",
    price: 40,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1538666986359-7be4d223e7de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    features: ["Glass Vessels", "Modern Design"],
  },
  {
    id: 49,
    name: "Foldable Garden Stool",
    brand: "NatureCare",
    category: "Furniture",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1601314194529-50cea5e956e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    features: ["Lightweight", "Comfortable"],
  },
  {
    id: 50,
    name: "Garden Soil Moisture Meter",
    brand: "GardenPro",
    category: "Tools",
    price: 25,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1711246567310-b93449406052?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    features: ["Accurate Readings", "Easy to Use"],
  },
];

const GardenAccessoriesSection = () => {
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

export default GardenAccessoriesSection;
