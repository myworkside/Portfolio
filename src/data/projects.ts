import type { Project } from '@/types';

export const projects: Project[] = [
  // ── 1. IronCrypt — Secure File Management Application (CV Project 1) ─────
  {
    id: 'ironcrypt',
    title: 'IronCrypt',
    subtitle: 'Secure File Management Application',
    description:
      'A privacy-focused Android application designed for secure offline file management, featuring offline-first architecture and a modern Material Design interface.',
    longDescription:
      'IronCrypt is a privacy-first Android application built to give users complete control over their sensitive files. Developed using modern Kotlin and Android Studio with an offline-first architecture, IronCrypt ensures zero unauthorized network leakage. It features a secure file management workflow, modular and scalable project structure, and is thoroughly optimized for high performance and maintainability.',
    technologies: [
      'Kotlin',
      'Android Studio',
      'Material Design 3',
      'Git',
      'GitHub',
    ],
    features: [
      'Offline-first architecture ensuring maximum data privacy and zero cloud leakage',
      'Secure file management workflow with encrypted local storage',
      'Modern Material Design 3 interface with dynamic theming',
      'Modular and scalable project structure following Clean Architecture',
      'Optimized for high performance and long-term maintainability',
    ],
    githubUrl: 'https://github.com/myworkside/IronCrypt',
    stars: 12,
    license: 'MIT',
    topics: [
      'android',
      'kotlin',
      'security',
      'file-manager',
      'privacy',
      'material-design',
    ],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #00E5FF 100%)',
    status: 'active',
    featured: true,
  },

  // ── 2. Universal File Editor & Viewer (CV Project 2) ─────────────────────
  {
    id: 'universal-file-editor-viewer',
    title: 'Universal File Editor & Viewer',
    subtitle: 'Multi-Format Modular Desktop & File Utility',
    description:
      'Application designed to view and manage multiple file formats using a modular architecture with offline functionality and extensible design.',
    longDescription:
      'Universal File Editor & Viewer is designed to view and manage multiple file formats using a clean, modular architecture. Developed with Java and managed via Git and GitHub, it provides robust multi-format file support, complete offline functionality, and an extensible design pattern that allows easy expansion for additional file types.',
    technologies: [
      'Java',
      'Git',
      'GitHub',
      'Modular Architecture',
    ],
    features: [
      'Multi-format file support for viewing and managing diverse file structures',
      'Modular architecture ensuring clean separation of parsing and UI layers',
      '100% offline functionality — operates securely without external connectivity',
      'Extensible design supporting streamlined integration of new format handlers',
    ],
    githubUrl: 'https://github.com/myworkside/UniversalFileEditorViewer',
    stars: 10,
    license: 'MIT',
    topics: [
      'java',
      'desktop-app',
      'file-viewer',
      'modular-architecture',
      'offline',
    ],
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #00E5FF 100%)',
    status: 'maintained',
    featured: true,
  },
];
