import "../button/button.styles.jsx";
import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cart-drawer.context";
import { CartItem } from "../cart-item/cart-item.component";
import { Button } from "../button/button.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const { cartItems, setOpened } = useContext(CartDrawerContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const onCheckoutLinkClickHandler = () => {
    setOpened(false);
    goToCheckoutHandler();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </CartItems>
      <Button onClick={onCheckoutLinkClickHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
