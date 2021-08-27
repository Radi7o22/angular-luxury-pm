import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getProducts, getProductsInCategory} from "src/app/features/products/+store/actions";
import {selectCategories} from "src/app/features/products/+store/selectors";
import {Category} from "src/app/features/products/models/category";
import {logout} from "src/app/user/+store/actions";
import {Constants} from "../../constants";
import {ItemInOrder} from "src/app/features/shopping-cart/models/item-in-order";
import {deleteAllItemsFromCart} from "src/app/features/shopping-cart/+store/actions";
import {selectShoppingCartList} from "src/app/features/shopping-cart/+store/selectors";

@Component({
  selector: "pm-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}
  categories$: Observable<any> = this.store.select(selectCategories);
  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  itemsInCartQUantity: number = 0;

  ngOnInit(): void {
    this.shoppingCartList$.subscribe((list) => {
      this.itemsInCartQUantity = 0;
      list.forEach((item: ItemInOrder) => (this.itemsInCartQUantity += item.quantity));
    });
  }

  isUserLoggedIn() {
    return localStorage.getItem(Constants.IS_USER_LOGGED_IN);
  }

  loadProductsInCategory(category: Category): void {
    let categoryId = category.id;
    this.store.dispatch(getProductsInCategory({payload: {categoryId}}));
  }

  loadAllProducts() {
    this.store.dispatch(getProducts());
  }

  logout(): void {
    localStorage.removeItem(Constants.JWT);
    localStorage.removeItem(Constants.LOGGED_USERNAME);
    localStorage.removeItem(Constants.IS_USER_LOGGED_IN);
    this.store.dispatch(logout());
    this.store.dispatch(deleteAllItemsFromCart());
    this.router.navigate(["/products"]);
  }
}
