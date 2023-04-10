import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as LoginStateActions from './login-state.actions';

@Injectable()
export class LoginStateEffects {


  loadLoginStates$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LoginStateActions.loadLoginStates),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
