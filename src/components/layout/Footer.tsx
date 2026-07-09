"use client";

import { navLinks, socialLinks, contactInfo } from "@/data/navigation";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript } from "react-icons/si";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} as const;

const socialColorMap = {
  github: "hover:text-white",
  linkedin: "hover:text-[#0A66C2]",
  instagram: "hover:text-[#E4405F]",
} as const;

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
    <footer className="relative mt-auto">
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
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 — Brand */}
            <div className="space-y-5">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SM
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                Full-stack developer crafting pixel-perfect, performant digital
                experiences with modern web technologies.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map(({ label, href, icon }) => {
                  const Icon = socialIconMap[icon];
                  const hoverClass = socialColorMap[icon];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#94A3B8] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.06] ${hoverClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map(({ label, href, sectionId }) => (
                  <li key={sectionId}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="group flex items-center text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white"
                    >
                      <span className="mr-2 inline-block h-px w-0 bg-[#4F46E5] transition-all duration-300 group-hover:w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center gap-3 text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-[#4F46E5] transition-colors duration-300 group-hover:text-[#00E5FF]" />
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-[#4F46E5] transition-colors duration-300 group-hover:text-[#00E5FF]" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="group flex items-center gap-3 text-sm text-[#94A3B8]">
                  <MapPin className="h-4 w-4 text-[#4F46E5]" />
                  {contactInfo.location}
                </li>
              </ul>
            </div>

            {/* Column 4 — Built With */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Built With
              </h3>
              <p className="mb-4 text-sm text-[#94A3B8]">
                Built with ❤️ using Next.js
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: SiNextdotjs, label: "Next.js" },
                  { Icon: SiTypescript, label: "TypeScript" },
                  { Icon: SiTailwindcss, label: "Tailwind CSS" },
                  { Icon: SiFramer, label: "Framer Motion" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#94A3B8] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <p className="text-center text-sm text-[#94A3B8]">
              © 2024 Sumit Mondal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
