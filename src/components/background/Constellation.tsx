"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateConstellationData() {
  const nodeCount = 55;
  const nodes: THREE.Vector3[] = [];

  for (let i = 0; i < nodeCount; i++) {
    const r1 = seededRandom(i * 3 + 30000);
    const r2 = seededRandom(i * 3 + 30001);
    const r3 = seededRandom(i * 3 + 30002);
    nodes.push(
      new THREE.Vector3(
        (r1 - 0.5) * 14,
        (r2 - 0.5) * 14,
        (r3 - 0.5) * 6 - 2
      )
    );
  }

  const lineCoords: number[] = [];
  const maxDist = 3.2;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        lineCoords.push(
          nodes[i].x,
          nodes[i].y,
          nodes[i].z,
          nodes[j].x,
          nodes[j].y,
          nodes[j].z
        );
      }
    }
  }

  const nodeArray = new Float32Array(nodes.length * 3);
  for (let i = 0; i < nodes.length; i++) {
    nodeArray[i * 3] = nodes[i].x;
    nodeArray[i * 3 + 1] = nodes[i].y;
    nodeArray[i * 3 + 2] = nodes[i].z;
  }

  return {
    nodePositions: nodeArray,
    linePositions: new Float32Array(lineCoords),
  };
}

const CONSTELLATION_DATA = generateConstellationData();

export default function Constellation() {
  const groupRef = useRef<THREE.Group>(null);

  const { nodePositions, linePositions } = useMemo(() => CONSTELLATION_DATA, []);

  useFrame((state, delta) => {
    if (document.hidden || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.008;
    groupRef.current.rotation.x -= delta * 0.003;
  });

  return (
    <group ref={groupRef}>
      {/* Tiny glowing nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00E5FF"
          size={0.038}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      {/* Ultra-thin connecting lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7DD3FC"
          transparent
          opacity={0.14}
        />
      </lineSegments>
    </group>
  );
}
