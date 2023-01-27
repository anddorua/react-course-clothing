import React, { useContext } from "react";
import "./cart-icon.styles.jsx";
import { CartDrawerContext } from "../../contexts/cart-drawer.context";
import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";

export const CartIcon = () => {
  const { opened, setOpened } = useContext(CartDrawerContext);

  const onClickHandler = () => {
    setOpened(!opened);
  };

  const { cartItems } = useContext(CartDrawerContext);

  return (
    <CartIconContainer onClick={onClickHandler}>
      <StyledShoppingIcon />
      <ItemCount>
        {cartItems.reduce((sum, { quantity }) => sum + quantity, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};
