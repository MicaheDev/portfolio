import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
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
export class NavigationComponent implements OnInit {
  @ViewChild('gsapContainer', { static: false }) gsapContainer!: ElementRef;
  @ViewChild('slider', { static: false }) slider!: ElementRef;

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
      path: '/profile',
      label: 'profile',
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
  @HostListener('window:resize', ['$event'])
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.context(() => {
        gsap.set('.slider', {
          top: 0,
        });
        gsap.set('.menu', {
          width: 60,
          height: 60,
          right: window.innerWidth < 900 ? '20px' : '40px',
          top: '20px',
        });

        gsap.set('.item-holder', {
          opacity: 0,
          visibility: 'hidden',
        });

        console.log(window.innerWidth);

        this.tl = gsap
          .timeline({ paused: true })
          .to('.menu', {
            width: window.innerWidth < 900 ? window.innerWidth : 400,
            height: window.innerWidth < 900 ? window.innerHeight : 650,

            right: window.innerWidth < 900 ? '0px' : '30px',
            top: window.innerWidth < 900 ? '0px' : '10px',
            borderRadius: window.innerWidth < 900 ? '0px' : '20px',
            duration: 0.5,
            ease: 'power4.inOut',
          })
          .to('.item-holder', {
            visibility: 'visible',
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
          })

          .to('.slider', {
            duration: 0.4,
            top: '-100%',
            ease: 'power4.inOut',
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
    }
  }
}
