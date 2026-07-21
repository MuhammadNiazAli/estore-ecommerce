"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

// ✅ Baseball Model Component
const BaseballModel = ({ scale }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/baseball_01_2k.gltf");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // Slow rotation
    }
  });

  return <primitive ref={groupRef} object={scene} scale={scale} />;
};

// ✅ SportsHero Section
const SportsHero = () => {
  const [modelScale, setModelScale] = useState([6, 6, 6]);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 4]);
  const [canvasHeight, setCanvasHeight] = useState(650);

  // ✅ Responsive logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setModelScale([8, 8, 8]); // Much bigger
        setCameraPosition([0, 0, 3]); // Bring closer
        setCanvasHeight(420);
      } else if (width < 1024) {
        // Tablet
        setModelScale([7, 7, 7]);
        setCameraPosition([0, 0, 3.5]);
        setCanvasHeight(550);
      } else {
        // Desktop
        setModelScale([6, 6, 6]);
        setCameraPosition([0, 0, 4]);
        setCanvasHeight(650);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-40px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium Sports Gear 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Take Your Game to the Next Level with Our{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Professional Baseball Gear
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            High-performance equipment crafted for athletes who aim for
            excellence on and off the field.
          </p>

          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">$99</p>
            <p className="text-gray-600 text-sm">Free worldwide shipping!</p>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-600 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Pro-Grade Material</p>
            <p>✔ Lightweight Design</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* ✅ 3D Model */}
        <div className="flex-1 w-full" style={{ height: `${canvasHeight}px` }}>
          <Canvas
            shadows
            camera={{ position: cameraPosition, fov: 30 }} // Slightly narrower fov for better fit
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight
              castShadow
              position={[5, 5, 5]}
              intensity={2}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr" />
            <OrbitControls enableZoom={false} enablePan={false} />
            <BaseballModel scale={modelScale} />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              scale={12}
              blur={3}
              far={6}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default SportsHero;
