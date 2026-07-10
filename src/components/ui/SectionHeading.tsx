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
      className={`flex flex-col gap-3 mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtitle — 16px label */}
      {subtitle && (
        <motion.span
          className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-[#94A3B8]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Title — gradient text (56px desktop) */}
      <motion.h2
        className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.12] tracking-tight"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {title}
      </motion.h2>

      {/* Animated gradient underline */}
      <motion.div
        className="h-1 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#00E5FF] to-[#8B5CF6]"
        initial={{ width: 0 }}
        animate={isInView ? { width: align === 'center' ? 80 : 64 } : { width: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
