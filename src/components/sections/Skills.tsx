'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAndroid,
  FaCode,
  FaDatabase,
  FaFigma,
  FaVideo,
  FaPaintBrush,
} from 'react-icons/fa';
import {
  SiKotlin,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiJetpackcompose,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiAndroidstudio,
  SiSqlite,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { skillCategories } from '@/data';

const iconMap: Record<string, IconType> = {
  Java: FaJava,
  Kotlin: SiKotlin,
  'C++': SiCplusplus,
  C: SiC,
  Python: FaPython,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  'Jetpack Compose': SiJetpackcompose,
  'XML Layouts': FaAndroid,
  MVVM: FaCode,
  'Room Database': FaDatabase,
  Retrofit: FaCode,
  CameraX: FaAndroid,
  'Material Design 3': FaAndroid,
  Firebase: SiFirebase,
  'Android SDK': FaAndroid,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Tailwind CSS': SiTailwindcss,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'Android Studio': SiAndroidstudio,
  'VS Code': FaCode,
  Figma: FaFigma,
  Docker: FaDocker,
  Linux: FaLinux,
  Gradle: FaCode,
  SQLite: SiSqlite,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  'Firebase Realtime DB': SiFirebase,
  Room: FaDatabase,
  'Adobe Photoshop': FaFigma,
  'Video Editing': FaVideo,
  'UI/UX Design': FaFigma,
  Canva: FaPaintBrush,
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const categories = skillCategories.map((cat) => cat.title);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const activeGroup =
    skillCategories.find((cat) => cat.title === activeCategory) ??
    skillCategories[0];
  const filteredSkills = activeGroup ? activeGroup.skills : [];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full relative py-28 md:py-36 lg:py-[160px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Technical Arsenal"
            subtitle="Skills & Capabilities"
            align="center"
          />
        </ScrollReveal>

        {/* Centered Tabs — mb-16 */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-full text-[15px] font-medium ${
                  activeCategory === cat
                    ? 'text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                    : 'text-[#94A3B8] border border-white/10'
                }`}
                style={
                  activeCategory === cat
                    ? {
                        background:
                          'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                      }
                    : { background: 'rgba(255, 255, 255, 0.03)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 4 equal cards per row Desktop (lg:grid-cols-4), 2 Tablet (sm:grid-cols-2), 1 Mobile, gap-8 */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch w-full"
            >
              {filteredSkills.map((skill, i) => {
                const Icon = iconMap[skill.name] || FaCode;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full"
                  >
                    {/* Equal height 180px, padding p-7 */}
                    <GlassCard className="p-7 h-[180px] flex flex-col justify-between w-full">
                      {/* Top: Icon + Name */}
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10"
                          style={{
                            background: `${skill.color}15`,
                          }}
                        >
                          <Icon
                            className="text-2xl"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <h3 className="text-white font-bold text-[18px] line-clamp-1">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Progress Bar Perfectly Aligned */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[13px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                            Proficiency
                          </span>
                          <span className="text-sm font-bold text-[#00E5FF]">
                            {skill.proficiency ?? 80}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                'linear-gradient(90deg, #4F46E5, #00E5FF)',
                            }}
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.proficiency ?? 80}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 0.8,
                              delay: 0.15 + i * 0.04,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </div>
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

export default Skills;
