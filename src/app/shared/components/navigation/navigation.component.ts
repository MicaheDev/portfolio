import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import gsap from 'gsap';
import { format } from 'date-fns';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixCloseFill, remixMenu5Line, remixMenuLine } from '@ng-icons/remixicon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [NgIconComponent, RouterModule],
  providers: [
    provideIcons({
      remixMenu5Line,
      remixCloseFill,
      remixMenuLine
    }),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
  @ViewChild('motionContainer', { static: false })
  motionContainer!: ElementRef;

  date!: string;
  isMenuOpen = false;
  tl!: GSAPTimeline;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  menuItems = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profile' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  ngOnInit(): void {
    const date = new Date();
    this.date = format(date, 'dd/MM/yyyy'); // Formato DD/MM/YYYY
  }
  @HostListener('window:resize')
  onResize() {
    this.initializeGsap();
    this.updateGsap();
  }

  initializeGsap(): void {
    gsap.context(() => {
      gsap.set('.close-icon', {
        translateY: '-100%',
        opacity: 0,
      });
    }, this.motionContainer.nativeElement);
  }

  updateGsap() {
    this.tl = gsap
      .timeline({ paused: true })
      .to('.open-icon', {
        opacity: 0,
        duration: 0.3,
        translateY: '100%',
      })
      .to('.menu', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5,
      })
      .to('.close-icon', {
        opacity: 1,
        duration: 0.3,
        translateY: '0%',
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeGsap();
      this.updateGsap();
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
