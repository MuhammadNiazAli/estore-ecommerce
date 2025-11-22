"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCartPlus, FaHeart, FaSearch } from "react-icons/fa";
import gsap from "gsap";

const products = [
    {
    id: 1,
    name: "Premium Chef Knife",
    price: 129,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1544965838-54ef8406f868?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Knives",
    description: "Precision-crafted chef knife with razor-sharp blade.",
  },
  {
    id: 2,
    name: "Non-Stick Frying Pan",
    price: 59,
    oldPrice: 89,
    image: "https://media.istockphoto.com/id/160633833/photo/new-frying-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=VJNyiRLd2kxnhrkigzFS-6xWKc_m9PEg4d_NuFJ2UgU=",
    category: "Cookware",
    description: "Durable non-stick pan for effortless cooking.",
  },
  {
    id: 3,
    name: "Electric Kettle",
    price: 45,
    oldPrice: 65,
    image: "https://images.unsplash.com/photo-1650940925927-f4a30c930a4d?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Appliances",
    description: "Fast-boiling electric kettle with temperature control.",
  },
  {
    id: 4,
    name: "Saucepan Set",
    price: 99,
    oldPrice: 139,
    image: "https://media.istockphoto.com/id/114389825/photo/stack-of-stainless-steel-saucepans-in-different-sizes.webp?a=1&b=1&s=612x612&w=0&k=20&c=_7_AS4TxzRTA8cMs_5MOt7WX_Et2BiPpTZusINK7uSs=",
    category: "Cookware",
    description: "Premium stainless steel saucepans for versatile cooking.",
  },
  {
    id: 5,
    name: "Santoku Knife",
    price: 119,
    oldPrice: 159,
    image: "https://media.istockphoto.com/id/1154060324/photo/kitchen-knives-set-on-wood-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=WL7yyPSaoI1WSEZEhFcv3t5Sf2L5pa4eibTa_JvlQTA=",
    category: "Knives",
    description: "Lightweight Japanese-style knife for precision cutting.",
  },
  {
    id: 6,
    name: "Blender Pro 500W",
    price: 89,
    oldPrice: 129,
    image: "https://media.istockphoto.com/id/905299310/photo/blender-with-fresh-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=g8CYPvUo7lj4BwQ2_tlqDjWhzRDn44z7IqDOfLSMjcc=",
    category: "Appliances",
    description: "Powerful blender for smoothies and sauces.",
  },
  {
    id: 7,
    name: "Cast Iron Skillet",
    price: 75,
    oldPrice: 109,
    image: "https://media.istockphoto.com/id/517460126/photo/empty-skillet.webp?a=1&b=1&s=612x612&w=0&k=20&c=N6EqeSktoVb3nB6A24vfSj_EEVV1yC1XFxj0HvkhjH8=",
    category: "Cookware",
    description: "Heavy-duty cast iron skillet for even heat distribution.",
  },
  {
    id: 8,
    name: "Bread Knife",
    price: 35,
    oldPrice: 55,
    image: "https://media.istockphoto.com/id/104547346/photo/bread-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=bPndCWIhuQkTechv29ngJU_gcllH0H6EOD-SFFH47GE=",
    category: "Knives",
    description: "Serrated blade for perfect bread slices every time.",
  },
  {
    id: 9,
    name: "Food Processor",
    price: 149,
    oldPrice: 199,
    image: "https://media.istockphoto.com/id/1368175690/photo/woman-cook-turning-on-button-of-food-processor-for-kneading-dough-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=lBPmaFWpmLXqpRLM56FuRVDNxlguHnSwlKIJoN-5k6Q=",
    category: "Appliances",
    description: "Multi-function processor for chopping and blending.",
  },
  {
    id: 10,
    name: "Grill Pan",
    price: 65,
    oldPrice: 95,
    image: "https://plus.unsplash.com/premium_photo-1716488286931-79cef654e08c?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cookware",
    description: "Non-stick grill pan for healthy grilling indoors.",
  },
  {
    id: 11,
    name: "Paring Knife",
    price: 29,
    oldPrice: 49,
    image: "https://media.istockphoto.com/id/1310581109/photo/steel-paring-knife-with-black-plastic-handle-on-white-background-isolated-closeup-metal-chef.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wi3z6erEFDSXTSMmh0XrQXcKti-pSoRTr__Rod1MXd0=",
    category: "Knives",
    description: "Compact knife for precise peeling and cutting.",
  },
  {
    id: 12,
    name: "Stand Mixer",
    price: 199,
    oldPrice: 249,
    image: "https://media.istockphoto.com/id/2206488808/photo/purple-stand-kitchen-mixer-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ea9Qsy0qlOabIs2DLiEP0GxjOoZ40nrXX5clisjwh40=",
    category: "Appliances",
    description: "Powerful stand mixer for baking and kneading dough.",
  },
  {
    id: 13,
    name: "Stockpot 10L",
    price: 89,
    oldPrice: 119,
    image: "https://media.istockphoto.com/id/1152207094/photo/realistic-3d-render-of-cooking-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=sq7txRFJ8kpg5ecUoX2YN_gd69-4ciIhtTWrhqBmD0c=",
    category: "Cookware",
    description: "Large stainless steel stockpot for soups and stews.",
  },
  {
    id: 14,
    name: "Carving Knife",
    price: 79,
    oldPrice: 109,
    image: "https://media.istockphoto.com/id/832724072/photo/traditional-chefs-knife-isolated-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FHz_m6zS6lTfSWcGdHlZRKUxM50gITffo5X8trdDJgY=",
    category: "Knives",
    description: "Perfect knife for slicing meats and roasts.",
  },
  {
    id: 15,
    name: "Microwave Oven",
    price: 129,
    oldPrice: 179,
    image: "https://media.istockphoto.com/id/2202464606/photo/front-view-old-white-microwave-oven-placed-on-isolated-background-technology-object-ferniture.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dg1b8-xsfvWxLFUx_G45J2ywYcWoik03aCfbL_3A3dY=",
    category: "Appliances",
    description: "Compact microwave for quick and efficient heating.",
  },
  {
    id: 16,
    name: "Frying Pan Set (3pcs)",
    price: 119,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1568509651840-e2c75ad69097?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cookware",
    description: "Non-stick frying pan set for everyday cooking.",
  },
  {
    id: 17,
    name: "Fillet Knife",
    price: 59,
    oldPrice: 89,
    image: "https://media.istockphoto.com/id/1178970438/photo/fillet-knife-kitchen-utensil.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nf0gjssxsnnX9kWczvNXwKfo61X6LlxwDY78klk4vqo=",
    category: "Knives",
    description: "Flexible blade for filleting fish and meats.",
  },
  {
    id: 18,
    name: "Coffee Maker",
    price: 139,
    oldPrice: 179,
    image: "https://media.istockphoto.com/id/1586652967/photo/close-up-of-espresso-pouring-from-the-coffee-machine-into-a-coffee-cup-professional-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=g6XeFkXzHspOlV1GGbRkBjNOgYFNz9alBE7RjsqFSCQ=",
    category: "Appliances",
    description: "Automatic coffee maker for perfect brews.",
  },
  {
    id: 19,
    name: "Dutch Oven",
    price: 129,
    oldPrice: 169,
    image: "https://media.istockphoto.com/id/1370697180/photo/red-cast-iron-enamel-frying-pan-dutch-oven-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=w7Ksiyf4YU-QPGLJFxQXQSwER6y8KVCwydFSiy2aWCI=",
    category: "Cookware",
    description: "Versatile pot for braising, baking, and roasting.",
  },
  {
    id: 20,
    name: "Utility Knife",
    price: 39,
    oldPrice: 59,
    image: "https://media.istockphoto.com/id/1347085864/photo/close-up-of-a-person-opening-a-package-with-a-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=-G2xwM1i0TkOA7xvnIY3WkxN2J4d2jm4xLES8jsIDgo=",
    category: "Knives",
    description: "General-purpose knife for kitchen versatility.",
  },
  {
    id: 21,
    name: "Pressure Cooker",
    price: 110,
    oldPrice: 145,
    image: "https://media.istockphoto.com/id/668506602/photo/using-pressure-cooker-in-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=WdQRO0_wd0nfwiaGLBRf5ZxwpYT4c3AoUWJ3gu0cVv0=",
    category: "Cookware",
    description: "High-capacity pressure cooker for faster meals.",
  },
  {
    id: 22,
    name: "Meat Cleaver",
    price: 85,
    oldPrice: 119,
    image: "https://media.istockphoto.com/id/174786239/photo/meat-cleaver.webp?a=1&b=1&s=612x612&w=0&k=20&c=yc40DLO5SSbVWTb1GXFy6nWOookjJpFRd_KtLUGEHVs=",
    category: "Knives",
    description: "Heavy-duty cleaver for chopping through bones.",
  },
  {
    id: 23,
    name: "Toaster 4-Slice",
    price: 79,
    oldPrice: 109,
    image: "https://media.istockphoto.com/id/511019842/photo/new-modern-toaster.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnNtI4KhAVbKITOOjsqsPhzLnyjspE0R5qx6_0_Q_L4=",
    category: "Appliances",
    description: "Stylish toaster with multiple browning settings.",
  },
  {
    id: 24,
    name: "Wok Pan",
    price: 95,
    oldPrice: 139,
    image: "https://media.istockphoto.com/id/2078241953/photo/cook-stir-frying-vegetables-and-meat-in-a-wok.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gf_NNHX84J2DhQXH8ruD_vV8eG033oHmkLNyUizG8oI=",
    category: "Cookware",
    description: "Carbon steel wok for authentic stir-fry dishes.",
  },
  {
    id: 25,
    name: "Bread Slicer Knife",
    price: 49,
    oldPrice: 69,
    image: "https://media.istockphoto.com/id/2171117377/photo/man-cutting-bread-on-chopping-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=kc1ZVcXb01SXOc71fzIM9VcvluU8uIBhLMNZfmOv5os=",
    category: "Knives",
    description: "Perfectly serrated knife for slicing bread loaves.",
  },
  {
    id: 26,
    name: "Air Fryer 6L",
    price: 159,
    oldPrice: 199,
    image: "https://media.istockphoto.com/id/2183010989/photo/chicken-fillet-with-vegetables-from-air-fryer-oven-isolated-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ox5-E2x9k4Ybiyt5sBpFJXpWfV8OHnEv137M5_ksvyM=",
    category: "Appliances",
    description: "Cook healthy crispy meals with less oil.",
  },
  {
    id: 27,
    name: "Casserole Dish",
    price: 85,
    oldPrice: 119,
    image: "https://media.istockphoto.com/id/1272937616/photo/traditional-italian-chicken-stew-soup-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=XYC0-bBgtijsrNK71e2ELCHlOXvRVxUYn-fCvKDFO4Y=",
    category: "Cookware",
    description: "Durable dish for oven-baked recipes.",
  },
  {
    id: 28,
    name: "Chef Santoku Pro",
    price: 135,
    oldPrice: 179,
    image: "https://media.istockphoto.com/id/183891577/photo/young-chef-cutting-coriander.webp?a=1&b=1&s=612x612&w=0&k=20&c=OktLKd5mMA-ZsDUJ7rFrwpY9bhTUjwrI37wZWHwrmcs=",
    category: "Knives",
    description: "Japanese blade for expert slicing and chopping.",
  },
  {
    id: 29,
    name: "Juicer Machine",
    price: 149,
    oldPrice: 199,
    image: "https://media.istockphoto.com/id/171148687/photo/oranges-and-squeezer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tzpus-yNhPjDRyytymnBa9ScLBqfUv06Nm1I6E4MyKY=",
    category: "Appliances",
    description: "Extract fresh juice quickly and efficiently.",
  },
  {
    id: 30,
    name: "Roasting Pan",
    price: 99,
    oldPrice: 139,
    image: "https://media.istockphoto.com/id/1197689056/photo/traditional-danish-dish-of-ribbensteg.webp?a=1&b=1&s=612x612&w=0&k=20&c=q_NHHzRftMkUvlO3AqlemvxkmVuJ_t2guR250-vITVA=",
    category: "Cookware",
    description: "Perfect for roasting meats and vegetables.",
  },
  {
    id: 31,
    name: "Cleaver Knife XL",
    price: 95,
    oldPrice: 129,
    image: "https://media.istockphoto.com/id/120006099/photo/big-utility-kitchen-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=5NubmcyLtGAQB2rR_muFkj4IFqzb0yKtl7rubUkLlEM=",
    category: "Knives",
    description: "Extra large cleaver for serious chopping tasks.",
  },
  {
    id: 32,
    name: "Hand Mixer",
    price: 55,
    oldPrice: 79,
    image: "https://media.istockphoto.com/id/521707765/photo/wire-whisk.webp?a=1&b=1&s=612x612&w=0&k=20&c=fO1azJTG35cQKD9jV3_AkRa6bZs4dz55xNQZMD7-lQ8=",
    category: "Appliances",
    description: "Lightweight and easy-to-use hand mixer.",
  },
  {
    id: 33,
    name: "Griddle Pan",
    price: 89,
    oldPrice: 129,
    image: "https://media.istockphoto.com/id/1214990656/photo/empty-grill-iron-pan-on-wooden-background-top-view-copy-space-healthy-clean-food-and-eating.webp?a=1&b=1&s=612x612&w=0&k=20&c=AQG8Xe61VOwsscdfj9hSFySR1-WD-JzOSf_Lusn2i2k=",
    category: "Cookware",
    description: "Cast iron griddle for even cooking surface.",
  },
  {
    id: 34,
    name: "Boning Knife",
    price: 69,
    oldPrice: 99,
    image: "https://media.istockphoto.com/id/184621717/photo/knife-set.webp?a=1&b=1&s=612x612&w=0&k=20&c=MYtSRAFr9B7l82J2MmTB48PRMaFcnQn1SEwc5hZCgPg=",
    category: "Knives",
    description: "Flexible blade for removing bones from meat.",
  },
  {
    id: 35,
    name: "Induction Cooktop",
    price: 189,
    oldPrice: 239,
    image: "https://media.istockphoto.com/id/1550758299/photo/clean-black-induction-stove-with-control-panel-near-marble-countertop.webp?a=1&b=1&s=612x612&w=0&k=20&c=vCkUR5djXQiUmSl8_Nq7YRe6WHPj4VQNVzHZAoYe7yI=",
    category: "Appliances",
    description: "Energy-efficient induction cooking at your fingertips.",
  },
  {
    id: 36,
    name: "Soup Pot 8L",
    price: 105,
    oldPrice: 139,
    image: "https://media.istockphoto.com/id/2201890980/photo/aluminum-pan-with-cover-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=4j9ZcGw2WGuKHD91-mJ88Yn-NqfOM6xqnwAe0qJXNwA=",
    category: "Cookware",
    description: "Ideal pot for large batches of soup or stock.",
  },
  {
    id: 37,
    name: "Bread Knife Pro",
    price: 55,
    oldPrice: 75,
    image: "https://media.istockphoto.com/id/471139639/photo/professional-knives.webp?a=1&b=1&s=612x612&w=0&k=20&c=vriDMKb4En1DZsEPgx-LDRn7z6UiG-2ut3qEvIlXcXU=",
    category: "Knives",
    description: "Premium serrated knife for artisan bread.",
  },
  {
    id: 38,
    name: "Rice Cooker",
    price: 129,
    oldPrice: 159,
    image: "https://media.istockphoto.com/id/1284510713/photo/woman-hand-is-scooping-jasmine-rice-cooking-in-electric-rice-cooker-with-steam-thai-jasmine.webp?a=1&b=1&s=612x612&w=0&k=20&c=UA9PnY9UJkfXSjXA6i03lqKsJfOBSGgeEPXsGftkgtU=",
    category: "Appliances",
    description: "Cook fluffy rice perfectly every time.",
  },
  {
    id: 39,
    name: "Stainless Grill",
    price: 145,
    oldPrice: 189,
    image: "https://media.istockphoto.com/id/175397521/photo/barbecue-stainless-steel.webp?a=1&b=1&s=612x612&w=0&k=20&c=M0BneUt3YnqiBhnwjvc_qTUzOQrJpcfCc-Omdoh2Wq4=",
    category: "Cookware",
    description: "Grill meats and veggies to perfection indoors.",
  },
  {
    id: 40,
    name: "Paring Knife Set",
    price: 49,
    oldPrice: 69,
    image: "https://media.istockphoto.com/id/2217520978/photo/professional-kitchen-knife-collection.webp?a=1&b=1&s=612x612&w=0&k=20&c=g6Woitsalp-_2zuYX5iCxMFsKy02SJfv07Y-j-90Rl4=",
    category: "Knives",
    description: "Compact knives for fruits and precision cutting.",
  },
  {
    id: 41,
    name: "Blender XL 1000W",
    price: 179,
    oldPrice: 229,
    image: "https://media.istockphoto.com/id/1299969062/photo/unrecognisable-child-making-fruit-smoothie-in-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=PSPABLlt-SUtL37BdTl3IpV5v9FK1z5cNU7krMzM_wU=",
    category: "Appliances",
    description: "Extra power for smoothies, shakes, and sauces.",
  },
  {
    id: 42,
    name: "Paella Pan",
    price: 135,
    oldPrice: 179,
    image: "https://media.istockphoto.com/id/1363686078/photo/paella-served-in-paella-pan-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=G15xObSko1qho0cJ4paHKkgKMk2vBDdVUoKpm1OH53o=",
    category: "Cookware",
    description: "Traditional wide pan for authentic paella recipes.",
  },
  {
    id: 43,
    name: "Chef Knife Elite",
    price: 149,
    oldPrice: 189,
    image: "https://media.istockphoto.com/id/851960090/photo/man-cutting-roated-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=AyabHGFGzCtOAwTGgKDmNFZ8yB7y6RB1HiJXH0ZshJU=",
    category: "Knives",
    description: "Top-tier chef knife for expert-level chefs.",
  },
  {
    id: 44,
    name: "Slow Cooker",
    price: 169,
    oldPrice: 209,
    image: "https://media.istockphoto.com/id/173629383/photo/photograph-of-silver-crockpot-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=G44xOPY-0PXZhQhnf2EVTNHW2rzskHSlBepFvlfsbk8=",
    category: "Appliances",
    description: "Cook tender meals over low heat automatically.",
  },
  {
    id: 45,
    name: "Oven Tray Set",
    price: 65,
    oldPrice: 95,
    image: "https://media.istockphoto.com/id/2167458247/photo/crescent-rolls-on-baking-paper-ready-for-the-oven.webp?a=1&b=1&s=612x612&w=0&k=20&c=zorAlycKZMwnGVCeQwfkvllgskXtScKumAnxjw25uuI=",
    category: "Cookware",
    description: "Durable trays for all your baking needs.",
  },
  {
    id: 46,
    name: "Carving Knife Elite",
    price: 89,
    oldPrice: 129,
    image: "https://media.istockphoto.com/id/1152536732/photo/kitchen-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=vZ_cj642zDKqeg75Ypo47DU-y2luRTl3YtTY40lFh4Y=",
    category: "Knives",
    description: "Specially designed for carving large cuts of meat.",
  },
  {
    id: 47,
    name: "Electric Grill",
    price: 189,
    oldPrice: 239,
    image: "https://media.istockphoto.com/id/172415830/photo/barbecue-grill.webp?a=1&b=1&s=612x612&w=0&k=20&c=-P6rEvEHseGNtTdjuvvSnAFxSUuVvOr6fsaVagC2mH0=",
    category: "Appliances",
    description: "Indoor electric grill for all-season grilling.",
  },
  {
    id: 48,
    name: "Skillet Pro",
    price: 115,
    oldPrice: 155,
    image: "https://media.istockphoto.com/id/2196357823/photo/skilled-potter-masterfully-shaping-clay-an-artisan-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=AS6k148_WbnpLepBEDnWGAA7wEVDn1Rb35gZ2ECpm6I=",
    category: "Cookware",
    description: "Premium skillet with non-stick coating.",
  },
  {
    id: 49,
    name: "Utility Knife Set",
    price: 69,
    oldPrice: 99,
    image: "https://media.istockphoto.com/id/1221018623/photo/kitchen-knifes-inventory-on-wooden-backgroun-in-a-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=37ncVIo8WStPM8pyJK2TpWVFNOIsaLMyCiIgJ0kos3w=",
    category: "Knives",
    description: "Set of versatile utility knives for all tasks.",
  },
  {
    id: 50,
    name: "Espresso Machine",
    price: 239,
    oldPrice: 299,
    image: "https://media.istockphoto.com/id/1448130237/photo/closeup-of-a-glass-cup-with-fresh-coffee-from-a-capsule-coffee-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=1pqlOoauGlan5vkON1DVnmd6BP4DeLgEUlLcW78FpjY=",
    category: "Appliances",
    description: "Brew rich espresso shots with ease.",
  },
  {
    id: 51,
    name: "Casserole Pan Pro",
    price: 145,
    oldPrice: 189,
    image: "https://media.istockphoto.com/id/2205431124/photo/lancashire-hot-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=r3jyeSz9zsT5FqCuO8_JZ6lkolhW6BFGyKYCtOcz4G8=",
    category: "Cookware",
    description: "Pro-level casserole pan for oven-to-table cooking.",
  },
  {
    id: 52,
    name: "Nakiri Knife",
    price: 135,
    oldPrice: 179,
    image: "https://media.istockphoto.com/id/104547382/photo/japanese-nakiri-style-chefs-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=gwiPtKee9H7B5BYAlh6aayciRhe9uFgetfCaN8lPvVM=",
    category: "Knives",
    description: "Japanese vegetable knife with a razor-sharp edge.",
  },
  {
    id: 53,
    name: "Mini Oven",
    price: 155,
    oldPrice: 199,
    image: "https://media.istockphoto.com/id/1291871285/photo/croissant-was-take-out-from-mini-oven-ready-to-serve-morning-breakfast-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=uwT1hDD4PWZ9lqwITpk--d66soBZQU3Fvo3jCoCih_g=",
    category: "Appliances",
    description: "Compact oven perfect for small kitchens.",
  },
{
  id: 54,
  name: "Ceramic Knife Set",
  price: 99,
  oldPrice: 129,
  image: "https://media.istockphoto.com/id/2164270439/photo/clean-plate-with-golden-cutlery-on-white-background-top-view-table-setting-black-empty-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=XWL9QM9q9BiZp1kTIeN1NP5sIP21DAcJq8Fa5GE8clc=",
  category: "Knives",
  description: "Ultra-sharp ceramic knives for precision cutting and easy maintenance.",
},
{
  id: 55,
  name: "Electric Deep Fryer",
  price: 179,
  oldPrice: 219,
  image: "https://media.istockphoto.com/id/2169604159/photo/a-woman-is-using-an-air-fryer-to-prepare-food-in-her-kitchen-focusing-on-a-healthier-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=4f5PcVNMcuJrBvquvOqyl3YZP-5GY8gcy6W8kH6GWyg=",
  category: "Appliances",
  description: "Compact electric fryer for crispy and healthy fried foods.",
},
{
  id: 56,
  name: "Stainless Steel Mixing Bowls",
  price: 65,
  oldPrice: 89,
  image: "https://media.istockphoto.com/id/1281456999/photo/stainless-steel-mixing-bowls-small-medium-and-large-on-a-wooden-table-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=9lI1yFx5smbwc7pvYfrAq1gta6on_7kqIyGi-l1CibY=",
  category: "Cookware",
  description: "Set of durable mixing bowls, perfect for baking and cooking prep.",
},
];

