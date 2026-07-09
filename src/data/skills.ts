import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  // ── Programming Languages ────────────────────────────────────────────────
  {
    title: 'Programming Languages',
    icon: 'HiOutlineCommandLine',
    description:
      'Programming languages listed in my technical skillset.',
    skills: [
      { name: 'Kotlin', icon: 'SiKotlin', proficiency: 92, color: '#7F52FF' },
      { name: 'Java', icon: 'SiOpenjdk', proficiency: 90, color: '#ED8B00' },
      { name: 'JavaScript', icon: 'SiJavascript', proficiency: 82, color: '#F7DF1E' },
      { name: 'HTML5', icon: 'SiHtml5', proficiency: 88, color: '#E34F26' },
      { name: 'CSS3', icon: 'SiCss3', proficiency: 85, color: '#1572B6' },
    ],
  },

  // ── Android Development ──────────────────────────────────────────────────
  {
    title: 'Android Development',
    icon: 'SiAndroid',
    description:
      'Native Android tooling and SDK experience.',
    skills: [
      { name: 'Android Studio', icon: 'SiAndroidstudio', proficiency: 92, color: '#3DDC84' },
      { name: 'Android SDK', icon: 'SiAndroid', proficiency: 90, color: '#34A853' },
      { name: 'XML', icon: 'HiOutlineCode', proficiency: 88, color: '#F89820' },
      { name: 'Material Design', icon: 'SiMaterialdesign', proficiency: 88, color: '#757575' },
      { name: 'CameraX', icon: 'HiOutlineCamera', proficiency: 85, color: '#4285F4' },
      { name: 'Google ML Kit', icon: 'SiGoogle', proficiency: 80, color: '#4285F4' },
    ],
  },

  // ── Development Tools ────────────────────────────────────────────────────
  {
    title: 'Development Tools',
    icon: 'HiOutlineCodeBracket',
    description:
      'Source control and development IDEs.',
    skills: [
      { name: 'Git', icon: 'SiGit', proficiency: 88, color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', proficiency: 90, color: '#FFFFFF' },
      { name: 'Visual Studio Code', icon: 'SiVisualstudiocode', proficiency: 88, color: '#007ACC' },
    ],
  },

  // ── Microsoft Office ─────────────────────────────────────────────────────
  {
    title: 'Microsoft Office',
    icon: 'HiOutlineBriefcase',
    description:
      'Office productivity suites.',
    skills: [
      { name: 'Microsoft Word', icon: 'HiOutlineDocumentText', proficiency: 90, color: '#2B579A' },
      { name: 'Microsoft Excel', icon: 'HiOutlineTableCells', proficiency: 88, color: '#217346' },
      { name: 'Microsoft PowerPoint', icon: 'HiOutlinePresentationChartBar', proficiency: 85, color: '#D24726' },
    ],
  },

  // ── Creative Tools ───────────────────────────────────────────────────────
  {
    title: 'Creative Tools',
    icon: 'HiOutlineSparkles',
    description:
      'Graphic design and video editing tools.',
    skills: [
      { name: 'Adobe Photoshop', icon: 'SiAdobephotoshop', proficiency: 85, color: '#31A8FF' },
      { name: 'Adobe Premiere Pro', icon: 'SiAdobepremierepro', proficiency: 82, color: '#9999FF' },
      { name: 'DaVinci Resolve', icon: 'HiOutlineFilm', proficiency: 80, color: '#FF5722' },
    ],
  },

  // ── Core Competencies ────────────────────────────────────────────────────
  {
    title: 'Core Competencies',
    icon: 'HiOutlineCheckBadge',
    description:
      'Core competencies from my CV.',
    skills: [
      { name: 'Android Application Development', icon: 'SiAndroid', proficiency: 92, color: '#3DDC84' },
      { name: 'Software Engineering Fundamentals', icon: 'HiOutlineCpuChip', proficiency: 88, color: '#4F46E5' },
      { name: 'Warehouse Operations', icon: 'HiOutlineCube', proficiency: 92, color: '#00E5FF' },
      { name: 'Inventory Management', icon: 'HiOutlineClipboardDocumentCheck', proficiency: 90, color: '#34A853' },
      { name: 'Data Analysis', icon: 'HiOutlineChartBar', proficiency: 85, color: '#8B5CF6' },
      { name: 'Process Optimization', icon: 'HiOutlineCog6Tooth', proficiency: 88, color: '#F59E0B' },
      { name: 'Problem Solving', icon: 'HiOutlineLightBulb', proficiency: 90, color: '#EC4899' },
      { name: 'Team Collaboration', icon: 'HiOutlineUsers', proficiency: 92, color: '#10B981' },
      { name: 'Time Management', icon: 'HiOutlineClock', proficiency: 90, color: '#06B6D4' },
      { name: 'Adaptability', icon: 'HiOutlineSparkles', proficiency: 92, color: '#14B8A6' },
      { name: 'Continuous Learning', icon: 'HiOutlineAcademicCap', proficiency: 90, color: '#A855F7' },
    ],
  },
];
