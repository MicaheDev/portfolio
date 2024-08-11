import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftWideLine, remixArrowRightUpLine, remixArrowRightWideLine, remixExternalLinkLine } from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';

type BandItem = {
  name: string;
  styles: string;
};

type Project = {
  title: string;
  date: Date;
  category: string[];
  desc: string;
  slug: string;
  preview: string;
  color: string;
  position: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent, InfiniteBandComponent],
  providers: [
    provideIcons({
      remixArrowRightUpLine,
      remixArrowRightWideLine,
      remixArrowLeftWideLine,
      remixExternalLinkLine
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  //@ViewChild('ProjectContainer', { static: false }) ProjectContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  projects: Project[] = [
    {
      title: 'EZ-JPN',
      date: new Date(),
      category: ['UI/UX Design'],
      desc: '',
      slug: 'ez_jpn',
      preview: '/project1.png',
      color: '#5254',
      position: 'left',
    },
    {
      title: 'Sort',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'sort',
      preview: '/project2.png',
      color: '#4852',
      position: 'right',
    },

    {
      title: 'Humble',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'sort',
      preview: '/project2.jpg',
      color: '#4822',
      position: 'right',
    },

    {
      title: 'Street Devs',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'street_devs',
      preview: '/project3.png',
      color: '#8563',
      position: 'left',
    },
  ];

  texts: BandItem[] = [
    {
      name: 'HTML',
      styles: 'text-violet-500',
    },
    {
      name: 'React',
      styles: '',
    },
    {
      name: 'CSS',
      styles: 'text-violet-500',
    },
    {
      name: 'Angular',
      styles: '',
    },
    {
      name: 'JavaScript',
      styles: 'text-violet-500',
    },
    {
      name: 'Nextjs',
      styles: '',
    },
    {
      name: 'Python',
      styles: 'text-violet-500',
    },
    {
      name: 'Redux',
      styles: '',
    },
    {
      name: 'TypeScript',
      styles: 'text-violet-500',
    },
    {
      name: 'TailwindCSS',
      styles: '',
    },
  ];

  services: BandItem[] = [
    {
      name: "Works",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
    {
      name: "projects",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
    {
      name: "side projects",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
  ];

  ngAfterViewInit(): void {}
}
