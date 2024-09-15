import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine, remixCloseFill, remixMenuLine } from '@ng-icons/remixicon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransitionLinkComponent } from '../transition-link/transition-link.component';
import { TransitionRefService } from '../../services/transition-ref.service';
import { animatePageOut } from '../../utils/animation';
import gsap from 'gsap';
@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [NgIconComponent, RouterModule, CommonModule, TransitionLinkComponent],
  providers: [
    provideIcons({
      remixCloseFill,
      remixMenuLine,
      remixArrowRightUpLine,
    }),
  ],
})
export class NavigationComponent implements AfterViewInit, AfterViewChecked {
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    protected route: ActivatedRoute,
    protected router: Router,
    protected refService: TransitionRefService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  menuItems = [
    {
      path: '/',
      label: 'Home',
      color: 'violet',
    },
    /* 
    {
      path: '/profile',
      label: 'profile',
      color: 'red',
    },
    */
    {
      path: '/projects',
      label: 'Projects',
      color: 'blue',
    },

    {
      path: '/blog',
      label: 'Blog',
      color: 'neutral',
    },
  ];

  date!: string;
  isMenuOpen = false;
  tl!: GSAPTimeline;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.tl = gsap
        .timeline({ paused: true })

        .to('.menu', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.5,
        });
    }
  }

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen) {
        this.tl.play();
      } else {
        this.tl.reverse();
      }
    }
  }

  toggleMenu() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMenuOpen = !this.isMenuOpen;
      this.refService.isMenuOpen = this.isMenuOpen
    }
  }

  transitionClick(href: string) {
    if (this.router.url !== href) {
      console.log(this.router.url === href);
      const context = this.refService.contextRef;
      if (!this.refService.isMenuOpen) {
        animatePageOut(context, href, this.router);
      } else {
        this.router.navigate([href]);
      }
    }
  }

  isActive(href: string) {
    return this.router.url === href;
  }
}
