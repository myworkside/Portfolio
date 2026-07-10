"use client";

import React from "react";

export default function Aurora() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-26 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── Layer 9: Soft Animated Space Aurora Light Ribbon ── */}
      {/* Upper Cyan-Indigo Aurora Wave */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[125vw] h-[550px] rounded-[100%] blur-[140px] opacity-40 animate-mesh-1"
        style={{
          background:
            "linear-gradient(115deg, rgba(0, 229, 255, 0.08) 0%, rgba(79, 70, 229, 0.12) 50%, rgba(139, 92, 246, 0.05) 100%)",
          transform: "rotate(-12deg)",
          animationDuration: "45s",
        }}
      />

      {/* Mid-Screen Blue-Purple Cosmic Aurora Flow */}
      <div
        className="absolute top-[35%] -right-[15%] w-[120vw] h-[480px] rounded-[100%] blur-[150px] opacity-35 animate-mesh-2"
        style={{
          background:
            "linear-gradient(240deg, rgba(59, 130, 246, 0.09) 0%, rgba(139, 92, 246, 0.1) 45%, rgba(0, 229, 255, 0.04) 100%)",
          transform: "rotate(18deg)",
          animationDuration: "50s",
        }}
      />

      {/* Lower Deep Violet Aurora Curtain */}
      <div
        className="absolute -bottom-[10%] left-[5%] w-[110vw] h-[500px] rounded-[100%] blur-[160px] opacity-35 animate-mesh-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(79, 70, 229, 0.08) 0%, rgba(0, 229, 255, 0.09) 60%, transparent 100%)",
          transform: "rotate(-8deg)",
          animationDuration: "48s",
        }}
      />
    </div>
  );
}
