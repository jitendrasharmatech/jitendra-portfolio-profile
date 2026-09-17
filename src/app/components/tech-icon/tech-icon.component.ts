import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TECH_ICONS, iconKey } from '../../data/tech-icons';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    viewBox="0 0 24 24"
    fill="currentColor"
    [attr.width]="size"
    [attr.height]="size"
    aria-hidden="true"
    [innerHTML]="svg"
  ></svg>`,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
    `,
  ],
})
export class TechIconComponent {
  @Input() size = 22;

  svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  @Input() set label(value: string) {
    const body = TECH_ICONS[iconKey(value)] ?? TECH_ICONS['ai'];
    this.svg = this.sanitizer.bypassSecurityTrustHtml(body);
  }
}
