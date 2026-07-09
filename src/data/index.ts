import type { PersonalInfo, Skill, Experience, Project, NavItem } from '@/types';

export const personal: PersonalInfo = {
  name: 'Sumit Mondal',
  firstName: 'Sumit',
  lastName: 'Mondal',
  roles: [
    'Android Developer',
    'Software Engineer',
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Open Source Contributor',
  ],
  tagline:
    'Crafting exceptional digital experiences with clean code and creative design. Passionate about building products that make a difference.',
  bio: [
    'I am a passionate software engineer with a deep love for building elegant, performant applications. With expertise spanning Android development, full-stack web engineering, and UI/UX design, I bring a holistic approach to every project I undertake.',
    'My journey in tech began with a curiosity about how things work under the hood. Over the years, that curiosity has evolved into a career dedicated to pushing the boundaries of what\'s possible with modern technology. I specialize in crafting seamless user experiences backed by robust, scalable architectures.',
    'When I\'m not coding, you\'ll find me contributing to open-source projects, exploring new frameworks, or sharing knowledge with the developer community. I believe in the power of collaboration and continuous learning to drive innovation.',
  ],
  email: 'sumitmondal@example.com',
  phone: '+91 98765 43210',
  location: 'Kolkata, India',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/avatar.jpg',
  social: {
    github: 'https://github.com/sumitmondal',
    linkedin: 'https://linkedin.com/in/sumitmondal',
    instagram: 'https://instagram.com/sumitmondal',
    twitter: 'https://twitter.com/sumitmondal',
  },
  stats: {
    yearsExperience: 4,
    projects: 30,
    githubStars: 520,
    happyClients: 15,
  },
  mission:
    'To create technology that empowers people and solves real-world problems through elegant, accessible software.',
  vision:
    'A world where technology seamlessly enhances human potential and creativity.',
  highlights: [
    {
      year: '2022',
      title: 'Started Professional Journey',
      description: 'Joined as a Software Engineer, diving deep into Android & full-stack development.',
    },
    {
      year: '2023',
      title: 'Open Source Contributor',
      description: 'Started actively contributing to open-source projects and building developer tools.',
    },
    {
      year: '2024',
      title: 'Tech Lead',
      description: 'Led a team of developers to deliver high-impact mobile and web applications.',
    },
    {
      year: '2025',
      title: 'Freelance & Consulting',
      description: 'Expanded into freelance consulting, helping startups build scalable products.',
    },
  ],
};

