import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectErrorComponent } from './project-error.component';

describe('ProjectErrorComponent', () => {
  let component: ProjectErrorComponent;
  let fixture: ComponentFixture<ProjectErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
