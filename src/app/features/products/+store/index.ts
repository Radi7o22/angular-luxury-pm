import {ActionReducerMap} from "@ngrx/store";
import {ProductsListData, productsListReducer} from "./reducers";

export interface ProductsState {
  readonly productsList: ProductsListData;
}

export const productsReducers: ActionReducerMap<ProductsState> = {
  productsList: productsListReducer
};
