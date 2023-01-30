import { CART_ACTION_TYPES } from "./cart.types";

export const setOpened = (payload) => {
  return { type: CART_ACTION_TYPES.SET_OPENED, payload };
};

export const addItemToCart = (payload) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload,
  };
};

export const increaseQuantity = (payload) => {
  return {
    type: CART_ACTION_TYPES.INCREASE_QUANTITY,
    payload,
  };
};

export const decreaseQuantity = (payload) => {
  return {
    type: CART_ACTION_TYPES.INCREASE_QUANTITY,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload,
  };
};
