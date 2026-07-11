'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { projects } from '@/data';

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full relative py-28 md:py-36 lg:py-[160px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Featured Works"
            subtitle="Engineered Excellence"
            align="center"
          />
        </ScrollReveal>

        {/* Award-Level 2-Column Grid: equal widths, gap-10, my-8 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch my-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="w-full h-full"
            >
              <GlassCard className="h-full flex flex-col overflow-hidden group border border-white/10">
                {/* Showcase Top — Visual Architectural Showcase Area */}
                <div
                  className="relative h-56 sm:h-64 w-full flex-shrink-0 overflow-hidden border-b border-white/10"
                  style={{
                    background: `linear-gradient(135deg, ${project.color || '#4F46E5'}30 0%, #050816 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-85" />
                </div>

                {/* Content Bottom with 40px desktop padding */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[13px] font-bold uppercase tracking-widest text-[#00E5FF] px-3.5 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10">
                        Featured Work
                      </span>
                      <span className="text-[13px] text-[#94A3B8] font-mono">
                        {project.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-5 leading-[1.3]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#94A3B8] text-[16px] leading-[1.85] mt-[18px] mb-[18px]">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills with 12px gap and 28px top margin */}
                    <div className="flex flex-wrap gap-3 mt-[28px] mb-8">
                      {(project.technologies ?? project.techStack ?? project.topics ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-[#E2E8F0]"
                          style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons with mt-auto and 28px top padding */}
                  <div className="flex items-center gap-4 mt-auto pt-[28px] border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/[0.06] border border-white/15 hover:bg-white/[0.1] transition-colors"
                      >
                        <FaGithub className="text-base" />
                        Source Code
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md shadow-[#4F46E5]/20 border border-white/15 hover:opacity-95 transition-opacity"
                        style={{
                          background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                        }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
