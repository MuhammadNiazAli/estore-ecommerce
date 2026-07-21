"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
{
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    brand: "SoundCore",
    category: "Headphones",
    price: 199,
    features: ["Bluetooth 5.0", "Active Noise Canceling", "30h Battery"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1620578077612-b0fa340237de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    name: "Premium Studio Microphone",
    brand: "AudioTech",
    category: "Microphone",
    price: 149,
    features: ["Cardioid Pattern", "USB Plug & Play", "Pop Filter Included"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1684166220115-8d16d2218304?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    name: "Compact Bluetooth Speaker",
    brand: "JBL Sound",
    category: "Speaker",
    price: 79,
    features: ["Portable", "Waterproof", "10h Battery"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1699720213476-0e63f5a4d21c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    name: "Hi-Res Over-Ear Headphones",
    brand: "Sony",
    category: "Headphones",
    price: 249,
    features: ["High-Resolution Audio", "Comfort Fit", "Durable Build"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666299670438-6ea55a614b0c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    brand: "AirBeats",
    category: "Earbuds",
    price: 99,
    features: ["True Wireless", "Fast Charging", "Noise Isolation"],
    rating: 4,
    stock: false,
    image: "https://images.unsplash.com/photo-1548722104-22ce4330efeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 6,
    name: "Smart Soundbar with Subwoofer",
    brand: "Bose",
    category: "Soundbar",
    price: 399,
    features: ["Dolby Atmos", "Wireless Subwoofer", "Voice Assistant"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1631353053717-a18995e9e85b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 7,
    name: "USB Podcast Microphone",
    brand: "Blue Yeti",
    category: "Microphone",
    price: 129,
    features: ["Plug & Play", "Multiple Patterns", "Professional Quality"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723618908998-640f9f8f4640?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 8,
    name: "Home Theater Speaker System",
    brand: "Klipsch",
    category: "Speaker System",
    price: 599,
    features: ["5.1 Surround Sound", "Wireless Subwoofer", "Premium Audio"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723618908998-640f9f8f4640?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 9,
    name: "Gaming Headset with RGB",
    brand: "HyperX",
    category: "Headphones",
    price: 89,
    features: ["Noise Cancelling Mic", "Surround Sound", "LED RGB"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1651436823325-fc3f24049fba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    id: 10,
    name: "High-Fidelity Vinyl Turntable",
    brand: "Audio-Technica",
    category: "Turntable",
    price: 349,
    features: ["Direct Drive", "USB Output", "Premium Cartridge"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1687832783495-58d8875128ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 11,
    name: "Wireless Karaoke Microphone",
    brand: "SingPro",
    category: "Microphone",
    price: 59,
    features: ["Built-in Speaker", "Bluetooth", "Echo Effect"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1647244038173-bba1df3762df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 12,
    name: "Portable PA System",
    brand: "Behringer",
    category: "Speaker",
    price: 299,
    features: ["Wireless Mics", "Bluetooth", "Rechargeable Battery"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1613921825578-065ce920d1ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
  {
    id: 13,
    name: "True Wireless Sports Earbuds",
    brand: "Jabra Elite",
    category: "Earbuds",
    price: 129,
    features: ["Sweat Resistant", "Secure Fit", "Fast Charging"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1620578077783-33e254311182?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  },
  {
    id: 14,
    name: "Studio Monitor Speakers",
    brand: "KRK Rokit",
    category: "Speakers",
    price: 399,
    features: ["Flat Response", "Bass Port", "Balanced Inputs"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1639140730904-b9d7d7d40fa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Professional DJ Headphones",
    brand: "Pioneer",
    category: "Headphones",
    price: 179,
    features: ["Swivel Cups", "High SPL", "Detachable Cable"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1750745136754-69696014f253?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
  },
  {
    id: 16,
    name: "Wireless Gaming Soundbar",
    brand: "Razer",
    category: "Soundbar",
    price: 249,
    features: ["THX Spatial", "Bluetooth", "LED Lighting"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1657367098170-6d7f57a88667?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Conference Room Speakerphone",
    brand: "Polycom",
    category: "Speakerphone",
    price: 499,
    features: ["360° Mic Pickup", "Noise Reduction", "USB & Bluetooth"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1701065893190-46f44657fbee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
  {
    id: 18,
    name: "Smart Wireless Earbuds Pro",
    brand: "Samsung",
    category: "Earbuds",
    price: 179,
    features: ["Active Noise Canceling", "Wireless Charging", "IPX7"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1595432541891-a461100d3054?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Luxury Wooden Speaker",
    brand: "Marshall",
    category: "Speaker",
    price: 349,
    features: ["Classic Design", "Bluetooth 5.0", "Rich Bass"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1669485767586-530df54e91e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 20,
    name: "Noise-Canceling Office Headset",
    brand: "Logitech",
    category: "Headset",
    price: 129,
    features: ["Noise Reduction Mic", "USB Connection", "Comfort Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 21,
    name: "Wireless Clip-On Microphone",
    brand: "Rode",
    category: "Microphone",
    price: 229,
    features: ["Clip-On", "Noise Filtering", "USB-C Charging"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 22,
    name: "360° Smart Speaker",
    brand: "Amazon Echo",
    category: "Smart Speaker",
    price: 129,
    features: ["Voice Assistant", "Multi-Room Audio", "Wi-Fi Enabled"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1710736885730-629394d17cc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 23,
    name: "Studio Recording Bundle",
    brand: "Focusrite",
    category: "Recording Kit",
    price: 299,
    features: ["Audio Interface", "Mic", "Headphones"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074777-a7c40926f5c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 24,
    name: "Wireless Open-Ear Headphones",
    brand: "AfterShokz",
    category: "Headphones",
    price: 159,
    features: ["Bone Conduction", "Bluetooth 5.1", "Sweatproof"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074888-c8577334c765?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 25,
    name: "Compact Wireless Speaker",
    brand: "Bose",
    category: "Speaker",
    price: 179,
    features: ["Portable", "Rich Bass", "Long Battery Life"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677595133694-04df5f436004?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 26,
    name: "Professional Shotgun Microphone",
    brand: "Sennheiser",
    category: "Microphone",
    price: 349,
    features: ["Directional Audio", "Windshield", "XLR Output"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1725408023075-e6570bb675d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 27,
    name: "Premium Wireless Earbuds Max",
    brand: "Apple",
    category: "Earbuds",
    price: 249,
    features: ["Active Noise Cancelling", "Transparency Mode", "Adaptive EQ"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1672837631047-d2a292875015?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  },
  {
    id: 28,
    name: "Retro Wooden Bluetooth Speaker",
    brand: "Marshall",
    category: "Speaker",
    price: 299,
    features: ["Vintage Design", "Powerful Bass", "Multi-Device Pairing"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677155842676-8e13e7053844?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Noise-Isolating Studio Headphones",
    brand: "AKG",
    category: "Headphones",
    price: 139,
    features: ["Closed-Back", "Comfort Padding", "High Fidelity"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723914100869-72496ca19367?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  },
  {
    id: 30,
    name: "Wireless Soundbar for TV",
    brand: "Samsung",
    category: "Soundbar",
    price: 279,
    features: ["Dolby Digital", "Wireless Subwoofer", "Bluetooth"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  },
  {
    id: 31,
    name: "Smart Home Music System",
    brand: "Sonos",
    category: "Smart Speaker",
    price: 399,
    features: ["Wi-Fi Streaming", "Voice Control", "Multi-Room"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1678066730766-a27dd4fb02a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  },
  {
    id: 32,
    name: "Studio Boom Arm Microphone Kit",
    brand: "Neewer",
    category: "Microphone",
    price: 79,
    features: ["Adjustable Arm", "Shock Mount", "Pop Filter"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1680346528556-f9598cf64bb1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
  },
  {
    id: 33,
    name: "Audiophile Open-Back Headphones",
    brand: "Beyerdynamic",
    category: "Headphones",
    price: 299,
    features: ["Hi-Res Audio", "Detachable Cable", "Comfort Design"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1590602846581-7d3eec520d07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGF1ZGlvfGVufDB8fDB8fHww",
  },
  {
    id: 34,
    name: "Wireless Neckband Earphones",
    brand: "OnePlus",
    category: "Earphones",
    price: 69,
    features: ["Magnetic Control", "Quick Charge", "Bluetooth 5.0"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1600294037761-f9ef414e1036?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "High-Power DJ Speaker",
    brand: "Pioneer",
    category: "Speaker",
    price: 699,
    features: ["Bass Boost", "Party Lights", "Bluetooth"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1623041997376-7cf34242da62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 36,
    name: "Wireless Multi-Device Headphones",
    brand: "Skullcandy",
    category: "Headphones",
    price: 119,
    features: ["Bluetooth Multipoint", "Noise Isolation", "Foldable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074912-13f88375bc65?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Bluetooth Car Audio Receiver",
    brand: "Anker",
    category: "Car Audio",
    price: 49,
    features: ["Hands-Free Calls", "Dual Device", "Fast Charging"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074818-94ba78e36c3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 38,
    name: "Premium Wireless Gaming Headset",
    brand: "SteelSeries",
    category: "Headset",
    price: 199,
    features: ["Low Latency", "Surround Sound", "Comfort Ear Pads"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074818-94ba78e36c3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 39,
    name: "Portable Conference Microphone",
    brand: "Jabra",
    category: "Microphone",
    price: 99,
    features: ["360° Pickup", "USB-C", "Plug & Play"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074956-186ba8cd49d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    id: 40,
    name: "Wireless Earbuds Lite",
    brand: "Realme",
    category: "Earbuds",
    price: 49,
    features: ["Lightweight", "Quick Pair", "Water Resistant"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664195074956-186ba8cd49d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    id: 41,
    name: "Premium Turntable System",
    brand: "Technics",
    category: "Turntable",
    price: 799,
    features: ["Direct Drive", "USB Output", "Hi-Fi Sound"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1722859308534-1056d93b036f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
  {
    id: 42,
    name: "Dolby Atmos Soundbar",
    brand: "LG",
    category: "Soundbar",
    price: 599,
    features: ["3D Surround", "Wi-Fi Streaming", "Subwoofer Included"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1682147211405-0bf9fb3c0f1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  },
  {
    id: 43,
    name: "Bluetooth Home Speaker",
    brand: "Harman Kardon",
    category: "Speaker",
    price: 249,
    features: ["Wireless Streaming", "Premium Finish", "Voice Control"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1688700438323-4065dd213740?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  },
  {
    id: 44,
    name: "Smart Assistant Earbuds",
    brand: "Google Pixel Buds",
    category: "Earbuds",
    price: 179,
    features: ["Voice Control", "Real-Time Translation", "Wireless Charging"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723874478994-5810e00449d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 45,
    name: "Studio Audio Mixer",
    brand: "Yamaha",
    category: "Mixer",
    price: 499,
    features: ["Multiple Channels", "Built-in Effects", "USB Recording"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1679079456027-7afd22d1c2e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  },
  {
    id: 46,
    name: "Noise Cancelling Wireless Headphones",
    brand: "Panasonic",
    category: "Headphones",
    price: 159,
    features: ["ANC", "Comfort Design", "30 Hours Battery"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664200913483-1eda3564775d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
  },
  {
    id: 47,
    name: "Wireless Sports Earphones",
    brand: "Beats",
    category: "Earphones",
    price: 129,
    features: ["Sweat Resistant", "Fast Fuel Charging", "Secure Fit"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1682089630007-8ada1522ccf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
  },
  {
    id: 48,
    name: "Premium Smart Sound System",
    brand: "Bang & Olufsen",
    category: "Speaker",
    price: 899,
    features: ["Wi-Fi Streaming", "Hi-Fi Audio", "Luxury Design"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1683140719227-e839350ad9e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },
  {
    id: 49,
    name: "Compact Voice Recorder",
    brand: "Sony",
    category: "Recorder",
    price: 89,
    features: ["High Sensitivity Mic", "Long Battery", "USB-C"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664301228494-42c11c2ac062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    id: 50,
    name: "Wireless Party Speaker",
    brand: "JBL",
    category: "Speaker",
    price: 349,
    features: ["Extra Bass", "LED Lights", "Waterproof"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664301228494-42c11c2ac062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  }
];

const AudioAccessoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleAccessories = accessories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(accessories.length);
  };

  return (
    <section className="bg-white text-amber-600 py-12 px-4 my-[-30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Fitness Accessories</h2>

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

export default AudioAccessoriesSection;
