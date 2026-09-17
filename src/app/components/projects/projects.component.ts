import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from '../../data/projects.data';
import { AllProjectsComponent } from '../all-projects/all-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AllProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChild('track') track?: ElementRef<HTMLDivElement>;

  projects: Project[] = PROJECTS;

  /** Projects currently shown in the overlay (all, or a single one). */
  overlayProjects: Project[] = [];
  overlayMode: 'all' | 'single' = 'all';
  showOverlay = false;

  /** Scroll the horizontal slider by roughly one card width. */
  scrollSlider(direction: 'prev' | 'next'): void {
    const el = this.track?.nativeElement;
    if (!el) {
      return;
    }
    const amount = Math.max(el.clientWidth * 0.8, 300);
    el.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  }

  /** Open the overlay with every project. */
  openAll(): void {
    this.overlayProjects = this.projects;
    this.overlayMode = 'all';
    this.openOverlay();
  }

  /** Open the overlay focused on a single project. */
  openOne(project: Project): void {
    this.overlayProjects = [project];
    this.overlayMode = 'single';
    this.openOverlay();
  }

  private openOverlay(): void {
    this.showOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay(): void {
    this.showOverlay = false;
    document.body.style.overflow = '';
  }
}
