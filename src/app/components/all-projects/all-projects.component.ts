import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../data/projects.data';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
})
export class AllProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() mode: 'all' | 'single' = 'all';
  @Output() close = new EventEmitter<void>();

  get isSingle(): boolean {
    return this.mode === 'single';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
