'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  GlassCard,
  SectionHeading,
  ScrollReveal,
} from '@/components/ui';
import { personal, education, languages } from '@/data';

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

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const bioParagraphs = Array.isArray(personal.bio)
    ? personal.bio
    : [personal.bio];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Heading */}
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me"
          />
        </ScrollReveal>

        {/* Two Equal Columns (Desktop 50% Biography / 50% Profile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column — 50% Professional Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#94A3B8] text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Journey Highlights */}
            {personal.highlights && personal.highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 items-stretch">
                {personal.highlights.map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-5 border border-white/[0.06] hover:border-[#4F46E5]/30 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#00E5FF]">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-white font-medium text-sm mb-1">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#94A3B8] text-xs leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column — 50% Profile Centered & Mission Below Profile */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Centered */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative flex justify-center">
                <div
                  className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full blur-2xl opacity-25 -z-10 animate-pulse"
                  style={{
                    background:
                      'linear-gradient(135deg, #4F46E5, #00E5FF, #8B5CF6)',
                  }}
                />

                <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#00E5FF] to-[#8B5CF6]">
                  <div
                    className="w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center overflow-hidden border-4 border-[#050816]"
                    style={{ background: '#0F172A' }}
                  >
                    <div className="text-center p-6">
                      <div
                        className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white shadow-lg"
                        style={{
                          background:
                            'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                        }}
                      >
                        {personal.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <p className="text-white font-bold text-lg">
                        {personal.name}
                      </p>
                      <p className="text-[#00E5FF] text-xs font-medium tracking-wide mt-1">
                        {personal.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission & Vision Below Profile */}
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

        {/* Education, Languages & Professional Strengths Grid (3 equal cards) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Education */}
          <ScrollReveal delay={0.1} className="h-full">
            <GlassCard className="p-6 h-full flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#4F46E5] font-semibold mb-3">
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
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.2} className="h-full">
            <GlassCard className="p-6 h-full flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#00E5FF] font-semibold mb-3">
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
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Professional Strengths */}
          <ScrollReveal delay={0.3} className="h-full">
            <GlassCard className="p-6 h-full flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#8B5CF6] font-semibold mb-3">
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
                      className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-[#E2E8F0] border border-white/[0.08]"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
