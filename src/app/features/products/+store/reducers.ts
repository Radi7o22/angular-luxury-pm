import {createReducer, on} from "@ngrx/store";
import {ItemInOrder} from "../../shopping-cart/models/item-in-order";
import {Category} from "../models/category";
import {Item} from "../models/item";
import {
  addProductToCart,
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getProducts,
  getProductsFail,
  getProductsSuccess
} from "./actions";

export interface ProductsListData {
  readonly products: Item[] | null;
  readonly isLoading: boolean;
  readonly errorMessage: any;
  readonly categories: Category[] | null;
  readonly shoppingCartItems: ItemInOrder[];
}

export const initialProductsListState: ProductsListData = {
  products: null,
  isLoading: false,
  errorMessage: null,
  categories: null,
  shoppingCartItems: []
};

export const productsListReducer = createReducer(
  initialProductsListState,
  on(getProducts, getCategories, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getProductsSuccess, (state, {products}) => ({
    ...state,
    products: products,
    isLoading: false
  })),
  on(getProductsFail, getCategoriesFail, (state, error) => ({
    ...state,
    isLoading: false,
    errorMessage: error
  })),
  on(getCategoriesSuccess, (state, {categories}) => ({
    ...state,
    categories: categories,
    isLoading: false
  })),
  on(addProductToCart, (state, {item}) => ({
    ...state,
    shoppingCartItems: [...state.shoppingCartItems, item]
  }))
);
