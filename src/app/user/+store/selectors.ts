import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from ".";

const userModuleSelector = createFeatureSelector<UserState>("user");

export const selectUserDetails = createSelector(userModuleSelector, (state) => state.userDetails);
export const selectUserData = createSelector(selectUserDetails, (state) => state.user);
