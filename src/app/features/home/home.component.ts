import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  remixDribbbleLine,
  remixGithubLine,
  remixHand,
  remixLinkedinLine,
  remixTwitterXFill,
} from '@ng-icons/remixicon';
import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { SanityService } from '../../shared/services/sanity.service';
import { ProfileComponent } from '../profile/profile.component';
import { TransitionLinkComponent } from '../../shared/components/transition-link/transition-link.component';
import { ProjectsComponent } from '../projects/projects.component';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThreeRenderComponent, ProfileComponent, ProjectsComponent, InfiniteBandComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data!: any;

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
