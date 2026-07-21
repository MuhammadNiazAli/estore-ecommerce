"use client";

import React, { useState } from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";

const gamingData = [
  // Your first 6 products here (as you gave)...
  {
    id: 1,
    name: "Pro Gaming Headset",
    brand: "GameMaster",
    category: "Audio",
    price: 129,
    features: ["Surround Sound", "Noise Cancelling", "LED Lighting"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=557&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Mechanical Keyboard MK-7",
    brand: "KeyPro",
    category: "Peripherals",
    price: 99,
    features: ["RGB Backlight", "Cherry MX Switches", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1712473266911-3a64b32b724d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    name: "Gaming Mouse X200",
    brand: "ClickFast",
    category: "Peripherals",
    price: 59,
    features: ["Adjustable DPI", "Wireless", "Ergonomic Grip"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670183858930-2e2660151107?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    name: "4K Ultra Gaming Monitor",
    brand: "ScreenMax",
    category: "Display",
    price: 499,
    features: ["144Hz Refresh Rate", "HDR10", "1ms Response Time"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1739036236186-cf7aac34ffc8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "RGB Gaming Chair",
    brand: "ComfortZone",
    category: "Furniture",
    price: 249,
    features: ["Adjustable Height", "Lumbar Support", "RGB Lights"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Gaming Controller Elite",
    brand: "ProPad",
    category: "Controllers",
    price: 79,
    features: ["Bluetooth", "Programmable Buttons", "Rechargeable"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664392434825-eb95db0931d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8fDB8fHww",
  },

  // Starting from id 7 up to 50:

  {
    id: 7,
    name: "Ultra Wide Gaming Monitor 34\"",
    brand: "ScreenMax",
    category: "Display",
    price: 699,
    features: ["Ultra-Wide", "100Hz Refresh Rate", "Curved Display"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "RGB Mechanical Keyboard Pro",
    brand: "KeyPro",
    category: "Peripherals",
    price: 129,
    features: ["Custom Macros", "RGB Backlight", "PBT Keycaps"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Gaming Mouse Pad XXL",
    brand: "ClickFast",
    category: "Accessories",
    price: 29,
    features: ["Extra Large", "Anti-Slip Base", "Water Resistant"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    name: "Streaming Webcam 1080p",
    brand: "StreamX",
    category: "Streaming",
    price: 89,
    features: ["Full HD", "Auto Focus", "Built-in Microphone"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1630051822408-b80dde2f5681?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    name: "Surround Sound Gaming Speakers",
    brand: "GameMaster",
    category: "Audio",
    price: 179,
    features: ["5.1 Surround", "Subwoofer", "Bluetooth"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1719360604085-06a1735d75c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    name: "Professional Gaming Chair",
    brand: "ComfortZone",
    category: "Furniture",
    price: 399,
    features: ["Ergonomic", "Lumbar Support", "Adjustable Armrests"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    name: "Wireless Gaming Earbuds",
    brand: "SoundPulse",
    category: "Audio",
    price: 129,
    features: ["Bluetooth 5.0", "Noise Isolation", "Long Battery"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1717620891116-4c670d6e4a54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    name: "Gaming Laptop Backpack",
    brand: "GearMax",
    category: "Accessories",
    price: 69,
    features: ["Water Resistant", "Multiple Compartments", "Padded"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635514569156-ca58f1247e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    name: "RGB Gaming Mouse Pro",
    brand: "ClickFast",
    category: "Peripherals",
    price: 79,
    features: ["Adjustable DPI", "RGB Lighting", "Ergonomic Design"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1595744043037-68de3376ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: "High Precision Gaming Joystick",
    brand: "ProPad",
    category: "Controllers",
    price: 139,
    features: ["Ergonomic", "Programmable Buttons", "Wireless"],
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1642056446796-8c7d1dcb630b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 17,
    name: "Gaming Desk Mat XXL",
    brand: "GearMax",
    category: "Accessories",
    price: 39,
    features: ["Water Resistant", "Anti-Slip", "Smooth Surface"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 18,
    name: "Professional Streaming Mic",
    brand: "StreamX",
    category: "Streaming",
    price: 149,
    features: ["USB Plug & Play", "Noise Reduction", "Adjustable Arm"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 19,
    name: "Gaming VR Headset",
    brand: "VRMaster",
    category: "VR",
    price: 799,
    features: ["High Resolution", "Wide FOV", "Wireless"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720748013759-c7e46c3e630c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 20,
    name: "RGB LED Strip for PC",
    brand: "LightFX",
    category: "Accessories",
    price: 49,
    features: ["Remote Controlled", "Multiple Modes", "Easy Installation"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1672819456243-0c51b90bfa15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 21,
    name: "Gaming Chair Footrest",
    brand: "ComfortZone",
    category: "Furniture",
    price: 59,
    features: ["Adjustable Height", "Soft Padding", "Sturdy"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1529480384838-c1681c84aca5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 22,
    name: "High-Speed USB Hub",
    brand: "GearMax",
    category: "Accessories",
    price: 39,
    features: ["4 Ports", "Plug & Play", "Compact Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1663787591774-c1829054084c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 23,
    name: "Noise Cancelling Gaming Headset",
    brand: "SoundPulse",
    category: "Audio",
    price: 159,
    features: ["Surround Sound", "Noise Cancelling", "Wireless"],
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1531812494838-636e337af5a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    id: 24,
    name: "Gaming Laptop Cooling Pad",
    brand: "GearMax",
    category: "Accessories",
    price: 49,
    features: ["LED Fans", "Ergonomic", "USB Powered"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1588699219474-fce022b9f633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxnYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 25,
    name: "Pro Gaming Desk",
    brand: "ComfortZone",
    category: "Furniture",
    price: 299,
    features: ["Large Surface", "Cable Management", "Sturdy Build"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxnYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 26,
    name: "Wireless Gaming Keyboard",
    brand: "KeyPro",
    category: "Peripherals",
    price: 149,
    features: ["RGB Backlight", "Wireless", "Long Battery"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1640972040132-28b62b6b3718?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxnYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 27,
    name: "Gaming Router Pro",
    brand: "NetGear",
    category: "Networking",
    price: 199,
    features: ["Low Latency", "Dual Band", "QoS Support"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1567094764148-bb14c3e6f14c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxnYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    name: "High Refresh Rate Monitor 27\"",
    brand: "ScreenMax",
    category: "Display",
    price: 399,
    features: ["165Hz Refresh Rate", "1ms Response", "IPS Panel"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720748014060-cafcf81c7bbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxnYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 29,
    name: "Gaming Microphone Boom Arm",
    brand: "StreamX",
    category: "Streaming",
    price: 59,
    features: ["Adjustable", "Sturdy Clamp", "360 Rotation"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723017059715-e52c558427ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
  },
  {
    id: 30,
    name: "RGB PC Case Fans (Set of 3)",
    brand: "LightFX",
    category: "Accessories",
    price: 59,
    features: ["RGB Lighting", "Quiet Operation", "Easy Install"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
  },
  {
    id: 31,
    name: "Gaming Laptop Stand",
    brand: "GearMax",
    category: "Accessories",
    price: 39,
    features: ["Ergonomic", "Adjustable Height", "Aluminum Build"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1634034379073-f689b460a3fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
  },
  {
    id: 32,
    name: "Wireless Gaming Headset",
    brand: "SoundPulse",
    category: "Audio",
    price: 139,
    features: ["Bluetooth 5.0", "Noise Cancelling", "Rechargeable"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
  },
  {
    id: 33,
    name: "Gaming Monitor Stand",
    brand: "ScreenMax",
    category: "Display",
    price: 89,
    features: ["Adjustable Height", "Swivel", "Sturdy Build"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1636542980176-cd7822b5a5cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
  },
  {
    id: 34,
    name: "Compact Gaming Controller",
    brand: "ProPad",
    category: "Controllers",
    price: 59,
    features: ["Wireless", "Rechargeable", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723028502825-9384a43b836c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "RGB Gaming Mouse Bungee",
    brand: "ClickFast",
    category: "Accessories",
    price: 19,
    features: ["Adjustable", "RGB Lighting", "Anti-Slip Base"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723028769924-d18a792aeb07?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
  },
  {
    id: 36,
    name: "Gaming PC Case Mid-Tower",
    brand: "LightFX",
    category: "Accessories",
    price: 149,
    features: ["Tempered Glass", "RGB Fans", "Cable Management"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723028769924-d18a792aeb07?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
  },
  {
    id: 37,
    name: "Multi-Device Gaming Keyboard",
    brand: "KeyPro",
    category: "Peripherals",
    price: 119,
    features: ["Bluetooth & USB", "RGB Backlight", "Mechanical Switches"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042115737-70ad7240a74f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 38,
    name: "Ultra Precision Gaming Mouse",
    brand: "ClickFast",
    category: "Peripherals",
    price: 89,
    features: ["Adjustable DPI", "Wired", "Ergonomic"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042115737-70ad7240a74f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 39,
    name: "RGB Mechanical Gaming Keyboard TKL",
    brand: "KeyPro",
    category: "Peripherals",
    price: 109,
    features: ["Tenkeyless", "RGB Lighting", "Mechanical Switches"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720829115024-00b3bf114c4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 40,
    name: "Gaming Monitor 32\" 4K",
    brand: "ScreenMax",
    category: "Display",
    price: 799,
    features: ["4K UHD", "144Hz Refresh Rate", "HDR10"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1723677830933-4a9d84d17b4a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 41,
    name: "Gaming Chair with Headrest",
    brand: "ComfortZone",
    category: "Furniture",
    price: 349,
    features: ["Ergonomic", "Headrest", "Lumbar Support"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720557844614-f43eacf6bcd4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 42,
    name: "Pro Streaming Webcam 4K",
    brand: "StreamX",
    category: "Streaming",
    price: 249,
    features: ["Ultra HD", "Auto Focus", "Built-in Mic"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731752868610-5bcf20c0969f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 43,
    name: "Gaming Wireless Earbuds",
    brand: "SoundPulse",
    category: "Audio",
    price: 159,
    features: ["Bluetooth 5.0", "Noise Isolation", "Long Battery"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720677851295-ae8e2094eaf4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 44,
    name: "Gaming Laptop Cooling Stand",
    brand: "GearMax",
    category: "Accessories",
    price: 59,
    features: ["LED Fans", "Ergonomic", "USB Powered"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1740060962667-a8c95a683d25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 45,
    name: "Pro Gaming Headset Wireless",
    brand: "GameMaster",
    category: "Audio",
    price: 189,
    features: ["Wireless", "Surround Sound", "Noise Cancelling"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723028836027-f4cba064f884?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    id: 46,
    name: "Gaming Desk Cable Management Kit",
    brand: "GearMax",
    category: "Accessories",
    price: 39,
    features: ["Velcro Straps", "Adhesive Clips", "Easy Install"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042113037-417f65ffc458?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 47,
    name: "Gaming Monitor Arm Stand",
    brand: "ScreenMax",
    category: "Display",
    price: 119,
    features: ["Adjustable Height", "Tilt & Swivel", "Clamp Mount"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042113054-84477c7f2e1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    id: 48,
    name: "RGB Gaming Mouse Pad",
    brand: "ClickFast",
    category: "Accessories",
    price: 29,
    features: ["RGB Lighting", "Water Resistant", "Anti-Slip"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042113054-84477c7f2e1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    id: 49,
    name: "Wireless Gaming Headset Pro",
    brand: "SoundPulse",
    category: "Audio",
    price: 179,
    features: ["Bluetooth 5.1", "Noise Cancelling", "Surround Sound"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720342619256-c78772539754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  },
  {
    id: 50,
    name: "Gaming Controller with Haptic Feedback",
    brand: "ProPad",
    category: "Controllers",
    price: 99,
    features: ["Wireless", "Programmable Buttons", "Haptic Feedback"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720806036601-5d4173aa638d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 51,
    name: "Pro Gaming Keyboard XL",
    brand: "KeyPro",
    category: "Peripherals",
    price: 159,
    features: ["RGB Lighting", "Mechanical Switches", "Wrist Rest"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720806036601-5d4173aa638d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 52,
    name: "Wireless Gaming Mouse Ultra",
    brand: "ClickFast",
    category: "Peripherals",
    price: 99,
    features: ["Adjustable DPI", "Bluetooth 5.0", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731535536703-7ec9e7c4cb5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
  },
  {
    id: 53,
    name: "4K Gaming Monitor Pro",
    brand: "ScreenMax",
    category: "Display",
    price: 899,
    features: ["3840x2160", "144Hz", "G-Sync"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739054760972-a65a3fe8e639?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    id: 54,
    name: "RGB Backlit Gaming Chair",
    brand: "ComfortZone",
    category: "Furniture",
    price: 279,
    features: ["Adjustable Height", "Lumbar Support", "RGB Lighting"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720983571850-26fc90a0e9c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  },
  {
    id: 55,
    name: "Gaming Controller Wireless X",
    brand: "ProPad",
    category: "Controllers",
    price: 89,
    features: ["Bluetooth", "Rechargeable", "Programmable Buttons"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1738614647398-25bd0bfba344?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 56,
    name: "High Performance Gaming Router",
    brand: "NetGear",
    category: "Networking",
    price: 249,
    features: ["Low Latency", "Dual Band", "QoS Support"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723058789381-ed8742ec29dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
  {
    id: 57,
    name: "Gaming Headset Surround Pro",
    brand: "SoundPulse",
    category: "Audio",
    price: 199,
    features: ["7.1 Surround", "Noise Cancelling", "Wireless"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720545544808-3635fe849af0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  },
  {
    id: 58,
    name: "Gaming Laptop Backpack Pro",
    brand: "GearMax",
    category: "Accessories",
    price: 89,
    features: ["Water Resistant", "Padded", "USB Charging Port"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739981551324-44acc0ccb0a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  },
  {
    id: 59,
    name: "Ultra Precision Gaming Mouse Wired",
    brand: "ClickFast",
    category: "Peripherals",
    price: 79,
    features: ["Adjustable DPI", "RGB Lighting", "Ergonomic Grip"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731844973428-69a8cda298b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
  },
  {
    id: 60,
    name: "RGB Mechanical Keyboard Compact",
    brand: "KeyPro",
    category: "Peripherals",
    price: 139,
    features: ["RGB Backlight", "Mechanical Switches", "Compact Design"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731506659993-678476bb99ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
  },
  {
    id: 61,
    name: "Gaming Desk with LED Lighting",
    brand: "ComfortZone",
    category: "Furniture",
    price: 329,
    features: ["Cable Management", "RGB Lighting", "Large Surface"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739561888903-59486ac85c6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
  },
  {
    id: 62,
    name: "Pro Streaming Microphone",
    brand: "StreamX",
    category: "Streaming",
    price: 179,
    features: ["USB", "Noise Reduction", "Adjustable Arm"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731945930012-0200a2ee7042?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
  },
  {
    id: 63,
    name: "VR Gaming Headset Elite",
    brand: "VRMaster",
    category: "VR",
    price: 899,
    features: ["Wireless", "High Resolution", "Wide FOV"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1719852096896-2a7f8340b1e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
  },
  {
    id: 64,
    name: "RGB PC Case Fans Set",
    brand: "LightFX",
    category: "Accessories",
    price: 69,
    features: ["RGB Lighting", "Quiet", "Easy Install"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720707358206-133fd7466d5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
  },
  {
    id: 65,
    name: "Gaming Laptop Cooling Pad",
    brand: "GearMax",
    category: "Accessories",
    price: 59,
    features: ["LED Fans", "Ergonomic Design", "USB Powered"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720122913134-31ff954fc5ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
  },
  {
    id: 66,
    name: "Multi-Device Wireless Keyboard",
    brand: "KeyPro",
    category: "Peripherals",
    price: 129,
    features: ["Bluetooth", "RGB Backlight", "Rechargeable"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681488151540-1fe7f3e039ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
  },
  {
    id: 67,
    name: "Gaming Controller Pro V2",
    brand: "ProPad",
    category: "Controllers",
    price: 109,
    features: ["Wireless", "Programmable", "Rechargeable"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1738449258742-f98da1490e2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
  },
  {
    id: 68,
    name: "Gaming Mouse Pad XL",
    brand: "ClickFast",
    category: "Accessories",
    price: 39,
    features: ["Anti-Slip", "Water Resistant", "Large Surface"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1738449258742-f98da1490e2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
  },
  {
    id: 69,
    name: "Mechanical Gaming Keyboard RGB",
    brand: "KeyPro",
    category: "Peripherals",
    price: 149,
    features: ["RGB Lighting", "Mechanical Switches", "Ergonomic"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1677706393601-446864b42ab0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
  },
  {
    id: 70,
    name: "4K HDR Gaming Monitor 32\"",
    brand: "ScreenMax",
    category: "Display",
    price: 799,
    features: ["4K UHD", "144Hz", "HDR10"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1730804371900-c2aa6adbc917?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
  },
  {
    id: 71,
    name: "Gaming Chair Premium",
    brand: "ComfortZone",
    category: "Furniture",
    price: 399,
    features: ["Adjustable", "Lumbar Support", "Headrest"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722849558972-747480525b51?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
  },
  {
    id: 72,
    name: "Wireless Gaming Earbuds Pro",
    brand: "SoundPulse",
    category: "Audio",
    price: 179,
    features: ["Bluetooth 5.1", "Noise Cancelling", "Long Battery"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
  {
    id: 73,
    name: "RGB LED PC Strip",
    brand: "LightFX",
    category: "Accessories",
    price: 59,
    features: ["Remote Controlled", "Multiple Modes", "Easy Installation"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720922579207-251b22182659?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
  },
  {
    id: 74,
    name: "Gaming Desk Organizer",
    brand: "GearMax",
    category: "Accessories",
    price: 29,
    features: ["Cable Management", "Multiple Compartments", "Sturdy"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731854205489-c8c75a32233a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
  },
  {
    id: 75,
    name: "Pro Streaming Webcam HD",
    brand: "StreamX",
    category: "Streaming",
    price: 129,
    features: ["1080p", "Auto Focus", "Built-in Mic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731910276402-cf0e8d33b7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
  },
  {
    id: 76,
    name: "Gaming Monitor Stand Adjustable",
    brand: "ScreenMax",
    category: "Display",
    price: 99,
    features: ["Height Adjustable", "Tilt & Swivel", "Sturdy"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1738740635225-e4bd48d66889?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8",
  },
  {
    id: 77,
    name: "Gaming Headset Wired Pro",
    brand: "GameMaster",
    category: "Audio",
    price: 149,
    features: ["Surround Sound", "Noise Cancelling", "Comfort Fit"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1730957005978-41753fd38d1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
  },
  {
    id: 78,
    name: "Wireless Gaming Mouse Mini",
    brand: "ClickFast",
    category: "Peripherals",
    price: 69,
    features: ["Compact", "Adjustable DPI", "Rechargeable"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681489571344-b636f304a1e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
  },
  {
    id: 79,
    name: "RGB Gaming Mouse Pad Small",
    brand: "ClickFast",
    category: "Accessories",
    price: 19,
    features: ["RGB Lighting", "Anti-Slip", "Water Resistant"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720486572658-d3707b647e25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
  },
  {
    id: 80,
    name: "Gaming Laptop Stand Pro",
    brand: "GearMax",
    category: "Accessories",
    price: 49,
    features: ["Adjustable Height", "Aluminum", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731404830883-67fffdba8339?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
  },
  {
    id: 81,
    name: "Pro Gaming Keyboard Wireless",
    brand: "KeyPro",
    category: "Peripherals",
    price: 179,
    features: ["Wireless", "RGB Backlight", "Mechanical Switches"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1677175327289-0aa754ea1fb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8",
  },
  {
    id: 82,
    name: "Gaming Desk Mat Waterproof",
    brand: "GearMax",
    category: "Accessories",
    price: 39,
    features: ["Waterproof", "Anti-Slip", "Large Surface"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739981551308-e45934e03726?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8",
  },
  {
    id: 83,
    name: "Gaming Controller Wired",
    brand: "ProPad",
    category: "Controllers",
    price: 49,
    features: ["Wired", "Programmable Buttons", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720687130893-9b79256aee31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
  },
  {
    id: 84,
    name: "Gaming Microphone USB",
    brand: "StreamX",
    category: "Streaming",
    price: 99,
    features: ["USB Plug & Play", "Noise Reduction", "Adjustable Stand"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1666477585139-d1d30d65dec5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
  },
  {
    id: 85,
    name: "RGB Gaming Mouse Wired",
    brand: "ClickFast",
    category: "Peripherals",
    price: 69,
    features: ["RGB Lighting", "Adjustable DPI", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739981551324-84722bb00595?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgyfHx8ZW58MHx8fHx8",
  },
  {
    id: 86,
    name: "Gaming Laptop Backpack Lite",
    brand: "GearMax",
    category: "Accessories",
    price: 59,
    features: ["Water Resistant", "Padded", "Lightweight"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676194560725-bf17a3162d2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8",
  },
  {
    id: 87,
    name: "Pro Gaming Headset Wired",
    brand: "GameMaster",
    category: "Audio",
    price: 139,
    features: ["Wired", "Surround Sound", "Noise Cancelling"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720530461586-ce03db2e3e8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 88,
    name: "Gaming Monitor Curved 27\"",
    brand: "ScreenMax",
    category: "Display",
    price: 449,
    features: ["Curved Display", "144Hz", "1ms Response"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1741458386318-b2a9daff86d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8",
  },
  {
    id: 89,
    name: "Gaming Chair Compact",
    brand: "ComfortZone",
    category: "Furniture",
    price: 219,
    features: ["Compact Design", "Lumbar Support", "Adjustable Height"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739561888863-8774b86a98b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
  },
  {
    id: 90,
    name: "Wireless Gaming Earbuds Lite",
    brand: "SoundPulse",
    category: "Audio",
    price: 129,
    features: ["Bluetooth 5.0", "Noise Isolation", "Long Battery"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720518397841-e12926778d7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk0fHx8ZW58MHx8fHx8",
  },
  {
    id: 91,
    name: "RGB PC Case Fans Pro",
    brand: "LightFX",
    category: "Accessories",
    price: 79,
    features: ["RGB Lighting", "Quiet", "Easy Install"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1725621846719-be205e6b5518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",
  },
  {
    id: 92,
    name: "Gaming Desk Organizer Pro",
    brand: "GearMax",
    category: "Accessories",
    price: 49,
    features: ["Cable Management", "Multiple Compartments", "Sturdy"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720518397764-bd0af1f0b4e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk4fHx8ZW58MHx8fHx8",
  },
  {
    id: 93,
    name: "Pro Streaming Webcam 1080p",
    brand: "StreamX",
    category: "Streaming",
    price: 149,
    features: ["1080p HD", "Auto Focus", "Built-in Mic"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723679193599-4f724be5bd63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 94,
    name: "Gaming Monitor Adjustable Stand",
    brand: "ScreenMax",
    category: "Display",
    price: 109,
    features: ["Height Adjustable", "Tilt & Swivel", "Clamp Mount"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720440892825-d232eeccb039?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 95,
    name: "Gaming Headset Wireless Lite",
    brand: "GameMaster",
    category: "Audio",
    price: 119,
    features: ["Wireless", "Surround Sound", "Noise Cancelling"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720719926165-717f985123a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 96,
    name: "Gaming Mouse Wireless Mini",
    brand: "ClickFast",
    category: "Peripherals",
    price: 59,
    features: ["Compact", "Adjustable DPI", "Bluetooth"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739042113412-abaa3cf7c95b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 97,
    name: "RGB Mechanical Keyboard Full Size",
    brand: "KeyPro",
    category: "Peripherals",
    price: 159,
    features: ["RGB Backlight", "Mechanical Switches", "Full Size Layout"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1742132158871-21ee0165b109?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 98,
    name: "Gaming Laptop Cooling Stand Pro",
    brand: "GearMax",
    category: "Accessories",
    price: 69,
    features: ["LED Fans", "Ergonomic Design", "USB Powered"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1732791611447-49c295bbfb91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D",
  },
];


const GamingProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(gamingData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(gamingData.slice(0, newCount));
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
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Explore Gaming Gear</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-amber-600 font-semibold">
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
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-white/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-amber-600 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-gray-900">
                      <FaHeart className="cursor-pointer hover:text-amber-600" />
                      <FaEye className="cursor-pointer hover:text-amber-600" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-amber-600">${item.price}</p>
                  <span className="text-sm text-gray-700">{item.rating}★</span>
                </div>
                <div className="flex flex-wrap gap-1 text-xs text-gray-600 mt-2">
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    item.stock ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          {visibleCount < gamingData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamingProductGrid;
