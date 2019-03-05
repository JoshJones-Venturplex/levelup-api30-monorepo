import { TestBed } from '@angular/core/testing';

import { PcpartService } from './pcpart.service';

describe('PcpartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PcpartService = TestBed.get(PcpartService);
    expect(service).toBeTruthy();
  });
});
