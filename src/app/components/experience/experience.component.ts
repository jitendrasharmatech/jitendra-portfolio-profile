import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechIconComponent } from '../tech-icon/tech-icon.component';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  logo?: string;
  bullets: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Senior Software Developer',
      company: 'Ericsson',
      location: 'Gurugram, India',
      period: 'Jul 2021 - Present',
      current: true,
      logo: 'assets/ericsson.svg',
      bullets: [
        'Led development and mentored the team on CCMS (CSS Compatibility Matrix Solution) using Java, Spring Boot and Angular 17, reducing operational costs by ~30%.',
        'Building SART (Security Assurance & Reporting Tool) with Java 17, Spring Boot, Angular 20, PostgreSQL, Spring Cloud Data Flow, Docker and Kubernetes.',
        'Implemented dynamic upgrade-path calculations using graph algorithms (Dijkstra + DFS).',
        'Automated project onboarding (POA) across JIRA, GitLab and Rosetta, cutting manual effort by ~40%.',
        'Modernized the Production Activity Tracker (PAT) into a web application and integrated EGAD authentication.',
      ],
      tech: ['Java 17', 'Spring Boot', 'Angular 20', 'Microservices', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
    },
    {
      role: 'Software Engineer',
      company: 'SCNL (Satin Creditcare)',
      location: 'Gurugram, India',
      period: 'Jun 2019 - Jul 2021',
      logo: 'assets/satin.jpg',
      bullets: [
        'Integrated web services for online/offline communication, improving system accessibility for 5,000+ field employees.',
        'Built core modules: Group Loan Application, Loan Card, PAR, Death Report and Cashbook.',
        'Automated reporting and integrated third-party services (PAN validation, IDFC/RBL/IBL disbursements), reducing operational costs by ~25%.',
        'Delivered the TARASHNA Loan Management System with API integrations for validation and disbursements.',
      ],
      tech: ['Java', 'REST APIs', 'Web Services', 'MySQL', 'JSON', 'XML'],
    },
    {
      role: 'Software Engineer',
      company: 'PeopleStrong',
      location: 'Gurugram, India',
      period: 'May 2016 - Jun 2019',
      logo: 'assets/peoplestrong.jpg',
      bullets: [
        'Developed core modules for ALTRecruit & ALTWorklife: Leave Management, Timesheet, Attendance, Payroll and Onboarding.',
        'Built a responsive Angular recruitment portal with applicant tracking and approval workflows.',
        'Applied Agile methodologies to deliver scalable, high-quality solutions.',
        'Simplified HR processes with intuitive, user-friendly interfaces.',
      ],
      tech: ['Java', 'JSF', 'Angular 2', 'REST', 'Redis', 'SQL Server'],
    },
    {
      role: 'Java Developer',
      company: 'Rhythmus Technology',
      location: 'Gurugram, India',
      period: 'Aug 2015 - May 2016',
      logo: 'assets/rhythmus.jpg',
      bullets: [
        'Developed a scalable architecture for the DemoGo audio-conferencing software with scheduling and management features.',
        'Implemented core functionality using POJO classes across the Business and DAO layers.',
      ],
      tech: ['Java', 'Struts2', 'JavaScript', 'Ajax', 'JSON', 'SQL Server'],
    },
  ];

  flow = [
    { label: 'Angular', color: '#dd0031' },
    { label: 'REST API', color: '#4d8dff' },
    { label: 'Spring Boot', color: '#6db33f' },
    { label: 'PostgreSQL', color: '#00758f' },
    { label: 'Kubernetes', color: '#326ce5' },
    { label: 'GitLab CI/CD', color: '#fc6d26' },
  ];

  /** Career started at Rhythmus Technology in Aug 2015. */
  private readonly careerStart = new Date(2015, 7, 1); // month is 0-indexed (7 = Aug)

  get yearsOfExperience(): number {
    const now = new Date();
    let years = now.getFullYear() - this.careerStart.getFullYear();
    // Subtract a year if the anniversary month hasn't been reached yet.
    if (now.getMonth() < this.careerStart.getMonth()) {
      years -= 1;
    }
    return years;
  }

  get stats() {
    return [
      { value: this.yearsOfExperience + '+', label: 'Years of Experience' },
      { value: '4', label: 'Companies' },
      { value: '15+', label: 'Projects Delivered' },
      { value: '~30%', label: 'Cost Reduction' },
    ];
  }

  awards = [
    { icon: '🏆', title: 'Ericsson All Stars Award', sub: 'Cash bonus for outstanding CCMS performance' },
    { icon: '🥇', title: 'Best Performance - AHM', sub: 'Cash prize at Annual Hackathon Meet' },
  ];

  certifications = [
    { tech: 'Java', color: '#f89820', title: 'Oracle Certified Java SE 8', sub: 'Programmer I & II' },
    { tech: 'Angular', color: '#dd0031', title: 'Certified Angular Developer', sub: 'Frontend specialization' },
    { tech: 'Agile', color: '#4d8dff', title: 'SAFe Practitioner Certified', sub: 'Agile at scale' },
  ];
}
