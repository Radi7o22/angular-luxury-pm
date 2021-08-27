import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {addProductToCart, changeProductQuantityInCart} from "../../shopping-cart/+store/actions";
import {selectShoppingCartList} from "../../shopping-cart/+store/selectors";
import {ItemInOrder} from "../../shopping-cart/models/item-in-order";
import {Item} from "../models/item";
import {ItemDetails} from "../models/item-details";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private store: Store<any>) {
    this.subscription.add(
      this.shoppingCartList$.subscribe((response) => {
        this.itemList = response;
      })
    );
  }

  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  subscription = new Subscription();
  itemList!: [];

  transformItem(product: Item): ItemInOrder {
    let itemInCart: ItemInOrder = {
      itemId: product.id,
      name: product.name,
      price: product.price,
      categoryName: product.categoryName,
      subcategoryName: product.subcategoryName,
      mainImagePath: product.mainImagePath,
      quantity: 1
    };
    return itemInCart;
  }

  transformItemDetails(product: ItemDetails, image: string): ItemInOrder {
    let itemInCart: ItemInOrder = {
      itemId: product.id,
      name: product.name,
      price: product.price,
      categoryName: product.categoryName,
      subcategoryName: product.subcategoryName,
      mainImagePath: image,
      quantity: 1
    };
    return itemInCart;
  }

  addToCart(itemInCart: ItemInOrder): void {
    let existingItemIndex: any = this.itemList.findIndex((item: ItemInOrder) => item.itemId === itemInCart.itemId);
    if (existingItemIndex != -1) {
      let itemsInCart: any = this.itemList.map((x) => Object.assign({}, x));
      itemsInCart[existingItemIndex].quantity += 1;
      this.store.dispatch(changeProductQuantityInCart({shoppingCartItems: itemsInCart}));
    } else {
      this.store.dispatch(addProductToCart({item: itemInCart}));
    }
  }

  getProductDetailsImage(itemDetails: ItemDetails): string {
    let imageForDetails = itemDetails.images.find((img) => img.main === false);
    return `url(${imageForDetails!.path})`;
  }

  getProductImageForCart(itemDetails: ItemDetails): string {
    let imageForCart = itemDetails.images.find((img) => img.main);
    return imageForCart!.path;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
