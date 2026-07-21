"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Replace this with your softwareData (50 items, or fewer for demo)
const softwareData = [
  {
    id: 1,
    name: "ProCode IDE",
    brand: "DevTools",
    category: "Development",
    price: 99,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Cross-platform", "Syntax Highlighting", "Debugger"],
  },
  {
    id: 2,
    name: "SecureShield Antivirus",
    brand: "SafeSoft",
    category: "Security",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Real-time Protection", "Lightweight", "Automatic Updates"],
  },
  {
    id: 3,
    name: "CloudSync Pro",
    brand: "DataFlow",
    category: "Cloud",
    price: 79,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Auto Backup", "Multi-device", "Encrypted"],
  },
  {
    id: 4,
    name: "TaskMaster",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 49,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Task Scheduling", "Notifications", "Collaboration"],
  },
  {
    id: 5,
    name: "PhotoFixer",
    brand: "ImageWorks",
    category: "Design",
    price: 89,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Filters", "Retouch Tools", "Layer Support"],
  },
  {
    id: 6,
    name: "FinanceGuru",
    brand: "MoneySmart",
    category: "Finance",
    price: 69,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
    features: ["Budget Tracking", "Reports", "Multi-currency"],
  },
  {
    id: 7,
    name: "CodeStream",
    brand: "DevTools",
    category: "Development",
    price: 109,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    features: ["Live Collaboration", "Code Review", "Integrations"],
  },
  {
    id: 8,
    name: "NetGuard VPN",
    brand: "SafeSoft",
    category: "Security",
    price: 49,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661964184053-91aa3dc5f508?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    features: ["No Logs", "Fast Servers", "Multiple Devices"],
  },
  {
    id: 9,
    name: "CloudBox Storage",
    brand: "DataFlow",
    category: "Cloud",
    price: 59,
    rating: 3,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Unlimited Storage", "File Sharing", "Encryption"],
  },
  {
    id: 10,
    name: "FocusTime",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 39,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1678566111483-f45ad346d50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
    features: ["Pomodoro Timer", "Reports", "Goals"],
  },
  {
    id: 11,
    name: "VectorDraw",
    brand: "ImageWorks",
    category: "Design",
    price: 79,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1678564741886-549b58d4145e?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
    features: ["Vector Tools", "Export Options", "Templates"],
  },
  {
    id: 12,
    name: "MoneyTrack",
    brand: "MoneySmart",
    category: "Finance",
    price: 59,
    rating: 3,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1661320891334-e46de87e8467?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    features: ["Expense Tracking", "Budget Planner", "Alerts"],
  },
  {
    id: 13,
    name: "ScriptRunner",
    brand: "DevTools",
    category: "Development",
    price: 89,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    features: ["Automation", "Scheduler", "API Support"],
  },
  {
    id: 14,
    name: "PhishBlocker",
    brand: "SafeSoft",
    category: "Security",
    price: 39,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    features: ["Anti-Phishing", "Email Protection", "Updates"],
  },
  {
    id: 15,
    name: "SkyDrive",
    brand: "DataFlow",
    category: "Cloud",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722207562226-6f7c8125c13b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Sync", "Backup", "Secure"],
  },
  {
    id: 16,
    name: "NotePad Plus",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 29,
    rating: 3,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722204859416-7a1e3727f296?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    features: ["Rich Text", "Cloud Sync", "Tags"],
  },
  {
    id: 17,
    name: "ColorSplash",
    brand: "ImageWorks",
    category: "Design",
    price: 69,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722126194534-14849de68fc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    features: ["Color Correction", "Brush Tools", "Layers"],
  },
  {
    id: 18,
    name: "TaxAssist",
    brand: "MoneySmart",
    category: "Finance",
    price: 49,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvZnR3YXJlfGVufDB8fDB8fHww",
    features: ["Tax Forms", "Calculations", "Filing Support"],
  },
  {
    id: 19,
    name: "DevSync",
    brand: "DevTools",
    category: "Development",
    price: 129,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720287601013-69bed792f481?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvZnR3YXJlfGVufDB8fDB8fHww",
    features: ["Version Control", "Collaboration", "Integrations"],
  },
  {
    id: 20,
    name: "FireWall Pro",
    brand: "SafeSoft",
    category: "Security",
    price: 79,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNvZnR3YXJlfGVufDB8fDB8fHww",
    features: ["Intrusion Detection", "Auto Updates", "Multi-Platform"],
  },
  {
    id: 21,
    name: "MegaCloud",
    brand: "DataFlow",
    category: "Cloud",
    price: 99,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHNvZnR3YXJlfGVufDB8fDB8fHww",
    features: ["Unlimited Storage", "Fast Upload", "Encryption"],
  },
  {
    id: 22,
    name: "FocusPro",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1721746138247-ae21d3ffb649?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Distraction Blocker", "Timer", "Reports"],
  },
  {
    id: 23,
    name: "PixEdit",
    brand: "ImageWorks",
    category: "Design",
    price: 89,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1598435542364-30e94128d3b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Crop", "Resize", "Filters"],
  },
  {
    id: 24,
    name: "MoneyPlanner",
    brand: "MoneySmart",
    category: "Finance",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Budgeting", "Goal Setting", "Alerts"],
  },
  {
    id: 25,
    name: "AutoScript",
    brand: "DevTools",
    category: "Development",
    price: 99,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Automation", "Scheduling", "API"],
  },
  {
    id: 26,
    name: "SafeMail",
    brand: "SafeSoft",
    category: "Security",
    price: 39,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1581090124360-558a029c4148?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Encrypted Email", "Spam Filter", "Auto Updates"],
  },
  {
    id: 27,
    name: "CloudBackup",
    brand: "DataFlow",
    category: "Cloud",
    price: 79,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1585327451367-07516c9b027c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Backup", "Restore", "Multi-device"],
  },
  {
    id: 28,
    name: "TimeTracker",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 49,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1614963326505-843868e1d83a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Time Logs", "Reports", "Integrations"],
  },
  {
    id: 29,
    name: "DesignMaster",
    brand: "ImageWorks",
    category: "Design",
    price: 79,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1616138276663-5041438a8476?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Templates", "Layer Support", "Export"],
  },
  {
    id: 30,
    name: "InvestSmart",
    brand: "MoneySmart",
    category: "Finance",
    price: 59,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1570215171424-f74325192b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Portfolio", "Reports", "Alerts"],
  },
  {
    id: 31,
    name: "BugTracker",
    brand: "DevTools",
    category: "Development",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1581091872370-1c203d690c43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Issue Management", "Collaboration", "Notifications"],
  },
  {
    id: 32,
    name: "SecureCloud",
    brand: "SafeSoft",
    category: "Security",
    price: 89,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1649451844897-8699a1d6d96d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Encryption", "Access Control", "Audit Logs"],
  },
  {
    id: 33,
    name: "DriveSafe",
    brand: "DataFlow",
    category: "Cloud",
    price: 69,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1740174459699-487aec1f7bc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHxzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["File Sync", "Backup", "Versioning"],
  },
  {
    id: 34,
    name: "WorkFlow",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 79,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1729860646553-04e9d9ca83ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwY3V0fGVufDB8fDB8fHww",
    features: ["Automation", "Task Assignment", "Reports"],
  },
  {
    id: 35,
    name: "ArtStudio",
    brand: "ImageWorks",
    category: "Design",
    price: 99,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1729860646553-04e9d9ca83ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwY3V0fGVufDB8fDB8fHww",
    features: ["Painting Tools", "Layers", "Brushes"],
  },
  {
    id: 36,
    name: "BudgetBuddy",
    brand: "MoneySmart",
    category: "Finance",
    price: 49,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1649091245823-18be815da4f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcGN1dHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Budget Planning", "Spending Reports", "Alerts"],
  },
  {
    id: 37,
    name: "API Tester",
    brand: "DevTools",
    category: "Development",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1708447135279-61fdb4397528?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcGN1dHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["REST Support", "Automation", "Logging"],
  },
  {
    id: 38,
    name: "CyberGuard",
    brand: "SafeSoft",
    category: "Security",
    price: 79,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Threat Detection", "Firewall", "Updates"],
  },
  {
    id: 39,
    name: "SyncMaster",
    brand: "DataFlow",
    category: "Cloud",
    price: 89,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Sync Across Devices", "Backup", "Encrypted"],
  },
  {
    id: 40,
    name: "DailyPlanner",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 39,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1529338296731-c4280a44fc48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Calendar", "Reminders", "Notes"],
  },
  {
    id: 41,
    name: "PhotoEnhance",
    brand: "ImageWorks",
    category: "Design",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1527097779402-4a4b213307fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
    features: ["Auto Enhance", "Filters", "Batch Edit"],
  },
  {
    id: 42,
    name: "LoanTracker",
    brand: "MoneySmart",
    category: "Finance",
    price: 59,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
    features: ["Payment Reminders", "Reports", "History"],
  },
  {
    id: 43,
    name: "CodeAnalyzer",
    brand: "DevTools",
    category: "Development",
    price: 99,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2152993621/photo/close-up-image-of-a-woman-typing-on-keyboard-working-on-her-laptop-computer-at-a-table-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=tqZ1F-tfN-zsripJiN3NpdzytOhwVpuABsPWAmKqals=",
    features: ["Static Analysis", "Metrics", "Integrations"],
  },
  {
    id: 44,
    name: "MalwareDefender",
    brand: "SafeSoft",
    category: "Security",
    price: 89,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    features: ["Malware Scan", "Real-time Protection", "Quarantine"],
  },
  {
    id: 45,
    name: "CloudVault",
    brand: "DataFlow",
    category: "Cloud",
    price: 79,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    features: ["Encrypted Storage", "Backup", "Multi-user"],
  },
  {
    id: 46,
    name: "GoalSetter",
    brand: "ProductiveApps",
    category: "Productivity",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    features: ["Goal Tracking", "Reminders", "Reports"],
  },
  {
    id: 47,
    name: "VectorArt",
    brand: "ImageWorks",
    category: "Design",
    price: 79,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    features: ["Vector Tools", "Templates", "Export"],
  },
  {
    id: 48,
    name: "FinanceTracker",
    brand: "MoneySmart",
    category: "Finance",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    features: ["Spending Reports", "Budget", "Alerts"],
  },
];

const SoftwareFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(softwareData.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Divide software data into slides
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(softwareData.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Software Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
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
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full transition-shadow duration-300"
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
                    {/* Category Badge */}
                    <span className="absolute top-2 right-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">Brand: {deal.brand}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < deal.rating ? "text-amber-600" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">${deal.price}</span>
                    </div>

                    {/* Features */}
                    <ul className="mt-2 text-xs text-gray-600 list-disc list-inside">
                      {deal.features?.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
                            ? "bg-amber-600 text-black hover:bg-amber-500"
                            : "bg-white text-gray-600 cursor-not-allowed"
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
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default SoftwareFeaturedDeals;
