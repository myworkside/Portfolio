export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  avatarUrl: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  stats: {
    yearsExperience: number;
    projects: number;
    githubStars: number;
    happyClients: number;
  };
  mission: string;
  vision: string;
  highlights: CareerHighlight[];
}

export interface CareerHighlight {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  icon?: string;
}

export type SkillCategory =
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'DevOps'
  | 'Tools'
  | 'Design';

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  accentColor: string;
  featured: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
