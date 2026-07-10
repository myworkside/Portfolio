"use client";

import React, { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const animate = () => {
      if (document.hidden) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const target = targetRef.current;
      const current = currentRef.current;

      // Smooth lerp for zero lag cinematic follow
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x - 350}px, ${current.y - 350}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 -z-20 h-[700px] w-[700px] rounded-full opacity-9 select-none will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(0, 229, 255, 0.085) 0%, rgba(79, 70, 229, 0.045) 45%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
