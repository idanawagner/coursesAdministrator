import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginState from './login-state.reducer';

export const SelectLoginState = createFeatureSelector<fromLoginState.LoginState>(
  fromLoginState.loginStateFeatureKey
);

export const SelectSessionState = createSelector(
  SelectLoginState,
  (state) => state.session
)
export const SelectActiveSession = createSelector(
  SelectLoginState,
  (state) => state.session.activeSession
)
export const SelectActiveUser = createSelector(
  SelectLoginState,
  (state) => state.session.activeUser
)
