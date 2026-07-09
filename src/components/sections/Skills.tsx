'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaLinux,
  FaDatabase,
  FaAndroid,
  FaMobileAlt,
  FaCode,
  FaTools,
  FaPalette,
  FaServer,
  FaWrench,
} from 'react-icons/fa';
import {
  SiKotlin,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSqlite,
  SiAndroidstudio,
  SiPostman,
} from 'react-icons/si';
import { GlassCard, SectionHeading, ScrollReveal } from '@/components/ui';
import { skills as skillCategories } from '@/data';

const iconMap: Record<string, React.ReactNode> = {
  Java: <FaJava className="text-2xl text-[#E76F00]" />,
  Kotlin: <SiKotlin className="text-2xl text-[#7F52FF]" />,
  'C++': <FaCode className="text-2xl text-[#00599C]" />,
  C: <FaCode className="text-2xl text-[#A8B9CC]" />,
  Python: <FaPython className="text-2xl text-[#3776AB]" />,
  JavaScript: <FaJs className="text-2xl text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-2xl text-[#3178C6]" />,
  SQL: <FaDatabase className="text-2xl text-[#00E5FF]" />,
  XML: <FaCode className="text-2xl text-[#FF6600]" />,
  'Jetpack Compose': <FaAndroid className="text-2xl text-[#4285F4]" />,
  'XML Layouts': <FaMobileAlt className="text-2xl text-[#3DDC84]" />,
  MVVM: <FaCode className="text-2xl text-[#4F46E5]" />,
  'Room Database': <FaDatabase className="text-2xl text-[#00E5FF]" />,
  Retrofit: <FaServer className="text-2xl text-[#8B5CF6]" />,
  CameraX: <FaMobileAlt className="text-2xl text-[#3DDC84]" />,
  'Material Design 3': <FaPalette className="text-2xl text-[#7F52FF]" />,
  'Material Design': <FaPalette className="text-2xl text-[#7F52FF]" />,
  Firebase: <SiFirebase className="text-2xl text-[#FFCA28]" />,
  'Android SDK': <FaAndroid className="text-2xl text-[#3DDC84]" />,
  HTML: <FaHtml5 className="text-2xl text-[#E34F26]" />,
  HTML5: <FaHtml5 className="text-2xl text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-2xl text-[#1572B6]" />,
  CSS3: <FaCss3Alt className="text-2xl text-[#1572B6]" />,
  React: <FaReact className="text-2xl text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-2xl text-white" />,
  'Node.js': <FaNodeJs className="text-2xl text-[#339933]" />,
  'Tailwind CSS': <SiTailwindcss className="text-2xl text-[#06B6D4]" />,
  Git: <FaGitAlt className="text-2xl text-[#F05032]" />,
  GitHub: <FaGithub className="text-2xl text-white" />,
  'Android Studio': <SiAndroidstudio className="text-2xl text-[#3DDC84]" />,
  'VS Code': <FaCode className="text-2xl text-[#007ACC]" />,
  'Visual Studio Code': <FaCode className="text-2xl text-[#007ACC]" />,
  Postman: <SiPostman className="text-2xl text-[#FF6C37]" />,
  Figma: <FaFigma className="text-2xl text-[#F24E1E]" />,
  Docker: <FaDocker className="text-2xl text-[#2496ED]" />,
  Linux: <FaLinux className="text-2xl text-[#FCC624]" />,
  Gradle: <FaWrench className="text-2xl text-[#02303A]" />,
  SQLite: <SiSqlite className="text-2xl text-[#003B57]" />,
  MySQL: <SiMysql className="text-2xl text-[#4479A1]" />,
  MongoDB: <SiMongodb className="text-2xl text-[#47A248]" />,
  'Firebase Realtime DB': <SiFirebase className="text-2xl text-[#FFCA28]" />,
  Room: <FaDatabase className="text-2xl text-[#00E5FF]" />,
  'Adobe Photoshop': <FaPalette className="text-2xl text-[#31A8FF]" />,
  'Video Editing': <FaPalette className="text-2xl text-[#FF61F6]" />,
  'UI/UX Design': <FaPalette className="text-2xl text-[#A78BFA]" />,
  Canva: <FaPalette className="text-2xl text-[#00C4CC]" />,
  'MS Word': <FaTools className="text-2xl text-[#2B579A]" />,
  'MS Excel': <FaTools className="text-2xl text-[#217346]" />,
  'MS PowerPoint': <FaTools className="text-2xl text-[#D24726]" />,
};

export function Skills() {
  const categories = skillCategories.map((c) => c.title);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const activeGroup =
    skillCategories.find((c) => c.title === activeCategory) ||
    skillCategories[0];
  const filteredSkills = activeGroup ? activeGroup.skills : [];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5] rounded-full blur-[160px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="My Technical Arsenal"
          />
        </ScrollReveal>

        {/* Category Pills Filter */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                    : 'text-[#94A3B8] hover:text-white border border-white/[0.08] hover:border-white/20'
                }`}
                style={
                  activeCategory === cat
                    ? {
                        background:
                          'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                      }
                    : { background: 'rgba(15, 23, 42, 0.4)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
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
                      delay: i * 0.05,
                    }}
                    className="h-full"
                  >
                    <GlassCard className="p-5 h-full flex flex-col justify-between group hover:border-[#4F46E5]/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {Icon || (
                              <FaCode className="text-xl text-[#00E5FF]" />
                            )}
                          </div>
                          <span className="font-semibold text-[#E2E8F0] text-sm group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#00E5FF]">
                          {skill.proficiency ?? 80}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
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
                            duration: 1,
                            delay: 0.2 + i * 0.05,
                            ease: 'easeOut',
                          }}
                        />
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
