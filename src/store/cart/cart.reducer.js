import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = getCartItem(cartItems, productToAdd.id);
  if (existingItem) {
    return replaceCartItem(cartItems, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const getCartItem = (cartItems, productId) => {
  return cartItems.find(({ id }) => id === productId);
};

const replaceCartItem = (cartItems, newProduct) => {
  return cartItems.map((item) =>
    item.id === newProduct.id ? newProduct : item
  );
};

const removeCartItem = (cartItems, productId) => {
  return cartItems.filter((item) => item.id !== productId);
};

const INITIAL_STATE = {
  opened: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_OPENED:
      return {
        ...state,
        opened: payload,
      };

    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return (() => {
        const cartItems = addCartItem(state.cartItems, payload);
        return {
          ...state,
          cartItems,
        };
      })();

    case CART_ACTION_TYPES.INCREASE_QUANTITY:
      return ((id) => {
        const existingItem = getCartItem(state.cartItems, id);
        if (!existingItem) {
          throw new Error("No cart item to increase");
        }
        const cartItems = replaceCartItem(state.cartItems, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        });
        return {
          ...state,
          cartItems,
        };
      })(payload);

    case CART_ACTION_TYPES.DECREASE_QUANTITY:
      return ((id) => {
        const existingItem = getCartItem(state.cartItems, id);
        if (!existingItem) {
          throw new Error("No cart item to increase");
        }
        let cartItems;

        if (existingItem.quantity === 1) {
          cartItems = removeCartItem(state.cartItems, id);
          return;
        } else {
          cartItems = replaceCartItem(state.cartItems, {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          });
        }
        return {
          ...state,
          cartItems,
        };
      })(payload);

    case CART_ACTION_TYPES.REMOVE_ITEM:
      return ((id) => {
        const existingItem = getCartItem(state.cartItems, id);
        if (!existingItem) {
          throw new Error("No cart item to increase");
        }
        const cartItems = removeCartItem(state.cartItems, id);
        return {
          ...state,
          cartItems,
        };
      })(payload);
    default:
      return state;
  }
};
