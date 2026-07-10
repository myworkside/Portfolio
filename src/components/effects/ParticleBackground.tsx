"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  layer: "far" | "mid" | "near";
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

const STAR_COLORS = [
  "255, 255, 255", // pure white star
  "226, 232, 240", // crisp silver star
  "196, 181, 253", // soft violet star (#C4B5FD)
  "125, 211, 252", // cyan blue star (#7DD3FC)
  "167, 139, 250", // purple star (#A78BFA)
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarRef = useRef<ShootingStar>({
    x: 0,
    y: 0,
    length: 120,
    speed: 16,
    angle: Math.PI / 4,
    alpha: 0,
    active: false,
  });
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationFrameRef = useRef<number>(0);

  const createStars = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 7000), 280);
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let layer: "far" | "mid" | "near" = "far";
      let radius = Math.random() * 0.7 + 0.3;
      let baseAlpha = Math.random() * 0.4 + 0.15;

      if (rand > 0.85) {
        layer = "near";
        radius = Math.random() * 1.3 + 1.1;
        baseAlpha = Math.random() * 0.6 + 0.35;
      } else if (rand > 0.55) {
        layer = "mid";
        radius = Math.random() * 0.8 + 0.6;
        baseAlpha = Math.random() * 0.5 + 0.25;
      }

      const colorIdx = Math.floor(Math.random() * STAR_COLORS.length);

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseAlpha,
        alpha: baseAlpha,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: STAR_COLORS[colorIdx],
        layer,
        vx: (Math.random() - 0.5) * (layer === "near" ? 0.12 : layer === "mid" ? 0.06 : 0.02),
        vy: (Math.random() - 0.5) * (layer === "near" ? 0.12 : layer === "mid" ? 0.06 : 0.02),
      });
    }
    return stars;
  }, []);

  const spawnShootingStar = useCallback((width: number, height: number) => {
    const fromTop = Math.random() > 0.4;
    const startX = Math.random() * width * 0.8;
    const startY = fromTop ? -20 : Math.random() * (height * 0.4);

    shootingStarRef.current = {
      x: startX,
      y: startY,
      length: Math.random() * 90 + 90,
      speed: Math.random() * 6 + 14,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      alpha: 1,
      active: true,
    };
  }, []);

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
      starsRef.current = createStars(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let lastShootingStarTime = performance.now();

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const stars = starsRef.current;
      const mouse = mouseRef.current;

      // ── 1. Update & Draw Twinkling Stars ──
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Gentle drift
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle calculation
        star.twinklePhase += star.twinkleSpeed;
        const twinkleFactor = Math.sin(star.twinklePhase) * 0.35;
        star.alpha = Math.max(0.08, Math.min(1, star.baseAlpha + twinkleFactor));

        // Subtle mouse interactive push on near layer
        let drawX = star.x;
        let drawY = star.y;
        if (star.layer === "near" && mouse.x > -1000) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            drawX += (dx / dist) * force * 10;
            drawY += (dy / dist) * force * 10;
          }
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`;
        ctx.fill();

        // Draw soft outer aura on near / large stars
        if (star.layer === "near" && star.radius >= 1.2) {
          const gradient = ctx.createRadialGradient(
            drawX,
            drawY,
            0,
            drawX,
            drawY,
            star.radius * 4
          );
          gradient.addColorStop(0, `rgba(${star.color}, ${star.alpha * 0.45})`);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.beginPath();
          ctx.arc(drawX, drawY, star.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // ── Constellation connections for nearby stars ──
        if (i % 3 === 0) {
          for (let j = i + 1; j < Math.min(stars.length, i + 12); j++) {
            const s2 = stars[j];
            const cdx = drawX - s2.x;
            const cdy = drawY - s2.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

            if (cdist < 95) {
              const lineAlpha = (1 - cdist / 95) * 0.12 * Math.min(star.alpha, s2.alpha);
              ctx.beginPath();
              ctx.moveTo(drawX, drawY);
              ctx.lineTo(s2.x, s2.y);
              ctx.strokeStyle = `rgba(125, 211, 252, ${lineAlpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // ── 2. Update & Draw Shooting Star ──
      if (timestamp - lastShootingStarTime > Math.random() * 4000 + 4000) {
        if (!shootingStarRef.current.active) {
          spawnShootingStar(width, height);
          lastShootingStarTime = timestamp;
        }
      }

      const meteor = shootingStarRef.current;
      if (meteor.active) {
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.alpha})`);
        grad.addColorStop(0.3, `rgba(0, 229, 255, ${meteor.alpha * 0.8})`);
        grad.addColorStop(1, "rgba(79, 70, 229, 0)");

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Glowing meteor head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha})`;
        ctx.fill();

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= 0.012;

        if (meteor.alpha <= 0 || meteor.x > width + 200 || meteor.y > height + 200) {
          meteor.active = false;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [createStars, spawnShootingStar]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
