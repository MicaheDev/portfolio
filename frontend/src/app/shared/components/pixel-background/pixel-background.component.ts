import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {TransitionRefService} from "../../services/transition-ref.service"
import { animatePageIn } from '../../utils/animation';

@Component({
  selector: 'app-pixel-background',
  standalone: true,
  imports: [],
  templateUrl: './pixel-background.component.html',
  styleUrl: './pixel-background.component.scss',
  providers: [TransitionRefService]
})
export class PixelBackgroundComponent implements AfterViewInit {
  isMenuOpen = false;
  isBrowser: boolean;
  private routerSubscription!: Subscription;


  constructor(@Inject(PLATFORM_ID) protected platformId: Object, protected router: Router, protected refService: TransitionRefService) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  getBlocks(): void[] {
    return [...Array(160)];
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
     animatePageIn()


      this.routerSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!this.refService.isMenuOpen) {
            animatePageIn()
          }
        }
      });
    }
  }

}
