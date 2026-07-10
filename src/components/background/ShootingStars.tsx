"use client";

import React, { useEffect, useRef } from "react";

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorRef = useRef<Meteor>({
    x: 0,
    y: 0,
    length: 140,
    speed: 18,
    angle: Math.PI / 4,
    alpha: 0,
    active: false,
  });
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

    let lastMeteorTime = performance.now();
    let nextInterval = Math.random() * 12000 + 8000; // 8–20 seconds

    const animate = (timestamp: number) => {
      if (document.hidden) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      if (timestamp - lastMeteorTime > nextInterval && !meteorRef.current.active) {
        meteorRef.current = {
          x: Math.random() * width * 0.75,
          y: Math.random() * (height * 0.35) - 30,
          length: Math.random() * 80 + 110,
          speed: Math.random() * 4 + 15,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15,
          alpha: 1,
          active: true,
        };
        lastMeteorTime = timestamp;
        nextInterval = Math.random() * 12000 + 8000;
      }

      const meteor = meteorRef.current;
      if (meteor.active) {
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.alpha})`);
        grad.addColorStop(0.25, `rgba(0, 229, 255, ${meteor.alpha * 0.85})`);
        grad.addColorStop(1, "rgba(79, 70, 229, 0)");

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha})`;
        ctx.fill();

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= 0.012;

        if (meteor.alpha <= 0 || meteor.x > width + 250 || meteor.y > height + 250) {
          meteor.active = false;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-22 select-none"
      aria-hidden="true"
    />
  );
}
