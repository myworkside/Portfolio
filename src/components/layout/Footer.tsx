"use client";

import { navigation as navLinks, socialLinks, contactInfo } from "@/data";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full relative mt-auto">
      {/* Top gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4F46E5, #00E5FF, #8B5CF6, transparent)",
        }}
      />

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(5,8,22,1) 0%, rgba(10,15,35,1) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-16">
          {/* Desktop 4 Equal Columns Grid, Tablet 2 columns, Mobile 1 column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            {/* Column 1 — Brand */}
            <div className="space-y-5">
              <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sumit.dev
                </span>
              </a>

              <p className="text-sm leading-relaxed text-[#94A3B8]">
                Results-driven professional specializing in Android application
                development and warehouse operations management.
              </p>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#E2E8F0]">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="text-sm text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact Info */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#E2E8F0]">
                Contact Info
              </h4>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <FaEnvelope className="text-[#4F46E5] flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <FaPhone className="text-[#00E5FF] flex-shrink-0" />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                  <FaMapMarkerAlt className="text-[#8B5CF6] flex-shrink-0 mt-1" />
                  <span>{contactInfo.location}</span>
                </li>
              </ul>
            </div>

            {/* Column 4 — Social */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#E2E8F0]">
                Social Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon }) => {
                  const Icon = icon === "github" ? FaGithub : FaLinkedinIn;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#94A3B8] transition-all duration-300 hover:border-[#4F46E5] hover:bg-[#4F46E5]/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Sumit Mondal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
