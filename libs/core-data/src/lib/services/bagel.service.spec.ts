import { TestBed } from '@angular/core/testing';

import { BagelService } from './bagel.service';

describe('BagelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BagelService = TestBed.get(BagelService);
    expect(service).toBeTruthy();
  });
});
