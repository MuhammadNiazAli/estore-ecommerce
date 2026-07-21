'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';

// Linear interpolation helper for flicker smoothing
const lerp = (a, b, t) => a + (b - a) * t;

// Flickering light component for subtle sparkle effect
const FlickeringLight = React.memo(function FlickeringLight({ position, color, intensityBase = 0.6 }) {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const flickerFreq = 3;
      const elapsed = clock.elapsedTime * flickerFreq + position[0] * 10;
      const flickerRaw = 0.8 + 0.3 * Math.sin(elapsed);
      const currentIntensity = lerp(lightRef.current.intensity, flickerRaw, 0.1);
      lightRef.current.intensity = currentIntensity;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={position}
      color={color}
      intensity={intensityBase}
      distance={2}
      decay={2}
      castShadow={false}
    />
  );
});

// Christmas Tree Component
function ChristmasTree() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  const layers = useMemo(() => [
    { radius: 1.5, height: 1.2, y: 0 },
    { radius: 1.1, height: 1, y: 0.9 },
    { radius: 0.8, height: 0.8, y: 1.6 },
    { radius: 0.5, height: 0.6, y: 2.1 },
    { radius: 0.3, height: 0.5, y: 2.5 },
  ], []);

  const lights = useMemo(() => {
    const temp = [];
    layers.forEach(({ radius, y }) => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * (radius * 0.7 + Math.random() * 0.1);
        const z = Math.sin(angle) * (radius * 0.7 + Math.random() * 0.1);
        const lightY = y + 0.1 + (Math.random() - 0.5) * 0.2;
        temp.push([x, lightY, z]);
      }
    });
    return temp;
  }, [layers]);

  const lightColors = useMemo(() => ['#ff5555', '#55ff55', '#5555ff', '#b45309', '#ff55ff', '#55ffff'], []);

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Trunk */}
      <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.35, 1, 16]} />
        <meshPhysicalMaterial
          color="#5A3825"
          roughness={0.85}
          metalness={0.05}
          clearcoat={0.3}
          clearcoatRoughness={0.6}
        />
      </mesh>

      {/* Branch layers */}
      {layers.map(({ radius, height, y }, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
          <coneGeometry args={[radius, height, 16]} />
          <meshPhysicalMaterial
            color="#0b4d1f"
            roughness={0.3}
            metalness={0.4}
            clearcoat={0.7}
            clearcoatRoughness={0.15}
            emissive="#004d0f"
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}

      {/* Christmas lights */}
      {lights.map((pos, i) => {
        const color = lightColors[i % lightColors.length];
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.045, 6, 6]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1}
              roughness={0.2}
              metalness={0.8}
            />
            <FlickeringLight
              position={pos}
              color={color}
              intensityBase={0.7}
            />
          </mesh>
        );
      })}

      {/* Star on top */}
      <mesh position={[0, 3.1, 0]} castShadow>
        <coneGeometry args={[0.15, 0.4, 5]} />
        <meshPhysicalMaterial
          color="#b45309"
          emissive="#b45309"
          emissiveIntensity={2}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>
    </group>
  );
}

// Gift Box Component
function GiftBox({ position = [2, 0, 0], rotationY = 0 }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      // Slight slow rotation back and forth for subtle animation
      groupRef.current.rotation.y = rotationY + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Box base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.8, 1]} />
        <meshPhysicalMaterial
          color="#c62828"
          metalness={0.7}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.3}
          reflectivity={0.9}
          emissive="#660000"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Box lid */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.45, 0.15, 1.05]} />
        <meshPhysicalMaterial
          color="#b71c1c"
          metalness={0.8}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.2}
          emissive="#7f0000"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Ribbon vertical */}
      <mesh position={[0, 0, 0.52]}>
        <boxGeometry args={[0.2, 0.9, 0.12]} />
        <meshStandardMaterial color="#b45309" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Ribbon horizontal */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0.52, 0, 0]}>
        <boxGeometry args={[0.2, 0.9, 0.12]} />
        <meshStandardMaterial color="#b45309" metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Gift Bow Component (simple bow shape using torus and spheres)
function GiftBow({ position = [2, 0.9, 0], rotationY = 0 }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      // Slight pulse scale animation to simulate twinkle
      const scale = 1 + Math.sin(time * 6) * 0.05;
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Left loop */}
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[0.15, 0.06, 16, 100]} />
        <meshPhysicalMaterial color="#b45309" metalness={0.95} roughness={0.15} clearcoat={1} />
      </mesh>

      {/* Right loop */}
      <mesh rotation={[0, 0, -Math.PI / 6]}>
        <torusGeometry args={[0.15, 0.06, 16, 100]} />
        <meshPhysicalMaterial color="#b45309" metalness={0.95} roughness={0.15} clearcoat={1} />
      </mesh>

      {/* Center knot */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial color="#b45309" metalness={1} roughness={0.2} clearcoat={1} />
      </mesh>
    </group>
  );
}

export default function ChristmasTreeHero() {
  return (
    <section className="max-w-[1000px] mx-auto rounded-lg shadow-2xl overflow-hidden">
      <div className="w-full h-[600px] bg-white relative">
        <Canvas
          shadows
          camera={{ position: [5, 3, 6], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ toneMappingExposure: 1 }}
          frameloop="demand"
        >
          {/* Lighting */}
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[5, 10, 7]}
            intensity={0.9}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0005}
            color="#b45309"
          />
          <pointLight position={[0, 5, 0]} intensity={0.25} color="#aaffaa" />
          <pointLight position={[-5, 2, 5]} intensity={0.25} color="#77cc77" />

          {/* Scene */}
          <ChristmasTree />
          <GiftBox />
          <GiftBow />

          {/* Shadows */}
          <ContactShadows
            position={[0, -1.05, 0]}
            opacity={0.7}
            scale={10}
            blur={4}
            far={4}
            color="#0a4d1f"
          />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}
            rotateSpeed={0.3}
            zoomSpeed={0.8}
          />
        </Canvas>
      </div>
    </section>
  );
}
