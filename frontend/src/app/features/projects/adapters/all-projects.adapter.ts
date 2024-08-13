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
      alt: project.preview?.altText || project.title || 'Imagen de proyecto' // Asigna un texto alternativo
    },
    color: project.color.rgb
    ? `rgba(${project.color.rgb.r}, ${project.color.rgb.g}, ${project.color.rgb.b}, ${project.color.rgb.a})` 
    : '#4852', // Valor de respaldo si no hay color
    projectUrl: project.projectUrl || null // Maneja URL opcional
  }));
}
