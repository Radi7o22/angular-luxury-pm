import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemService} from "../services/item-service";
import {getProductsFail, ProductsListActionTypes, getProductsSuccess} from "../+store/actions";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private itemsService: ItemService) {}

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
}
