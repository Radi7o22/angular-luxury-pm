import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemService} from "../services/item-service";
import {
  getProductsFail,
  ProductsListActionTypes,
  getProductsSuccess,
  getCategoriesSuccess,
  getCategoriesFail,
  makeOrderSuccess,
  makeOrderFail,
  getProductDetailsSuccess,
  getProductDetailsFail,
  getProductsInCategory,
  getProductsInCategorySuccess,
  getProductsInCategoryFail
} from "../+store/actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {CategoryService} from "../services/category-service";
import {OrderService} from "../../shopping-cart/services/order-service";
import {ItemDetails} from "../models/item-details";
import {NotificationService} from "src/app/shared/services/notification.service";

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private itemsService: ItemService,
    private orderService: OrderService,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}

  productsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActionTypes.GET_PRODUCTS),
      switchMap(() =>
        this.itemsService.getAll().pipe(
          map((products) => getProductsSuccess({products})),
          catchError((error) => {
            return [getProductsFail({payload: {error}})];
          })
        )
      )
    )
  );

  productsInCategoryList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActionTypes.GET_PRODUCTS_IN_CATEGORY),
      switchMap((action: any) =>
        this.itemsService.findByCategory(action.payload.categoryId).pipe(
          map((products) => getProductsInCategorySuccess({products})),
          catchError((error) => {
            return [getProductsInCategoryFail({payload: {error}})];
          })
        )
      )
    )
  );

  categories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActionTypes.GET_ALL_CATEGORIES),
      switchMap(() =>
        this.categoryService.getAll().pipe(
          map((categories) => getCategoriesSuccess({categories})),
          catchError((error) => {
            return [getCategoriesFail({payload: {error}})];
          })
        )
      )
    )
  );

  makeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActionTypes.MAKE_ORDER),
      switchMap((action: any) =>
        this.orderService.makeOrder(action.payload.order).pipe(
          map(() => {
            this.notificationService.displayMessage("Поръчката е направена успешно!");
            return makeOrderSuccess();
          }),
          catchError((error) => {
            return [makeOrderFail({payload: {error}})];
          })
        )
      )
    )
  );

  itemDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActionTypes.GET_PRODUCT_DETAILS),
      switchMap((action: any) =>
        this.itemsService.getItemDetails(action.payload.id).pipe(
          map((item) => getProductDetailsSuccess({payload: {item}})),
          catchError((error) => {
            return [getProductDetailsFail({payload: {error}})];
          })
        )
      )
    )
  );
}
