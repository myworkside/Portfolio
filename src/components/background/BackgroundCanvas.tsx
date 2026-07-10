"use client";

import React, { useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import GalaxyBackground from "./GalaxyBackground";
import Nebula from "./Nebula";
import StarField from "./StarField";
import Constellation from "./Constellation";
import Particles from "./Particles";
import ShootingStars from "./ShootingStars";
import MouseGlow from "./MouseGlow";
import NoiseLayer from "./NoiseLayer";
import MouseCursor from "./MouseCursor";
import CursorTrail from "./CursorTrail";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

export default function BackgroundCanvas() {
  const isClient = useIsClient();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      {/* ── Custom Interactive Premium Space Cursor & Fading Trail ── */}
      {isClient && !prefersReducedMotion && (
        <>
          <MouseCursor />
          <CursorTrail />
        </>
      )}

      {/* ── 10-Layer Luxury Interactive Universe Background ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-50 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Layer 1 & 6: Ultra-Dark Space Gradient & Large Blur Lights */}
        <GalaxyBackground />

        {/* Layer 2: Animated Nebula Clouds (5%–10% opacity) */}
        <Nebula />

        {/* Layer 8: Smooth Cinematic Shooting Stars */}
        {isClient && !prefersReducedMotion && <ShootingStars />}

        {/* Layer 3, 4, 5, 7: GPU 3D Interactive Space Canvas */}
        {isClient && (
          <div className="absolute inset-0">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 60 }}
              dpr={[1, 2]}
              gl={{
                antialias: false,
                alpha: true,
                powerPreference: "high-performance",
              }}
            >
              <ambientLight intensity={0.5} />
              <StarField />
              {!prefersReducedMotion && (
                <>
                  <Constellation />
                  <Particles />
                </>
              )}
            </Canvas>
          </div>
        )}

        {/* Layer 9: Zero-Lag Soft Radial Mouse Glow */}
        {isClient && !prefersReducedMotion && <MouseGlow />}

        {/* Layer 10: Cinematic Grain Overlay (<2% opacity) */}
        <NoiseLayer />
      </div>
    </>
  );
}
