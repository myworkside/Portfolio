"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MORPH_SPHERE_VERTEX_SHADER,
  MORPH_SPHERE_FRAGMENT_SHADER,
} from "./Shaders";

export default function MorphSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector3(0, 0, 0) },
    }),
    []
  );

  useFrame((state, delta) => {
    if (document.hidden) return;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.45;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04;
      meshRef.current.rotation.x += delta * 0.02;

      // Subtle mouse magnetic tilt
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.4;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[2.8, 0.4, -3.5]} scale={1.35}>
      <icosahedronGeometry args={[1.6, 24]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={MORPH_SPHERE_VERTEX_SHADER}
        fragmentShader={MORPH_SPHERE_FRAGMENT_SHADER}
        uniforms={uniforms}
        wireframe={true}
        transparent={true}
      />
    </mesh>
  );
}
