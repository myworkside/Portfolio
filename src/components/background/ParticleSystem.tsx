"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateVolumetricParticles() {
  const count = 2500;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#4F46E5"),
    new THREE.Color("#00E5FF"),
    new THREE.Color("#8B5CF6"),
    new THREE.Color("#FFFFFF"),
  ];

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 3 + 70000);
    const r2 = seededRandom(i * 3 + 70001);
    const r3 = seededRandom(i * 3 + 70002);
    const r4 = seededRandom(i * 3 + 70003);

    pos[i * 3] = (r1 - 0.5) * 26;
    pos[i * 3 + 1] = (r2 - 0.5) * 26;
    pos[i * 3 + 2] = (r3 - 0.5) * 16 - 5;

    const c = palette[Math.floor(r4 * palette.length)];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }

  return { positions: pos, colors: col };
}

const VOLUMETRIC_DATA = generateVolumetricParticles();

export default function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => VOLUMETRIC_DATA, []);

  useFrame((state, delta) => {
    if (document.hidden || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.008;
    pointsRef.current.rotation.x += delta * 0.004;

    const targetX = state.pointer.x * 0.45;
    const targetY = state.pointer.y * 0.45;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.04;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
