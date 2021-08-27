import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {deleteAllItemsFromCart, deleteItemFromCart} from "src/app/features/products/+store/actions";
import {selectShoppingCartList} from "src/app/features/products/+store/selectors";

@Component({
  selector: "pm-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);

  ngOnInit(): void {}
  removeAllItems() {
    this.store.dispatch(deleteAllItemsFromCart());
  }

  goToDeliveryScreen() {
    this.router.navigateByUrl("/delivery-info");
  }
}
