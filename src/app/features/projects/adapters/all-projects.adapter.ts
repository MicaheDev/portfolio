import { SanityService } from '../../../shared/services/sanity.service';
import { Project } from '../projects.component';

export function adaptProjects(projects: any[], sanity: SanityService): Project[] {
  return projects.map((project: any) => ({
    title: project.title,
    date: new Date(project.date),
    category: project.categories,
    desc: project.description,
    slug: project.slug.current,
    preview: sanity.getImageUrlBuilder(project.image).url(),
    color: project.color.rgb 
    ? `rgba(${project.color.rgb.r}, ${project.color.rgb.g}, ${project.color.rgb.b}, ${project.color.rgb.a})` 
    : '#4852', // Valor de respaldo si no hay color
  }));
}
