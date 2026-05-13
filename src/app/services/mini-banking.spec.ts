import { TestBed } from '@angular/core/testing';

import { MiniBanking } from './mini-banking';

describe('MiniBanking', () => {
  let service: MiniBanking;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniBanking);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
