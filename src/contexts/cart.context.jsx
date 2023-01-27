import { useReducer } from "react";
import { createContext } from "react";

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

export const CartDrawerContext = createContext({
  opened: false,
  setOpened: () => null,
  cartItems: [],
  addItemToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
  total: 0,
});

const CART_ACTION_TYPES = {
  SET_OPENED: "SET_OPENED",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  REMOVE_ITEM: "REMOVE_ITEM",
};

const INITIAL_STATE = {
  opened: false,
  cartItems: [],
  total: 0,
};

const calcTotal = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

const cartReducer = (state, action) => {
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
          total: calcTotal(cartItems),
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
          total: calcTotal(cartItems),
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
          total: calcTotal(cartItems),
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
          total: calcTotal(cartItems),
        };
      })(payload);
    default:
      throw new Error("Unexpected cart action:", type);
  }
};

export const CartDrawerProvider = ({ children }) => {
  const [{ opened, cartItems, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setOpened = (payload) => {
    dispatch({ type: CART_ACTION_TYPES.SET_OPENED, payload });
  };

  const addItemToCart = (payload) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
      payload,
    });
  };

  const increaseQuantity = (payload) => {
    dispatch({
      type: CART_ACTION_TYPES.INCREASE_QUANTITY,
      payload,
    });
  };

  const decreaseQuantity = (payload) => {
    dispatch({
      type: CART_ACTION_TYPES.INCREASE_QUANTITY,
      payload,
    });
  };

  const removeItem = (payload) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM,
      payload,
    });
  };

  return (
    <CartDrawerContext.Provider
      value={{
        opened,
        setOpened,
        cartItems,
        addItemToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        total,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
};
