import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftLine, remixArrowLeftWideLine, remixArrowRightWideLine, remixExternalLinkLine } from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { SanityService } from '../../shared/services/sanity.service';
import { adaptProjects } from './adapters/all-projects.adapter';
import { ProjectErrorComponent, ProjectItemComponent, ProjectLoaderComponent } from './components';
import { Projects } from './models/Projects';
import gsap from 'gsap';

type BandItem = {
  name: string;
  styles: string;
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
      remixArrowLeftLine
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class ProjectsComponent implements OnInit {
  isBrowser: boolean;
  @ViewChild('container', { static: false }) container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public sanity: SanityService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  uploadedProjects: Projects = [];
  error: any = { isError: false, msg: '' };
  isLoading = false;

  ngOnInit(): void {
    this.loadProjects();
  }

  loadAnimation() {
    if (this.isBrowser) {
      gsap.to(['.project'], {
        opacity: 1,
        duration: 0.5,
        translateY: 0,
        stagger: 0.2,
      });
    }
  }

  async loadProjects(): Promise<void> {
    this.isLoading = true;
    try {
      const query = `*[_type == "project"] | order(date desc) {
        title,
        date,
        categories,
        description,
        slug,
        preview {
          asset->{
            url
          }
        },
        color
      }`;
      const projects = await this.sanity.get(query);
      this.uploadedProjects = adaptProjects(projects, this.sanity);
    } catch (error) {
      console.error('Error loading projects:', error);
      this.error = { isError: true, msg: 'Sorry, We have a error, try again.' };
    } finally {
      this.isLoading = false;
      setTimeout(() => {
        this.loadAnimation();
      }, 1000);
    }
  }

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
