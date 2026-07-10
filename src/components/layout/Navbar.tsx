"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setHasScrolled(currentScrollY > 20);

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setIsVisible(false);
      setIsMenuOpen(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    const sections = navLinks.map((link) => link.sectionId);
    for (const sectionId of sections) {
      if (!sectionId) continue;
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-4 z-50 transition-all duration-500"
      >
        <div className="mx-auto w-full max-w-[1440px] px-8">
          {/* 72px Floating Glass Pill Navbar */}
          <div
            className={cn(
              "relative h-[72px] w-full rounded-full px-8 flex items-center justify-between transition-all duration-500 border",
              hasScrolled
                ? "border-white/[0.14] bg-[#0B1220]/85 shadow-[0_0_35px_rgba(79,70,229,0.35),0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                : "border-white/[0.08] bg-[#050816]/70 backdrop-blur-lg"
            )}
          >
            {/* Logo Left */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="relative z-10 flex items-center gap-2 select-none whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#00E5FF] flex items-center justify-center font-bold text-white text-xs shadow-md shadow-[#4F46E5]/30">
                S
              </div>
              <span
                className="text-lg font-bold tracking-tight text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sumit.dev
              </span>
            </a>

            {/* Navigation Perfectly Centered (absolute left-1/2 -translate-x-1/2) */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-10 xl:gap-12 lg:flex z-10">
              {navLinks.map(({ label, href, sectionId }) => {
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={sectionId}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "relative py-2 text-sm font-medium whitespace-nowrap",
                      isActive
                        ? "text-white"
                        : "text-[#94A3B8]"
                    )}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #4F46E5, #00E5FF)",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Right */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                onClick={handleCtaClick}
                className="relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap border border-white/10"
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let&apos;s Talk</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt4 className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glass Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050816]/90 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map(({ label, href, sectionId }) => (
                <a
                  key={sectionId}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={cn(
                    "text-2xl font-bold tracking-tight transition-colors py-2",
                    activeSection === sectionId
                      ? "text-white"
                      : "text-[#94A3B8]"
                  )}
                >
                  {label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={handleCtaClick}
                  className="inline-block rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#4F46E5]/30 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                  }}
                >
                  Let&apos;s Talk
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
