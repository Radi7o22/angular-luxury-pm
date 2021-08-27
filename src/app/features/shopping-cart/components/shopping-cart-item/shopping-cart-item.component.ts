import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {deleteItemFromCart} from "../../+store/actions";
import {ItemInOrder} from "../../models/item-in-order";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: "pm-shopping-cart-item",
  templateUrl: "./shopping-cart-item.component.html",
  styleUrls: ["./shopping-cart-item.component.scss"]
})
export class ShoppingCartItemComponent implements OnInit {
  constructor(private store: Store<any>, private shoppingCartService: ShoppingCartService) {}
  @Input() product!: ItemInOrder;
  @Input() shoppingCartProducts!: [];
  @Output() quantityFormControlChange = new EventEmitter<boolean>();

  quantity!: FormControl;

  ngOnInit(): void {
    this.quantity = new FormControl(this.product.quantity, [Validators.required, Validators.pattern(/^[1-9]{1}([0-9]{1})?$/)]);
  }

  removeItemFromCart() {
    let isInvalid = false;
    this.quantityFormControlChange.emit(isInvalid);
    this.store.dispatch(deleteItemFromCart({item: this.product}));
  }

  changeItemQuantity() {
    this.quantityFormControlChange.emit(this.quantity.invalid);
    if (!this.quantity.invalid) {
      this.shoppingCartService.changeItemQuantity(this.product, this.shoppingCartProducts, this.quantity);
    }
  }
}
