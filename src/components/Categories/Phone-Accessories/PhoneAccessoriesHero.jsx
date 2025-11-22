"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

const PhoneModel = ({ scale }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/korean_public_payphone_01_2k.gltf");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
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

const PhoneAccessoriesHero = () => {
  const [modelScale, setModelScale] = useState([3, 3, 3]);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  const [canvasHeight, setCanvasHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setModelScale([5, 5, 5]);
        setCameraPosition([0, 0, 4]);
        setCanvasHeight(420);
      } else if (width < 1024) {
        setModelScale([4, 4, 4]);
        setCameraPosition([0, 0, 4.5]);
        setCanvasHeight(480);
      } else {
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
    <section className="w-full bg-gray-900 text-white py-16 lg:py-24 my-[-50px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium Public Phone Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Discover Classic Korean{" "}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4">
              Public Payphones
            </span>
          </h1>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Experience the nostalgia and unique design of Korea's iconic public
            payphones, now in 3D.
          </p>

          <div className="bg-gray-800/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-yellow-400">$259</p>
            <p className="text-gray-400 text-sm">Worldwide shipping available!</p>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out">
              Buy Now
            </button>
            <button className="border border-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-400 text-sm flex-wrap">
            <p>✔ Authentic Design</p>
            <p>✔ Detailed 3D Model</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* Right Side 3D Model */}
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
            <PhoneModel scale={modelScale} />
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

export default PhoneAccessoriesHero;
