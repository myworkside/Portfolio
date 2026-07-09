'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { experience } from '@/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function TimelineDot({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow */}
      <div
        className="absolute w-6 h-6 rounded-full blur-md opacity-60"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #00E5FF)' }}
      />
      {/* Dot */}
      <div
        className="relative w-4 h-4 rounded-full border-2 border-[#050816]"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #00E5FF)' }}
      />
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Bg accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey"
          />
        </ScrollReveal>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative mt-16"
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

          {/* Timeline items */}
          <div className="space-y-12 lg:space-y-16">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex items-start gap-6 lg:gap-0"
                >
                  {/* Desktop: left side content */}
                  <div
                    className={`hidden lg:flex lg:w-1/2 ${
                      isLeft ? 'justify-end pr-10' : 'justify-start pl-10 order-3'
                    }`}
                  >
                    <motion.div
                      custom={isLeft}
                      variants={cardVariants}
                      className="w-full max-w-lg"
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  </div>

                  {/* Timeline dot - centered on desktop, left on mobile/tablet */}
                  <div className="flex-shrink-0 z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <TimelineDot inView={isInView} delay={index * 0.2 + 0.3} />
                  </div>

                  {/* Desktop: spacer for the other side */}
                  <div
                    className={`hidden lg:block lg:w-1/2 ${
                      isLeft ? 'order-3' : ''
                    }`}
                  />

                  {/* Mobile & Tablet: card always on the right of the dot */}
                  <div className="flex-1 lg:hidden">
                    <motion.div
                      custom={false}
                      variants={cardVariants}
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

function ExperienceCard({
  exp,
}: {
  exp: (typeof experience)[number];
}) {
  return (
    <GlassCard className="p-6 hover:border-[#4F46E5]/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.08)] transition-all duration-500 group">
      {/* Duration badge */}
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
        }}
      >
        {exp.duration}
      </span>

      <h3
        className="text-xl font-bold bg-clip-text text-transparent mb-1"
        style={{
          backgroundImage: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
        }}
      >
        {exp.role}
      </h3>
      <p className="text-[#E2E8F0] font-medium text-sm mb-4">
        {exp.company}
      </p>

      {/* Responsibilities */}
      <ul className="space-y-2 mb-5">
        {exp.responsibilities.map((resp, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[#94A3B8] text-sm leading-relaxed"
          >
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #00E5FF)' }}
            />
            {resp}
          </li>
        ))}
      </ul>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2">
        {(exp.techStack ?? exp.technologies ?? []).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-medium text-[#94A3B8] border border-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-[#4F46E5]/30 hover:text-[#E2E8F0]"
            style={{ background: 'rgba(15, 23, 42, 0.8)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
