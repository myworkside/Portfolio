'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { experience } from '@/data';
import type { Experience as ExperienceItem } from '@/types';

function TimelineDot({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.4, delay, ease: 'backOut' }}
      className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
      style={{ background: '#050816' }}
    >
      <div
        className="w-4 h-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
        }}
      />
    </motion.div>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <GlassCard className="p-6 md:p-8 hover:border-[#4F46E5]/40 transition-all duration-500 group w-full">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#00E5FF] border border-[#00E5FF]/30"
          style={{ background: 'rgba(0, 229, 255, 0.08)' }}
        >
          <FaCalendarAlt className="text-[10px]" />
          {exp.startDate} – {exp.endDate}
        </span>

        <span className="text-xs text-[#94A3B8] flex items-center gap-1">
          <FaMapMarkerAlt className="text-[#4F46E5]" />
          {exp.location}
        </span>
      </div>

      {/* Role & Company */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
        {exp.role}
      </h3>
      <p className="text-sm font-semibold text-[#8B5CF6] mb-4 flex items-center gap-2">
        <FaBriefcase className="text-xs" />
        {exp.company}
      </p>

      {/* Description */}
      <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
        {exp.description}
      </p>

      {/* Responsibilities bullet points */}
      <ul className="space-y-2 mb-6">
        {(exp.responsibilities ?? []).map((item, i) => (
          <li
            key={i}
            className="text-xs md:text-sm text-[#E2E8F0] flex items-start gap-2.5"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Technologies pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
        {(exp.technologies ?? exp.techStack ?? []).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-medium text-[#94A3B8] bg-white/[0.03] border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const cardVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -40 : 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Professional Experience"
            subtitle="My career timeline"
          />
        </ScrollReveal>

        {/* Timeline Container Full Width */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full relative mt-16"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            <motion.div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(to bottom, #4F46E5, #00E5FF, #8B5CF6)',
              }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Timeline items: width 100%, max-w-none, alternate left/right on desktop (approx 46%), single column mobile/tablet */}
          <div className="space-y-12 lg:space-y-16 w-full">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex items-start gap-6 lg:gap-0 w-full"
                >
                  {/* Desktop: left side content (around 46% width) */}
                  <div
                    className={`hidden lg:flex lg:w-[46%] ${
                      isLeft ? 'justify-end pr-8' : 'justify-start pl-8 order-3'
                    }`}
                  >
                    <motion.div
                      custom={isLeft}
                      variants={cardVariants}
                      className="w-full max-w-none"
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <TimelineDot inView={isInView} delay={index * 0.2 + 0.3} />
                  </div>

                  {/* Desktop: spacer for the opposite side */}
                  <div
                    className={`hidden lg:block lg:w-[46%] ${
                      isLeft ? 'order-3' : ''
                    }`}
                  />

                  {/* Mobile & Tablet: card always on the right of the dot */}
                  <div className="w-full max-w-none flex-1 lg:hidden">
                    <motion.div
                      custom={false}
                      variants={cardVariants}
                      className="w-full"
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
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
