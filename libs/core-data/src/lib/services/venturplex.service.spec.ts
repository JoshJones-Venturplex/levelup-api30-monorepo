import { TestBed } from '@angular/core/testing';

import { VenturplexService } from './venturplex.service';

describe('VenturplexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenturplexService = TestBed.get(VenturplexService);
    expect(service).toBeTruthy();
  });
});
