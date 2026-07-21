"use client";
import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";

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


const ArtProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(artData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(artData.slice(0, newCount));
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
      sortedProducts = artData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Art Products Collection</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-black font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200"
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
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
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
                  <div className="absolute inset-0 bg-white/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-gray-900">
                      <FaHeart className="cursor-pointer hover:text-black" />
                      <FaEye className="cursor-pointer hover:text-black" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-black">${item.price}</p>
                  <span className="text-sm text-gray-700">{item.rating}★</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 text-xs text-gray-600 mt-2">
                  {(item.features || []).slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <p className={`text-sm font-semibold mt-2 ${item.stock ? "text-black" : "text-black"}`}>
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {visibleCount < artData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtProductGrid;
