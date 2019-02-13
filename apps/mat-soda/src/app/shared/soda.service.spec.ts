import { TestBed } from '@angular/core/testing';

import { SodaService } from './soda.service';

describe('SodaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SodaService = TestBed.get(SodaService);
    expect(service).toBeTruthy();
  });
});
