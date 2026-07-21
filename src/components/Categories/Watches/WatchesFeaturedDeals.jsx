"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCartIcon,
  HeartIcon,
  EyeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

 const deals = [
  {
    id: 1,
    name: "Rolex Submariner",
      image: "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 12500,
    discountPrice: 11250,
    dealEndsIn: 3600
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    image: "https://images.unsplash.com/photo-1588524789663-e6163803c589?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 9800,
    discountPrice: 8820,
    dealEndsIn: 7200
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    image: "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 799,
    discountPrice: 699,
    dealEndsIn: 5400
  },
  {
    id: 4,
    name: "Fossil Premium Watch",
  image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 4200,
    discountPrice: 3780,
    dealEndsIn: 10800
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
 image: "https://images.unsplash.com/photo-1723234724660-ce1d1d1d93ae?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 950,
    discountPrice: 855,
    dealEndsIn: 7200
  },
  {
    id: 6,
    name: "Breitling Watch",
 image: "https://images.unsplash.com/photo-1609482806891-7b1b31891da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 350,
    discountPrice: 299,
    dealEndsIn: 3600
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic",
 image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 750,
    discountPrice: 675,
    dealEndsIn: 5400
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1646391684410-6bc0fefa6046?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 499,
    discountPrice: 449,
    dealEndsIn: 7200
  },
  {
    id: 10,
    name: "Rolex Daytona",
   image: "https://images.unsplash.com/photo-1651321225568-212f47155dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 14000,
    discountPrice: 12600,
    dealEndsIn: 14400
  },
  {
    id: 11,
    name: "Omega Seamaster",
     image: "https://images.unsplash.com/photo-1639361510393-b9d6e5f7df14?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 7200,
    discountPrice: 6480,
    dealEndsIn: 10800
  },
  {
    id: 12,
    name: "Tag Heuer Monaco",
   image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 6500,
    discountPrice: 5850,
    dealEndsIn: 5400
  },
  {
    id: 13,
    name: "Casio Edifice",
      image: "https://images.unsplash.com/photo-1582994595079-d0a4d6c4772c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 220,
    discountPrice: 190,
    dealEndsIn: 7200
  },
  {
    id: 14,
    name: "Seiko Presage",
       image: "https://images.unsplash.com/photo-1609684963134-b70db0a3c8fe?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 450,
    discountPrice: 399,
    dealEndsIn: 5400
  },
  {
    id: 15,
    name: "Patek Philippe ",
       image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 31000,
    discountPrice: 27900,
    dealEndsIn: 14400
  },
  {
    id: 16,
    name: "Tissot Seastar 1000",
    image: "https://images.unsplash.com/photo-1545038110-400f683aa1de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 950,
    discountPrice: 855,
    dealEndsIn: 10800
  },
  {
    id: 17,
    name: "Apple Watch SE",
    image: "https://images.unsplash.com/photo-1729078945948-4485f0a58494?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 279,
    discountPrice: 249,
    dealEndsIn: 7200
  },
  {
    id: 18,
    name: "Rolex GMT-Master II",
    image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 14500,
    discountPrice: 13050,
    dealEndsIn: 14400
  },
  {
    id: 19,
    name: "Omega Aqua Terra",
       image: "https://images.unsplash.com/photo-1669621952722-4eb9d749b403?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 6000,
    discountPrice: 5400,
    dealEndsIn: 7200
  },
  {
    id: 20,
    name: "Tag Heuer Formula 1",
    image: "https://images.unsplash.com/photo-1661132186289-ecffe2259120?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 1200,
    discountPrice: 1080,
    dealEndsIn: 10800
  },
{
    id: 21,
    name: "Breitling Navitimer",
     image: "https://images.unsplash.com/photo-1696774690902-6e2057307e20?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 8900,
    discountPrice: 8010,
    dealEndsIn: 10800
  },
  {
    id: 22,
    name: "Hublot Classic Fusion",
 image: "https://images.unsplash.com/photo-1650974970408-c6d0fbee4ec6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 13400,
    discountPrice: 12060,
    dealEndsIn: 14400
  },
  {
    id: 23,
    name: "Cartier Santos",
     image: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 9800,
    discountPrice: 8820,
    dealEndsIn: 7200
  },
  {
    id: 24,
    name: "Panerai Luminor ",
  image: "https://images.unsplash.com/photo-1728437115386-9c140e114e77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 7500,
    discountPrice: 6750,
    dealEndsIn: 10800
  },
  {
    id: 25,
    name: "HydroConquest",
     image: "https://images.unsplash.com/photo-1598629986113-5f8f2948faff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 1800,
    discountPrice: 1620,
    dealEndsIn: 7200
  },
  {
    id: 26,
    name: "Rado Captain Cook",
 image: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 2500,
    discountPrice: 2250,
    dealEndsIn: 10800
  },
  {
    id: 27,
    name: "Montblancs",
  image: "https://images.unsplash.com/photo-1581948353407-cb34a56449c4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 4800,
    discountPrice: 4320,
    dealEndsIn: 14400
  },
  {
    id: 28,
    name: "Zenith Chronomaster",
     image: "https://images.unsplash.com/photo-1630512731604-ab66f094b788?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 9200,
    discountPrice: 8280,
    dealEndsIn: 5400
  },
  {
    id: 29,
    name: "Tag Heuer Carrera",
 image: "https://images.unsplash.com/photo-1590688560938-57c514814ddb?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 5400,
    discountPrice: 4860,
    dealEndsIn: 7200
  },
  {
    id: 30,
    name: "Citizen Eco-Drive",
      image: "https://images.unsplash.com/photo-1671195828444-eb720226a961?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 399,
    discountPrice: 349,
    dealEndsIn: 3600
  },
  {
    id: 31,
    name: "Hamilton Khaki Field",
      image: "https://images.unsplash.com/photo-1671014978748-84f661cc2f93?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 795,
    discountPrice: 715,
    dealEndsIn: 5400
  },
  {
    id: 32,
    name: "Movado Museum ",
    image: "https://images.unsplash.com/photo-1596432574903-8861467eaca5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 650,
    discountPrice: 585,
    dealEndsIn: 7200
  },
  {
    id: 33,
    name: "Baume & Mercier",
    image: "https://images.unsplash.com/photo-1743275005299-84405fbbb75f?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 2900,
    discountPrice: 2610,
    dealEndsIn: 10800
  },
  {
    id: 34,
    name: "Orient Bambino",
image: "https://images.unsplash.com/photo-1580658001207-ccd9b884191c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 250,
    discountPrice: 225,
    dealEndsIn: 3600
  },
  {
    id: 35,
    name: "Grand Seiko ",
       image: "https://images.unsplash.com/photo-1658824026201-0e6f924d834d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 7200,
    discountPrice: 6480,
    dealEndsIn: 14400
  },
  {
    id: 36,
    name: "Apple Watch Hermès",
    image: "https://images.unsplash.com/photo-1561714749-a5384292f7c7?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 1499,
    discountPrice: 1349,
    dealEndsIn: 10800
  },
  {
    id: 37,
    name: "Tag Heuer Aquaracer",
     image: "https://images.unsplash.com/photo-1662989578312-cf88341d0a88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 1900,
    discountPrice: 1710,
    dealEndsIn: 7200
  },
  {
    id: 38,
    name: "Seiko Astron GPS Solar",
     image: "https://images.unsplash.com/photo-1693429442226-4c838b86ffd3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 1700,
    discountPrice: 1530,
    dealEndsIn: 5400
  },
  {
    id: 39,
    name: "Rolex Explorer II",
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 11200,
    discountPrice: 10080,
    dealEndsIn: 14400
  },
  {
    id: 40,
    name: "Omega De Ville",
  image: "https://images.unsplash.com/photo-1721719698251-402fbc325d22?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 5700,
    discountPrice: 5130,
    dealEndsIn: 10800
  },
  {
    id: 41,
    name: "Rolex Milgauss",
     image: "https://images.unsplash.com/photo-1715776384730-4c6336bb6738?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 11800,
    discountPrice: 10620,
    dealEndsIn: 14400
  },
  {
    id: 42,
    name: "Casio G-Shock ",
    image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 120,
    discountPrice: 105,
    dealEndsIn: 3600
  },
  {
    id: 43,
    name: "Apple Watch Ultra 2",
   image: "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 999,
    discountPrice: 899,
    dealEndsIn: 7200
  },
  {
    id: 44,
    name: "Rolex Oyster Perpetual",
   image: "https://images.unsplash.com/photo-1618960428297-d9bcb6996898?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 9500,
    discountPrice: 8550,
    dealEndsIn: 10800
  },
  {
    id: 45,
    name: "Omega Constellation",
     image: "https://images.unsplash.com/photo-1611163950958-a2ec5ccccd18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 6400,
    discountPrice: 5760,
    dealEndsIn: 14400
  },
  {
    id: 46,
    name: "Tag Heuer Connected",
image: "https://images.unsplash.com/photo-1655356424878-e7d25784fb65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 2200,
    discountPrice: 1980,
    dealEndsIn: 7200
  },
  {
    id: 47,
    name: "Rolex Yacht-Master",
   image: "https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 14800,
    discountPrice: 13320,
    dealEndsIn: 14400
  },
  {
    id: 48,
    name: "Seiko 5 Sports",
    image: "https://images.unsplash.com/photo-1609835563715-404c147de519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 220,
    discountPrice: 199,
    dealEndsIn: 3600
  },
  {
    id: 49,
    name: "Apple Watch Series 8",
     image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 599,
    discountPrice: 539,
    dealEndsIn: 5400
  },
  {
    id: 50,
    name: "Tissot Heritage ",
      image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 650,
    discountPrice: 585,
    dealEndsIn: 7200
  },
  {
    id: 51,
    name: "Fossil Gen 6",
   image: "https://images.unsplash.com/photo-1603656179723-19bb83b68dbb?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 299,
    discountPrice: 269,
    dealEndsIn: 5400
  },
  {
    id: 52,
    name: "Rolex shining blue ",
   image: "https://images.unsplash.com/photo-1670404160620-a3a86428560e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    originalPrice: 299,
    discountPrice: 269,
    dealEndsIn: 5400
  }

];

