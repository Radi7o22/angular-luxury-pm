import {createAction, props} from "@ngrx/store";
import {ItemInOrder} from "../../shopping-cart/models/item-in-order";
import {ProductsListComponent} from "../components/products-list/products-list.component";
import {Item} from "../models/item";

export enum ProductsListActionTypes {
  GET_PRODUCTS = "[Products] Products",
  GET_PRODUCTS_SUCCESS = "[Products] Get Products Success",
  GET_PRODUCTS_FAIL = "[Products] Get Products Fail",

  GET_ALL_CATEGORIES = "[Categories] Get All Categories",
  GET_ALL_CATEGORIES_SUCCESS = "[Categories] Get All Categories Success",
  GET_ALL_CATEGORIES_FAIL = "[Categories] Get All Categories Fail",

  ADD_PRODUCT_TO_CART = "[Shopping Cart] Add Product To Cart",
  GET_SHOPPING_CART_ITEMS = "[Shopping Cart] Get Shopping Cart Items"
}

export const getProducts = createAction(ProductsListActionTypes.GET_PRODUCTS);
export const getProductsSuccess = createAction(ProductsListActionTypes.GET_PRODUCTS_SUCCESS, props<{products: any[]}>());
export const getProductsFail = createAction(ProductsListActionTypes.GET_PRODUCTS_FAIL, props<{payload: {error: Error}}>());

export const getCategories = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES);
export const getCategoriesSuccess = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES_SUCCESS, props<{categories: any[]}>());
export const getCategoriesFail = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES_FAIL, props<{payload: {error: Error}}>());

export const addProductToCart = createAction(ProductsListActionTypes.ADD_PRODUCT_TO_CART, props<{item: ItemInOrder}>());
