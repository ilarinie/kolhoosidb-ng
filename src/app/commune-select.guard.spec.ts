import { TestBed, async, inject } from '@angular/core/testing';

import { CommuneSelectGuard } from './commune-select.guard';

describe('CommuneSelectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuneSelectGuard]
    });
  });

  it('should ...', inject([CommuneSelectGuard], (guard: CommuneSelectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
