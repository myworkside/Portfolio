'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaStar } from 'react-icons/fa';
import {
  GlassCard,
  SectionHeading,
  AnimatedCounter,
  ScrollReveal,
} from '@/components/ui';
import { personal, education, languages } from '@/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const aboutStats = [
  {
    icon: FaCode,
    label: 'Featured CV Projects',
    value: 2,
    suffix: '',
  },
  {
    icon: FaRocket,
    label: 'Professional Roles',
    value: 6,
    suffix: '',
  },
  {
    icon: FaStar,
    label: 'Core Competencies',
    value: 11,
    suffix: '',
  },
  {
    icon: FaUsers,
    label: 'CV Strengths',
    value: 8,
    suffix: '',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.06]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl opacity-[0.06]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10 w-full">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="Get to know me" />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Bio & Highlights */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio Paragraphs */}
            <div className="space-y-5">
              {personal.bio.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-[#94A3B8] leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Career Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-[#4F46E5] font-semibold mb-4">
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(personal.highlights ?? []).map((highlight, i) => (
                  <ScrollReveal key={highlight.year} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-4 border border-white/[0.06] backdrop-blur-md transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-[0_0_25px_rgba(79,70,229,0.08)] group"
                      style={{ background: 'rgba(15, 23, 42, 0.6)' }}
                    >
                      <span
                        className="text-xs font-bold tracking-wide bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            'linear-gradient(90deg, #4F46E5, #00E5FF)',
                        }}
                      >
                        {highlight.year}
                      </span>
                      <h4 className="text-[#E2E8F0] font-semibold text-sm mt-1 mb-1 group-hover:text-white transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Profile Visual & Mission */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image Placeholder */}
            <ScrollReveal>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-1 rounded-full blur-md opacity-60"
                    style={{
                      background:
                        'linear-gradient(135deg, #4F46E5, #00E5FF, #8B5CF6)',
                    }}
                  />
                  {/* Gradient border circle */}
                  <div
                    className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-[3px]"
                    style={{
                      background:
                        'linear-gradient(135deg, #4F46E5, #00E5FF, #8B5CF6)',
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ background: '#0F172A' }}
                    >
                      <span
                        className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent select-none"
                        style={{
                          backgroundImage:
                            'linear-gradient(135deg, #4F46E5, #00E5FF)',
                        }}
                      >
                        {(personal.firstName ?? 'Sumit')[0]}
                        {(personal.lastName ?? 'Mondal')[0]}
                      </span>
                    </div>
                  </div>
                  {/* Floating status badge */}
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-md border border-white/10"
                    style={{
                      background:
                        'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                    }}
                  >
                    Available for work
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission & Vision */}
            <ScrollReveal delay={0.2}>
              <GlassCard className="p-6 space-y-4">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-[#4F46E5] font-semibold mb-2">
                    Mission
                  </h3>
                  <p className="text-[#E2E8F0] text-sm leading-relaxed">
                    {personal.mission}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-[#00E5FF] font-semibold mb-2">
                    Vision
                  </h3>
                  <p className="text-[#E2E8F0] text-sm leading-relaxed">
                    {personal.vision}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </motion.div>
        </motion.div>

        {/* Education, Languages & Professional Strengths Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education */}
          <ScrollReveal delay={0.1}>
            <GlassCard className="p-6 h-full space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-[#4F46E5] font-semibold">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div
                    key={edu.id}
                    className={`border-l-2 pl-3 ${
                      idx === 0 ? 'border-[#4F46E5]' : 'border-[#00E5FF]'
                    }`}
                  >
                    <h4 className="text-white font-medium text-sm">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#94A3B8]">
                      {edu.institution} — {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-6 h-full space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-[#00E5FF] font-semibold">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                  >
                    <span className="text-white font-medium text-sm">
                      {lang.language}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border ${
                        idx === 0
                          ? 'bg-[#4F46E5]/20 text-[#00E5FF] border-[#4F46E5]/30'
                          : 'bg-[#00E5FF]/20 text-white border-[#00E5FF]/30'
                      }`}
                    >
                      {lang.proficiency.split(' / ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Professional Strengths */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="p-6 h-full space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-[#8B5CF6] font-semibold">
                Professional Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Analytical Thinking',
                  'Strong Work Ethic',
                  'Fast Learner',
                  'Attention to Detail',
                  'Adaptability',
                  'Self-Motivated',
                  'Quality-Oriented',
                  'Work Under Pressure',
                ].map((strength) => (
                  <span
                    key={strength}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#8B5CF6]/10 text-[#E2E8F0] border border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-colors"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {aboutStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <GlassCard className="p-6 text-center group hover:border-[#4F46E5]/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.08)] transition-all duration-500">
                <stat.icon className="text-2xl text-[#4F46E5] mx-auto mb-3 group-hover:text-[#00E5FF] transition-colors duration-300" />
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #4F46E5, #00E5FF)',
                    }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-widest">
                  {stat.label}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
