'use client';

import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
  as?: 'button' | 'a' | 'div';
  'aria-label'?: string;
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
  size = 'md',
  href,
  target,
  rel,
  type,
  disabled,
  onClick,
  style,
  as,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement & HTMLAnchorElement & HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  function handleMouseMove(e: MouseEvent) {
    if (!ref.current || disabled) return;
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
    cursor-pointer select-none no-underline
    transition-shadow duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const isAnchor = Boolean(href) || as === 'a';
  const isButton = Boolean(type) || Boolean(onClick) || disabled !== undefined || as === 'button';

  const motionStyles = {
    x: springX,
    y: springY,
    ...variantStyles[variant],
    ...style,
  };

  const commonProps = {
    className: combinedClass,
    style: motionStyles,
    whileHover: disabled
      ? undefined
      : {
          scale: 1.05,
          boxShadow: hoverShadows[variant],
          transition: { duration: 0.25 },
        },
    whileTap: disabled ? undefined : { scale: 0.97 },
    onMouseMove: disabled ? undefined : handleMouseMove,
    onMouseLeave: disabled ? undefined : handleMouseLeave,
    'aria-label': ariaLabel,
  };

  const innerContent = (
    <>
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/[0.05]" />
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
    </>
  );

  if (isAnchor && href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...commonProps}
      >
        {innerContent}
      </motion.a>
    );
  }

  if (isButton && !isAnchor) {
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? 'button'}
        disabled={disabled}
        onClick={onClick}
        {...commonProps}
      >
        {innerContent}
      </motion.button>
    );
  }

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      onClick={onClick}
      {...commonProps}
    >
      {innerContent}
    </motion.div>
  );
}
