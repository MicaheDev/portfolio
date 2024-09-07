import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared';
import { PixelBackgroundComponent } from './shared/components/pixel-background/pixel-background.component';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, PixelBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  lenis!: Lenis;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initializeLenis();
    }
  }

  initializeLenis(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis();

    this.lenis.on('scroll', ScrollTrigger.update);

    // Sincroniza con GSAP
    gsap.ticker.add(time => {
      this.lenis.raf(time * 1000); // Multiplica por 1000 para convertir a milisegundos
    });

    gsap.ticker.lagSmoothing(0); // Evita el lag en la animación de GSAP
  }
}
