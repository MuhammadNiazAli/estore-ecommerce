"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    brand: "ComfortSeat",
    category: "Chair",
    price: 180,
    features: ["Adjustable Height", "Lumbar Support", "Breathable Mesh"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Standing Desk Converter",
    brand: "FlexiDesk",
    category: "Desk",
    price: 220,
    features: ["Height Adjustable", "Spacious Surface", "Sturdy Frame"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "LED Desk Lamp",
    brand: "BrightLite",
    category: "Lighting",
    price: 55,
    features: ["Dimmable", "Eye-Care Technology", "USB Charging Port"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Wireless Ergonomic Mouse",
    brand: "TechEase",
    category: "Accessories",
    price: 45,
    features: ["Rechargeable", "Ergonomic Design", "Precision Tracking"],
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Adjustable Monitor Stand",
    brand: "FlexiDesk",
    category: "Desk",
    price: 80,
    features: ["Height Adjustable", "Cable Management", "Sturdy"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Memory Foam Seat Cushion",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 35,
    features: ["Ergonomic", "Non-Slip", "Portable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Minimalist Desk Organizer",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 25,
    features: ["Multiple Compartments", "Wooden Finish", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Noise Cancelling Headphones",
    brand: "SoundPro",
    category: "Audio",
    price: 150,
    features: ["Wireless", "Comfort Fit", "Long Battery Life"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Modern Bookshelf",
    brand: "FurniCo",
    category: "Furniture",
    price: 210,
    features: ["Solid Wood", "Multi-tier", "Easy Assembly"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Compact Printer",
    brand: "PrintEasy",
    category: "Electronics",
    price: 120,
    features: ["Wireless", "High Resolution", "Fast Printing"],
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  // 11-50 below:
  {
    id: 11,
    name: "USB-C Docking Station",
    brand: "TechEase",
    category: "Accessories",
    price: 90,
    features: ["Multiple Ports", "Fast Charging", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    name: "Dual Monitor Arm",
    brand: "FlexiDesk",
    category: "Desk",
    price: 130,
    features: ["Adjustable", "Sturdy", "Cable Management"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    name: "Wireless Keyboard",
    brand: "TechEase",
    category: "Accessories",
    price: 70,
    features: ["Rechargeable", "Ergonomic Layout", "Bluetooth"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    name: "Office Footrest",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 40,
    features: ["Ergonomic", "Adjustable Height", "Non-Slip"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    name: "Cable Management Clips",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 12,
    features: ["Adhesive", "Reusable", "Multi-size"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    name: "Wireless Presenter Remote",
    brand: "TechEase",
    category: "Accessories",
    price: 35,
    features: ["Long Range", "Ergonomic", "Laser Pointer"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 17,
    name: "Adjustable Laptop Stand",
    brand: "FlexiDesk",
    category: "Desk",
    price: 60,
    features: ["Portable", "Adjustable Height", "Non-Slip"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670315267653-2adecd823d9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 18,
    name: "Blue Light Blocking Glasses",
    brand: "EyeCare",
    category: "Accessories",
    price: 25,
    features: ["Lightweight", "Anti-Glare", "Comfort Fit"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    name: "Desk Whiteboard",
    brand: "OrganizeIt",
    category: "Office Supplies",
    price: 40,
    features: ["Magnetic", "Dry Erase", "Easy Mount"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 20,
    name: "Filing Cabinet",
    brand: "FurniCo",
    category: "Furniture",
    price: 250,
    features: ["Lockable", "Mobile", "Steel Frame"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 21,
    name: "Ergonomic Keyboard Wrist Rest",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 20,
    features: ["Memory Foam", "Non-Slip", "Comfort Grip"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 22,
    name: "Desk Plant Holder",
    brand: "GreenScape",
    category: "Decor",
    price: 30,
    features: ["Ceramic", "Compact", "Modern Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1603198132334-5478a1ec5bc1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 23,
    name: "Noise Reduction Panels",
    brand: "SoundPro",
    category: "Office Supplies",
    price: 120,
    features: ["Sound Absorbing", "Easy Installation", "Fire Resistant"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1694272604617-9c2ff92d5697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 24,
    name: "Adjustable Desk Fan",
    brand: "CoolBreeze",
    category: "Office Supplies",
    price: 45,
    features: ["Quiet", "Energy Efficient", "Oscillating"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1712517532157-c50824c70818?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 25,
    name: "Ergonomic Footrest",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 38,
    features: ["Height Adjustable", "Non-Slip", "Portable"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661319118136-1e2ca313cda3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 26,
    name: "Wireless Charging Pad",
    brand: "TechEase",
    category: "Accessories",
    price: 30,
    features: ["Fast Charge", "Compact", "Non-Slip"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611146227868-30ebc19bda39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 27,
    name: "Office Desk Calendar",
    brand: "OrganizeIt",
    category: "Office Supplies",
    price: 15,
    features: ["Monthly View", "Minimal Design", "Easy to Use"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1700629692261-51762f3efb64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 28,
    name: "Desk Cable Organizer",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 12,
    features: ["Sticky Back", "Reusable", "Multi-size"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1656597256570-ee98218c7175?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 29,
    name: "Adjustable Task Chair",
    brand: "ComfortSeat",
    category: "Chair",
    price: 200,
    features: ["Lumbar Support", "Height Adjustable", "Swivel Base"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1702243490356-c91007ccc452?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 30,
    name: "Large Desk Mat",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 28,
    features: ["Smooth Surface", "Non-Slip", "Easy to Clean"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670914333023-2a7ce5c1d81e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 31,
    name: "Office Wall Clock",
    brand: "TimeKeeper",
    category: "Office Supplies",
    price: 45,
    features: ["Silent Movement", "Large Numbers", "Modern Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1700629691288-33d29163cd7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
  {
    id: 32,
    name: "Adjustable Desk Lamp",
    brand: "BrightLite",
    category: "Lighting",
    price: 60,
    features: ["Dimmable", "Energy Efficient", "USB Charging"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1736961714187-506dab4e6cf9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  },
  {
    id: 33,
    name: "Ergonomic Mouse Pad",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 15,
    features: ["Gel Wrist Support", "Non-Slip", "Comfort Grip"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1683899800683-9ca2fde2f385?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 34,
    name: "Office Desk Organizer Set",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 40,
    features: ["Multi-piece", "Modern Design", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1658859095236-d6eca102a560?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  },
  {
    id: 35,
    name: "Compact Bluetooth Speaker",
    brand: "SoundPro",
    category: "Audio",
    price: 80,
    features: ["Wireless", "Portable", "Clear Sound"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1731599537657-f1fbc15bcc6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
  },
  {
    id: 36,
    name: "Office Standing Mat",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 90,
    features: ["Anti-Fatigue", "Non-Slip", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1615887584283-91f1be7fdc34?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
  },
  {
    id: 37,
    name: "Wall Mounted Whiteboard",
    brand: "OrganizeIt",
    category: "Office Supplies",
    price: 150,
    features: ["Magnetic", "Dry Erase", "Easy Mount"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1582585281646-c9d69a0cd310?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    id: 38,
    name: "Office Phone Stand",
    brand: "TechEase",
    category: "Accessories",
    price: 20,
    features: ["Adjustable", "Compact", "Non-Slip"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1586517173240-2a18567acc8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
  {
    id: 39,
    name: "Adjustable Laptop Cooling Pad",
    brand: "FlexiDesk",
    category: "Accessories",
    price: 45,
    features: ["Quiet Fans", "Adjustable Height", "Portable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1573500020435-82d72d6459b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  },
  {
    id: 40,
    name: "Desk Privacy Screen",
    brand: "PrivacyPro",
    category: "Office Supplies",
    price: 60,
    features: ["Adjustable Size", "Anti-Glare", "Easy Setup"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1572198013604-bcc6677afccc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 41,
    name: "Wireless Earbuds",
    brand: "SoundPro",
    category: "Audio",
    price: 110,
    features: ["Noise Cancelling", "Long Battery", "Compact Case"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680303989816-a73f8e8da041?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
  {
    id: 42,
    name: "Office Desk Fan",
    brand: "CoolBreeze",
    category: "Office Supplies",
    price: 40,
    features: ["Quiet", "Oscillating", "Energy Efficient"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1652272160843-4a97c13294bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
  },
  {
    id: 43,
    name: "Desk Organizer Drawer",
    brand: "OrganizeIt",
    category: "Accessories",
    price: 50,
    features: ["Multi-Compartment", "Modern Design", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1575794022495-b10d1b9d5336?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  },
  {
    id: 44,
    name: "Bluetooth Conference Speaker",
    brand: "SoundPro",
    category: "Audio",
    price: 160,
    features: ["Wireless", "360° Sound", "Long Battery Life"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666813322419-1ecedb7dfca7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
  },
  {
    id: 45,
    name: "Desktop Charging Station",
    brand: "TechEase",
    category: "Accessories",
    price: 70,
    features: ["Multi-Device", "Fast Charging", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635098116894-14b05e494847?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
  },
  {
    id: 46,
    name: "Office Desk Chair Mat",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 80,
    features: ["Anti-Fatigue", "Non-Slip", "Easy to Clean"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1663039910957-6fb23d483118?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
  },
  {
    id: 47,
    name: "Office Wall Art Set",
    brand: "DecorEase",
    category: "Decor",
    price: 90,
    features: ["Modern Prints", "Set of 3", "Ready to Hang"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635329404172-23a75cdaccce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
  },
  {
    id: 48,
    name: "Desktop Air Purifier",
    brand: "CleanAir",
    category: "Office Supplies",
    price: 120,
    features: ["HEPA Filter", "Quiet", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
  },
];

const OfficePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(sampleFitnessProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleFitnessProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-60px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Plants Beauty
          </h2>
          <p className="text-gray-500 mt-2">Browse through our curated collection</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-gray-800 font-bold mt-1">${item.price}</p>
                {item.oldPrice && (
                  <p className="text-red-500 line-through text-sm">
                    ${item.oldPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-white rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium min-w-[50px] whitespace-nowrap transition ${
                  currentPage === page
                    ? "bg-white text-gray-900 border border-amber-50"
                    : "bg-white text-gray-700 hover:bg-gray-500"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficePagination;
