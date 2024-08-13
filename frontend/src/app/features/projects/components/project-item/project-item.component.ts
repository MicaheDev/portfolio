import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine } from '@ng-icons/remixicon';
import { Project } from '../../models/Projects';

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
  encapsulation: ViewEncapsulation.None
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
