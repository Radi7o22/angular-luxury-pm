import {ActionReducerMap} from "@ngrx/store";
import {UserDetailsState, userReducer} from "./reducers";

export interface UserState {
  readonly userDetails: UserDetailsState;
}

export const reducers: ActionReducerMap<UserState> = {
  userDetails: userReducer
};
