import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {ItemInOrder} from "src/app/features/shopping-cart/models/item-in-order";
import {NotificationService} from "src/app/shared/services/notification.service";
import {addProductToCart, changeProductQuantityInCart} from "../../+store/actions";
import {selectShoppingCartList} from "../../+store/selectors";
import {Item} from "../../models/item";

@Component({
  selector: "pm-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit, OnDestroy {
  constructor(private store: Store<any>, private router: Router, private notificationService: NotificationService) {}
  @Input() product!: Item;
  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  subscription = new Subscription();
  itemList!: [];

  ngOnInit(): void {
    this.subscription.add(
      this.shoppingCartList$.subscribe((response) => {
        this.itemList = response;
      })
    );
  }

  constructProductData(): ItemInOrder {
    let itemInCart: ItemInOrder = {
      itemId: this.product.id,
      name: this.product.name,
      price: this.product.price,
      categoryName: this.product.categoryName,
      subcategoryName: this.product.subcategoryName,
      mainImagePath: this.product.mainImagePath,
      quantity: 1
    };
    return itemInCart;
  }

  addToCart() {
    let itemInCart = this.constructProductData();
    let existingItemIndex: any = this.itemList.findIndex((item: ItemInOrder) => item.itemId === itemInCart.itemId);
    if (existingItemIndex != -1) {
      let itemsInCart: any = this.itemList.map((x) => Object.assign({}, x));
      itemsInCart[existingItemIndex].quantity += 1;
      this.store.dispatch(changeProductQuantityInCart({shoppingCartItems: itemsInCart}));
    } else {
      this.store.dispatch(addProductToCart({item: itemInCart}));
    }
    this.notificationService.displayMessage(`Продуктът " ${this.product.name} " е добавен към количката!`);
  }

  openItemPreview() {
    this.router.navigate(["/item-preview", this.product.id], {queryParams: {id: this.product.id}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
