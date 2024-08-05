import { Component } from '@angular/core';

import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { ProfileComponent } from '../profile/profile.component';
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
