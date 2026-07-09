import type { Project } from '@/types';

export const projects: Project[] = [
  // ── 1. IronCrypt ────────────────────────────────────────────────────────
  {
    id: 'ironcrypt',
    title: 'IronCrypt',
    subtitle: 'Privacy-focused Android application for secure offline file management',
    description:
      'Privacy-focused Android application for secure offline file management.',
    longDescription:
      'Privacy-focused Android application for secure offline file management built with Kotlin and Android Studio. Features an offline-first architecture, secure file management, modern Material Design, scalable architecture, and high performance.',
    technologies: [
      'Kotlin',
      'Android Studio',
      'Material Design',
      'Git',
      'GitHub',
    ],
    features: [
      'Offline-first architecture',
      'Secure file management',
      'Modern Material Design',
      'Scalable architecture',
      'High performance',
    ],
    githubUrl: 'https://github.com/myworkside/IronCrypt',
    stars: 12,
    license: 'MIT',
    topics: [
      'android',
      'kotlin',
      'security',
      'file-management',
      'offline-first',
    ],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #00E5FF 100%)',
    status: 'active',
    featured: true,
  },

  // ── 2. Universal File Editor & Viewer ───────────────────────────────────
  {
    id: 'universal-file-editor-viewer',
    title: 'Universal File Editor & Viewer',
    subtitle: 'Desktop application designed to view and manage multiple file formats',
    description:
      'Desktop application designed to view and manage multiple file formats.',
    longDescription:
      'Desktop application designed to view and manage multiple file formats built with Java. Provides multi-format support, modular architecture, complete offline functionality, and an extensible design.',
    technologies: [
      'Java',
      'Git',
      'GitHub',
    ],
    features: [
      'Multi-format support',
      'Modular architecture',
      'Offline functionality',
      'Extensible design',
    ],
    githubUrl: 'https://github.com/myworkside/UniversalFileEditorViewer',
    stars: 10,
    license: 'MIT',
    topics: [
      'java',
      'desktop-app',
      'file-editor',
      'modular-architecture',
    ],
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #00E5FF 100%)',
    status: 'maintained',
    featured: true,
  },
];
