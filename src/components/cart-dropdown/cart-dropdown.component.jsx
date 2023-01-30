import "../button/button.styles.jsx";
import { CartItem } from "../cart-item/cart-item.component";
import { Button } from "../button/button.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import { itemsSelector } from "../../store/cart/cart.selector.js";
import { setOpened } from "../../store/cart/cart.action.js";

export const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(itemsSelector);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const onCheckoutLinkClickHandler = () => {
    dispatch(setOpened(false));
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
