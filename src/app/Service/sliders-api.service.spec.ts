import { TestBed } from '@angular/core/testing';

import { SlidersApiService } from './sliders-api.service';

describe('SlidersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidersApiService = TestBed.get(SlidersApiService);
    expect(service).toBeTruthy();
  });
});
