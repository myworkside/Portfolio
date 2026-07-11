'use client';

import React from 'react';
import type { RefObject } from 'react';
import { GeometryHover, type GeometryVariant } from './GeometryHover';
import type { CardPointerState } from '@/hooks/useCardPointer';

export interface InteractiveCardGeometryProps {
  variant?: GeometryVariant;
  color?: string;
  isHovered: boolean;
  mouseRef?: RefObject<CardPointerState>;
  className?: string;
}

export function InteractiveCardGeometry({
  variant = 'network',
  color = '#00E5FF',
  isHovered,
  mouseRef,
  className = '',
}: InteractiveCardGeometryProps) {
  return (
    <GeometryHover
      variant={variant}
      color={color}
      isHovered={isHovered}
      mouseRef={mouseRef}
      className={className}
    />
  );
}

export default InteractiveCardGeometry;
