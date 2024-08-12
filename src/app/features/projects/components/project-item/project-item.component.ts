import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine } from '@ng-icons/remixicon';

export type Project = {
  title: string;
  date: Date;
  category: string[];
  desc: string;
  slug: string;
  preview: string;
  color: string;
};
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      remixArrowRightUpLine,
    }),
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
