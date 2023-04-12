import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';
import { StoreModule } from '@ngrx/store';

describe('SessionGuard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})

      ]
    });
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
