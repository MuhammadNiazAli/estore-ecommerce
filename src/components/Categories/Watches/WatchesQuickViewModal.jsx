"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Dummy Product Data
const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 12500,
    images: [
      "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1640416822842-1d1cd0c6b9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1750277114324-61e886a69c3b?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553926835-e75b15338ffb?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639564879163-a2a85682410e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Experience unmatched precision and style with the Rolex Submariner. Built for enthusiasts, offering durability and elegance.",
    features: [
      "Premium stainless steel case",
      "Sapphire crystal glass",
      "Water resistant up to 300m",
      "5-year international warranty"
    ]
  },
  {
    id: 2,
    name: "Omega Seamaster",
    brand: "Omega",
    price: 9800,
    images: [
      "https://images.unsplash.com/photo-1646391684410-6bc0fefa6046?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606387318469-bada9b642157?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558959002-e5d805ad3589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1732246449738-5b52d9d973c2?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558959002-fb81aeefd06c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558959002-e5d805ad3589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Omega Seamaster combines classic design with modern tech.",
    features: [
      "Anti-reflective coating",
      "Chronometer certified",
      "Water resistant 600m",
      "4-year warranty"
    ]
  },
  {
    id: 3,
    name: "Tag Heuer Carrera",
    brand: "Tag Heuer",
    price: 8900,
    images: [
      "https://images.unsplash.com/photo-1623998021661-dc7555b2213d?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630954320593-f4fce7f86cd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1677086522121-f6702cdbf07b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507975456351-a41d6828b9c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Tag Heuer Carrera: Sporty elegance for ultimate performance.",
    features: [
      "Scratch-resistant glass",
      "Automatic movement",
      "Chronograph functions",
      "3-year warranty"
    ]
  },
  {
    id: 4,
    name: "Breitling Navitimer",
    brand: "Breitling",
    price: 11200,
    images: [
      "https://images.unsplash.com/photo-1619035821779-9cfc00451749?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1703970326240-d87f8ec7cde8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1659780275299-e6b54bc66ed6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579684912150-f9a99d300cea?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1660038018839-5461cfe54404?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592865717988-5bece8d2e225?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Breitling Navitimer blends aviation-inspired design with precision chronograph functions.",
    features: [
      "Slide rule bezel",
      "Pilot chronograph",
      "COSC certified",
      "5-year international warranty"
    ]
  },
  {
    id: 5,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    price: 45000,
    images: [
      "https://images.unsplash.com/photo-1731144689823-7eff0ae05aab?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1649768563901-a799abc06e74?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646889416154-973ea0e5e36f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1452878569550-39e3d2e630ea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556003521-e4af7518c748?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1509941943102-10c232535736?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Royal Oak: A legend in luxury watchmaking, redefining design with its octagonal bezel.",
    features: [
      "Iconic octagonal bezel",
      "Integrated bracelet",
      "Automatic movement",
      "8-year warranty"
    ]
  },
  {
    id: 6,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: 52000,
    images: [
      "https://images.unsplash.com/photo-1660959324988-81af2af528f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580735053636-88ea2dd2eec7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528739964081-51ad930e29c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1728012217493-b0bfdc0c389a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586785268771-c811111b71a3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "The Patek Philippe Nautilus is the epitome of elegant sports watches.",
    features: [
      "Slim profile",
      "Horizontal embossed dial",
      "Date and moon phase",
      "8-year warranty"
    ]
  },
  {
    id: 7,
    name: "Hublot Big Bang",
    brand: "Hublot",
    price: 14500,
    images: [
      "https://images.unsplash.com/photo-1561634343-3a2787687046?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1641312051304-395bf8218248?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1659875368562-6fcee7247911?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589713117880-3376fcb4afaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634394412850-b3a7571b334b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553926835-e75b15338ffb?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Hublot Big Bang fuses innovative materials and bold design.",
    features: [
      "Sapphire crystal caseback",
      "Rubber strap",
      "Chronograph functions",
      "5-year warranty"
    ]
  },
  {
    id: 8,
    name: "Cartier Santos",
    brand: "Cartier",
    price: 13500,
    images: [
      "https://images.unsplash.com/photo-1732246449812-322e6ef728f9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1732246449746-9f5a227f72fc?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646199186411-2e961608abaa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585838708694-103db51f7f5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572107679093-7a81fcbb7705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512473711131-11ec8c3e9665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Cartier Santos is a timeless icon of elegance and sophistication.",
    features: [
      "Roman numeral dial",
      "Blue sapphire crown",
      "Steel bracelet",
      "4-year warranty"
    ]
  },
  {
    id: 9,
    name: "IWC Portugieser",
    brand: "IWC",
    price: 15800,
    images: [
      "https://images.unsplash.com/photo-1528595343328-b96a6cdf6e42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1577915689825-82d81529a0b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570569123544-39053dcf556c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1505903545551-b7e02838038a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1493969669005-ee830d58d487?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "IWC Portugieser combines classic design with technical mastery.",
    features: [
      "Chronograph display",
      "Elegant Arabic numerals",
      "Sapphire caseback",
      "6-year warranty"
    ]
  },
  {
    id: 10,
    name: "Panerai Luminor",
    brand: "Panerai",
    price: 9200,
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1706536650895-ad5e44d7636d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639779234883-5b857f31340c?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622299355484-f81b9f4fa5e8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1745125085002-41a4263ecfdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599673476987-ca50550c4b9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Panerai Luminor offers rugged elegance and luminous clarity.",
    features: [
      "Cushion-shaped case",
      "Sandwich dial",
      "100m water resistance",
      "3-year warranty"
    ]
  },
  {
    id: 11,
    name: "Richard Mille RM 11-03",
    brand: "Richard Mille",
    price: 210000,
    images: [
      "https://images.unsplash.com/photo-1638798486317-59c3d2d2bfc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1637412173649-97a0330b6686?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638798486317-59c3d2d2bfc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1636378680684-a1bfed39c69d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1637756856486-9d0cbe42a560?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1636551462974-c21487c0af66?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Richard Mille RM 11-03 combines aerospace materials with extreme precision for motorsport enthusiasts.",
    features: [
      "Skeletonized dial",
      "Automatic flyback chronograph",
      "Titanium case",
      "10-year warranty"
    ]
  },
  {
    id: 12,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    price: 7800,
    images: [
      "https://images.unsplash.com/photo-1712995517490-521196458d25?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1647738233930-22e3639fed78?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562128776-5a14b64aa98f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621698832693-ca2e6178cbfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1497382706140-605ee76b3b55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514255017459-d58228298c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "The Reverso is a timeless masterpiece, featuring a reversible case that blends function and art deco style.",
    features: [
      "Reversible rectangular case",
      "Mechanical manual winding",
      "Leather strap",
      "8-year warranty"
    ]
  },
  {
    id: 13,
    name: "Bulgari Octo Finissimo",
    brand: "Bulgari",
    price: 12900,
    images: [
      "https://images.unsplash.com/photo-1661030418924-52142661241d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664392111619-8066fc3d1dd3?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1706536650895-ad5e44d7636d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544004695-0520d97efcb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1731144689823-7eff0ae05aab?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Bulgari Octo Finissimo sets records for thinness and sophistication with Italian elegance.",
    features: [
      "Ultra-thin case",
      "Platinum rotor",
      "Skeletonized dial",
      "6-year warranty"
    ]
  },
  {
    id: 14,
    name: "Vacheron Constantin ",
    brand: "Vacheron Constantin",
    price: 23500,
    images: [
      "https://images.unsplash.com/photo-1638519733319-b24ae41e6315?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1723525666443-94aaaed255e2?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609936861049-13ed65fd0bd0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609835563715-404c147de519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646199186411-2e961608abaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Vacheron Constantin Overseas offers luxury sports watchmaking with versatile style.",
    features: [
      "Interchangeable straps",
      "Automatic movement",
      "Exhibition caseback",
      "10-year warranty"
    ]
  },
  {
    id: 15,
    name: "Zenith Defy Classic",
    brand: "Zenith",
    price: 7200,
    images: [
      "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1651321225568-212f47155dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1651321225388-ced79c17d684?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1651321225449-ada8f99cf525?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540317985184-e3c4f598a8b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1659461279641-4a8175fbd680?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Zenith Defy Classic brings avant-garde design and futuristic performance.",
    features: [
      "Openworked dial",
      "Titanium case",
      "Silicon escapement",
      "5-year warranty"
    ]
  },
];

const WatchesQuickViewModalPage = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isRelatedOpen, setIsRelatedOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className=" bg-amber-700 flex flex-col items-center justify-center p-6">
      {/* Trigger */}
      <button
        onClick={() => openQuickView(products[0])}
        className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-500 transition text-lg"
      >
        Quick View Watch
      </button>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md p-2 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden relative"
              style={{ maxHeight: "90vh" }}
            >
              {/* Close Button - Always visible */}
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-3 right-3 bg-white text-gray-900 rounded-full p-2 hover:bg-red-500 transition z-50"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Left: Swiper */}
              <div className="flex-1 bg-gray-100 p-4 flex items-center justify-center">
                <Swiper
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="w-full max-w-md"
                >
                  {selectedProduct.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${selectedProduct.name}-${idx}`}
                        className="w-full h-72 object-contain rounded-lg bg-white"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right: Info */}
              <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  Brand: <span className="font-medium">{selectedProduct.brand}</span>
                </p>
                <div className="flex items-center mb-3">
                  <span className="text-amber-700 text-lg">★★★★★</span>
                  <span className="text-gray-500 text-sm ml-2">(120 reviews)</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ${selectedProduct.price}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {selectedProduct.description}
                </p>
                <ul className="list-disc ml-5 text-gray-700 text-sm mb-6 space-y-1">
                  {selectedProduct.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center justify-center gap-2 bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-500 transition w-full sm:w-auto">
                    <ShoppingCartIcon className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-500 transition">
                      <HeartIcon className="h-5 w-5" />
                      Wishlist
                    </button>
                    <button
                      onClick={() => setIsRelatedOpen(true)}
                      className="bg-white text-gray-900 rounded-lg p-3 hover:bg-gray-500 transition"
                      title="View related products"
                    >
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Related Products Modal */}
      <AnimatePresence>
        {isRelatedOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md p-2 sm:p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 relative"
            >
              <button
                onClick={() => setIsRelatedOpen(false)}
                className="absolute top-3 right-3 bg-white text-gray-900 rounded-full p-2 hover:bg-red-500 transition"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                Related Watches
              </h2>

              {/* Related Swiper */}
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-4"
              >
                {products.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition flex flex-col items-center">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md mb-3"
                      />
                      <h3 className="text-gray-900 font-semibold text-center">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 font-bold">${item.price}</p>
                      <button
                        onClick={() => {
                          openQuickView(item);
                          setIsRelatedOpen(false);
                        }}
                        className="w-full mt-3 bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-500 transition"
                      >
                        View
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchesQuickViewModalPage;
