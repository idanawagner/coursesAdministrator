import * as fromLoginState from './login-state.reducer';
import { SelectLoginState } from './login-state.selectors';

describe('LoginState Selectors', () => {
  it('should select the feature state', () => {
    const loginState = {
      session: {
        activeSession: true,
        activeUser: {
          email:"idana@gmail.com",
          password: "1234",
          administrator: true,
        }
      }
    }
    const result = SelectLoginState({
      [fromLoginState.loginStateFeatureKey]: loginState
    });

    expect(result).toEqual(loginState);
  });
});
