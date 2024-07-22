import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteBandComponent } from './infinite-band.component';

describe('InfiniteBandComponent', () => {
  let component: InfiniteBandComponent;
  let fixture: ComponentFixture<InfiniteBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteBandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
