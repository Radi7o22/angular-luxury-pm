import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {deleteAllItemsFromCart} from "../../+store/actions";
import {selectShoppingCartList} from "../../+store/selectors";

@Component({
  selector: "pm-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  isQuantityControlInvalid!: boolean;

  ngOnInit(): void {}

  removeAllItems() {
    this.store.dispatch(deleteAllItemsFromCart());
  }

  goToDeliveryScreen() {
    this.router.navigateByUrl("/delivery-info");
  }

  isQuantityInvalid(isInvalid: boolean) {
    this.isQuantityControlInvalid = isInvalid;
  }
}
