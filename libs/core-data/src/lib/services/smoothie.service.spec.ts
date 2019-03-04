import { TestBed } from '@angular/core/testing';

import { SmoothieService } from './smoothie.service';

describe('SmoothieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmoothieService = TestBed.get(SmoothieService);
    expect(service).toBeTruthy();
  });
});
