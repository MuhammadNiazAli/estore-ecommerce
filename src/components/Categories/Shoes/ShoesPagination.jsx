"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
  {
    id: 1,
    name: "Running Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 99,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1706611760808-43acd12fd419?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Casual Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1706611760808-43acd12fd419?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Performance Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 89,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1656998596852-fa5b6348f79a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "Classic Leather Shoes",
    brand: "EliteStyle",
    category: "Shoes",
    price: 129,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1656998596852-fa5b6348f79a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    name: "Lightweight Running Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 115,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
  },
  {
    id: 6,
    name: "High-top Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1678802910315-b1bf6ca9f6a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8",
  },
  {
    id: 7,
    name: "Trail Running Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 105,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1600901171436-154bd145b03b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
  },
  {
    id: 8,
    name: "Leather Loafers",
    brand: "EliteStyle",
    category: "Shoes",
    price: 140,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1679111513962-762e14317937?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
  },
  {
    id: 9,
    name: "Slip-On Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 85,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1713603577861-3c87c076e117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
  },
  {
    id: 10,
    name: "Sporty Running Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1713603577861-3c87c076e117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
  },
  {
    id: 11,
    name: "Canvas Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 65,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1580893724754-8eb3791fd7f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
  },
  {
    id: 12,
    name: "Chukka Boots",
    brand: "EliteStyle",
    category: "Shoes",
    price: 130,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1724921195463-fd7a1a930241?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8",
  },
  {
    id: 13,
    name: "Running Shoes with Cushion",
    brand: "Sportify",
    category: "Shoes",
    price: 110,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1584737969339-21edebd193ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
  },
  {
    id: 14,
    name: "Black Formal Shoes",
    brand: "EliteStyle",
    category: "Shoes",
    price: 160,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1612015670817-0127d21628d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Comfort Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 70,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1712168332222-c1996322f935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8",
  },
  {
    id: 16,
    name: "Lightweight Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 100,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1617182773316-d005fadbfd68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Slip-On Casual Shoes",
    brand: "UrbanWear",
    category: "Shoes",
    price: 80,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1713603550135-a444bff709d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgyfHx8ZW58MHx8fHx8",
  },
  {
    id: 18,
    name: "Outdoor Hiking Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 115,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1542219550-37153d387c27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8",
  },
  {
    id: 19,
    name: "Suede Loafers",
    brand: "EliteStyle",
    category: "Shoes",
    price: 145,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1598691800903-24951242c503?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8",
  },
  {
    id: 20,
    name: "Classic Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 21,
    name: "Urban Street Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 85,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1662037132011-1c403fd1705c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 22,
    name: "Mesh Running Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 110,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1662037132011-1c403fd1705c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 23,
    name: "Retro Classic Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1657801566558-23dcdee5a7b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
  },
  {
    id: 24,
    name: "Trail Hiking Boots",
    brand: "OutdoorPro",
    category: "Shoes",
    price: 130,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1705096953495-8ea06879b986?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
  },
  {
    id: 25,
    name: "Comfort Walking Shoes",
    brand: "UrbanWear",
    category: "Shoes",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1705997696447-acfa8f31da50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8",
  },
  {
    id: 26,
    name: "Leather Formal Loafers",
    brand: "EliteStyle",
    category: "Shoes",
    price: 145,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611080027147-a1a0b6e05168?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkzfHx8ZW58MHx8fHx8",
  },
  {
    id: 27,
    name: "Sport Performance Trainers",
    brand: "Sportify",
    category: "Shoes",
    price: 120,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1706611760588-41ebba31012b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk0fHx8ZW58MHx8fHx8",
  },
  {
    id: 28,
    name: "Winter Waterproof Boots",
    brand: "OutdoorPro",
    category: "Shoes",
    price: 150,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1644426059269-36535c7c00fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8",
  },
  {
    id: 29,
    name: "Classic Canvas Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 65,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",
  },
  {
    id: 30,
    name: "Lightweight Running Trainers",
    brand: "Sportify",
    category: "Shoes",
    price: 105,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1706550631087-5a8b000e6be8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8",
  },
  {
    id: 31,
    name: "High-Performance Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 125,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613740104907-d537a85e1274?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8",
  },
  {
    id: 32,
    name: "Classic Leather Boots",
    brand: "EliteStyle",
    category: "Shoes",
    price: 155,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613740104907-d537a85e1274?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8",
  },
  {
    id: 33,
    name: "Slip-On Casual Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 80,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1710553455489-0cda9a34f0bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Trail Hiking Sneakers",
    brand: "OutdoorPro",
    category: "Shoes",
    price: 115,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Comfort Fit Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1643427806881-e8bc8e05b796?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Water-Resistant Trainers",
    brand: "Sportify",
    category: "Shoes",
    price: 110,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1691067951700-138ca8f4841f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Summer Casual Sandals",
    brand: "UrbanWear",
    category: "Shoes",
    price: 60,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Lightweight Trail Runners",
    brand: "OutdoorPro",
    category: "Shoes",
    price: 125,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1695686331766-16a2c3c2c382?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    name: "Classic White Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 85,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1602722830400-aa44b2d6ead9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Bold Leather Sneakers",
    brand: "EliteStyle",
    category: "Shoes",
    price: 140,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1710553455716-a0d7ad18452b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Comfort Running Shoes",
    brand: "Sportify",
    category: "Shoes",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1625515921520-ca6f70457641?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Elegant Leather Shoes",
    brand: "EliteStyle",
    category: "Shoes",
    price: 150,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1625515921520-ca6f70457641?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Urban Hiking Boots",
    brand: "OutdoorPro",
    category: "Shoes",
    price: 135,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1698591020373-6a183ba43308?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Classic Slip-On Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1739138054429-be0ef776a03e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Trail Runner Pro",
    brand: "Sportify",
    category: "Shoes",
    price: 115,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1620790458588-c6c4a0d68a84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Leather Ankle Boots",
    brand: "EliteStyle",
    category: "Shoes",
    price: 160,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1710553455483-c29d596d1235?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Sporty Mesh Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 105,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1656944227425-5646be300a14?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Urban Comfort Sneakers",
    brand: "UrbanWear",
    category: "Shoes",
    price: 90,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1700854088063-e558c33fe3cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyOHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ShoesPagination = () => {
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
            Explore Our Shoes 
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

export default ShoesPagination;
