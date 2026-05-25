import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    icon: 'Monitor',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Blazor Web Assembly', 'Razor Components', 'jQuery', 'AJAX', 'Bootstrap', 'BlazorStrap', 'SASS / SCSS'],
    color: 'from-blue-500/20 to-blue-600/5',
    accentColor: '#3B82F6',
  },
  {
    category: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'Blazor Server', 'Node.js', 'Express.js', 'PHP', 'Kentico', 'WinForms'],
    color: 'from-purple-500/20 to-purple-600/5',
    accentColor: '#8B5CF6',
  },
  {
    category: 'database',
    label: 'Databases',
    icon: 'Database',
    skills: ['SQL Server', 'MySQL', 'MongoDB', 'Supabase'],
    color: 'from-green-500/20 to-green-600/5',
    accentColor: '#10B981',
  },
  {
    category: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['Azure DevOps', 'CI/CD Pipelines', 'Git & GitHub', 'Agile & Scrum', 'JIRA', 'Confluence', 'ServiceNow'],
    color: 'from-orange-500/20 to-orange-600/5',
    accentColor: '#F59E0B',
  },
  {
    category: 'apis',
    label: 'Testing & Tools',
    icon: 'Plug',
    skills: ['REST APIs', 'Unit Testing (MSTest, Moq)', 'Microsoft Office Suite', 'Basic Troubleshooting'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    accentColor: '#06B6D4',
  },
  {
    category: 'ai',
    label: 'Design & UI Tools',
    icon: 'Cpu',
    skills: ['Figma', 'Canva', 'Adobe Photoshop', 'AI Tools'],
    color: 'from-pink-500/20 to-pink-600/5',
    accentColor: '#EC4899',
  },
];
