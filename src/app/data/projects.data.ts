export interface Project {
  title: string;
  company?: string;
  period?: string;
  featured?: boolean;
  description: string;
  highlights?: string[];
  tags: string[];
}

/**
 * Central project list. The first block keeps the existing SART showcase
 * projects; the resume projects follow right after (as requested).
 */
export const PROJECTS: Project[] = [
  // --- SART showcase projects (kept first) ---
  {
    title: 'SART - Security Assurance & Reporting Tool',
    company: 'Ericsson, Gurugram',
    period: 'Mar 2026 - Present',
    description:
      'A cloud-native platform that monitors and tracks Security Compliance across the entire project lifecycle - from pre-sales through deployment into customer environments. I served as the primary point of contact between India and US teams, coordinating requirements, feedback, and delivery schedules while facilitating daily and weekly calls for issue resolution. SART auto-syncs with Salesforce and Global Cronos to keep Opportunity Numbers and FAS IDs accurate, drives L-RA and SRM compliance activities, and connects development pipelines via the BCSS Pipeline to report compliance status in real time.',
    highlights: [
      'Primary point of contact between India and US teams, coordinating requirements, feedback, and delivery schedules for secure project execution',
      'Facilitated daily and weekly stakeholder meetings to resolve blockers and keep delivery on track',
      'Architected an end-to-end Security Compliance platform covering pre-sales to customer deployment, cutting manual compliance-tracking effort by ~50%',
      'Built automated data sync with Salesforce, Global Cronos and SharePoint to keep Opportunity Numbers, FAS IDs and L-RA data continuously accurate',
      'Designed multi-repo handling so multiple GitLab repositories map under a single FAS ID, with drill-down vulnerability and scan dashboards',
      'Integrated the BCSS pipeline so development pipelines report live compliance and SRM status throughout the SDLC',
      'Implemented L-RA and SRM workflows: create/edit/export L-RA reports, role-based visibility, opt-in/opt-out justification and dynamic form validation',
      'Engineered event-driven data flows with Spring Cloud Data Flow and containerized microservices on Docker + Kubernetes for scale and resilience',
      'Set up GitLab CI/CD pipelines with automated build, test and deployment, reducing release cycle time and operational cost significantly',
    ],
    tags: [
      'Java 17',
      'Spring Boot',
      'Angular 20',
      'PostgreSQL',
      'Spring Cloud Data Flow',
      'Docker',
      'Kubernetes',
      'GitLab CI/CD',
      'EDS',
    ],
  },
  {
    title: 'SART - AI / Glean Integration',
    company: 'Ericsson, Gurugram',
    period: 'Mar 2026 - Present',
    featured: true,
    description:
      'Integration of AI capabilities into the SART platform including Glean integration, authentication, API integration and MCP-based architecture.',
    highlights: [
      'Integrated Glean-powered enterprise search into SART',
      'Built secure authentication and API integration layer',
      'Designed MCP-based architecture for AI tooling',
    ],
    tags: ['Angular', 'Java', 'Spring Boot', 'Glean', 'MCP'],
  },
  {
    title: 'SART RAI Chatbot',
    company: 'Ericsson, Gurugram',
    period: 'Mar 2026 - Present',
    featured: true,
    description:
      'Generic chatbot integration with RAI including streaming responses and end-to-end backend/frontend integration.',
    highlights: [
      'Streaming chatbot responses for real-time UX',
      'Full backend + frontend integration with RAI',
    ],
    tags: ['Angular', 'Java', 'Spring Boot', 'RAI'],
  },

  // --- Real projects from resume (added after SART) ---
  {
    title: 'CCMS - CSS Compatibility Matrix Solution',
    company: 'Ericsson, Gurugram',
    period: 'Jan 2023 - Feb 2026',
    description:
      'Led development and team mentoring for CCMS, an enterprise compatibility and upgrade-path platform. I served as the primary point of contact between India and Poland teams, coordinating requirements, feedback, and delivery schedules while facilitating daily and weekly issue resolution. Reduced operational costs by ~30% through automation and smart upgrade calculations.',
    highlights: [
      'Primary point of contact between India and Poland teams, coordinating requirements, feedback, and delivery schedules',
      'Facilitated daily and weekly calls to track blockers and ensure timely issue resolution across teams',
      'Led development and mentored the team building CCMS with Java, Spring Boot and Angular 17',
      'Implemented dynamic upgrade-path calculations using graph algorithms (Dijkstra + DFS)',
      'Integrated EGAD authentication for secure enterprise login',
      'Reduced operational costs by ~30% through automation',
    ],
    tags: ['Java', 'Spring Boot', 'Angular 17', 'MySQL', 'JIRA', 'GitLab'],
  },
  {
    title: 'POA - Project Onboarding Automation',
    company: 'Ericsson, Gurugram',
    period: 'Jul 2021 - Nov 2022',
    description:
      'Automated the end-to-end project onboarding workflow by integrating JIRA, GitLab and Rosetta into a single streamlined pipeline, reducing manual onboarding effort by ~40%.',
    highlights: [
      'Automated project onboarding workflows across JIRA, GitLab and Rosetta',
      'Built integrations that eliminated repetitive manual setup steps',
      'Reduced manual onboarding effort by ~40%',
      'Delivered a consistent, repeatable onboarding process for new projects',
    ],
    tags: ['Java', 'Spring Boot', 'Angular 17', 'JIRA', 'GitLab', 'Rosetta'],
  },
  {
    title: 'PAT - Production Activity Tracker',
    company: 'Ericsson, Gurugram',
    period: 'Jan 2022 - Dec 2022',
    description:
      'Modernized the legacy Production Activity Tracker into a full web application, giving teams a centralized, real-time view of production activities. Delivered in parallel with the POA project.',
    highlights: [
      'Migrated the legacy PAT tool into a modern web application',
      'Built a centralized interface to track and manage production activities',
      'Improved accessibility and usability for cross-functional teams',
      'Developed using Java, Spring Boot and Angular 17',
    ],
    tags: ['Java', 'Spring Boot', 'Angular 17', 'MySQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'TARASHNA - Loan Management System',
    company: 'SCNL, Gurugram',
    period: 'Jun 2019 - Jul 2021',
    description:
      'Delivered a loan management platform with online/offline communication, improving accessibility for 5,000+ field employees and automating validation and disbursements.',
    highlights: [
      'Integrated web services for online/offline sync across 5,000+ field employees',
      'Built core modules: Group Loan Application, Loan Card, PAR, Death Report, Cashbook',
      'Automated third-party integrations (PAN validation, IDFC/RBL/IBL disbursements), cutting costs ~25%',
      'Delivered API integrations for loan validation and disbursement',
    ],
    tags: ['Java', 'REST APIs', 'Web Services', 'MySQL', 'JSON', 'XML'],
  },
  {
    title: 'ALTRecruit & ALTWorklife - HR Suite',
    company: 'PeopleStrong, Gurugram',
    period: 'May 2016 - Jun 2019',
    description:
      'Developed core HR modules and a responsive recruitment portal for an enterprise HR product suite, simplifying HR workflows with intuitive interfaces. Handled L2 support for production issues to ensure system stability and improved reusability through shared Angular components and services.',
    highlights: [
      'Built modules: Leave Management, Timesheet, Attendance, Payroll, Onboarding',
      'Handled L2 production support for issue resolution and system stability',
      'Improved reusability with shared Angular components and services',
      'Developed a responsive Angular recruitment portal with applicant tracking and approval workflows',
      'Applied Agile methodologies for scalable, high-quality delivery',
    ],
    tags: ['Java', 'JSF', 'Angular 2', 'REST', 'Redis', 'SQL Server'],
  },
  {
    title: 'DemoGo - Audio Conferencing Platform',
    company: 'Rhythmus Technology, Gurugram',
    period: 'Aug 2015 - May 2016',
    description:
      'Built a scalable audio-conferencing application with scheduling and session management features, implementing clean layered architecture.',
    highlights: [
      'Designed scalable architecture for audio-conferencing with scheduling & management',
      'Implemented core functionality using POJO classes across Business and DAO layers',
    ],
    tags: ['Java', 'Struts2', 'JavaScript', 'Ajax', 'JSON', 'SQL Server'],
  },
];