const viewOptions = ["grid-2", "grid-3", "grid-4", "list", "masonry"];

const KitchenProductGrid = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid-4");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    let filtered = [...products];

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortOption === "oldest") {
      filtered.sort((a, b) => a.id - b.id);
    }

    setDisplayedProducts(filtered.slice(0, visibleCount));
  }, [category, sortOption, searchTerm, visibleCount]);

  const handleShowMore = () => setVisibleCount((prev) => prev + 12);

  const gridClass =
    view === "grid-2"
      ? "grid-cols-2"
      : view === "grid-3"
      ? "grid-cols-2 md:grid-cols-3"
      : view === "grid-4"
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : view === "masonry"
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10"
      : "grid-cols-1";

  useEffect(() => {
    gsap.from(".product-card", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, [displayedProducts]);

  return (
    <section className="bg-gray-900 text-white py-8 px-3 md:px-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        {/* Search */}
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 w-full md:w-1/3">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* All Controls in One Line */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-end">
          {/* Category Buttons */}
          {["All", "Knives", "Cookware", "Appliances"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                category === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-gray-800 px-2 py-1.5 rounded-lg text-xs outline-none border border-gray-700 hover:border-yellow-400"
          >
            <option value="">Sort</option>
            <option value="low-to-high">Price: Low</option>
            <option value="high-to-low">Price: High</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {/* View Selector */}
          <div className="flex gap-1">
            {viewOptions.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-2 py-1 rounded-lg text-xs font-medium transition ${
                  view === v ? "bg-yellow-500 text-black" : "bg-gray-800"
                }`}
              >
                {v.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid ${gridClass} gap-4`}>
        {displayedProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card bg-gray-800 rounded-xl shadow-md overflow-hidden relative group"
          >
            <div className="w-full h-44 md:h-52 relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base md:text-lg font-semibold line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-400 text-xs line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-yellow-400 text-lg font-bold">
                    ${product.price}
                  </p>
                  <p className="text-gray-500 text-xs line-through">
                    ${product.oldPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-yellow-400 hover:text-yellow-300">
                    <FaHeart size={16} />
                  </button>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    <FaCartPlus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More */}
      {displayedProducts.length < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Show More
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3">
          <div className="bg-gray-900 rounded-xl p-5 max-w-md w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              ✕
            </button>
            <div className="w-full h-56 relative mb-3">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-300 text-sm mb-3">
              {selectedProduct.description}
            </p>
            <p className="text-yellow-400 text-lg font-bold mb-1">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-500 line-through text-sm mb-3">
              ${selectedProduct.oldPrice}
            </p>
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition w-full">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default KitchenProductGrid;
