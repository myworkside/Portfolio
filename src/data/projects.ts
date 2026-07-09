import type { Project } from '@/types';

export const projects: Project[] = [
  // ── 1. IronCrypt ────────────────────────────────────────────────────────
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
      'Android SDK',
      'Coroutines',
      'Room Database',
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

  // ── 2. UniversalFileEditorViewer ─────────────────────────────────────────
  {
    id: 'universal-file-editor-viewer',
    title: 'UniversalFileEditorViewer',
    subtitle: 'All-in-One Android File Manager',
    description:
      'A feature-packed Android file manager that combines file viewing, editing, a private vault, wireless sharing, storage analysis, and developer tools into a single, beautifully crafted application.',
    longDescription:
      'UniversalFileEditorViewer is the Swiss Army knife of Android file management. Built entirely with Kotlin and Jetpack Compose, it follows the MVVM architecture pattern to keep the codebase clean and testable. Users can browse, view, and edit virtually any file type — from documents and images to code files — all within one app. The integrated Private Vault uses biometric and PIN-based encryption to keep sensitive files secure. Wireless file sharing lets users transfer files across devices on the same network without cables, while the built-in Storage Analyzer provides detailed breakdowns of disk usage with interactive charts.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'MVVM',
      'Room Database',
      'Material Design 3',
      'Coroutines',
      'Hilt',
    ],
    features: [
      'Browse, view, and edit files with syntax highlighting for 30+ languages',
      'Private Vault with biometric authentication and AES-256 encryption',
      'Wireless file sharing via Wi-Fi Direct and local HTTP server',
      'Storage Analyzer with interactive pie-charts and duplicate finder',
      'Developer tools — JSON/XML formatter, hex editor, log viewer',
    ],
    githubUrl: 'https://github.com/myworkside/UniversalFileEditorViewer',
    stars: 10,
    license: 'MIT',
    topics: [
      'android',
      'kotlin',
      'developer-tools',
      'file-explorer',
      'file-manager',
      'android-app',
      'jetpack-compose',
    ],
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #00E5FF 100%)',
    status: 'maintained',
    featured: true,
  },

  // ── 3. MotionCountingApp ─────────────────────────────────────────────────
  {
    id: 'motion-counting-app',
    title: 'MotionCountingApp',
    subtitle: 'Real-Time Motion Counter with CameraX',
    description:
      'An Android app built with Kotlin and CameraX that counts movements in real time using a live camera preview — great for fitness tracking, manufacturing QA, and experimental computer-vision projects.',
    longDescription:
      'MotionCountingApp leverages the CameraX API and frame-by-frame image analysis to detect and count movements captured through the device camera in real time. The algorithm compares consecutive frames using pixel-intensity differencing and contour detection to isolate meaningful motion events from background noise.',
    technologies: [
      'Kotlin',
      'CameraX',
      'Android SDK',
      'Coroutines',
      'Material Design 3',
    ],
    features: [
      'Real-time motion detection via CameraX Image Analysis pipeline',
      'Configurable sensitivity slider for different use-case environments',
      'Live camera preview with translucent counter overlay',
      'On-device processing — fully offline, no cloud dependency',
    ],
    githubUrl: 'https://github.com/myworkside/MotionCountingApp',
    color: '#00E5FF',
    gradient: 'linear-gradient(135deg, #00E5FF 0%, #4F46E5 100%)',
    status: 'completed',
    featured: true,
  },

  // ── 4. CountingApp ───────────────────────────────────────────────────────
  {
    id: 'counting-app',
    title: 'CountingApp',
    subtitle: 'Simple & Elegant Counting Tool',
    description:
      'A clean, user-friendly Android counting tool that helps users count, track numbers, and manage tasks efficiently — built with Java for maximum device compatibility.',
    longDescription:
      'CountingApp is a minimalist yet thoughtful counting utility designed for everyday use. Whether you are tracking inventory, counting laps, logging daily habits, or managing counts, the app provides a frictionless experience with accessible tap targets and persistent state.',
    technologies: [
      'Java',
      'Android SDK',
      'XML Layouts',
      'SharedPreferences',
      'Material Design',
    ],
    features: [
      'Increment, decrement, and reset with large accessible tap targets',
      'Multiple independent counters with custom labels and colours',
      'Persistent state via SharedPreferences — never lose a count',
      'Lightweight APK (< 3 MB) compatible with Android 5.0+',
    ],
    githubUrl: 'https://github.com/myworkside/CountingApp',
    color: '#34A853',
    gradient: 'linear-gradient(135deg, #34A853 0%, #4285F4 100%)',
    status: 'completed',
    featured: false,
  },
];
