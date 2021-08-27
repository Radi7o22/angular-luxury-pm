import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {Constants} from "./core/constants";
import {getCategories} from "./features/products/+store/actions";
import {selectCategories} from "./features/products/+store/selectors";
import {getUserProfile} from "./user/+store/actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  categories$: Observable<any> = this.store.select(selectCategories);
  subscription = new Subscription();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.store.dispatch(getCategories());
    this.subscription.add(
      this.categories$.subscribe((response) => {
        console.log("Categories are" + response);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
