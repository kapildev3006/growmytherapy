"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * FloatingOrganicSphere
 * A single soothing, slow-drifting mesh with soft lighting and low opacity.
 * Rotates slowly on tick to simulate organic calm breathing.
 */
function FloatingOrganicSphere({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = React.useRef<THREE.Mesh>(null!);
  const timerRef = React.useRef<THREE.Timer | null>(null);

  React.useEffect(() => {
    const timer = new THREE.Timer();
    timerRef.current = timer;
    return () => {
      timer.dispose();
      timerRef.current = null;
    };
  }, []);

  // Extremely subtle breathing pulse and rotation using THREE.Timer
  useFrame(() => {
    if (!meshRef.current || !timerRef.current) return;
    timerRef.current.update();
    const t = timerRef.current.getElapsed() * speed * 0.4;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.cos(t * 0.2) * 0.25;
  });

  return (
    <Float
      speed={speed} // Gentle float speed
      rotationIntensity={0.25} // Low rotation intensity prevents distraction
      floatIntensity={0.4} // Gentle vertical drift
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {/* Icosahedron with subdivision creates smooth organic roundness */}
        <icosahedronGeometry args={[1, 16]} />
        <meshStandardMaterial
          color={color}
          roughness={0.9} // Matte, non-reflective texture gives a safe, velvety feel
          metalness={0.05}
          transparent
          opacity={0.32} // High translucency keeps background tranquil and text 100% legible
        />
      </mesh>
    </Float>
  );
}

/**
 * AmbientCanvas
 * Encapsulated Three.js Canvas containing 3 soothing pastel blobs.
 * Positioned behind the Hero content with pointer-events-none.
 */
export default function AmbientCanvas() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden select-none opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]} // Limit pixel ratio for efficient battery & GPU usage
      >
        {/* Soft, warm, non-directional lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 5, 2]} intensity={0.5} color="#FBF8F3" />
        <directionalLight position={[-3, -3, -2]} intensity={0.3} color="#EAF0EC" />

        {/* 1. Large tranquil Sage orb drifting top-left */}
        <FloatingOrganicSphere
          position={[-2.2, 1.1, -1]}
          color="#A9C0AE" // Sage 400
          scale={1.6}
          speed={0.8}
        />

        {/* 2. Soft, warm cream/sand orb floating center-right */}
        <FloatingOrganicSphere
          position={[2.0, -0.6, -1.5]}
          color="#E8DFD3" // Warm cream
          scale={1.9}
          speed={0.65}
        />

        {/* 3. Deep calming sage orb drifting lower-left */}
        <FloatingOrganicSphere
          position={[-0.8, -1.4, -2]}
          color="#7C9885" // Sage 500
          scale={1.3}
          speed={0.7}
        />
      </Canvas>
    </div>
  );
}
