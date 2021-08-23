import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {selectIsLoggedIn} from "src/app/+store/selectors";
import {getCategories, getProducts} from "../../+store/actions";
import {selectCategories, selectProductsListProducts} from "../../+store/selectors";

@Component({
  selector: "pm-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  constructor(private store: Store<any>) {}
  productsList$: Observable<any> = this.store.select(selectProductsListProducts);
  categories$: Observable<any> = this.store.select(selectCategories);
  subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.store.dispatch(getProducts());
    this.subscription.add(
      this.productsList$.subscribe((response) => {
        console.log("Items are" + response);
      })
    );
  }

  getCategories() {
    this.store.dispatch(getCategories());
    this.subscription.add(
      this.categories$.subscribe((response) => {
        console.log("Categories are" + response);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
