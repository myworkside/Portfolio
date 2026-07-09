import type { PersonalInfo, Stat } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Sumit Mondal',
  title: 'Android Developer & Software Engineer',
  tagline:
    'Building exceptional mobile experiences with modern Android technologies',
  bio: [
    'I\'m a passionate Android developer with deep expertise in Kotlin, Jetpack Compose, and the MVVM architecture pattern. I love turning complex problems into elegant, performant mobile applications that people genuinely enjoy using. From crafting pixel-perfect Material Design 3 interfaces to engineering robust data layers with Room and Retrofit, I treat every project as an opportunity to push the boundaries of what\'s possible on Android.',
    'Beyond mobile, I bring a full-stack mindset — comfortable working with C/C++, Python, JavaScript, and modern web frameworks like React and Next.js. My foundation in data structures, operating systems, and database management systems gives me the depth to architect solutions that are not just beautiful on the surface, but structurally sound under the hood. Whether it\'s a feature-rich file manager or a real-time motion-tracking camera app, I build software that solves real problems.',
  ],
  email: 'sumitmondal.dev@gmail.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India',
  stats: {
    yearsExperience: 2,
    projectsCompleted: 19,
    githubStars: 10,
    happyClients: 5,
  },
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
    value: personalInfo.stats.yearsExperience ?? 2,
    suffix: '+',
    icon: 'HiOutlineBriefcase',
  },
  {
    label: 'Projects Completed',
    value: personalInfo.stats.projectsCompleted ?? personalInfo.stats.projects ?? 19,
    suffix: '+',
    icon: 'HiOutlineCode',
  },
  {
    label: 'GitHub Stars',
    value: personalInfo.stats.githubStars ?? 10,
    suffix: '',
    icon: 'HiOutlineStar',
  },
  {
    label: 'Happy Clients',
    value: personalInfo.stats.happyClients ?? 5,
    suffix: '+',
    icon: 'HiOutlineUsers',
  },
];
