import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  NgZone,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  template: `<div>
    <div class="cursor" #cursor></div>
    <div class="follower-cursor" #followerCursor></div>
  </div> `,
  styles: [
    `
      .cursor {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: fixed;
        background-color: var(--white);
        z-index: 999;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: difference;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      .follower-cursor {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid var(--white);
        position: fixed;
        z-index: 999;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: difference;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    `,
  ],
})
export class CursorComponent {
  @ViewChild('cursor', { static: false }) cursor!: ElementRef;
  @ViewChild('followerCursor', { static: false }) followerCursor!: ElementRef;

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        gsap.set(this.cursor.nativeElement, {
          xPercent: -50,
          yPercent: -50,
        });

        gsap.set(this.followerCursor.nativeElement, {
          xPercent: -50,
          yPercent: -50,
        });
        const anchors = window.document.querySelectorAll('a');
        const buttons = window.document.querySelectorAll('button');

    
        anchors.forEach((anchor) => {
          anchor.addEventListener('mouseenter', this.hoverCursor.bind(this));
          anchor.addEventListener('mouseleave', this.leaveCursor.bind(this));
        });

        buttons.forEach((button) => {
          button.addEventListener('mouseenter', this.hoverCursor.bind(this));
          button.addEventListener('mouseleave', this.leaveCursor.bind(this));
        });
        window.addEventListener('mousemove', this.moveCursor.bind(this));
      });
    }
  }

  hoverCursor() {
    gsap.to(this.cursor.nativeElement, {
      scale: 4,
      duration: 0.3,
    });


  }

  leaveCursor() {
    gsap.to(this.cursor.nativeElement, {
      scale: 1,
      duration: 0.3,
    });

  }

  moveCursor(event: MouseEvent) {
    gsap.to(this.cursor.nativeElement, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.1,
    });

    gsap.to(this.followerCursor.nativeElement, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.1,
    });
  }
}
