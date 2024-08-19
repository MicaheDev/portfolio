import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine, remixCloseFill, remixExternalLinkLine, remixGithubLine, remixLinkedinBoxLine,remixMenuLine, remixProfileLine } from '@ng-icons/remixicon';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [NgIconComponent, RouterModule, CommonModule],
  providers: [
    provideIcons({
      remixCloseFill,
      remixMenuLine,
      remixExternalLinkLine,
      remixGithubLine,
      remixLinkedinBoxLine,
      remixProfileLine,
      remixArrowRightUpLine
    }),
  ],
})
export class NavigationComponent implements AfterViewInit, AfterViewChecked {
  date!: string;
  isMenuOpen = false;
  tl!: GSAPTimeline;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  menuItems = [
    {
      path: '/',
      label: 'Home',
      color: 'violet',
    },
    {
      path: '/profile',
      label: 'profile',
      color: 'red',
    },
    {
      path: '/projects',
      label: 'Projects',
      color: 'blue',
    },
    /**
     * {
      path: '/blog',
      label: 'Blog',
      color: 'neutral',
    },
    {
      path: '/contact',
      label: 'Contact',
      class: 'neutral',
    },
     */
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.set('.slider', {
        top: 0,
      });
      gsap.set(['.me', '.menu-items', '.link'], {
        opacity: 0,
        scale: 1,
      });

      this.tl = gsap
        .timeline({ paused: true })
        .to('.slider', {
          translateY: "-100%",
          duration: 0.4,
          ease: 'power4.inOut',
        })
        .to('.menu', {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.5,
        })
        .to([ '.link', '.me'], {
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power4.inOut',
        })
  
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
    }
  }
}
