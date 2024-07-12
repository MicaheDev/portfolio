import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';

declare var grained: any;

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  template: ` <div id="wrapper"></div> `,
  styles: `
  #wrapper {
    width: 100vw;
    height: 100vh; 
  }
  `,
})
export class BackgroundComponent implements AfterViewInit {
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
        var options = {
          animate: true,
          patternWidth: 500,
          patternHeight: 500,
          grainOpacity: 0.05,
          grainDensity: 1,
          grainWidth: 1,
          grainHeight: 1,
        };
        grained('#wrapper', options);
      });
    }
  }
}
