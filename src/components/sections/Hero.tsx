'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';
import { MagneticButton, AnimatedCounter, TypeWriter } from '@/components/ui';
import { personal } from '@/data';

const floatingOrbs = [
  {
    className: 'w-72 h-72 bg-[#4F46E5] top-1/4 -left-20',
    delay: 0,
  },
  {
    className: 'w-96 h-96 bg-[#8B5CF6] top-1/3 right-0',
    delay: 2,
  },
  {
    className: 'w-64 h-64 bg-[#00E5FF] bottom-1/4 left-1/3',
    delay: 4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { label: 'Years Experience', value: personal.stats.yearsExperience, suffix: '+' },
  { label: 'Projects', value: personal.stats.projects, suffix: '+' },
  { label: 'GitHub Stars', value: personal.stats.githubStars, suffix: '' },
  { label: 'Happy Clients', value: personal.stats.happyClients, suffix: '+' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${orb.className}`}
          style={{ animationDelay: `${orb.delay}s`, animationDuration: '6s' }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center text-center"
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
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-[1.1]"
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
          className="text-xl md:text-2xl lg:text-3xl font-medium text-[#E2E8F0] mb-6 h-10"
        >
          <TypeWriter
            words={personal.roles}
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
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
              }}
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-[#E2E8F0] text-sm border border-[#4F46E5]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#4F46E5] hover:bg-[#4F46E5]/10 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]"
              style={{ background: 'rgba(15, 23, 42, 0.4)' }}
            >
              View Projects
              <FaArrowRight className="text-xs" />
            </a>
          </MagneticButton>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-2">
            {[
              { icon: FaGithub, href: personal.social.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personal.social.linkedin, label: 'LinkedIn' },
              { icon: FaInstagram, href: personal.social.instagram, label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-[#94A3B8] backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]"
                  style={{ background: 'rgba(15, 23, 42, 0.4)' }}
                >
                  <Icon className="text-lg" />
                </a>
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl p-5 text-center backdrop-blur-md border border-white/[0.06] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.08)]"
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
              <div className="text-xs text-[#94A3B8] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
