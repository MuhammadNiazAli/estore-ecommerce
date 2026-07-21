import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const relatedProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Ergonomic Gaming Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1592914567648-d818927b1c0b?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1611842834129-f1f92390f9e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Smart Fitness Band",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 5,
    title: "Noise Cancelling Earbuds",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 6,
    title: "Portable Power Bank",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1580910051073-d50ae74f9e1d?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 7,
    title: "4K Action Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1581181683456-c243e00fef90?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 8,
    title: "Smart Home Hub",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1611605698335-0cb09c9b3675?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },

  // NEW 50+ products start from here
  {
    id: 9,
    title: "Ultra HD Smart TV 55-inch",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 10,
    title: "Wireless Charging Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 11,
    title: "Bluetooth Tracker Key Finder",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1612837017391-1cf1a1a8c88e?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 12,
    title: "Smart WiFi LED Bulbs",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1591389900994-e7c34d3ed7c4?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 13,
    title: "Compact Photo Printer",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1587202372775-e09ae6d1a4d5?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 14,
    title: "Noise-Isolating Studio Headphones",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1516632664305-eda5f8cddab2?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 15,
    title: "Professional DSLR Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    id: 16,
    title: "Adjustable Laptop Stand",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1615800002526-10c9d8a2e3ec?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 17,
    title: "USB-C Multiport Hub",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1587574293340-e4a1b212d1cf?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 18,
    title: "Smart Door Lock",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1601980932213-fd6cb1d91804?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 19,
    title: "360-Degree Security Camera",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1615828508596-9fa0a7ab2b7b?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 20,
    title: "VR Gaming Headset",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 21,
    title: "Wireless Car Charger",
    price: 32.49,
    image: "https://images.unsplash.com/photo-1573497019257-ced2b6b4a0a0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 22,
    title: "Digital Drawing Tablet",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 23,
    title: "Smart Robot Vacuum",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1619944301124-e4f8ff879b6e?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 24,
    title: "Fitness Smart Scale",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1593633963681-47edac89aef5?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 25,
    title: "Smart Light Strip",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618331838253-88ec6c9b68d3?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 26,
    title: "Home Weather Station",
    price: 149.49,
    image: "https://images.unsplash.com/photo-1583772291333-c290c1f87a9f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 27,
    title: "Wireless Ergonomic Keyboard",
    price: 99.95,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b15893?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 28,
    title: "Smart Plug with Alexa",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1610484826950-d2f188f7cb4b?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 29,
    title: "Indoor Air Quality Monitor",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1622747455952-6a2bfa6c104e?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 30,
    title: "Noise-Cancelling Office Headset",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1626628749603-1a6db3e7c3f7?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 31,
    title: "Compact Wireless Projector",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 32,
    title: "Foldable Drone with 4K Camera",
    price: 349.00,
    image: "https://images.unsplash.com/photo-1555617980-dac3885b084b?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 33,
    title: "Dual Monitor Desk Mount",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 34,
    title: "Wi-Fi Range Extender",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1616077168078-3b07b87a1f53?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 35,
    title: "LED Desk Lamp with USB Port",
    price: 36.49,
    image: "https://images.unsplash.com/photo-1616627456348-798d339fdf9f?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 36,
    title: "Bluetooth Retro Turntable",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1589712235116-28b09819e1f2?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 37,
    title: "1080p Webcam with Ring Light",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1617957743160-2f67463a37e4?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 38,
    title: "Smart Coffee Maker",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1604382354936-07b4db474d2f?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 39,
    title: "Wireless Over-Ear Gaming Headset",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1617298094203-fbbf246ae39f?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 40,
    title: "Programmable RGB Mouse Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1606819486897-038c3a7d8c3f?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 41,
    title: "Smartphone Gimbal Stabilizer",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1612874742804-9854f5424db5?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 42,
    title: "Wireless Smart Thermostat",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1603349206290-d4e3433d330b?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 43,
    title: "Smart Sleep Sound Machine",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1582972339844-d963f2f92b72?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 44,
    title: "Portable Solar Charger",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 45,
    title: "Air Purifier with HEPA Filter",
    price: 139.49,
    image: "https://images.unsplash.com/photo-1590490352932-7c02d3aa1c77?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 46,
    title: "Touchscreen Portable Monitor",
    price: 299.00,
    image: "https://images.unsplash.com/photo-1635762228653-e0bb9a832cc7?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 47,
    title: "Gaming Racing Wheel Set",
    price: 279.95,
    image: "https://images.unsplash.com/photo-1620195731396-32b8c94cf328?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 48,
    title: "Electric Standing Desk",
    price: 429.00,
    image: "https://images.unsplash.com/photo-1616628182508-1973a7c1ed62?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 49,
    title: "Wi-Fi Smart Garage Door Opener",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1605827180718-0fd5a8d3a4d4?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 50,
    title: "Ultra-Slim Power Strip",
    price: 28.75,
    image: "https://images.unsplash.com/photo-1616627477124-ea095fcf5e1f?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 51,
    title: "Digital Wireless Meat Thermometer",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1623413153101-72ab539d74ce?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 52,
    title: "Rechargeable Hand Warmer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1f9f4a7?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 53,
    title: "USB Desk Fan with Adjustable Speed",
    price: 25.50,
    image: "https://images.unsplash.com/photo-1634213794524-1b76d3a4fcfb?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 54,
    title: "Electric Toothbrush Set",
    price: 59.00,
    image: "https://images.unsplash.com/photo-1608222402144-e3dff83aa34c?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 55,
    title: "High-Performance Blender",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1606636660488-1551f9d0150e?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 56,
    title: "Cordless Electric Screwdriver",
    price: 44.49,
    image: "https://images.unsplash.com/photo-1628609382377-83a137e3d60f?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 57,
    title: "Multifunctional Tool Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1616628624904-23b60ae5ce2b?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 58,
    title: "Smart Bike Lock",
    price: 59.95,
    image: "https://images.unsplash.com/photo-1596991844237-14f0c2fd6eec?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 59,
    title: "Pet Camera with Treat Dispenser",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1585042777860-5b4e0165026b?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 60,
    title: "Wi-Fi Leak & Freeze Detector",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1581264450093-4c6dce93c5fd?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 61,
    title: "Smart Fragrance Diffuser",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598207503483-b138d8f91c0f?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 62,
    title: "Wireless Presentation Clicker",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1588683251509-54aa2ae2e2e0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 63,
    title: "Smart Aquarium Feeder",
    price: 37.49,
    image: "https://images.unsplash.com/photo-1576107930687-df7e9219fdb0?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 64,
    title: "Magnetic Wireless Power Bank",
    price: 52.00,
    image: "https://images.unsplash.com/photo-1617093918230-afa204588f6f?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 65,
    title: "Digital Kitchen Scale",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1600423115367-68fef876e998?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 66,
    title: "Smart Mood Lighting Panel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585155771813-e3b4dbf1a6de?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 67,
    title: "Bluetooth Beard Trimmer",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1603302576837-c401b194b27f?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 68,
    title: "Voice-Controlled Smart Clock",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e2f0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 69,
    title: "Cordless Hair Clippers",
    price: 58.95,
    image: "https://images.unsplash.com/photo-1628611356760-1f4f6302fdb5?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 70,
    title: "Mini Label Printer",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1623843492654-b1b4ab6e4eb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 71,
    title: "Outdoor Solar Garden Lights",
    price: 39.49,
    image: "https://images.unsplash.com/photo-1617162501902-3edce3f1dc00?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 72,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 73,
    title: "Smartphone Camera Lens Kit",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 74,
    title: "Portable Bluetooth Speaker with LED",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1492691527712-df1110a8cde8?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 75,
    title: "Smartwatch with Heart Rate Monitor",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 76,
    title: "USB-C External SSD 1TB",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 77,
    title: "Ergonomic Office Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 78,
    title: "Digital Photo Frame 10-inch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 79,
    title: "Wireless Ergonomic Vertical Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 80,
    title: "Bluetooth Sleep Headphones",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1585967901111-bb3f88ac7e0c?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 81,
    title: "Smart LED Desk Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556910103-1d75f0152d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 82,
    title: "Portable Espresso Machine",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 83,
    title: "Wireless Charging Mouse Pad",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 84,
    title: "Smart Pet Feeder",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1f9f4a7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 85,
    title: "Mini Projector for Home Theater",
    price: 179.00,
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 86,
    title: "Adjustable Smartphone Tripod",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1509228627152-4981f6833ad8?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 87,
    title: "Electric Heated Blanket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 88,
    title: "Smart Water Bottle with Hydration Reminder",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 89,
    title: "Digital Air Fryer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572441710561-6d1d5b8c1fc2?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 90,
    title: "Wireless Charging Stand",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1525186402429-18f4fca75f3b?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 91,
    title: "Smart Security Doorbell",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 92,
    title: "Wireless Gaming Controller",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 93,
    title: "Smart Indoor Garden Kit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542838687-249ecda5f051?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 94,
    title: "Portable Digital Voice Recorder",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1580656014860-6e0e7f0bc8a8?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 95,
    title: "Cordless Handheld Vacuum Cleaner",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 96,
    title: "Bluetooth Smart Scale",
    price: 59.95,
    image: "https://images.unsplash.com/photo-1598969136754-2f2607e7f94f?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 97,
    title: "Smart LED Light Bulbs - 4 Pack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1592496001022-0c233aefda98?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 98,
    title: "Noise Cancelling Earbuds with Mic",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 99,
    title: "Smartphone VR Headset",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 100,
    title: "Wireless Portable Charger 10000mAh",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1591114861076-f02ea9c0f3d8?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 101,
    title: "Smart Home Voice Assistant",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 102,
    title: "USB-C Hub with HDMI and Ethernet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1615962389275-1eb90e7699d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 103,
    title: "Smart Thermostat with Touchscreen",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1617020459133-dc9db0c5d02d?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 104,
    title: "Portable Bluetooth Karaoke Microphone",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598300052040-5bfc688ae3e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 105,
    title: "Wireless Smart Light Switch",
    price: 29.95,
    image: "https://images.unsplash.com/photo-1578916171721-c5f7df7b55a6?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 106,
    title: "USB Rechargeable Bike Light Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1526382551041-3c817fc3f3f3?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 107,
    title: "Waterproof Bluetooth Shower Speaker",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b4?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 108,
    title: "Digital Alarm Clock with Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 109,
    title: "Smart Light Therapy Lamp",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 110,
    title: "Cordless Electric Wine Opener",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1564501048599-c9798d8d1158?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 111,
    title: "Smartphone Camera Stabilizer",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1564584462261-10bc8de8e2f6?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 112,
    title: "Wireless Mesh Wi-Fi System",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1590073247194-199c1f85e1db?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 113,
    title: "Rechargeable Handheld Fan",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1590080877777-0935676cfd7d?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 114,
    title: "Smartphone Screen Magnifier",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1585325701951-5b92e54d10ed?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 115,
    title: "Wireless Charging Car Mount",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609869329721-7f5f7a956b6b?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 116,
    title: "Smart Outdoor Security Light",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 117,
    title: "Bluetooth Fitness Tracker Watch",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504467045049-fb540b466160?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 118,
    title: "Smartphone Camera Remote Shutter",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1531058020387-c922d6a2b0a0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 119,
    title: "Rechargeable Electric Lighter",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 120,
    title: "Mini Portable Air Conditioner",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 121,
    title: "Smartwatch with GPS",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 122,
    title: "Bluetooth Smart Headset",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc0a3f?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 123,
    title: "Ultra HD Streaming Stick",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 124,
    title: "Rechargeable Wireless Earbuds",
    price: 79.95,
    image: "https://images.unsplash.com/photo-1516707570267-4c2638de23a0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 125,
    title: "Smart Digital Picture Frame",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1532634726-2b0e3d2cbaee?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 126,
    title: "Wireless Charging Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 127,
    title: "Smart Home Security Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 128,
    title: "Ergonomic Laptop Stand",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1532619675605-3bd3b4d588b7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 129,
    title: "Gaming Mechanical Keyboard",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1571851891505-6f90f43e1a01?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 130,
    title: "Smart Thermostat",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 131,
    title: "Portable Wireless Speaker",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e48e?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 132,
    title: "Smart Fitness Watch",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 133,
    title: "USB-C Multiport Adapter",
    price: 59.95,
    image: "https://images.unsplash.com/photo-1517433456452-7f4d8aa0c9e9?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 134,
    title: "Smart LED Light Strip",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999a9e2e8?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 135,
    title: "Wireless Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527434008553-122b2e6a7f1e?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 136,
    title: "Smart Door Lock",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 137,
    title: "Electric Pressure Cooker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 138,
    title: "Smartphone Gimbal Stabilizer",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1508779018996-87a0f735acb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 139,
    title: "Cordless Handheld Vacuum",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 140,
    title: "Smart Air Purifier",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1560184897-7368b24b5d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 141,
    title: "Wireless Charging Station",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 142,
    title: "Smartphone Camera Drone",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 143,
    title: "4K Ultra HD Action Camera",
    price: 249.00,
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 144,
    title: "Smart Home Voice Assistant",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 145,
    title: "Portable Solar Power Bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 146,
    title: "Smart LED Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 147,
    title: "Wireless Bluetooth Earbuds",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 148,
    title: "Gaming Headset with Microphone",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598300052040-5bfc688ae3e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 149,
    title: "Smartwatch Fitness Tracker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 150,
    title: "USB-C External Hard Drive",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 151,
    title: "Electric Heated Blanket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 152,
    title: "Smart Water Bottle",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 153,
    title: "Bluetooth Speaker with Subwoofer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1499113181277-ccff0ec4b6bf?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 154,
    title: "Wireless Charging Mouse Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 155,
    title: "Smartphone Camera Lens Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 156,
    title: "Cordless Electric Screwdriver",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1628609382377-83a137e3d60f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 157,
    title: "Smart Indoor Garden",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542838687-249ecda5f051?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 158,
    title: "Wireless Presentation Clicker",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1588683251509-54aa2ae2e2e0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 159,
    title: "Rechargeable Hand Warmer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1f9f4a7?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 160,
    title: "Electric Toothbrush Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608222402144-e3dff83aa34c?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 161,
    title: "Portable Bluetooth Karaoke Microphone",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598300052040-5bfc688ae3e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 162,
    title: "Smart LED Desk Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556910103-1d75f0152d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 163,
    title: "Mini Label Printer",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1623843492654-b1b4ab6e4eb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 164,
    title: "Smart Indoor Air Quality Monitor",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616627477124-ea095fcf5e1f?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 165,
    title: "Wireless Gaming Controller",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 166,
    title: "Smart Aquarium Feeder",
    price: 37.49,
    image: "https://images.unsplash.com/photo-1576107930687-df7e9219fdb0?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 167,
    title: "Digital Kitchen Scale",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1600423115367-68fef876e998?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 168,
    title: "Smart Mood Lighting Panel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585155771813-e3b4dbf1a6de?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 169,
    title: "Bluetooth Beard Trimmer",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1603302576837-c401b194b27f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 170,
    title: "Voice-Controlled Smart Clock",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e2f0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 171,
    title: "Cordless Hair Clippers",
    price: 58.95,
    image: "https://images.unsplash.com/photo-1628611356760-1f4f6302fdb5?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 172,
    title: "Smart Wireless Meat Thermometer",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589989206262-9a08ca1a2db8?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 173,
    title: "Wireless Noise-Isolating Earphones",
    price: 89.95,
    image: "https://images.unsplash.com/photo-1596495578064-c43b34d8a213?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 174,
    title: "Electric Heated Socks",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559128a5?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 175,
    title: "Portable Bluetooth Turntable",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 176,
    title: "Smart Electric Kettle",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1562007907-6a7b246e46e4?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 177,
    title: "Wireless Bluetooth Beanie",
    price: 39.95,
    image: "https://images.unsplash.com/photo-1516728778615-2d590ea1856f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 178,
    title: "Smartphone Controlled Robot Car",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1534162610639-d8d3f22687e0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 179,
    title: "Rechargeable Wireless Reading Light",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1531177074733-988e47f25f7e?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 180,
    title: "Smartphone Camera Slider",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 181,
    title: "Electric Standing Desk Converter",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 182,
    title: "Smart Sleep Tracker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1514412076811-5f2ab1446a1e?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 183,
    title: "Wireless Portable Photo Printer",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 184,
    title: "Smart Wi-Fi Plug Outlet",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556909192-998b083efc10?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 185,
    title: "Electric Milk Frother",
    price: 39.95,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 186,
    title: "Wireless Keyboard and Mouse Combo",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 187,
    title: "Smartphone UV Sanitizer",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1580910051073-d50ae74f9e1d?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 188,
    title: "Rechargeable Electric Scooter",
    price: 499.00,
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 189,
    title: "Smartphone Gaming Trigger Buttons",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1592914567648-d818927b1c0b?q=80&w=400&auto=format&fit=crop",
    rating: 4.1,
  },
  {
    id: 190,
    title: "Portable Bluetooth DJ Mixer",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 191,
    title: "Electric Heated Gloves",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555621687-fb1d3ec23d37?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 192,
    title: "Smartphone Lens Kit with Macro Lens",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 193,
    title: "Rechargeable Portable Fan",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1590080877777-0935676cfd7d?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 194,
    title: "Smartphone Car Mount with Wireless Charging",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609869329721-7f5f7a956b6b?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 195,
    title: "Bluetooth Outdoor Speaker with Waterproof Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1509916699829-21b29a1ac2af?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 196,
    title: "Smart Indoor Plant Sensor",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1527731227835-9a6fc8a25f0b?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 197,
    title: "Electric Heated Mattress Pad",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 198,
    title: "Smart Wi-Fi LED Light Bulbs - 6 Pack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1592496001022-0c233aefda98?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 199,
    title: "Wireless Bluetooth Sleep Mask",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1585967901111-bb3f88ac7e0c?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 200,
    title: "Portable Mini Fridge",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1573586046645-96d213dfecb0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 201,
    title: "Smartphone Wireless Charging Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1580910051073-d50ae74f9e1d?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 202,
    title: "Smart Robot Vacuum Cleaner",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1590080877777-0935676cfd7d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 203,
    title: "Wireless Gaming Headphones",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 204,
    title: "Bluetooth Smartwatch for Kids",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1504470695779-6ef3edb24eaf?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 205,
    title: "Wireless Outdoor Security Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 206,
    title: "Electric Heated Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1563225401-c7d927bc90ab?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 207,
    title: "Smartwatch with Blood Oxygen Monitor",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1519669556877-df6b17f36504?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 208,
    title: "Wireless Bluetooth Speaker with RGB Lights",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 209,
    title: "Smartphone Gimbal Stabilizer",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1508779018996-87a0f735acb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 210,
    title: "Cordless Handheld Vacuum",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 211,
    title: "Bluetooth Wireless Earbuds with Charging Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 212,
    title: "Smart Wi-Fi Light Switch",
    price: 29.95,
    image: "https://images.unsplash.com/photo-1578916171721-c5f7df7b55a6?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 213,
    title: "Rechargeable Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 214,
    title: "USB-C Hub with Multiple Ports",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1615962389275-1eb90e7699d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 215,
    title: "Smart Indoor Garden Kit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542838687-249ecda5f051?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 216,
    title: "Bluetooth Sleep Headphones",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1585967901111-bb3f88ac7e0c?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 217,
    title: "Portable Solar Charger",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 218,
    title: "Wireless Bluetooth Earbuds with Noise Cancellation",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 219,
    title: "Smart Fitness Tracker Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 220,
    title: "Electric Hair Straightening Brush",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1603302576837-c401b194b27f?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 221,
    title: "Smartphone Wireless Charging Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1560184897-7368b24b5d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 222,
    title: "Wireless Over-Ear Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999a9e2e8?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 223,
    title: "Smartphone Photo Printer",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 224,
    title: "Portable Bluetooth Speaker with Bass Boost",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 225,
    title: "Smartwatch with ECG Monitor",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 226,
    title: "Wireless Gaming Mouse with RGB",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527434008553-122b2e6a7f1e?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 227,
    title: "Smart Wi-Fi Light Switch",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556909192-998b083efc10?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 228,
    title: "Electric Facial Cleansing Brush",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 229,
    title: "Rechargeable Electric Toothbrush",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1608222402144-e3dff83aa34c?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 230,
    title: "Wireless Charging Station for Multiple Devices",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 231,
    title: "Smart Home Hub with Voice Control",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1611605698335-0cb09c9b3675?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 232,
    title: "Portable Solar Charger Power Bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 233,
    title: "Wireless Noise-Cancelling Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 234,
    title: "Smart Thermostat with Touch Screen",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 235,
    title: "Wireless Mechanical Gaming Keyboard",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1571851891505-6f90f43e1a01?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 236,
    title: "Smart LED Desk Lamp with USB Charger",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 237,
    title: "Electric Heated Blanket for Winter",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 238,
    title: "Rechargeable Cordless Vacuum Cleaner",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 239,
    title: "Smart Wi-Fi Security Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 240,
    title: "Wireless Portable Karaoke Microphone",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598300052040-5bfc688ae3e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 241,
    title: "Smart Indoor Air Purifier",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1560184897-7368b24b5d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 242,
    title: "Electric Pressure Cooker with Wi-Fi",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 243,
    title: "Smartphone Camera Lens Kit",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 244,
    title: "Wireless Bluetooth Charging Mouse Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 245,
    title: "Smart Electric Kettle with Temperature Control",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1562007907-6a7b246e46e4?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 246,
    title: "Rechargeable Wireless Reading Light",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1531177074733-988e47f25f7e?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 247,
    title: "Bluetooth Outdoor Waterproof Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1509916699829-21b29a1ac2af?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 248,
    title: "Smart Indoor Plant Sensor",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527731227835-9a6fc8a25f0b?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 249,
    title: "Wireless Bluetooth Sleep Headphones",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1585967901111-bb3f88ac7e0c?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 250,
    title: "Smart Mood Lighting Panel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585155771813-e3b4dbf1a6de?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 251,
    title: "Electric Heated Gloves",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555621687-fb1d3ec23d37?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 252,
    title: "Smart LED Desk Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556910103-1d75f0152d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 253,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 254,
    title: "USB-C Multiport Adapter",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1615962389275-1eb90e7699d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 255,
    title: "Rechargeable Electric Hair Clippers",
    price: 58.95,
    image: "https://images.unsplash.com/photo-1628611356760-1f4f6302fdb5?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 256,
    title: "Smart Wi-Fi LED Light Bulbs - 6 Pack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1592496001022-0c233aefda98?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 257,
    title: "Bluetooth Beard Trimmer",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1603302576837-c401b194b27f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 258,
    title: "Voice-Controlled Smart Clock",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e2f0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 259,
    title: "Smart Indoor Aquarium Feeder",
    price: 37.49,
    image: "https://images.unsplash.com/photo-1576107930687-df7e9219fdb0?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 260,
    title: "Digital Kitchen Scale with Bluetooth",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1600423115367-68fef876e998?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 261,
    title: "Smartphone Gimbal Stabilizer",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1508779018996-87a0f735acb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 262,
    title: "Electric Heated Mattress Pad",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 263,
    title: "Wireless Charging Mouse Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 264,
    title: "Portable Solar Power Bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 265,
    title: "Smart Voice-Controlled Light Switch",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556909192-998b083efc10?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 266,
    title: "Rechargeable Hand Warmer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583337130417-72d0d02c1d9a?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 267,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 268,
    title: "Smart Electric Toothbrush with Timer",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1608222402144-e3dff83aa34c?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 269,
    title: "Bluetooth Smartwatch with Heart Rate Monitor",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1519669556877-df6b17f36504?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 270,
    title: "Portable Mini Projector",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 271,
    title: "Wireless Bluetooth Speaker with RGB Lights",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 272,
    title: "Wireless Earbuds with Touch Controls",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 273,
    title: "Smartwatch with Fitness Tracking",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 274,
    title: "Bluetooth Portable Speaker with Waterproof Design",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 275,
    title: "Smart Home Security Camera with Night Vision",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 276,
    title: "Wireless Mechanical Gaming Keyboard",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1563132333-3c9d8d830b7b?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 277,
    title: "Electric Heated Blanket for Winter",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 278,
    title: "Rechargeable Cordless Vacuum Cleaner",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 279,
    title: "Smart Wi-Fi Security Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 280,
    title: "Wireless Portable Karaoke Microphone",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598300052040-5bfc688ae3e7?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 281,
    title: "Smart Indoor Air Purifier",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1560184897-7368b24b5d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 282,
    title: "Electric Pressure Cooker with Wi-Fi",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 283,
    title: "Smartphone Camera Lens Kit",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 284,
    title: "Wireless Bluetooth Charging Mouse Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 285,
    title: "Smart Electric Kettle with Temperature Control",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1562007907-6a7b246e46e4?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 286,
    title: "Rechargeable Wireless Reading Light",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1531177074733-988e47f25f7e?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 287,
    title: "Bluetooth Outdoor Waterproof Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1509916699829-21b29a1ac2af?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 288,
    title: "Smart Indoor Plant Sensor",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527731227835-9a6fc8a25f0b?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 289,
    title: "Wireless Bluetooth Sleep Headphones",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1585967901111-bb3f88ac7e0c?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 290,
    title: "Smart Mood Lighting Panel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585155771813-e3b4dbf1a6de?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 291,
    title: "Electric Heated Gloves",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555621687-fb1d3ec23d37?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 292,
    title: "Smart LED Desk Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556910103-1d75f0152d48?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 293,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 294,
    title: "USB-C Multiport Adapter",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1615962389275-1eb90e7699d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 295,
    title: "Rechargeable Electric Hair Clippers",
    price: 58.95,
    image: "https://images.unsplash.com/photo-1628611356760-1f4f6302fdb5?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 296,
    title: "Smart Wi-Fi LED Light Bulbs - 6 Pack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1592496001022-0c233aefda98?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 297,
    title: "Bluetooth Beard Trimmer",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1603302576837-c401b194b27f?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 298,
    title: "Voice-Controlled Smart Clock",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e2f0?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 299,
    title: "Smart Indoor Aquarium Feeder",
    price: 37.49,
    image: "https://images.unsplash.com/photo-1576107930687-df7e9219fdb0?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 300,
    title: "Digital Kitchen Scale with Bluetooth",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1600423115367-68fef876e998?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 301,
    title: "Smartphone Gimbal Stabilizer",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1508779018996-87a0f735acb1?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 302,
    title: "Electric Heated Mattress Pad",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 303,
    title: "Wireless Charging Mouse Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b511691d0?q=80&w=400&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 304,
    title: "Portable Solar Power Bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 305,
    title: "Smart Voice-Controlled Light Switch",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556909192-998b083efc10?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
  },
  {
    id: 306,
    title: "Rechargeable Hand Warmer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583337130417-72d0d02c1d9a?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 307,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f270?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 308,
    title: "Smart Electric Toothbrush with Timer",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1608222402144-e3dff83aa34c?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 309,
    title: "Bluetooth Smartwatch with Heart Rate Monitor",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1519669556877-df6b17f36504?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 310,
    title: "Portable Mini Projector",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 311,
    title: "Wireless Bluetooth Speaker with RGB Lights",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 312,
    title: "Smart Digital Photo Frame",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1531545514255-27ecf3f4a9ec?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 313,
    title: "Bluetooth Wireless Gaming Controller",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 314,
    title: "Wireless Portable Charger with Solar Panel",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572245074047-823698c13381?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 315,
    title: "Smart Wi-Fi Robot Vacuum Cleaner",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 316,
    title: "Wireless Earbuds with Charging Case",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 317,
    title: "Smart Fitness Tracker with Heart Rate Monitor",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 318,
    title: "Bluetooth Portable Speaker with Deep Bass",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 319,
    title: "Smart Home Security System Kit",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 320,
    title: "Wireless Mechanical Keyboard with RGB Backlight",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1563132333-3c9d8d830b7b?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 321,
    title: "Electric Heated Jacket for Cold Weather",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=400&auto=format&fit=crop",
    rating: 4.4,
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <AiFillStar key={"full-" + i} className="text-black w-4 h-4" />
    );
  }

  if (halfStar) {
    stars.push(
      <AiFillStar
        key="half"
        className="text-black w-4 h-4"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <AiOutlineStar key={"empty-" + i} className="text-black w-4 h-4" />
    );
  }

  return stars;
};

