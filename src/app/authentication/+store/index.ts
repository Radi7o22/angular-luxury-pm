import {ActionReducerMap} from "@ngrx/store";
import {AuthData, authReducer} from "./reducers";

export interface AuthState {
  readonly auth: AuthData;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: authReducer
};
