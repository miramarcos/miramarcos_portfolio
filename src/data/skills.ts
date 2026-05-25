import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite'],
    color: 'from-blue-500/20 to-blue-600/5',
    accentColor: '#3B82F6',
  },
  {
    category: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
    color: 'from-purple-500/20 to-purple-600/5',
    accentColor: '#8B5CF6',
  },
  {
    category: 'database',
    label: 'Databases',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Data Modeling'],
    color: 'from-green-500/20 to-green-600/5',
    accentColor: '#10B981',
  },
  {
    category: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['Microsoft Azure', 'CI/CD Pipelines', 'Docker', 'Git'],
    color: 'from-orange-500/20 to-orange-600/5',
    accentColor: '#F59E0B',
  },
  {
    category: 'apis',
    label: 'APIs & Integrations',
    icon: 'Plug',
    skills: ['REST APIs', 'Third-Party Integrations', 'Webhooks'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    accentColor: '#06B6D4',
  },
  {
    category: 'ai',
    label: 'AI-Assisted Dev',
    icon: 'Cpu',
    skills: ['Claude AI', 'AI-Augmented Workflows', 'Rapid Prototyping'],
    color: 'from-pink-500/20 to-pink-600/5',
    accentColor: '#EC4899',
  },
];
