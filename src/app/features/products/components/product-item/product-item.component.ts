import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {ItemInOrder} from "src/app/features/shopping-cart/models/item-in-order";
import {addProductToCart} from "../../+store/actions";
import {Item} from "../../models/item";

@Component({
  selector: "pm-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  constructor(private store: Store<any>) {}
  @Input() product!: Item;

  ngOnInit(): void {}

  addToCart() {
    let itemInCart: ItemInOrder = {
      itemId: this.product.id,
      name: this.product.name,
      price: this.product.price,
      categoryName: this.product.categoryName,
      subcategoryName: this.product.subcategoryName,
      mainImagePath: this.product.mainImagePath,
      quantity: 1
    };
    this.store.dispatch(addProductToCart({item: itemInCart}));
  }
}
