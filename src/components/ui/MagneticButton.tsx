'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

const variantClasses: Record<Variant, string> = {
  primary: 'text-white font-semibold',
  secondary: 'text-white font-semibold',
  outline: 'bg-transparent font-semibold',
  ghost: 'bg-transparent font-medium',
};

const variantStyles: Record<
  Variant,
  { background?: string; border?: string; boxShadow?: string; color?: string }
> = {
  primary: {
    background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
    boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)',
  },
  secondary: {
    background: 'linear-gradient(135deg, #00E5FF, #4F46E5)',
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
  },
  outline: {
    border: '1px solid transparent',
    background:
      'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)) padding-box, linear-gradient(135deg, #4F46E5, #00E5FF) border-box',
    color: '#E2E8F0',
  },
  ghost: {
    color: '#4F46E5',
  },
};

const hoverShadows: Record<Variant, string> = {
  primary: '0 0 30px rgba(79, 70, 229, 0.5), 0 0 60px rgba(139, 92, 246, 0.2)',
  secondary: '0 0 30px rgba(0, 229, 255, 0.5), 0 0 60px rgba(79, 70, 229, 0.2)',
  outline: '0 0 25px rgba(79, 70, 229, 0.3), 0 0 50px rgba(0, 229, 255, 0.15)',
  ghost: '0 0 15px rgba(79, 70, 229, 0.15)',
};

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  href,
  onClick,
  size = 'md',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  function handleMouseMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    x.set(distX);
    y.set(distY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const combinedClass = `
    relative inline-flex items-center justify-center
    cursor-pointer select-none
    transition-shadow duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const content = (
    <motion.div
      ref={ref}
      className={combinedClass}
      style={{
        x: springX,
        y: springY,
        ...variantStyles[variant],
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: hoverShadows[variant],
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Inner glow overlay */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/[0.05]" />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block border-0 bg-transparent p-0">
      {content}
    </button>
  );
}
