"use client";

import React, { useRef, useEffect, useState, memo, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, RoundedBox, Instances, Instance } from "@react-three/drei";
import * as THREE from "three";

// ✅ Optimized Laptop Model
const LaptopModel = memo(() => {
  const groupRef = useRef();
  const [scale, setScale] = useState([1, 1, 1]);

  // ✅ Responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width < 768 ? [0.85, 0.85, 0.85] : [1, 1, 1]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Light rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  // ✅ Precompute keyboard positions
  const keyboardPositions = useMemo(() => {
    const keys = [];
    for (let i = 0; i < 60; i++) {
      const row = Math.floor(i / 12);
      const col = i % 12;
      const x = -1.5 + col * 0.28;
      const z = -0.9 + row * 0.28;
      keys.push([x, 0.22, z]);
    }
    return keys;
  }, []);

  // ✅ Precompute geometry and material for Instances
  const keyGeometry = useMemo(() => new THREE.BoxGeometry(0.24, 0.03, 0.24), []);
  const keyMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#333", metalness: 0.5, roughness: 0.4 }), []);

  return (
    <group ref={groupRef} position={[0, -0.8, 0]} rotation={[0.1, 0.8, 0]} scale={scale}>
      {/* Laptop Base */}
      <RoundedBox args={[3.8, 0.3, 2.6]} radius={0.08} smoothness={6} castShadow>
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      {/* Keyboard Surface */}
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[3.4, 0.04, 2.3]} />
        <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ✅ Optimized Keys with Instances */}
      <Instances geometry={keyGeometry} material={keyMaterial} limit={60}>
        {keyboardPositions.map((pos, i) => (
          <Instance key={i} position={pos} />
        ))}
      </Instances>

      {/* Touchpad */}
      <mesh position={[0, 0.22, 0.9]}>
        <boxGeometry args={[1.2, 0.02, 0.8]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Screen Frame */}
      <group position={[0, 1.6, -1.25]} rotation={[-0.1, 0, 0]}>
        <RoundedBox args={[3.8, 2.3, 0.12]} radius={0.06} smoothness={6}>
          <meshStandardMaterial color="#111" metalness={1} roughness={0.25} />
        </RoundedBox>

        {/* Screen Display */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[3.5, 2]} />
          <meshPhysicalMaterial color="#000" roughness={0.05} metalness={0.8} clearcoat={1} clearcoatRoughness={0.02} envMapIntensity={1} />
        </mesh>
      </group>
    </group>
  );
});

const LaptopHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-0">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium Laptop Collection 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover the{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Next-Level Laptop
            </span>
          </h1>
          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Power, performance, and elegance combined in one machine. Perfect for professionals,
            gamers, and creators.
          </p>
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">$1,299</p>
            <p className="text-gray-600 text-sm">Limited stock available!</p>
          </div>
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-600 text-black px-7 py-3 rounded-full font-semibold hover:bg-amber-500 transition">
              Buy Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold hover:bg-gray-500 hover:text-black transition">
              View Specs
            </button>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm">
            <p>✔ Free Shipping</p>
            <p>✔ 2-Year Warranty</p>
            <p>✔ Secure Checkout</p>
          </div>
        </div>

        {/* RIGHT: 3D Laptop */}
        <div className="flex-1 max-w-md w-full h-[420px]">
          <Canvas shadows camera={{ position: [0, 0, 7], fov: 35 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
            <Environment preset="city" background={false} blur={0.4} />
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
            <LaptopModel />
            <ContactShadows position={[0, -1.8, 0]} opacity={0.35} scale={8} blur={2.5} far={3.8} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default LaptopHero;
