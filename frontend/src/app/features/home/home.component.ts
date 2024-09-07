import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationComponent } from '../../shared';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

import { ProjectsComponent } from '../projects/projects.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent, CommonModule, NavigationComponent, RouterModule, FooterComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  isBrowser: boolean;
  date = format(new Date(), "dd'///////'MM'///////'yyyy");

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      document.addEventListener('mousemove', this.parallax.bind(this));
    }
  }

  parallax(e: MouseEvent) {
    document.querySelectorAll('.parallax-item').forEach((move: any) => {
      var moving_value: any = move.getAttribute('data-value');
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}
