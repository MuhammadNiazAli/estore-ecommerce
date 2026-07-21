"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const industrialDeals = [
  {
    id: 1,
    name: "Industrial Drill",
    brand: "ProTools",
    category: "Power Tools",
    price: 350,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2158997931/photo/robotics-people-and-engineer-tablet-with-industrial-collaboration-and-planning-in-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=uiakJnvS4SEJp2UoV1812H-_AoUnu0FMgqcoJZ9VW84=",
    features: ["Heavy Duty", "Cordless", "Compact"],
  },
  {
    id: 2,
    name: "Safety Helmet",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1277975847/photo/industry-4-0-technology-concept-smart-factory-for-fourth-industrial-revolution.webp?a=1&b=1&s=612x612&w=0&k=20&c=SRMsdgHb1Xo3bW2-5HJIoKsDPlUH_MDFuVSACjpxT4s=",
    features: ["Shock Resistant", "Adjustable Strap"],
  },
  {
    id: 3,
    name: "Welding Machine",
    brand: "IronWorks",
    category: "Welding",
    price: 850,
    rating: 5,
    stock: false,
    image:
      "https://media.istockphoto.com/id/491577084/photo/male-professional-examining-machine-at-factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcas5alR9tA7jPFXJS8jJVNwwy8OqQKNsiyQzjO7FBU=",
    features: ["Portable", "Multi-Voltage"],
  },
  {
    id: 4,
    name: "Industrial Gloves",
    brand: "GripPro",
    category: "Safety Gear",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682144377374-c8492380da8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Heat Resistant", "Anti-slip"],
  },
  {
    id: 5,
    name: "Hydraulic Jack",
    brand: "LiftMaster",
    category: "Lifting Equipment",
    price: 400,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1614326014420-1f0c741ca7e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Heavy Load", "Durable"],
  },

  // Expanded products (6 - 50)
  {
    id: 6,
    name: "Electric Angle Grinder",
    brand: "GrindTech",
    category: "Power Tools",
    price: 120,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kdXN0cmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Ergonomic", "High RPM"],
  },
  {
    id: 7,
    name: "Industrial Air Compressor",
    brand: "AirForce",
    category: "Compressors",
    price: 1100,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682141721960-fcecf4022b5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Energy Efficient", "Portable"],
  },
  {
    id: 8,
    name: "Welding Helmet",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 70,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682144509812-4734c830b486?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Auto-Darkening", "Lightweight"],
  },
  {
    id: 9,
    name: "Industrial Ladder",
    brand: "StepSafe",
    category: "Ladders",
    price: 150,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635669263906-3edfa0eb5d98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Foldable", "Anti-Slip"],
  },
  {
    id: 10,
    name: "Cordless Impact Wrench",
    brand: "ProTools",
    category: "Power Tools",
    price: 220,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1615183742857-94fb4ab8583d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["High Torque", "Long Battery Life"],
  },
  {
    id: 11,
    name: "Safety Boots",
    brand: "GripPro",
    category: "Safety Gear",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1633292845194-2a2773416a1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Steel Toe", "Slip Resistant"],
  },
  {
    id: 12,
    name: "Portable Generator",
    brand: "PowerMax",
    category: "Generators",
    price: 750,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1527314392553-2c7bded21b23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Fuel Efficient", "Quiet Operation"],
  },
  {
    id: 13,
    name: "Industrial Vacuum Cleaner",
    brand: "CleanPro",
    category: "Cleaning Equipment",
    price: 400,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682144783087-fe52612b1f0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Powerful Suction", "HEPA Filter"],
  },
  {
    id: 14,
    name: "Welding Gloves",
    brand: "GripPro",
    category: "Safety Gear",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1660446718081-d2ac1e7985ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Heat Resistant", "Flexible"],
  },
  {
    id: 15,
    name: "Hydraulic Press",
    brand: "LiftMaster",
    category: "Lifting Equipment",
    price: 1200,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1665582597028-5c98a8938612?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["High Pressure", "Durable Frame"],
  },
  {
    id: 16,
    name: "Industrial Fan",
    brand: "AirForce",
    category: "Ventilation",
    price: 180,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1733683253670-932e9da832d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["High Airflow", "Energy Efficient"],
  },
  {
    id: 17,
    name: "Electric Screwdriver Set",
    brand: "ProTools",
    category: "Power Tools",
    price: 80,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1670309178236-d8180b68e2f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Multiple Bits", "Ergonomic Handle"],
  },
  {
    id: 18,
    name: "Industrial Safety Vest",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 30,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1565866926760-213f0b57e8b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["High Visibility", "Reflective Strips"],
  },
  {
    id: 19,
    name: "Heavy Duty Chainsaw",
    brand: "IronWorks",
    category: "Power Tools",
    price: 650,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1751091764701-98d590af5bfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Powerful Motor", "Anti-Vibration"],
  },
  {
    id: 20,
    name: "Industrial Workbench",
    brand: "SteelWorks",
    category: "Workshop Equipment",
    price: 400,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1660448076231-6da14185d036?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Sturdy", "Adjustable Height"],
  },
  {
    id: 21,
    name: "Industrial Safety Glasses",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1674043991849-9b313155d218?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Scratch Resistant", "UV Protection"],
  },
  {
    id: 22,
    name: "Pneumatic Nail Gun",
    brand: "ProTools",
    category: "Power Tools",
    price: 280,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1602096675615-efdd146d2b5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGluZHVzdHJpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["High Speed", "Lightweight"],
  },
  {
    id: 23,
    name: "Industrial Hydraulic Hose",
    brand: "LiftMaster",
    category: "Lifting Equipment",
    price: 60,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1695272016963-500fdc7e428b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High Pressure", "Flexible"],
  },
  {
    id: 24,
    name: "Electric Heat Gun",
    brand: "HeatMaster",
    category: "Power Tools",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1729852107320-b0d8a5413228?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Variable Temp", "Lightweight"],
  },
  {
    id: 25,
    name: "Industrial Measuring Tape",
    brand: "MeasurePro",
    category: "Tools",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1749857000870-65cb1d85289c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["25 ft", "Lock Mechanism"],
  },
  {
    id: 26,
    name: "Steel Wire Rope",
    brand: "SteelWorks",
    category: "Lifting Equipment",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1583343436618-0aae91ed4e92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High Tensile Strength", "Corrosion Resistant"],
  },
  {
    id: 27,
    name: "Cordless Drill Set",
    brand: "ProTools",
    category: "Power Tools",
    price: 320,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1553277802-12ad0d2f729d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Multiple Speeds", "Long Battery Life"],
  },
  {
    id: 28,
    name: "Industrial Floor Scrubber",
    brand: "CleanPro",
    category: "Cleaning Equipment",
    price: 900,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1665302477865-1c82561d0d86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Powerful", "Easy to Operate"],
  },
  {
    id: 29,
    name: "Toolbox Set",
    brand: "ToolMaster",
    category: "Tools",
    price: 150,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1665302477865-1c82561d0d86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Full Set", "Durable Case"],
  },
  {
    id: 30,
    name: "Heavy Duty Chains",
    brand: "SteelWorks",
    category: "Lifting Equipment",
    price: 80,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1675371421686-d092d62b75d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High Strength", "Rust Resistant"],
  },
  {
    id: 31,
    name: "Portable Work Light",
    brand: "BrightLite",
    category: "Lighting",
    price: 60,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1675371421686-d092d62b75d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["LED", "Rechargeable"],
  },
  {
    id: 32,
    name: "Industrial Pressure Washer",
    brand: "CleanPro",
    category: "Cleaning Equipment",
    price: 700,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1674633171890-c16113047b5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High PSI", "Durable Hose"],
  },
  {
    id: 33,
    name: "Welding Rods",
    brand: "IronWorks",
    category: "Welding",
    price: 50,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682144965474-4d7ff7ed6df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High Quality", "Consistent"],
  },
  {
    id: 34,
    name: "Industrial Ear Protection",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1665582596883-e1ce28aba175?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Noise Canceling", "Comfort Fit"],
  },
  {
    id: 35,
    name: "Concrete Mixer",
    brand: "BuildPro",
    category: "Construction Equipment",
    price: 1300,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1605467140767-a180fff5e28a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Electric", "Portable"],
  },
  {
    id: 36,
    name: "Industrial Dust Mask",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676901919109-3f5460cbb016?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Respiratory Protection", "Adjustable Nose Clip"],
  },
  {
    id: 37,
    name: "Electric Sander",
    brand: "ProTools",
    category: "Power Tools",
    price: 130,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1622505450164-d48d8d3edf55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Variable Speed", "Dust Collection"],
  },
  {
    id: 38,
    name: "Industrial Hand Truck",
    brand: "LiftMaster",
    category: "Lifting Equipment",
    price: 180,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1712319163903-f6a6f4f9ffb8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEwfHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Heavy Duty", "Foldable"],
  },
  {
    id: 39,
    name: "Electric Torque Wrench",
    brand: "ProTools",
    category: "Power Tools",
    price: 300,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1639372153977-ef6f5e15842e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE2fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Precise Control", "Digital Display"],
  },
  {
    id: 40,
    name: "Industrial Safety Harness",
    brand: "SafeGuard",
    category: "Safety Gear",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1685483749753-0dab7e144794?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY5fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Adjustable", "Heavy Duty"],
  },
  {
    id: 41,
    name: "Steel Work Table",
    brand: "SteelWorks",
    category: "Workshop Equipment",
    price: 450,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666021074896-71f90d9c7d5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Adjustable Height", "Rust Resistant"],
  },
  {
    id: 42,
    name: "Industrial LED Floodlight",
    brand: "BrightLite",
    category: "Lighting",
    price: 200,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666021074896-71f90d9c7d5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Waterproof", "Energy Efficient"],
  },
  {
    id: 43,
    name: "Cordless Circular Saw",
    brand: "ProTools",
    category: "Power Tools",
    price: 280,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1678984239750-3ff1539692dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Lightweight", "High Power"],
  },
  {
    id: 44,
    name: "Welding Cart",
    brand: "IronWorks",
    category: "Welding",
    price: 450,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678984239752-1709a523b58e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg5fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Sturdy Frame", "Easy Mobility"],
  },
  {
    id: 45,
    name: "Industrial Work Gloves",
    brand: "GripPro",
    category: "Safety Gear",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678984239548-b07d1f909cc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk0fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Heat Resistant", "Anti-slip"],
  },
  {
    id: 46,
    name: "Hydraulic Floor Jack",
    brand: "LiftMaster",
    category: "Lifting Equipment",
    price: 350,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678984239754-75191344a9ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA1fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Heavy Load", "Durable"],
  },
  {
    id: 47,
    name: "Industrial Heat Exchanger",
    brand: "HeatMaster",
    category: "HVAC",
    price: 1500,
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1661878168869-ffa66c993a7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE1fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["High Efficiency", "Compact Design"],
  },
  {
    id: 48,
    name: "Power Cord Reel",
    brand: "ToolMaster",
    category: "Tools",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1753711849575-281237febb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE4fHxpbmR1c3RyaWVzfGVufDB8fDB8fHww",
    features: ["Heavy Duty", "Easy Winding"],
  },
];

const IndustrialFeaturedDeals = () => {
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

  const totalSlides = Math.ceil(industrialDeals.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Divide deals into slides
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(industrialDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Industrial Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
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
                      <span className="absolute top-2 left-2 bg-green-600 text-xs font-bold px-2 py-1 rounded-md">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded-md">
                        Out of Stock
                      </span>
                    )}
                    {/* Category Badge */}
                    <span className="absolute top-2 right-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded-md">
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
                          className={`${i < deal.rating ? "text-amber-600" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">${deal.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
                            ? "bg-amber-600 text-black hover:bg-amber-500"
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
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default IndustrialFeaturedDeals;
