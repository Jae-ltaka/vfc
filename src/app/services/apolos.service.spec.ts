import { TestBed } from '@angular/core/testing';

import { ApolosService } from './apolos.service';

describe('ApolosService', () => {
  let service: ApolosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApolosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
