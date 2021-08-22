import {createAction, props} from "@ngrx/store";

export enum ProductsListActionTypes {
  GET_PRODUCTS = "[Products] Products",
  GET_PRODUCTS_SUCCESS = "[Products] Get Products Success",
  GET_PRODUCTS_FAIL = "[Products] Get Products Fail"
}

export const getProducts = createAction(ProductsListActionTypes.GET_PRODUCTS);
export const getProductsSuccess = createAction(ProductsListActionTypes.GET_PRODUCTS_SUCCESS, props<{products: any[]}>());
export const getProductsFail = createAction(ProductsListActionTypes.GET_PRODUCTS_FAIL, props<{payload: {error: Error}}>());
