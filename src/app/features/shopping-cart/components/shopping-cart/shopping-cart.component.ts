import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {selectShoppingCartList} from "src/app/features/products/+store/selectors";

@Component({
  selector: "pm-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private store: Store<any>) {}

  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  // subscription = new Subscription();

  ngOnInit(): void {
    // this.subscription.add(
    //   this.shoppingCartList$.subscribe((response) => {
    //     console.log("Shopping cart items are" + response);
    //   })
    // );
  }
}
