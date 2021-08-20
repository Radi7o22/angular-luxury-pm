import {createAction, props} from "@ngrx/store";
import {User} from "../models/user";

export enum UserActionTypes {
  USER_DATA_RECEIVED = "[User] User Data Received"
}

export const userDataReceived = createAction(UserActionTypes.USER_DATA_RECEIVED, props<User>());
