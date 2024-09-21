import { TestBed } from '@angular/core/testing';

import { MapsStateService } from './maps-state.service';

describe('MapsStateService', () => {
  let service: MapsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
