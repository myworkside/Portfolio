export default function GradientMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none bg-[#050816]"
      aria-hidden="true"
    >
      {/* ── 1. Top Architectural Light Beam / Cone ── */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(79, 70, 229, 0.45) 0%, rgba(0, 229, 255, 0.2) 40%, transparent 75%)",
        }}
      />

      {/* ── 2. Animated Ambient Mesh Orbs ── */}
      {/* Primary Violet-Indigo Orb — top left drift */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[650px] w-[650px] rounded-full blur-[140px] animate-mesh-1"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Cyan Secondary Orb — top right drift */}
      <div
        className="absolute -right-[8%] top-[15%] h-[550px] w-[550px] rounded-full blur-[130px] animate-mesh-2"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, transparent 70%)",
        }}
      />

      {/* Purple Accent Orb — mid center drift */}
      <div
        className="absolute top-[45%] left-[25%] h-[750px] w-[750px] rounded-full blur-[160px] animate-mesh-3"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Bottom right Indigo Orb */}
      <div
        className="absolute -bottom-[15%] right-[10%] h-[600px] w-[600px] rounded-full blur-[130px] animate-mesh-1"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, transparent 70%)",
          animationDuration: "30s",
          animationDirection: "reverse",
        }}
      />

      {/* ── 3. Subtle Architectural Grid Lines / Vignette ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── 4. Lightweight SVG Noise Grain Texture ── */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none">
        <svg className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* ── 5. Radial Edge Dark Vignette for Luxury Contrast ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 50%, rgba(5, 8, 22, 0.65) 100%)",
        }}
      />

      {/* ── 6. Lightweight Ambient Dust Particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[15%] top-[25%] h-1 w-1 rounded-full bg-white/25 animate-pulse" style={{ animationDuration: "3.5s" }} />
        <div className="absolute left-[38%] top-[65%] h-0.5 w-0.5 rounded-full bg-white/20 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute left-[68%] top-[32%] h-1 w-1 rounded-full bg-white/25 animate-pulse" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
        <div className="absolute left-[84%] top-[72%] h-1 w-1 rounded-full bg-white/20 animate-pulse" style={{ animationDuration: "4.5s", animationDelay: "2s" }} />
        <div className="absolute left-[52%] top-[18%] h-0.5 w-0.5 rounded-full bg-white/25 animate-pulse" style={{ animationDuration: "3.8s", animationDelay: "1.5s" }} />
      </div>
    </div>
  );
}
