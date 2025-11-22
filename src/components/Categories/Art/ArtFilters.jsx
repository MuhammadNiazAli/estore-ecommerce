"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample art products data (replace or expand as needed)
export const artData = [
  {
    id: 1,
    name: "Abstract Canvas Painting",
    brand: "Artify",
    category: "Paintings",
    price: 450,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1654916078/photo/abstract-rough-colorful-multicolored-art-on-canvas.webp?a=1&b=1&s=612x612&w=0&k=20&c=_rbxN0I-o9dz5MDfmkFBCSQnIa9ozcxDjcBah6qNNaw=",
    features: ["Original", "Vibrant Colors", "Handcrafted"],
  },
  {
    id: 2,
    name: "Modern Sculpture",
    brand: "Sculpta",
    category: "Sculptures",
    price: 850,
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1308062234/photo/unrecognizable-womans-hand-paints-ceramics.webp?a=1&b=1&s=612x612&w=0&k=20&c=yMtHi4yB-4N-9f7JZLB0UdYD18Qv5WrA7ZaJAMgODpY=",
    features: ["Unique Design", "Limited Edition", "Polished Finish"],
  },
  {
    id: 3,
    name: "Watercolor Landscape",
    brand: "BrushStrokes",
    category: "Paintings",
    price: 299,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1664272436668-78437b92929e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fHww",
    features: ["Soft Hues", "Frame Included", "Signed"],
  },
  {
    id: 4,
    name: "Ceramic Vase",
    brand: "ClayCraft",
    category: "Decor",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww",
    features: ["Handmade", "Glazed Finish", "Durable"],
  },
  {
    id: 5,
    name: "Vintage Poster Print",
    brand: "RetroArt",
    category: "Prints",
    price: 65,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682125164600-e7493508e496?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww",
    features: ["Limited Run", "High Quality Paper", "Ready to Frame"],
  },
  {
    id: 6,
    name: "Oil Portrait",
    brand: "MasterPieces",
    category: "Paintings",
    price: 1200,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww",
    features: ["Detailed", "Classic Style", "Signed"],
  },
  {
    id: 7,
    name: "Minimalist Line Art",
    brand: "SketchLab",
    category: "Drawings",
    price: 210,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww",
    features: ["Black & White", "Framed", "Modern"],
  },
  {
    id: 8,
    name: "Handwoven Textile Art",
    brand: "ThreadWorks",
    category: "Textiles",
    price: 340,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww",
    features: ["Organic Cotton", "Eco-Friendly", "Colorful"],
  },
  {
    id: 9,
    name: "Bronze Figurine",
    brand: "MetalMakers",
    category: "Sculptures",
    price: 720,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    features: ["Antique Finish", "Solid", "Detailed"],
  },
  {
    id: 10,
    name: "Calligraphy Wall Art",
    brand: "InkMasters",
    category: "Prints",
    price: 150,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handcrafted", "Inspirational Quote", "Elegant"],
  },
  {
    id: 11,
    name: "Glass Mosaic Panel",
    brand: "ColorSplash",
    category: "Decor",
    price: 630,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1675813863340-b7e84c4a1fb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fHww",
    features: ["Handmade", "Vivid Colors", "Durable"],
  },
  {
    id: 12,
    name: "Digital Art Print",
    brand: "PixelWorks",
    category: "Prints",
    price: 120,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Limited Edition", "Signed", "Glossy Finish"],
  },
  {
    id: 13,
    name: "Hand-Carved Wooden Mask",
    brand: "WoodWorks",
    category: "Decor",
    price: 480,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Cultural", "Unique", "Handcrafted"],
  },
  {
    id: 14,
    name: "Contemporary Photography",
    brand: "SnapArt",
    category: "Photography",
    price: 350,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1676668708126-39b12a0e9d96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["High Resolution", "Limited Edition", "Framed"],
  },
  {
    id: 15,
    name: "Metal Wall Sculpture",
    brand: "ForgeArts",
    category: "Sculptures",
    price: 670,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1471666875520-c75081f42081?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Industrial Style", "Rust Resistant", "Large Size"],
  },
  {
    id: 16,
    name: "Handmade Ceramic Bowl",
    brand: "ClayWorks",
    category: "Decor",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Dishwasher Safe", "Glazed Finish", "Rustic"],
  },
  {
    id: 17,
    name: "Acrylic Abstract",
    brand: "BrushStrokes",
    category: "Paintings",
    price: 420,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Bright Colors", "Bold", "Textured"],
  },
  {
    id: 18,
    name: "Handcrafted Leather Journal",
    brand: "WriteArt",
    category: "Stationery",
    price: 80,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Durable", "Handstitched", "Vintage Look"],
  },
  {
    id: 19,
    name: "Hand-painted Ceramic Tiles",
    brand: "TileCraft",
    category: "Decor",
    price: 230,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Glossy", "Patterned", "Handmade"],
  },
  {
    id: 20,
    name: "Limited Edition Lithograph",
    brand: "PrintWorks",
    category: "Prints",
    price: 550,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Signed", "Numbered", "Collector's Item"],
  },
  {
    id: 21,
    name: "Oil Painting - Seascape",
    brand: "MasterPieces",
    category: "Paintings",
    price: 900,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Classic", "Vibrant Colors", "Framed"],
  },
  {
    id: 22,
    name: "Glass Art Sculpture",
    brand: "GlassWorks",
    category: "Sculptures",
    price: 700,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1577084381314-cae9920e6871?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Delicate", "Hand Blown", "Unique"],
  },
  {
    id: 23,
    name: "Modern Art Print",
    brand: "PixelWorks",
    category: "Prints",
    price: 180,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1663937576055-a1d89f3895ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Bright", "Matte Finish", "Signed"],
  },
  {
    id: 24,
    name: "Contemporary Oil Painting",
    brand: "BrushStrokes",
    category: "Paintings",
    price: 620,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1548811579-017cf2a4268b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Bold", "Expressive", "Textured"],
  },
  {
    id: 25,
    name: "Artistic Wall Clock",
    brand: "TimeCraft",
    category: "Decor",
    price: 135,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664640458839-000c310875fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Functional", "Unique Design", "Silent Mechanism"],
  },
  {
    id: 26,
    name: "Hand-painted Canvas",
    brand: "Artify",
    category: "Paintings",
    price: 480,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1643780668909-580822430155?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M0R8ZW58MHx8MHx8fDA%3D",
    features: ["Original", "Vibrant", "Signed"],
  },
  {
    id: 27,
    name: "Metal Wall Art",
    brand: "ForgeArts",
    category: "Sculptures",
    price: 640,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1718202248160-59558af70521?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8M0R8ZW58MHx8MHx8fDA%3D",
    features: ["Industrial", "Rust Resistant", "Large"],
  },
  {
    id: 28,
    name: "Vintage Poster",
    brand: "RetroArt",
    category: "Prints",
    price: 70,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1697498435309-2c7864cfd607?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDNEfGVufDB8fDB8fHww",
    features: ["Limited", "High Quality", "Ready to Frame"],
  },
  {
    id: 29,
    name: "Handcrafted Jewelry Box",
    brand: "Crafted",
    category: "Decor",
    price: 190,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1718202248232-0cdbc15d29b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M0R8ZW58MHx8MHx8fDA%3D",
    features: ["Wooden", "Elegant", "Handmade"],
  },
  {
    id: 30,
    name: "Modern Photography Print",
    brand: "SnapArt",
    category: "Photography",
    price: 320,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDNEfGVufDB8fDB8fHww",
    features: ["High Res", "Limited", "Framed"],
  },
  {
    id: 31,
    name: "Abstract Oil Painting",
    brand: "Artify",
    category: "Paintings",
    price: 560,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678986718987-76f0b9357e0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNEfGVufDB8fDB8fHww",
    features: ["Textured", "Vibrant", "Original"],
  },
  {
    id: 32,
    name: "Wooden Wall Sculpture",
    brand: "WoodWorks",
    category: "Sculptures",
    price: 580,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1668090956134-7eb5fc42733c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fDNEfGVufDB8fDB8fHww",
    features: ["Carved", "Durable", "Unique"],
  },
  {
    id: 33,
    name: "Handmade Paper Art",
    brand: "PaperCraft",
    category: "Decor",
    price: 140,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1710962184909-f9f8dc2c9f5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fDNEfGVufDB8fDB8fHww",
    features: ["Delicate", "Framed", "Detailed"],
  },
  {
    id: 34,
    name: "Photography Landscape",
    brand: "LensMasters",
    category: "Photography",
    price: 410,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1651876360196-a8c378bfca7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fDNEfGVufDB8fDB8fHww",
    features: ["High Resolution", "Limited Edition", "Matte"],
  },
  {
    id: 35,
    name: "Colorful Acrylic Painting",
    brand: "BrushStrokes",
    category: "Paintings",
    price: 390,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1657456621506-76924543dbca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fDNEfGVufDB8fDB8fHww",
    features: ["Vivid", "Bold", "Textured"],
  },
  {
    id: 36,
    name: "Metallic Wall Decor",
    brand: "ForgeArts",
    category: "Sculptures",
    price: 620,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1693239619212-404502112127?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fDNEfGVufDB8fDB8fHww",
    features: ["Rust Resistant", "Modern", "Large"],
  },
  {
    id: 37,
    name: "Canvas Landscape Painting",
    brand: "Artify",
    category: "Paintings",
    price: 470,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1695196312518-b1223a8298b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNEfGVufDB8fDB8fHww",
    features: ["Framed", "Vibrant Colors", "Original"],
  },
  {
    id: 38,
    name: "Ceramic Planter",
    brand: "ClayCraft",
    category: "Decor",
    price: 130,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579781403313-56447cb42199?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fDNEfGVufDB8fDB8fHww",
    features: ["Handmade", "Durable", "Glazed Finish"],
  },
  {
    id: 39,
    name: "Signed Photography Print",
    brand: "SnapArt",
    category: "Photography",
    price: 280,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1682846133858-c0599bc99874?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fDNEfGVufDB8fDB8fHww",
    features: ["Limited Edition", "High Res", "Framed"],
  },
  {
    id: 40,
    name: "Abstract Wall Hanging",
    brand: "ThreadWorks",
    category: "Textiles",
    price: 220,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1653549892896-dde02867edee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fDNEfGVufDB8fDB8fHww",
    features: ["Colorful", "Handwoven", "Eco-Friendly"],
  },
  {
    id: 41,
    name: "Custom Portrait Sketch",
    brand: "SketchLab",
    category: "Drawings",
    price: 300,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1696550580343-4f339143b465?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fDNEfGVufDB8fDB8fHww",
    features: ["Personalized", "Framed", "Detailed"],
  },
  {
    id: 42,
    name: "Decorative Glass Bowl",
    brand: "GlassWorks",
    category: "Decor",
    price: 160,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1700001212542-d87797815337?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fDNEfGVufDB8fDB8fHww",
    features: ["Hand Blown", "Unique", "Colorful"],
  },
  {
    id: 43,
    name: "Vintage Art Print",
    brand: "RetroArt",
    category: "Prints",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fDNEfGVufDB8fDB8fHww",
    features: ["Limited", "High Quality", "Framed"],
  },
  {
    id: 44,
    name: "Oil Painting - Floral",
    brand: "MasterPieces",
    category: "Paintings",
    price: 720,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1644318295821-12c4ddf2a36e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fDNEfGVufDB8fDB8fHww",
    features: ["Detailed", "Vibrant", "Signed"],
  },
  {
    id: 45,
    name: "Contemporary Mixed Media",
    brand: "Artify",
    category: "Paintings",
    price: 540,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1712820504667-8952366b02d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fDNEfGVufDB8fDB8fHww",
    features: ["Textured", "Bold", "Original"],
  },
];

