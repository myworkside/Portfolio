"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generateOrbitCurves() {
  const points1: THREE.Vector3[] = [];
  const points2: THREE.Vector3[] = [];

  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * Math.PI * 2;
    // Lissajous Curve 1
    points1.push(
      new THREE.Vector3(
        Math.sin(3 * t) * 4.5,
        Math.cos(2 * t) * 3.2,
        Math.sin(5 * t) * 2.0 - 5
      )
    );
    // Lissajous Curve 2
    points2.push(
      new THREE.Vector3(
        Math.cos(4 * t) * 5.5,
        Math.sin(3 * t) * 4.0,
        Math.cos(2 * t) * 2.5 - 6
      )
    );
  }

  return { points1, points2 };
}

const ORBIT_CURVES = generateOrbitCurves();

export default function OrbitLines() {
  const groupRef = useRef<THREE.Group>(null);

  const { line1, line2 } = useMemo(() => {
    const geom1 = new THREE.BufferGeometry().setFromPoints(ORBIT_CURVES.points1);
    const geom2 = new THREE.BufferGeometry().setFromPoints(ORBIT_CURVES.points2);

    const mat1 = new THREE.LineBasicMaterial({
      color: "#00E5FF",
      transparent: true,
      opacity: 0.22,
    });
    const mat2 = new THREE.LineBasicMaterial({
      color: "#8B5CF6",
      transparent: true,
      opacity: 0.18,
    });

    const l1 = new THREE.Line(geom1, mat1);
    const l2 = new THREE.Line(geom2, mat2);

    return { line1: l1, line2: l2 };
  }, []);

  useFrame((state, delta) => {
    if (document.hidden || !groupRef.current) return;
    groupRef.current.rotation.y -= delta * 0.012;
    groupRef.current.rotation.x += delta * 0.006;
  });

  return (
    <group ref={groupRef}>
      <primitive object={line1} />
      <primitive object={line2} />
    </group>
  );
}
