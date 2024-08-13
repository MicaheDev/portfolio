import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';
import { BlogComponent } from './features/blog/blog.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ProjectDetailComponent } from './features/projects/components/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'projects',
        children: [
          {
            path: "",
            component: ProjectsComponent,
          },
          {
            path: ":slug",
            component: ProjectDetailComponent
          }
        ]
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];