'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value?: number;
  target?: number;
  suffix?: string;
  label?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  target,
  suffix = '',
  label = '',
  duration = 2,
}: AnimatedCounterProps) {
  const finalValue = value ?? target ?? 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, finalValue, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, finalValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Large gradient number */}
      <div className="flex items-baseline gap-0.5">
        <motion.span
          className="text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {rounded}
        </motion.span>
        {suffix && (
          <span
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #00E5FF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <span
        className="text-sm sm:text-base font-medium tracking-wide"
        style={{ color: '#94A3B8' }}
      >
        {label}
      </span>
    </motion.div>
  );
}
