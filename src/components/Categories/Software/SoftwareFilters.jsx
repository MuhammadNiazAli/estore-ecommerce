"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample Software Products Data
export const softwareData = [
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
];

const SoftwareFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 150,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(softwareData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let result = softwareData;

    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.features.length > 0) {
      result = result.filter((p) =>
        filters.features.every((f) => p.features.includes(f))
      );
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((p) => p.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((p) => p.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts([...result]);
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
      brand: [],
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 150,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8 min-h-screen">
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
            placeholder="Search software..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Brand</h3>
            {["SoftWorks", "CreativeLabs", "DevTools", "SafeNet", "MoneyMinds"].map(
              (brand) => (
                <label key={brand} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => toggleFilter("brand", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Category</h3>
            {[
              "Productivity",
              "Design",
              "Development",
              "Security",
              "Finance",
            ].map((cat) => (
              <label key={cat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {[
              "Cloud-Based",
              "Collaboration",
              "Offline Mode",
              "Templates",
              "Drag & Drop",
              "Export Options",
              "Syntax Highlighting",
              "Debugging",
              "Version Control",
              "Encrypted",
              "Fast Connection",
              "Multi-device",
              "Budgeting",
              "Reporting",
              "Cloud Sync",
            ].map((feature) => (
              <label key={feature} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => toggleFilter("features", feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="150"
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
              Unavailable
            </label>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-amber-600">${product.price}</p>
                <p className="text-sm">
                  {product.stock ? "Available" : "Unavailable"}
                </p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
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

export default SoftwareFilters;
