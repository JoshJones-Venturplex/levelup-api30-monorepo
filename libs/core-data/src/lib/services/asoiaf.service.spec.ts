import { TestBed } from '@angular/core/testing';

import { AsoiafService } from './asoiaf.service';

describe('AsoiafService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsoiafService = TestBed.get(AsoiafService);
    expect(service).toBeTruthy();
  });
});
