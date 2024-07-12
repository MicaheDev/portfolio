import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },

      {
        path: 'blog',
        component: SkillsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];
