import {createAction, props} from "@ngrx/store";
import {User} from "src/app/user/models/user";

export enum AuthActionTypes {
  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",
  LOGIN_FAIL = "[Auth] Login Fail",

  REGISTER = "[Auth] Register",
  REGISTER_SUCCESS = "[Auth] Register Success",
  REGISTER_FAIL = "[Auth] Register Fail"
}

export const login = createAction(AuthActionTypes.LOGIN, props<{credentials: {username: string; password: string}}>());
export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS);
export const loginFailure = createAction(AuthActionTypes.LOGIN_FAIL, props<{payload: {error: Error}}>());

export const register = createAction(AuthActionTypes.REGISTER, props<{payload: User}>());
export const registerSuccess = createAction(AuthActionTypes.REGISTER_SUCCESS);
export const registerFailure = createAction(AuthActionTypes.REGISTER_FAIL, props<{payload: {error: Error}}>());
