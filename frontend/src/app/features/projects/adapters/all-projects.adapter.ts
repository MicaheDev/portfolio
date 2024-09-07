import { SanityService } from '../../../shared/services/sanity.service';
import { Projects } from '../models/Projects';

export function adaptProjects(projects: any[], sanity: SanityService): Projects {
  return projects.map((project: any) => ({
    title: project.title,
    date: new Date(project.date),
    category: project.categories,
    desc: project.description,
    slug: project.slug.current,
    preview: {
      url: sanity.getImageUrlBuilder(project.preview).url(),
      alt: project.preview?.altText || project.title || 'Imagen de proyecto' 
    },
    projectUrl: project.projectUrl || null,
    technologies: project.technologies,
  }));
}
