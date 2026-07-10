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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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
      className="w-full relative py-[72px] md:py-[96px] lg:py-[120px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10 2xl:px-16 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Philosophy & Profile"
            align="center"
          />
        </ScrollReveal>

        {/* Award-Level 2-Column Layout: Left (50%), Right (50%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* Left Column (50%) — Biography + Highlight Cards + Education + Languages */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between space-y-8">
            {/* Biography */}
            <div className="space-y-6">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#94A3B8] text-[16px] md:text-[18px] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Highlight Cards */}
            {personal.highlights && personal.highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {personal.highlights.map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-6 border border-white/10 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                        <span className="text-[14px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-[18px] mb-1">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#94A3B8] leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            )}

            {/* Education & Languages side-by-side equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Education Card */}
              <GlassCard className="p-7 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] uppercase tracking-widest text-[#4F46E5] font-bold mb-4">
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={edu.id}
                        className={`border-l-2 pl-4 ${
                          idx === 0 ? 'border-[#4F46E5]' : 'border-[#00E5FF]'
                        }`}
                      >
                        <h4 className="text-white font-semibold text-[16px]">
                          {edu.degree}
                        </h4>
                        <p className="text-[14px] text-[#94A3B8] mt-1">
                          {edu.institution} — {edu.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Languages Card */}
              <GlassCard className="p-7 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] uppercase tracking-widest text-[#00E5FF] font-bold mb-4">
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, idx) => (
                      <div
                        key={lang.language}
                        className="flex items-center justify-between p-3 rounded-xl border border-white/10"
                        style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                      >
                        <span className="text-white font-medium text-[16px]">
                          {lang.language}
                        </span>
                        <span
                          className={`text-[13px] font-semibold px-3 py-1 rounded-full border ${
                            idx === 0
                              ? 'bg-[#4F46E5]/20 text-[#00E5FF] border-[#4F46E5]/30'
                              : 'bg-white/[0.05] text-white border-white/10'
                          }`}
                        >
                          {lang.proficiency.split(' / ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Column (50%) — Profile Card + Mission Card + Vision Card + Strength Tags */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between space-y-8">
            {/* Profile Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl p-8 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center gap-8" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 bg-[#0B1220] flex items-center justify-center shadow-lg shadow-black/40">
                  <div
                    className="w-full h-full flex items-center justify-center text-3xl font-extrabold text-white"
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
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-white font-bold text-2xl">
                    {personal.name}
                  </p>
                  <p className="text-[#00E5FF] text-[16px] font-semibold tracking-wide mt-1">
                    {personal.title}
                  </p>
                  <p className="text-[#94A3B8] text-[14px] mt-2 leading-relaxed">
                    Based in {personal.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Distinct Mission Card */}
            <ScrollReveal delay={0.15}>
              <GlassCard className="p-8">
                <h3 className="text-[14px] uppercase tracking-widest text-[#4F46E5] font-bold mb-3">
                  Mission
                </h3>
                <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-relaxed">
                  {personal.mission}
                </p>
              </GlassCard>
            </ScrollReveal>

            {/* Distinct Vision Card */}
            <ScrollReveal delay={0.2}>
              <GlassCard className="p-8">
                <h3 className="text-[14px] uppercase tracking-widest text-[#00E5FF] font-bold mb-3">
                  Vision
                </h3>
                <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-relaxed">
                  {personal.vision}
                </p>
              </GlassCard>
            </ScrollReveal>

            {/* Professional Strengths Card */}
            <ScrollReveal delay={0.25}>
              <GlassCard className="p-8">
                <h3 className="text-[14px] uppercase tracking-widest text-[#8B5CF6] font-bold mb-4">
                  Strength Tags
                </h3>
                <div className="flex flex-wrap gap-2.5">
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
                      className="text-[14px] font-medium px-4 py-2 rounded-full text-[#E2E8F0] border border-white/10 transition-colors hover:border-[#00E5FF]/40"
                      style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
