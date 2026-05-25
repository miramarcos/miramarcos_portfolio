import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'delaware',
    role: 'Full Stack Developer',
    company: 'delaware Philippines',
    period: 'May 2025 – Present',
    description:
      'Builds and maintains multi-country company websites and internal applications using C#, Kentico, SQL, and React.js, handling both frontend and backend of the CRM while managing CI/CD pipelines and coordinating testing to ensure compliance with industry standards.',
    highlights: [
      'Develops and maintains company websites across multiple countries using C#, Kentico, SQL, and React.js',
      'Works on both backend and frontend of company CRM to deliver features requested by content editors',
      'Manages build and release pipelines using Agile and DevOps methodologies with CI/CD practices',
      'Coordinates testing and validation to ensure compliance with industry standards',
    ],
  },
  {
    id: 'agile-tech-ops',
    role: 'Full Stack Developer',
    company: 'Agile Tech Ops – UCPM',
    period: 'April 2024 – May 2025',
    description:
      'Delivered a wide range of client-facing systems — websites, web apps, APIs, and desktop applications — using the .NET ecosystem (Blazor, ASP.NET Core, C#, WinForms) and front-end technologies, while applying Agile and CI/CD practices that enabled the team to ship over 300 backlog items.',
    highlights: [
      'Built websites, web apps, APIs, and desktop applications using Blazor, ASP.NET Core, C#, WinForms, and SQL',
      'Implemented unit tests with Moq and MSTest to ensure component-level reliability',
      'Leveraged Agile and CI/CD practices to help the team clear and deploy 300+ client backlog items',
      'Coordinated testing and validation to meet industry compliance standards',
    ],
  },
  {
    id: 'accenture-manulife',
    role: 'Custom Application Development Analyst',
    company: 'Accenture PH – Manulife',
    period: 'Feb 2023 – March 2024',
    description:
      'Supported IT operations by onboarding and training new staff, managing employee records and reimbursements in Workday and Fieldglass, and collaborating cross-functionally to efficiently resolve software, hardware, and operational challenges.',
    highlights: [
      'Facilitated onboarding and technical training for new IT staff',
      'Managed employee records, reimbursements, and data in Workday and Fieldglass',
      'Collaborated with teams to address and resolve software, hardware, and operational issues',
    ],
  },
  {
    id: 'accenture-cio',
    role: 'Application Development Analyst',
    company: 'Accenture PH – CIO Social Apps',
    period: 'June 2022 – Feb 2023',
    description:
      'Designed, developed, and maintained software solutions for clients and end users, managed Azure Pipeline deployments across environments, and automated ETL workflows through Windows Services to improve reporting accuracy.',
    highlights: [
      'Designed, developed, and maintained software solutions ensuring smooth functionality for clients',
      'Managed Azure Pipeline deployments across non-production and production environments',
      'Automated data extraction, transformation, and loading (ETL) via Windows Services to enhance reporting accuracy',
      'Conducted training sessions and helped clients troubleshoot software and hardware issues',
    ],
  },
  {
    id: 'accenture-social',
    role: 'Application Development Associate',
    company: 'Accenture PH – Social Collab Apps',
    period: 'Dec 2020 – June 2022',
    description:
      'Built and maintained internal collaboration and reporting applications, developed APIs and stored procedures to optimize data management, and created tooling to extract and report on employee engagement data.',
    highlights: [
      'Developed and maintained internal applications for team communication, collaboration, and reporting',
      'Designed APIs and stored procedures to improve data retrieval, integration, and processing',
      'Built a solution for extracting employee follower data, improving reporting accuracy and account management',
    ],
  },
];
