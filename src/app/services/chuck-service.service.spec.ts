import { TestBed } from '@angular/core/testing';

import { ChuckServiceService } from './chuck-service.service';

describe('ChuckServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckServiceService = TestBed.get(ChuckServiceService);
    expect(service).toBeTruthy();
  });
});
