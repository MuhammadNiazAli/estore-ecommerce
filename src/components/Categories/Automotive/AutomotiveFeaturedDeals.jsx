"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const automotiveDeals = [
  {
    id: 1,
    name: "All-Weather Car Mats",
    brand: "AutoZone",
    category: "Interior",
    price: 45,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1602606968776-b03a4e1e8145?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "LED Headlight Bulbs",
    brand: "BrightDrive",
    category: "Lighting",
    price: 60,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1602606968776-b03a4e1e8145?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Synthetic Engine Oil 5W-30",
    brand: "MobilOne",
    category: "Oils",
    price: 39,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1530610547000-ea1a815c1416?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Car Vacuum Cleaner",
    brand: "CleanRide",
    category: "Accessories",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726077505932-2eb81666dcb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    name: "Performance Brake Pads",
    brand: "BrakeMax",
    category: "Brakes",
    price: 99,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726077505932-2eb81666dcb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Premium Car Wax Kit",
    brand: "ShinePro",
    category: "Care",
    price: 25,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1648300119079-792d50efce72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    name: "Dash Cam 1080p",
    brand: "SafeDrive",
    category: "Electronics",
    price: 89,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1615775862217-70bc84f43b6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "Sport Alloy Wheels (Set of 4)",
    brand: "WheelKing",
    category: "Wheels",
    price: 399,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1508772382388-0b8fc7f7edb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    name: "Car Phone Mount",
    brand: "AutoGrip",
    category: "Accessories",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1674725060459-b4c996000457?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    name: "Seat Covers - Leather",
    brand: "ComfortRide",
    category: "Interior",
    price: 120,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675302199061-3d34078f5638?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 11,
    name: "Windshield Sun Shade",
    brand: "CoolCar",
    category: "Accessories",
    price: 20,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1674677530889-72b7cf7f1450?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 12,
    name: "Tire Inflator with Gauge",
    brand: "AirMax",
    category: "Tools",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1508506986152-ed556c7e9065?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    name: "Roof Cargo Box",
    brand: "SkyPack",
    category: "Storage",
    price: 299,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 14,
    name: "High-Performance Tires (Set of 4)",
    brand: "GripPro",
    category: "Wheels",
    price: 499,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 15,
    name: "Portable Jump Starter",
    brand: "PowerStart",
    category: "Electronics",
    price: 110,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1469534650455-c107956c869d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 16,
    name: "Car Bluetooth Adapter",
    brand: "ConnectCar",
    category: "Electronics",
    price: 25,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1652651312057-d26696520718?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 17,
    name: "Heavy Duty Car Jack",
    brand: "LiftMax",
    category: "Tools",
    price: 80,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1625304388844-c29bc011cdfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 18,
    name: "Car Battery Charger",
    brand: "ChargePro",
    category: "Electronics",
    price: 65,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1707988180195-c56006657514?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 19,
    name: "Polishing Machine",
    brand: "ShineMaster",
    category: "Care",
    price: 99,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669867484691-941a88d2d196?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 20,
    name: "Car Air Freshener Pack",
    brand: "FreshRide",
    category: "Interior",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1576859008551-796d7d9f73cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
 {
    id: 21,
    name: "Hydraulic Floor Jack",
    brand: "LiftPro",
    category: "Tools",
    price: 140,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1527974349915-0d7b47258c02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 22,
    name: "Backup Camera Kit",
    brand: "RearViewX",
    category: "Electronics",
    price: 89,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675249003499-0570ce14c7b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 23,
    name: "Car Polishing Compound",
    brand: "ShineXpert",
    category: "Care",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1712924653565-1cd256dcd2d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 24,
    name: "All-Season Wiper Blades",
    brand: "ClearView",
    category: "Accessories",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1566756796914-414240878e7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 25,
    name: "Roof Bike Rack",
    brand: "RideRack",
    category: "Storage",
    price: 150,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1700566070913-12fe438ffb7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 26,
    name: "Car Wash Foam Cannon",
    brand: "FoamMax",
    category: "Care",
    price: 29,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1507609752873-44646188a77d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 27,
    name: "Digital Tire Pressure Gauge",
    brand: "AirCheck",
    category: "Tools",
    price: 19,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 28,
    name: "Car Battery Jump Cables",
    brand: "VoltLink",
    category: "Electronics",
    price: 35,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1566345058271-81f3bfa3c4c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 29,
    name: "Roof Cargo Bag",
    brand: "TravelMax",
    category: "Storage",
    price: 99,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1501497849301-66eb0889c6a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 30,
    name: "Car Detailing Kit",
    brand: "DetailPro",
    category: "Care",
    price: 75,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1621210064160-24834a701245?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 31,
    name: "LED Interior Strip Lights",
    brand: "GlowRide",
    category: "Interior",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 32,
    name: "Carbon Fiber Spoiler",
    brand: "SpeedX",
    category: "Exterior",
    price: 250,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1652614347707-df3983ab3ed7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 33,
    name: "Car Emergency Kit",
    brand: "SafeRide",
    category: "Accessories",
    price: 65,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1667837896876-012372133bbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 34,
    name: "High-Performance Exhaust System",
    brand: "SoundBoost",
    category: "Performance",
    price: 450,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1540558304464-3dd8b97f9734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 35,
    name: "Car Organizer for Trunk",
    brand: "NeatRide",
    category: "Interior",
    price: 28,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1674584715277-bda28c30456f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 36,
    name: "Leather Steering Wheel Cover",
    brand: "GripPlus",
    category: "Interior",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1584646276685-427d228ff95f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 37,
    name: "Heavy-Duty Tow Strap",
    brand: "PullPro",
    category: "Accessories",
    price: 40,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1552229812-3fd9df36c4b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 38,
    name: "Portable Tire Inflator",
    brand: "AirForce",
    category: "Tools",
    price: 55,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1578518981906-5e5b33e093f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 39,
    name: "Car Cleaning Microfiber Cloth Set",
    brand: "CleanMaster",
    category: "Care",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1576294770469-eaee8a35251b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 40,
    name: "LED Fog Lights",
    brand: "BrightPath",
    category: "Lighting",
    price: 70,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1571068316663-97b816c38453?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 41,
    name: "Car Dashboard Camera 4K",
    brand: "RoadView",
    category: "Electronics",
    price: 140,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1578924832003-8c9e1f18faab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 42,
    name: "Winter Tire Chains",
    brand: "SnowGrip",
    category: "Accessories",
    price: 85,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1587061966530-a50125ba8512?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 43,
    name: "Car Roof Tent",
    brand: "AdventureGear",
    category: "Camping",
    price: 799,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1715464881783-cd065e91cbef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 44,
    name: "Automatic Car Cover",
    brand: "CoverPro",
    category: "Exterior",
    price: 199,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1715464881783-cd065e91cbef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 45,
    name: "Car Roof Cross Bars",
    brand: "RackMaster",
    category: "Storage",
    price: 129,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1667835949495-78a1ea9ecd77?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 46,
    name: "Car Battery Tester",
    brand: "VoltCheck",
    category: "Tools",
    price: 49,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1619536094780-8ada69185614?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 47,
    name: "Ceramic Coating Kit",
    brand: "ShineGuard",
    category: "Care",
    price: 99,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1594399829399-330e4bfe6c70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 48,
    name: "Underbody LED Kit",
    brand: "GlowX",
    category: "Lighting",
    price: 150,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1508034689382-e34a2bdffa01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },

];

const AutomotiveFeaturedDeals = () => {
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

  const totalSlides = Math.ceil(automotiveDeals.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Divide deals into slides
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(automotiveDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-gray-900 text-white py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Automotive Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-yellow-400"
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
                  className="bg-gray-800 rounded-xl shadow-lg flex flex-col max-w-sm w-full transition-shadow duration-300"
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
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-300 mb-1 font-medium">Brand: {deal.brand}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < deal.rating ? "text-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold text-yellow-400">${deal.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
                            ? "bg-yellow-400 text-black hover:bg-yellow-300"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
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
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-yellow-400"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default AutomotiveFeaturedDeals;
