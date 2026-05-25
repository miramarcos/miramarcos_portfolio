export interface Project {
  id: string;
  title: string;
  problem: string;
  stack: string[];
  impact: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'cloud' | 'apis' | 'ai';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon: string;
  skills: string[];
  color: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
