import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'enterprise-inventory',
    title: 'Enterprise Inventory Management Platform',
    problem:
      'A mid-size logistics company needed real-time inventory tracking across 12 warehouses with role-based access control and audit logging.',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Azure'],
    impact:
      'Reduced inventory discrepancies by 40% and saved 20+ hours/week of manual reconciliation.',
    githubUrl: 'https://github.com/miramarcos',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'ai-document-processing',
    title: 'AI-Powered Document Processing API',
    problem:
      'A financial services client needed automated extraction and classification of unstructured documents at scale.',
    stack: ['Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Azure Functions'],
    impact:
      'Processed 10,000+ documents/day with 94% accuracy, replacing a full manual review team.',
    githubUrl: 'https://github.com/miramarcos',
    demoUrl: '#',
  },
  {
    id: 'saas-client-portal',
    title: 'SaaS Client Portal with Real-Time Analytics',
    problem:
      'Multiple clients needed a unified self-service portal with live KPI dashboards and automated reporting.',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    impact: 'Onboarded 15 enterprise clients, reduced support tickets by 60%.',
    githubUrl: 'https://github.com/miramarcos',
    demoUrl: '#',
  },
  {
    id: 'scheduling-booking-system',
    title: 'Multi-Tenant Scheduling & Booking System',
    problem:
      'A healthcare services company needed a HIPAA-aware scheduling platform supporting multiple clinic locations.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Azure', 'REST APIs'],
    impact: 'Replaced 3 legacy systems, now serving 5,000+ monthly bookings.',
    githubUrl: 'https://github.com/miramarcos',
    demoUrl: '#',
  },
];
