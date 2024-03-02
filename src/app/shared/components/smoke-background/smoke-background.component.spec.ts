import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeBackgroundComponent } from './smoke-background.component';

describe('SmokeBackgroundComponent', () => {
  let component: SmokeBackgroundComponent;
  let fixture: ComponentFixture<SmokeBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmokeBackgroundComponent]
    });
    fixture = TestBed.createComponent(SmokeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
