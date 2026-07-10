'use client';

import { useRef, type ReactNode, type CSSProperties } from 'react';
import { motion } from 'framer-motion';

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
  },
  secondary: {
    background: 'linear-gradient(135deg, #00E5FF, #4F46E5)',
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

  const combinedClass = `
    relative inline-flex items-center justify-center
    cursor-pointer select-none no-underline
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const isAnchor = Boolean(href) || as === 'a';
  const isButton = Boolean(type) || Boolean(onClick) || disabled !== undefined || as === 'button';

  const motionStyles = {
    ...variantStyles[variant],
    ...style,
  };

  const commonProps = {
    className: combinedClass,
    style: motionStyles,
    whileTap: disabled ? undefined : { scale: 0.97 },
    'aria-label': ariaLabel,
  };

  const innerContent = (
    <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
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
