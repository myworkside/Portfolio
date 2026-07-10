"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generateSpiralRibbon() {
  const count = 180;
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const angle = 0.15 * i;
    const radius = 0.05 * i;
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        (i / count - 0.5) * 6,
        Math.sin(angle) * radius - 4
      )
    );
  }
  return points;
}

const SPIRAL_POINTS = generateSpiralRibbon();

export default function ParametricCurves() {
  const groupRef = useRef<THREE.Group>(null);

  const spiralLine = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(SPIRAL_POINTS);
    const material = new THREE.LineBasicMaterial({
      color: "#4F46E5",
      transparent: true,
      opacity: 0.25,
    });
    return new THREE.Line(geometry, material);
  }, []);

  useFrame((state, delta) => {
    if (document.hidden || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.rotation.z += delta * 0.008;
  });

  return (
    <group ref={groupRef} position={[-3, 1, -5]}>
      <primitive object={spiralLine} />
    </group>
  );
}
