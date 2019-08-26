import { TestBed } from '@angular/core/testing';

import { ApprovedProviderService } from './ap.service';

describe('ProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedProviderService = TestBed.get(ApprovedProviderService);
    expect(service).toBeTruthy();
  });
});
