import { TestBed } from '@angular/core/testing';

import { ProfesseurBackEndService } from './professeur-back-end.service';

describe('ProfesseurBackEndService', () => {
  let service: ProfesseurBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseurBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
