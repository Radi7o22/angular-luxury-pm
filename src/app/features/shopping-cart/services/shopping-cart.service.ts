import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {changeProductQuantityInCart} from "../+store/actions";
import {ItemInOrder} from "../models/item-in-order";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor(private store: Store<any>) {}

  changeItemQuantity(itemInCart: ItemInOrder, shoppingCartProducts: ItemInOrder[], quantity: FormControl) {
    let existingItemIndex: any = shoppingCartProducts.findIndex((item: ItemInOrder) => item.itemId === itemInCart.itemId);
    let itemsInCart: any = shoppingCartProducts.map((x) => Object.assign({}, x));
    itemsInCart[existingItemIndex].quantity = parseInt(quantity.value);
    this.store.dispatch(changeProductQuantityInCart({shoppingCartItems: itemsInCart}));
  }
}
