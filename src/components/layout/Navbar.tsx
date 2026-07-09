"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  const lastScrollY = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY[0];
    if (latest > previous && latest > 100) {
      setIsVisible(false);
      setIsMenuOpen(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY[0] = latest;
    setHasScrolled(latest > 20);
  });

  // IntersectionObserver for active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ sectionId }) => {
      if (!sectionId) return;
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #4F46E5, #00E5FF)",
        }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed left-0 right-0 top-[2px] z-50 transition-all duration-300",
          hasScrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 transition-all duration-500",
            hasScrolled
              ? "border border-white/[0.06] bg-[#050816]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "bg-transparent"
          )}
          style={{
            padding: hasScrolled ? "12px 24px" : "8px 24px",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative z-10 select-none"
          >
            <span
              className="text-2xl font-bold tracking-tight"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px rgba(79,70,229,0.4))",
              }}
            >
              SM
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, href, sectionId }) => (
              <a
                key={sectionId}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  activeSection === sectionId
                    ? "text-white"
                    : "text-[#94A3B8] hover:text-[#E2E8F0]"
                )}
              >
                {label}
                {/* Hover underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300",
                    activeSection === sectionId
                      ? "w-4/5"
                      : "w-0 group-hover:w-3/5"
                  )}
                  style={{
                    background:
                      "linear-gradient(90deg, #4F46E5, #00E5FF)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="group relative hidden overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/30 md:block"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
            }}
          >
            <span className="relative z-10">Let&apos;s Talk</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex items-center justify-center backdrop-blur-2xl md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,8,22,0.97) 0%, rgba(5,8,22,0.99) 100%)",
            }}
          >
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map(({ label, href, sectionId }, index) => (
                <motion.a
                  key={sectionId}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "px-6 py-4 text-3xl font-medium transition-colors duration-300",
                    activeSection === sectionId
                      ? "text-white"
                      : "text-[#94A3B8]"
                  )}
                >
                  {label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={handleCtaClick}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  delay: navLinks.length * 0.08,
                  ease: "easeOut",
                }}
                className="mt-6 rounded-full px-10 py-3.5 text-lg font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                }}
              >
                Let&apos;s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
