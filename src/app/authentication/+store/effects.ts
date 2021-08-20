import {createEffect, Actions, ofType} from "@ngrx/effects";
import {AuthActionTypes, loginFailure, loginSuccess, registerFailure, registerSuccess} from "./actions";
import {catchError, map, switchMap, takeUntil} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../authentication.service";
import {Constants} from "src/app/core/constants";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthenticationService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      switchMap((action: any) =>
        this.authService.login(action.credentials.username, action.credentials.password).pipe(
          map((response) => {
            localStorage.setItem(Constants.JWT, JSON.stringify(response.headers.get("Authorization")));
            return loginSuccess();
          }),
          catchError((error) => {
            console.log(error);
            return [loginFailure({payload: {error}})];
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.REGISTER),
      switchMap((action: any) =>
        this.authService.register(action.payload).pipe(
          map(() => registerSuccess()),
          catchError((error) => {
            console.log(error);
            return [registerFailure({payload: {error}})];
          })
        )
      )
    )
  );
}
