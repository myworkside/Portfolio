"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import MorphSphere from "./MorphSphere";
import WaveSurface from "./WaveSurface";
import FlowField from "./FlowField";
import OrbitLines from "./OrbitLines";
import ParametricCurves from "./ParametricCurves";
import ParticleSystem from "./ParticleSystem";
import Constellation from "./Constellation";

export default function GeometryScene() {
  const sceneGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (document.hidden || !sceneGroupRef.current) return;

    // Very slow cinematic rotation
    sceneGroupRef.current.rotation.y += delta * 0.003;
    sceneGroupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.05;

    // Parallax pointer sway
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;
    sceneGroupRef.current.position.x += (targetX - sceneGroupRef.current.position.x) * 0.03;
    sceneGroupRef.current.position.y += (targetY - sceneGroupRef.current.position.y) * 0.03;
  });

  return (
    <>
      {/* Soft Luxury Space Lighting */}
      <ambientLight intensity={0.65} />
      <pointLight position={[10, 10, 10]} color="#00E5FF" intensity={1.2} />
      <pointLight position={[-10, -10, -5]} color="#8B5CF6" intensity={0.9} />

      <group ref={sceneGroupRef}>
        {/* Generative Mathematical Geometries */}
        <MorphSphere />
        <WaveSurface />
        <FlowField />
        <OrbitLines />
        <ParametricCurves />
        <ParticleSystem />
        <Constellation />
      </group>
    </>
  );
}
