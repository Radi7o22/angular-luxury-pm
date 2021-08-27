import {createReducer, on} from "@ngrx/store";
import {ItemInOrder} from "../models/item-in-order";
import {addProductToCart, changeProductQuantityInCart, deleteAllItemsFromCart, deleteItemFromCart, makeOrder, makeOrderFail, makeOrderSuccess} from "./actions";

export interface ShoppingCartData {
  readonly isLoading: boolean;
  readonly errorMessage: any;
  readonly shoppingCartItems: ItemInOrder[];
}

export const initialShoppingCartState: ShoppingCartData = {
  isLoading: false,
  errorMessage: null,
  shoppingCartItems: []
};

export const shoppingCartReducer = createReducer(
  initialShoppingCartState,
  on(makeOrder, (state) => ({
    ...state,
    isLoading: true
  })),
  on(makeOrderSuccess, (state) => ({
    ...state,
    shoppingCartItems: [],
    isLoading: false
  })),
  on(makeOrderFail, (state, error) => ({
    ...state,
    isLoading: false,
    errorMessage: error
  })),
  on(addProductToCart, (state, {item}) => ({
    ...state,
    shoppingCartItems: [...state.shoppingCartItems, item]
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
