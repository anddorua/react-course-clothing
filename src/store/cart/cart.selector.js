import { createSelector } from "reselect";

export const openedSelector = (state) => state.cart.opened;

export const itemsSelector = (state) => state.cart.cartItems;

export const totalSelector = createSelector([itemsSelector], (items) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
