'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MagneticButton, AnimatedCounter, TypeWriter } from '@/components/ui';
import { personal, stats } from '@/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-28 md:py-36 lg:py-[160px]"
    >
      {/* Standardized Global Container: max-w-[1440px] px-8 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto w-full max-w-[1440px] px-8 relative z-10 flex flex-col items-center text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight mb-6 leading-[1.12] w-full mx-auto"
        >
          <span
            className="bg-clip-text text-transparent block"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #4F46E5 0%, #00E5FF 50%, #8B5CF6 100%)',
            }}
          >
            Android Developer • Web Developer • Creative Technologist
          </span>
        </motion.h1>

        {/* TypeWriter Roles (prevents word wrap break on roles) */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-[22px] font-semibold text-[#E2E8F0] mb-6 min-h-[44px] flex items-center justify-center max-w-[90vw]"
        >
          <TypeWriter
            words={[
              'Android Developer',
              'Software Engineer',
              'Warehouse Operations Specialist',
              'Graphic Designer',
              'Video Editor',
            ]}
            className="bg-clip-text text-transparent break-words"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #4F46E5, #00E5FF)',
            }}
          />
        </motion.div>

        {/* Tagline / Professional Summary — 18px Body */}
        <motion.p
          variants={itemVariants}
          className="text-[#94A3B8] text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons Centered */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-20 w-full"
        >
          <div>
            <MagneticButton
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_35px_rgba(79,70,229,0.5)] border border-white/10"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
              }}
            >
              Explore Projects
              <FaArrowRight className="text-xs" />
            </MagneticButton>
          </div>

          <div>
            <MagneticButton
              href={personal.resumeUrl}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full font-semibold text-[#E2E8F0] text-sm border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
            >
              <FaDownload className="text-sm" />
              Download Resume
            </MagneticButton>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 ml-2">
            {[
              { icon: FaGithub, href: personal.social?.github ?? 'https://github.com/myworkside', label: 'GitHub' },
              { icon: FaLinkedin, href: personal.social?.linkedin ?? 'https://linkedin.com/in/sumitwork', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-[#94A3B8] backdrop-blur-md transition-all duration-300 hover:text-white hover:border-[#4F46E5]/50 hover:bg-white/[0.05]"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              >
                <Icon className="text-lg" />
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Stats Centered: gap-8 */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl p-6 text-center backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5 h-full flex flex-col justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
            >
              <div className="text-[32px] md:text-[36px] font-extrabold text-white mb-1">
                <AnimatedCounter target={stat.value} />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #4F46E5, #00E5FF)',
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[14px] text-[#94A3B8] uppercase tracking-widest font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