const ProductRelatedItems = () => {
  const [mobileCount, setMobileCount] = useState(2);
  const [desktopCount, setDesktopCount] = useState(4);
  const [loadingMobile, setLoadingMobile] = useState(false);
  const [loadingDesktop, setLoadingDesktop] = useState(false);

  const loadMoreMobile = () => {
    setLoadingMobile(true);
    setTimeout(() => {
      setMobileCount((prev) =>
        prev + 2 <= relatedProducts.length ? prev + 2 : relatedProducts.length
      );
      setLoadingMobile(false);
    }, 600);
  };

  const loadMoreDesktop = () => {
    setLoadingDesktop(true);
    setTimeout(() => {
      setDesktopCount((prev) =>
        prev + 4 <= relatedProducts.length ? prev + 4 : relatedProducts.length
      );
      setLoadingDesktop(false);
    }, 600);
  };

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 ml-3 sm:ml-0">
        Related Products
      </h2>

      {/* Mobile Vertical Layout */}
      <div className="flex flex-col space-y-4 sm:hidden">
        {relatedProducts.slice(0, mobileCount).map(({ id, title, price, image, rating }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full h-40 overflow-hidden rounded-t-2xl">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3
                className="text-sm font-semibold text-gray-900 truncate"
                title={title}
              >
                {title}
              </h3>
              <div className="flex items-center mt-1 space-x-1">
                {renderStars(rating)}
                <span className="text-black text-xs font-medium ml-1">
                  {rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-2 text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        {mobileCount < relatedProducts.length && (
          <button
            onClick={loadMoreMobile}
            disabled={loadingMobile}
            className="mx-auto mt-4 px-6 py-2 bg-black text-gray-900 font-semibold rounded-full hover:bg-black transition flex items-center justify-center gap-2 min-w-[130px]"
          >
            {loadingMobile ? (
              <span className="w-4 h-4 border-2 border-gray-200 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "View More"
            )}
          </button>
        )}
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden sm:grid sm:grid-cols-4 sm:gap-6">
        {relatedProducts.slice(0, desktopCount).map(({ id, title, price, image, rating }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full h-36 overflow-hidden rounded-t-2xl">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3
                className="text-sm font-semibold text-gray-900 truncate"
                title={title}
              >
                {title}
              </h3>
              <div className="flex items-center mt-1 space-x-1">
                {renderStars(rating)}
                <span className="text-black text-xs font-medium ml-1">
                  {rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-2 text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View More Button */}
      {desktopCount < relatedProducts.length && (
        <div className="hidden sm:flex justify-center mt-6">
          <button
            onClick={loadMoreDesktop}
            disabled={loadingDesktop}
            className="px-6 py-2 bg-black text-gray-900 font-semibold rounded-full hover:bg-black transition flex items-center justify-center gap-2 min-w-[130px]"
          >
            {loadingDesktop ? (
              <span className="w-4 h-4 border-2 border-gray-200 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "View More"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductRelatedItems;
