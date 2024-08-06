import { Component } from '@angular/core';

import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from '../projects/projects.component';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { CommonModule } from '@angular/common';
type Skill = {
    name: string,
    styles: string
  }
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThreeRenderComponent, ProfileComponent, ProjectsComponent, InfiniteBandComponent, CommonModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data!: any;



  skills: Skill[] = [
    {
      name: 'HTML',
      styles: 'uppercase font-bold bg-black text-white px-4 py-2',
    },
    {
      name: 'React',
      styles: '',
    },
    {
      name: 'CSS',
      styles: 'uppercase font-bold bg-black text-white px-4 py-2',
    },
    {
      name: 'Angular',
      styles: '',
    },
    {
      name: 'JavaScript',
      styles: 'uppercase font-bold bg-black text-white px-4 py-2',
    },
    {
      name: 'Nextjs',
      styles: '',
    },
    {
      name: 'Python',
      styles: 'uppercase font-bold bg-black text-white px-4 py-2',
    },
    {
      name: 'Redux',
      styles: '',
    },
    {
      name: 'TypeScript',
      styles: 'uppercase font-bold bg-black text-white px-4 py-2',
    },
    {
      name: 'TailwindCSS',
      styles: '',
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
