import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine, remixCloseFill, remixMenuLine } from '@ng-icons/remixicon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransitionLinkComponent } from '../transition-link/transition-link.component';
import { TransitionRefService } from '../../services/transition-ref.service';
import { animatePageOut } from '../../utils/animation';

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
export class NavigationComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    protected route: ActivatedRoute,
    protected router: Router,
    protected refService: TransitionRefService
  ) {}

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
