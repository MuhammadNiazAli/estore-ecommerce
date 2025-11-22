"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Movies Deals Data
const movieDeals = [
  {
    id: 1,
    name: "Inception",
    genre: "Sci-Fi",
    price: 19,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww",
    features: ["Blu-ray", "1080p HD", "Digital Copy"],
  },
  {
    id: 2,
    name: "The Dark Knight",
    genre: "Action",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fHww",
    features: ["DVD", "720p HD", "Bonus Scenes"],
  },
  {
    id: 3,
    name: "Interstellar",
    genre: "Adventure",
    price: 18,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWVzfGVufDB8fDB8fHww",
    features: ["Blu-ray", "4K UHD", "Digital Code"],
  },
  {
    id: 4,
    name: "Avengers: Endgame",
    genre: "Superhero",
    price: 20,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "4K UHD", "Director’s Cut"],
  },
  {
    id: 5,
    name: "Joker",
    genre: "Drama",
    price: 16,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1684923604860-64e661f2ff72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWVzfGVufDB8fDB8fHww",
    features: ["DVD", "1080p HD", "Deleted Scenes"],
  },
  {
    id: 6,
    name: "Avatar",
    genre: "Fantasy",
    price: 22,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1591533452544-5da8a7eee088?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    features: ["Blu-ray", "3D Version", "Extended Cut"],
  },
  {
    id: 7,
    name: "Titanic",
    genre: "Romance",
    price: 14,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635942104748-c869be8c597c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    features: ["Blu-ray", "HD Remastered", "Bonus Content"],
  },
  {
    id: 8,
    name: "Gladiator",
    genre: "Historical",
    price: 17,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613069508636-62023092f9d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    features: ["DVD", "Full HD", "Special Features"],
  },
  {
    id: 9,
    name: "The Matrix",
    genre: "Sci-Fi",
    price: 19,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1547156979-b57c6439f9d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    features: ["Blu-ray", "HDR", "Behind the Scenes"],
  },
  {
    id: 10,
    name: "Forrest Gump",
    genre: "Drama",
    price: 13,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613069508636-62023092f9d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    features: ["DVD", "Digital Copy", "Bonus Commentary"],
  },
  {
    id: 11,
    name: "The Godfather",
    genre: "Crime",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1724963578391-dcf77410bb73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    features: ["Blu-ray", "4K Remastered", "Collector's Edition"],
  },
  {
    id: 12,
    name: "Pulp Fiction",
    genre: "Crime",
    price: 14,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1709916335779-e2b763a4a133?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    features: ["DVD", "Bonus Interviews", "Digital Code"],
  },
  {
    id: 13,
    name: "The Lion King",
    genre: "Animation",
    price: 12,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1672742897777-7adeebaa430f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    features: ["Blu-ray", "Kids Mode", "Sing-Along"],
  },
  {
    id: 14,
    name: "Frozen II",
    genre: "Animation",
    price: 16,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1719215599954-317788432f1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    features: ["Blu-ray", "4K UHD", "Bonus Songs"],
  },
  {
    id: 15,
    name: "Avengers: Infinity War",
    genre: "Superhero",
    price: 21,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1605055510925-4c9626126167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    features: ["Blu-ray", "IMAX Scenes", "Deleted Footage"],
  },
  {
    id: 16,
    name: "Doctor Strange",
    genre: "Superhero",
    price: 18,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1709842822358-006f08261139?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "4K UHD", "Digital Bonus"],
  },
{
    id: 17,
    name: "Black Panther",
    genre: "Superhero",
    price: 19,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "IMAX Version", "Director Commentary"],
  },
  {
    id: 18,
    name: "Captain Marvel",
    genre: "Superhero",
    price: 18,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1659497559069-c7df574dff75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "4K UHD", "Behind the Scenes"],
  },
  {
    id: 19,
    name: "Thor: Ragnarok",
    genre: "Superhero",
    price: 20,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "HDR", "Bonus Clips"],
  },
  {
    id: 20,
    name: "Guardians of the Galaxy",
    genre: "Superhero",
    price: 17,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1658999109686-c1d354090b6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Blu-ray", "Digital Copy", "Exclusive Poster"],
  },
  {
    id: 21,
    name: "Spider-Man: No Way Home",
    genre: "Superhero",
    price: 22,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1634929754067-3a2e386e77f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["4K UHD", "Deleted Scenes", "Special Edition"],
  },
  {
    id: 22,
    name: "Shang-Chi",
    genre: "Superhero",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Blu-ray", "4K UHD", "Making Of"],
  },
  {
    id: 23,
    name: "Black Widow",
    genre: "Superhero",
    price: 19,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1621693884514-98bac2d52542?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Blu-ray", "HDR", "Deleted Scenes"],
  },
  {
    id: 24,
    name: "Captain America: Civil War",
    genre: "Superhero",
    price: 17,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1621693733036-e00dc554e19e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Blu-ray", "IMAX", "Collector Edition"],
  },
  {
    id: 25,
    name: "Doctor Strange in the Multiverse",
    genre: "Superhero",
    price: 21,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1560354508-468e7201bbc2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["4K UHD", "Special Bonus", "Behind Scenes"],
  },
  {
    id: 26,
    name: "Iron Man",
    genre: "Superhero",
    price: 16,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1621411643712-5e2db1a23269?w=400&auto=format&fit=crop&q=60",
    features: ["Blu-ray", "Digital Copy", "Deleted Clips"],
  },
  {
    id: 27,
    name: "Hulk",
    genre: "Superhero",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1658999185075-3d24b187643f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxtb3ZpZXN8ZW58MHx8MHx8fDA%3D",
    features: ["DVD", "Bonus Features", "HDR"],
  },
  {
    id: 28,
    name: "The Batman",
    genre: "Action",
    price: 22,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613051884057-d9130a00a5f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9ycm9yfGVufDB8fDB8fHww",
    features: ["4K UHD", "Director's Commentary", "Bonus Scenes"],
  },
  {
    id: 29,
    name: "Wonder Woman 1984",
    genre: "Superhero",
    price: 18,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9ycm9yfGVufDB8fDB8fHww",
    features: ["Blu-ray", "HDR", "Digital Copy"],
  },
  {
    id: 30,
    name: "Justice League",
    genre: "Superhero",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1603516863860-7d5c93a83fe8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D",
    features: ["4K UHD", "Zack Snyder Cut", "Bonus Features"],
  },
  {
    id: 31,
    name: "Aquaman",
    genre: "Superhero",
    price: 17,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1aWQlMjBnYW1lfGVufDB8fDB8fHww",
    features: ["Blu-ray", "IMAX Scenes", "Digital Code"],
  },
  {
    id: 32,
    name: "Suicide Squad",
    genre: "Action",
    price: 18,
    rating: 3,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1723028502825-9384a43b836c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNxdWlkJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["DVD", "Bonus Scenes", "Exclusive Art"],
  },
  {
    id: 33,
    name: "Deadpool",
    genre: "Comedy",
    price: 15,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1651595876302-951a9965e4c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNxdWlkJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "HDR", "Director's Commentary"],
  },
  {
    id: 34,
    name: "Logan",
    genre: "Action",
    price: 17,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww",
    features: ["4K UHD", "Black & White Version", "Bonus Scenes"],
  },
  {
    id: 35,
    name: "Venom",
    genre: "Action",
    price: 18,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fHww",
    features: ["Blu-ray", "Deleted Scenes", "Behind the Scenes"],
  },
  {
    id: 36,
    name: "Morbius",
    genre: "Action",
    price: 16,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllfGVufDB8fDB8fHww",
    features: ["Blu-ray", "Bonus Clips", "Digital Copy"],
  },
  {
    id: 37,
    name: "Eternals",
    genre: "Superhero",
    price: 21,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["4K UHD", "HDR", "Making Of"],
  },
  {
    id: 38,
    name: "Shazam!",
    genre: "Comedy",
    price: 17,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1620510625142-b45cbb784397?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "Bonus Jokes", "Behind the Scenes"],
  },
  {
    id: 39,
    name: "The Flash",
    genre: "Action",
    price: 20,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1621773433161-bb7d7ef82515?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["4K UHD", "Special Features", "Director Commentary"],
  },
  {
    id: 40,
    name: "Ant-Man and The Wasp",
    genre: "Superhero",
    price: 19,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "HDR", "Behind Scenes"],
  },
  {
    id: 41,
    name: "Captain America: The First Avenger",
    genre: "Superhero",
    price: 16,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1552263296-21bf3d88eb03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "IMAX", "Bonus Footage"],
  },
  {
    id: 42,
    name: "Thor: Love and Thunder",
    genre: "Superhero",
    price: 22,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1627122699541-e9a4445aea38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["4K UHD", "Special Edition", "Exclusive Poster"],
  },
  {
    id: 43,
    name: "Avengers: Age of Ultron",
    genre: "Superhero",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1627122699541-e9a4445aea38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D ",
    features: ["Blu-ray", "IMAX Version", "Deleted Scenes"],
  },
  {
    id: 44,
    name: "Hawkeye",
    genre: "Action",
    price: 15,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "Digital Download", "Bonus Features"],
  },
  {
    id: 45,
    name: "Moon Knight",
    genre: "Action",
    price: 17,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1663099894103-1033de785f70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "HDR", "Director Commentary"],
  },
  {
    id: 46,
    name: "Loki",
    genre: "Superhero",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1654536612462-fc9a595b31eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["4K UHD", "Exclusive Bonus", "Digital Download"],
  },
  {
    id: 47,
    name: "Falcon and the Winter Soldier",
    genre: "Action",
    price: 16,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1660514163811-cc993ac5ff1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY1fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "IMAX", "Deleted Scenes"],
  },
  {
    id: 48,
    name: "WandaVision",
    genre: "Drama",
    price: 15,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1627895766710-7cf5c594f08e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Blu-ray", "4K UHD", "Special Features"],
  },
];

const MoviesFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // ✅ Responsive logic for cards per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(movieDeals.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () =>
    setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // ✅ Split deals into slides
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(
      movieDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
    );
  }

  return (
    <section className="bg-gray-900 text-white py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">
        Movies Featured Deals
      </h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-yellow-400"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${
              (100 / totalSlides) * currentSlide
            }%)`,
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
                    {/* Genre Badge */}
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.genre}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 my-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < deal.rating
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold text-yellow-400">
                        ${deal.price}
                      </span>
                    </div>

                    {/* Add to Cart */}
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
            currentSlide === totalSlides - 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-yellow-400"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default MoviesFeaturedDeals;
