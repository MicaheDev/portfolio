import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  remixArrowLeftWideLine,
  remixArrowRightUpLine,
  remixArrowRightWideLine,
  remixExternalLinkLine,
} from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { SanityService } from '../../shared/services/sanity.service';
import { adaptProjects } from './adapters/all-projects.adapter';
import { ProjectLoaderComponent } from './components/project-loader/project-loader.component';
import { ProjectErrorComponent } from './components/project-error/project-error.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';

type BandItem = {
  name: string;
  styles: string;
};

export type Project = {
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
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    InfiniteBandComponent,
    ProjectLoaderComponent,
    ProjectErrorComponent,
    ProjectItemComponent,
  ],
  providers: [
    provideIcons({
      remixArrowRightWideLine,
      remixArrowLeftWideLine,
      remixExternalLinkLine,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  //@ViewChild('ProjectContainer', { static: false }) ProjectContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public sanity: SanityService) {}

  uploadedProjects: Project[] = [];
  error: any = { isError: false, msg: '' };
  isLoading = false;

  ngOnInit(): void {
    this.loadProjects();
  }

  async loadProjects(): Promise<void> {
    this.isLoading = true;
    try {
      const query = '*[_type == "project"] | order(date desc)';

      const projects = await this.sanity.get(query);
      this.uploadedProjects = adaptProjects(projects, this.sanity);
    } catch (error) {
      console.error('Error loading projects:', error);
      this.error = { isError: true, msg: 'Sorry, We have a error, try again.' };
    } finally {
      this.isLoading = false;
    }
  }

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
      title: 'Humble',
      date: new Date(),
      category: ['Web Application'],
      desc: '',
      slug: 'sort',
      preview: '/project2.jpg',
      color: '#4822',
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
      name: 'Works',
      styles: '',
    },
    {
      name: '/',
      styles: 'font-bold',
    },
    {
      name: 'projects',
      styles: '',
    },
    {
      name: '/',
      styles: 'font-bold',
    },
    {
      name: 'side projects',
      styles: '',
    },
    {
      name: '/',
      styles: 'font-bold',
    },
  ];

  ngAfterViewInit(): void {}
}
