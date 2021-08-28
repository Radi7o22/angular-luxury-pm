import {createEffect, Actions, ofType} from "@ngrx/effects";
import {AuthActionTypes, loginFailure, loginSuccess, registerFailure, registerSuccess} from "./actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Constants} from "src/app/core/constants";
import {AuthenticationService} from "../authentication/services/authentication.service";
import {Router} from "@angular/router";
import {NotificationService} from "../shared/services/notification.service";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      switchMap((action: any) =>
        this.authService.login(action.credentials.username, action.credentials.password).pipe(
          map((response) => {
            localStorage.setItem(Constants.JWT, JSON.stringify(response.headers.get("Authorization")));
            localStorage.setItem(Constants.LOGGED_USERNAME, JSON.stringify(action.credentials.username));
            localStorage.setItem(Constants.IS_USER_LOGGED_IN, "true");
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
          map((response: any) => {
            this.router.navigateByUrl("/login");

            this.notificationService.displayMessage(response.message);
            return registerSuccess();
          }),
          catchError((error) => {
            console.log(error);
            return [registerFailure({payload: {error}})];
          })
        )
      )
    )
  );
}
