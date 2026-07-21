"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
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
  {
    id: 46,
    name: "Handwoven Basket",
    brand: "ThreadWorks",
    category: "Textiles",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1637140945341-f28ada987326?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fDNEfGVufDB8fDB8fHww",
    features: ["Natural", "Eco-Friendly", "Durable"],
  },
  {
    id: 47,
    name: "Sculpted Wood Art",
    brand: "WoodWorks",
    category: "Sculptures",
    price: 650,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1719235903846-72be00464877?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fDNEfGVufDB8fDB8fHww",
    features: ["Hand Carved", "Smooth Finish", "Unique"],
  },
  {
    id: 48,
    name: "Custom Calligraphy",
    brand: "InkMasters",
    category: "Prints",
    price: 200,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1634654284517-dd5cd3d04f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fDNEfGVufDB8fDB8fHww",
    features: ["Personalized", "Elegant", "Framed"],
  },
  {
    id: 49,
    name: "Decorative Metal Vase",
    brand: "ForgeArts",
    category: "Decor",
    price: 180,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1669968910904-c4738ba5be6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fDNEfGVufDB8fDB8fHww",
    features: ["Rust Resistant", "Handcrafted", "Polished"],
  },
  {
    id: 50,
    name: "Fine Art Photography",
    brand: "LensMasters",
    category: "Photography",
    price: 530,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1641984790242-d8aa477d306c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHwzRHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Limited Edition", "High Resolution", "Signed"],
  },
];

const ArtAccessoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleAccessories = accessories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(accessories.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 px-4 my-[-30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Clothing Accessories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleAccessories.map(({ id, name, price, rating, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg border border-amber-700 flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_15px_3px_rgba(202,138,4,0.7)]"
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
                      <FaStar key={i} className="text-amber-600" />
                    ) : (
                      <FaRegStar key={i} className="text-amber-800" />
                    )
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xl font-bold">{price}</p>

                  <button
                    aria-label={`Add ${name} to cart`}
                    className="bg-amber-700 text-gray-900 p-2 rounded-md hover:bg-amber-600 transition"
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
              className="px-6 py-3 bg-amber-700 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtAccessoriesSection;
