'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export interface CardPointerState {
  x: number;
  y: number;
  normX: number; // -1 to 1
  normY: number; // -1 to 1
  isHovered: boolean;
}

export interface UseCardPointerOptions {
  enableTilt?: boolean;
  maxTiltDeg?: number;
  liftY?: number;
}

export function useCardPointer<T extends HTMLElement = HTMLDivElement>(
  options: UseCardPointerOptions = {}
): {
  cardRef: RefObject<T | null>;
  mouseRef: RefObject<CardPointerState>;
  isHovered: boolean;
} {
  const {
    enableTilt = true,
    maxTiltDeg = 1.5,
    liftY = -3,
  } = options;

  const cardRef = useRef<T | null>(null);
  const mouseRef = useRef<CardPointerState>({
    x: 0,
    y: 0,
    normX: 0,
    normY: 0,
    isHovered: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Respect reduced motion and touch devices
    const isTouch =
      typeof window !== 'undefined' &&
      (!window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        'ontouchstart' in window);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frameId: number | null = null;

    const updateTilt = (normX: number, normY: number, hovered: boolean) => {
      if (!enableTilt || isTouch || prefersReducedMotion) return;

      if (hovered) {
        const rotateY = normX * maxTiltDeg;
        const rotateX = -normY * maxTiltDeg;
        element.style.transform = `translateY(${liftY}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        element.style.transition = 'transform 0.15s ease-out';
      } else {
        element.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
        element.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isTouch) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normX = ((x / rect.width) - 0.5) * 2;
      const normY = ((y / rect.height) - 0.5) * 2;

      mouseRef.current = {
        x,
        y,
        normX,
        normY,
        isHovered: true,
      };

      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);

      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          updateTilt(mouseRef.current.normX, mouseRef.current.normY, true);
          frameId = null;
        });
      }
    };

    const handlePointerEnter = (e: PointerEvent) => {
      if (isTouch) return;
      mouseRef.current.isHovered = true;
      setIsHovered(true);
      handlePointerMove(e);
    };

    const handlePointerLeave = () => {
      mouseRef.current.isHovered = false;
      setIsHovered(false);
      updateTilt(0, 0, false);
    };

    element.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    element.addEventListener('pointermove', handlePointerMove, { passive: true });
    element.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      element.removeEventListener('pointerenter', handlePointerEnter);
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [enableTilt, maxTiltDeg, liftY]);

  return { cardRef, mouseRef, isHovered };
}

export default useCardPointer;
