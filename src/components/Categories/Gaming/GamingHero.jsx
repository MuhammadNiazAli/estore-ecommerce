"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

// ✅ Chess Model Component
const ChessModel = ({ scale }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/chess_set_2k.gltf");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // Smooth rotation
    }
  });

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={scale}
      position={[0, -1.2, 0]}
    />
  );
};

// ✅ GamingHero Section
const GamingHero = () => {
  const [modelScale, setModelScale] = useState([3, 3, 3]);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  const [canvasHeight, setCanvasHeight] = useState(500);

  // ✅ Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setModelScale([5, 5, 5]);
        setCameraPosition([0, 0, 4]);
        setCanvasHeight(420);
      } else if (width < 1024) {
        // Tablet
        setModelScale([4.2, 4.2, 4.2]);
        setCameraPosition([0, 0, 4.5]);
        setCanvasHeight(480);
      } else {
        // Desktop
        setModelScale([2.8, 2.8, 2.8]);
        setCameraPosition([0, 0, 5.5]);
        setCanvasHeight(500);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-amber-700 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Luxury Chess Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Elevate Your Game with{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Premium Chess
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Discover handcrafted luxury chess sets, perfect for collectors and
            enthusiasts who value style and strategy.
          </p>

          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">$299</p>
            <p className="text-gray-600 text-sm">Free worldwide shipping!</p>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-700 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-amber-600 transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Premium Quality</p>
            <p>✔ Handcrafted Design</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* ✅ Right Side 3D Model */}
        <div
          className="flex-1 w-full mx-auto"
          style={{ height: `${canvasHeight}px`, maxWidth: "480px" }}
        >
          <Canvas
            shadows
            camera={{ position: cameraPosition, fov: 30 }}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight
              castShadow
              position={[5, 8, 5]}
              intensity={2}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr" />
            <OrbitControls enableZoom={false} enablePan={false} />
            <ChessModel scale={modelScale} />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={12}
              blur={3}
              far={8}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default GamingHero;
