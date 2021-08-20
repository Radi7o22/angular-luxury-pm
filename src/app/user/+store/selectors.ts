import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserDetailsState} from "./reducers";

const userModuleSelector = createFeatureSelector<UserDetailsState>("user");

export const selectUserData = createSelector(userModuleSelector, (state) => state.user);
