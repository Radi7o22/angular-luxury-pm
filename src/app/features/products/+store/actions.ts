import {createAction, props} from "@ngrx/store";

export enum ProductsListActionTypes {
  GET_PRODUCTS = "[All Products] Products",
  GET_PRODUCTS_SUCCESS = "[All Products] Get Products Success",
  GET_PRODUCTS_FAIL = "[All Products] Get Products Fail",

  GET_PRODUCT_DETAILS = "[Product Details] Product Details",
  GET_PRODUCT_DETAILS_SUCCESS = "[Product Details] Product Details Success",
  GET_PRODUCT_DETAILS_FAIL = "[Product Details] Product Details Fail",

  GET_PRODUCTS_IN_CATEGORY = "[Products In Category] Products In Category",
  GET_PRODUCTS_IN_CATEGORY_SUCCESS = "[Products In Category] Products In Category Success",
  GET_PRODUCTS_IN_CATEGORY_FAIL = "[Products In Category] Products In Category Fail",

  GET_ALL_CATEGORIES = "[Categories] Get All Categories",
  GET_ALL_CATEGORIES_SUCCESS = "[Categories] Get All Categories Success",
  GET_ALL_CATEGORIES_FAIL = "[Categories] Get All Categories Fail"
}

export const getProducts = createAction(ProductsListActionTypes.GET_PRODUCTS);
export const getProductsSuccess = createAction(ProductsListActionTypes.GET_PRODUCTS_SUCCESS, props<{products: any[]}>());
export const getProductsFail = createAction(ProductsListActionTypes.GET_PRODUCTS_FAIL, props<{payload: {error: Error}}>());

export const getProductDetails = createAction(ProductsListActionTypes.GET_PRODUCT_DETAILS, props<{payload: {id: number}}>());
export const getProductDetailsSuccess = createAction(ProductsListActionTypes.GET_PRODUCT_DETAILS_SUCCESS, props<{payload: {item: any}}>());
export const getProductDetailsFail = createAction(ProductsListActionTypes.GET_PRODUCT_DETAILS_FAIL, props<{payload: {error: Error}}>());

export const getProductsInCategory = createAction(ProductsListActionTypes.GET_PRODUCTS_IN_CATEGORY, props<{payload: {categoryId: number}}>());
export const getProductsInCategorySuccess = createAction(ProductsListActionTypes.GET_PRODUCTS_IN_CATEGORY_SUCCESS, props<{products: any[]}>());
export const getProductsInCategoryFail = createAction(ProductsListActionTypes.GET_PRODUCTS_IN_CATEGORY_FAIL, props<{payload: {error: Error}}>());

export const getCategories = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES);
export const getCategoriesSuccess = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES_SUCCESS, props<{categories: any[]}>());
export const getCategoriesFail = createAction(ProductsListActionTypes.GET_ALL_CATEGORIES_FAIL, props<{payload: {error: Error}}>());
