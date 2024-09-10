import { SanityService } from '../../../shared/services/sanity.service';
import { Projects } from '../../projects/models/Projects';
import { Certifications } from '../models/Certifications';

export function adaptCertifications(projects: any[], sanity: SanityService): Certifications {
  return projects.map((project: any) => ({
    title: project.title,
    category: project.categories,
    desc: project.description,
    slug: project.slug.current,
    preview: {
      url: sanity.getImageUrlBuilder(project.preview).url(),
      alt: project.preview?.altText || project.title || 'Imagen de proyecto' 
    },
    certificationUrl: project.projectUrl || null,
  }));
}
