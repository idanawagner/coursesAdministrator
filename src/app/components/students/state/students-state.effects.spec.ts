import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentsStateEffects } from './students-state.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentsService } from '../services/students.service';

describe('StudentsStateEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentsStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatSnackBarModule ],
      providers: [
        StudentsStateEffects,
        provideMockActions(() => actions$),
        StudentsService
      ]
    });

    effects = TestBed.inject(StudentsStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
