import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginState from './login-state.reducer';

export const selectLoginState = createFeatureSelector<fromLoginState.LoginState>(
  fromLoginState.loginStateFeatureKey
);

export const selectSessionState = createSelector(
  selectLoginState,
  (state) => state.session
)
export const selectActiveSesion = createSelector(
  selectLoginState,
  (state) => state.session.activeSession
)
export const selectActiveUser = createSelector(
  selectLoginState,
  (state) => state.session.activeUser
)
