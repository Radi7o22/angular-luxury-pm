import {createReducer, on} from "@ngrx/store";
import {User} from "../models/user";
import {
  getUserProfile,
  getUserProfileFail,
  getUserProfileSuccess,
  logout,
  updateUserProfile,
  updateUserProfileFail,
  updateUserProfileSuccess
} from "./actions";

export interface UserDetailsState {
  readonly user: User | null;
  readonly isLoading: boolean;
  readonly errorMessage: any;
}

export const initialUserState: UserDetailsState = {
  user: null,
  isLoading: false,
  errorMessage: null
};

export const userReducer = createReducer(
  initialUserState,
  on(getUserProfile, updateUserProfile, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getUserProfileSuccess, (state, {user}) => ({
    ...state,
    user: user,
    isLoading: false
  })),
  on(updateUserProfileSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(getUserProfileFail, updateUserProfileFail, (state, error) => ({
    ...state,
    isLoading: false,
    errorMessage: error
  })),
  on(logout, (state) => ({
    ...state,
    user: null
  }))
);
