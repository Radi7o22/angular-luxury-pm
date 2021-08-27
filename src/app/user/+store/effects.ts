import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {NotificationService} from "src/app/shared/services/notification.service";
import {User} from "../models/user";
import {UserService} from "../user-service";
import {getUserProfileFail, getUserProfileSuccess, updateUserProfileFail, updateUserProfileSuccess, UserActionTypes} from "./actions";

@Injectable()
export class UserDetailsEffects {
  constructor(private actions$: Actions, private userService: UserService, private notificationService: NotificationService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.GET_USER_PROFILE),
      switchMap((action: any) =>
        this.userService.getProfile(action.username).pipe(
          map((user) => {
            return getUserProfileSuccess({user});
          }),
          catchError((error) => {
            return [getUserProfileFail({payload: {error}})];
          })
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UPDATE_USER_PROFILE),
      switchMap((action: any) =>
        this.userService.updateProfile(action.user).pipe(
          map(() => {
            this.notificationService.displayMessage("User profile is updated");
            return updateUserProfileSuccess();
          }),
          catchError((error) => {
            return [updateUserProfileFail({payload: {error}})];
          })
        )
      )
    )
  );
}
