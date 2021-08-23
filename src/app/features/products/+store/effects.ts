import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemService} from "../services/item-service";
import {getProductsFail, ProductsListActionTypes, getProductsSuccess, getCategoriesSuccess, getCategoriesFail} from "../+store/actions";
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
}
