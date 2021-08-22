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
    localStorage.getItem(Constants.JWT) ? (isUserLoggedIn = true) : (isUserLoggedIn = false);

    if (typeof authenticationRequired === "boolean" && authenticationRequired === isUserLoggedIn) {
      return true;
    }
    return this.router.parseUrl(authenticationFailureRedirectUrl || "/");
  }
}
