import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransitionLinkComponent } from '../transition-link/transition-link.component';
import gsap from 'gsap';
import { TransitionRefService } from '../../../layouts/services/transition-ref.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TransitionLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('menuContainer', { static: false }) menuContainer!: ElementRef;
  isMenuOpen = false;
  tl!: GSAPTimeline;

  refService = inject(TransitionRefService)

  menuLinks = [
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

  ngAfterViewInit(): void {
    gsap.context(() => {
      gsap.set('.link-item-holder', {
        y: 75,
      });
      gsap.set('.overlay-nav', {
        opacity: 0,
      });
      gsap.set('.menu-info', {
        y: 75,
      });
      this.tl = gsap
        .timeline({ paused: true })

        .to('.menu-overlay', {
          duration: 0.75,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.overlay-nav', { opacity: 1, duration: 0.3 })
        .to('.link-item-holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        })
        .to('.menu-info', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        });
    }, this.menuContainer.nativeElement);
  }

  ngAfterViewChecked(): void {
    if (this.isMenuOpen) {
      console.log('hola');
      this.tl.play();
    } else {
      this.tl.reverse();
    }
  }

  toggleMenu() {
    console.log('first');
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
    this.refService.isMenuOpen = this.isMenuOpen
  }
}
