import * as fromLoginState from './login-state.reducer';
import { selectLoginStateState } from './login-state.selectors';

describe('LoginState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoginStateState({
      [fromLoginState.loginStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
