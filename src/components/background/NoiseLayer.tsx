"use client";

import React from "react";

export default function NoiseLayer() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.02] mix-blend-overlay select-none"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <filter id="cinematicNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematicNoise)" />
      </svg>
    </div>
  );
}
