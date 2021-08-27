import {Component, Input, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {changeProductQuantityInCart, deleteItemFromCart} from "src/app/features/products/+store/actions";
import {ItemInOrder} from "../../models/item-in-order";

@Component({
  selector: "pm-shopping-cart-item",
  templateUrl: "./shopping-cart-item.component.html",
  styleUrls: ["./shopping-cart-item.component.scss"]
})
export class ShoppingCartItemComponent implements OnInit {
  constructor(private store: Store<any>) {}
  @Input() product!: ItemInOrder;
  @Input() shoppingCartProducts!: [];

  quantity!: FormControl;

  ngOnInit(): void {
    this.quantity = new FormControl(this.product.quantity, [Validators.required, Validators.pattern(/^[1-9]{1}([0-9]{1})?$/)]);
  }

  removeItemFromCart() {
    this.store.dispatch(deleteItemFromCart({item: this.product}));
  }

  changeItemQuantity() {
    if (!this.quantity.invalid) {
      let itemInCart = this.product;
      let existingItemIndex: any = this.shoppingCartProducts.findIndex((item: ItemInOrder) => item.itemId === itemInCart.itemId);
      let itemsInCart: any = this.shoppingCartProducts.map((x) => Object.assign({}, x));
      itemsInCart[existingItemIndex].quantity = parseInt(this.quantity.value);
      this.store.dispatch(changeProductQuantityInCart({shoppingCartItems: itemsInCart}));
    }
  }
}
