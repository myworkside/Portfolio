export default function GradientMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none bg-[#03050F]"
      aria-hidden="true"
    >
      {/* ── 1. Deep Space Cosmic Fog / Aurora Light Beam ── */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(79, 70, 229, 0.55) 0%, rgba(0, 229, 255, 0.25) 45%, transparent 75%)",
        }}
      />

      {/* ── 2. Deep Space Nebula Clouds (Animated) ── */}
      {/* Nebula Cloud 1 — Deep Indigo / Violet Drift */}
      <div
        className="absolute -left-[12%] -top-[10%] h-[750px] w-[750px] rounded-full blur-[150px] animate-mesh-1 opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.30) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 75%)",
        }}
      />

      {/* Nebula Cloud 2 — Cyan Cosmic Fog */}
      <div
        className="absolute -right-[10%] top-[12%] h-[680px] w-[680px] rounded-full blur-[140px] animate-mesh-2 opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.22) 0%, rgba(79, 70, 229, 0.08) 55%, transparent 75%)",
        }}
      />

      {/* Nebula Cloud 3 — Purple Aurora Core */}
      <div
        className="absolute top-[48%] left-[22%] h-[800px] w-[800px] rounded-full blur-[165px] animate-mesh-3 opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(79, 70, 229, 0.1) 60%, transparent 80%)",
        }}
      />

      {/* Nebula Cloud 4 — Bottom Space Horizon Glow */}
      <div
        className="absolute -bottom-[18%] right-[12%] h-[700px] w-[700px] rounded-full blur-[145px] animate-mesh-1 opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.24) 0%, rgba(0, 229, 255, 0.12) 65%, transparent 80%)",
          animationDuration: "35s",
          animationDirection: "reverse",
        }}
      />

      {/* ── 3. Ultra-Fine Futuristic Cosmic Coordinate Grid ── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── 4. Luxury Radial Space Edge Vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 45%, rgba(3, 5, 15, 0.78) 100%)",
        }}
      />
    </div>
  );
}
