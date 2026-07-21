"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  RoundedBox,
  Text, // ✅ Use Text from drei
} from "@react-three/drei";
import * as THREE from "three";

// ✅ Realistic 3D Watch Component
const RealisticWatch = () => {
  const groupRef = useRef();
  const hourHandRef = useRef();
  const minuteHandRef = useRef();
  const secondHandRef = useRef();
  const [scale, setScale] = useState([1, 1, 1]);

  // Responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1440) {
        setScale([1.2, 1.2, 1.2]);
      } else if (width < 768) {
        setScale([0.9, 0.9, 0.9]);
      } else {
        setScale([1, 1, 1]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Real-time ticking + rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    if (secondHandRef.current)
      secondHandRef.current.rotation.z = -seconds * (Math.PI / 30);
    if (minuteHandRef.current)
      minuteHandRef.current.rotation.z =
        -(minutes + seconds / 60) * (Math.PI / 30);
    if (hourHandRef.current)
      hourHandRef.current.rotation.z =
        -(hours + minutes / 60) * (Math.PI / 6);
  });

  // Hour Markers (using Text from drei)
  const markers = [];
  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const x = Math.sin(angle) * 0.65;
    const y = Math.cos(angle) * 0.65;
    markers.push(
      <Text
        key={i}
        position={[x, y, 0.13]}
        fontSize={0.08}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {i}
      </Text>
    );
  }

  return (
    <group ref={groupRef} rotation={[0.2, 0.8, 0]} scale={scale}>
      {/* Watch Body */}
      <RoundedBox args={[1.8, 1.8, 0.2]} radius={0.1} smoothness={6} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#111"
          metalness={0.9}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.02}
          reflectivity={1}
        />
      </RoundedBox>

      {/* Glass */}
      <mesh position={[0, 0, 0.11]}>
        <circleGeometry args={[0.85, 64]} />
        <meshPhysicalMaterial
          color="#222"
          transmission={1}
          thickness={0.15}
          ior={1.6}
          clearcoat={1}
          roughness={0.02}
          reflectivity={1}
        />
      </mesh>

      {/* Dial */}
      <mesh position={[0, 0, 0.115]}>
        <circleGeometry args={[0.75, 64]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Hour Markers */}
      {markers}

      {/* Hands */}
      {/* Hour Hand */}
      <mesh ref={hourHandRef} position={[0, 0, 0.13]}>
        <boxGeometry args={[0.04, 0.4, 0.02]} />
        <meshStandardMaterial color="#fff" />
      </mesh>

      {/* Minute Hand */}
      <mesh ref={minuteHandRef} position={[0, 0, 0.14]}>
        <boxGeometry args={[0.02, 0.6, 0.02]} />
        <meshStandardMaterial color="#ff0" />
      </mesh>

      {/* Second Hand */}
      <mesh ref={secondHandRef} position={[0, 0, 0.15]}>
        <boxGeometry args={[0.01, 0.7, 0.01]} />
        <meshStandardMaterial color="#f00" />
      </mesh>

      {/* Center Point */}
      <mesh position={[0, 0, 0.16]}>
        <circleGeometry args={[0.04, 32]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    </group>
  );
};

// ✅ Hero Section
const WatchesHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-0">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-black text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium Watch Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Discover Timeless Elegance with Our{" "}
            <span className="text-black underline decoration-black decoration-4">
              Luxury Watches
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Explore a fusion of craftsmanship and modern tech. Precision-engineered watches
            for those who value time and style.
          </p>

          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-black">$499</p>
            <p className="text-gray-600 text-sm">Free delivery worldwide!</p>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-black text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-black transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm">
            <p>✔ Free Returns</p>
            <p>✔ 2-Year Warranty</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* RIGHT CONTENT: 3D WATCH */}
        <div className="flex-1 max-w-sm w-full h-[400px]">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} enablePan={false} />
            <RealisticWatch />
            <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default WatchesHero;
