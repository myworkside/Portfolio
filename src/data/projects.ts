import type { Project } from '@/types';

export const projects: Project[] = [
  // ── 1. UniversalFileEditorViewer ─────────────────────────────────────────
  {
    id: 'universal-file-editor-viewer',
    title: 'UniversalFileEditorViewer',
    subtitle: 'All-in-One Android File Manager',
    description:
      'A feature-packed Android file manager that combines file viewing, editing, a private vault, wireless sharing, storage analysis, and developer tools into a single, beautifully crafted application.',
    longDescription:
      'UniversalFileEditorViewer is the Swiss Army knife of Android file management. Built entirely with Kotlin and Jetpack Compose, it follows the MVVM architecture pattern to keep the codebase clean and testable. Users can browse, view, and edit virtually any file type — from documents and images to code files — all within one app. The integrated Private Vault uses biometric and PIN-based encryption to keep sensitive files secure. Wireless file sharing lets users transfer files across devices on the same network without cables, while the built-in Storage Analyzer provides detailed breakdowns of disk usage with interactive charts. Developer tools round out the package with a JSON/XML pretty-printer, a log viewer, and a hex editor.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'MVVM',
      'Room Database',
      'Material Design 3',
      'Coroutines',
      'Hilt',
      'CameraX',
      'Work Manager',
    ],
    features: [
      'Browse, view, and edit files with syntax highlighting for 30+ languages',
      'Private Vault with biometric authentication and AES-256 encryption',
      'Wireless file sharing via Wi-Fi Direct and local HTTP server',
      'Storage Analyzer with interactive pie-charts and duplicate finder',
      'Developer tools — JSON/XML formatter, hex editor, log viewer',
      'Material Design 3 dynamic theming with dark/light mode support',
      'Batch file operations — rename, move, copy, compress, share',
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
    color: '#4285F4',
    gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
    status: 'maintained',
  },

  // ── 2. MotionCountingApp ─────────────────────────────────────────────────
  {
    id: 'motion-counting-app',
    title: 'MotionCountingApp',
    subtitle: 'Real-Time Motion Counter with CameraX',
    description:
      'An Android app built with Kotlin and CameraX that counts movements in real time using a live camera preview — great for fitness tracking, manufacturing QA, and experimental computer-vision projects.',
    longDescription:
      'MotionCountingApp leverages the CameraX API and frame-by-frame image analysis to detect and count movements captured through the device camera in real time. The algorithm compares consecutive frames using pixel-intensity differencing and contour detection to isolate meaningful motion events from background noise. A configurable sensitivity slider lets users fine-tune detection thresholds for different environments — from high-speed gym reps to slow assembly-line movements. The clean, minimal UI keeps the live camera preview front-and-centre with an overlay counter that updates instantly. All processing happens on-device with zero cloud dependency, making the app fully offline-capable and privacy-friendly.',
    technologies: [
      'Kotlin',
      'CameraX',
      'Jetpack Compose',
      'Image Analysis API',
      'Coroutines',
      'Material Design 3',
    ],
    features: [
      'Real-time motion detection via CameraX Image Analysis pipeline',
      'Configurable sensitivity slider for different use-case environments',
      'Live camera preview with translucent counter overlay',
      'On-device processing — fully offline, no cloud dependency',
      'Minimal, distraction-free Material Design 3 interface',
      'Session history with timestamps and total count log',
    ],
    githubUrl: 'https://github.com/myworkside/MotionCountingApp',
    color: '#EA4335',
    gradient: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)',
    status: 'completed',
  },

  // ── 3. CountingApp ───────────────────────────────────────────────────────
  {
    id: 'counting-app',
    title: 'CountingApp',
    subtitle: 'Simple & Elegant Counting Tool',
    description:
      'A clean, user-friendly Android counting tool that helps users count, track numbers, and manage tasks efficiently — built with Java for maximum device compatibility.',
    longDescription:
      'CountingApp is a minimalist yet thoughtful counting utility designed for everyday use. Whether you\'re tracking inventory, counting laps, logging daily habits, or managing prayer/meditation counts, the app provides a frictionless experience with large tap targets, haptic feedback, and a soothing interface. Built with Java and the classic Android View system, it runs smoothly even on older devices and lower-end hardware. Users can create multiple independent counters, each with a custom label and colour, and the app persists state across sessions so no count is ever lost. Despite its simplicity, the app demonstrates solid engineering practices — proper lifecycle handling, efficient SharedPreferences usage, and a clean MVC separation.',
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
      'Haptic and sound feedback on each tap for tactile confirmation',
      'Lightweight APK (< 3 MB) compatible with Android 5.0+',
      'Clean, soothing UI with dark mode support',
    ],
    githubUrl: 'https://github.com/myworkside/CountingApp',
    color: '#34A853',
    gradient: 'linear-gradient(135deg, #34A853 0%, #4285F4 100%)',
    status: 'completed',
  },
];
