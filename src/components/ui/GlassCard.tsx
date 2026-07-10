"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
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
  hoverEffect = true,
  glowColor,
}: GlassCardProps) {
  const gradientFrom = glowColor ?? "#4F46E5";
  const gradientTo = "#00E5FF";

  return (
    <motion.div
      className={cn("relative rounded-2xl group shadow-xl", className)}
      whileHover={
        hoverEffect
          ? {
              y: -6,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
    >
      {/* Animated gradient border glow — visible on hover */}
      {hoverEffect && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo}, #8B5CF6)`,
          }}
        />
      )}

      {/* Inner card with glass effect */}
      <div
        className="relative h-full w-full rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_16px_40px_-12px_rgba(79,70,229,0.3)]"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      >
        {/* Subtle inner top highlight for glass sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Subtle inner radial glow on hover */}
        {hoverEffect && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(500px circle at 50% 0%, rgba(79, 70, 229, 0.12), transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </motion.div>
  );
}
