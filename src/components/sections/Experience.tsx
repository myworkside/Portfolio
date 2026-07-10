'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { experience } from '@/data';
import type { Experience as ExperienceType } from '@/types';

const cardVariants: Variants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -30 : 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function TimelineDot({
  inView,
  delay = 0,
}: {
  inView: boolean;
  delay?: number;
}) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow Pulse */}
      <motion.div
        className="absolute w-10 h-10 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%)',
        }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: [1, 1.4, 1] } : { scale: 0 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="w-6 h-6 rounded-full border-2 border-[#00E5FF] bg-[#050816] flex items-center justify-center z-10"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay, ease: 'backOut' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
      </motion.div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceType }) {
  const periodText = exp.duration || `${exp.startDate || ''} - ${exp.endDate || ''}`;
  const points = exp.responsibilities || [];
  const techList = exp.technologies ?? exp.techStack ?? [];

  return (
    <GlassCard className="p-8 min-h-[220px] flex flex-col justify-between border border-white/10">
      <div>
        {/* Top Header: Role & Period */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-widest text-[#00E5FF] px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20">
            <FaCalendarAlt className="text-xs" />
            {periodText}
          </span>
          {exp.location && (
            <span className="inline-flex items-center gap-1.5 text-[13px] text-[#94A3B8]">
              <FaMapMarkerAlt className="text-xs text-[#8B5CF6]" />
              {exp.location}
            </span>
          )}
        </div>

        {/* Role Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
          {exp.role}
        </h3>

        {/* Company Name */}
        <div className="flex items-center gap-2 mb-5">
          <FaBriefcase className="text-sm text-[#4F46E5]" />
          <span className="text-base font-semibold text-[#E2E8F0]">
            {exp.company}
          </span>
        </div>

        {/* Responsibilities List */}
        <ul className="space-y-3 mb-6">
          {points.map((resp, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[16px] text-[#94A3B8] leading-relaxed"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      {techList.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {techList.map((tech) => (
            <span
              key={tech}
              className="text-[13px] font-medium px-3 py-1 rounded-full border border-white/10 text-[#E2E8F0]"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full relative py-28 md:py-36 lg:py-[160px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Career Journey"
            subtitle="Professional Experience"
            align="center"
          />
        </ScrollReveal>

        {/* Timeline Container */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-[1140px] mx-auto"
        >
          {/* Vertical connecting glowing neon line — left on mobile, center on desktop */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full h-full shadow-[0_0_15px_rgba(0,229,255,0.7)]"
              style={{
                background:
                  'linear-gradient(to bottom, #4F46E5, #00E5FF, #8B5CF6)',
              }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Timeline items — flex flex-col gap-[100px] */}
          <div className="flex flex-col gap-[100px]">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative"
                >
                  {/* Center Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 top-8">
                    <TimelineDot inView={isInView} delay={index * 0.2 + 0.3} />
                  </div>

                  {/* Mobile & Tablet */}
                  <div className="pl-16 lg:hidden">
                    <motion.div
                      custom={false}
                      variants={cardVariants}
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  </div>

                  {/* Desktop: Centered alternating LEFT / RIGHT with 600px cards */}
                  <div className="hidden lg:grid lg:grid-cols-2 items-start">
                    {/* Left cell */}
                    <div className="flex justify-end pr-14">
                      {isLeft && (
                        <motion.div
                          custom={true}
                          variants={cardVariants}
                          className="w-full max-w-[600px]"
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      )}
                    </div>

                    {/* Right cell */}
                    <div className="flex justify-start pl-14">
                      {!isLeft && (
                        <motion.div
                          custom={false}
                          variants={cardVariants}
                          className="w-full max-w-[600px]"
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
