import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ShoppingCartState} from ".";

const shoppingCartModuleSelector = createFeatureSelector<ShoppingCartState>("shoppingCart");

const selectShoppingCart = createSelector(shoppingCartModuleSelector, (state) => state.shoppingCart);

export const selectShoppingCartList = createSelector(selectShoppingCart, (state) => state.shoppingCartItems);
