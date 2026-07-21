"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample Movies Data
const moviesData = [
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
];

const MoviesFilters = () => {
  const [filters, setFilters] = useState({
    director: [],
    genre: [],
    features: [],
    minPrice: 0,
    maxPrice: 30,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter Logic
  useEffect(() => {
    let result = moviesData;

    if (filters.search) {
      result = result.filter((m) =>
        m.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.director.length > 0) {
      result = result.filter((m) => filters.director.includes(m.director));
    }

    if (filters.genre.length > 0) {
      result = result.filter((m) => filters.genre.includes(m.genre));
    }

    if (filters.features.length > 0) {
      result = result.filter((m) =>
        filters.features.every((f) => m.features.includes(f))
      );
    }

    result = result.filter(
      (m) => m.price >= filters.minPrice && m.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((m) => m.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((m) => m.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredMovies([...result]);
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
      director: [],
      genre: [],
      features: [],
      minPrice: 0,
      maxPrice: 30,
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
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
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
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search movies..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Director */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Director</h3>
            {["Christopher Nolan", "Anthony Russo", "Steven Spielberg"].map(
              (director) => (
                <label key={director} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.director.includes(director)}
                    onChange={() => toggleFilter("director", director)}
                    className="mr-2"
                  />
                  {director}
                </label>
              )
            )}
          </div>

          {/* Genre */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Genre</h3>
            {["Action", "Sci-Fi", "Adventure", "Superhero"].map((g) => (
              <label key={g} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.genre.includes(g)}
                  onChange={() => toggleFilter("genre", g)}
                  className="mr-2"
                />
                {g}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {["HD", "4K", "Dolby Audio", "IMAX Enhanced", "Subtitles"].map(
              (feature) => (
                <label key={feature} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.features.includes(feature)}
                    onChange={() => toggleFilter("features", feature)}
                    className="mr-2"
                  />
                  {feature}
                </label>
              )
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="30"
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
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              Available
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

        {/* Movies Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredMovies.length} movies found</p>
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

          {/* Movie Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.slice(0, visibleCount).map((movie) => (
              <div
                key={movie.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-600">{movie.director}</p>
                <p className="text-lg font-bold text-amber-600">${movie.price}</p>
                <p className="text-sm">{movie.stock ? "Available" : "Out of Stock"}</p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredMovies.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
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

export default MoviesFilters;
