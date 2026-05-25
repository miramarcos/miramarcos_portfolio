import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'corporate-website-platform',
    title: 'Multi-Country Corporate Website Platform',
    problem:
      'A global company needed a unified yet localized web presence across multiple countries, with content editors managing region-specific content independently.',
    stack: ['C#', 'Kentico', 'React.js', 'SQL', 'Azure DevOps', 'CI/CD'],
    impact:
      'Delivered a scalable multi-country website platform supporting multiple locales, enabling content editors to manage and publish independently per region.',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'crm-system',
    title: 'Enterprise CRM Application',
    problem:
      'The internal team needed a robust CRM to manage client relationships, with both content editing capabilities and custom backend features.',
    stack: ['C#', 'Kentico', 'SQL', 'Azure DevOps', 'CI/CD'],
    impact:
      'Delivered backend and frontend CRM features on demand, streamlining client data management and improving content editor workflows.',
    demoUrl: '#',
  },
  {
    id: 'client-systems-suite',
    title: 'Full-Stack Client Systems Suite',
    problem:
      'A client had 300+ accumulated backlog items spanning web apps, APIs, desktop apps, and internal tools with no clear path to delivery.',
    stack: ['Blazor Web Assembly', 'ASP.NET Core', 'C#', 'WinForms', 'SQL', 'JavaScript', 'jQuery', 'CI/CD'],
    impact:
      'Cleared and deployed 300+ backlog items across websites, web applications, APIs, and desktop apps using Agile and CI/CD practices.',
    demoUrl: '#',
  },
  {
    id: 'etl-azure-automation',
    title: 'ETL Automation & Azure Pipeline Management',
    problem:
      'Manual data processing and inconsistent deployments were causing reporting inaccuracies and slowing down release cycles across environments.',
    stack: ['C#', '.NET', 'Windows Services', 'Azure DevOps', 'SQL', 'Azure Pipelines'],
    impact:
      'Automated ETL workflows via Windows Services, improving reporting accuracy, and managed Azure Pipeline deployments across non-production and production environments.',
    demoUrl: '#',
  },
];
