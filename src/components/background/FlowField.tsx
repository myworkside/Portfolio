"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateFlowFieldData() {
  const count = 30000;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#4F46E5"), // indigo
    new THREE.Color("#00E5FF"), // cyan
    new THREE.Color("#8B5CF6"), // purple
    new THREE.Color("#3B82F6"), // blue
    new THREE.Color("#FFFFFF"), // white
  ];

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 4 + 50000);
    const r2 = seededRandom(i * 4 + 50001);
    const r3 = seededRandom(i * 4 + 50002);
    const r4 = seededRandom(i * 4 + 50003);

    pos[i * 3] = (r1 - 0.5) * 45;
    pos[i * 3 + 1] = (r2 - 0.5) * 35;
    pos[i * 3 + 2] = (r3 - 0.5) * 28 - 10;

    const c = palette[Math.floor(r4 * palette.length)];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }

  return { positions: pos, colors: col };
}

const FLOW_DATA = generateFlowFieldData();

export default function FlowField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => FLOW_DATA, []);

  useFrame((state, delta) => {
    if (document.hidden || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.004;
    pointsRef.current.rotation.z += delta * 0.0015;
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
        size={0.022}
        vertexColors
        transparent
        opacity={0.72}
        sizeAttenuation
      />
    </points>
  );
}
