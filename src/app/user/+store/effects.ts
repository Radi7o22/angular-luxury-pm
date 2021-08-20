import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {UserService} from "../user-service";

@Injectable()
export class UserDetailsEffects {
  constructor(private actions$: Actions, private authService: UserService) {}
}
