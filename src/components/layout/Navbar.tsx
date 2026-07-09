"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation as navLinks } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = navLinks.map((link) => link.sectionId);
      for (const sectionId of sections.slice().reverse()) {
        if (!sectionId) continue;
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMenuOpen(false);

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #4F46E5, #00E5FF)",
        }}
      />

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed left-0 right-0 top-[2px] z-50 transition-all duration-300",
          hasScrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between rounded-2xl transition-all duration-500",
            hasScrolled
              ? "border border-white/[0.06] bg-[#050816]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "bg-transparent"
          )}
          style={{
            padding: hasScrolled ? "12px 24px" : "8px 24px",
          }}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="relative z-10 select-none whitespace-nowrap"
          >
            <span
              className="text-lg sm:text-xl font-bold tracking-tight text-white"
              style={{
                background:
                  "linear-gradient(135deg, #4F46E5 0%, #00E5FF 50%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sumit.dev
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
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
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300",
                    activeSection === sectionId
                      ? "w-4/5"
                      : "w-0 group-hover:w-3/5"
                  )}
                  style={{
                    background: "linear-gradient(90deg, #4F46E5, #00E5FF)",
                  }}
                />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={handleCtaClick}
            className="group relative hidden overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/30 lg:block whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
            }}
          >
            <span className="relative z-10">Let&apos;s Talk</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden hover:bg-white/[0.06] transition-colors"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex items-center justify-center backdrop-blur-2xl lg:hidden"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                  className={cn(
                    "px-8 py-3 text-2xl font-bold tracking-tight transition-colors",
                    activeSection === sectionId
                      ? "text-white"
                      : "text-[#94A3B8] hover:text-white"
                  )}
                >
                  {label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={handleCtaClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: navLinks.length * 0.05 + 0.15,
                  duration: 0.3,
                }}
                className="mt-6 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#4F46E5]/30"
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

export default Navbar;
