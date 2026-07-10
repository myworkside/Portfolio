"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 1,
      });

      if (pointsRef.current.length > 25) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      if (document.hidden) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const points = pointsRef.current;

      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          p1.age *= 0.92;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          grad.addColorStop(0, `rgba(79, 70, 229, ${p1.age * 0.4})`);
          grad.addColorStop(1, `rgba(0, 229, 255, ${p2.age * 0.6})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(1, p1.age * 3.5);
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // Filter out old trail points
      pointsRef.current = points.filter((p) => p.age > 0.05);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 select-none"
      aria-hidden="true"
    />
  );
}
