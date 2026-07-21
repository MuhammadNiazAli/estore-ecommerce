"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
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
  {
    id: 49,
    name: "Engine Diagnostic Scanner",
    brand: "ScanPro",
    category: "Electronics",
    price: 180,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1506809597993-2bfd54686d37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  },
  {
    id: 50,
    name: "Car Windshield Washer Fluid",
    brand: "ClearShield",
    category: "Oils",
    price: 12,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1634689740880-e035aeb04a4d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHxjaWNsZSUyMHBhcnRzfGVufDB8fDB8fHww"
  }
];

const AutomativeAccessoriesSection = () => {
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

export default AutomativeAccessoriesSection;
