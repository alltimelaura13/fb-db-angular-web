import { TestBed, inject } from '@angular/core/testing';

import { ServiceShareService } from './service-share.service';

describe('ServiceShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceShareService]
    });
  });

  it('should be created', inject([ServiceShareService], (service: ServiceShareService) => {
    expect(service).toBeTruthy();
  }));
});
