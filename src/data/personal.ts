import type { PersonalInfo, Stat } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Sumit Mondal',
  title: 'Android Developer & Software Engineer',
  tagline:
    'Building secure, scalable Android applications & efficient operational solutions',
  bio: [
    'Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing. Proven ability to develop secure, scalable Android applications while maintaining operational excellence in fast-paced environments.',
    'Strong foundation in Kotlin, Java, Android Studio, Git, and modern software development practices, complemented by practical experience in inventory management and logistics coordination. Passionate about solving real-world problems through technology and continuously improving technical and professional skills.',
  ],
  mission:
    'To contribute to an innovative organization where I can apply my technical expertise in Android development along with my operational experience in logistics and warehouse management to build efficient solutions, improve business processes, and grow as a software professional.',
  vision:
    'To build world-class mobile experiences and software automation tools that bridge the gap between physical operations and high-tech digital workflows.',
  email: 'mondalsumit6966@gmail.com',
  phone: '+91 7432838409',
  location: 'Itachuna, Hooghly, West Bengal, India',
  resumeUrl: '#',
  avatarUrl: '/avatar.png',
  firstName: 'Sumit',
  lastName: 'Mondal',
  roles: [
    'Android Developer',
    'Software Developer',
    'Kotlin Developer',
    'Java Developer',
    'Warehouse Operations Executive',
    'Logistics Professional',
    'Graphic Designer',
    'Video Editor',
  ],
  social: {
    github: 'https://github.com/myworkside',
    linkedin: 'https://linkedin.com/in/sumitwork',
    instagram: 'https://instagram.com/sumitupdat',
  },
  stats: {
    yearsExperience: 3,
    projectsCompleted: 20,
    githubStars: 15,
    happyClients: 10,
  },
  highlights: [
    {
      year: 'Android Dev',
      title: 'Secure Mobile Architectures',
      description:
        'Developed offline-first applications like IronCrypt with modern Material Design and clean modular structures.',
    },
    {
      year: 'Operations',
      title: 'Logistics & WMS Excellence',
      description:
        'Practical expertise with Warehouse Management Systems, barcode scanners, and high-accuracy data workflows.',
    },
    {
      year: 'Creative',
      title: 'Digital Branding & Media',
      description:
        'Professional experience in graphic design and commercial video editing for digital campaigns.',
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
    {
      platform: 'Instagram',
      url: 'https://instagram.com/sumitupdat',
      icon: 'SiInstagram',
      username: 'sumitupdat',
      color: '#E4405F',
    },
  ],
};

// ─── Standalone stats array for the counter section ──────────────────────────

export const stats: Stat[] = [
  {
    label: 'Years Experience',
    value: personalInfo.stats.yearsExperience ?? 3,
    suffix: '+',
    icon: 'HiOutlineBriefcase',
  },
  {
    label: 'Projects Completed',
    value:
      personalInfo.stats.projectsCompleted ??
      personalInfo.stats.projects ??
      20,
    suffix: '+',
    icon: 'HiOutlineCode',
  },
  {
    label: 'GitHub Stars',
    value: personalInfo.stats.githubStars ?? 15,
    suffix: '+',
    icon: 'HiOutlineStar',
  },
  {
    label: 'Happy Clients & Teams',
    value: personalInfo.stats.happyClients ?? 10,
    suffix: '+',
    icon: 'HiOutlineUsers',
  },
];
