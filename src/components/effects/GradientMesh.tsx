"use client";

export default function GradientMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary orb — top left drift */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] animate-[meshFloat1_25s_ease-in-out_infinite] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Secondary orb — top right drift */}
      <div
        className="absolute -right-[5%] top-[20%] h-[500px] w-[500px] animate-[meshFloat2_30s_ease-in-out_infinite] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Accent orb — center bottom drift */}
      <div
        className="absolute bottom-[10%] left-[30%] h-[700px] w-[700px] animate-[meshFloat3_20s_ease-in-out_infinite] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Extra subtle primary orb — bottom right */}
      <div
        className="absolute -bottom-[15%] right-[10%] h-[400px] w-[400px] animate-[meshFloat4_28s_ease-in-out_infinite] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes meshFloat1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(80px, 60px) scale(1.1);
          }
          50% {
            transform: translate(40px, 120px) scale(0.95);
          }
          75% {
            transform: translate(-30px, 50px) scale(1.05);
          }
        }

        @keyframes meshFloat2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-70px, 80px) scale(1.05);
          }
          50% {
            transform: translate(-120px, 30px) scale(1.1);
          }
          75% {
            transform: translate(-40px, -50px) scale(0.95);
          }
        }

        @keyframes meshFloat3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(60px, -80px) scale(1.08);
          }
          50% {
            transform: translate(-50px, -40px) scale(0.92);
          }
          75% {
            transform: translate(30px, 60px) scale(1.05);
          }
        }

        @keyframes meshFloat4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, -70px) scale(1.1);
          }
          66% {
            transform: translate(50px, -30px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
