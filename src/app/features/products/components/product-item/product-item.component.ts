import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {NotificationService} from "src/app/shared/services/notification.service";
import {Item} from "../../models/item";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: "pm-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private store: Store<any>,
    private router: Router,
    private notificationService: NotificationService
  ) {}
  @Input() product!: Item;

  ngOnInit(): void {}

  addToCart() {
    let item = this.productsService.transformItem(this.product);
    this.productsService.addToCart(item);
    this.notificationService.displayMessage(`Продуктът " ${this.product.name} " е добавен към количката!`);
  }

  openItemPreview() {
    this.router.navigate(["/item-preview", this.product.id], {queryParams: {id: this.product.id}});
  }
}
