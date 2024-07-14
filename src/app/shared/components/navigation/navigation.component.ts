import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TransitionLinkComponent } from '../transition-link/transition-link.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  remixArrowRightUpLine,
  remixCloseLine,
  remixHand,
  remixMenu4Fill,
} from '@ng-icons/remixicon';
import { format } from 'date-fns';
import { TransitionRefService } from '../../../layouts/services/transition-ref.service';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TransitionLinkComponent, NgIconComponent],
  providers: [
    provideIcons({
      remixMenu4Fill,
      remixCloseLine,
      remixArrowRightUpLine,
      remixHand,
    }),
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('gsapContainer', { static: false }) gsapContainer!: ElementRef;

  date!: string;
  isMenuOpen = false;
  tl!: GSAPTimeline;

  constructor(
    private refService: TransitionRefService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  menuItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/projects',
      label: 'Projects',
    },
    {
      path: '/blog',
      label: 'Blog',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ];

  ngOnInit(): void {
    const date = new Date();
    this.date = format(date, 'dd/MM/yyyy'); // Formato DD/MM/YYYY
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.context(() => {
        gsap.set(['.close-btn', '.menu-item'], {
          y: 75,
        });

        gsap.set('.col', {
          y: 200,
          opacity: 0
        });

        gsap.set('.nav-menu', {
          opacity: 0,
        });

        this.tl = gsap
          .timeline({ paused: true })
          .to('.fullscreen-menu', {
            duration: 0.75,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power4.inOut',
          })
          .to('.nav-menu', { opacity: 1, duration: 0.3 })
          .to(['.menu-item', '.close-btn'], {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.inOut',
            delay: -0.75,
          }).to('.col', {
            y: 0,
            duration: 1,
            stagger: 0.1,
            opacity: 1,
            ease: 'power4.inOut',
            delay: -0.75,
          });

  
      }, this.gsapContainer.nativeElement);

  
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
      this.refService.isMenuOpen = this.isMenuOpen;
    }
  }
}
