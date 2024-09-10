import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-pixel-background',
  standalone: true,
  imports: [],
  templateUrl: './pixel-background.component.html',
  styleUrl: './pixel-background.component.scss',
})
export class PixelBackgroundComponent implements AfterViewInit {
  isMenuOpen = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  getBlocks(): void[] {
    return [...Array(160)];
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.animateBackground();
    }
  }
  private animateBackground() {
    // Primero asegúrate de que el fondo esté visible

    // Animación de desvanecimiento de cada .block
    gsap.to('.block', {
      opacity: 0,
      delay: .8,
      duration: .1,
      stagger: { amount: 0.9, from: 'random' },
      onComplete: () => {
        // Opcionalmente puedes ocultar el fondo completamente después de la animación
        gsap.set('.background', { display: 'none' });
      }
    });
  }
}
