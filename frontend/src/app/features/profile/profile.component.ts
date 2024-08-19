import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowDownLine, remixLinkedinBoxLine } from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
type BandItem = {
  name: string;
  styles: string;
};
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ThreeRenderComponent, NgIconComponent, InfiniteBandComponent, CommonModule],
  providers: [
    provideIcons({
      remixArrowDownLine,
      remixLinkedinBoxLine,
    }),
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements AfterViewInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) public platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      gsap.to('.el', {
        opacity: 1,
        duration: 0.5,
        translateY: 0,
        stagger: 0.2,
      });

      setTimeout(() => {
        gsap.to('.band', {
          opacity: 1,
          duration: 0.5,
        });
      }, 1000);
    }
  }

  services: BandItem[] = [
    {
      name: 'Freelance',
      styles: 'font-bold uppercase',
    },
    {
      name: '1 year of experince',
      styles: '',
    },
    {
      name: 'Web Designer',
      styles: 'font-bold uppercase',
    },
    {
      name: 'I love it.',
      styles: '',
    },
    {
      name: 'Front-End Dev',
      styles: 'font-bold uppercase',
    },
    {
      name: 'semantic, styiling and improve de user experience',
      styles: '',
    },
    {
      name: 'Back-End Dev',
      styles: 'font-bold uppercase',
    },
    {
      name: 'authentication, arquitecture and pattern designs',
      styles: '',
    },
  ];
}
