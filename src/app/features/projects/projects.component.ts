import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftWideLine, remixArrowRightUpLine, remixArrowRightWideLine } from '@ng-icons/remixicon';
import gsap from 'gsap';
import { clipping } from 'three/examples/jsm/nodes/accessors/ClippingNode.js';

type Project = {
  title: string;
  date: Date;
  category: string[];
  desc: string;
  slug: string;
  preview: string;
  color: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      remixArrowRightUpLine,
      remixArrowRightWideLine,
      remixArrowLeftWideLine,
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
    },
    {
      title: 'Sort',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'sort',
      preview: '/project2.png',
      color: '#4852',
    },

    {
      title: 'Street Devs',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'street_devs',
      preview: '/project3.png',
      color: '#8563',
    },

  ];

 ngAfterViewInit(): void {
   
 }
}
