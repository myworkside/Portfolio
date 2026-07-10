"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStarData() {
  const count = 22000;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#FFFFFF"),
    new THREE.Color("#E2E8F0"),
    new THREE.Color("#7DD3FC"),
    new THREE.Color("#C4B5FD"),
    new THREE.Color("#00E5FF"),
  ];

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 5 + 1);
    const r2 = seededRandom(i * 5 + 2);
    const r3 = seededRandom(i * 5 + 3);
    const r4 = seededRandom(i * 5 + 4);

    const radius = Math.cbrt(r1) * 28;
    const theta = r2 * Math.PI * 2;
    const phi = Math.acos(2 * r3 - 1);

    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi) - 8;

    const c = palette[Math.floor(r4 * palette.length)];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }

  return { positions: pos, colors: col };
}

function generateDustData() {
  const count = 4000;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (seededRandom(i * 3 + 10000) - 0.5) * 32;
    pos[i * 3 + 1] = (seededRandom(i * 3 + 10001) - 0.5) * 32;
    pos[i * 3 + 2] = (seededRandom(i * 3 + 10002) - 0.5) * 22 - 5;
  }
  return pos;
}

const STAR_DATA = generateStarData();
const DUST_POSITIONS = generateDustData();

export default function StarField() {
  const pointsRef = useRef<THREE.Points>(null);
  const dustRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => STAR_DATA, []);
  const dustPositions = useMemo(() => DUST_POSITIONS, []);

  useFrame((state, delta) => {
    if (document.hidden) return;
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.005;
      pointsRef.current.rotation.x += delta * 0.0018;

      // Soft interactive mouse tilt
      const targetX = state.pointer.x * 0.15;
      const targetY = state.pointer.y * 0.15;
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.04;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.04;
    }
    if (dustRef.current) {
      dustRef.current.rotation.y -= delta * 0.007;
    }
  });

  return (
    <>
      {/* 22,000 Galaxy Stars */}
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
          size={0.024}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* 4,000 Cosmic Dust Particles */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dustPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#94A3B8"
          size={0.013}
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>
    </>
  );
}
