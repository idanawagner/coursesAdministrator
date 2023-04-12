import { createFeature, createReducer, on } from '@ngrx/store';
import { Session } from 'src/app/shared/models/session';
import * as LoginStateActions from './login-state.actions';

export const loginStateFeatureKey = 'loginState';

export interface LoginState {
  session: Session;
}

export const initialState: LoginState = {
  session: {
    activeSession: false,
  },
};

export const reducer = createReducer(
  initialState,
  on(LoginStateActions.loadLoginStates, (state, { session }) => {
    return {
      ...state,
      session: { activeSession: true, activeUser: session.activeUser },
    };
  }),
  on(LoginStateActions.logoutLoginStates, (state, { session }) => {
    return { ...state, session: { activeSession: false, activeUser: session.activeUser },
    };
  })
);

export const loginStateFeature = createFeature({
  name: loginStateFeatureKey,
  reducer,
});
