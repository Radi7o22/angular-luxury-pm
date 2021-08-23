import {Component, Input, OnInit} from "@angular/core";
import {Item} from "src/app/features/products/models/item";
import {ItemInOrder} from "../../models/item-in-order";

@Component({
  selector: "pm-shopping-cart-item",
  templateUrl: "./shopping-cart-item.component.html",
  styleUrls: ["./shopping-cart-item.component.scss"]
})
export class ShoppingCartItemComponent implements OnInit {
  constructor() {}
  @Input() product!: ItemInOrder;

  ngOnInit(): void {}
}
