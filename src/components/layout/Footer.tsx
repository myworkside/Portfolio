"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personal, navLinks } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contactInfo = {
    email: personal.email,
    phone: personal.phone,
    location: personal.location,
  };
  const socialLinks = [
    { label: "GitHub", href: personal.social?.github ?? "https://github.com/myworkside", icon: "github" },
    { label: "LinkedIn", href: personal.social?.linkedin ?? "https://linkedin.com/in/sumitwork", icon: "linkedin" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="w-full relative overflow-hidden border-t border-white/10"
      style={{ background: "#050816" }}
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />

      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10 2xl:px-16 py-20">
        {/* Desktop 4 Equal Columns Grid, Tablet 2 columns, Mobile 1 column spanning full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start w-full">
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
              {personal.tagline}
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

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {currentYear} Sumit Mondal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with Next.js 16 &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
