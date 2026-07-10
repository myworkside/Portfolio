"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WaveSurface() {
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const meshRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (document.hidden || !geomRef.current) return;

    const time = state.clock.getElapsedTime() * 0.6;
    const pos = geomRef.current.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // Mathematical wave formula: sin + cos interference
      const z =
        Math.sin(x * 0.35 + time) * 0.45 +
        Math.cos(y * 0.35 + time * 0.8) * 0.45;

      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
  });

  return (
    <points
      ref={meshRef}
      rotation={[-Math.PI / 2.3, 0, 0]}
      position={[0, -3.8, -4]}
    >
      <planeGeometry ref={geomRef} args={[32, 22, 60, 40]} />
      <pointsMaterial
        color="#00E5FF"
        size={0.038}
        transparent
        opacity={0.48}
        sizeAttenuation
      />
    </points>
  );
}
