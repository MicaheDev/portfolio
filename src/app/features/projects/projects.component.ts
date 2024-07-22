import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { InfiniteBandComponent } from "../../shared/components/infinite-band/infinite-band.component";

type SelectedProject = {
  index: number | null;
  isOpen: boolean;
};
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfiniteBandComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  projectBand = [
    {
      name: "Angular",
      weight: 900,
    },
    {
      name: "TailwindCSS",
      weight: 500,
    },
    {
      name: "Gsap",
      weight: 900,
    },
    {
      name: "Typescript",
      weight: 500,
    }
    , {
      name: "React",
      weight: 900,
    },
    {
      name: "Docker",
      weight: 500,
    },
    {
      name: "NextJS",
      weight: 900,
    },
    {
      name: "Python",
      weight: 500,
    }
  ]

  projects = [
    { title: 'C2 Montreal', src: '/images/c2montreal.png', color: '#000000' },
    { title: 'Office Studio', src: '/images/officestudio.png', color: '#8C8C8C' },
    { title: 'Locomotive', src: '/images/locomotive.png', color: '#EFE8D3' },
    { title: 'Silencio', src: '/images/silencio.png', color: '#706D63' },
  ];

  selectedProject: SelectedProject = { index: null, isOpen: false };

  ngAfterViewInit(): void {}

  toggleContent(index: number) {
    if (this.selectedProject.index === index) {
      this.selectedProject.isOpen = !this.selectedProject.isOpen;
    } else {
      this.selectedProject.index = index;
      this.selectedProject.isOpen = true;
    }
  }
}
