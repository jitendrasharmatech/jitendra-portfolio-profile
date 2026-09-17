import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechIconComponent } from '../tech-icon/tech-icon.component';

interface TechIcon {
  label: string;
  color: string;
}

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  techs: TechIcon[] = [
    { label: 'Java', color: '#f89820' },
    { label: 'Spring Boot', color: '#6db33f' },
    { label: 'Angular', color: '#dd0031' },
    { label: 'Microservices', color: '#4d8dff' },
    { label: 'Azure', color: '#3ec9ff' },
    { label: 'AI', color: '#9d5cff' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
