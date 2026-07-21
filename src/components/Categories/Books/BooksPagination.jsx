"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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
];

const BooksPagination = () => {
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
            Explore Our Books Knowledge
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
                  <p className="text-black line-through text-sm">
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

export default BooksPagination;
