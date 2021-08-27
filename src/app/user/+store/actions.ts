import {createAction, props} from "@ngrx/store";
import {User} from "../models/user";

export enum UserActionTypes {
  GET_USER_PROFILE = "[User] Get User Profile",
  GET_USER_PROFILE_SUCCESS = "[User] Get User Profile Success",
  GET_USER_PROFILE_FAIL = "[User] Get User Profile Fail",

  UPDATE_USER_PROFILE = "[User] Update User Profile",
  UPDATE_USER_PROFILE_SUCCESS = "[User] Update User Profile Success",
  UPDATE_USER_PROFILE_FAIL = "[User] Update User Profile Fail",

  USER_LOGOUT = "[User] Logout"
}

export const getUserProfile = createAction(UserActionTypes.GET_USER_PROFILE, props<{username: string}>());
export const getUserProfileSuccess = createAction(UserActionTypes.GET_USER_PROFILE_SUCCESS, props<{user: any}>());
export const getUserProfileFail = createAction(UserActionTypes.GET_USER_PROFILE_FAIL, props<{payload: {error: Error}}>());

export const updateUserProfile = createAction(UserActionTypes.UPDATE_USER_PROFILE, props<{user: any}>());
export const updateUserProfileSuccess = createAction(UserActionTypes.UPDATE_USER_PROFILE_SUCCESS);
export const updateUserProfileFail = createAction(UserActionTypes.UPDATE_USER_PROFILE_FAIL, props<{payload: {error: Error}}>());

export const logout = createAction(UserActionTypes.USER_LOGOUT);
