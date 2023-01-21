import { createContext, useEffect, useState } from "react";

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

export const CartDrawerProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const increaseQuantity = (id) => {
    const existingItem = getCartItem(cartItems, id);
    if (!existingItem) {
      return;
    }
    setCartItems(
      replaceCartItem(cartItems, {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (id) => {
    const existingItem = getCartItem(cartItems, id);
    if (!existingItem) {
      return;
    }
    if (existingItem.quantity === 1) {
      setCartItems(removeCartItem(cartItems, id));
      return;
    }
    setCartItems(
      replaceCartItem(cartItems, {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(removeCartItem(cartItems, id));
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
