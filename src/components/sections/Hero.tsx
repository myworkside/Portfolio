'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  MagneticButton,
  TypeWriter,
  AnimatedCounter,
} from '@/components/ui';
import { personal, stats } from '@/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="w-full relative min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-32"
      style={{ background: '#050816' }}
    >
      {/* Background Floating Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full blur-3xl opacity-20 animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 md:w-[28rem] h-80 md:h-[28rem] rounded-full blur-3xl opacity-15 animate-float-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 md:w-80 h-64 md:h-80 rounded-full blur-3xl opacity-15 animate-float-fast pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Standardized Global Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 flex flex-col items-center text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#94A3B8] text-lg md:text-xl mb-4 tracking-wide"
        >
          <span className="mr-2">👋</span>Hello, I&apos;m
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-4 leading-[1.1]"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #4F46E5 0%, #00E5FF 50%, #8B5CF6 100%)',
            }}
          >
            {personal.name}
          </span>
        </motion.h1>

        {/* TypeWriter Roles */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#E2E8F0] mb-6 min-h-[40px]"
        >
          <TypeWriter
            words={personal.roles ?? ['Android Application Developer', 'Warehouse Operations Specialist', 'Logistics Professional']}
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #4F46E5, #00E5FF)',
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-[#94A3B8] text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons Centered */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 w-full"
        >
          <div>
            <MagneticButton>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                }}
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </MagneticButton>
          </div>

          <div>
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-xl font-semibold text-[#E2E8F0] text-sm border border-[#4F46E5]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#4F46E5] hover:bg-[#4F46E5]/10 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]"
                style={{ background: 'rgba(15, 23, 42, 0.4)' }}
              >
                View Projects
                <FaArrowRight className="text-xs" />
              </a>
            </MagneticButton>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            {[
              { icon: FaGithub, href: personal.social?.github ?? 'https://github.com/myworkside', label: 'GitHub' },
              { icon: FaLinkedin, href: personal.social?.linkedin ?? 'https://linkedin.com/in/sumitwork', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-12 h-12 min-h-[48px] min-w-[48px] rounded-xl border border-white/10 text-[#94A3B8] backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]"
                  style={{ background: 'rgba(15, 23, 42, 0.4)' }}
                >
                  <Icon className="text-lg" />
                </a>
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Stats Centered: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl p-6 text-center backdrop-blur-md border border-white/[0.06] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.08)] h-full flex flex-col justify-center"
              style={{ background: 'rgba(15, 23, 42, 0.6)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
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
              <div className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">
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
