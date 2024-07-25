import { CommonModule, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { SanityService } from '../../shared/services/sanity.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, InfiniteBandComponent, JsonPipe, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: any = [];

  constructor(public sanity: SanityService, public router: Router) {}

  ngOnInit(): void {
    this.sanity.get('*[_type == "project"]').then(data => {
      console.log(data);
      this.projects = data;
    });
  }

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

  projectBand = [
    {
      name: 'Angular',
      weight: 700,
    },
    {
      name: 'TailwindCSS',
      weight: 300,
    },
    {
      name: 'Gsap',
      weight: 700,
    },
    {
      name: 'Typescript',
      weight: 300,
    },
    {
      name: 'React',
      weight: 700,
    },
    {
      name: 'Docker',
      weight: 300,
    },
    {
      name: 'NextJS',
      weight: 700,
    },
    {
      name: 'Python',
      weight: 300,
    },
  ];

  navigate(slug: string) {
    console.log(slug);
    this.router.navigate(['projects/' + slug]);
  }
}
