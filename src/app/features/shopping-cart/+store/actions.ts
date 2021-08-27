import {createAction, props} from "@ngrx/store";
import {ItemInOrder} from "../models/item-in-order";
import {Order} from "../models/order";

export enum ShoppingCartActionTypes {
  GET_SHOPPING_CART_ITEMS = "[Shopping Cart] Get Shopping Cart Items",
  ADD_PRODUCT_TO_CART = "[Shopping Cart] Add Product To Cart",
  CHANGE_PRODUCT_QUANTITY_IN_CART = "[Shopping Cart] Update Cart By Changing Product Quantity",

  DELETE_ITEM_FROM_CART = "[Shopping Cart] Delete Item From Cart",
  DELETE_ALL_ITEMS_IN_CART = "[Shopping Cart] Delete All Items In Cart",

  MAKE_ORDER = "[Order] Make order",
  MAKE_ORDER_SUCCESS = "[Order] Make order success",
  MAKE_ORDER_FAIL = "[Order] Make order fail"
}

export const addProductToCart = createAction(ShoppingCartActionTypes.ADD_PRODUCT_TO_CART, props<{item: ItemInOrder}>());
export const changeProductQuantityInCart = createAction(ShoppingCartActionTypes.CHANGE_PRODUCT_QUANTITY_IN_CART, props<{shoppingCartItems: any[]}>());

export const deleteItemFromCart = createAction(ShoppingCartActionTypes.DELETE_ITEM_FROM_CART, props<{item: ItemInOrder}>());
export const deleteAllItemsFromCart = createAction(ShoppingCartActionTypes.DELETE_ALL_ITEMS_IN_CART);

export const makeOrder = createAction(ShoppingCartActionTypes.MAKE_ORDER, props<{payload: {order: Order}}>());
export const makeOrderSuccess = createAction(ShoppingCartActionTypes.MAKE_ORDER_SUCCESS);
export const makeOrderFail = createAction(ShoppingCartActionTypes.MAKE_ORDER_FAIL, props<{payload: {error: Error}}>());
