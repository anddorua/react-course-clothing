import { createContext, useState } from "react";

export const CartDrawerContext = createContext({
  opened: false,
});

export const CartDrawerProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <CartDrawerContext.Provider value={{ opened, setOpened }}>
      {children}
    </CartDrawerContext.Provider>
  );
};
