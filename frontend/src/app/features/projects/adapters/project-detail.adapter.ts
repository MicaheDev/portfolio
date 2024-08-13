import { SanityService } from '../../../shared/services/sanity.service';
import { ProjectDetails } from '../models/Projects';

export function adaptProject(project: any, sanity: SanityService): ProjectDetails {
    return {
      title: project.title,
      date: new Date(project.date),
      category: project.categories,
      desc: project.description,
      slug: project.slug.current,
      
      preview: sanity.getImageUrlBuilder(project.preview.asset.url).url(),
      projectUrl: project.projectUrl || null,
      image: project.image ? sanity.getImageUrlBuilder(project.image.asset.url).url() : null,
      image2: project.image2 ? sanity.getImageUrlBuilder(project.image2.asset.url).url() : null,
      color: project.color.rgb 
        ? `rgba(${project.color.rgb.r}, ${project.color.rgb.g}, ${project.color.rgb.b}, ${project.color.rgb.a})` 
        : '#4852',
      detail: project.detail,
      technologies: project.technologies,
    };
  }
  