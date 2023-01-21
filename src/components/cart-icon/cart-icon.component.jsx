import React, { useContext } from "react";
import "./cart-icon.component.scss";
import { ReactComponent as ShoppingItem } from "../../assets/shopping-bag.svg";
import { CartDrawerContext } from "../../contexts/cart-drawer.context";

export const CartIcon = () => {
  const { opened, setOpened } = useContext(CartDrawerContext);

  const onClickHandler = () => {
    setOpened(!opened);
  };

  const { cartItems } = useContext(CartDrawerContext);

  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingItem className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((sum, { quantity }) => sum + quantity, 0)}
      </span>
    </div>
  );
};
