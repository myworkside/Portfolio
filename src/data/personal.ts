import type { PersonalInfo, Stat } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Sumit Mondal',
  title: 'Android Application Developer | Warehouse Operations & Logistics Professional',
  tagline:
    'Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing.',
  bio: [
    'Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing. Proven ability to develop secure, scalable Android applications while maintaining operational excellence in fast-paced environments.',
    'Strong foundation in Kotlin, Java, Android Studio, Git, and modern software development practices, complemented by practical experience in inventory management and logistics coordination. Passionate about solving real-world problems through technology and continuously improving technical and professional skills.',
  ],
  mission:
    'To contribute to an innovative organization where I can apply my technical expertise in Android development along with my operational experience in logistics and warehouse management to build efficient solutions, improve business processes, and grow as a software professional.',
  vision:
    'To contribute to an innovative organization where I can apply my technical expertise in Android development along with my operational experience in logistics and warehouse management to build efficient solutions, improve business processes, and grow as a software professional.',
  email: 'mondalsumit6966@gmail.com',
  phone: '+91 7432838409',
  location: 'Itachuna, Hooghly, West Bengal, India',
  resumeUrl: '#',
  avatarUrl: '/avatar.png',
  firstName: 'Sumit',
  lastName: 'Mondal',
  roles: [
    'Android Application Developer',
    'Warehouse Operations Professional',
    'Logistics Coordinator',
    'Data Entry Operator (DEO)',
    'Graphic Designer',
    'Video Editor',
  ],
  social: {
    github: 'https://github.com/myworkside',
    linkedin: 'https://linkedin.com/in/sumitwork',
  },
  stats: {
    projects: 2,
    roles: 6,
    competencies: 11,
    strengths: 8,
  },
  highlights: [
    {
      year: 'Android Dev',
      title: 'Android Application Development',
      description:
        'Featured projects IronCrypt and Universal File Editor & Viewer built with Kotlin, Java, Android Studio, Material Design, and Git.',
    },
    {
      year: 'Operations',
      title: 'Warehouse Operations & Logistics',
      description:
        'Hands-on operational experience at Flipkart, Myntra, and SKD Transport with Warehouse Management Systems (WMS), barcode scanners, and fleet coordination.',
    },
    {
      year: 'Creative',
      title: 'Graphic Design & Video Editing',
      description:
        'Professional creative experience at Life Changing Physical Academy and Unique Images Studio using Adobe Photoshop, Premiere Pro, and DaVinci Resolve.',
    },
  ],
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/myworkside',
      icon: 'SiGithub',
      username: 'myworkside',
      color: '#6e5494',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/sumitwork',
      icon: 'SiLinkedin',
      username: 'sumitwork',
      color: '#0A66C2',
    },
  ],
};

// ─── Standalone stats array strictly from CV facts ──────────────────────────

export const stats: Stat[] = [
  {
    label: 'Work Experiences Listed',
    value: 6,
    suffix: '',
    icon: 'HiOutlineBriefcase',
  },
  {
    label: 'Featured Projects',
    value: 2,
    suffix: '',
    icon: 'HiOutlineCode',
  },
  {
    label: 'Core Competencies',
    value: 11,
    suffix: '',
    icon: 'HiOutlineCheckBadge',
  },
  {
    label: 'Technical Skill Domains',
    value: 5,
    suffix: '',
    icon: 'HiOutlineAcademicCap',
  },
];
