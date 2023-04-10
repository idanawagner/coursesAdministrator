import { createAction, props } from '@ngrx/store';
import { Session } from 'src/app/shared/models/session';

export const loadLoginStates = createAction(
  '[LoginState] Load LoginStates',
  props<{ session: Session }>()
);
