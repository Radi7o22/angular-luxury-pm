import {createReducer, on} from "@ngrx/store";
import {login, loginFailure, loginSuccess, register, registerFailure, registerSuccess} from "./actions";

export interface AuthData {
  //pointless, remove later
  readonly isLoggedIn: boolean;
  readonly isLoading: boolean;
  readonly errorMessage: any;
}

export const initialAuthDataState: AuthData = {
  isLoggedIn: false,
  isLoading: false,
  errorMessage: null
};

export const authReducer = createReducer(
  initialAuthDataState,
  on(login, register, (state) => ({
    ...state,
    isLoggedIn: false,
    isLoading: true
  })),
  on(loginSuccess, (state) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false
  })),
  on(loginFailure, registerFailure, (state, error) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    errorMessage: error
  })),
  on(register, (state) => ({
    ...state,
    isLoading: true,
    isLoggedIn: false
  })),
  on(registerSuccess, (state) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false
  }))
);
