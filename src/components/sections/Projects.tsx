'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { projects } from '@/data';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const featuredProjects = projects.filter((p) => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Bg accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.04]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl opacity-[0.04]" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="What I've been building"
          />
        </ScrollReveal>

        {/* Desktop: 3 Equal Columns, Tablet: 2 Columns, Mobile: 1 Column with Equal Height Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <GlassCard className="h-full flex flex-col justify-between overflow-hidden group hover:border-[#4F46E5]/40 transition-all duration-500">
                {/* Top accent gradient bar */}
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}88, transparent)`,
                  }}
                />

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#E2E8F0] mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#94A3B8] text-sm leading-relaxed min-h-[48px] mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights / Features */}
                    {project.features && project.features.length > 0 && (
                      <ul className="space-y-1.5 mb-6">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-xs text-[#E2E8F0] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex flex-col justify-end">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(project.techStack ?? project.technologies ?? project.topics ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#00E5FF] border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                        >
                          <FaGithub className="text-sm" />
                          Source Code
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-[#00E5FF] hover:text-white transition-colors ml-auto"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Repository
                        </a>
                      )}
                    </div>
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
