import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  // ── Programming Languages ────────────────────────────────────────────────
  {
    title: 'Programming Languages',
    icon: 'HiOutlineCommandLine',
    description:
      'Core languages I use daily — from systems programming to modern app development.',
    skills: [
      { name: 'Kotlin', icon: 'SiKotlin', proficiency: 92, color: '#7F52FF' },
      { name: 'Java', icon: 'SiOpenjdk', proficiency: 90, color: '#ED8B00' },
      {
        name: 'JavaScript',
        icon: 'SiJavascript',
        proficiency: 82,
        color: '#F7DF1E',
      },
      { name: 'C++', icon: 'SiCplusplus', proficiency: 80, color: '#00599C' },
      { name: 'SQL', icon: 'SiPostgresql', proficiency: 80, color: '#4169E1' },
      { name: 'C', icon: 'SiC', proficiency: 78, color: '#A8B9CC' },
      {
        name: 'TypeScript',
        icon: 'SiTypescript',
        proficiency: 78,
        color: '#3178C6',
      },
      { name: 'Python', icon: 'SiPython', proficiency: 75, color: '#3776AB' },
    ],
  },

  // ── Android Development ──────────────────────────────────────────────────
  {
    title: 'Android Development',
    icon: 'SiAndroid',
    description:
      'My primary domain — native Android apps with cutting-edge Jetpack libraries.',
    skills: [
      {
        name: 'Jetpack Compose',
        icon: 'SiJetpackcompose',
        proficiency: 90,
        color: '#4285F4',
      },
      {
        name: 'Android SDK',
        icon: 'SiAndroid',
        proficiency: 90,
        color: '#34A853',
      },
      {
        name: 'MVVM Architecture',
        icon: 'SiArchlinux',
        proficiency: 88,
        color: '#1793D1',
      },
      {
        name: 'Material Design 3',
        icon: 'SiMaterialdesign',
        proficiency: 88,
        color: '#757575',
      },
      {
        name: 'XML Layouts',
        icon: 'SiAndroid',
        proficiency: 85,
        color: '#34A853',
      },
      {
        name: 'Room Database',
        icon: 'SiSqlite',
        proficiency: 82,
        color: '#003B57',
      },
      {
        name: 'Retrofit',
        icon: 'SiSquare',
        proficiency: 80,
        color: '#48B983',
      },
      { name: 'CameraX', icon: 'SiAndroid', proficiency: 78, color: '#34A853' },
      {
        name: 'Firebase',
        icon: 'SiFirebase',
        proficiency: 75,
        color: '#FFCA28',
      },
    ],
  },

  // ── Web Technologies ─────────────────────────────────────────────────────
  {
    title: 'Web Technologies',
    icon: 'HiOutlineGlobeAlt',
    description:
      'Full-stack web skills for building modern, responsive interfaces and APIs.',
    skills: [
      { name: 'HTML', icon: 'SiHtml5', proficiency: 88, color: '#E34F26' },
      { name: 'CSS', icon: 'SiCss3', proficiency: 85, color: '#1572B6' },
      {
        name: 'JavaScript',
        icon: 'SiJavascript',
        proficiency: 82,
        color: '#F7DF1E',
      },
      {
        name: 'Tailwind CSS',
        icon: 'SiTailwindcss',
        proficiency: 80,
        color: '#06B6D4',
      },
      { name: 'React', icon: 'SiReact', proficiency: 75, color: '#61DAFB' },
      {
        name: 'Next.js',
        icon: 'SiNextdotjs',
        proficiency: 70,
        color: '#ffffff',
      },
      {
        name: 'Node.js',
        icon: 'SiNodedotjs',
        proficiency: 68,
        color: '#5FA04E',
      },
    ],
  },

  // ── Tools & DevOps ───────────────────────────────────────────────────────
  {
    title: 'Tools & DevOps',
    icon: 'HiOutlineWrenchScrewdriver',
    description:
      'The developer toolkit — version control, editors, CI/CD, and containerisation.',
    skills: [
      {
        name: 'Android Studio',
        icon: 'SiAndroidstudio',
        proficiency: 92,
        color: '#3DDC84',
      },
      { name: 'GitHub', icon: 'SiGithub', proficiency: 88, color: '#6e5494' },
      { name: 'Git', icon: 'SiGit', proficiency: 85, color: '#F05032' },
      {
        name: 'VS Code',
        icon: 'SiVisualstudiocode',
        proficiency: 85,
        color: '#007ACC',
      },
      { name: 'Gradle', icon: 'SiGradle', proficiency: 80, color: '#02303A' },
      { name: 'Linux', icon: 'SiLinux', proficiency: 75, color: '#FCC624' },
      { name: 'Figma', icon: 'SiFigma', proficiency: 72, color: '#F24E1E' },
      { name: 'Docker', icon: 'SiDocker', proficiency: 65, color: '#2496ED' },
    ],
  },

  // ── Databases ────────────────────────────────────────────────────────────
  {
    title: 'Databases',
    icon: 'HiOutlineCircleStack',
    description:
      'Relational and NoSQL — from on-device SQLite to cloud-hosted solutions.',
    skills: [
      { name: 'SQLite', icon: 'SiSqlite', proficiency: 85, color: '#003B57' },
      { name: 'Room', icon: 'SiAndroid', proficiency: 82, color: '#34A853' },
      { name: 'MySQL', icon: 'SiMysql', proficiency: 80, color: '#4479A1' },
      {
        name: 'Firebase Realtime DB',
        icon: 'SiFirebase',
        proficiency: 75,
        color: '#FFCA28',
      },
      {
        name: 'MongoDB',
        icon: 'SiMongodb',
        proficiency: 70,
        color: '#47A248',
      },
    ],
  },

  // ── Creative & Design ────────────────────────────────────────────────────
  {
    title: 'Creative & Design',
    icon: 'HiOutlinePaintBrush',
    description:
      'Design sensibility that bridges aesthetics and usability.',
    skills: [
      { name: 'Canva', icon: 'SiCanva', proficiency: 80, color: '#00C4CC' },
      {
        name: 'UI/UX Design',
        icon: 'SiFigma',
        proficiency: 75,
        color: '#F24E1E',
      },
      { name: 'Figma', icon: 'SiFigma', proficiency: 72, color: '#F24E1E' },
      {
        name: 'Adobe Photoshop',
        icon: 'SiAdobephotoshop',
        proficiency: 68,
        color: '#31A8FF',
      },
      {
        name: 'Video Editing',
        icon: 'SiAdobepremierepro',
        proficiency: 65,
        color: '#9999FF',
      },
    ],
  },
];
