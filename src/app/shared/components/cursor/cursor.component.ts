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
        background-color: var(--black);
        z-index: 999;
        inset: 0;
        pointer-events: none;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      .follower-cursor {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid var(--black);
        position: fixed;
        z-index: 999;
        inset: 0;
        pointer-events: none;

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
        window.addEventListener('mousemove', this.moveCursor.bind(this));

      });
    }

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
