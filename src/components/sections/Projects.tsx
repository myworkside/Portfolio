'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  GlassCard,
  MagneticButton,
  SectionHeading,
  ScrollReveal,
} from '@/components/ui';
import { projects } from '@/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Bg accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.04]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl opacity-[0.04]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10 w-full">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="What I've been building"
          />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <GlassCard className="h-full flex flex-col overflow-hidden group hover:border-[#4F46E5]/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.1)] hover:-translate-y-1 transition-all duration-500">
                {/* Top accent gradient bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88, transparent)`,
                  }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#E2E8F0] mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(project.techStack ?? project.technologies ?? []).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300"
                        style={{
                          color: project.accentColor,
                          borderColor: `${project.accentColor}30`,
                          background: `${project.accentColor}08`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#94A3B8] text-xs leading-relaxed"
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: project.accentColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <MagneticButton>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#E2E8F0] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:border-[#4F46E5]/40 hover:text-white hover:bg-[#4F46E5]/10"
                        style={{ background: 'rgba(15, 23, 42, 0.6)' }}
                      >
                        <FaGithub className="text-sm" />
                        GitHub
                      </a>
                    </MagneticButton>
                    {project.liveUrl && (
                      <MagneticButton>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                          style={{
                            background:
                              'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                          }}
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          Live Demo
                        </a>
                      </MagneticButton>
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
