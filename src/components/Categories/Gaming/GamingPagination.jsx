"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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
];

const FitnessPagination = () => {
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
            Explore Our Fitness Gear
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
                : "bg-white text-gray-700 hover:bg-gray-100"
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
                    : "bg-white text-gray-700 hover:bg-gray-100"
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
                : "bg-white text-gray-700 hover:bg-gray-100"
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

export default FitnessPagination;
