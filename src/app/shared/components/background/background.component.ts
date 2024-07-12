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
    background: url('/noisy.gif') repeat;
    position:fixed;
    inset:0;
    z-index: 0;
    background-size: 300px;
  }
  `,
})
export class BackgroundComponent {}
