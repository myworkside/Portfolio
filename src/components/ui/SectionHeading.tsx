'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-3 ${alignClass}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtitle — small uppercase label */}
      {subtitle && (
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: '#94A3B8' }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Title — gradient text */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Animated gradient underline */}
      <motion.div
        className="h-1 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #4F46E5, #00E5FF, #8B5CF6)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease infinite',
        }}
        initial={{ width: 0 }}
        animate={isInView ? { width: align === 'center' ? 80 : 64 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <style jsx>{`
        @keyframes shimmer {
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
