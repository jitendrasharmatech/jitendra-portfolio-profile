import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private themeService = inject(ThemeService);
  private zone = inject(NgZone);

  links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  active = 'home';
  menuOpen = false;

  /** Set briefly after a click so scroll-spy doesn't fight the smooth scroll. */
  private clickLock = false;
  private clickLockTimer?: ReturnType<typeof setTimeout>;
  private observer?: IntersectionObserver;

  /** Reactive theme signal exposed to the template. */
  theme = this.themeService.theme;

  ngAfterViewInit(): void {
    // Track how much of each section is visible; the most-visible one wins.
    const ratios = new Map<string, number>();

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.clickLock) {
          return;
        }

        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let best = this.active;
        let bestRatio = 0;
        for (const link of this.links) {
          const r = ratios.get(link.id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = link.id;
          }
        }

        if (bestRatio > 0 && best !== this.active) {
          this.zone.run(() => (this.active = best));
        }
      },
      {
        // Offset for the sticky navbar; multiple thresholds for smooth tracking.
        rootMargin: '-68px 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el) {
        this.observer.observe(el);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.clickLockTimer) {
      clearTimeout(this.clickLockTimer);
    }
  }

  scrollTo(id: string): void {
    this.active = id;
    this.menuOpen = false;

    // Lock scroll-spy briefly so the clicked link stays active during the
    // smooth scroll animation.
    this.clickLock = true;
    if (this.clickLockTimer) {
      clearTimeout(this.clickLockTimer);
    }
    this.clickLockTimer = setTimeout(() => (this.clickLock = false), 900);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
