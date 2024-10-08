import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ProjectDetails } from '../../models/Projects';
import { SanityService } from '../../../../shared/services/sanity.service';
import { adaptProject } from '../../adapters/project-detail.adapter';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftLine, remixArrowRightUpLine } from '@ng-icons/remixicon';
import { TransitionLinkComponent } from "../../../../shared/components/transition-link/transition-link.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent, TransitionLinkComponent],
  providers: provideIcons({
    remixArrowLeftLine,
    remixArrowRightUpLine,
  }),
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  @ViewChild('container', { static: false }) container!: ElementRef;
  isLoading = false;
  error: any = { isError: false, msg: '' };
  currentProject: ProjectDetails | null = null;
  isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    public sanity: SanityService,
    @Inject(PLATFORM_ID) public platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if(this.isBrowser){
      this.route.params.subscribe(params => {
        const slug = params['slug'];
        if (slug) {
          this.loadProjectBySlug(slug);
        }
      });
    }
  }


  async loadProjectBySlug(slug: string): Promise<void> {
    this.isLoading = true;
    try {
      const query = `*[_type == "project" && slug.current == $slug][0] {
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
        image {
          asset->{
            url
          }
        },
        image2 {
          asset->{
            url
          }
        },
        color,
        detail,
        technologies,
        problem,
        solution,
        impact
      }`;

      const project = await this.sanity.get(query, { slug });
      this.currentProject = adaptProject(project, this.sanity);
    } catch (error) {
      console.error('Error loading project:', error);
      this.error = { isError: true, msg: 'Sorry, We have an error, try again.' };
    } finally {
      this.isLoading = false;
 
    }
  }
}
