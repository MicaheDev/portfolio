import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type bandList = {
  weight: number;
  name: string;
};

@Component({
  selector: 'app-infinite-band',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-band.component.html',
  styleUrl: './infinite-band.component.scss',
})
export class InfiniteBandComponent {
  @Input() bandList!: bandList[];
  @Input() background!: string;
  @Input() color!: string;
  @Input() transform!: string
}
