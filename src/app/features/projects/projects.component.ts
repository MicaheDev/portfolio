import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { InfiniteBandComponent } from "../../shared/components/infinite-band/infinite-band.component";

type SelectedProject = {
  index: number | null;
  isOpen: boolean;
};
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfiniteBandComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent{

}
