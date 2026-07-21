"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const featuredDeals = [
      {
    id: 1,
    name: "The Art of Programming",
    author: "Donald Knuth",
    category: "Computer Science",
    price: 49,
    features: ["Hardcover", "Detailed Examples", "Algorithms"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1553060146-71667aa3f223?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Deep Learning Illustrated",
    author: "Jon Krohn",
    category: "AI & ML",
    price: 39,
    features: ["Full Color", "Visual Guide", "Beginner Friendly"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1362968064/photo/opened-book-on-crumpled-bed.webp?a=1&s=612x612&w=0&k=20&c=jsbdcjJ1RsdeFAfOvEW2wfo4h-wHgCtF1BjSb33Nf3w=",
  },
  {
    id: 3,
    name: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 59,
    features: ["Best Practices", "Examples", "Readable Code"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/1362967808/photo/open-book-and-cup-of-coffee-in-bed.webp?a=1&s=612x612&w=0&k=20&c=57lIXx_dYum9FStE6selutYZ6phutiyu_ZYREfIr2jg=",
  },
  {
    id: 4,
    name: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Web Development",
    price: 29,
    features: ["Lightweight", "Advanced Tips", "Core Concepts"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/121119197/photo/bedtime-story.webp?a=1&s=612x612&w=0&k=20&c=g7k_Wn5q5_JOWh4K2iNTd0uwSO0470ZAArOQn34Ftvg=",
  },
  {
    id: 5,
    name: "Introduction to Algorithms",
    author: "Cormen et al.",
    category: "Computer Science",
    price: 89,
    features: ["Comprehensive", "Theoretical", "Mathematical"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1529589941132-43606325dfb4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 6,
    name: "Python Crash Course",
    author: "Eric Matthes",
    category: "Programming",
    price: 45,
    features: ["Beginner Friendly", "Practical Projects", "Code Samples"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1631970840403-1d0013b1a842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 7,
    name: "React Explained",
    author: "Zac Gordon",
    category: "Web Development",
    price: 42,
    features: ["Hooks", "Components", "JSX"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1580607391768-3342675e4794?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 8,
    name: "Machine Learning Basics",
    author: "Andrew Ng",
    category: "AI & ML",
    price: 54,
    features: ["Algorithms", "Math Concepts", "Practical Examples"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "System Design Interview",
    author: "Alex Xu",
    category: "Software Engineering",
    price: 69,
    features: ["Architecture", "Scalable Systems", "Case Studies"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/1899351059/photo/a-mug-and-a-bouquet-of-lilacs.webp?a=1&s=612x612&w=0&k=20&c=0HkR-hKsKhDAdBcmzTr6VrZ6hGZqdsoAqHN7wU2NTsQ=",
  },
  {
    id: 10,
    name: "Design Patterns Explained",
    author: "Erich Gamma",
    category: "Programming",
    price: 59,
    features: ["Reusable Code", "OOP Principles", "Examples"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1579206630110-18c81a51bdd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },

  // ✅ Remaining 50 books
  {
    id: 11,
    name: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Web Development",
    price: 34,
    features: ["Deep JS Concepts", "Async", "Closures"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1732017765168-b0410079e6a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 12,
    name: "Kubernetes Up & Running",
    author: "Brendan Burns",
    category: "Cloud Computing",
    price: 69,
    features: ["Deployment", "Clusters", "Scaling"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1732017765168-b0410079e6a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 13,
    name: "Data Science from Scratch",
    author: "Joel Grus",
    category: "Data Science",
    price: 49,
    features: ["Python", "Math Basics", "Algorithms"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1732017765168-b0410079e6a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 14,
    name: "Hands-On Machine Learning",
    author: "Aurélien Géron",
    category: "AI & ML",
    price: 79,
    features: ["TensorFlow", "Projects", "Neural Networks"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1614718684316-c9b9bb6139bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 15,
    name: "The DevOps Handbook",
    author: "Gene Kim",
    category: "DevOps",
    price: 55,
    features: ["CI/CD", "Automation", "Cloud"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 16,
    name: "Refactoring: Improving Design",
    author: "Martin Fowler",
    category: "Programming",
    price: 65,
    features: ["Code Quality", "Best Practices", "Examples"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677187301411-eaab5702a215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Artificial Intelligence Basics",
    author: "Tom Taulli",
    category: "AI & ML",
    price: 40,
    features: ["Intro to AI", "Clear Explanations", "Practical Examples"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677187301481-34be1be7b558?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 18,
    name: "Docker Deep Dive",
    author: "Nigel Poulton",
    category: "Cloud Computing",
    price: 55,
    features: ["Containerization", "Practical Guide", "Hands-On"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1681487732859-c2a780022063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 19,
    name: "Effective Java",
    author: "Joshua Bloch",
    category: "Programming",
    price: 69,
    features: ["Best Practices", "Java Tips", "Expert Insights"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1681487889879-80e84363416c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 20,
    name: "Fluent Python",
    author: "Luciano Ramalho",
    category: "Programming",
    price: 75,
    features: ["Advanced Python", "Idiomatic Code", "Examples"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1677526779324-01d20d3a27ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 21,
    name: "Programming Pearls",
    author: "Jon Bentley",
    category: "Computer Science",
    price: 44,
    features: ["Problem Solving", "Algorithms", "Tips"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1715107534067-040e38ee7049?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 22,
    name: "Algorithms Unlocked",
    author: "Thomas H. Cormen",
    category: "Computer Science",
    price: 50,
    features: ["Intro to Algorithms", "Easy to Read", "Clear Examples"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 23,
    name: "Compilers: Principles & Practice",
    author: "Alfred Aho",
    category: "Computer Science",
    price: 89,
    features: ["Theory", "Compiler Design", "Practical Examples"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    id: 24,
    name: "Cloud Native Patterns",
    author: "Cornelia Davis",
    category: "Cloud Computing",
    price: 68,
    features: ["Microservices", "Patterns", "Best Practices"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 25,
    name: "Designing Data-Intensive Apps",
    author: "Martin Kleppmann",
    category: "Data Engineering",
    price: 92,
    features: ["Scalability", "Data Systems", "Performance"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1721762724233-1332468b252f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 26,
    name: "Operating System Concepts",
    author: "Abraham Silberschatz",
    category: "Computer Science",
    price: 84,
    features: ["OS Principles", "Theory", "Practical Knowledge"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1748966877518-5462b0ded342?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 27,
    name: "Linux Bible",
    author: "Christopher Negus",
    category: "Operating Systems",
    price: 59,
    features: ["Linux Commands", "Sysadmin", "Configuration"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1667251758769-398dca4d5f1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 28,
    name: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    category: "AI & ML",
    price: 95,
    features: ["Theory", "AI Concepts", "Research Insights"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1681701892410-c22d446a0567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 29,
    name: "Natural Language Processing in Action",
    author: "Hobson Lane",
    category: "AI & ML",
    price: 69,
    features: ["NLP Basics", "Practical Examples", "Projects"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1605008805160-81a24c8dc890?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 30,
    name: "Data Engineering with Python",
    author: "Paul Crickard",
    category: "Data Engineering",
    price: 62,
    features: ["ETL", "Data Pipelines", "Python"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1734711077997-9456ed36a77c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 31,
    name: "Hands-On SQL",
    author: "Ryan Turner",
    category: "Databases",
    price: 48,
    features: ["SQL Basics", "Queries", "Optimization"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1562232573-0305012a8818?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    name: "Graph Databases Explained",
    author: "Ian Robinson",
    category: "Databases",
    price: 58,
    features: ["Neo4j", "Graph Models", "Use Cases"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 33,
    name: "MongoDB in Action",
    author: "Kyle Banker",
    category: "Databases",
    price: 60,
    features: ["NoSQL", "Practical Guide", "Examples"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxib29rfGVufDB8fDB8fHww",
  },
  {
    id: 34,
    name: "The Pragmatic Programmer",
    author: "Andy Hunt",
    category: "Programming",
    price: 58,
    features: ["Best Practices", "Productivity", "Mindset"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1591951425600-d09958978584?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Test-Driven Development",
    author: "Kent Beck",
    category: "Programming",
    price: 49,
    features: ["TDD Basics", "Examples", "Case Studies"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1711999940406-a79505701d5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 36,
    name: "Python Tricks",
    author: "Dan Bader",
    category: "Programming",
    price: 45,
    features: ["Python Tips", "Best Practices", "Readable Code"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1725400811474-0a8720cb0227?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 37,
    name: "Machine Learning Yearning",
    author: "Andrew Ng",
    category: "AI & ML",
    price: 55,
    features: ["ML Concepts", "Project Guidance", "Real Use Cases"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1683133333081-452251d2a031?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 38,
    name: "Data Science for Business",
    author: "Foster Provost",
    category: "Data Science",
    price: 72,
    features: ["Practical Data Science", "Case Studies", "Business Context"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1661534855533-63d347a52303?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 39,
    name: "Big Data: Principles and Paradigms",
    author: "Rajkumar Buyya",
    category: "Data Engineering",
    price: 85,
    features: ["Big Data Concepts", "Frameworks", "Techniques"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1661534855533-63d347a52303?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 40,
    name: "Hadoop: The Definitive Guide",
    author: "Tom White",
    category: "Big Data",
    price: 70,
    features: ["Hadoop Framework", "Ecosystem", "Data Processing"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1498906538030-8da82e61e424?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Spark in Action",
    author: "Jean-Georges Perrin",
    category: "Big Data",
    price: 62,
    features: ["Apache Spark", "Practical Examples", "Real-Time Data"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1647038673759-4205c47e3a3a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 42,
    name: "Statistics for Data Scientists",
    author: "Peter Bruce",
    category: "Data Science",
    price: 64,
    features: ["Statistics Basics", "Data Analysis", "Examples"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1650248758355-63dd07bf4202?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 43,
    name: "Practical Deep Learning",
    author: "Ronald T. Kneusel",
    category: "AI & ML",
    price: 68,
    features: ["Deep Learning", "Hands-On Projects", "Neural Networks"],
    rating: 4,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1681825205424-6840b50c231b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 44,
    name: "Kubernetes in Action",
    author: "Marko Luksa",
    category: "Cloud Computing",
    price: 80,
    features: ["Kubernetes Concepts", "Deployment", "Scaling"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1750360906456-b28d130fa7f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 45,
    name: "Site Reliability Engineering",
    author: "Google SRE Team",
    category: "DevOps",
    price: 78,
    features: ["SRE Principles", "Reliability", "Monitoring"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1605889762739-0c116085776d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 46,
    name: "Continuous Delivery",
    author: "Jez Humble",
    category: "DevOps",
    price: 74,
    features: ["CI/CD", "Automation", "Best Practices"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664006988924-16f386bcd40e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
  },
  {
    id: 47,
    name: "Microservices Patterns",
    author: "Chris Richardson",
    category: "Software Architecture",
    price: 82,
    features: ["Microservices", "Design Patterns", "Scalability"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1615976909545-a2d402c7dac3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Domain-Driven Design",
    author: "Eric Evans",
    category: "Software Architecture",
    price: 88,
    features: ["DDD", "Complex Systems", "Design Principles"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/690351248/photo/books.webp?a=1&s=612x612&w=0&k=20&c=4GIMfvXqeIY1weUQJQHMVeWrn5iBV1KGCqBxINUgSaM=",
  },
  {
    id: 49,
    name: "Software Engineering at Google",
    author: "Titus Winters",
    category: "Software Engineering",
    price: 91,
    features: ["Google Practices", "Scalable Systems", "Team Strategies"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1607473128892-d7c8cd439cc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 50,
    name: "The Mythical Man-Month",
    author: "Fred Brooks",
    category: "Software Engineering",
    price: 52,
    features: ["Project Management", "Software Projects", "Essays"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1549675584-91f19337af3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 51,
    name: "The Phoenix Project",
    author: "Gene Kim",
    category: "DevOps",
    price: 65,
    features: ["DevOps Journey", "Story Format", "IT Management"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723662089641-3b5f824bb0f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 52,
    name: "Building Microservices",
    author: "Sam Newman",
    category: "Software Architecture",
    price: 79,
    features: ["Microservices", "Scalable Apps", "Deployment Strategies"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1576289853729-0445e19a7e16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 53,
    name: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    category: "Web Development",
    price: 42,
    features: ["JavaScript Deep Dive", "Core Concepts", "Advanced"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 54,
    name: "Learning React",
    author: "Alex Banks",
    category: "Web Development",
    price: 56,
    features: ["React Basics", "Hooks", "Modern Patterns"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1681933859581-55594c9a09a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 55,
    name: "Fullstack D3 and Data Visualization",
    author: "Amelia Wattenberger",
    category: "Web Development",
    price: 67,
    features: ["D3.js", "Data Viz", "Charts"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1681933859581-55594c9a09a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 56,
    name: "CSS Secrets",
    author: "Lea Verou",
    category: "Web Design",
    price: 47,
    features: ["CSS Techniques", "Design Tips", "Modern UI"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1662749409560-77f9dd13b02b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 57,
    name: "Don't Make Me Think",
    author: "Steve Krug",
    category: "UX Design",
    price: 50,
    features: ["Usability", "UX Principles", "Practical Guide"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1662749409560-77f9dd13b02b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 58,
    name: "The Design of Everyday Things",
    author: "Don Norman",
    category: "UX Design",
    price: 54,
    features: ["Design Thinking", "Human-Centered Design", "Examples"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1621606653018-3abc15a85391?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
  },
  {
    id: 59,
    name: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    category: "Product Design",
    price: 46,
    features: ["Psychology", "Product Strategy", "Case Studies"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1708175960578-4743f9bfe917?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  },
  {
    id: 60,
    name: "Lean UX",
    author: "Jeff Gothelf",
    category: "UX Design",
    price: 53,
    features: ["Agile UX", "Collaboration", "Prototyping"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1596132197153-9a573d04a36d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  }
];

const BooksFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    // Responsive cards per slide
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(featuredDeals.length / cardsPerSlide);

  // Clamp slide index
  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Slice deals for current slide
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(featuredDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Featured Deals</h2>

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
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full   transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Badge */}
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

                    {/* Features */}
                    <ul className="text-xs text-amber-500 mb-3 list-disc list-inside">
                      {deal.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < deal.rating ? "text-amber-600" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">${deal.price}</span>
                    </div>

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

export default BooksFeaturedDeals;
