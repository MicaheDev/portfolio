import { isPlatformBrowser } from '@angular/common';
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
  ]
})
export class NavigationComponent implements AfterViewInit {


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

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      
    }
  }




  
}