import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) public platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const scrollTriggerSettings = {
        trigger: this.container.nativeElement,
        start: 'top center',
      };

      gsap.context(() => {
     

        gsap.set(['.desc'], {
          y: 900,
          opacity: 0,
        })

  

        gsap.to(['.desc'], {
          y: 0,
          opacity: 1,
          scrollTrigger: scrollTriggerSettings,
          stagger: .4
        })

      }, this.container.nativeElement);
    }
  }
}