const ArtFilters = () => {
  // Filter state
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(artData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filtering logic
  useEffect(() => {
    let result = artData;

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

  // Toggle checkbox filters
  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newArr = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newArr };
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      brand: [],
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 1000,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  // Define brands, categories, features for art products
  const brands = ["Artify", "ClayCraft", "PrintHouse", "SculptureLab"];
  const categories = ["Paintings", "Sculptures", "Prints", "Photography", "Decor"];
  const features = [
    "Original",
    "Limited",
    "Framed",
    "Signed",
    "Handmade",
    "Abstract",
    "Polished",
    "Matte Finish",
  ];

  return (
    <div className="bg-gray-900 text-white py-8 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
            aria-label="Open filters"
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-gray-800 z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
          aria-label="Product filters"
        >
          {/* Close Button Mobile */}
          <button
            className="absolute top-4 right-4 text-yellow-400 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
            aria-label="Close filters"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-yellow-400 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search art products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-700 bg-gray-900 rounded-md px-3 py-2 mb-4 text-white"
            aria-label="Search art products"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-yellow-400">Brand</h3>
            {brands.map((brand) => (
              <label key={brand} className="block mb-1 text-sm cursor-pointer">
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
            <h3 className="font-semibold mb-2 text-yellow-400">Category</h3>
            {categories.map((cat) => (
              <label key={cat} className="block mb-1 text-sm cursor-pointer">
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
            <h3 className="font-semibold mb-2 text-yellow-400">Features</h3>
            {features.map((feature) => (
              <label key={feature} className="block mb-1 text-sm cursor-pointer">
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
            <h3 className="font-semibold mb-2 text-yellow-400">Price</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
              aria-valuemin={0}
              aria-valuemax={1000}
              aria-valuenow={filters.maxPrice}
            />
            <p className="text-sm">Up to ${filters.maxPrice}</p>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-yellow-400">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-yellow-400 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
                aria-pressed={filters.rating === r}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-yellow-400">Availability</h3>
            <label className="block cursor-pointer">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              In Stock
            </label>
            <label className="block cursor-pointer">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === false}
                onChange={() => setFilters({ ...filters, stock: false })}
                className="mr-2"
              />
              Out of Stock
            </label>
            <label className="block cursor-pointer">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === null}
                onChange={() => setFilters({ ...filters, stock: null })}
                className="mr-2"
              />
              All
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
              className="bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded"
              aria-label="Sort products"
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
                className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                  loading="lazy"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.brand}</p>
                <p className="text-lg font-bold text-yellow-400">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
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
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
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

export default ArtFilters;
