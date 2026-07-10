"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={cn("relative rounded-2xl shadow-xl", className)}
    >
      {/* Inner card with glass effect */}
      <div
        className="relative h-full w-full rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      >
        {/* Subtle inner top highlight for glass sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />

        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
