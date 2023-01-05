import { TestBed } from '@angular/core/testing';

import { CourBackEndService } from './cour-back-end.service';

describe('CourBackEndService', () => {
  let service: CourBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
