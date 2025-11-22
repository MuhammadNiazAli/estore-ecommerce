'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  RoundedBox,
  Html,
} from '@react-three/drei';
import * as THREE from 'three';

const RealisticPhone = () => {
  const groupRef = useRef();
  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1440) {
        setScale([1, 1, 1.2]);
      } else {
        setScale([1, 1, 1]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0.8, 0]} scale={scale}>
      {/* Phone Body */}
      <RoundedBox
        args={[1.6, 3.2, 0.15]}
        radius={0.1}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.5}
          roughness={0.02}
          transmission={1}
          thickness={0.35}
          ior={1.52}
          clearcoat={1}
          clearcoatRoughness={0.01}
          reflectivity={1}
          transparent={true}
          opacity={1}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.081]}>
        <planeGeometry args={[1.5, 3.1]} />
        <meshPhysicalMaterial
          color="#000000"
          roughness={0.04}
          metalness={0.8}
          transmission={0.9}
          thickness={0.2}
          ior={1.4}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.03}
          emissive={new THREE.Color(0x00ffc3)}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Extra Layer */}
      <mesh position={[0, 0, 0.083]} scale={[1.01, 1.01, 1]}>
        <planeGeometry args={[1.5, 3.1]} />
        <meshStandardMaterial color="#444" metalness={1} roughness={0.2} />
      </mesh>

      {/* Camera Circle */}
      <mesh position={[0, 1.45, 0.084]}>
        <circleGeometry args={[0.06, 32]} />
        <meshPhysicalMaterial
          color="#2ef"
          transmission={1}
          roughness={0}
          thickness={0.2}
          ior={1.6}
          emissive="#1ef"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
};

const PhoneHero = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 lg:py-24 my-[-80px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Tagline */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-2">
            #1 Trending Smartphone 2025
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Upgrade to the{' '}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4">
              Next Generation Phone
            </span>
          </h1>

          {/* Sub-text */}
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Experience cutting-edge performance, sleek design, and powerful features with our
            latest smartphone series. Secure your deal now!
          </p>

          {/* Price & Stock */}
          <div className="bg-gray-800/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-yellow-400">$999</p>
            <p className="text-gray-400 text-sm">Limited stock available!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out">
              Buy Now
            </button>
            <button className="border border-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
              View Specs
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-400 text-sm">
            <p>✔ Free Shipping</p>
            <p>✔ 1-Year Warranty</p>
            <p>✔ Secure Checkout</p>
          </div>
        </div>

        {/* RIGHT: 3D PHONE */}
        <div className="flex-1 max-w-sm w-full h-[400px]">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} enablePan={false} />
            <RealisticPhone />
            <ContactShadows
              position={[0, -1.6, 0]}
              opacity={0.4}
              scale={10}
              blur={2.5}
              far={4.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default PhoneHero;
