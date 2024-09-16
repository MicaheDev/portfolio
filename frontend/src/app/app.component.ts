import { AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared';
import { PixelBackgroundComponent } from './shared/components/pixel-background/pixel-background.component';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, PixelBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initializeScrolling();
    }
  }

  initializeScrolling(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.add(time => {});

    gsap.ticker.lagSmoothing(0);
  }
}
