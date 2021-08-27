import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from ".";

const productsModuleSelector = createFeatureSelector<ProductsState>("products");

const selectProductsList = createSelector(productsModuleSelector, (state) => state.productsList);

export const selectProductsListProducts = createSelector(selectProductsList, (state) => state.products);
export const selectCategories = createSelector(selectProductsList, (state) => state.categories);
export const selectProductDetails = createSelector(selectProductsList, (state) => state.itemDetails);
