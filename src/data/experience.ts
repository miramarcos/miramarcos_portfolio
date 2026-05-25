import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'techcorp',
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp Solutions',
    period: '2022 – Present',
    description:
      'Led development of enterprise web applications used by 50,000+ users. Architected microservices APIs consumed by 8 downstream systems.',
    highlights: [
      'Architected and delivered a multi-tenant SaaS platform from 0 to 50,000+ active users',
      'Designed microservices APIs consumed by 8 downstream systems across the organization',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Mentored 3 junior engineers and established team coding standards',
    ],
  },
  {
    id: 'digital-agency',
    role: 'Full-Stack Developer',
    company: 'Digital Agency Pro',
    period: '2020 – 2022',
    description:
      'Built and delivered 12+ client projects across healthcare, logistics, and finance verticals.',
    highlights: [
      'Delivered 12+ production applications across healthcare, logistics, and finance industries',
      'Integrated complex third-party APIs including payment gateways, EHR systems, and ERPs',
      'Built real-time data dashboards handling thousands of concurrent users',
      'Collaborated directly with clients to translate business needs into technical solutions',
    ],
  },
  {
    id: 'startuphub',
    role: 'Junior Developer',
    company: 'StartupHub',
    period: '2019 – 2020',
    description:
      'Gained foundational experience building React SPAs and Node.js backends in a fast-paced startup environment.',
    highlights: [
      'Developed React single-page applications with RESTful API integrations',
      'Built and maintained Node.js backend services and database schemas',
      'Contributed to agile sprints and participated in code reviews',
      'Rapidly iterated on features based on user feedback and analytics',
    ],
  },
];
