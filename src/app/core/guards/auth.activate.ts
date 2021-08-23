import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Constants} from "../constants";

@Injectable()
export class AuthActivate implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const {authenticationRequired, authenticationFailureRedirectUrl} = route.data;
    let isUserLoggedIn = false;
    localStorage.getItem(Constants.IS_USER_LOGGED_IN) ? (isUserLoggedIn = true) : (isUserLoggedIn = false);
    if ((isUserLoggedIn && state.url === "/login") || (isUserLoggedIn && state.url === "/register")) {
      return this.router.parseUrl(authenticationFailureRedirectUrl || "/");
    } else if (typeof authenticationRequired === "boolean") {
      if ((authenticationRequired && isUserLoggedIn) || !authenticationRequired) {
        return true;
      }
    }
    return this.router.parseUrl(authenticationFailureRedirectUrl || "/");
  }
}
