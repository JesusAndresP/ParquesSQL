import { TestBed } from '@angular/core/testing';

import { ParquesService } from './parques.service';

describe('ParquesService', () => {
  let service: ParquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
