import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'android-software-dev',
    role: 'Android Application Developer',
    company: 'Independent & Open Source Projects',
    location: 'Hooghly, West Bengal, India',
    startDate: '2024',
    endDate: 'Present',
    description:
      'Architecting secure, privacy-focused Android applications and file utilities using Kotlin, Java, and modern Android development practices.',
    responsibilities: [
      'Engineered IronCrypt, a privacy-focused Android application with offline-first architecture for secure local file management.',
      'Developed UniversalFileEditorViewer, an all-in-one file utility with MVVM architecture, Jetpack Compose, and Room Database.',
      'Built MotionCountingApp utilizing CameraX Image Analysis for real-time on-device movement detection.',
      'Applied clean architecture principles, Material Design UI/UX guidelines, and thorough version control using Git & GitHub.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'Android Studio',
      'Jetpack Compose',
      'XML Layouts',
      'Material Design 3',
      'CameraX',
      'Git',
      'GitHub',
    ],
    icon: 'HiOutlineCode',
  },
  {
    id: 'flipkart-minutes-picker',
    role: 'Minutes Picker & WMS Specialist',
    company: 'Flipkart',
    location: 'India',
    startDate: '2023',
    endDate: '2024',
    description:
      'Processed high-velocity customer orders using advanced Warehouse Management Systems (WMS) and handheld barcode scanning hardware.',
    responsibilities: [
      'Processed customer orders using Warehouse Management Systems (WMS) and handheld barcode scanners.',
      'Verified product quality, quantity, and SKU information before packing and dispatch.',
      'Coordinated with packing and dispatch teams to ensure timely order fulfillment.',
      'Maintained strict inventory accuracy while consistently achieving daily productivity targets.',
    ],
    technologies: [
      'Warehouse Management Systems (WMS)',
      'Barcode Scanners',
      'SKU Verification',
      'Inventory Tracking',
      'Safety Protocols',
    ],
    icon: 'HiOutlineBriefcase',
  },
  {
    id: 'flipkart-deo',
    role: 'Data Entry Operator (DEO)',
    company: 'Flipkart',
    location: 'India',
    startDate: '2022',
    endDate: '2023',
    description:
      'Managed high-volume operational data with exceptional accuracy, supporting real-time warehouse analytics and record maintenance.',
    responsibilities: [
      'Managed high-volume operational data with exceptional accuracy and attention to detail.',
      'Maintained structured digital records and operational documentation.',
      'Verified data quality and generated reports supporting warehouse operations.',
      'Assisted in improving documentation accuracy and workflow efficiency.',
    ],
    technologies: [
      'Microsoft Excel',
      'Operational Reporting',
      'Data Quality Assurance',
      'Digital Documentation',
    ],
    icon: 'HiOutlineDatabase',
  },
  {
    id: 'myntra-warehouse',
    role: 'Warehouse Assistant',
    company: 'Myntra',
    location: 'India',
    startDate: '2021',
    endDate: '2022',
    description:
      'Supported inventory management and warehouse operations within e-commerce fulfillment centers.',
    responsibilities: [
      'Supported inventory management and warehouse operations.',
      'Assisted in order processing, sorting, packing, and dispatch workflows.',
      'Worked collaboratively with warehouse teams to ensure operational efficiency.',
    ],
    technologies: [
      'Inventory Management',
      'Order Fulfillment',
      'Sorting & Dispatch',
      'Team Collaboration',
    ],
    icon: 'HiOutlineCube',
  },
  {
    id: 'creative-designer',
    role: 'Graphic Designer & Video Editor',
    company: 'Life Changing Physical Academy & Unique Images Studio',
    location: 'India',
    startDate: '2020',
    endDate: '2022',
    description:
      'Designed marketing materials, promotional graphics, and commercial creative content for digital marketing campaigns.',
    responsibilities: [
      'Designed marketing materials, promotional graphics, and social media creatives.',
      'Edited promotional videos for digital campaigns using Adobe Premiere Pro and DaVinci Resolve.',
      'Produced branding materials and commercial creative content while meeting strict deadlines.',
    ],
    technologies: [
      'Adobe Photoshop',
      'Adobe Premiere Pro',
      'DaVinci Resolve',
      'Graphic Design',
      'Video Editing',
    ],
    icon: 'HiOutlineSparkles',
  },
];
