'use client';

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import type { CardPointerState } from '@/hooks/useCardPointer';

export type GeometryVariant =
  | 'network'
  | 'circuit'
  | 'orbit'
  | 'mesh'
  | 'waves';

export interface GeometryHoverProps {
  variant?: GeometryVariant;
  color?: string;
  isHovered?: boolean;
  mouseRef?: RefObject<CardPointerState>;
  className?: string;
}

interface NodePoint {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  radius: number;
}

export function GeometryHover({
  variant = 'network',
  color = '#00E5FF',
  isHovered = false,
  mouseRef,
  className = '',
}: GeometryHoverProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const alphaRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect touch devices and reduced motion
    const isTouch =
      typeof window !== 'undefined' &&
      (!window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        'ontouchstart' in window);
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number | null = null;
    let width = canvas.width;
    let height = canvas.height;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Parse hex or RGB color safely
    const parseColor = (c: string): [number, number, number] => {
      if (c.startsWith('#')) {
        const hex = c.slice(1);
        const bigint = parseInt(hex.length === 3 ? hex.split('').map((x) => x + x).join('') : hex, 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
      }
      return [0, 229, 255]; // default cyan
    };

    const [r, g, b] = parseColor(color);

    // Initialize geometry data
    const numNodes = variant === 'mesh' ? 24 : 20;
    const nodes: NodePoint[] = [];

    for (let i = 0; i < numNodes; i++) {
      const baseX = Math.random() * Math.max(width, 300);
      const baseY = Math.random() * Math.max(height, 200);
      nodes.push({
        baseX,
        baseY,
        x: baseX,
        y: baseY,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
        radius: 1 + Math.random() * 1.5,
      });
    }

    let time = 0;

    const render = () => {
      // Easing alpha toward target (1 when hovered, 0 when unhovered)
      const targetAlpha = isHovered ? 1 : 0;
      alphaRef.current += (targetAlpha - alphaRef.current) * 0.1;

      // Stop loop when fully faded out
      if (!isHovered && alphaRef.current < 0.01) {
        alphaRef.current = 0;
        ctx.clearRect(0, 0, width, height);
        animFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      const mx = mouseRef?.current?.x ?? width / 2;
      const my = mouseRef?.current?.y ?? height / 2;
      const masterAlpha = alphaRef.current;

      ctx.lineWidth = 1;

      if (variant === 'network') {
        // Connected Nodes & Polygon Network
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.baseX += n.vx;
          n.baseY += n.vy;
          if (n.baseX < 0 || n.baseX > width) n.vx *= -1;
          if (n.baseY < 0 || n.baseY > height) n.vy *= -1;

          const dx = mx - n.baseX;
          const dy = my - n.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle attraction toward mouse
          const pull = Math.max(0, 1 - dist / 180) * 18;
          const angle = Math.atan2(dy, dx);
          n.x = n.baseX + Math.cos(angle) * pull;
          n.y = n.baseY + Math.sin(angle) * pull;

          // Draw node point
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.35 * masterAlpha})`;
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dLine = Math.hypot(n.x - n2.x, n.y - n2.y);
            if (dLine < 130) {
              const lineAlpha = (1 - dLine / 130) * 0.18 * masterAlpha;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
              ctx.stroke();
            }
          }
        }
      } else if (variant === 'circuit') {
        // Technical Grid & Circuit Geometry
        const gridSize = 42;
        const cols = Math.ceil(width / gridSize) + 1;
        const rows = Math.ceil(height / gridSize) + 1;

        for (let c = 0; c < cols; c++) {
          for (let rIdx = 0; rIdx < rows; rIdx++) {
            const gx = c * gridSize;
            const gy = rIdx * gridSize;
            const distToMouse = Math.hypot(mx - gx, my - gy);

            if (distToMouse < 150) {
              const localAlpha = (1 - distToMouse / 150) * 0.22 * masterAlpha;

              // Orthogonal trace lines
              ctx.beginPath();
              ctx.moveTo(gx - 8, gy);
              ctx.lineTo(gx + 8, gy);
              ctx.moveTo(gx, gy - 8);
              ctx.lineTo(gx, gy + 8);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${localAlpha})`;
              ctx.stroke();

              // Intersection point
              ctx.beginPath();
              ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${localAlpha * 1.5})`;
              ctx.fill();
            }
          }
        }

        // Rotating Wireframe Shape at Cursor
        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate(time * 0.5);
        ctx.beginPath();
        const size = 36;
        for (let k = 0; k < 6; k++) {
          const a = (k * Math.PI) / 3;
          const px = Math.cos(a) * size;
          const py = Math.sin(a) * size;
          if (k === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.15 * masterAlpha})`;
        ctx.stroke();
        ctx.restore();
      } else if (variant === 'orbit') {
        // Orbit Paths & Timeline Connected Particles
        const cx = width * 0.5 + (mx - width * 0.5) * 0.15;
        const cy = height * 0.5 + (my - height * 0.5) * 0.15;

        const numRings = 3;
        for (let ring = 1; ring <= numRings; ring++) {
          const rx = 65 * ring;
          const ry = 35 * ring;

          // Orbit ellipse
          ctx.beginPath();
          ctx.ellipse(cx, cy, rx, ry, time * 0.1, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.1 * masterAlpha})`;
          ctx.stroke();

          // Orbiting particles
          for (let p = 0; p < 3; p++) {
            const angle = time * (0.6 / ring) + (p * Math.PI * 2) / 3;
            const px = cx + Math.cos(angle) * rx * Math.cos(time * 0.1) - Math.sin(angle) * ry * Math.sin(time * 0.1);
            const py = cy + Math.cos(angle) * rx * Math.sin(time * 0.1) + Math.sin(angle) * ry * Math.cos(time * 0.1);

            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.4 * masterAlpha})`;
            ctx.fill();

            // Line connecting to cursor when close
            const dMouse = Math.hypot(mx - px, my - py);
            if (dMouse < 140) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(mx, my);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - dMouse / 140) * 0.2 * masterAlpha})`;
              ctx.stroke();
            }
          }
        }
      } else if (variant === 'mesh') {
        // Wireframe Mesh & Parametric Curves
        const cols = 6;
        const rows = 4;
        const stepX = width / (cols - 1 || 1);
        const stepY = height / (rows - 1 || 1);

        const meshPoints: { x: number; y: number }[][] = [];
        for (let c = 0; c < cols; c++) {
          meshPoints[c] = [];
          for (let rIdx = 0; rIdx < rows; rIdx++) {
            const bx = c * stepX;
            const by = rIdx * stepY;
            const wave = Math.sin(time + c * 0.6) * Math.cos(time + rIdx * 0.6) * 8;

            const dist = Math.hypot(mx - bx, my - by);
            const pull = Math.max(0, 1 - dist / 160) * 16;
            const angle = Math.atan2(my - by, mx - bx);

            meshPoints[c][rIdx] = {
              x: bx + Math.cos(angle) * pull,
              y: by + Math.sin(angle) * pull + wave,
            };
          }
        }

        // Draw horizontal and vertical mesh lines
        for (let c = 0; c < cols; c++) {
          for (let rIdx = 0; rIdx < rows; rIdx++) {
            const pt = meshPoints[c][rIdx];

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 * masterAlpha})`;
            ctx.fill();

            if (c < cols - 1) {
              const nextCol = meshPoints[c + 1][rIdx];
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              ctx.lineTo(nextCol.x, nextCol.y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.14 * masterAlpha})`;
              ctx.stroke();
            }
            if (rIdx < rows - 1) {
              const nextRow = meshPoints[c][rIdx + 1];
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              ctx.lineTo(nextRow.x, nextRow.y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.14 * masterAlpha})`;
              ctx.stroke();
            }
          }
        }
      } else if (variant === 'waves') {
        // Expanding Geometric Waves & Signal Nodes
        const numWaves = 3;
        for (let w = 0; w < numWaves; w++) {
          const maxR = Math.max(width, height) * 0.55;
          const radius = ((time * 25 + w * (maxR / numWaves)) % maxR);
          const waveAlpha = (1 - radius / maxR) * 0.18 * masterAlpha;

          ctx.beginPath();
          ctx.arc(mx, my, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${waveAlpha})`;
          ctx.stroke();
        }

        // Communication nodes
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dMouse = Math.hypot(mx - n.baseX, my - n.baseY);
          if (dMouse < 150) {
            const nodeAlpha = (1 - dMouse / 150) * 0.3 * masterAlpha;
            ctx.beginPath();
            ctx.arc(n.baseX, n.baseY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${nodeAlpha * 1.5})`;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(n.baseX, n.baseY);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${nodeAlpha * 0.6})`;
            ctx.stroke();
          }
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    if (isHovered || alphaRef.current > 0.01) {
      animFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, [isHovered, variant, color, mouseRef]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default GeometryHover;
