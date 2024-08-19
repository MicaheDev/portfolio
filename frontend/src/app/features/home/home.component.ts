import { Component } from '@angular/core';

import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine, remixDownloadLine } from '@ng-icons/remixicon';
import { NavigationComponent } from '../../shared';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

type BandItem = {
  name: string;
  styles: string;
};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ThreeRenderComponent,
    ProfileComponent,
    CommonModule,
    NgIconComponent,
    NavigationComponent,
    RouterModule,
    FooterComponent
  ],
  providers: [
    provideIcons({
      remixArrowRightUpLine,
      remixDownloadLine,
    }),
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data!: any;

  services: BandItem[] = [
    {
      name: 'Boost your online presence with custom, user-friendly web development.',
      styles: '',
    },
    {
      name: 'FULLSTACK DEVELOPMENT',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Increase your visibility with our expert SEO services.',
      styles: '',
    },
    {
      name: 'SEO',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Elevate your brand with stunning, responsive web design.',
      styles: '',
    },
    {
      name: 'UI/UX DESIGN',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Drive organic traffic with targeted SEO strategies.',
      styles: '',
    },
    {
      name: 'DIGITAL MARKETING',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Create memorable user experiences with intuitive web design.',
      styles: '',
    },
    {
      name: 'USER EXPERIENCE',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Keep your site secure and updated with our maintenance services.',
      styles: '',
    },
    {
      name: 'SITE MAINTENANCE',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: 'Reach all audiences with responsive web design for any device.',
      styles: '',
    },
    {
      name: 'RESPONSIVE DESIGN',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: "Enhance your brand's image with professional web design.",
      styles: '',
    },
    {
      name: 'BRAND IDENTITY',
      styles: 'uppercase text-4xl font-medium',
    },
    {
      name: "Unlock your site's potential with expert SEO and development.",
      styles: '',
    },
    {
      name: 'WEB SOLUTIONS',
      styles: 'uppercase text-4xl font-medium',
    },
  ];



  /**
   * 
   *   constructor(public sanity: SanityService) {}

   * ngOnInit(): void {
    this.sanity.get('*[_type == "home"]').then((data) => {
      console.log(data);
      this.data = data[0]
    });
  }
   */
}
