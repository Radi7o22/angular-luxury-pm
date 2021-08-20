import {createReducer, on} from "@ngrx/store";
import {User} from "../models/user";
import {userDataReceived} from "./actions";

export interface UserDetailsState {
  readonly user: User | null;
}

export const initialUserState: UserDetailsState = {
  user: null
};

export const userReducer = createReducer(
  initialUserState,
  on(userDataReceived, (state) => ({
    ...state,
    user: state.user
  }))
);
