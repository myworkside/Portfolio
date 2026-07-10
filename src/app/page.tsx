import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import MouseGlow from "@/components/effects/MouseGlow";
import GradientMesh from "@/components/effects/GradientMesh";
import ParticleBackground from "@/components/effects/ParticleBackground";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* ─── Background Effects ─── */}
      <GradientMesh />
      <ParticleBackground />
      <MouseGlow />

      {/* ─── Navigation ─── */}
      <Navbar />

      {/* ─── Main Content ─── */}
      <main id="main-content" className="relative z-10 w-full flex flex-col items-center justify-start overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* ─── Footer ─── */}
      <Footer />

      {/* ─── Utilities ─── */}
      <BackToTop />
    </SmoothScroll>
  );
}
