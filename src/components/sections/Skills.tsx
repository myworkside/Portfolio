'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiKotlin,
  SiDart,
  SiCplusplus,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiAndroid,
  SiJetpackcompose,
  SiFlutter,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiAndroidstudio,
  SiFigma,
  SiPostman,
} from 'react-icons/si';
import {
  FaPaintBrush,
  FaSearch,
  FaDraftingCompass,
  FaLayerGroup,
  FaMobile,
  FaCode,
  FaJava,
  FaAws,
} from 'react-icons/fa';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { skills } from '@/data';
import type { SkillCategory } from '@/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
const iconMap: Record<string, any> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Kotlin: SiKotlin,
  Java: FaJava,
  Dart: SiDart,
  'C++': SiCplusplus,
  Rust: SiRust,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'HTML/CSS': SiHtml5,
  'Vue.js': SiVuedotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  GraphQL: SiGraphql,
  'Android (Kotlin)': SiAndroid,
  'Jetpack Compose': SiJetpackcompose,
  Flutter: SiFlutter,
  'React Native': FaMobile,
  Docker: SiDocker,
  'Git & GitHub': SiGit,
  'CI/CD': SiGithubactions,
  AWS: FaAws,
  Linux: SiLinux,
  'VS Code': FaCode,
  'Android Studio': SiAndroidstudio,
  Figma: SiFigma,
  Postman: SiPostman,
  'UI Design': FaPaintBrush,
  'UX Research': FaSearch,
  Prototyping: FaDraftingCompass,
  'Design Systems': FaLayerGroup,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const categories: string[] = [
  'Programming',
  'Frontend',
  'Backend',
  'Mobile',
  'DevOps',
  'Tools',
  'Design',
];

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
  const [activeCategory, setActiveCategory] = useState<string>('Programming');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredSkills = useMemo(
    () => skills.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionHeading title="Skills & Expertise" subtitle="What I bring to the table" />
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
