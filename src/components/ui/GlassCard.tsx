"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCardPointer } from "@/hooks/useCardPointer";
import { GeometryHover, type GeometryVariant } from "@/components/effects/GeometryHover";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
  geometryVariant?: GeometryVariant | "none";
  enableTilt?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "#00E5FF",
  geometryVariant = "network",
  enableTilt = true,
}: GlassCardProps) {
  const { cardRef, mouseRef, isHovered } = useCardPointer<HTMLDivElement>({
    enableTilt,
    maxTiltDeg: 1.5,
    liftY: -3,
  });

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-[22px] backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl",
        className
      )}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    >
      {/* Subtle inner top highlight for glass sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60 z-[1]" />

      {/* Interactive Generative Geometry Hover Layer */}
      {geometryVariant !== "none" && (
        <GeometryHover
          variant={geometryVariant}
          color={glowColor}
          isHovered={isHovered}
          mouseRef={mouseRef}
        />
      )}

      {children}
    </div>
  );
}

