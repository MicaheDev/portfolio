import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infinite-band',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-band.component.html',
  styleUrl: './infinite-band.component.scss',
})
export class InfiniteBandComponent {
  @Input() colorMode: string = 'light';
}
