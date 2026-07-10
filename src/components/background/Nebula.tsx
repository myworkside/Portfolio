"use client";

import React from "react";

export default function Nebula() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-28 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── Layer 2: Animated Nebula (Blue, Purple, Cyan 5%–10% opacity) ── */}
      {/* Blue Nebula Cloud */}
      <div
        className="absolute -top-[10%] -left-[10%] h-[950px] w-[950px] rounded-full blur-[165px] animate-mesh-1"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79, 70, 229, 0.09) 0%, rgba(30, 58, 138, 0.04) 50%, transparent 80%)",
          animationDuration: "38s",
        }}
      />

      {/* Purple Nebula Cloud */}
      <div
        className="absolute top-[30%] -right-[15%] h-[1050px] w-[1050px] rounded-full blur-[175px] animate-mesh-3"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.085) 0%, rgba(88, 28, 135, 0.035) 55%, transparent 80%)",
          animationDuration: "44s",
        }}
      />

      {/* Cyan Nebula Cloud */}
      <div
        className="absolute -bottom-[12%] left-[18%] h-[900px] w-[900px] rounded-full blur-[160px] animate-mesh-2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 229, 255, 0.075) 0%, rgba(14, 116, 144, 0.03) 50%, transparent 80%)",
          animationDuration: "40s",
          animationDirection: "reverse",
        }}
      />
    </div>
  );
}
