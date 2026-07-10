"use client";

import React from "react";

export default function GalaxyBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-30 overflow-hidden select-none"
      style={{
        background:
          "linear-gradient(145deg, #03040B 0%, #050713 35%, #07111F 70%, #090A18 100%)",
      }}
      aria-hidden="true"
    >
      {/* ── Layer 1: Subtle Purple Corner Glows ── */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[160px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[650px] w-[650px] rounded-full blur-[170px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* ── Layer 6: Large Blur Lights (Below 8% opacity, very slow drift) ── */}
      {/* Blue Huge Light */}
      <div
        className="absolute top-[15%] left-[20%] h-[850px] w-[850px] rounded-full blur-[180px] animate-mesh-1"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.075) 0%, transparent 75%)",
          animationDuration: "42s",
        }}
      />

      {/* Purple Huge Light */}
      <div
        className="absolute top-[45%] right-[15%] h-[900px] w-[900px] rounded-full blur-[190px] animate-mesh-2"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, transparent 75%)",
          animationDuration: "48s",
        }}
      />

      {/* Teal Huge Light */}
      <div
        className="absolute bottom-[10%] left-[35%] h-[800px] w-[800px] rounded-full blur-[175px] animate-mesh-3"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.065) 0%, transparent 75%)",
          animationDuration: "50s",
        }}
      />
    </div>
  );
}
