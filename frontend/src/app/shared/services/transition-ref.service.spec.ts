import { TestBed } from '@angular/core/testing';

import { TransitionRefService } from './transition-ref.service';

describe('TransitionRefService', () => {
  let service: TransitionRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
