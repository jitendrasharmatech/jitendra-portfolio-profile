import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechIconComponent } from '../tech-icon/tech-icon.component';

interface Skill {
  name: string;
  sub: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Java', sub: 'Core Java, OOP', color: '#f89820' },
    { name: 'Spring Boot', sub: 'REST API, Microservices', color: '#6db33f' },
    { name: 'Angular', sub: 'TypeScript, HTML, CSS', color: '#dd0031' },
    { name: 'Microservices', sub: 'Docker, Kubernetes', color: '#4d8dff' },
    { name: 'Azure', sub: 'Cloud & DevOps', color: '#3ec9ff' },
    { name: 'SQL', sub: 'MySQL, PostgreSQL', color: '#00758f' },
    { name: 'Git', sub: 'Version Control', color: '#f34f29' },
    { name: 'AI / Glean / RAI', sub: 'AI Integrations, MCP', color: '#9d5cff' },
    { name: 'Problem Solving', sub: 'Data Structures & Algorithms', color: '#c04dff' },
  ];
}
