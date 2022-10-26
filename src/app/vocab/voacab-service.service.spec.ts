import { TestBed } from '@angular/core/testing';

import { VoacabServiceService } from './voacab-service.service';

describe('VoacabServiceService', () => {
  let service: VoacabServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoacabServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