export const skills: Skill[] = [
  // Programming
  { name: 'TypeScript', category: 'Programming', proficiency: 90 },
  { name: 'JavaScript', category: 'Programming', proficiency: 92 },
  { name: 'Python', category: 'Programming', proficiency: 80 },
  { name: 'Kotlin', category: 'Programming', proficiency: 88 },
  { name: 'Java', category: 'Programming', proficiency: 85 },
  { name: 'Dart', category: 'Programming', proficiency: 75 },
  { name: 'C++', category: 'Programming', proficiency: 70 },
  { name: 'Rust', category: 'Programming', proficiency: 55 },

  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 92 },
  { name: 'Next.js', category: 'Frontend', proficiency: 88 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95 },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 82 },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 95 },
  { name: 'Vue.js', category: 'Frontend', proficiency: 65 },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 85 },
  { name: 'Express.js', category: 'Backend', proficiency: 82 },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 78 },
  { name: 'MongoDB', category: 'Backend', proficiency: 80 },
  { name: 'Firebase', category: 'Backend', proficiency: 88 },
  { name: 'GraphQL', category: 'Backend', proficiency: 72 },

  // Mobile
  { name: 'Android (Kotlin)', category: 'Mobile', proficiency: 92 },
  { name: 'Jetpack Compose', category: 'Mobile', proficiency: 88 },
  { name: 'Flutter', category: 'Mobile', proficiency: 78 },
  { name: 'React Native', category: 'Mobile', proficiency: 75 },

  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 78 },
  { name: 'Git & GitHub', category: 'DevOps', proficiency: 92 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 75 },
  { name: 'AWS', category: 'DevOps', proficiency: 68 },
  { name: 'Linux', category: 'DevOps', proficiency: 80 },

  // Tools
  { name: 'VS Code', category: 'Tools', proficiency: 95 },
  { name: 'Android Studio', category: 'Tools', proficiency: 92 },
  { name: 'Figma', category: 'Tools', proficiency: 78 },
  { name: 'Postman', category: 'Tools', proficiency: 85 },

  // Design
  { name: 'UI Design', category: 'Design', proficiency: 80 },
  { name: 'UX Research', category: 'Design', proficiency: 72 },
  { name: 'Prototyping', category: 'Design', proficiency: 75 },
  { name: 'Design Systems', category: 'Design', proficiency: 78 },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechCorp Solutions',
    role: 'Senior Android Developer',
    duration: 'Jan 2025 - Present',
    startDate: '2025-01',
    endDate: 'Present',
    description: 'Leading Android development for enterprise mobile applications.',
    responsibilities: [
      'Architected and led the development of a flagship Android app serving 500K+ users',
      'Implemented Jetpack Compose migration reducing UI code by 40%',
      'Mentored junior developers and conducted code reviews',
      'Established CI/CD pipelines for automated testing and deployment',
      'Collaborated with cross-functional teams to define product roadmaps',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Coroutines', 'Firebase'],
  },
  {
    id: 'exp-2',
    company: 'InnovateTech',
    role: 'Full-Stack Developer',
    duration: 'Jun 2023 - Dec 2024',
    startDate: '2023-06',
    endDate: '2024-12',
    description: 'Built and maintained full-stack web and mobile applications.',
    responsibilities: [
      'Developed and deployed 5+ production web applications using React and Next.js',
      'Built RESTful APIs and microservices with Node.js and Express',
      'Designed and implemented database schemas for PostgreSQL and MongoDB',
      'Integrated third-party services and payment gateways',
      'Improved application performance by 60% through optimization techniques',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    id: 'exp-3',
    company: 'StartupHub',
    role: 'Software Engineer',
    duration: 'Aug 2022 - May 2023',
    startDate: '2022-08',
    endDate: '2023-05',
    description: 'Core team member building innovative mobile-first solutions.',
    responsibilities: [
      'Developed Android applications using Kotlin and MVVM architecture',
      'Implemented responsive web interfaces with React and Tailwind CSS',
      'Wrote comprehensive unit and integration tests achieving 85% coverage',
      'Participated in agile ceremonies and sprint planning',
      'Contributed to open-source libraries used by the development community',
    ],
    techStack: ['Kotlin', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Jest'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'DevConnect',
    description:
      'A developer social network platform with real-time messaging, code sharing, and collaborative project management features.',
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Real-time messaging and code collaboration',
      'Project matching based on skills and interests',
      'Integrated code editor with syntax highlighting',
      'Developer portfolio generation',
    ],
    githubUrl: 'https://github.com/sumitmondal/devconnect',
    liveUrl: 'https://devconnect-demo.vercel.app',
    accentColor: '#4F46E5',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'HealthTrack Pro',
    description:
      'A comprehensive Android health & fitness app with workout tracking, meal planning, and AI-powered health insights.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'ML Kit', 'Firebase', 'Hilt'],
    features: [
      'AI-powered workout recommendations',
      'Nutritional analysis with camera scanning',
      'Progress tracking with beautiful charts',
      'Social challenges and leaderboards',
    ],
    githubUrl: 'https://github.com/sumitmondal/healthtrack-pro',
    accentColor: '#00E5FF',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'CloudNote',
    description:
      'A beautiful, privacy-first note-taking app with end-to-end encryption, markdown support, and cross-platform sync.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Hive', 'Provider'],
    features: [
      'End-to-end encryption for all notes',
      'Rich markdown editor with live preview',
      'Cross-platform sync (Android, iOS, Web)',
      'Offline-first architecture',
    ],
    githubUrl: 'https://github.com/sumitmondal/cloudnote',
    liveUrl: 'https://cloudnote-app.vercel.app',
    accentColor: '#8B5CF6',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'TaskFlow',
    description:
      'An intelligent project management tool with Kanban boards, time tracking, and automated workflow pipelines.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Drag-and-drop Kanban boards',
      'Automated workflow triggers',
      'Time tracking and analytics dashboard',
      'Team collaboration and role management',
    ],
    githubUrl: 'https://github.com/sumitmondal/taskflow',
    liveUrl: 'https://taskflow-demo.vercel.app',
    accentColor: '#F59E0B',
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'EcoScan',
    description:
      'An environmental awareness app that uses ML to identify recyclable materials and track carbon footprint.',
    techStack: ['Kotlin', 'TensorFlow Lite', 'CameraX', 'Firebase', 'Maps SDK'],
    features: [
      'ML-powered material recognition',
      'Carbon footprint calculator',
      'Nearby recycling center finder',
      'Community challenges and rewards',
    ],
    githubUrl: 'https://github.com/sumitmondal/ecoscan',
    accentColor: '#10B981',
    featured: true,
  },
  {
    id: 'proj-6',
    title: 'PortfolioCraft',
    description:
      'A developer portfolio generator that creates beautiful, responsive portfolio websites from a simple JSON config.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
    features: [
      'One-click portfolio generation',
      'Multiple premium themes',
      'Blog integration with MDX',
      'SEO optimized with analytics',
    ],
    githubUrl: 'https://github.com/sumitmondal/portfoliocraft',
    liveUrl: 'https://portfoliocraft.vercel.app',
    accentColor: '#EC4899',
    featured: false,
  },
];

export const navigation: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
