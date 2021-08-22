import {createSelector} from "@ngrx/store";
import {AuthState} from ".";

export const selectIsLoggedIn = createSelector(
  (state: AuthState) => state.auth,
  (state) => state.isLoggedIn
);

export const selectIsLoading = createSelector(
  (state: AuthState) => state.auth,
  (state) => state.isLoading
);
