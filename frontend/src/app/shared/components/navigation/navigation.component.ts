import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine, remixCloseFill, remixMenuLine, remixReactjsFill } from '@ng-icons/remixicon';
import { RouterModule } from '@angular/router';

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
      remixArrowRightUpLine,
    }),
  ],
})
export class NavigationComponent implements AfterViewInit, AfterViewChecked {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {}
}
