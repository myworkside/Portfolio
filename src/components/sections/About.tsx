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
      className="w-full relative py-28 md:py-36 lg:py-[160px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Philosophy & Profile"
            align="center"
          />
        </ScrollReveal>

        {/* 45% Left / 55% Right Layout: grid-cols-1 lg:grid-cols-12 gap-8 items-stretch */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column (45% — lg:col-span-5) — Biography + Highlight Cards + Education + Languages */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between space-y-8">
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
                    className="p-6 sm:p-8 lg:p-10 border border-white/10 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                        <span className="text-[14px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-[18px] mb-5 leading-[1.3]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#94A3B8] leading-[1.85] mt-[18px]">
                      {item.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            )}

            {/* Education & Languages side-by-side equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Education Card */}
              <GlassCard className="p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] uppercase tracking-widest text-[#4F46E5] font-bold mb-5 leading-[1.3]">
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
                        <h4 className="text-white font-semibold text-[16px] leading-[1.3]">
                          {edu.degree}
                        </h4>
                        <p className="text-[14px] text-[#94A3B8] mt-[10px] leading-[1.85]">
                          {edu.institution} — {edu.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Languages Card */}
              <GlassCard className="p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] uppercase tracking-widest text-[#00E5FF] font-bold mb-5 leading-[1.3]">
                    Languages
                  </h3>
                  <div className="space-y-4">
                    {languages.map((lang, idx) => (
                      <div
                        key={lang.language}
                        className="flex items-center justify-between p-4 rounded-xl border border-white/10"
                        style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                      >
                        <span className="text-white font-medium text-[16px]">
                          {lang.language}
                        </span>
                        <span
                          className={`text-[13px] font-semibold px-3.5 py-1.5 rounded-full border ${
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

          {/* Right Column (55% — lg:col-span-7) — Profile Card + Mission Card + Vision Card + Strength Tags */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Profile Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-[22px] p-6 sm:p-8 lg:p-10 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center gap-8" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
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
                  <p className="text-white font-bold text-2xl leading-[1.3] mb-2">
                    {personal.name}
                  </p>
                  <p className="text-[#00E5FF] text-[16px] font-semibold tracking-wide mt-1">
                    {personal.title}
                  </p>
                  <p className="text-[#94A3B8] text-[14px] mt-3 leading-[1.85]">
                    Based in {personal.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Equal Height Side-by-Side Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <ScrollReveal delay={0.15} className="h-full">
                <GlassCard className="p-6 sm:p-8 lg:p-10 min-h-[300px] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-[14px] uppercase tracking-widest text-[#4F46E5] font-bold mb-5 leading-[1.3]">
                      Mission
                    </h3>
                    <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-[1.85] mt-[18px]">
                      {personal.mission}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="h-full">
                <GlassCard className="p-6 sm:p-8 lg:p-10 min-h-[300px] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-[14px] uppercase tracking-widest text-[#00E5FF] font-bold mb-5 leading-[1.3]">
                      Vision
                    </h3>
                    <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-[1.85] mt-[18px]">
                      {personal.vision}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Professional Strengths Card */}
            <ScrollReveal delay={0.25}>
              <GlassCard className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-[14px] uppercase tracking-widest text-[#8B5CF6] font-bold mb-5 leading-[1.3]">
                  Strength Tags
                </h3>
                <div className="flex flex-wrap gap-3 mt-[28px]">
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
                      className="text-[14px] font-medium px-4 py-2.5 rounded-full text-[#E2E8F0] border border-white/10"
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
