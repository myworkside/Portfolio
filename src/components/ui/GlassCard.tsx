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
      className={cn(
        "relative rounded-2xl group transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02]",
        hoverEffect && "cursor-pointer",
        className
      )}
      whileHover={
        hoverEffect
          ? {
              y: -6,
              scale: 1.02,
              transition: { duration: 0.35 },
            }
          : undefined
      }
    >
      {/* Animated gradient border glow — visible on hover */}
      {hoverEffect && (
        <div
          className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 blur-[2px]"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo}, #8B5CF6)`,
          }}
        />
      )}

      {/* Inner card with glass effect */}
      <div
        className="relative h-full w-full rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 ease-out group-hover:border-white/30 group-hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.38),0_0_30px_rgba(0,229,255,0.22)]"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      >
        {/* Glassmorphism highlight top sheen on hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Soft diagonal glassmorphism shine overlay on hover */}
        {hoverEffect && (
          <div
            className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-x-[-50%] group-hover:translate-x-[50%]"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.06) 50%, transparent 60%)",
            }}
          />
        )}

        {/* Inner blue/purple soft radial glow on hover */}
        {hoverEffect && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            style={{
              background: `radial-gradient(600px circle at 50% 0%, rgba(79, 70, 229, 0.16), rgba(0, 229, 255, 0.06) 50%, transparent 80%)`,
            }}
          />
        )}

        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </motion.div>
  );
}
