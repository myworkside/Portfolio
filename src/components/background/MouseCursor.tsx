"use client";

import React, { useEffect, useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function MouseCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const targetRef = useRef({ x: -9999, y: -9999 });
  const glowPosRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);

  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Hide default cursor on body
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("a") !== null ||
          target.closest("button") !== null;
        setIsHovering(interactive);
      }
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: -9999, y: -9999 };
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const animate = () => {
      if (document.hidden) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const target = targetRef.current;

      // Inner 16px dot stays tight with minimal lerp
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x - 8}px, ${target.y - 8}px, 0)`;
      }

      // Outer 40px glow lags smoothly behind
      glowPosRef.current.x += (target.x - glowPosRef.current.x) * 0.16;
      glowPosRef.current.y += (target.y - glowPosRef.current.y) * 0.16;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPosRef.current.x - 20}px, ${glowPosRef.current.y - 20}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* ── 1. Inner 16px Glowing Circular Dot ── */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full transition-transform duration-75 will-change-transform ${
          isHovering ? "scale-125 bg-[#00E5FF]" : "bg-white"
        }`}
        style={{
          boxShadow: isHovering
            ? "0 0 16px #00E5FF, 0 0 32px #4F46E5"
            : "0 0 10px rgba(255, 255, 255, 0.8)",
        }}
        aria-hidden="true"
      />

      {/* ── 2. Outer 40px Blue / Purple / Cyan Easing Glow Ring ── */}
      <div
        ref={glowRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 h-10 w-10 rounded-full border border-[#00E5FF]/40 transition-all duration-300 will-change-transform ${
          isHovering
            ? "scale-150 border-[#00E5FF] bg-[#4F46E5]/15"
            : "bg-[#8B5CF6]/10"
        }`}
        style={{
          boxShadow:
            "0 0 25px rgba(0, 229, 255, 0.35), inset 0 0 12px rgba(139, 92, 246, 0.3)",
        }}
        aria-hidden="true"
      />

      {/* ── 3. Click Ripple Wave Shockwaves ── */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none fixed z-50 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5FF] animate-ping opacity-60"
          style={{
            left: r.x,
            top: r.y,
            animationDuration: "0.65s",
          }}
          onAnimationEnd={() =>
            setRipples((prev) => prev.filter((item) => item.id !== r.id))
          }
        />
      ))}
    </>
  );
}
