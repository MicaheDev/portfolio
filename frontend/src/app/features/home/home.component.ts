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
      const yValues = [100, -150, -400];

      gsap.context(() => {
        gsap.set('.decoration-item', {
          opacity: 0,
          y: yValues[1],
        });

        gsap.set(['.name', '.ui', '.full', '.dev', '.desc'], {
          y: 100,
          opacity: 0
        })

        gsap.to(['.name', '.ui', '.full', '.dev', '.desc'], {
          y: 0,
          opacity: 1,
          duration: .3,
          delay: 1.5,
          stagger: .1
        })

        gsap.to('.decoration-item', {
          opacity: 1,
          y: 0,
          delay: 1.5,
          duration: .3,
          stagger: .1,
        });
      }, this.container.nativeElement);
    }
  }
}
