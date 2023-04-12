import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoursesStateEffects } from './courses-state.effects';
import { CoursesService } from '../../services/courses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CoursesStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CoursesStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatSnackBarModule ],
      providers: [
        CoursesStateEffects,
        provideMockActions(() => actions$),
        CoursesService
      ]
    });

    effects = TestBed.inject(CoursesStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
