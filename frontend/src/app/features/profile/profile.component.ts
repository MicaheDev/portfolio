import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) public platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
