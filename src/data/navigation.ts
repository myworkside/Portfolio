export interface NavLinkItem {
  label: string;
  href: string;
  icon?: string;
  sectionId?: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
  icon: 'github' | 'linkedin';
}

export interface ContactInfoItem {
  email: string;
  phone: string;
  location: string;
}

export const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home', icon: 'HiOutlineHome' },
  { label: 'About', href: '#about', sectionId: 'about', icon: 'HiOutlineUser' },
  { label: 'Skills', href: '#skills', sectionId: 'skills', icon: 'HiOutlineSparkles' },
  { label: 'Experience', href: '#experience', sectionId: 'experience', icon: 'HiOutlineBriefcase' },
  { label: 'Projects', href: '#projects', sectionId: 'projects', icon: 'HiOutlineRocketLaunch' },
  { label: 'Contact', href: '#contact', sectionId: 'contact', icon: 'HiOutlineEnvelope' },
];

export const socialLinks: SocialLinkItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/myworkside',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sumitwork',
    icon: 'linkedin',
  },
];

export const contactInfo: ContactInfoItem = {
  email: 'mondalsumit6966@gmail.com',
  phone: '+91 7432838409',
  location: 'Itachuna, Hooghly, West Bengal, India',
};
