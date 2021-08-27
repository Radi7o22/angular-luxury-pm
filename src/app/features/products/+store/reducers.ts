import {createReducer, on} from "@ngrx/store";
import {ItemInOrder} from "../../shopping-cart/models/item-in-order";
import {Category} from "../models/category";
import {Item} from "../models/item";
import {ItemDetails} from "../models/item-details";
import {
  addProductToCart,
  changeProductQuantityInCart,
  deleteAllItemsFromCart,
  deleteItemFromCart,
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getProductDetails,
  getProductDetailsFail,
  getProductDetailsSuccess,
  getProducts,
  getProductsFail,
  getProductsInCategory,
  getProductsInCategoryFail,
  getProductsInCategorySuccess,
  getProductsSuccess,
  makeOrder,
  makeOrderFail,
  makeOrderSuccess
} from "./actions";

export interface ProductsListData {
  readonly products: Item[] | null;
  readonly isLoading: boolean;
  readonly errorMessage: any;
  readonly categories: Category[] | null;
  readonly shoppingCartItems: ItemInOrder[];
  readonly itemDetails: ItemDetails | null;
}

export const initialProductsListState: ProductsListData = {
  products: null,
  isLoading: false,
  errorMessage: null,
  categories: null,
  shoppingCartItems: [],
  itemDetails: null
};

export const productsListReducer = createReducer(
  initialProductsListState,
  on(getProducts, getCategories, makeOrder, getProductDetails, getProductsInCategory, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getProductsSuccess, getProductsInCategorySuccess, (state, {products}) => ({
    ...state,
    products: products,
    isLoading: false
  })),
  on(getProductsFail, getCategoriesFail, makeOrderFail, getProductDetailsFail, getProductsInCategoryFail, (state, error) => ({
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
  })),
  on(makeOrderSuccess, (state) => ({
    ...state,
    shoppingCartItems: [],
    isLoading: false
  })),
  on(getProductDetailsSuccess, (state, {payload: {item}}) => ({
    ...state,
    isLoading: false,
    itemDetails: item
  })),
  on(changeProductQuantityInCart, (state, {shoppingCartItems}) => ({
    ...state,
    shoppingCartItems: shoppingCartItems
  })),
  on(deleteItemFromCart, (state, {item}) => ({
    ...state,
    shoppingCartItems: state.shoppingCartItems.filter((itemInCart) => itemInCart.itemId !== item.itemId)
  })),
  on(deleteAllItemsFromCart, (state) => ({
    ...state,
    shoppingCartItems: []
  }))
);
