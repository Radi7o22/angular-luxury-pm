import {ActionReducerMap} from "@ngrx/store";
import {ShoppingCartData, shoppingCartReducer} from "./reducers";

export interface ShoppingCartState {
  readonly shoppingCart: ShoppingCartData;
}

export const shoppingCartReducers: ActionReducerMap<ShoppingCartState> = {
  shoppingCart: shoppingCartReducer
};