// ✅ Countdown Component
const DealCountdown = ({ initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  return (
    <span className="text-black font-semibold">
      {hours}h {minutes}m {secs}s
    </span>
  );
};

const WatchesFeaturedDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // default for desktop

  // ✅ Handle responsiveness
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1); // Mobile: show 1 card per slide
      } else {
        setItemsPerView(3); // Desktop: show 3 cards
      }
    };

    updateView(); // Run on mount
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalSlides = Math.ceil(deals.length / itemsPerView);

  const nextDeal = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevDeal = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full bg-white text-black py-10 px-4 md:px-8 my-[-50px]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured Deals
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full min-w-full">
                {deals
                  .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                  .map((deal) => (
                    <motion.div
                      key={deal.id}
                      className={`w-full ${itemsPerView === 1 ? "px-2" : "sm:w-1/2 lg:w-1/3 px-4"}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition relative">
                        <img
                          src={deal.image}
                          alt={deal.name}
                          className="w-full h-64 object-cover"
                        />
                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-white/60 opacity-0 hover:opacity-100 flex justify-center items-center gap-3 transition">
                          <button className="p-2 bg-black text-gray-900 rounded-full hover:scale-110">
                            <ShoppingCartIcon className="w-6 h-6" />
                          </button>
                          <button className="p-2 bg-black text-gray-900 rounded-full hover:scale-110">
                            <HeartIcon className="w-6 h-6" />
                          </button>
                          <button className="p-2 bg-black text-gray-900 rounded-full hover:scale-110">
                            <EyeIcon className="w-6 h-6" />
                          </button>
                        </div>
                        {/* Details */}
                        <div className="p-4 text-center">
                          <h3 className="text-xl font-semibold">{deal.name}</h3>
                          <p className="mt-2">
                            <span className="text-black text-2xl font-bold">
                              ${deal.discountPrice.toLocaleString()}
                            </span>
                            <span className="text-gray-600 line-through ml-2">
                              ${deal.originalPrice.toLocaleString()}
                            </span>
                          </p>
                          <p className="text-sm text-gray-700 mt-2">
                            Deal ends in: <DealCountdown initialSeconds={deal.dealEndsIn} />
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevDeal}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-black hover:text-gray-900"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextDeal}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-black hover:text-gray-900"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WatchesFeaturedDeals;
