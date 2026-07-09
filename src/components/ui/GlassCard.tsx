'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glowColor,
}: GlassCardProps) {
  const gradientFrom = glowColor ?? '#4F46E5';
  const gradientTo = '#00E5FF';

  return (
    <motion.div
      className={`relative rounded-2xl group ${className}`}
      whileHover={
        hoverEffect
          ? { scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }
          : undefined
      }
    >
      {/* Animated gradient border glow — visible on hover */}
      {hoverEffect && (
        <div
          className="
            pointer-events-none absolute -inset-px rounded-2xl opacity-0
            transition-opacity duration-500 group-hover:opacity-100
          "
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo}, ${gradientFrom})`,
            backgroundSize: '200% 200%',
            animation: 'borderGlow 3s ease infinite',
          }}
        />
      )}

      {/* Inner card with glass effect */}
      <div
        className="
          relative h-full w-full rounded-2xl backdrop-blur-xl
          border border-white/[0.08] overflow-hidden
          transition-shadow duration-500
          group-hover:shadow-[0_8px_40px_-12px_rgba(79,70,229,0.3)]
        "
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
      >
        {/* Subtle inner radial glow on hover */}
        {hoverEffect && (
          <div
            className="
              pointer-events-none absolute inset-0
              opacity-0 group-hover:opacity-100 transition-opacity duration-700
            "
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientFrom}08, transparent 40%)`,
            }}
          />
        )}

        {children}
      </div>

      {/* Keyframe for gradient border animation */}
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
