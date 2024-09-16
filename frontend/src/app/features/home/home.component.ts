import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationComponent } from '../../shared';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

import { ProjectsComponent } from '../projects/projects.component';
import { format } from 'date-fns';
import gsap from 'gsap';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileComponent,
    CommonModule,
    NavigationComponent,
    RouterModule,
    FooterComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  isBrowser: boolean;
  date = format(new Date(), "dd'///////'MM'///////'yyyy");

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      gsap.context(() => {
        gsap.set(['.name', '.role', '.motto'], {
          y: 100,
          opacity: 0,
        });

        gsap.to(['.name', '.role', '.motto'], {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: 1.5,
          stagger: 0.1,
        });
      }, this.container.nativeElement);

      document.addEventListener('mousemove', this.parallax.bind(this));
    }
  }

  parallax(e: MouseEvent) {
    document.querySelectorAll('.parallax-item').forEach((move: any) => {
      var moving_value: any = move.getAttribute('data-value');
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      gsap.to(move, {
        x: x,
        y: y,
      });
    });
  }
}
