export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

export interface SocialLinkItem {
  platform: string;
  url: string;
  icon: string;
  username: string;
  color: string;
}

export interface PersonalInfo {
  name: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  roles?: string[];
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  resumeUrl?: string;
  avatarUrl?: string;
  social?: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  socials?: SocialLinkItem[] | Record<string, string>;
  stats: {
    yearsExperience?: number;
    projects?: number;
    projectsCompleted?: number;
    githubStars?: number;
    happyClients?: number;
  };
  mission?: string;
  vision?: string;
  highlights?: CareerHighlight[];
}

export interface CareerHighlight {
  year: string;
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  icon?: string;
  color?: string;
}

export interface SkillCategoryGroup {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export type SkillCategory = SkillCategoryGroup | string;

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  color?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration?: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
  technologies?: string[];
  logo?: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  techStack?: string[];
  technologies?: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  accentColor?: string;
  color?: string;
  stars?: number;
  license?: string;
  gradient?: string;
  topics?: string[];
  status?: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  sectionId?: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  sectionId?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
