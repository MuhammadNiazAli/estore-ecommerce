"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample Industrial Products Data
const industrialData = [
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
];

const IndustrialFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(industrialData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let result = industrialData;

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
      maxPrice: 1500,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
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
            placeholder="Search industrial products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["PowerPro", "SafeGear", "ForgeTech", "GripMax", "LiftForce", "CoolBreeze"].map(
              (brand) => (
                <label key={brand} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => toggleFilter("brand", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Tools", "Safety", "Machinery"].map((cat) => (
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
              "Cordless",
              "Ergonomic",
              "High Power",
              "Impact Resistant",
              "Adjustable Strap",
              "Portable",
              "Cut Resistant",
              "Breathable",
              "Heavy Duty",
              "Compact",
              "Anti-Fog",
              "UV Protection",
              "Energy Efficient",
              "Durable",
              "Multi-Voltage",
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
              max="1500"
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

        {/* Products */}
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
                <p className="text-lg font-bold text-black">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
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

export default IndustrialFilters;
