import {createReducer, on} from "@ngrx/store";
import {Item} from "../models/item";
import {getProducts, getProductsFail, getProductsSuccess} from "./actions";

export interface ProductsListData {
  readonly products: Item[] | null;
  readonly isLoading: boolean;
  readonly errorMessage: any;
}

export const initialProductsListState: ProductsListData = {
  products: null,
  isLoading: false,
  errorMessage: null
};

export const productsListReducer = createReducer(
  initialProductsListState,
  on(getProducts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getProductsSuccess, (state, {products}) => ({
    ...state,
    products: products,
    isLoading: false
  })),
  on(getProductsFail, (state, error) => ({
    ...state,
    isLoading: false,
    errorMessage: error
  }))
);
