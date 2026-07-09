'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiKotlin,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiPostgresql,
  SiAndroid,
  SiJetpackcompose,
  SiGit,
  SiAndroidstudio,
  SiGoogle,
} from 'react-icons/si';
import {
  HiOutlineCommandLine,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineCamera,
  HiOutlineDocumentText,
  HiOutlineTableCells,
  HiOutlinePresentationChartBar,
  HiOutlineFilm,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineAcademicCap,
} from 'react-icons/hi2';
import { FaJava } from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { skillCategories } from '@/data/skills';
import type { Skill } from '@/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
const iconMap: Record<string, any> = {
  // Programming
  Kotlin: SiKotlin,
  Java: FaJava,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,

  // Android
  'Android Studio': SiAndroidstudio,
  'Android SDK': SiAndroid,
  XML: HiOutlineCodeBracket,
  'Material Design': HiOutlineSparkles,
  CameraX: HiOutlineCamera,
  'Google ML Kit': SiGoogle,

  // Tools
  Git: SiGit,
  GitHub: SiGit,
  'Visual Studio Code': HiOutlineCodeBracket,

  // Office
  'Microsoft Word': HiOutlineDocumentText,
  'Microsoft Excel': HiOutlineTableCells,
  'Microsoft PowerPoint': HiOutlinePresentationChartBar,

  // Creative
  'Adobe Photoshop': HiOutlineSparkles,
  'Adobe Premiere Pro': HiOutlineFilm,
  'DaVinci Resolve': HiOutlineFilm,

  // Core Competencies
  'Android Application Development': SiAndroid,
  'Software Engineering Fundamentals': HiOutlineCpuChip,
  'Warehouse Operations': HiOutlineCube,
  'Inventory Management': HiOutlineClipboardDocumentCheck,
  'Data Analysis': HiOutlineChartBar,
  'Process Optimization': HiOutlineCog6Tooth,
  'Problem Solving': HiOutlineLightBulb,
  'Team Collaboration': HiOutlineUsers,
  'Time Management': HiOutlineClock,
  Adaptability: HiOutlineSparkles,
  'Continuous Learning': HiOutlineAcademicCap,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

function SkillProgressBar({ proficiency, inView }: { proficiency: number; inView: boolean }) {
  return (
    <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: 'linear-gradient(90deg, #4F46E5, #00E5FF)',
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </div>
  );
}

export default function Skills() {
  const categories = useMemo(() => skillCategories.map((cat) => cat.title), []);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] ?? 'Programming Languages'
  );
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeCategoryData = useMemo(
    () => skillCategories.find((s) => s.title === activeCategory) ?? skillCategories[0],
    [activeCategory]
  );

  const filteredSkills = activeCategoryData?.skills ?? [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Bg accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl opacity-[0.04]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technical Skills & Core Competencies from my CV"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border"
                style={{
                  background:
                    activeCategory === cat
                      ? 'linear-gradient(135deg, #4F46E5, #8B5CF6)'
                      : 'rgba(15, 23, 42, 0.6)',
                  borderColor:
                    activeCategory === cat
                      ? 'transparent'
                      : 'rgba(255, 255, 255, 0.06)',
                  color: activeCategory === cat ? '#ffffff' : '#94A3B8',
                  boxShadow:
                    activeCategory === cat
                      ? '0 0 25px rgba(79, 70, 229, 0.3)'
                      : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {filteredSkills.map((skill, i) => {
                const Icon = iconMap[skill.name];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <GlassCard className="p-5 group hover:border-[#4F46E5]/30 hover:shadow-[0_0_25px_rgba(79,70,229,0.08)] transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        {Icon ? (
                          <Icon className="text-xl text-[#4F46E5] group-hover:text-[#00E5FF] transition-colors duration-300 flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded bg-[#4F46E5]/20 flex-shrink-0" />
                        )}
                        <h3 className="text-[#E2E8F0] font-semibold text-sm group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <span className="ml-auto text-xs font-bold text-[#00E5FF]">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <SkillProgressBar
                        proficiency={skill.proficiency}
                        inView={isInView}
                      />
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
