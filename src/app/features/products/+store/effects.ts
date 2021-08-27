import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemService} from "../services/item-service";
import {
  getProductsFail,
  ProductsListActionTypes,
  getProductsSuccess,
  getCategoriesSuccess,
  getCategoriesFail,
  getProductDetailsSuccess,
  getProductDetailsFail,
  getProductsInCategorySuccess,
  getProductsInCategoryFail
} from "../+store/actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {CategoryService} from "../services/category-service";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private itemsService: ItemService, private categoryService: CategoryService) {}

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
