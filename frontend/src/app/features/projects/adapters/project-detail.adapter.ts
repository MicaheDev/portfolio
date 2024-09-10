import { SanityService } from '../../../shared/services/sanity.service';
import { ProjectDetails } from '../../projects/models/Projects';

export function adaptProject(project: any, sanity: SanityService): ProjectDetails {
    return {
      title: project.title,
      date: new Date(project.date),
      category: project.categories,
      desc: project.description,
      slug: project.slug.current,
      
      preview: {
        url: sanity.getImageUrlBuilder(project.preview.asset.url).url(),
        alt: project.preview?.altText || project.title || 'Imagen de vista previa'
      },
      projectUrl: project.projectUrl || null,
      image: project.image
        ? {
            url: sanity.getImageUrlBuilder(project.image.asset.url).url(),
            alt: project.image?.altText || 'Imagen principal'
          }
        : null,
      image2: project.image2
        ? {
            url: sanity.getImageUrlBuilder(project.image2.asset.url).url(),
            alt: project.image2?.altText || 'Imagen secundaria'
          }
        : null,

      detail: project.detail,
      technologies: project.technologies,
      problem: project.problem,
      solution: project.solution,
      impact: project.impact
    };
  }
  