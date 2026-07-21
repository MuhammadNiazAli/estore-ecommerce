"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleWatches = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 12500,
    image: "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    brand: "Omega",
    price: 9800,
    image: "https://images.unsplash.com/photo-1588524789663-e6163803c589?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    brand: "Apple",
    price: 799,
    image: "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fossil Premium watch",
    brand: "Tag Heuer",
    price: 4200,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
    brand: "Seiko",
    price: 950,
    image: "https://images.unsplash.com/photo-1723234724660-ce1d1d1d93ae?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Breitling Watch",
    brand: "Casio",
    price: 350,
    image: "https://images.unsplash.com/photo-1609482806891-7b1b31891da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: 32000,
    image: "https://images.unsplash.com/photo-1677086522121-f6702cdbf07b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic",
    brand: "Tissot",
    price: 750,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 499,
    image: "https://images.unsplash.com/photo-1646391684410-6bc0fefa6046?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Rolex Daytona",
    brand: "Rolex",
    price: 14000,
    image: "https://images.unsplash.com/photo-1651321225568-212f47155dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Omega Seamaster Diver 300M",
    brand: "Omega",
    price: 7200,
    image: "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Tag Heuer Monaco",
    brand: "Tag Heuer",
    price: 6500,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Casio Edifice",
    brand: "Casio",
    price: 220,
    image: "https://images.unsplash.com/photo-1582994595079-d0a4d6c4772c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Seiko Presage Cocktail",
    brand: "Seiko",
    price: 450,
    image: "https://images.unsplash.com/photo-1609684963134-b70db0a3c8fe?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Patek Philippe Calatrava",
    brand: "Patek Philippe",
    price: 31000,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Tissot Seastar 1000",
    brand: "Tissot",
    price: 950,
    image: "https://images.unsplash.com/photo-1545038110-400f683aa1de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Apple Watch SE",
    brand: "Apple",
    price: 279,
    image: "https://images.unsplash.com/photo-1729078945948-4485f0a58494?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Rolex GMT-Master II",
    brand: "Rolex",
    price: 14500,
    image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Omega Aqua Terra",
    brand: "Omega",
    price: 6000,
    image: "https://images.unsplash.com/photo-1669621952722-4eb9d749b403?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Tag Heuer Formula 1",
    brand: "Tag Heuer",
    price: 1200,
    image: "https://images.unsplash.com/photo-1661132186289-ecffe2259120?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    name: "Seiko Astron GPS Solar",
    brand: "Seiko",
    price: 1700,
    image: "https://images.unsplash.com/photo-1696774690902-6e2057307e20?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Casio Pro Trek",
    brand: "Casio",
    price: 380,
    image: "https://images.unsplash.com/photo-1650974970408-c6d0fbee4ec6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Breitling Navitimer",
    brand: "Breitling",
    price: 8900,
    image: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Panerai Luminor Marina",
    brand: "Panerai",
    price: 7100,
    image: "https://images.unsplash.com/photo-1728437115386-9c140e114e77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "IWC Portugieser Chronograph",
    brand: "IWC",
    price: 7400,
    image: "https://images.unsplash.com/photo-1598629986113-5f8f2948faff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Hublot Big Bang",
    brand: "Hublot",
    price: 12000,
    image: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Citizen Eco-Drive Promaster",
    brand: "Citizen",
    price: 450,
    image: "https://images.unsplash.com/photo-1581948353407-cb34a56449c4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Longines Master Collection",
    brand: "Longines",
    price: 2500,
    image: "https://images.unsplash.com/photo-1630512731604-ab66f094b788?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Montblanc 1858 Geosphere",
    brand: "Montblanc",
    price: 6200,
    image: "https://images.unsplash.com/photo-1590688560938-57c514814ddb?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    price: 45000,
    image: "https://images.unsplash.com/photo-1671195828444-eb720226a961?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    name: "Richard Mille RM 11-03",
    brand: "Richard Mille",
    price: 165000,
    image: "https://images.unsplash.com/photo-1671014978748-84f661cc2f93?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    name: "Bell & Ross BR 03-92",
    brand: "Bell & Ross",
    price: 3900,
    image: "https://images.unsplash.com/photo-1596432574903-8861467eaca5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    name: "Hamilton Khaki Field Mechanical",
    brand: "Hamilton",
    price: 575,
    image: "https://images.unsplash.com/photo-1743275005299-84405fbbb75f?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Grand Seiko Snowflake",
    brand: "Grand Seiko",
    price: 6200,
    image: "https://images.unsplash.com/photo-1580658001207-ccd9b884191c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Oris Aquis Date",
    brand: "Oris",
    price: 2000,
    image: "https://images.unsplash.com/photo-1658824026201-0e6f924d834d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 799,
    image: "https://images.unsplash.com/photo-1561714749-a5384292f7c7?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Tag Heuer Aquaracer",
    brand: "Tag Heuer",
    price: 2500,
    image: "https://images.unsplash.com/photo-1662989578312-cf88341d0a88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Rolex Yacht-Master",
    brand: "Rolex",
    price: 17500,
    image: "https://images.unsplash.com/photo-1693429442226-4c838b86ffd3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    name: "Omega Constellation",
    brand: "Omega",
    price: 4300,
    image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Fossil Hybrid HR",
    brand: "Fossil",
    price: 199,
    image: "https://images.unsplash.com/photo-1721719698251-402fbc325d22?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Garmin Fenix 7",
    brand: "Garmin",
    price: 699,
    image: "https://images.unsplash.com/photo-1715776384730-4c6336bb6738?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Swatch Sistem51",
    brand: "Swatch",
    price: 150,
    image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Timex Marlin Automatic",
    brand: "Timex",
    price: 249,
    image: "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Cartier Santos",
    brand: "Cartier",
    price: 7200,
    image: "https://images.unsplash.com/photo-1618960428297-d9bcb6996898?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Breitling Superocean",
    brand: "Breitling",
    price: 4500,
    image: "https://images.unsplash.com/photo-1611163950958-a2ec5ccccd18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Casio Vintage A168",
    brand: "Casio",
    price: 40,
    image: "https://images.unsplash.com/photo-1655356424878-e7d25784fb65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Rado Captain Cook",
    brand: "Rado",
    price: 2300,
    image: "https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Bulgari Octo Finissimo",
    brand: "Bulgari",
    price: 14000,
    image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 49,
    name: "Nomos Tangente",
    brand: "Nomos",
    price: 2200,
    image: "https://images.unsplash.com/photo-1609835563715-404c147de519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    name: "Zenith El Primero",
    brand: "Zenith",
    price: 8700,
    image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 51,
    name: "Rolex Automic",
    brand: "Zenith",
    price: 8700,
    image: "https://images.unsplash.com/photo-1603656179723-19bb83b68dbb?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 52,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    price: 11800,
    image: "https://images.unsplash.com/photo-1657235895095-e043ce2ebf41?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 53,
    name: "Vacheron Constantin Overseas",
    brand: "Vacheron Constantin",
    price: 22900,
    image: "https://images.unsplash.com/photo-1584091287122-ce4bb8a62207?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 54,
    name: "Blancpain Fifty Fathoms",
    brand: "Blancpain",
    price: 15500,
    image: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 55,
    name: "Franck Muller Vanguard",
    brand: "Franck Muller",
    price: 14200,
    image: "https://images.unsplash.com/photo-1615113841259-31e051709c0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 56,
    name: "Piaget Polo S",
    brand: "Piaget",
    price: 9700,
    image: "https://images.unsplash.com/photo-1708247804825-34f86bd02334?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},

];


const WatchesPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(sampleWatches.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleWatches.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-50px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Luxury Watches
          </h2>
          <p className="text-gray-500 mt-2">
            Browse through our curated collection
          </p>
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
                <p className="text-gray-500 text-sm">{item.brand}</p>
                <p className="text-gray-800 font-bold mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Responsive Pagination */}
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
                    ? "bg-white text-gray-900 border border-black"
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

export default WatchesPagination;
