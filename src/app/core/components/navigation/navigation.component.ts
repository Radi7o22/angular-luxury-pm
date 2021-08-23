import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {selectCategories} from "src/app/features/products/+store/selectors";
import {Constants} from "../../constants";
import {CoreModule} from "../../core.module";

@Component({
  selector: "pm-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}
  categories$: Observable<any> = this.store.select(selectCategories);
  subscription = new Subscription();

  ngOnInit(): void {}

  isUserLoggedIn() {
    return localStorage.getItem(Constants.IS_USER_LOGGED_IN);
  }

  logout() {
    localStorage.removeItem(Constants.JWT);
    localStorage.removeItem(Constants.LOGGED_USERNAME);
    localStorage.removeItem(Constants.IS_USER_LOGGED_IN);
    this.router.navigate(["/products"]);
  }
}
