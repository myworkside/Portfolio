"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateParticlesData() {
  const count = 1600;
  const pos = new Float32Array(count * 3);
  const basePos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#4F46E5"), // primary indigo
    new THREE.Color("#00E5FF"), // cyan
    new THREE.Color("#8B5CF6"), // purple
    new THREE.Color("#FFFFFF"), // white
  ];

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 4 + 20000);
    const r2 = seededRandom(i * 4 + 20001);
    const r3 = seededRandom(i * 4 + 20002);
    const r4 = seededRandom(i * 4 + 20003);

    const x = (r1 - 0.5) * 18;
    const y = (r2 - 0.5) * 18;
    const z = (r3 - 0.5) * 12 - 3;

    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;

    basePos[i * 3] = x;
    basePos[i * 3 + 1] = y;
    basePos[i * 3 + 2] = z;

    const c = palette[Math.floor(r4 * palette.length)];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }

  return { positions: pos, basePositions: basePos, colors: col };
}

const PARTICLES_DATA = generateParticlesData();

export default function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const geomRef = useRef<THREE.BufferGeometry>(null);

  const { positions, basePositions, colors } = useMemo(() => PARTICLES_DATA, []);

  useFrame((state, delta) => {
    if (document.hidden || !meshRef.current || !geomRef.current) return;

    meshRef.current.rotation.y += delta * 0.016;
    meshRef.current.rotation.x += delta * 0.009;

    // Pointer coordinates in 3D scene space
    const mx = state.pointer.x * 6;
    const my = state.pointer.y * 6;

    const posAttr = geomRef.current.attributes.position;

    // Interactive mouse repulsion physics for nearby particles
    for (let i = 0; i < 1600; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];

      const dx = bx - mx;
      const dy = by - my;
      const distSq = dx * dx + dy * dy;

      if (distSq < 4.5 && distSq > 0.01) {
        const dist = Math.sqrt(distSq);
        const force = (2.1 - dist) * 0.45;
        posAttr.setXYZ(
          i,
          bx + (dx / dist) * force,
          by + (dy / dist) * force,
          bz
        );
      } else {
        // Return smoothly toward base orbit
        const cx = posAttr.getX(i);
        const cy = posAttr.getY(i);
        posAttr.setXY(i, cx + (bx - cx) * 0.1, cy + (by - cy) * 0.1);
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry ref={geomRef}>
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
        size={0.042}
        vertexColors
        transparent
        opacity={0.88}
        sizeAttenuation
      />
    </points>
  );
}
