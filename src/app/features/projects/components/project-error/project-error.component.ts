import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-error',
  standalone: true,
  imports: [],
  templateUrl: './project-error.component.html',
  styleUrl: './project-error.component.scss',
})
export class ProjectErrorComponent {
  @Input() errorMsg: string = '';
}
