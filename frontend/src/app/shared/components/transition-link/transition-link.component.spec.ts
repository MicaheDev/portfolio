import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionLinkComponent } from './transition-link.component';

describe('TransitionLinkComponent', () => {
  let component: TransitionLinkComponent;
  let fixture: ComponentFixture<TransitionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
